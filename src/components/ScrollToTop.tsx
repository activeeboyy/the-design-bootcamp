/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      if (currentScroll > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circular progress calculations for SVG ring
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Tooltip on hover */}
      <span className="mr-3 px-3 py-1.5 rounded-xl bg-[#121420]/95 backdrop-blur-md border border-white/10 text-xs font-semibold text-neutral-200 shadow-xl opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap">
        <span>Back to top</span>
        <span className="text-amber-400 font-mono text-[11px]">{Math.round(scrollProgress)}%</span>
      </span>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label={`Scroll to top of page (${Math.round(scrollProgress)}% scrolled)`}
        className="relative group p-3.5 sm:p-4 rounded-2xl bg-[#121420]/90 backdrop-blur-md border border-amber-400/30 text-amber-400 hover:text-black hover:bg-amber-400 shadow-xl shadow-black/60 hover:shadow-amber-400/25 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center animate-gentle-bounce"
      >
        {/* SVG Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 52 52"
        >
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="2.5"
          />
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 text-amber-400 group-hover:text-black"
          />
        </svg>

        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1" />
      </button>
    </div>
  );
};
