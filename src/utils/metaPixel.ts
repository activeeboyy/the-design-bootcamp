/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

/**
 * Helper to get cookie value by name
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
}

/**
 * Capture and persist Meta click ID (fbclid) and attribution cookies (_fbp, _fbc)
 */
export function getMetaAttribution(): { fbp: string | null; fbc: string | null; fbclid: string | null } {
  if (typeof window === 'undefined') {
    return { fbp: null, fbc: null, fbclid: null };
  }

  // Check URL params for fbclid
  const urlParams = new URLSearchParams(window.location.search);
  const fbclid = urlParams.get('fbclid');

  if (fbclid) {
    try {
      localStorage.setItem('meta_fbclid', fbclid);
      // Format fbc: fb.1.timestamp.fbclid
      const createdFbc = `fb.1.${Date.now()}.${fbclid}`;
      localStorage.setItem('meta_fbc', createdFbc);
      // Also try to set cookie for current domain
      document.cookie = `_fbc=${createdFbc};path=/;max-age=${90 * 24 * 60 * 60}`;
    } catch {
      // storage disabled
    }
  }

  const fbp = getCookie('_fbp') || (typeof localStorage !== 'undefined' ? localStorage.getItem('meta_fbp') : null);
  const fbc = getCookie('_fbc') || (typeof localStorage !== 'undefined' ? localStorage.getItem('meta_fbc') : null);
  const storedFbclid = fbclid || (typeof localStorage !== 'undefined' ? localStorage.getItem('meta_fbclid') : null);

  return { fbp, fbc, fbclid: storedFbclid };
}

/**
 * EVENT 2: INITIATECHECKOUT
 * Fired when a visitor clicks any CTA button leading to the Paystack payment page.
 * Does not block navigation.
 */
export function trackInitiateCheckout(params: {
  value?: number;
  currency?: string;
  contentName?: string;
} = {}): void {
  const value = params.value ?? 9500;
  const currency = params.currency ?? 'NGN';
  const contentName = params.contentName ?? 'The Design Bootcamp';

  // 1. Browser Meta Pixel standard event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', {
      value,
      currency,
      content_name: contentName,
      content_type: 'product',
      num_items: 1,
    });
  }

  // 2. Capture attribution details into local storage for checkout completion matching
  const attribution = getMetaAttribution();

  // 3. Optional server-side CAPI InitiateCheckout notification (fire-and-forget)
  try {
    fetch('/api/track-initiate-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        value,
        currency,
        contentName,
        fbp: attribution.fbp,
        fbc: attribution.fbc,
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
      keepalive: true,
    }).catch(() => {
      // Non-blocking
    });
  } catch {
    // Non-blocking
  }
}

/**
 * EVENT 3: PURCHASE (Browser Pixel)
 * Only called after Paystack confirms transaction was successful.
 * Uses exact event_id for server-side Conversions API deduplication.
 */
export function trackBrowserPurchase(params: {
  value: number;
  currency?: string;
  transactionReference: string;
  eventId: string;
  contentName?: string;
}): boolean {
  if (typeof window === 'undefined') return false;

  const { value, currency = 'NGN', transactionReference, eventId, contentName = 'The Design Bootcamp' } = params;
  const storageKey = `meta_purchase_tracked_${transactionReference}`;

  // Deduplication check: Do not fire again if already tracked in this browser session
  try {
    if (sessionStorage.getItem(storageKey) === 'true') {
      return false;
    }
  } catch {
    // Ignore storage errors
  }

  if (typeof window.fbq === 'function') {
    // IMPORTANT: Provide eventID in the 4th parameter for Meta Pixel deduplication
    window.fbq(
      'track',
      'Purchase',
      {
        value,
        currency,
        content_name: contentName,
        content_type: 'product',
        order_id: transactionReference,
        num_items: 1,
      },
      { eventID: eventId }
    );

    try {
      sessionStorage.setItem(storageKey, 'true');
      localStorage.setItem(storageKey, 'true');
    } catch {
      // Ignore
    }

    return true;
  }

  return false;
}
