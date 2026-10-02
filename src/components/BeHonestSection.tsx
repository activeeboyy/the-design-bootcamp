/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export const BeHonestSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F6F6F4] text-[#111319] relative overflow-hidden">
      {/* Subtle light background grid lines */}
      <div className="absolute inset-0 bg-light-grid-pattern pointer-events-none opacity-60" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-3 font-sans">
            A Moment of Truth
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0D0F15] tracking-tight font-display">
            👀 BE HONEST...
          </h2>
        </div>

        {/* Conversational Narrative Box */}
        <div className="space-y-8 sm:space-y-10 text-base sm:text-lg lg:text-xl text-neutral-800 leading-relaxed font-normal">
          <p className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-display">
            You've probably done this before.
          </p>

          {/* The Relatable Cycle Step Card */}
          <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-8 shadow-sm">
            <div className="space-y-3 font-mono text-sm sm:text-base text-neutral-800">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center text-xs font-bold">1</span>
                <span>Saved a YouTube tutorial.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center text-xs font-bold">2</span>
                <span>Watched half of it.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center text-xs font-bold">3</span>
                <span>Opened Photoshop.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center text-xs font-bold">4</span>
                <span>Saw a million tools.</span>
              </div>
              <div className="flex items-center gap-3 font-semibold text-neutral-900 pt-1">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">5</span>
                <span>Closed Photoshop. 😂</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-100/70 border border-neutral-200/60">
            <p className="mb-2 text-neutral-700">
              Or maybe you've been designing with Canva and your phone for a while and you've started thinking:
            </p>
            <p className="text-lg sm:text-xl font-semibold text-neutral-900 italic font-display">
              ‘I think I'm ready to take this more seriously.’
            </p>
          </div>

          {/* Maybe statements */}
          <div className="pt-4 space-y-3">
            <p className="text-sm font-bold uppercase tracking-wider text-neutral-400">
              Sound like you?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white border border-neutral-200/60 shadow-xs flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                <span className="font-medium text-neutral-900 text-sm sm:text-base">
                  Maybe you want to design better.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-neutral-200/60 shadow-xs flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                <span className="font-medium text-neutral-900 text-sm sm:text-base">
                  Maybe you want to start freelancing.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-neutral-200/60 shadow-xs flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                <span className="font-medium text-neutral-900 text-sm sm:text-base">
                  Maybe you want to create better content for your business.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-neutral-200/60 shadow-xs flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                <span className="font-medium text-neutral-900 text-sm sm:text-base">
                  Maybe you simply want to finally understand what all these designers are doing.
                </span>
              </div>
            </div>
          </div>

          {/* Relief & Reassurance */}
          <div className="pt-6 border-t border-neutral-200/80 text-center space-y-4">
            <p className="text-lg sm:text-xl text-neutral-600 font-medium">
              Whatever brought you here...
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display">
              You're not too late.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-neutral-900 text-amber-400 text-lg sm:text-xl font-extrabold font-display shadow-md">
              <span>You're just getting started. 🎨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
