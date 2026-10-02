/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Smartphone, Sparkles, Users, Award, Briefcase, Compass, ArrowDown } from 'lucide-react';

export const FranklinStory: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-[#090A0F] text-[#F3F4F6] relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-amber-500/5 blur-3xl pointer-events-none rounded-full -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-amber-400 uppercase block mb-3 font-sans">
            Founder Story
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-3">
            👋🏽 HI, I'M FRANKLIN.
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-neutral-300 font-display">
            And I didn't start with Photoshop.
          </p>
        </div>

        {/* Narrative Flow with Storyline Track - Strictly No Photos */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          {/* Chapter 1: The Smartphone Era */}
          <div className="relative">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#090A0F]" />
            <div className="rounded-2xl bg-[#11131E] border border-white/5 p-6 sm:p-8 space-y-4">
              <div className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 font-display">
                <span>I started with a smartphone. 📱</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                No fancy setup.<br />
                No expensive computer.<br />
                Just curiosity, Canva, plenty of practice and a genuine desire to get better.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                I spent years designing with my phone.
              </p>
              <div className="pt-2 border-t border-white/5">
                <p className="text-sm sm:text-base font-medium text-amber-300/90">
                  Eventually, I wasn't just making pretty flyers. I learned how to create designs that communicate, attract attention and actually convert.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2: The Turning Point */}
          <div className="relative">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-neutral-600 border-4 border-[#090A0F]" />
            <div className="rounded-2xl bg-[#11131E] border border-white/5 p-6 sm:p-8 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                The Turning Point
              </p>
              <p className="text-base sm:text-lg text-white font-medium">
                Then something unexpected happened...
              </p>
              <blockquote className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-amber-400 text-neutral-200 italic text-base sm:text-lg">
                ‘Franklin, please teach me how you do this.’
              </blockquote>
              <p className="text-sm sm:text-base text-neutral-300">
                So I did.
              </p>
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-neutral-200 text-sm sm:text-base leading-relaxed">
                I created my first course, <span className="font-semibold text-white">The Smartphone Graphic Design Blueprint</span>, and went on to teach <span className="font-bold text-amber-400">800+ people</span> how to design using their smartphones.
              </div>
            </div>
          </div>

          {/* Chapter 3: Fast Forward */}
          <div className="relative">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#090A0F]" />
            <div className="rounded-2xl bg-[#11131E] border border-white/5 p-6 sm:p-8 space-y-5">
              <p className="text-lg sm:text-xl font-bold text-white font-display">
                Fast forward...
              </p>

              {/* Clean Editorial Milestone List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-300">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="font-medium text-white">6+ years in graphic design.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="font-medium text-white">2+ years in social media management.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>Work with brands across different industries.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>Remote design opportunities.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>Creative projects & a whole lot of lessons learned along the way.</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed pt-2">
                Now I'm taking those lessons and putting the foundation I wish I had when I started into one beginner-friendly course.
              </p>
            </div>
          </div>
        </div>

        {/* Transition statement */}
        <div className="mt-14 text-center">
          <div className="inline-block p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181B2B] to-[#10121C] border border-amber-400/30 shadow-2xl">
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase block mb-2">
              The Culmination
            </span>
            <div className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              That's THE DESIGN BOOTCAMP. 🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
