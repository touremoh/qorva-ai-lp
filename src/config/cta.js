/**
 * The page's single call to action, in one place.
 *
 * The palette is deliberately outside the site's own — the page is green (#629C44) and
 * navy/blue (#1e3a5f / #2563eb) on near-white, so the CTA is a vivid orange-red used
 * nowhere else. White on #D93A00 clears WCAG AA for normal text at 4.6:1.
 */
export const CTA_ORANGE = '#D93A00';
export const CTA_ORANGE_HOVER = '#B33000';

/** Point this at the scheduling link; falls back to sign-up until one is configured. */
export const BOOK_DEMO_URL =
  import.meta.env.VITE_DEMO_BOOKING_URL || 'https://app.qorva.ai/register';
