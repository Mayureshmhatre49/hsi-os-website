/**
 * SINGLE SOURCE OF TRUTH for testimonials (see website-change-brief §2.2).
 *
 * HARD RULE: only entries with `verified: true` may ever render. A testimonial
 * is verified ONLY when Nishant confirms it is a real client quote, used
 * verbatim, with the client's permission. Every entry below starts `false`.
 *
 * Do not invent, merge or paraphrase quotes. Where the same client had
 * different quotes on different pages, the conflicting variants are recorded in
 * comments so the real verbatim one can be chosen — see the [CONFIRM] notes.
 *
 * Render helpers:
 *   verifiedTestimonials()          -> all verified entries (for list sections)
 *   getVerifiedTestimonial(id)      -> one entry IF verified, else undefined
 * A section that gets `undefined`/empty must render nothing (no empty shell).
 */

export type Testimonial = {
  id: string
  name: string
  role: string
  location?: string
  quote: string
  initials?: string
  /** Only render when true. Confirmed real, verbatim, permission granted. */
  verified: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    // [CONFIRM] Abhishek Bajoria appears with THREE different quotes across the
    // site (Home/alibaug, Pricing, Contact). Keep ONE real verbatim quote and
    // delete the variants below. The Home version is kept as the candidate.
    // Pricing variant:  "The HSIOS™ fee paid for itself before site work even
    //   started. One conflict they caught — a plumbing line running directly
    //   under the kitchen island — would have cost more to fix on-site than the
    //   entire management fee."
    // Contact variant:  "The fee paid for itself before site work even started.
    //   Twelve conflicts caught in planning that would have cost three times the
    //   fee to fix on site."
    id: 'abhishek-bajoria',
    name: 'Abhishek Bajoria',
    role: 'Homeowner',
    location: 'Alibag Villa',
    initials: 'AB',
    quote:
      'Building my villa in Alibag while living in Mumbai was my biggest fear. I expected endless delays. HSIOS™ gave me an exact roadmap, and I tracked every rupee on my dashboard. They delivered 3 weeks ahead of schedule.',
    verified: false,
  },
  {
    // [CONFIRM] Strong NRI proof. Once verified, also feature on the NRI page (§3.8).
    id: 'niket-murdeshwar',
    name: 'Niket Murdeshwar',
    role: 'NRI Homeowner',
    location: 'Hong Kong',
    initials: 'NM',
    quote:
      'Managing a ₹2.5Cr villa interior project from Hong Kong without physical access became very smooth thanks to HSIOS™. I had more visibility into my Alibag project than I do into some of my HK properties.',
    verified: false,
  },
  {
    // [CONFIRM] full name + permission (currently shown only as "Rahul D.").
    id: 'rahul-d',
    name: 'Rahul D.',
    role: 'Principal Architect',
    location: 'Mumbai',
    initials: 'RD',
    quote:
      "I've worked with many execution contractors over 15 years. What sets HSIOS™ apart is that my design intent actually survives site execution. The conflict detection caught a ceiling vs HVAC issue before a single cutter touched the ceiling. That alone saved 3 weeks.",
    verified: false,
  },
  {
    // [CONFIRM] or remove. "Divya K." is inconsistent: on /demo she is
    // "Principal Architect · Mumbai" with one quote; on /for-architects she is
    // "Principal Designer · Pune" with a different quote. Reconcile to one real
    // person + one verbatim quote, or drop entirely. The /for-architects
    // version is kept as the candidate.
    // /demo variant: "I was sceptical. After the demo I understood immediately
    //   why every architect should see this before their next project."
    id: 'divya-k',
    name: 'Divya K.',
    role: 'Principal Designer',
    location: 'Pune',
    initials: 'DK',
    quote:
      'I was sceptical about bringing in an execution partner — I thought it would compromise my design control. It was the opposite. HSIOS™ was collaborative from day one. My specs were treated as non-negotiable, and the conflict detection engine saved us from three expensive on-site disputes.',
    verified: false,
  },
  {
    // [CONFIRM] or remove. "Rajesh M. · Developer · Alibag Township" cites a
    // 24-unit development that does NOT appear anywhere in the portfolio.
    id: 'rajesh-m',
    name: 'Rajesh M.',
    role: 'Developer',
    location: 'Alibag Township',
    initials: 'RM',
    quote:
      'We have a 24-unit development in Alibag. Getting consistent finish quality and documentation across all units would have been impossible without HSIOS™. The reporting alone — what we can show buyers — is worth the entire engagement.',
    verified: false,
  },
]

/** All verified testimonials, in declaration order. Empty until Nishant confirms. */
export const verifiedTestimonials = (): Testimonial[] =>
  TESTIMONIALS.filter((t) => t.verified)

/** One testimonial by id, but ONLY if verified. Otherwise undefined. */
export const getVerifiedTestimonial = (id: string): Testimonial | undefined => {
  const t = TESTIMONIALS.find((x) => x.id === id)
  return t && t.verified ? t : undefined
}
