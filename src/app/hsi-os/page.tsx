import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'HSIOS™ Platform — The Operating System for Luxury Interior Execution',
  description:
    'HSIOS™ is purpose-built software for premium residential interior execution. Manage planning, budgeting, vendor coordination and real-time tracking in one unified platform.',
  alternates: { canonical: 'https://www.hsios.in/hsi-os' },
}

const modules = [
  {
    n: '01', icon: '🗂️',
    title: 'Project Planning Engine',
    desc: 'Scope definitions, timeline structuring and execution roadmaps built specifically for luxury residential complexity — not adapted from generic tools.',
    features: ['Scope definition & BOQ', 'Phase-based milestone planning', 'Design change management', 'Trade sequencing'],
  },
  {
    n: '02', icon: '💰',
    title: 'Budget & Cost Intelligence',
    desc: 'Live cost tracking across every room, trade and vendor. Variance alerts. Real-time budget dashboards. The end of financial surprises.',
    features: ['Real-time spend tracking', 'Vendor-level cost breakdown', 'Change order impact analysis', 'Projected completion cost'],
  },
  {
    n: '03', icon: '⚡',
    title: 'Execution Tracking System',
    desc: 'Real-time progress monitoring across all teams, trades and site activities. Milestone tracking. Snag management. Quality inspection logs.',
    features: ['Milestone progress tracking', 'Snag management', 'Quality inspection records', 'Site photo documentation'],
  },
  {
    n: '04', icon: '🔗',
    title: 'Vendor & Procurement',
    desc: 'Streamlined vendor coordination, purchase orders, delivery schedules and approval workflows. Every vendor relationship structured and accountable.',
    features: ['Vendor onboarding & rating', 'PO management', 'Delivery tracking', 'Invoice approval workflow'],
  },
  {
    n: '05', icon: '📊',
    title: 'Real-Time Client Dashboard',
    desc: 'Elegant dashboards giving homeowners and developer clients instant visibility. Progress, costs, decisions — all in one place, always current.',
    features: ['Live progress overview', 'Budget vs actuals', 'Key decisions log', 'Document centre'],
  },
]

const usageModels = [
  {
    label: 'Services + Platform',
    title: 'End-to-End Execution Partner',
    desc: 'HSI manages the complete interior execution — from planning and design coordination to on-site delivery — fully powered by HSIOS™. Maximum outcome, minimal client effort.',
    cta: '/contact',
    ctaLabel: 'Discuss Your Project',
  },
  {
    label: 'Platform Only',
    title: 'Platform-Enabled Execution',
    desc: 'Use HSIOS™ as a standalone platform. Architects, designers, developers and execution teams manage their own projects with better structure, real-time data and client transparency.',
    cta: '/contact',
    ctaLabel: 'Request Demo',
    highlighted: true,
  },
  {
    label: 'Collaborative Model',
    title: 'Works With Your Architect',
    desc: 'Retain your existing architect or interior designer. HSIOS™ manages the execution layer — tracking progress, monitoring costs and maintaining full accountability.',
    cta: '/for-homeowners',
    ctaLabel: 'Learn More',
  },
]

export default function HSIOSPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative py-40 bg-charcoal-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bronze-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">HSIOS™</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                The Operating System<br />
                for <em className="not-italic text-sandstone-300">Luxury Interior Execution.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                HSIOS™ is purpose-built for premium residential interiors — not a generic project tool
                adapted for the industry. It speaks the language of villa projects: BOQ management,
                trade sequencing, material lead times, vendor coordination and client reporting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Request a Demo</Link>
                <Link href="/how-it-works" className="btn btn-outline-white">See How It Works</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── PLATFORM OVERVIEW ─────────────────────────────── */}
      <section className="py-16 bg-sandstone-400">
        <div className="container-luxury">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: '5', label: 'Core Modules' },
              { val: '100%', label: 'Project Visibility' },
              { val: '0', label: 'Hidden Costs' },
              { val: '1', label: 'Unified Platform' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="font-serif text-4xl font-bold">{val}</div>
                <div className="text-sm text-white/75 mt-1 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 MODULES ─────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Five Modules</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Everything in One{' '}
              <span className="text-sandstone-600">Intelligent System.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 leading-relaxed">
              Five powerful modules working together to give you total command of your project.
            </p>
          </RevealOnScroll>

          <div className="space-y-6">
            {modules.map(({ n, icon, title, desc, features }, i) => (
              <RevealOnScroll key={n} delay={i * 0.06}>
                <div className="group grid md:grid-cols-3 gap-8 p-8 rounded-3xl bg-white border border-ivory-300 hover:border-sandstone-300 hover:shadow-luxury transition-all duration-300">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-3xl">{icon}</span>
                      <div>
                        <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600">Module {n}</div>
                        <h3 className="font-serif text-xl font-bold text-charcoal-800">{title}</h3>
                      </div>
                    </div>
                    <p className="text-warmgray-600 leading-relaxed">{desc}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-warmgray-500 mb-3">Key Features</div>
                    <ul className="space-y-2">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-warmgray-700">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                            <circle cx="7" cy="7" r="6.5" stroke="#C4A882" strokeWidth="1"/>
                            <path d="M4.5 7l2 2 3-3" stroke="#9A7A54" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── USAGE MODELS ──────────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Flexible Engagement</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Use HSIOS™ as a Service,<br />
              a Platform, <span className="text-sandstone-600">or Both.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-3 gap-6">
            {usageModels.map(({ label, title, desc, cta, ctaLabel, highlighted }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1}>
                <div className={`
                  p-9 rounded-3xl flex flex-col h-full
                  ${highlighted
                    ? 'bg-charcoal-800 text-white'
                    : 'bg-white border border-ivory-300 hover:border-sandstone-300 hover:shadow-card transition-all duration-300'
                  }
                `}>
                  <div className={`text-xs font-bold tracking-widest uppercase mb-4 ${highlighted ? 'text-sandstone-400' : 'text-sandstone-600'}`}>
                    {label}
                  </div>
                  <h3 className={`font-serif text-xl font-bold mb-4 ${highlighted ? 'text-white' : 'text-charcoal-800'}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed flex-1 mb-8 ${highlighted ? 'text-warmgray-300' : 'text-warmgray-600'}`}>{desc}</p>
                  <Link
                    href={cta}
                    className={highlighted ? 'btn btn-bronze w-fit' : 'btn btn-outline-dark w-fit text-sm'}
                  >
                    {ctaLabel}
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-charcoal-800 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <h2 className="font-serif text-display-md text-white mb-5">
              See HSIOS™ in Action.
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              Share your project details and we&apos;ll show you exactly how HSIOS™ would work for you.
            </p>
            <Link href="/contact" className="btn btn-bronze text-base px-10 py-4">
              Request a Demo Today →
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
