/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { KeyRound, PlayCircle, MessageCircle, PenTool, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 lg:py-32 bg-[#F6F6F4] text-[#111319] relative overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-light-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0F15] tracking-tight font-display mb-3">
            YOU'RE NOT BUYING A BUNCH OF VIDEOS.
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-neutral-700 font-display">
            You're joining a learning experience. 🤝🏽
          </p>
        </div>

        {/* 4 Connected Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Step 1 */}
          <div className="rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center font-extrabold text-sm">
                  1️⃣
                </span>
                <KeyRound className="w-5 h-5 text-neutral-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight font-display mb-3">
                GET YOUR COURSE ACCESS
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                You'll get access to your private Course Area, where you'll find your lessons.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-500">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Instant private credentials sent immediately</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center font-extrabold text-sm">
                  2️⃣
                </span>
                <PlayCircle className="w-5 h-5 text-neutral-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight font-display mb-3">
                START LEARNING 🎥
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Watch the lessons whenever you want. Pause. Rewatch. Practice.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-500">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Lifetime access to pre-recorded modules</span>
            </div>
          </div>

          {/* Step 3 - WhatsApp Group Card */}
          <div className="rounded-2xl bg-white border border-emerald-300/60 p-6 sm:p-8 shadow-sm flex flex-col justify-between md:row-span-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-extrabold text-sm">
                  3️⃣
                </span>
                <MessageCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight font-display mb-2">
                JOIN THE WHATSAPP GROUP 💬
              </h3>
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">
                You'll be added to the THE DESIGN BOOTCAMP WhatsApp Support Group.
              </p>

              {/* Exact dialogue rhythm */}
              <div className="space-y-2.5 text-sm sm:text-base text-neutral-800 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-neutral-900">Stuck?</span>
                  <span className="font-bold text-emerald-700">Ask.</span>
                </div>
                <div className="flex items-baseline justify-between border-t border-neutral-200/40 pt-2">
                  <span className="font-semibold text-neutral-900">Don't understand something?</span>
                  <span className="font-bold text-emerald-700">Ask.</span>
                </div>
                <div className="flex items-baseline justify-between border-t border-neutral-200/40 pt-2">
                  <span className="font-semibold text-neutral-900">Want feedback?</span>
                  <span className="font-bold text-emerald-700">Share your progress.</span>
                </div>
                <div className="flex items-baseline justify-between border-t border-neutral-200/40 pt-2">
                  <span className="font-semibold text-neutral-900">Need a little push?</span>
                  <span className="font-bold text-emerald-700">We're here.</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Real human mentorship & active peer community</span>
            </div>
          </div>

          {/* Step 4 - Practice */}
          <div className="rounded-2xl bg-neutral-900 text-white p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center font-extrabold text-sm">
                  4️⃣
                </span>
                <PenTool className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display mb-3">
                ACTUALLY PRACTICE 🎨
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                Because watching 20 hours of design tutorials doesn't make you a designer.
              </p>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-amber-400 font-extrabold text-base sm:text-lg font-display">
                Practising does.
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-neutral-400">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span>Actionable briefs & real Photoshop deliverables</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
