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
   HOMEPAGE — All 10 Sections
   ════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeTicker />
      <WhatIsHSIOSSection />
      <HowHSIOSWorksSection />
      <WhyHSIOSExistsSection />
      <WhatWeCreateSection />
      <WhyChooseUsSection />
      <PoweredByHSIOSSection />
      <SustainabilitySection />
      <WhoWeServeSection />
      <FounderQuoteSection />
      <FeaturedProjectSection />
      <HestiaLegacySection />
      <FounderVisionSection />
      <DifferenceSection />
      <ForDevelopersSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}

/* ── 1. HERO ─────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative flex items-end min-h-screen overflow-hidden"
      aria-label="Hero"
    >
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
        {/* Warm cinematic overlay — light at top, deep at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/92 via-charcoal-800/45 to-charcoal-900/20" />
        {/* Subtle warm tint */}
        <div className="absolute inset-0 bg-bronze-800/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury pb-20 pt-40 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex flex-col gap-1.5 mb-7 animate-fade-up">
            <div className="flex items-center gap-3">
              <div className="w-7 h-px bg-sandstone-400" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-sandstone-300">
                India&apos;s First Luxury Home Execution Operating System
              </span>
            </div>
            <p className="pl-10 text-[11px] text-white/45 tracking-wide font-sans">
              Delivered through premium turnkey interior execution services.
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-display-xl text-white leading-[1.05] mb-4 animate-fade-up [animation-delay:120ms]">
            Luxury Homes Need<br />
            More Than Interiors.
          </h1>

          {/* Answer line */}
          <p className="font-serif text-display-sm text-sandstone-300 mb-7 animate-fade-up [animation-delay:180ms]">
            They Need an Operating System.
          </p>

          {/* Subheadline — main offering */}
          <p className="text-lg text-white font-sans font-medium leading-relaxed max-w-xl mb-10 animate-fade-up [animation-delay:240ms] border-l-2 border-sandstone-400 pl-4">
            HSIOS combines premium interior execution, budgeting intelligence, procurement control,
            quality systems, and lifecycle home management — for villas, residences, and developers.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:360ms]">
            <Link href="/contact" className="btn btn-bronze text-base px-8 py-4">
              Book Private Consultation
            </Link>
            <Link href="/hsi-os" className="btn btn-outline-white text-base px-8 py-4">
              Explore HSIOS™
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-up [animation-delay:480ms]">
          {[
            { value: '7+',     label: 'Luxury Villas Delivered' },
            { value: '₹100Cr+', label: 'Projects Managed' },
            { value: '100%',   label: 'Client Visibility' },
            { value: '0',      label: 'Execution Surprises' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-serif text-4xl font-bold text-sandstone-300 mb-1">{value}</div>
              <div className="text-xs font-medium text-white/55 tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

/* ── 2. WHAT IS HSIOS ────────────────────────────────────── */
const hsioPillars = [
  {
    title: 'Project Management',
    desc: 'Milestones, trade sequencing, and task tracking — every decision logged and visible.',
  },
  {
    title: 'Procurement Intelligence',
    desc: 'Material sourcing, vendor vetting, and pricing benchmarks so you never overpay.',
  },
  {
    title: 'Quality Systems',
    desc: 'Site audits, defect tracking, and finish-grade verification at every stage.',
  },
  {
    title: 'Budget Transparency',
    desc: 'Live cost dashboards and approval flows — no silent overruns, ever.',
  },
  {
    title: 'Conflict Detection',
    desc: 'Pre-execution clash analysis catches design and trade conflicts before they hit the site.',
  },
  {
    title: 'Home Lifecycle Support',
    desc: 'Post-handover AMC, maintenance scheduling, and smart home management.',
  },
]

function WhatIsHSIOSSection() {
  return (
    <section className="section-py bg-white border-b border-ivory-200" aria-label="What is HSIOS">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-3xl mb-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {hsioPillars.map(({ title, desc }, i) => (
            <RevealOnScroll key={title} delay={i * 0.07}>
              <div className="flex gap-4 p-6 rounded-2xl bg-ivory-50 border border-ivory-200 hover:border-sandstone-300 hover:shadow-luxury transition-all duration-300">
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

        <RevealOnScroll delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/hsi-os" className="btn btn-bronze">
              See the Full Platform →
            </Link>
            <Link href="/demo" className="btn btn-outline-dark">
              Request a Demo
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 3. HOW HSIOS WORKS ──────────────────────────────────── */
const workflowSteps = [
  { step: 'Vision',   desc: 'Your aspirations, lifestyle brief, and project intent — captured and documented before any design begins.' },
  { step: 'Plan',     desc: 'Scope, design coordination, and execution strategy locked into a single source of truth.' },
  { step: 'Price',    desc: 'Transparent BOQ, market-benchmarked rates, and budget approval flows — no hidden costs.' },
  { step: 'Procure',  desc: 'Vendor vetting, material sourcing, and procurement tracking with full audit trail.' },
  { step: 'Build',    desc: 'Trade sequencing, site supervision, and real-time progress updates at every milestone.' },
  { step: 'Monitor',  desc: 'Quality audits, conflict resolution, and sign-offs so nothing slips through.' },
  { step: 'Handover', desc: 'Defect-free handover with complete documentation, warranties, and snag closure.' },
  { step: 'Maintain', desc: 'Post-handover AMC, lifecycle management, and smart home support — your home, managed for life.' },
]

function HowHSIOSWorksSection() {
  return (
    <section className="section-py bg-charcoal-900 relative overflow-hidden" aria-label="How HSIOS works">
      <div className="absolute inset-0 bg-gradient-to-br from-sandstone-900/20 to-transparent pointer-events-none" />
      <div className="container-luxury relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <div className="section-label text-sandstone-400">The Process</div>
            <h2 className="font-serif text-display-lg text-white mb-4">
              How HSIOS™ Works.
            </h2>
            <p className="text-warmgray-400 text-lg leading-relaxed">
              Eight stages. One platform. Every decision logged, every rupee tracked,
              every trade coordinated — from first vision to final handover and beyond.
            </p>
          </div>
        </RevealOnScroll>

        {/* Step flow */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sandstone-600/40 to-transparent" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {workflowSteps.map(({ step, desc }, i) => (
              <RevealOnScroll key={step} delay={i * 0.07}>
                <div className="relative flex flex-col items-start lg:items-center lg:text-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/8 hover:border-sandstone-500/40 hover:bg-white/8 transition-all duration-300">
                  {/* Number badge */}
                  <div className="w-10 h-10 rounded-full bg-sandstone-400/15 border border-sandstone-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-sandstone-300 text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-base mb-1">{step}</h3>
                    <p className="text-warmgray-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                  {/* Arrow — desktop only, not on last */}
                  {i < workflowSteps.length - 1 && (
                    <span className="hidden lg:block absolute -right-2 top-9 text-sandstone-600/50 text-xs z-10">▶</span>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/how-it-works" className="btn btn-bronze">
              See the Full Process →
            </Link>
            <Link href="/demo" className="btn btn-outline-white">
              Request a Demo
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 4. WHAT WE CREATE ───────────────────────────────────── */
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
            <RevealOnScroll key={title} delay={i * 0.08}>
              <Link href={href} className="group block card-warm p-8 h-full">
                <div className="font-serif text-4xl font-bold text-sandstone-200 mb-5 leading-none group-hover:text-sandstone-300 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 group-hover:text-sandstone-700 transition-colors">
                  {title}
                </h3>
                <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-sandstone-600 opacity-0 group-hover:opacity-100 transition-opacity">
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

/* ── 3. WHY CHOOSE US ────────────────────────────────────── */
const benefits = [
  { n: '01', title: 'Design Fidelity',         desc: 'Every site decision is measured against the approved design. Execution never drifts from intent.' },
  { n: '02', title: 'Single Accountability',   desc: 'One team owns the outcome — design, procurement, execution, and handover. No gaps, no blame-shifting.' },
  { n: '03', title: 'Milestone Quality Gates', desc: 'Structured inspections at each critical phase, documented in HSIOS™ and shared with you in real time.' },
  { n: '04', title: 'Timeline Governance',     desc: 'Every project runs on a binding schedule. Potential delays are surfaced and resolved before they compound.' },
  { n: '05', title: 'Full Cost Transparency',  desc: 'Live budget dashboards. Every approval logged. No surprise invoices at handover.' },
  { n: '06', title: 'Waste Intelligence',      desc: 'HSIOS™ procurement controls cut material over-ordering and site waste — saving cost and carbon.' },
  { n: '07', title: 'Uncompromised Finish',    desc: 'Premium materials, vetted craftsmen, and snag-free handover. What you approved is what you receive.' },
]

function WhyChooseUsSection() {
  return (
    <section className="section-py bg-charcoal-800 text-white relative overflow-hidden" aria-label="Why choose us">
      {/* Subtle warm light top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sandstone-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <div className="section-label text-sandstone-400">
              Why Discerning Clients Choose HSI
            </div>
            <h2 className="font-serif text-display-lg text-white mb-5">
              The Standard You Deserve.{' '}
              <em className="not-italic text-sandstone-300">The Execution You Rarely Get.</em>
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed">
              Most luxury interior projects fail not in design — but in execution. HSI was built to end that.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {benefits.map(({ n, title, desc }, i) => (
            <RevealOnScroll key={n} delay={i * 0.06}>
              <div className="group p-7 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-sandstone-400/30 transition-all duration-300">
                <div className="font-serif text-5xl font-bold text-sandstone-600/30 mb-4 leading-none">
                  {n}
                </div>
                <h3 className="font-sans font-semibold text-white mb-3 leading-snug">{title}</h3>
                <p className="text-warmgray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </RevealOnScroll>
          ))}

          {/* CTA card */}
          <RevealOnScroll delay={0.42}>
            <Link
              href="/contact"
              className="group flex flex-col items-start justify-between p-7 rounded-2xl
                         bg-sandstone-400 text-charcoal-900 hover:bg-sandstone-300
                         transition-all duration-300 min-h-[180px]"
            >
              <div className="font-serif text-xl font-bold leading-snug">
                Ready to experience the difference?
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold mt-6">
                Book Consultation
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

/* ── 4. POWERED BY HSIOS™ ────────────────────────────────── */
const modules = [
  { code: 'IP', label: 'Intelligent Planning',        desc: 'Detect layout inefficiencies and space conflicts before a single rupee is committed.' },
  { code: 'CD', label: 'Conflict Detection Engine',   desc: 'Resolve plumbing, electrical, and joinery clashes in the model — not on the site.' },
  { code: 'BC', label: 'Budget & Cost Intelligence',  desc: 'Live variance tracking, approval flows, and milestone-based cost transparency.' },
  { code: 'SI', label: 'Sustainability Intelligence', desc: 'Waste reduction, smarter sourcing, and carbon tracking — built in from day one.' },
  { code: 'PE', label: 'Premium Execution System',    desc: 'Trade sequencing, quality checkpoints, and timeline governance at every stage.' },
  { code: 'OM', label: 'Ownership Mode',              desc: 'Asset records, maintenance scheduling, and vendor history — after handover for life.' },
]

function PoweredByHSIOSSection() {
  return (
    <section className="section-py bg-ivory-200" aria-label="Powered by HSIOS">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Copy */}
          <div>
            <RevealOnScroll>
              <div className="section-label">The Intelligence Behind Every Project</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-6">
                Powered by{' '}
                <span className="text-sandstone-600">HSIOS™</span>
                <br />— The Operating System<br />
                for Luxury Execution.
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed mb-8">
                Purpose-built for premium residential interiors. Not a generic tool adapted — a platform that speaks the language of villa projects.
              </p>
              <div className="flex flex-col gap-4 mb-10">
                {modules.map(({ code, label, desc }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl hover:bg-ivory-100 transition-colors">
                    <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-sandstone-100 border border-sandstone-200 flex items-center justify-center">
                      <span className="font-sans font-bold text-[9px] tracking-widest text-sandstone-600">{code}</span>
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-charcoal-800 text-sm mb-0.5">{label}</div>
                      <div className="text-warmgray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/hsi-os" className="btn btn-dark">
                  Explore HSIOS™
                </Link>
                <Link href="/contact" className="btn btn-outline-dark">
                  Request Demo
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Visual — Dashboard Mockup */}
          <RevealOnScroll delay={0.15} className="lg:order-first">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-sandstone-400/10 rounded-4xl blur-2xl" />

              <div className="relative bg-charcoal-800 rounded-3xl overflow-hidden shadow-luxury-lg border border-white/8">
                {/* Mock header bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-sandstone-400" />
                    <span className="text-xs font-semibold text-white/70 tracking-wide">HSIOS™ Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Mock stats */}
                <div className="grid grid-cols-3 gap-px bg-white/5 border-b border-white/8">
                  {[
                    { label: 'Budget Used', val: '68%', color: 'text-sandstone-300' },
                    { label: 'Days Remaining', val: '34', color: 'text-white' },
                    { label: 'Tasks Done', val: '142', color: 'text-sandstone-300' },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="bg-charcoal-800 p-5">
                      <div className={`font-serif text-2xl font-bold ${color}`}>{val}</div>
                      <div className="text-xs text-white/40 mt-1">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Mock progress bars */}
                <div className="px-6 py-6 space-y-4">
                  {[
                    { label: 'Living Room', pct: 92, color: 'bg-sandstone-400' },
                    { label: 'Master Suite', pct: 75, color: 'bg-sandstone-500' },
                    { label: 'Kitchen',      pct: 58, color: 'bg-bronze-600' },
                    { label: 'Pool Deck',    pct: 40, color: 'bg-warmgray-500' },
                  ].map(({ label, pct, color }) => (
                    <div key={label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-white/60">{label}</span>
                        <span className="text-xs font-bold text-white/80">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${color} rounded-full`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent activity */}
                <div className="px-6 pb-6 space-y-2">
                  <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                    Recent Updates
                  </div>
                  {[
                    '✓  Teak flooring approved — procurement initiated',
                    '✓  Electrical rough-in completed — QC passed',
                    '→  Custom joinery arriving Thursday',
                  ].map((item) => (
                    <div key={item} className="text-xs text-white/50 flex items-start gap-2">
                      <span className="mt-0.5 flex-shrink-0">{item.charAt(0)}</span>
                      <span>{item.slice(3)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

/* ── 5. SUSTAINABILITY ENGINE ────────────────────────────── */
const sustainabilityPillars = [
  {
    word: 'Refuse',
    title: 'Refuse Waste at Source',
    desc: 'Unnecessary materials, over-ordering, single-use site waste — rejected before procurement approval.',
  },
  {
    word: 'Reuse',
    title: 'Reuse Wherever Meaningful',
    desc: 'Salvageable materials, premium fixtures, and structural elements are refurbished and reintegrated.',
  },
  {
    word: 'Recycle',
    title: 'Recycle Responsibly',
    desc: 'Construction waste is segregated and routed to certified recyclers — with documented disposal records.',
  },
  {
    word: 'Reduce',
    title: 'Reduce Carbon Footprint',
    desc: 'Local vendor preference and consolidated deliveries lower the carbon cost of every project.',
  },
]

function SustainabilitySection() {
  return (
    <section
      className="section-py relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3A3530 0%, #1C1C1E 100%)' }}
      aria-label="Sustainability"
    >
      {/* Warm light bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">
        <RevealOnScroll className="text-center mb-16 max-w-2xl mx-auto">
          <div className="section-label justify-center text-sandstone-400">Sustainability Engine</div>
          <h2 className="font-serif text-display-lg text-white mb-5">
            Luxury Can Be{' '}
            <em className="not-italic text-sandstone-300">Responsible.</em>
          </h2>
          <p className="text-warmgray-300 text-lg leading-relaxed">
            HSIOS™ embeds sustainability into every project phase — from procurement to disposal. Every decision is measured, documented, and reported.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sustainabilityPillars.map(({ word, title, desc }, i) => (
            <RevealOnScroll key={word} delay={i * 0.1}>
              <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-sandstone-400/40 transition-all duration-400 text-center">
                <div className="font-serif text-3xl font-bold text-sandstone-300 mb-3 group-hover:text-sandstone-200 transition-colors">{word}</div>
                <h3 className="font-sans font-semibold text-white text-sm mb-3">{title}</h3>
                <p className="text-warmgray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-14 text-center">
          <p className="text-warmgray-400 text-sm max-w-lg mx-auto mb-8">
            Tracked through HSIOS™ — every project receives a sustainability report
            documenting waste reduction, sourcing decisions and carbon offsets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sustainability" className="btn btn-outline-white text-sm">
              Our Full Sustainability Commitment
            </Link>
            <Link href="/hsi-os" className="btn btn-outline-white text-sm opacity-70">
              How HSIOS™ Tracks This
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 6. FEATURED PROJECT — CASA FRANGIPANI ───────────────── */
function FeaturedProjectSection() {
  return (
    <section className="section-py bg-ivory-100" aria-label="Featured project">
      <div className="container-luxury">
        <RevealOnScroll className="max-w-xl mb-16">
          <div className="section-label">Featured Project</div>
          <h2 className="font-serif text-display-lg text-charcoal-800">
            Casa Frangipani,{' '}
            <span className="text-sandstone-600">Alibag.</span>
          </h2>
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

          {/* Project details */}
          <RevealOnScroll delay={0.15} className="lg:col-span-2">
            <div className="badge-warm mb-6">Alibag · 6 Bedrooms</div>
            <h3 className="font-serif text-display-sm text-charcoal-800 mb-5">
              A Private Retreat Delivered Without Compromise.
            </h3>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Casa Frangipani is a 6-bedroom luxury villa in Alibag, surrounded by lush
              greenery and designed for absolute privacy. Executed by Hestia Smart Interiors
              as a complete turnkey interior project — from initial design coordination
              through final snag resolution and handover.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Scope',               value: 'Full Turnkey Interior' },
                { label: 'Location',             value: 'Alibag, Maharashtra' },
                { label: 'HSIOS™ Conflicts Caught', value: '12 Pre-Execution' },
                { label: 'Delivered',            value: '3 Weeks Ahead of Schedule' },
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
              <a
                href="https://hestiavillas.in/homes/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark text-sm"
              >
                More on Hestia Villas ↗
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

/* ── 7. HESTIA VILLAS LEGACY ─────────────────────────────── */
const projectStats = [
  { val: '7+',   label: 'Premium Villas Delivered' },
  { val: '2',    label: 'States — MH & Goa' },
  { val: '100%', label: 'Client Retention' },
]

function HestiaLegacySection() {
  return (
    <section className="section-py bg-ivory-200" aria-label="Hestia Villas legacy">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image collage */}
          <RevealOnScroll className="grid grid-cols-2 gap-4">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
              <Image
                src="/hestia-casa-frangipani.jpg"
                alt="Hestia Villa — Casa Frangipani"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/hestia-serenity-villa.jpg"
                  alt="Hestia Villa — Serenity Villa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/hestia-villa-bellissimo.jpg"
                  alt="Hestia Villa — Villa Bellissimo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Copy */}
          <RevealOnScroll delay={0.1}>
            <div className="section-label">Trust & Legacy</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-6">
              Built on the{' '}
              <span className="text-sandstone-600">Hestia Villas</span>{' '}
              Foundation.
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed mb-6">
              Hestia Smart Interiors is the execution arm of Hestia Villas — one of
              Maharashtra&apos;s most respected boutique villa developers. Our interiors
              credibility is not theoretical. It is built on real projects, real challenges
              and a reputation earned over years.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              Every feature of HSIOS™ was forged through execution challenges in the field —
              from multi-stakeholder Alibag villa projects to complex Mumbai apartment renovations.
              We didn&apos;t just observe the problems. We lived them.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10 py-8 border-y border-ivory-300">
              {projectStats.map(({ val, label }) => (
                <div key={label}>
                  <div className="font-serif text-3xl font-bold text-sandstone-600">{val}</div>
                  <div className="text-xs text-warmgray-500 mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://hestiavillas.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              Visit Hestia Villas →
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

/* ── 8. FOR DEVELOPERS ───────────────────────────────────── */
function ForDevelopersSection() {
  return (
    <section className="section-py bg-ivory-100" aria-label="For developers">
      <div className="container-luxury">
        <div className="rounded-4xl overflow-hidden bg-charcoal-800 grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[320px] lg:min-h-0">
            <Image
              src="/developer-solutions-hero.jpg"
              alt="Luxury developer project — Hestia Smart Interiors"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-charcoal-900/40" />
          </div>

          {/* Copy */}
          <RevealOnScroll className="p-12 xl:p-16 flex flex-col justify-center">
            <div className="section-label text-sandstone-400">For Developers</div>
            <h2 className="font-serif text-display-md text-white mb-6">
              Scale Luxury Execution Across Your Portfolio.
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              HSIOS™ brings consistent execution intelligence to every unit in your development — from sample villas to full-scale luxury projects.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'Standardised execution across all units',
                'Real-time progress for every property',
                'Cost benchmarking and procurement efficiency',
                'Buyer-facing transparency as a sales differentiator',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-warmgray-300">
                  <span className="w-5 h-5 rounded-full bg-sandstone-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/for-developers" className="btn btn-bronze w-fit">
              Developer Solutions →
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

/* ── 9. TESTIMONIALS ─────────────────────────────────────── */
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
    quote: 'We engaged Hestia for our developer sample villa. The outcome elevated the entire project. Buyers can see the quality — and HSIOS™ gave us the documentation to prove it was delivered to spec.',
    name: 'Priya V.',
    role: 'Developer · Alibag Township',
    initials: 'PV',
  },
  {
    quote: "I&apos;ve worked with many execution contractors over 15 years. What sets HSIOS™ apart is that my design intent actually survives site execution. The conflict detection caught a ceiling vs HVAC issue before a single cutter touched the ceiling. That alone saved 3 weeks.",
    name: 'Rahul D.',
    role: 'Principal Architect · Mumbai',
    initials: 'RD',
  },
  {
    quote: "My husband and I both work full time. We simply didn&apos;t have the bandwidth to visit site every weekend. HSIOS™ meant approving things on my phone during lunch, seeing progress by evening, and always knowing exactly where the budget stood.",
    name: 'Nandita S.',
    role: 'Homeowner · Mumbai Apartment',
    initials: 'NS',
  },
  {
    quote: 'Merging two houses for a family of 10 is not a small undertaking. 18 conflicts were caught before site work started. Not once did we face an unexpected bill. The transparency was extraordinary.',
    name: 'Ramesh K.',
    role: 'Family Residence · Alibag',
    initials: 'RK',
  },
]

function TestimonialsSection() {
  return (
    <section className="section-py bg-ivory-200" aria-label="Testimonials">
      <div className="container-luxury">
        <RevealOnScroll className="max-w-xl mb-16">
          <div className="section-label">Client Voices</div>
          <h2 className="font-serif text-display-lg text-charcoal-800">
            What Our Clients{' '}
            <em className="not-italic text-sandstone-600">Actually Say.</em>
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, initials }, i) => (
            <RevealOnScroll key={name} delay={i * 0.1}>
              <div className="card-luxury p-8 flex flex-col h-full bg-white">
                {/* Quote mark */}
                <div className="font-serif text-5xl text-sandstone-300 leading-none mb-4">&ldquo;</div>
                <p className="text-warmgray-700 leading-relaxed text-[15px] flex-1 mb-8 italic">
                  {quote.replace(/'/g, "&apos;")}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-sandstone-100 flex items-center justify-center
                                  font-serif font-bold text-sandstone-700 text-sm flex-shrink-0">
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
      </div>
    </section>
  )
}

/* ── 10. FINAL CTA ───────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1C1C1E 0%, #3A3530 50%, #1C1C1E 100%)' }}
      aria-label="Book consultation"
    >
      {/* Warm light bloom */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-sandstone-600/12 rounded-full blur-3xl" />
      </div>

      {/* Decorative grain */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")" }} />

      <div className="container-luxury relative z-10 text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-sandstone-400/50" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-sandstone-400">
                Begin Your Project
              </span>
              <div className="w-12 h-px bg-sandstone-400/50" />
            </div>

            <h2 className="font-serif text-display-xl text-white mb-6">
              Ready for a<br />
              <em className="not-italic text-sandstone-300">Different Standard?</em>
            </h2>

            <p className="text-warmgray-300 text-lg leading-relaxed mb-12">
              Book a private consultation. We&apos;ll show you exactly how HSI and HSIOS™ work for your project.
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
              +91-8010234802 &nbsp;·&nbsp; hello@hsios.in &nbsp;·&nbsp; Alibag · Mumbai · Pune · Goa
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── NEW: WHY HSIOS EXISTS ───────────────────────────────── */
const painPoints = [
  'Cost overruns',
  'Poor coordination',
  'Hidden execution mistakes',
  'Delays and rework',
  'Wasted materials',
  'Weak sustainability planning',
  'Stressful decision-making',
  'Lack of accountability',
]

function WhyHSIOSExistsSection() {
  return (
    <section className="section-py bg-charcoal-800 relative overflow-hidden" aria-label="Why HSIOS exists">
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
              Missed timelines. Silent cost overruns. Vendors who go dark. Beautiful designs ruined on site. HSIOS™ was built to end that — permanently.
            </p>
            <blockquote className="border-l-2 border-sandstone-400 pl-6 font-serif text-lg text-sandstone-200 italic mb-8">
              &ldquo;For those who refuse ordinary homes, delayed projects, wasteful decisions,
              and outdated execution methods. HSIOS™ was built for a new generation of premium living.&rdquo;
            </blockquote>
            <Link href="/hsi-os" className="btn btn-bronze">Explore HSIOS™ →</Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {painPoints.map((point, i) => (
                <div
                  key={point}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/8
                             hover:bg-white/8 hover:border-sandstone-400/30 transition-all duration-300"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center text-red-400 text-xs flex-shrink-0">✗</span>
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

/* ── NEW: WHO WE SERVE ───────────────────────────────────── */
const personas = [
  { mark: 'HO', title: 'Premium Homeowners',              desc: 'Build once. Build right. Complete visibility, cost clarity and peace of mind from brief to handover.', href: '/for-homeowners' },
  { mark: 'VO', title: 'Villa Owners in Construction',    desc: 'Catch conflicts and cost overruns in planning, not mid-site. Prevent irreversible mistakes before they compound.', href: '/for-homeowners' },
  { mark: 'AR', title: 'Architects & Designers',          desc: 'Protect design vision through intelligent execution. Fewer clashes. Better collaboration. Design fidelity preserved.', href: '/for-architects' },
  { mark: 'DE', title: 'Developers',                      desc: 'Deliver premium projects with better margins, stronger buyer trust and demonstrably faster handover timelines.', href: '/for-developers' },
  { mark: 'NR', title: 'NRI Homeowners',                  desc: 'Full project oversight from anywhere in the world. Real-time updates, zero dependency on being on-site.', href: '/nri-home-interior-management' },
]

function WhoWeServeSection() {
  return (
    <section className="section-py bg-ivory-100" aria-label="Who we serve">
      <div className="container-luxury">
        <RevealOnScroll className="max-w-xl mb-16">
          <div className="section-label">Who We Serve</div>
          <h2 className="font-serif text-display-lg text-charcoal-800">
            Every Client.{' '}
            <span className="text-sandstone-600">One Standard.</span>
          </h2>
          <p className="text-warmgray-600 mt-4 leading-relaxed">
            Whether you are building, renovating, or investing — HSIOS™ brings the same
            execution discipline to every project and every role.
          </p>
        </RevealOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {personas.map(({ mark, title, desc, href }, i) => (
            <RevealOnScroll key={title} delay={i * 0.07}>
              <Link href={href} className="group block p-7 rounded-2xl bg-white border border-ivory-300
                hover:border-sandstone-300 hover:shadow-luxury transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-sandstone-50 border border-sandstone-200 flex items-center justify-center mb-5
                  group-hover:bg-sandstone-100 transition-colors">
                  <span className="font-sans font-bold text-[10px] tracking-widest text-sandstone-600">{mark}</span>
                </div>
                <h3 className="font-serif font-bold text-charcoal-800 text-sm mb-2 group-hover:text-sandstone-700 transition-colors leading-snug">{title}</h3>
                <p className="text-warmgray-500 text-xs leading-relaxed">{desc}</p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── NEW: TRADITIONAL VS HSIOS ───────────────────────────── */
const comparison = [
  { aspect: 'Approach',        traditional: 'Reactive — fix problems as they arise',   hsios: 'Proactive — prevent problems before they occur' },
  { aspect: 'Coordination',    traditional: 'Fragmented across multiple vendors',       hsios: 'Integrated under one accountable team' },
  { aspect: 'Decision-Making', traditional: 'Vendor-led, client left uninformed',       hsios: 'Data-led with client visibility at every step' },
  { aspect: 'Cost Control',    traditional: 'Surprises at invoice stage',               hsios: 'Real-time budget dashboard, zero surprises' },
  { aspect: 'Quality',         traditional: 'Inconsistent, no formal checkpoints',      hsios: 'Milestone gates with documented sign-offs' },
  { aspect: 'Sustainability',  traditional: 'Rarely considered, waste untracked',       hsios: 'Built-in — tracked and reported by HSIOS™' },
  { aspect: 'Client Experience', traditional: 'Stressful, constant follow-up required', hsios: 'Calm — full visibility, minimal intervention needed' },
  { aspect: 'After Handover',  traditional: 'No support, no records retained',          hsios: 'Ownership Mode — managed for the life of the home' },
]

function DifferenceSection() {
  return (
    <section className="section-py bg-ivory-200" aria-label="HSIOS difference">
      <div className="container-luxury">
        <RevealOnScroll className="max-w-2xl mb-16">
          <div className="section-label">Why HSIOS™ is Different</div>
          <h2 className="font-serif text-display-lg text-charcoal-800">
            Traditional Execution{' '}
            <span className="text-sandstone-600">vs the HSIOS™ Standard.</span>
          </h2>
          <p className="text-warmgray-600 mt-4 text-lg leading-relaxed">
            The gap between a beautiful design and a flawlessly delivered home is execution intelligence.
            This is where HSIOS™ operates.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="rounded-3xl overflow-hidden border border-ivory-300 bg-white">
            {/* Header */}
            <div className="grid grid-cols-3 bg-charcoal-800 text-white">
              <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-warmgray-400"></div>
              <div className="px-6 py-4 text-center">
                <div className="text-xs font-bold tracking-widest uppercase text-warmgray-400 mb-1">Traditional</div>
                <div className="text-sm font-semibold text-white/60">Reactive. Fragmented.</div>
              </div>
              <div className="px-6 py-4 text-center bg-sandstone-400/15 border-l border-sandstone-400/20">
                <div className="text-xs font-bold tracking-widest uppercase text-sandstone-400 mb-1">HSIOS™</div>
                <div className="text-sm font-semibold text-white">Proactive. Integrated.</div>
              </div>
            </div>
            {/* Rows */}
            {comparison.map(({ aspect, traditional, hsios }, i) => (
              <div key={aspect} className={`grid grid-cols-3 border-b border-ivory-200 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-ivory-50'}`}>
                <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-warmgray-500">{aspect}</div>
                <div className="px-6 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5 text-sm text-warmgray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />{traditional}
                  </span>
                </div>
                <div className="px-6 py-4 text-center bg-sandstone-50 border-l border-sandstone-100">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sandstone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0" />{hsios}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 11. FOUNDER QUOTE ───────────────────────────────────── */
function FounderQuoteSection() {
  return (
    <section className="py-24 bg-ivory-100 flex items-center justify-center text-center overflow-hidden">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto">
            <span className="text-4xl sm:text-6xl text-sandstone-300 font-serif leading-none opacity-50">&ldquo;</span>
            <h2 className="font-serif text-display-md text-charcoal-800 leading-tight mb-8 mt-4 italic">
              True luxury is not just how a space looks. It is how intelligently, efficiently, and responsibly it is created.
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-12 h-px bg-sandstone-400 mb-4" />
              <p className="font-sans font-bold text-charcoal-800 tracking-widest uppercase text-xs">
                Nishant Mhatre
              </p>
              <p className="text-warmgray-500 text-[10px] tracking-widest uppercase mt-1">
                Founder · Hestia Smart Interiors
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 12. FOUNDER VISION ──────────────────────────────────── */
function FounderVisionSection() {
  return (
    <section className="section-py bg-charcoal-800 relative overflow-hidden" aria-label="Founder Vision">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-overlay pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sandstone-500 rounded-full blur-[120px]" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400">Visionary Leadership</div>
            <h2 className="font-serif text-display-lg text-white mb-8">
              Redefining <em className="not-italic text-sandstone-300">Premium Execution.</em>
            </h2>
            <div className="space-y-5 text-warmgray-300 text-base leading-relaxed">
              <p>
                I am driven by a vision to merge Real Estate, Technology, and AI into future-ready
                ecosystems — leveraging <span className="text-white font-medium">20+ years of international experience</span> to
                create value for investors, businesses, and communities.
              </p>
              <p>
                After a decade driving large-scale telecom and digital transformation programs across
                the USA, UK, Europe, Australia, and India, I transitioned into real estate
                entrepreneurship — founding a premium villa brand that reimagines luxury living through
                design, sustainability, and hospitality partnerships.
              </p>
              <ul className="space-y-3 mt-2">
                {[
                  'Designing investment-ready luxury villa communities powered by clean energy.',
                  'Advising businesses on AI-driven digital transformation and intelligent automation.',
                  'Mentoring early-stage startups on business models and investor pitches.',
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sandstone-300 font-serif italic text-base">
                &ldquo;I thrive at the intersection of vision and execution — the next decade belongs
                to entrepreneurs who can merge sustainability with intelligence.&rdquo;
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about" className="btn btn-outline-white">
                Read the Founder&apos;s Story →
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-sandstone-400/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-charcoal-900 aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/nishant-mhatre.jpg"
                  alt="Nishant Mhatre — Founder of Hestia Smart Interiors"
                  fill
                  className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-white font-bold tracking-tight">Nishant Mhatre</h3>
                  <p className="text-sandstone-400 text-xs font-semibold tracking-widest uppercase">Founder & Visionary</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

