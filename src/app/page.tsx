import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import MarqueeTicker from '@/components/ui/MarqueeTicker'

export const metadata: Metadata = {
  title: 'Luxury Villa Interiors, Powered by HSIOS™ | Hestia Smart Interiors',
  description:
    'HSIOS™-powered luxury interior execution for premium villas, residences and developments. Precision, transparency, and zero surprises.',
  alternates: { canonical: 'https://www.hsios.in' },
}

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
export default function HomePage() {
  return (
    <>
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
    <section className="relative flex items-end min-h-screen overflow-hidden" aria-label="Hero">
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
      <div className="relative z-10 container-luxury pb-20 pt-40 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-7 animate-fade-up">
            <div className="w-7 h-px bg-sandstone-400" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-sandstone-300">
              India&apos;s First Luxury Home Execution Operating System
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-display-xl text-white leading-[1.05] mb-4 animate-fade-up [animation-delay:100ms]">
            Luxury Homes Need<br />
            More Than Interiors.
          </h1>

          {/* Answer */}
          <p className="font-serif text-display-sm text-sandstone-300 mb-7 animate-fade-up [animation-delay:160ms]">
            They Need an Operating System.
          </p>

          {/* Value prop */}
          <p className="text-lg text-white/85 font-sans leading-relaxed max-w-xl mb-3 animate-fade-up [animation-delay:220ms] border-l-2 border-sandstone-400 pl-4">
            HSIOS™ combines premium interior execution, budget intelligence, procurement control,
            quality systems, and lifecycle home management — for villas, residences, and developers.
          </p>

          {/* Budget qualifier */}
          <p className="text-sm text-sandstone-400/80 font-sans mb-10 pl-6 animate-fade-up [animation-delay:260ms]">
            Minimum project value ₹50 Lakhs &nbsp;·&nbsp; Alibag · Mumbai · Pune · Goa · Bangalore
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
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-up [animation-delay:420ms]">
          {[
            { value: '7+',      label: 'Luxury Villas — On Budget' },
            { value: '₹100Cr+', label: 'Projects Managed' },
            { value: '100%',    label: 'Client Retention Rate' },
            { value: '0',       label: 'Cost Overruns Delivered' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-serif text-4xl font-bold text-sandstone-300 mb-1">{value}</div>
              <div className="text-xs font-medium text-white/75 tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
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
  'Cost overruns nobody warned you about',
  'Poor vendor coordination and blame-shifting',
  'Hidden execution mistakes behind finished walls',
  'Months of delays and expensive rework',
  'Materials wasted through poor planning',
  'Designs that never survived site execution',
  'Stressful decision-making with no visibility',
  'Zero accountability after handover',
]

function ProblemSection() {
  return (
    <section className="section-py bg-charcoal-800 relative overflow-hidden" aria-label="Problem we solve">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sandstone-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

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
              &ldquo;For those who refuse ordinary homes, delayed projects,
              and outdated execution methods. HSIOS™ was built for a new generation of premium living.&rdquo;
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
                  <span className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/20 flex items-center justify-center text-red-400 text-xs flex-shrink-0 mt-0.5">✗</span>
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
  { aspect: 'Approach',          traditional: 'Reactive — fix problems as they arise',           hsios: 'Proactive — prevent problems before they occur' },
  { aspect: 'Coordination',      traditional: 'Fragmented across multiple vendors',               hsios: 'Integrated under one accountable team' },
  { aspect: 'Cost Control',      traditional: 'Surprise invoices at handover',                    hsios: 'Real-time budget dashboard, zero surprises' },
  { aspect: 'Quality',           traditional: 'No formal checkpoints — inconsistent finish',      hsios: 'Milestone quality gates with documented sign-offs' },
  { aspect: 'Client Visibility', traditional: 'Chaotic WhatsApp updates, if at all',              hsios: 'Daily progress dashboard — check from anywhere' },
  { aspect: 'After Handover',    traditional: 'No support, no records retained',                  hsios: 'Ownership Mode — your home managed for life' },
]

function ComparisonSection() {
  return (
    <section className="section-py bg-ivory-200" aria-label="HSIOS difference">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <div className="section-label">Why HSIOS™ Is Different</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Traditional Execution{' '}
              <span className="text-sandstone-600">vs the HSIOS™ Standard.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 text-lg leading-relaxed">
              The gap between a beautiful design and a flawlessly delivered home is execution intelligence.
              This is where HSIOS™ operates.
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
  { title: 'Project Management',      desc: 'Milestones, trade sequencing, and task tracking — every decision logged and visible.' },
  { title: 'Procurement Intelligence', desc: 'Material sourcing, vendor vetting, and pricing benchmarks so you never overpay.' },
  { title: 'Quality Systems',         desc: 'Site audits, defect tracking, and finish-grade verification at every stage.' },
  { title: 'Budget Transparency',     desc: 'Live cost dashboards and approval flows — no silent overruns, ever.' },
  { title: 'Conflict Detection',      desc: 'Pre-execution clash analysis catches design and trade conflicts before they hit the site.' },
  { title: 'Home Lifecycle Support',  desc: 'Post-handover AMC, maintenance scheduling, and smart home management.' },
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
              HSIOS™ is a unified execution platform — combining project management,
              procurement intelligence, quality systems, budget transparency, conflict detection,
              and post-handover lifecycle support. We don&apos;t just design beautiful spaces.
              We ensure they get built exactly the way they were designed.
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

        <RevealOnScroll delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/hsi-os" className="btn btn-bronze">See the Full Platform →</Link>
            <Link href="/demo" className="btn btn-outline-dark">Request a Demo</Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 5. HOW HSIOS WORKS ──────────────────────────────────── */
const workflowSteps = [
  { step: 'Vision',   desc: 'Your aspirations and lifestyle brief — captured and documented before any design begins.' },
  { step: 'Plan',     desc: 'Scope, design coordination, and execution strategy locked into a single source of truth.' },
  { step: 'Price',    desc: 'Transparent BOQ, market-benchmarked rates, and budget approval flows — no hidden costs.' },
  { step: 'Procure',  desc: 'Vendor vetting, material sourcing, and procurement tracking with full audit trail.' },
  { step: 'Build',    desc: 'Trade sequencing, site supervision, and real-time progress updates at every milestone.' },
  { step: 'Monitor',  desc: 'Quality audits, conflict resolution, and sign-offs so nothing slips through.' },
  { step: 'Handover', desc: 'Defect-free handover with complete documentation, warranties, and snag closure.' },
  { step: 'Maintain', desc: 'Post-handover AMC, lifecycle management, and smart home support — managed for life.' },
]

function HowHSIOSWorksSection() {
  return (
    <section className="section-py bg-charcoal-900 relative overflow-hidden" aria-label="How HSIOS works">
      <div className="absolute inset-0 bg-gradient-to-br from-sandstone-900/15 to-transparent pointer-events-none" />

      <div className="container-luxury relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <div className="section-label text-sandstone-400">The Process</div>
            <h2 className="font-serif text-display-lg text-white mb-4">
              Eight Stages. One Platform.
            </h2>
            <p className="text-warmgray-400 text-lg leading-relaxed">
              Every decision logged, every rupee tracked, every trade coordinated —
              from first vision to final handover and beyond.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4+4 two-row layout */}
        <div className="space-y-4">
          {[workflowSteps.slice(0, 4), workflowSteps.slice(4)].map((row, rowIdx) => (
            <div key={rowIdx} className="relative">
              <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-sandstone-600/20 via-sandstone-500/40 to-sandstone-600/20 pointer-events-none" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {row.map(({ step, desc }, i) => {
                  const globalIdx = rowIdx * 4 + i
                  return (
                    <div key={step} className="relative flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sandstone-500/30 hover:bg-white/8 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sandstone-400/15 border border-sandstone-400/25 flex items-center justify-center">
                        <span className="font-serif font-bold text-sandstone-300 text-xs">{String(globalIdx + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif font-bold text-white text-sm mb-1.5 leading-snug">{step}</h3>
                        <p className="text-warmgray-500 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/how-it-works" className="btn btn-bronze">See the Full Process →</Link>
            <Link href="/demo" className="btn btn-outline-white">Request a Demo</Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 6. WHAT WE CREATE ───────────────────────────────────── */
const propertyTypes = [
  { title: 'Luxury Villas',        desc: 'Full-scale villa interiors — every room, every detail, every material sourced and placed with precision.', href: '/projects' },
  { title: 'Premium Apartments',   desc: 'High-end urban residences executed with the same rigor, systems, and finish standards as a villa project.', href: '/for-homeowners' },
  { title: 'Holiday Homes',        desc: 'Coastal and hill-station retreats that balance premium material quality with natural environment sensitivity.', href: '/alibag-villa-interiors' },
  { title: 'Farmhouses',           desc: 'Rural estates with premium interiors that respect the character, scale, and landscape of the land.', href: '/projects' },
  { title: 'Penthouses',           desc: 'Sky-high residences where every surface, finish, and detail reflects the elevation of the address.', href: '/mumbai-luxury-interiors' },
  { title: 'Boutique Hospitality', desc: 'Developer sample villas, boutique stays, and small resorts executed to hospitality-grade standards.', href: '/for-developers' },
]

function WhatWeCreateSection() {
  return (
    <section className="section-py bg-ivory-100" aria-label="What we create">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
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
  { n: '07', title: 'Uncompromised Finish',    desc: 'Premium materials, vetted craftsmen, and snag-free handover. What you approved is what you receive.' },
]

function WhyChooseUsSection() {
  return (
    <section className="section-py bg-charcoal-800 text-white relative overflow-hidden" aria-label="Why choose us">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sandstone-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <div className="section-label text-sandstone-400">Why Discerning Clients Choose HSI</div>
            <h2 className="font-serif text-display-lg text-white mb-5">
              The Standard You Deserve.{' '}
              <em className="not-italic text-sandstone-300">The Execution You Rarely Get.</em>
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed">
              Most luxury interior projects fail not in design — but in execution. HSI was built to end that.
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
                Ready to experience the difference?
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold mt-6">
                Start Your Project
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
const testimonials = [
  {
    quote: 'Building my villa in Alibag while living in Mumbai was my biggest fear. I expected endless delays. HSIOS™ gave me an exact roadmap, and I tracked every rupee on my dashboard. They delivered 3 weeks ahead of schedule.',
    name: 'Saurabh M.',
    role: 'Homeowner · Alibag Villa',
    initials: 'SM',
  },
  {
    quote: 'Managing a ₹2.5Cr villa project from London without physical access used to be the kind of thing that ended badly. HSIOS™ changed that. I had more visibility into my Alibag project than I do into some of my UK properties.',
    name: 'Sunil P.',
    role: 'NRI Homeowner · London',
    initials: 'SP',
  },
  {
    quote: "I've worked with many execution contractors over 15 years. What sets HSIOS™ apart is that my design intent actually survives site execution. The conflict detection caught a ceiling vs HVAC issue before a single cutter touched the ceiling. That alone saved 3 weeks.",
    name: 'Rahul D.',
    role: 'Principal Architect · Mumbai',
    initials: 'RD',
  },
]

function ProofSection() {
  return (
    <>
      {/* Featured Project */}
      <section className="section-py bg-ivory-100" aria-label="Featured project">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-xl mb-16">
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
                Casa Frangipani is a 6-bedroom luxury villa in Alibag — executed as a complete
                turnkey interior project. From initial design coordination through final snag
                resolution and handover.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Scope',    value: 'Full Turnkey Interior' },
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
            <div className="max-w-xl mb-16">
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
              Ready for a<br />
              <em className="not-italic text-sandstone-300">Different Standard?</em>
            </h2>

            <p className="text-warmgray-300 text-lg leading-relaxed mb-12">
              Book a private consultation. We&apos;ll show you exactly how HSI and HSIOS™
              work for your project.
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
