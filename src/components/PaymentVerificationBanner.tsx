/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Sparkles, X } from 'lucide-react';
import { getMetaAttribution, trackBrowserPurchase } from '../utils/metaPixel';
import { formatNaira } from '../config';

interface VerificationResult {
  verified: boolean;
  reference?: string;
  amount?: number;
  currency?: string;
  eventId?: string;
  alreadyTracked?: boolean;
  message?: string;
  customer?: {
    email?: string;
    firstName?: string;
    lastName?: string;
  };
}

export const PaymentVerificationBanner: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'verifying' | 'success' | 'failed'>('idle');
  const [data, setData] = useState<VerificationResult | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get('reference') || urlParams.get('trxref');

    if (!reference) return;

    setStatus('verifying');
    const { fbp, fbc } = getMetaAttribution();

    // Call server verification endpoint
    const query = new URLSearchParams({
      reference,
      ...(fbp ? { fbp } : {}),
      ...(fbc ? { fbc } : {}),
    });

    fetch(`/api/verify-payment?${query.toString()}`)
      .then((res) => res.json())
      .then((res: VerificationResult) => {
        if (res.verified) {
          setStatus('success');
          setData(res);

          // Fire Browser Pixel Purchase event with the exact same eventId used by server CAPI
          if (res.eventId && res.amount) {
            trackBrowserPurchase({
              value: res.amount,
              currency: res.currency || 'NGN',
              transactionReference: reference,
              eventId: res.eventId,
            });
          }

          // Clean up the URL parameters so refreshing doesn't re-query
          try {
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
          } catch {
            // Ignore
          }
        } else {
          setStatus('failed');
          setData(res);
        }
      })
      .catch((err) => {
        setStatus('failed');
        setData({
          verified: false,
          message: err?.message || 'Could not reach verification server.',
        });
      });
  }, []);

  if (dismissed || status === 'idle') {
    return null;
  }

  return (
    <aside
      aria-label="Payment Verification Notice"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#121422] border-2 border-amber-400/50 p-6 sm:p-8 shadow-2xl glow-card text-center">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'verifying' && (
          <div className="py-8 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Verifying Your Payment with Paystack...
            </h3>
            <p className="text-sm text-neutral-300">
              Please wait a moment while we confirm your transaction and activate your bootcamp access.
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="py-4 space-y-5">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Payment Confirmed</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                🎉 Welcome to The Design Bootcamp!
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-medium">
                Your payment of <span className="text-amber-400 font-bold">{formatNaira(data?.amount ?? 9500)}</span> has been verified.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left text-xs sm:text-sm text-neutral-300 space-y-2">
              <div className="flex justify-between items-center text-neutral-400">
                <span>Reference:</span>
                <span className="font-mono text-white select-all">{data?.reference}</span>
              </div>
              <div className="flex justify-between items-center text-neutral-400">
                <span>Access:</span>
                <span className="text-emerald-400 font-medium">Pre-recorded lessons + WhatsApp Group</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="w-full py-3.5 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-base tracking-wide transition-all shadow-lg shadow-amber-400/20 cursor-pointer"
              >
                Continue to Bootcamp Details
              </button>
            </div>
          </div>
        )}

        {status === 'failed' && (
          <div className="py-4 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Payment Verification Notice
            </h3>
            <p className="text-sm text-neutral-300">
              {data?.message || 'We could not automatically confirm this transaction. If you completed payment, your access will be activated via email.'}
            </p>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="py-2.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
