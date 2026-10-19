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

  /** Confirmed by Nishant (2026-09-21): ₹100Cr+ execution value delivered. */
  executionValueManaged: '₹100Cr+',

  /**
   * Confirmed by Nishant (2026-09-21): use the overruns claim, NOT "100% on
   * budget". The two must never appear together — drop any "delivered on
   * budget" / "100% budget adherence" tile in favour of this one.
   */
  budgetClaim: '30% lower cost overruns vs industry',
  /** Short stat-tile form of the budget claim. */
  budgetClaimStat: { value: '30% Lower', label: 'Cost Overruns vs Industry' },

  /**
   * Typical all-in investment for a ~4,000 sq ft Alibag villa interior.
   * Consistent with the /pricing villa band (₹1.5Cr–₹8Cr+). Keep in step with /pricing.
   */
  typicalVillaInvestment: '₹1.5–3.5 Cr',

  /** Confirmed by Nishant (2026-09-21): minimum project value ₹50 Lakh. */
  minProjectValue: '₹50 Lakh',

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
   * Confirmed by Nishant (2026-10-19): Casa Frangipani was delivered three
   * months ahead of schedule. Use this everywhere, including the case-study
   * JSON-LD description.
   */
  casaFrangipaniOutcome: '3 Months Ahead of Schedule',

  /** Confirmed by Nishant (2026-10-19): Casa Frangipani built-up area. */
  casaFrangipaniArea: '8,500 sq ft',
} as const

export type Facts = typeof FACTS
