/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 sm:py-20 bg-[#07080C] text-neutral-400 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          {/* Brand mark */}
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-display block uppercase">
            THE DESIGN BOOTCAMP
          </span>
          <p className="text-sm font-semibold text-amber-400 font-display">
            “Just start. 🎨”
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} THE DESIGN BOOTCAMP. All rights reserved.</p>
          <p className="text-neutral-500">
            Built for ambitious beginners ready to master graphic design & Adobe Photoshop.
          </p>
        </div>
      </div>
    </footer>
  );
};
