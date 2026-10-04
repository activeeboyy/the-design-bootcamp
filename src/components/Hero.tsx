/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Clock } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { BootcampVideo } from './BootcampVideo';
import { formatNaira, LAUNCH_PRICE_NAIRA, REGULAR_PRICE_NAIRA, PAYMENT_URL } from '../config';
import { useCountdown } from '../hooks/useCountdown';

interface HeroProps {
  onJoinClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  const { isExpired } = useCountdown();
  const currentPrice = isExpired ? REGULAR_PRICE_NAIRA : LAUNCH_PRICE_NAIRA;

  return (
    <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-32 overflow-hidden bg-[#090A0F] bg-grid-pattern">
      {/* Background ambient lighting - strictly CSS gradients, no images */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-amber-400/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-orange-600/5 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow text with subtle live pulse indicator */}
        <div className="inline-flex items-center justify-center gap-2.5 mb-6 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-amber-400 uppercase font-sans">
            THE DESIGN BOOTCAMP
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-6 font-display [text-wrap:balance]">
          You don't need to be ‘creative’ to become a designer.
        </h1>

        {/* Emphasized subhead */}
        <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-amber-400 tracking-tight mb-6 sm:mb-8 font-display">
          You just need to START. 🚀
        </div>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed mb-8 [text-wrap:balance]">
          Learn the foundations of graphic design, understand Adobe Photoshop from the ground up, and start creating designs you're actually proud of.
        </p>

        {/* Three short benefit statements */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 text-sm sm:text-base font-medium text-neutral-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>No previous Photoshop experience.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>No design degree.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>No complicated jargon.</span>
          </div>
        </div>

        {/* Roadmap statement with subtle floating animation */}
        <div className="inline-block px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-200 text-sm sm:text-base font-medium mb-4 shadow-sm animate-float">
          Just you + the right roadmap + consistent practice. 💻✨
        </div>

        {/* YOUTUBE VIDEO WALKTHROUGH PLACEHOLDER & PLAYER */}
        <BootcampVideo />

        {/* PRICE CARD - directly inside / underneath hero */}
        <div className="max-w-xl mx-auto rounded-3xl bg-[#11131F] border border-amber-400/20 p-6 sm:p-8 shadow-2xl relative glow-card hover:border-amber-400/40 transition-colors duration-300">
          {/* Subtle top accent highlight */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          {/* Launch price tag */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 mb-3">
            <span>🚨 LAUNCH PRICE</span>
          </div>

          {/* Price display with crossed-out original price */}
          <a
            href={PAYMENT_URL}
            onClick={onJoinClick}
            className="inline-flex items-baseline justify-center gap-3 mb-2 cursor-pointer hover:opacity-95 transition-opacity"
            title="Click to proceed to Paystack checkout"
          >
            <span className="font-mono text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {formatNaira(currentPrice)}
            </span>
            {!isExpired && (
              <span className="text-xl sm:text-2xl font-bold text-neutral-500 line-through decoration-red-500/80 decoration-2">
                {formatNaira(REGULAR_PRICE_NAIRA)}
              </span>
            )}
          </a>

          <p className="text-xs sm:text-sm text-neutral-400 mb-6 font-medium">
            {!isExpired ? "Only for the first 50 days after launch." : "Standard enrollment pricing now active."}
          </p>

          {/* Countdown timer */}
          <div className="mb-6">
            <CountdownTimer />
          </div>

          {/* Prominent CTA button with shimmer & responsive tactile click */}
          <a
            href={PAYMENT_URL}
            onClick={onJoinClick}
            className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-base sm:text-lg tracking-wide uppercase transition-all duration-200 shadow-xl shadow-amber-400/20 hover:shadow-amber-400/35 active:scale-[0.96] cursor-pointer flex items-center justify-center gap-2 group shimmer-btn"
          >
            <span>🎨 JOIN THE DESIGN BOOTCAMP — {formatNaira(currentPrice)}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </a>

          {/* Under button reassurance */}
          <p className="mt-4 text-xs text-neutral-400 font-medium">
            One-time payment • Pre-recorded lessons • Course Area + WhatsApp Support
          </p>
        </div>
      </div>
    </section>
  );
};
