/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * ============================================================================
 * PAYMENT LINK CONFIGURATION
 * ============================================================================
 * Replace "YOUR_PAYSTACK_PAYMENT_LINK" with your live Paystack payment page URL
 * (e.g. "https://paystack.com/pay/the-design-bootcamp").
 * 
 * Every CTA button across the entire landing page uses this single constant.
 */
export const PAYMENT_URL: string = "https://paystack.shop/pay/tdb";

/**
 * ============================================================================
 * LAUNCH PRICING & COUNTDOWN CONFIGURATION
 * ============================================================================
 * The launch price of ₦8,000 is active for 50 days.
 * You can adjust the deadline date below easily.
 */
export const LAUNCH_PRICE_NAIRA = 9500;
export const REGULAR_PRICE_NAIRA = 14900;

// Configurable launch deadline (defaults to 50 days from app initialization or set your target date string)
// Format: ISO 8601 string, e.g. "2026-11-21T23:59:59Z"
const TARGET_DEADLINE_DATE = new Date(Date.now() + 50 * 24 * 60 * 60 * 1000).toISOString();
export const LAUNCH_DEADLINE_ISO = TARGET_DEADLINE_DATE;

/**
 * Formats a number as Nigerian Naira (e.g. 8000 -> "₦8,000")
 */
export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`;
}
