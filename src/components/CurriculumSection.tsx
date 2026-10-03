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
  ArrowRight,
  Video,
  Share2,
  Briefcase,
  Flame
} from 'lucide-react';

interface Module {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  subtext?: string;
  topics?: string;
  isSpecial?: boolean;
  badge?: string;
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
    title: "LET'S ACTUALLY DESIGN: YOUR FIRST FLYER",
    icon: Palette,
    description: "Enough watching. We're opening Photoshop and creating your first complete design project from scratch.",
    subtext: "Your first Photoshop flyer + foundational design mechanics.",
    isSpecial: true,
    badge: "Practical Project 1",
  },
  {
    number: "09",
    title: "PRACTICAL WEBINAR FLYER DESIGN",
    icon: Video,
    description: "In this part, we will be designing a high-converting, professional webinar flyer step-by-step in Photoshop.",
    subtext: "Speaker framing, typography hierarchy, event badge & lighting effects.",
    isSpecial: true,
    badge: "Practical Project 2 • Webinar Flyer",
  },
  {
    number: "10",
    title: "FULL-BLOWN SOCIAL MEDIA DESIGN",
    icon: Share2,
    description: "We will be working on a full-blown social media design — crafting scroll-stopping promotional creatives and brand assets.",
    subtext: "Visual hooks, multi-format sizing & brand consistency for client campaigns.",
    isSpecial: true,
    badge: "Practical Project 3 • Social Media",
  },
  {
    number: "11",
    title: "TEXT EFFECTS & NIGHTLIFE / CLUB FLYER DESIGN",
    icon: Flame,
    description: "We will be working with advanced text effects and designing high-energy nightlife flyers for events, lounges, and night clubs. You'll learn exactly how and what it takes to achieve that dark, glowing, premium club vibe.",
    subtext: "Neon glows, 3D text styling, particle effects, smoke & dramatic lighting.",
    isSpecial: true,
    badge: "Practical Project 4 • Nightlife & Events",
  },
  {
    number: "12",
    title: "BUILD YOUR PORTFOLIO TO LAND DESIGN GIGS",
    icon: Briefcase,
    description: "Learn how to package your bootcamp designs into a winning portfolio, present your work like a pro, and start landing paid design gigs.",
    subtext: "Free portfolio setup, client pitch scripts & pricing your design work.",
    isSpecial: true,
    badge: "Career Blueprint • Monetization",
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
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            🧠 WHAT'S INSIDE?
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-300 text-sm sm:text-base font-normal">
            Packed with step-by-step video lessons and practical modules taking you from square zero to creating confident designs.
          </p>
        </div>

        {/* 8 Course Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {MODULES.map((mod) => {
            const Icon = mod.icon;

            if (mod.isSpecial) {
              // Highlighted Practical Application Showcase
              return (
                <div
                  key={mod.number}
                  className="md:col-span-2 relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1E1B15] via-[#161722] to-[#12131D] border-2 border-amber-400/40 hover:border-amber-400/70 shadow-2xl glow-amber overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-400/15 group"
                >
                  <div className="absolute top-0 right-0 px-4 py-1.5 bg-amber-400 text-black text-xs font-black uppercase tracking-wider rounded-bl-2xl shadow-sm">
                    {mod.badge || 'Practical Project'}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-5 pt-2 sm:pt-0">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/20 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
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

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display group-hover:text-amber-300 transition-colors duration-200">
                        {mod.title}
                      </h3>

                      <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-medium">
                        {mod.description}
                      </p>

                      {mod.subtext && (
                        <div className="inline-block px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 font-semibold text-sm sm:text-base group-hover:bg-amber-400/15 transition-colors">
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
                className="rounded-2xl p-6 sm:p-7 bg-[#12141F] border border-white/5 hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1 shadow-sm space-y-4 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-amber-400 tracking-wider">
                      MODULE {mod.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-amber-400/30 flex items-center justify-center text-neutral-300 group-hover:text-amber-400 group-hover:scale-105 transition-all duration-200">
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

        {/* Real-World Reassurance Box */}
        <div className="mt-10 sm:mt-14 rounded-3xl bg-gradient-to-r from-[#171A29] via-[#131522] to-[#171A29] border border-amber-400/30 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl glow-card">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-4">
            You don't need 100 past clients to start landing paid gigs.
          </h3>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            You just need 3 to 5 solid, well-presented designs (like the corporate flyer, webinar visual, high-energy nightlife flyer, and social media campaigns you build in this bootcamp) and the confidence to show them to people who need them.
          </p>
        </div>
      </div>
    </section>
  );
};
