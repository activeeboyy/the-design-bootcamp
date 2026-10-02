/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Compass, 
  Layers, 
  Type, 
  Scissors, 
  Globe2, 
  Cpu, 
  Eye, 
  Palette, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface Module {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  subtext?: string;
  topics?: string;
  isSpecial?: boolean;
}

const MODULES: Module[] = [
  {
    number: "01",
    title: "UNDERSTAND DESIGN",
    icon: Compass,
    description: "Before Photoshop, you'll learn how design actually works.",
    topics: "Graphic Design • Design Principles • Design Elements",
  },
  {
    number: "02",
    title: "GET COMFORTABLE WITH PHOTOSHOP",
    icon: Layers,
    description: "From downloading Photoshop to understanding the interface and the tools you'll actually need.",
    subtext: "No unnecessary complexity.",
  },
  {
    number: "03",
    title: "FINALLY UNDERSTAND FONTS",
    icon: Type,
    description: "Download them. Install them. Understand them.",
    subtext: "And start making better typography decisions.",
  },
  {
    number: "04",
    title: "MASTER BACKGROUND REMOVAL",
    icon: Scissors,
    description: "You'll learn about 4 different ways to remove backgrounds in Photoshop.",
    subtext: "Because one method doesn't work for every image.",
  },
  {
    number: "05",
    title: "DESIGNER WEBSITES YOU NEED TO KNOW",
    icon: Globe2,
    description: "Useful resources for fonts, images, inspiration and your everyday design workflow.",
  },
  {
    number: "06",
    title: "AI × GRAPHIC DESIGN",
    icon: Cpu,
    description: "Learn how AI can help you brainstorm, explore ideas and speed up parts of your creative workflow.",
  },
  {
    number: "07",
    title: "WHAT DO I DESIGN?",
    icon: Eye,
    description: "Learn modelling + redesigning and how to study existing designs so you don't have to stare at a blank canvas forever.",
  },
  {
    number: "08",
    title: "LET'S ACTUALLY DESIGN",
    icon: Palette,
    description: "Enough watching. We're opening Photoshop and creating.",
    subtext: "Your first Photoshop flyer + more practical designs.",
    isSpecial: true,
  },
];

interface CurriculumSectionProps {
  onJoinClick?: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onJoinClick }) => {
  return (
    <section id="curriculum" className="py-20 sm:py-28 lg:py-32 bg-[#0C0E16] text-[#F3F4F6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-amber-400 uppercase block mb-3 font-sans">
            Structured Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            🧠 WHAT'S INSIDE?
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base font-normal">
            8 focused, hype-free modules taking you from square zero to creating confident designs.
          </p>
        </div>

        {/* 8 Course Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {MODULES.map((mod) => {
            const Icon = mod.icon;

            if (mod.isSpecial) {
              // Highlighted 8th Module - Practical Application Showcase
              return (
                <div
                  key={mod.number}
                  className="md:col-span-2 relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1E1B15] via-[#161722] to-[#12131D] border-2 border-amber-400/50 shadow-2xl glow-amber overflow-hidden"
                >
                  <div className="absolute top-0 right-0 px-4 py-1.5 bg-amber-400 text-black text-xs font-black uppercase tracking-wider rounded-bl-2xl">
                    Final Practical Capstone
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-5 pt-2 sm:pt-0">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/20">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-amber-400 tracking-wider">
                          MODULE {mod.number}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-white uppercase tracking-wider">
                          Hands-on Project
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                        {mod.title}
                      </h3>

                      <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-medium">
                        {mod.description}
                      </p>

                      {mod.subtext && (
                        <div className="inline-block px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 font-semibold text-sm sm:text-base">
                          {mod.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={mod.number}
                className="rounded-2xl p-6 sm:p-7 bg-[#12141F] border border-white/5 hover:border-white/15 transition-all duration-200 hover:-translate-y-0.5 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-amber-400 tracking-wider">
                      MODULE {mod.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 font-display">
                    {mod.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {mod.description}
                  </p>

                  {mod.subtext && (
                    <p className="text-xs text-neutral-400 font-medium mt-2 italic">
                      {mod.subtext}
                    </p>
                  )}
                </div>

                {mod.topics && (
                  <div className="pt-3 border-t border-white/5 text-xs text-neutral-400 font-mono">
                    <span className="text-neutral-500 font-bold uppercase mr-1">Topics:</span>
                    <span>{mod.topics}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
