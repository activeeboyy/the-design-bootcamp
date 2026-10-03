/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-amber-400 selection:text-black">
      <main>
        {/* 1. HERO SECTION & PRICE CARD */}
        <Hero />

        {/* 2. “BE HONEST...” SECTION (Editorial contrast canvas) */}
        <BeHonestSection />

        {/* 3. FRANKLIN STORY (Personal journey, strictly no photos) */}
        <FranklinStory />

        {/* 4. WHAT'S INSIDE? (Comprehensive Modules + Practical Design Projects) */}
        <CurriculumSection />

        {/* 5. OFFER / PRICE SECTION (Launch offer + countdown) */}
        <OfferSection />

        {/* 6. HOW IT WORKS (4-Step learning experience) */}
        <HowItWorks />

        {/* 7. WHO THIS IS FOR (5 audience groups) */}
        <WhoThisIsFor />

        {/* 8. FINAL DECISION / CLOSING SECTION (Two options + countdown) */}
        <ClosingSection />

        {/* 9. FAQ SECTION (7 detailed questions & answers) */}
        <FaqSection />
      </main>

      {/* 10. MINIMAL PREMIUM FOOTER */}
      <Footer />

      {/* FLOATING SCROLL TO TOP NAV ICON */}
      <ScrollToTop />
    </div>
  );
}
