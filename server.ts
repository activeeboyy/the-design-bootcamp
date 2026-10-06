/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import dotenv from 'dotenv';
import fs from 'fs';

// Load environment variables from .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Configuration
const META_PIXEL_ID = process.env.META_PIXEL_ID || '1270731831846532';
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || '';
const META_TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE || '';
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || '';

// Middleware: Parse JSON and capture raw buffer for Paystack webhook signature verification
app.use(
  express.json({
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: true }));

// ============================================================================
// DEDUPLICATION STORAGE
// ============================================================================
// Ensure one successful Paystack transaction produces only ONE Purchase conversion
const processedTransactions = new Set<string>();

// Helper to normalize and hash for Meta CAPI
function hashSha256(value?: string | null): string | undefined {
  if (!value) return undefined;
  const clean = value.trim().toLowerCase();
  if (!clean) return undefined;
  return crypto.createHash('sha256').update(clean).digest('hex');
}

// Client IP resolver
function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || '';
}

// ============================================================================
// META CONVERSIONS API (CAPI) DISPATCHER
// ============================================================================
interface MetaEventPayload {
  eventName: string;
  eventId: string;
  eventTime?: number;
  eventSourceUrl?: string;
  userData?: {
    email?: string;
    phone?: string;
    clientIp?: string;
    userAgent?: string;
    fbp?: string | null;
    fbc?: string | null;
  };
  customData?: {
    value?: number;
    currency?: string;
    contentName?: string;
    orderId?: string;
  };
}

async function sendMetaConversionsApiEvent(payload: MetaEventPayload): Promise<{ success: boolean; data?: any; error?: string }> {
  if (!META_ACCESS_TOKEN) {
    console.warn('[Meta CAPI] Skipped: META_ACCESS_TOKEN is not configured on the server.');
    return { success: false, error: 'META_ACCESS_TOKEN not configured' };
  }

  const { eventName, eventId, eventTime = Math.floor(Date.now() / 1000), eventSourceUrl, userData = {}, customData = {} } = payload;

  const eventPayload: any = {
    event_name: eventName,
    event_time: eventTime,
    event_id: eventId,
    event_source_url: eventSourceUrl || 'https://zentra.ng/',
    action_source: 'website',
    user_data: {
      client_ip_address: userData.clientIp,
      client_user_agent: userData.userAgent,
      ...(userData.fbp ? { fbp: userData.fbp } : {}),
      ...(userData.fbc ? { fbc: userData.fbc } : {}),
      ...(userData.email ? { em: [hashSha256(userData.email)] } : {}),
      ...(userData.phone ? { ph: [hashSha256(userData.phone.replace(/[^0-9]/g, ''))] } : {}),
    },
    custom_data: {
      ...(customData.value !== undefined ? { value: customData.value } : {}),
      ...(customData.currency ? { currency: customData.currency } : { currency: 'NGN' }),
      ...(customData.contentName ? { content_name: customData.contentName } : { content_name: 'The Design Bootcamp' }),
      ...(customData.orderId ? { order_id: customData.orderId } : {}),
    },
  };

  const bodyData: any = {
    data: [eventPayload],
  };

  // Attach test event code if provided in environment
  if (META_TEST_EVENT_CODE) {
    bodyData.test_event_code = META_TEST_EVENT_CODE;
  }

  try {
    const metaUrl = `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`;
    const response = await fetch(metaUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData),
    });

    const result = await response.json();
    if (!response.ok) {
      console.error('[Meta CAPI] Error response:', result);
      return { success: false, error: JSON.stringify(result) };
    }

    console.log(`[Meta CAPI] Event ${eventName} (ID: ${eventId}) dispatched successfully.`);
    return { success: true, data: result };
  } catch (err: any) {
    console.error('[Meta CAPI] Exception during event dispatch:', err);
    return { success: false, error: err?.message || 'Network error' };
  }
}

// ============================================================================
// API ROUTE 1: PAYSTACK WEBHOOK (Authoritative server-to-server confirmation)
// ============================================================================
app.post('/api/paystack-webhook', async (req: Request, res: Response) => {
  // 1. Verify Paystack Signature if secret key is present
  if (PAYSTACK_SECRET_KEY) {
    const signature = req.headers['x-paystack-signature'];
    const rawBody = (req as any).rawBody;

    if (!signature || !rawBody) {
      return res.status(400).json({ error: 'Missing Paystack signature or body' });
    }

    const hash = crypto.createHmac('sha512', PAYSTACK_SECRET_KEY).update(rawBody).digest('hex');
    if (hash !== signature) {
      console.error('[Paystack Webhook] Invalid signature match');
      return res.status(401).json({ error: 'Invalid signature' });
    }
  }

  const event = req.body;

  // Process successful charges
  if (event && event.event === 'charge.success') {
    const data = event.data;
    const reference = data.reference;
    const amountInNaira = data.amount ? data.amount / 100 : 9500;
    const currency = data.currency || 'NGN';
    const email = data.customer?.email;
    const phone = data.customer?.phone;
    const eventId = `purchase_${reference}`;

    // Verify currency
    if (currency !== 'NGN') {
      console.warn(`[Paystack Webhook] Non-NGN transaction received: ${currency}`);
    }

    // Deduplication check: Has this transaction already been processed?
    if (processedTransactions.has(reference)) {
      console.log(`[Paystack Webhook] Reference ${reference} already processed. Skipping duplicate CAPI.`);
      return res.status(200).json({ status: 'already_processed' });
    }

    // Mark as processed
    processedTransactions.add(reference);

    // Send Meta Conversions API Purchase Event
    await sendMetaConversionsApiEvent({
      eventName: 'Purchase',
      eventId,
      eventSourceUrl: 'https://zentra.ng/',
      userData: {
        email,
        phone,
        clientIp: data.ip_address || getClientIp(req),
      },
      customData: {
        value: amountInNaira,
        currency,
        contentName: 'The Design Bootcamp',
        orderId: reference,
      },
    });

    console.log(`[Paystack Webhook] Verified purchase recorded for ${reference}: ₦${amountInNaira}`);
  }

  // Acknowledge receipt to Paystack
  return res.status(200).json({ received: true });
});

// ============================================================================
// API ROUTE 2: PAYSTACK CALLBACK VERIFICATION (When visitor returns to site)
// ============================================================================
app.get('/api/verify-payment', async (req: Request, res: Response) => {
  const reference = (req.query.reference || req.query.trxref) as string;
  const fbp = req.query.fbp as string | undefined;
  const fbc = req.query.fbc as string | undefined;

  if (!reference) {
    return res.status(400).json({ verified: false, message: 'Transaction reference is required.' });
  }

  const eventId = `purchase_${reference}`;
  const clientIp = getClientIp(req);
  const userAgent = req.headers['user-agent'] || '';

  // If secret key is not set, provide guidance
  if (!PAYSTACK_SECRET_KEY) {
    console.warn('[Verify Payment] PAYSTACK_SECRET_KEY is not configured on the server.');
    return res.status(500).json({
      verified: false,
      message: 'Paystack Secret Key is not configured on the server.',
    });
  }

  try {
    // 1. Verify directly with Paystack REST API
    const paystackRes = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    });

    const result = await paystackRes.json();

    if (!paystackRes.ok || !result.status || !result.data) {
      return res.status(400).json({
        verified: false,
        message: result.message || 'Transaction could not be verified with Paystack.',
      });
    }

    const txData = result.data;

    // 2. Ensure status is 'success'
    if (txData.status !== 'success') {
      return res.status(400).json({
        verified: false,
        status: txData.status,
        message: `Transaction status is '${txData.status}', not 'success'.`,
      });
    }

    // 3. Ensure currency is NGN
    if (txData.currency !== 'NGN') {
      return res.status(400).json({
        verified: false,
        message: `Unexpected currency: ${txData.currency}`,
      });
    }

    const amountInNaira = txData.amount ? txData.amount / 100 : 9500;
    const alreadyProcessed = processedTransactions.has(reference);

    // 4. Send Meta CAPI Purchase event if not already sent by webhook or earlier call
    if (!alreadyProcessed) {
      processedTransactions.add(reference);

      await sendMetaConversionsApiEvent({
        eventName: 'Purchase',
        eventId,
        eventSourceUrl: req.headers.referer || 'https://zentra.ng/',
        userData: {
          email: txData.customer?.email,
          phone: txData.customer?.phone,
          clientIp,
          userAgent,
          fbp,
          fbc,
        },
        customData: {
          value: amountInNaira,
          currency: 'NGN',
          contentName: 'The Design Bootcamp',
          orderId: reference,
        },
      });
    }

    // 5. Return verification details to the client
    return res.status(200).json({
      verified: true,
      reference,
      amount: amountInNaira,
      currency: txData.currency,
      eventId,
      alreadyTracked: alreadyProcessed,
      customer: {
        email: txData.customer?.email,
        firstName: txData.customer?.first_name,
        lastName: txData.customer?.last_name,
      },
    });
  } catch (err: any) {
    console.error('[Verify Payment] Exception:', err);
    return res.status(500).json({
      verified: false,
      message: err?.message || 'Server error verifying payment.',
    });
  }
});

// ============================================================================
// API ROUTE 3: INITIATE CHECKOUT CAPI EVENT
// ============================================================================
app.post('/api/track-initiate-checkout', async (req: Request, res: Response) => {
  const { value = 9500, currency = 'NGN', contentName = 'The Design Bootcamp', fbp, fbc, url, userAgent } = req.body;
  const clientIp = getClientIp(req);
  const eventId = `ic_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  // Send server-side InitiateCheckout to improve event match quality
  sendMetaConversionsApiEvent({
    eventName: 'InitiateCheckout',
    eventId,
    eventSourceUrl: url || 'https://zentra.ng/',
    userData: {
      clientIp,
      userAgent: userAgent || (req.headers['user-agent'] as string),
      fbp,
      fbc,
    },
    customData: {
      value,
      currency,
      contentName,
    },
  }).catch(() => {
    // Non-blocking
  });

  return res.status(200).json({ success: true, eventId });
});

// ============================================================================
// API ROUTE 4: TRACKING STATUS (Diagnostic check, no secrets exposed)
// ============================================================================
app.get('/api/tracking-status', (_req: Request, res: Response) => {
  return res.status(200).json({
    metaPixelId: META_PIXEL_ID,
    metaCapiConfigured: Boolean(META_ACCESS_TOKEN),
    paystackVerificationConfigured: Boolean(PAYSTACK_SECRET_KEY),
    testEventCodeConfigured: Boolean(META_TEST_EVENT_CODE),
    processedTransactionsCount: processedTransactions.size,
  });
});

// ============================================================================
// VITE MIDDLEWARE (Dev) & STATIC SERVING (Prod)
// ============================================================================
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Zentra Server] Running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[Zentra Server] Failed to start:', err);
  process.exit(1);
});
