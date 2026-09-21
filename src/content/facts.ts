/**
 * SINGLE SOURCE OF TRUTH for every stat, figure and claim shown on the site.
 *
 * Rules (see website-change-brief §2):
 *  - No page may hard-code a number that lives here. Import it from FACTS.
 *  - Every value must be defensible. Anything unconfirmed carries a visible
 *    `[CONFIRM]` marker so it renders as an obvious placeholder until Nishant
 *    signs off. Never invent a figure to remove a placeholder.
 *  - When two pages disagree, they are BOTH wrong until they read from here.
 *
 * Phone/email are re-exported from '@/lib/contact' (the contact source of truth)
 * so there is still only one place each of those is defined.
 */
import { PHONES, EMAIL as CONTACT_EMAIL } from '@/lib/contact'

export const FACTS = {
  /** Matches the 7 villa cards on /projects. */
  villasDelivered: 7,

  /** Sum of the per-project conflict counts on /projects: 12+8+7+9+10+11+18 = 75. */
  conflictsCaughtPreExecution: 75,

  /** [CONFIRM] figure + wording — e.g. "₹100Cr+ execution value delivered". Must be defensible. */
  executionValueManaged: '[CONFIRM ₹100Cr+ execution value]',

  /**
   * [CONFIRM] choose ONE claim, never both:
   *   'All 7 villas delivered within the approved budget'  OR
   *   'X% lower cost overruns vs industry'
   * The live site currently shows BOTH (they contradict). Pick one here.
   */
  budgetClaim: '[CONFIRM budget claim — pick ONE, see facts.ts]',

  /** [CONFIRM] ₹50L (Pricing/Lonavala) vs ₹25L (Contact). Pick one. */
  minProjectValue: '[CONFIRM min project value ₹50L or ₹25L]',

  /** QA checkpoints across 12 phases. The Mumbai page's "200-point" is wrong — use this. */
  qaCheckpoints: 104,

  /** Human-readable service area. Used wherever "where we work" is listed. */
  serviceArea: 'Alibag & the Konkan coast · Mumbai owners · Karjat/Lonavala · NRI clients',

  /** Phones (display form) — sourced from '@/lib/contact'. */
  phone: PHONES.map((p) => p.display),

  /** Primary customer-facing email — sourced from '@/lib/contact'. */
  email: CONTACT_EMAIL,

  /** [CONFIRM] keep the "accepting 3 new engagements this quarter" line only if true. */
  currentQuarterEngagements: '[CONFIRM 3 new engagements this quarter — keep only if true]',

  /**
   * [CONFIRM] Casa Frangipani's true outcome — 'On Schedule' vs '3 Weeks Ahead'
   * disagree across Home / testimonial / /projects card / JSON-LD. Set the real
   * one here and use it everywhere, including the case-study JSON-LD description.
   */
  casaFrangipaniOutcome: '[CONFIRM Casa Frangipani outcome — On Schedule or 3 Weeks Ahead]',
} as const

export type Facts = typeof FACTS
