/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  variant?: 'card' | 'inline' | 'highlight';
  className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ variant = 'card', className = '' }) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown();

  if (isExpired) {
    return (
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs font-semibold uppercase tracking-wider ${className}`}>
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        LAUNCH PRICE ENDED — STANDARD PRICE NOW ACTIVE
      </div>
    );
  }

  const units = [
    { label: 'DAYS', value: String(days).padStart(2, '0') },
    { label: 'HOURS', value: String(hours).padStart(2, '0') },
    { label: 'MINUTES', value: String(minutes).padStart(2, '0') },
    { label: 'SECONDS', value: String(seconds).padStart(2, '0') },
  ];

  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-3 ${className}`}>
      {units.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center justify-center min-w-[62px] sm:min-w-[76px] py-2 px-1.5 sm:px-2.5 rounded-xl bg-[#141721] border border-white/10 shadow-inner">
            <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
              {unit.value}
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-neutral-400 uppercase mt-0.5">
              {unit.label}
            </span>
          </div>
          {index < units.length - 1 && (
            <span className="text-neutral-600 font-mono text-base sm:text-lg font-light -mt-4">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
