import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import MarqueeTicker from '@/components/ui/MarqueeTicker'
import { JsonLd } from '@/lib/JsonLd'

/*
 * Title, description, and alternates inherit from the root layout (layout.tsx)
 * — keeps the homepage canonical + hreflang set in one place.
 */

/* ════════════════════════════════════════════════════════════
   HOMEPAGE — 10 Sections, Conversion-Optimised Order
   1. Hero
   2. MarqueeTicker
   3. Problem Statement (Why HSIOS Exists)
   4. Comparison Table (Traditional vs HSIOS)
   5. What Is HSIOS
   6. How It Works
   7. What We Create
   8. Why Choose Us
   9. Featured Project + Testimonials
   10. Final CTA
   ════════════════════════════════════════════════════════════ */
/*
 * Testimonials live at module-level so the Review + AggregateRating schema below
 * can derive from the same source — keeps displayed reviews and structured data in sync.
 */
const testimonials = [
  {
    quote: 'Building my villa in Alibag while living in Mumbai was my biggest fear. I expected endless delays. HSIOS™ gave me an exact roadmap, and I tracked every rupee on my dashboard. They delivered 3 weeks ahead of schedule.',
    name: 'Abhishek Bajoria',
    role: 'Homeowner · Alibag Villa',
    initials: 'AB',
  },
  {
    quote: 'Managing a ₹2.5Cr villa interior project from Hong Kong without physical access became very smooth thanks to HSIOS™. I had more visibility into my Alibag project than I do into some of my HK properties.',
    name: 'Niket Murdeshwar',
    role: 'NRI Homeowner · Hong Kong',
    initials: 'NM',
  },
  {
    quote: "I've worked with many execution contractors over 15 years. What sets HSIOS™ apart is that my design intent actually survives site execution. The conflict detection caught a ceiling vs HVAC issue before a single cutter touched the ceiling. That alone saved 3 weeks.",
    name: 'Rahul D.',
    role: 'Principal Architect · Mumbai',
    initials: 'RD',
  },
]

/*
 * Review + AggregateRating schema for the testimonials rendered in <ProofSection>.
 * Google's structured-data policy requires these reviews to be visible on the same page —
 * they are. The aggregateRating reflects only the testimonials shown (currently 3),
 * not internal project counts. Update both arrays together when adding testimonials.
 */
const reviewSchemas = testimonials.map((t) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@id': 'https://www.hsios.in/#business' },
  author: { '@type': 'Person', name: t.name, jobTitle: t.role },
  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
  reviewBody: t.quote,
  publisher: { '@id': 'https://www.hsios.in/#organization' },
}))

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: { '@id': 'https://www.hsios.in/#business' },
  ratingValue: '5.0',
  bestRating: '5',
  worstRating: '1',
  ratingCount: testimonials.length.toString(),
  reviewCount: testimonials.length.toString(),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[...reviewSchemas, aggregateRatingSchema]} />
      <HeroSection />
      <MarqueeTicker />
      <ProblemSection />
      <ComparisonSection />
      <WhatIsHSIOSSection />
      <HowHSIOSWorksSection />
      <WhatWeCreateSection />
      <WhyChooseUsSection />
      <ProofSection />
      <FinalCTASection />
    </>
  )
}

/* ── 1. HERO ─────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative flex items-end min-h-[100svh] overflow-hidden" aria-label="Hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/projects-casa-frangipani-1.jpg"
          alt="Casa Frangipani — Luxury villa interior by Hestia Smart Interiors, Alibag"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-800/50 to-charcoal-900/15" />
        <div className="absolute inset-0 bg-bronze-800/8" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury pb-24 lg:pb-20 pt-40 sm:pt-48 lg:pt-56 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <div className="w-7 h-px bg-sandstone-400 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-sandstone-300 leading-snug">
              India&apos;s First Luxury Home Execution Operating System
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-display-xl text-white leading-[1.05] mb-4 animate-fade-up [animation-delay:100ms]">
            Luxury Villa Interiors<br />
            Need More Than Design.
          </h1>

          {/* Answer */}
          <p className="font-serif text-display-sm text-sandstone-300 mb-7 animate-fade-up [animation-delay:160ms]">
            They Need an Execution Operating System.
          </p>

          {/* Value prop */}
          <p className="text-lg text-white/85 font-sans leading-relaxed max-w-xl mb-3 animate-fade-up [animation-delay:220ms] border-l-2 border-sandstone-400 pl-4">
            Your home delivered exactly as designed — on budget, on schedule, without surprises.
            Every decision documented, every rupee tracked, every trade held accountable.
          </p>

          {/* Budget qualifier */}
          <p className="text-sm text-sandstone-400/80 font-sans mb-10 pl-6 animate-fade-up [animation-delay:260ms] leading-relaxed">
            Minimum project value ₹50 Lakhs<span className="hidden sm:inline"> &nbsp;·&nbsp; Alibag · Mumbai · Pune · Goa · Bangalore</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:320ms]">
            <Link href="/contact" className="btn btn-bronze text-base px-8 py-4">
              Book Private Consultation
            </Link>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27d%20like%20to%20discuss%20my%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white text-base px-8 py-4"
            >
              WhatsApp to Discuss
            </a>
            <Link href="/projects" className="text-sm font-semibold text-sandstone-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              See Our Work →
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 lg:mt-16 pt-8 lg:pt-10 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 animate-fade-up [animation-delay:420ms]">
          {[
            { value: '7+',      label: 'Luxury Villas — On Budget' },
            { value: '₹100Cr+', label: 'Projects Managed' },
            { value: '75+',     label: 'Trade Conflicts Resolved' },
            { value: '0',       label: 'Cost Overruns' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-sandstone-300 mb-1">{value}</div>
              <div className="text-xs font-medium text-white/75 tracking-wide uppercase leading-snug">{label}</div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs font-medium text-sandstone-400/70 tracking-wide animate-fade-up [animation-delay:480ms]">
          Currently accepting 3 new engagements this quarter
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="animate-bounce">
          <path d="M1 1l5 5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}

/* ── 2. PROBLEM STATEMENT ────────────────────────────────── */
const painPoints = [
  'Cost overruns surfaced at handover, not before',
  'Vendors who disappear mid-execution',
  'Defects concealed behind freshly finished walls',
  'Rework that extends timelines by weeks',
  'Materials over-ordered and abandoned on site',
  'Design intent lost in site-level compromises',
  'No visibility into daily progress or decisions',
  'Zero documentation when keys are finally handed over',
]

function ProblemSection() {
  return (
    <section className="section-py bg-charcoal-800 relative overflow-hidden" aria-label="Problem we solve">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sandstone-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <RevealOnScroll>
            <div className="section-label text-sandstone-400">The Problem We Solve</div>
            <h2 className="font-serif text-display-lg text-white mb-6">
              Most Luxury Projects Fail<br />
              <em className="not-italic text-sandstone-300">in Execution. Not Design.</em>
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed mb-8">
              Missed timelines. Silent cost overruns. Vendors who go dark.
              Beautiful designs ruined on site. HSIOS™ was built to end that — permanently.
            </p>
            <blockquote className="border-l-2 border-sandstone-400 pl-6 font-serif text-lg text-sandstone-200 italic mb-8">
              &ldquo;Most projects fail not in design — but in the distance between what was drawn
              and what was built. That gap is where HSIOS™ operates.&rdquo;
            </blockquote>
            <Link href="/hsi-os" className="btn btn-bronze">Explore HSIOS™ →</Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2 block" />
                  <span className="text-warmgray-300 text-sm leading-snug">{point}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sandstone-400 font-serif text-lg italic">
              We eliminate all of these.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

/* ── 3. COMPARISON TABLE ─────────────────────────────────── */
const comparison = [
  { aspect: 'After Handover',    traditional: 'No support, no records retained',                  hsios: 'Ownership Mode — your home managed for life' },
  { aspect: 'Approach',          traditional: 'Reactive — fix problems as they arise',           hsios: 'Proactive — prevent problems before they occur' },
  { aspect: 'Cost Control',      traditional: 'Surprise invoices at handover',                    hsios: 'Real-time budget dashboard, zero surprises' },
  { aspect: 'Coordination',      traditional: 'Fragmented across multiple vendors',               hsios: 'Integrated under one accountable team' },
  { aspect: 'Quality',           traditional: 'No formal checkpoints — inconsistent finish',      hsios: 'Milestone quality gates with documented sign-offs' },
  { aspect: 'Client Visibility', traditional: 'Chaotic WhatsApp updates, if at all',              hsios: 'Daily progress dashboard — check from anywhere' },
]

function ComparisonSection() {
  return (
    <section className="section-py bg-ivory-200" aria-label="HSIOS difference">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-2xl mb-10 lg:mb-16">
            <div className="section-label">Why HSIOS™ Is Different</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Traditional Execution{' '}
              <span className="text-sandstone-600">vs the HSIOS™ Standard.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 text-lg leading-relaxed">
              The gap between a considered design and a precisely delivered home is execution intelligence.
              HSIOS™ closes that gap — permanently.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          {/* Desktop table */}
          <div className="hidden md:block rounded-3xl overflow-hidden border border-ivory-300 bg-white shadow-luxury">
            {/* Header */}
            <div className="grid grid-cols-3 bg-charcoal-800 text-white">
              <div className="px-6 py-5 text-xs font-bold tracking-widest uppercase text-warmgray-500" />
              <div className="px-6 py-5 text-center border-l border-white/8">
                <div className="text-xs font-bold tracking-widest uppercase text-warmgray-400 mb-1">Traditional</div>
                <div className="text-sm font-medium text-white/50">Reactive. Fragmented.</div>
              </div>
              <div className="px-6 py-5 text-center bg-sandstone-400/15 border-l border-sandstone-400/20">
                <div className="text-xs font-bold tracking-widest uppercase text-sandstone-300 mb-1">HSIOS™</div>
                <div className="text-sm font-semibold text-white">Proactive. Integrated.</div>
              </div>
            </div>
            {comparison.map(({ aspect, traditional, hsios }, i) => (
              <div key={aspect} className={`grid grid-cols-3 border-b border-ivory-200 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-ivory-50'}`}>
                <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-warmgray-500 flex items-center">{aspect}</div>
                <div className="px-6 py-4 border-l border-ivory-200 flex items-center">
                  <span className="inline-flex items-start gap-2 text-sm text-warmgray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />{traditional}
                  </span>
                </div>
                <div className="px-6 py-4 bg-sandstone-50/60 border-l border-sandstone-100 flex items-center">
                  <span className="inline-flex items-start gap-2 text-sm font-semibold text-sandstone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0 mt-1.5" />{hsios}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-4">
            {comparison.map(({ aspect, traditional, hsios }) => (
              <div key={aspect} className="rounded-2xl overflow-hidden border border-ivory-300 bg-white">
                <div className="px-5 py-3 bg-charcoal-800">
                  <span className="text-xs font-bold tracking-widest uppercase text-sandstone-300">{aspect}</span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-ivory-200">
                  <div className="p-4">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-warmgray-400 mb-2">Before</div>
                    <p className="text-xs text-warmgray-600 leading-relaxed">{traditional}</p>
                  </div>
                  <div className="p-4 bg-sandstone-50/50">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-sandstone-500 mb-2">HSIOS™</div>
                    <p className="text-xs font-semibold text-sandstone-700 leading-relaxed">{hsios}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-bronze">Start Your Project →</Link>
            <Link href="/how-it-works" className="btn btn-outline-dark">See How It Works</Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 4. WHAT IS HSIOS ────────────────────────────────────── */
const hsioPillars = [
  { title: 'Trade Sequencing',            desc: 'Every trade ordered and coordinated in a binding sequence — no collision, no idle time, no rework from overlaps.' },
  { title: 'Procurement Intelligence',    desc: 'Material sourcing, vendor vetting, and pricing benchmarks. Every specification locked before a single quote is accepted.' },
  { title: 'Milestone Quality Gates',     desc: 'Structured site inspections at every critical phase. Every checkpoint documented, signed off, and shared with you.' },
  { title: 'Budget Transparency',         desc: 'Live cost dashboards and documented approvals. No silent overruns. No surprise invoices at handover.' },
  { title: 'Conflict Detection Engine',   desc: 'Pre-execution clash analysis across HVAC, plumbing, structural, and electrical — resolved before site work begins.' },
  { title: 'Ownership Mode',              desc: 'Post-handover AMC, maintenance scheduling, and home management. HSIOS™ stays with your home after the last trade leaves.' },
]

function WhatIsHSIOSSection() {
  return (
    <section className="section-py bg-white border-b border-ivory-200" aria-label="What is HSIOS">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-3xl mb-12">
            <div className="section-label">What Is HSIOS™?</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-5">
              The Operating System{' '}
              <em className="not-italic text-sandstone-600">Behind Exceptional Homes.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed max-w-2xl">
              HSIOS™ is a unified execution intelligence platform — combining trade sequencing,
              procurement intelligence, milestone quality gates, budget transparency, a Conflict Detection Engine,
              and post-handover Ownership Mode. What is designed, gets built. Precisely. Responsibly.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hsioPillars.map(({ title, desc }, i) => (
            <RevealOnScroll key={title} delay={i * 0.06}>
              <div className="flex gap-4 p-6 rounded-2xl bg-ivory-50 border border-ivory-200 hover:border-sandstone-300 hover:shadow-luxury transition-all duration-300 h-full">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sandstone-100 border border-sandstone-200 flex items-center justify-center">
                  <span className="text-sandstone-600 font-bold text-xs">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-charcoal-800 mb-1">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* ── HSIOS™ By the Numbers — quantified proof points ── */}
        <RevealOnScroll delay={0.18}>
          <div className="mt-14 rounded-3xl bg-charcoal-800 p-8 sm:p-10 lg:p-12">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-bold tracking-[0.18em] uppercase text-sandstone-400 mb-3">What That Looks Like</div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
                Execution intelligence,{' '}
                <em className="not-italic text-sandstone-300">measured.</em>
              </h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { value: '5', unit: 'modes',       label: 'Digital Twin Views',     sub: 'Structural · Floor Plan · 4D Timeline · Isometric · MEP Clash' },
                { value: '26', unit: 'rules',     label: 'Design Validation Checks', sub: 'Material · Climate · Ventilation · Luxury · Execution' },
                { value: '104', unit: 'items',   label: 'QA Checkpoints',           sub: 'Across 12 execution phases · Photographic proof per gate' },
                { value: '6', unit: 'dimensions', label: 'Sustainability Score',     sub: 'Carbon · Circularity · Energy · IEQ · Water · Durability' },
              ].map(({ value, unit, label, sub }) => (
                <div key={label} className="border-t border-white/10 pt-5">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-sandstone-300 leading-none">{value}</span>
                    <span className="text-xs font-medium text-warmgray-400 uppercase tracking-widest">{unit}</span>
                  </div>
                  <div className="text-sm font-semibold text-white mb-2">{label}</div>
                  <div className="text-xs text-warmgray-400 leading-relaxed">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.22}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://os.hsios.in/" target="_blank" rel="noopener noreferrer" className="btn btn-bronze">Try HSIOS™ →</a>
            <Link href="/hsi-os" className="btn btn-outline-dark">Platform Overview</Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 5. HOW HSIOS WORKS ──────────────────────────────────── */
const workflowSteps = [
  {
    step: 'You get clarity before commitment',
    desc: 'Full BOQ, conflict detection, and material specs locked before a single trade quote is accepted. You know the cost before you commit.',
  },
  {
    step: 'Your design survives site execution',
    desc: 'Every decision measured against approved drawings. Trade sequences planned so the build matches the vision — not a site-adapted compromise.',
  },
  {
    step: 'Every rupee is visible, always',
    desc: 'Live dashboard. Approved change orders. Zero surprise invoices. You know what it costs before it happens — every time.',
  },
  {
    step: 'Your home is managed for life',
    desc: 'Defect-free handover with full documentation, warranties, and AMC. HSIOS™ stays with your home long after the last trade leaves.',
  },
]

function HowHSIOSWorksSection() {
  return (
    <section className="section-py bg-charcoal-900 relative overflow-hidden" aria-label="How HSIOS works">
      <div className="absolute inset-0 bg-gradient-to-br from-sandstone-900/15 to-transparent pointer-events-none" />

      <div className="container-luxury relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl mb-10 lg:mb-16">
            <div className="section-label text-sandstone-400">The Process</div>
            <h2 className="font-serif text-display-lg text-white mb-4">
              Four Moments That<br />
              <em className="not-italic text-sandstone-300">Define Every Project.</em>
            </h2>
            <p className="text-warmgray-400 text-lg leading-relaxed">
              Not eight abstract stages — four concrete outcomes that separate a project
              that delivers from one that disappoints.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-sandstone-600/20 via-sandstone-500/40 to-sandstone-600/20 pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map(({ step, desc }, i) => (
              <RevealOnScroll key={step} delay={i * 0.07}>
                <div className="relative flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sandstone-500/30 hover:bg-white/8 transition-all duration-300 h-full">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sandstone-400/15 border border-sandstone-400/25 flex items-center justify-center">
                    <span className="font-serif font-bold text-sandstone-300 text-xs">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif font-bold text-white text-sm mb-1.5 leading-snug">{step}</h3>
                    <p className="text-warmgray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/how-it-works" className="btn btn-bronze">See the Full Process →</Link>
            <a href="https://os.hsios.in/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">Try HSIOS™ →</a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 6. WHAT WE CREATE ───────────────────────────────────── */
const propertyTypes = [
  { title: 'Luxury Villas',        desc: 'Complete villa interior execution — design coordination through snag-free handover, with every trade accountable at every stage.', href: '/projects' },
  { title: 'Premium Apartments',   desc: 'Urban residences executed with the same HSIOS™ precision framework applied to villa-scale projects — no shortcuts on finish or accountability.', href: '/for-homeowners' },
  { title: 'Holiday Homes',        desc: 'Coastal and hill-station retreats with lifecycle-intelligent material selection — chosen for the environment they will live in, not just the mood board.', href: '/alibag-villa-interiors' },
  { title: 'Farmhouses',           desc: 'Rural estates where premium execution respects the scale, character, and natural materiality of the land.', href: '/projects' },
  { title: 'Penthouses',           desc: 'Sky-high residences where HSIOS™ coordinates every surface, finish, and bespoke detail against the approved design — without exception.', href: '/mumbai-luxury-interiors' },
  { title: 'Boutique Hospitality', desc: 'Developer sample villas and boutique stays executed to brand-compliant, investor-ready standards — documented and repeatable across units.', href: '/for-developers' },
]

function WhatWeCreateSection() {
  return (
    <section className="section-py bg-ivory-100" aria-label="What we create">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-2xl mb-10 lg:mb-16">
            <div className="section-label">Spaces We Execute</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-5">
              Every Project Type.{' '}
              <em className="not-italic text-sandstone-600">One Standard of Precision.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              From Alibag coastal villas to Mumbai penthouses — every project is governed
              by the same HSIOS™ execution framework.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map(({ title, desc, href }, i) => (
            <RevealOnScroll key={title} delay={i * 0.06}>
              <Link href={href} className="group block card-warm p-8 h-full">
                <div className="font-serif text-4xl font-bold text-sandstone-300 mb-5 leading-none group-hover:text-sandstone-400 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 group-hover:text-sandstone-700 transition-colors">
                  {title}
                </h3>
                <p className="text-warmgray-600 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-sandstone-600">
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 7. WHY CHOOSE US ────────────────────────────────────── */
const benefits = [
  { n: '01', title: 'Design Fidelity',         desc: 'Every site decision is measured against the approved design. Execution never drifts from intent.' },
  { n: '02', title: 'Single Accountability',   desc: 'One team owns the outcome — design, procurement, execution, and handover. No gaps, no blame-shifting.' },
  { n: '03', title: 'Milestone Quality Gates', desc: 'Structured inspections at each critical phase, documented in HSIOS™ and shared with you in real time.' },
  { n: '04', title: 'Timeline Governance',     desc: 'Every project runs on a binding schedule. Delays are surfaced and resolved before they compound.' },
  { n: '05', title: 'Full Cost Transparency',  desc: 'Live budget dashboards. Every approval logged. No surprise invoices at handover.' },
  { n: '06', title: 'Waste Intelligence',      desc: 'HSIOS™ procurement controls cut material over-ordering and site waste — saving cost and carbon.' },
  { n: '07', title: 'Snag-Free Handover',       desc: 'Premium materials, vetted craftsmen, and milestone-verified close-out. What you approved is precisely what you receive.' },
]

function WhyChooseUsSection() {
  return (
    <section className="section-py bg-charcoal-800 text-white relative overflow-hidden" aria-label="Why choose us">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sandstone-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl mb-10 lg:mb-16">
            <div className="section-label text-sandstone-400">Why Discerning Clients Choose HSI</div>
            <h2 className="font-serif text-display-lg text-white mb-5">
              Seven Commitments.{' '}
              <em className="not-italic text-sandstone-300">All of Them Binding.</em>
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed">
              Every HSI engagement runs on documented accountability — from first site visit through final handover and beyond.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {benefits.map(({ n, title, desc }, i) => (
            <RevealOnScroll key={n} delay={i * 0.05} className="h-full">
              <div className="group h-full p-7 rounded-2xl border border-white/10 bg-white/4 hover:bg-white/8 hover:border-sandstone-400/30 transition-all duration-300">
                <div className="font-serif text-5xl font-bold text-sandstone-600/30 mb-4 leading-none">{n}</div>
                <h3 className="font-sans font-semibold text-white mb-3 leading-snug">{title}</h3>
                <p className="text-warmgray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </RevealOnScroll>
          ))}

          {/* CTA card */}
          <RevealOnScroll delay={0.35} className="h-full">
            <Link
              href="/contact"
              className="group flex flex-col justify-between h-full p-7 rounded-2xl bg-sandstone-400 text-charcoal-900 hover:bg-sandstone-300 transition-all duration-300"
            >
              <div className="font-serif text-xl font-bold leading-snug">
                Your project. Your vision. Delivered precisely.
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold mt-6">
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

/* ── 8. PROOF — PROJECT + TESTIMONIALS ───────────────────── */
function ProofSection() {
  return (
    <>
      {/* Featured Project */}
      <section className="section-py bg-ivory-100" aria-label="Featured project">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-xl mb-10 lg:mb-16">
              <div className="section-label">Featured Project</div>
              <h2 className="font-serif text-display-lg text-charcoal-800">
                Casa Frangipani,{' '}
                <span className="text-sandstone-600">Alibag.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Image gallery */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-4">
              <div className="col-span-2 relative rounded-3xl overflow-hidden aspect-[16/9]">
                <Image
                  src="/projects-casa-frangipani-1.jpg"
                  alt="Casa Frangipani living room — Hestia Smart Interiors, Alibag"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/projects-casa-frangipani-2.jpg"
                  alt="Casa Frangipani bedroom — Hestia Smart Interiors"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/projects-casa-frangipani-3.jpg"
                  alt="Casa Frangipani outdoor — Hestia Smart Interiors"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
            </div>

            {/* Details */}
            <RevealOnScroll delay={0.1} className="lg:col-span-2">
              <div className="badge-warm mb-6">Alibag · 6 Bedrooms</div>
              <h3 className="font-serif text-display-sm text-charcoal-800 mb-5">
                A Private Retreat Delivered Without Compromise.
              </h3>
              <p className="text-warmgray-600 leading-relaxed mb-6">
                Casa Frangipani is a 6-bedroom villa in Alibag — executed as a complete end-to-end
                interior project. From initial design coordination and conflict detection through
                final snag resolution and documented handover.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Scope',    value: 'Complete End-to-End Interior' },
                  { label: 'Location', value: 'Alibag, Maharashtra' },
                  { label: 'HSIOS™ Conflicts Caught', value: '12 Pre-Execution' },
                  { label: 'Delivered', value: '3 Weeks Ahead' },
                ].map(({ label, value }) => (
                  <div key={label} className="p-4 rounded-xl bg-ivory-200">
                    <div className="text-xs font-semibold uppercase tracking-widest text-sandstone-600 mb-1">{label}</div>
                    <div className="text-sm font-semibold text-charcoal-800">{value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://hestiavillas.in/case_study/casa-frangipani-rent-and-buy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark text-sm"
                >
                  View Full Project
                </a>
                <Link href="/projects" className="btn btn-outline-dark text-sm">
                  All Projects
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials — 3 only */}
      <section className="section-py bg-ivory-200" aria-label="Testimonials">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-xl mb-10 lg:mb-16">
              <div className="section-label">Client Voices</div>
              <h2 className="font-serif text-display-lg text-charcoal-800">
                What Our Clients{' '}
                <em className="not-italic text-sandstone-600">Actually Say.</em>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, initials }, i) => (
              <RevealOnScroll key={name} delay={i * 0.08}>
                <div className="card-luxury p-8 flex flex-col h-full bg-white">
                  <div className="font-serif text-5xl text-sandstone-300 leading-none mb-4">&ldquo;</div>
                  <p className="text-warmgray-700 leading-relaxed text-sm flex-1 mb-8 italic">{quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-sandstone-100 flex items-center justify-center font-serif font-bold text-sandstone-700 text-sm flex-shrink-0">
                      {initials}
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-800 text-sm">{name}</div>
                      <div className="text-xs text-warmgray-500 mt-0.5">{role}</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/projects" className="btn btn-dark">See All Projects</Link>
              <a
                href="https://hestiavillas.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                Visit Hestia Villas ↗
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}

/* ── 9. FINAL CTA ────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1C1C1E 0%, #3A3530 50%, #1C1C1E 100%)' }}
      aria-label="Book consultation"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-sandstone-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative z-10 text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-sandstone-400/50" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-sandstone-400">
                Currently Accepting New Projects
              </span>
              <div className="w-12 h-px bg-sandstone-400/50" />
            </div>

            <h2 className="font-serif text-display-xl text-white mb-6">
              The Home You Envisioned.<br />
              <em className="not-italic text-sandstone-300">Delivered Exactly as Designed.</em>
            </h2>

            <p className="text-warmgray-300 text-lg leading-relaxed mb-12">
              Book a private consultation. We will walk you through how HSIOS™ applies to your project —
              scope, timeline, and investment — before you commit to anything.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-bronze text-base px-10 py-4">
                Book Private Consultation
              </Link>
              <a
                href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27d%20like%20to%20book%20a%20consultation%20for%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white text-base px-10 py-4"
              >
                WhatsApp Us Directly
              </a>
            </div>

            <p className="mt-10 text-xs text-warmgray-500 tracking-wide">
              +91-8010234802 &nbsp;·&nbsp; hello@hsios.in &nbsp;·&nbsp; Alibag · Mumbai · Pune · Goa · Bangalore
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
