/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { formatNaira, LAUNCH_PRICE_NAIRA, REGULAR_PRICE_NAIRA, PAYMENT_URL } from '../config';
import { useCountdown } from '../hooks/useCountdown';

interface OfferSectionProps {
  onJoinClick?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onJoinClick }) => {
  const { isExpired } = useCountdown();
  const currentPrice = isExpired ? REGULAR_PRICE_NAIRA : LAUNCH_PRICE_NAIRA;

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#090A0F] text-[#F3F4F6] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/15 blur-3xl pointer-events-none -z-10 rounded-full animate-pulse-glow" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eye-catching headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display mb-6">
          🚨 WAIT... {formatNaira(LAUNCH_PRICE_NAIRA)}?!
        </h2>

        {/* Copy */}
        <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
          <p className="text-2xl font-black text-amber-400 font-display">YES.</p>
          <p className="max-w-xl mx-auto">
            {!isExpired ? (
              <>For the first 50 days after launch, you can join <span className="font-bold text-white uppercase">THE DESIGN BOOTCAMP</span> for <span className="font-bold text-amber-400">{formatNaira(LAUNCH_PRICE_NAIRA)}</span>.</>
            ) : (
              <>The initial 50-day launch window has concluded. You can join <span className="font-bold text-white uppercase">THE DESIGN BOOTCAMP</span> today at the standard rate of <span className="font-bold text-white">{formatNaira(REGULAR_PRICE_NAIRA)}</span>.</>
            )}
          </p>
        </div>

        {/* Price transition card */}
        <div className="rounded-3xl bg-[#12141F] border border-amber-400/30 p-6 sm:p-10 shadow-2xl glow-card mb-8">
          <a
            href={PAYMENT_URL}
            onClick={onJoinClick}
            className="inline-flex items-center justify-center gap-4 sm:gap-6 mb-4 font-mono cursor-pointer hover:opacity-95 transition-opacity"
            title="Click to proceed to Paystack checkout"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl text-neutral-500 line-through decoration-red-500/80 decoration-2 font-bold">
              {formatNaira(REGULAR_PRICE_NAIRA)}
            </span>
            <span className="text-2xl sm:text-3xl text-neutral-400">→</span>
            <span className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight">
              {formatNaira(currentPrice)}
            </span>
          </a>

          <div className="space-y-1 mb-8 text-neutral-300 text-sm sm:text-base">
            <p className="font-medium text-white">No fake ‘SALE ENDS IN 2 HOURS’ nonsense.</p>
            <p className="text-neutral-400">
              {!isExpired ? "Just a genuine 50-day launch price." : "Transparent, one-time enrollment fee."}
            </p>
          </div>

          {/* Countdown timer */}
          <div className="mb-8">
            <CountdownTimer />
          </div>

          {/* Emotional transition */}
          <div className="border-t border-white/10 pt-6 mb-6">
            <p className="text-sm sm:text-base text-neutral-400 mb-2">
              So if you've been waiting for the right time...
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              👀 This is probably your sign.
            </p>
          </div>

          {/* CTA */}
          <a
            href={PAYMENT_URL}
            onClick={onJoinClick}
            className="w-full py-4 px-8 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-base sm:text-lg tracking-wide uppercase transition-all duration-200 shadow-xl shadow-amber-400/20 hover:shadow-amber-400/35 active:scale-[0.96] cursor-pointer flex items-center justify-center gap-2 group shimmer-btn"
          >
            <span>🚀 I'M READY — GIVE ME ACCESS</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
