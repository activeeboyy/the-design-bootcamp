/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Palette, GraduationCap, Building2, Rocket, Check } from 'lucide-react';

interface Audience {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const AUDIENCES: Audience[] = [
  {
    title: "Complete Beginners",
    description: "People who have never opened Photoshop before.",
    icon: Sparkles,
  },
  {
    title: "Canva Designers",
    description: "People who already design with Canva and want to take their skills further.",
    icon: Palette,
  },
  {
    title: "Students",
    description: "People who want to develop a practical creative skill.",
    icon: GraduationCap,
  },
  {
    title: "Business Owners",
    description: "People who want to understand design and create better content for their business.",
    icon: Building2,
  },
  {
    title: "Future Freelancers",
    description: "People who want to begin building their design skills.",
    icon: Rocket,
  },
];

export const WhoThisIsFor: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#090A0F] text-[#F3F4F6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            WHO THIS IS FOR
          </h2>
          <p className="max-w-xl mx-auto text-neutral-400 text-sm sm:text-base">
            No design background required. If you want to learn Photoshop and build genuine visual competence, you belong here.
          </p>
        </div>

        {/* 5 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCES.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === AUDIENCES.length - 1;

            return (
              <div
                key={item.title}
                className={`p-6 sm:p-7 rounded-2xl bg-[#11131E] border border-white/5 hover:border-amber-400/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 flex flex-col justify-between group ${
                  isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-400/15 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-400">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Curriculum aligned for this level</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
