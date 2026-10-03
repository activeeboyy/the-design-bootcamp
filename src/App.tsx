/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Loader2, ShieldCheck } from 'lucide-react';
import { Hero } from './components/Hero';
import { BeHonestSection } from './components/BeHonestSection';
import { FranklinStory } from './components/FranklinStory';
import { CurriculumSection } from './components/CurriculumSection';
import { OfferSection } from './components/OfferSection';
import { HowItWorks } from './components/HowItWorks';
import { WhoThisIsFor } from './components/WhoThisIsFor';
import { ClosingSection } from './components/ClosingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PAYMENT_URL } from './config';

export default function App() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleJoinClick = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (isRedirecting) return;
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = PAYMENT_URL;
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-amber-400 selection:text-black">
      <main>
        {/* 1. HERO SECTION & PRICE CARD */}
        <Hero onJoinClick={handleJoinClick} isRedirecting={isRedirecting} />

        {/* 2. “BE HONEST...” SECTION (Editorial contrast canvas) */}
        <BeHonestSection />

        {/* 3. FRANKLIN STORY (Personal journey, strictly no photos) */}
        <FranklinStory />

        {/* 4. WHAT'S INSIDE? (Comprehensive Modules + Practical Design Projects) */}
        <CurriculumSection onJoinClick={handleJoinClick} />

        {/* 5. OFFER / PRICE SECTION (Launch offer + countdown) */}
        <OfferSection onJoinClick={handleJoinClick} isRedirecting={isRedirecting} />

        {/* 6. HOW IT WORKS (4-Step learning experience) */}
        <HowItWorks />

        {/* 7. WHO THIS IS FOR (5 audience groups) */}
        <WhoThisIsFor />

        {/* 8. FINAL DECISION / CLOSING SECTION (Two options + countdown) */}
        <ClosingSection onJoinClick={handleJoinClick} isRedirecting={isRedirecting} />

        {/* 9. FAQ SECTION (7 detailed questions & answers) */}
        <FaqSection />
      </main>

      {/* 10. MINIMAL PREMIUM FOOTER */}
      <Footer />

      {/* FLOATING SCROLL TO TOP NAV ICON */}
      <ScrollToTop />

      {/* CHECKOUT REDIRECT ANIMATION OVERLAY */}
      {isRedirecting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4 transition-all duration-300">
          <div className="w-full max-w-sm p-6 sm:p-8 rounded-3xl bg-[#121422] border border-amber-400/50 shadow-2xl glow-card text-center animate-scale-up space-y-4">
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-amber-400/20 animate-ping opacity-60" />
              <div className="relative w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center shadow-lg shadow-amber-400/30">
                <Loader2 className="w-7 h-7 animate-spin" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-white font-display">
                Connecting to Checkout...
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                Securing your spot & launching Paystack 🔒
              </p>
            </div>

            {/* Smooth animated progress bar */}
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-amber-400 h-full rounded-full animate-progress" />
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400/90 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>256-Bit SSL Encrypted Payment</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
