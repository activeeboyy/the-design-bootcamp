/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { LAUNCH_DEADLINE_ISO } from '../config';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

const STORAGE_KEY = 'zentra_tdb_deadline_30days_v1';

/**
 * Resolves the 30-day deadline, persisting across browser reloads so the timer
 * counts down continuously and reliably without resetting each page refresh.
 */
export function getActiveDeadline(fallbackIso: string = LAUNCH_DEADLINE_ISO): string {
  if (typeof window === 'undefined') return fallbackIso;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = new Date(saved).getTime();
      if (!isNaN(parsed)) {
        return saved;
      }
    }
    // Initialize 30 days from now and store
    const initial = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    localStorage.setItem(STORAGE_KEY, initial);
    return initial;
  } catch {
    return fallbackIso;
  }
}

export function useCountdown(targetIsoDate?: string): CountdownTime {
  const [resolvedDeadline, setResolvedDeadline] = useState<string>(() => {
    return targetIsoDate || getActiveDeadline();
  });

  const calculateTimeLeft = (deadlineIso: string): CountdownTime => {
    const now = Date.now();
    const targetMs = new Date(deadlineIso).getTime();
    const difference = targetMs - now;

    if (difference <= 0 || isNaN(difference)) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(() => calculateTimeLeft(resolvedDeadline));

  useEffect(() => {
    const deadline = targetIsoDate || getActiveDeadline();
    setResolvedDeadline(deadline);
    setTimeLeft(calculateTimeLeft(deadline));

    // Update every second reliably
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIsoDate]);

  return timeLeft;
}
