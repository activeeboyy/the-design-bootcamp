/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { formatNaira, LAUNCH_PRICE_NAIRA, REGULAR_PRICE_NAIRA, PAYMENT_URL } from '../config';
import { useCountdown } from '../hooks/useCountdown';

interface ClosingSectionProps {
  onJoinClick?: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onJoinClick }) => {
  const { isExpired } = useCountdown();
  const currentPrice = isExpired ? REGULAR_PRICE_NAIRA : LAUNCH_PRICE_NAIRA;

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#090A0F] text-[#F3F4F6] relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display mb-8">
          YOU'VE GOT TWO OPTIONS. 👀
        </h2>

        {/* The Two Paths narrative */}
        <div className="max-w-2xl mx-auto space-y-6 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-10">
          <p className="text-neutral-400">
            You can keep saying...
          </p>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-neutral-300 italic text-lg sm:text-xl">
            ‘I’ll learn graphic design someday.’
          </div>

          <p className="text-neutral-400 pt-2">
            Or you can finally say...
          </p>

          <div className="py-3 px-6 rounded-2xl bg-amber-400 text-black text-2xl sm:text-4xl font-black tracking-tight font-display inline-block shadow-lg shadow-amber-400/20">
            “I'M STARTING.”
          </div>
        </div>

        {/* Dispelling misconceptions */}
        <div className="max-w-xl mx-auto p-6 rounded-2xl bg-[#11131E] border border-white/5 mb-8 text-left space-y-2.5 text-sm sm:text-base text-neutral-300">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <span>You don't need to know everything.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <span>You don't need to be naturally creative.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <span>You don't need the perfect laptop.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <span>You don't need a portfolio.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <span>You don't need experience.</span>
          </div>
        </div>

        {/* Core punchline */}
        <div className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-display mb-12">
          You just need to start. 🚀
        </div>

        {/* Final Decision Box */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-[#121422] border-2 border-amber-400/40 p-6 sm:p-10 shadow-2xl glow-amber text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Official Enrolment
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                THE DESIGN BOOTCAMP
              </h3>
            </div>
            <a 
              href={PAYMENT_URL}
              onClick={onJoinClick}
              className="text-left sm:text-right cursor-pointer hover:opacity-95 transition-opacity"
              title="Click to proceed to Paystack checkout"
            >
              <span className="text-3xl sm:text-4xl font-black text-white font-mono block">
                {formatNaira(currentPrice)}
              </span>
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                {!isExpired ? "FOR THE FIRST 50 DAYS" : "ONE-TIME PAYMENT"}
              </span>
            </a>
          </div>

          {/* Benefits list */}
          <div className="space-y-3 mb-8 text-neutral-200 text-sm sm:text-base font-medium">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>🎨 Learn the fundamentals</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>💻 Understand Photoshop</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>🧠 Learn how designers think</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>🔥 Build through practice</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>💬 Get support while learning</span>
            </div>
          </div>

          {/* Countdown timer */}
          <div className="mb-6 pt-6 border-t border-white/10 text-center">
            <CountdownTimer />
          </div>

          {/* Action Button */}
          <a
            href={PAYMENT_URL}
            onClick={onJoinClick}
            className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-base sm:text-lg tracking-wide uppercase transition-all duration-200 shadow-xl shadow-amber-400/20 hover:shadow-amber-400/35 active:scale-[0.96] cursor-pointer flex items-center justify-center gap-2 group shimmer-btn mb-3"
          >
            <span>🎨 START MY DESIGN JOURNEY</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </a>

          {/* After 50 days notice */}
          <p className="text-center text-xs text-neutral-400 font-medium">
            {!isExpired ? `After 50 days → ${formatNaira(REGULAR_PRICE_NAIRA)}` : "Course Area + WhatsApp Support Included"}
          </p>
        </div>
      </div>
    </section>
  );
};
