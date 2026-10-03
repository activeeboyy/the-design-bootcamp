/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Briefcase, 
  FolderCheck, 
  Target, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Eye,
  FileText
} from 'lucide-react';
import { PAYMENT_URL, formatNaira, LAUNCH_PRICE_NAIRA } from '../config';

interface PortfolioSectionProps {
  onJoinClick?: () => void;
}

const STRATEGIES = [
  {
    number: "01",
    title: "Turn Bootcamp Designs into Paid Case Studies",
    icon: FolderCheck,
    description: "Don't just post a flat flyer. You'll learn how to mock up your webinar flyers and social media creatives on real devices and write short project breakdowns that make clients say: ‘I need this designer.’",
    highlight: "Show client-ready results, not just pictures."
  },
  {
    number: "02",
    title: "Build a High-Converting Portfolio for Free",
    icon: Eye,
    description: "You don't need to spend ₦30,000+ on web hosting or a domain name. We'll show you how to set up clean, professional portfolios on Behance and Notion that look like a million bucks.",
    highlight: "Zero extra software costs."
  },
  {
    number: "03",
    title: "The DM & Outreach Script that Actually Works",
    icon: Send,
    description: "Get the exact framework to reach out to local businesses, brand owners, churches, and event creators on Instagram and WhatsApp without feeling spammy or desperate.",
    highlight: "Tested scripts you can copy and personalize."
  },
  {
    number: "04",
    title: "How to Price Your Work & Collect Deposits",
    icon: DollarSign,
    description: "Stop undercharging or designing for free ‘exposure.’ Learn how to price one-off flyers, bundle monthly social media retainers, and always collect upfront deposits before you begin.",
    highlight: "50% upfront standard practice."
  }
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onJoinClick }) => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#0A0C14] text-[#F3F4F6] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display mb-6 [text-wrap:balance]">
            HOW TO BUILD A PORTFOLIO THAT LANDS GIGS. 💼
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed [text-wrap:balance]">
            Learning Photoshop is only half the battle. The other half is packaging what you create so paying clients actually hire you.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-18">
          {STRATEGIES.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.number}
                className="rounded-3xl p-7 sm:p-9 bg-[#111320] border border-white/5 hover:border-amber-400/30 transition-all duration-200 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-amber-400">
                      STEP {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mb-3">
                    {item.title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300/90">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-World Reassurance Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#171A29] via-[#131522] to-[#171A29] border border-amber-400/30 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl glow-card">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-4">
            You don't need 100 past clients to start landing paid gigs.
          </h3>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            You just need 3 to 5 solid, well-presented designs (like the corporate flyer, webinar visual, high-energy nightlife flyer, and social media campaigns you build in this bootcamp) and the confidence to show them to people who need them.
          </p>

          <a
            href={PAYMENT_URL}
            onClick={onJoinClick}
            className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-base sm:text-lg tracking-wide uppercase transition-all duration-200 shadow-xl shadow-amber-400/20 hover:shadow-amber-400/30 active:scale-[0.98] cursor-pointer"
          >
            <span>JOIN THE BOOTCAMP & START BUILDING</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
