/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need previous Photoshop experience?",
    answer: "No. The Design Bootcamp is designed for beginners.",
  },
  {
    question: "Do I need a design degree?",
    answer: "No. You don't need a design degree to take the course.",
  },
  {
    question: "What software will I learn?",
    answer: "Adobe Photoshop.",
  },
  {
    question: "How do I access the lessons?",
    answer: "After purchasing, you'll receive access to the private Course Area where you can watch the pre-recorded lessons.",
  },
  {
    question: "Is there support?",
    answer: "Yes. Students will have access to the THE DESIGN BOOTCAMP WhatsApp Support Group.",
  },
  {
    question: "Is the payment one-time?",
    answer: "Yes. The course is a one-time payment of ₦9,500 during the launch period.",
  },
  {
    question: "Will the price remain ₦9,500?",
    answer: "No. ₦9,500 is the launch price for the first 50 days after launch. The price will then become ₦14,900.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 bg-[#0C0E17] text-[#F3F4F6] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Everything you need to know about the bootcamp, format, support, and access.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl bg-[#121422] border border-white/5 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-neutral-300 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-amber-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5 animate-fade-in">
                    <p>{item.answer}</p>
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
