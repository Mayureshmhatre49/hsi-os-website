import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import MarqueeTicker from '@/components/ui/MarqueeTicker'

export const metadata: Metadata = {
  title: 'Beautiful Interiors. Responsibly Delivered. | Hestia Smart Interiors',
  description:
    'Luxury turnkey interiors for villas, premium homes and holiday properties in Alibag, Mumbai and beyond — powered by HSIOS™, our precision execution platform.',
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
      <WhatWeCreateSection />
      <WhyChooseUsSection />
      <PoweredByHSIOSSection />
      <SustainabilitySection />
      <FounderQuoteSection />
      <FeaturedProjectSection />
      <HestiaLegacySection />
      <FounderVisionSection />
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
          <div className="flex items-center gap-3 mb-7 animate-fade-up">
            <div className="w-7 h-px bg-sandstone-400" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-sandstone-300">
              Hestia Smart Interiors — Luxury Execution Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-display-2xl text-white mb-6 animate-fade-up [animation-delay:120ms]">
            Beautiful Interiors.<br />
            <em className="not-italic text-sandstone-300">Responsibly Delivered.</em>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/75 font-sans leading-relaxed max-w-xl mb-10 animate-fade-up [animation-delay:240ms]">
            Luxury turnkey interiors for villas, premium homes and holiday properties —
            powered by{' '}
            <span className="text-sandstone-300 font-semibold">HSIOS™</span>,
            our intelligent execution platform for precision, transparency and sustainability.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:360ms]">
            <Link href="/contact" className="btn btn-bronze text-base px-8 py-4">
              Book Private Consultation
            </Link>
            <Link href="/projects" className="btn btn-outline-white text-base px-8 py-4">
              Explore Projects
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-up [animation-delay:480ms]">
          {[
            { value: '7+',    label: 'Luxury Villas Delivered' },
            { value: '100%',  label: 'Project Visibility' },
            { value: '0',     label: 'Execution Surprises' },
            { value: '2',     label: 'States — Alibag & Beyond' },
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

/* ── 2. WHAT WE CREATE ───────────────────────────────────── */
const propertyTypes = [
  {
    icon: '🏡',
    title: 'Luxury Villas',
    desc: 'Full-scale villa interiors — every room, every detail, every material sourced with care.',
    href: '/projects',
  },
  {
    icon: '🏙️',
    title: 'Premium Apartments',
    desc: 'High-end residences in Mumbai and Pune, executed with the same rigor as a villa project.',
    href: '/for-homeowners',
  },
  {
    icon: '🌿',
    title: 'Holiday Homes',
    desc: 'Coastal and hill-station retreats that balance luxury with the natural environment.',
    href: '/alibag-villa-interiors',
  },
  {
    icon: '🏕️',
    title: 'Farmhouses',
    desc: 'Rural estates with premium interiors that respect the character and scale of the land.',
    href: '/projects',
  },
  {
    icon: '🌇',
    title: 'Penthouses',
    desc: 'Sky-high residences where every surface and finishing reflects the elevation of the address.',
    href: '/mumbai-luxury-interiors',
  },
  {
    icon: '🏨',
    title: 'Boutique Hospitality',
    desc: 'Small resorts, boutique stays and developer sample villas executed at hospitality grade.',
    href: '/for-developers',
  },
]

function WhatWeCreateSection() {
  return (
    <section className="section-py bg-ivory-100" aria-label="What we create">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <div className="section-label">Spaces We Transform</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-5">
              We Design Spaces That{' '}
              <em className="not-italic text-sandstone-600">Define Lives.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              From Alibag coastal villas to Mumbai penthouses — every project is executed
              as a singular, carefully managed work of craft.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map(({ icon, title, desc, href }, i) => (
            <RevealOnScroll key={title} delay={i * 0.08}>
              <Link href={href} className="group block card-warm p-8 h-full">
                <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                  {icon}
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
  { n: '01', title: 'Design-Led Execution',   desc: 'Every decision honours the design intent. Execution and aesthetics are never in conflict.' },
  { n: '02', title: 'One Accountable Team',   desc: 'No blame shifting between design, execution and vendor teams. One team. One responsibility.' },
  { n: '03', title: 'Quality Checkpoints',    desc: 'Milestone-based quality inspections at every critical phase — documented and shared with you.' },
  { n: '04', title: 'Timeline Discipline',    desc: 'Every project runs on a structured timeline. Delays are flagged — and resolved — before they compound.' },
  { n: '05', title: 'Live Project Visibility', desc: 'Real-time dashboards give you complete visibility into progress, costs and upcoming decisions.' },
  { n: '06', title: 'Less Wastage',           desc: 'Smarter procurement and HSI-OS waste tracking reduce material waste across every project.' },
  { n: '07', title: 'Better Finish Quality',  desc: 'We do not compromise on finishes. Premium materials, premium craftsmen, premium outcome.' },
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
              Most luxury interior projects fail not in design — but in execution.
              HSI was built to end that problem for good.
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
  { icon: '🗂️', label: 'Project Planning Engine',   desc: 'Scope, timelines and execution roadmaps built for real-world complexity.' },
  { icon: '💰', label: 'Budget & Cost Intelligence', desc: 'Live cost tracking, variance alerts and financial clarity at every milestone.' },
  { icon: '⚡', label: 'Execution Tracking',         desc: 'Real-time progress across all teams, trades and site activities.' },
  { icon: '🔗', label: 'Vendor & Procurement',       desc: 'Streamlined vendor coordination, purchase orders and delivery schedules.' },
  { icon: '📊', label: 'Real-Time Client Reporting', desc: 'Elegant dashboards giving homeowners and developers instant visibility.' },
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
                HSIOS™ is our proprietary execution intelligence platform — purpose-built for premium
                residential interiors. It isn&apos;t a generic project tool adapted for interiors.
                It speaks the language of villa projects: scope definitions, trade sequencing,
                material lead times and procurement control.
              </p>
              <div className="flex flex-col gap-4 mb-10">
                {modules.map(({ icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl hover:bg-ivory-100 transition-colors">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
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
    icon: '🚫',
    title: 'Refuse Waste at Source',
    desc: 'Every procurement decision is evaluated for environmental impact before it is approved. If it can be avoided, it is.',
  },
  {
    word: 'Reuse',
    icon: '♻️',
    title: 'Reuse Usable Assets',
    desc: 'Premium materials and fixtures are retained, refurbished and reintegrated where appropriate — reducing cost and landfill.',
  },
  {
    word: 'Recycle',
    icon: '🌿',
    title: 'Recycle Responsibly',
    desc: 'Construction waste is segregated and routed to certified recyclers. No site waste goes to unmanaged disposal.',
  },
  {
    word: 'Reduce',
    icon: '📉',
    title: 'Reduce Carbon Footprint',
    desc: 'Smarter sourcing, consolidated transport cycles and local vendor preference reduce the carbon cost of every project.',
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
            HSIOS™ embeds sustainability into execution — not as a marketing claim,
            but as a tracked, documented commitment on every project.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sustainabilityPillars.map(({ word, icon, title, desc }, i) => (
            <RevealOnScroll key={word} delay={i * 0.1}>
              <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-sandstone-400/40 transition-all duration-400 text-center">
                <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110">{icon}</div>
                <div className="font-serif text-3xl font-bold text-sandstone-300 mb-3">{word}</div>
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
          <Link href="/hsi-os" className="btn btn-outline-white text-sm">
            Learn How HSIOS™ Tracks This
          </Link>
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
                { label: 'Scope',      value: 'Full Turnkey Interior' },
                { label: 'Location',   value: 'Alibag, Maharashtra' },
                { label: 'Type',       value: '6-Bedroom Villa' },
                { label: 'Delivered',  value: 'On Time & On Budget' },
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
              src="/hestia-villa-blue-haven.jpg"
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
              Scale Luxury Execution Across Your Entire Portfolio.
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              HSIOS™ was designed for multi-unit consistency. Whether you are delivering
              sample villas, a boutique resort or an entire luxury development — our platform
              and execution team ensure every unit meets the same premium standard.
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
    quote: 'Building my villa in Alibag while living in Mumbai was my biggest fear. I expected endless delays. HSIOS™ gave me an exact roadmap, and I tracked every rupee on my dashboard. They delivered my home 3 weeks ahead of schedule.',
    name: 'Saurabh M.',
    role: 'Homeowner · Alibag Villa',
    initials: 'SM',
  },
  {
    quote: 'As an NRI, I had no way of verifying what my previous contractor was charging me. Hestia stepped in, onboarded my property onto their platform, and suddenly I had complete visibility. The trust factor is unmatched.',
    name: 'Ankit R.',
    role: 'NRI Client · Goa Project',
    initials: 'AR',
  },
  {
    quote: 'We engaged Hestia for our developer sample villa in Alibag. The outcome elevated the entire project. Buyers can see the quality — and HSIOS™ gave us the documentation to prove it was delivered to spec.',
    name: 'Priya V.',
    role: 'Developer · Alibag Township',
    initials: 'PV',
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
                  {quote}
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
              Your Home Deserves<br />
              <em className="not-italic text-sandstone-300">This Level of Attention.</em>
            </h2>

            <p className="text-warmgray-300 text-lg leading-relaxed mb-12">
              Book a private consultation. Share your vision — villa, apartment, holiday home
              or development. We will show you exactly how HSI and HSIOS™ would work for you.
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
            <div className="space-y-6 text-warmgray-300 text-lg leading-relaxed">
              <p>
                Nishant Mhatre founded HSIOS with a bold vision—to reinvent premium interiors through technology, sustainability, and execution intelligence.
              </p>
              <p>
                By embedding the principles of <span className="text-white font-medium italic">Refuse, Reuse, Recycle</span>, reducing carbon footprint, and minimizing waste, he is building a smarter future for luxury interior delivery.
              </p>
            </div>
            <div className="mt-10">
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

