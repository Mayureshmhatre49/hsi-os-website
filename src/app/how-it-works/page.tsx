import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'How It Works — The HSI Execution Process | Hestia Smart Interiors',
  description:
    'A structured, phase-by-phase approach to luxury interior execution. From project understanding to handover — here is exactly how HSI and HSIOS™ work.',
  alternates: { canonical: 'https://www.hsios.in/how-it-works' },
}

const phases = [
  {
    n: '01',
    title: 'Project Understanding',
    duration: 'Week 1–2',
    desc: 'We begin by deeply understanding your project — property type, vision, timeline and budget expectations. A detailed brief is compiled and signed off.',
    tasks: ['Discovery call & site visit', 'Project brief documentation', 'Preliminary scope definition', 'Stakeholder alignment'],
    milestone: 'Project Brief Approved',
  },
  {
    n: '02',
    title: 'Planning & BOQ',
    duration: 'Week 2–5',
    desc: 'A comprehensive execution plan is built — including a full Bill of Quantities, vendor shortlist, trade sequencing and phased budget.',
    tasks: ['Full BOQ development', 'Vendor identification & shortlisting', 'Budget proposal sign-off', 'Timeline creation in HSIOS™'],
    milestone: 'Execution Plan Signed Off',
  },
  {
    n: '03',
    title: 'Procurement & Pre-Start',
    duration: 'Week 4–7',
    desc: 'All long-lead materials are ordered, vendors are contracted, site preparation is completed and execution resources are mobilised.',
    tasks: ['Long-lead item procurement', 'Vendor contracts finalised', 'Site preparation & safety', 'HSIOS™ project activation'],
    milestone: 'Site Ready — Execution Begins',
  },
  {
    n: '04',
    title: 'Execution & Monitoring',
    duration: 'Week 6 → Completion',
    desc: 'All interior work is executed under HSIOS™ monitoring. Daily progress is logged, costs are tracked in real time, and clients receive live dashboard access.',
    tasks: ['Day-by-day execution tracking', 'Weekly client progress reports', 'Real-time cost monitoring', 'Quality checkpoints at each phase'],
    milestone: 'Ongoing — Live Dashboard Access',
  },
  {
    n: '05',
    title: 'Snag Resolution & Handover',
    duration: 'Final 2–3 Weeks',
    desc: 'A formal snag walkthrough is conducted. All items are documented in HSIOS™ and resolved before handover. Final documentation package is compiled.',
    tasks: ['Formal snag walkthrough', 'Resolution tracking in HSIOS™', 'Final quality sign-off', 'Documentation handover package'],
    milestone: 'Project Complete — Keys Delivered',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="py-32 bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <div className="section-label text-sandstone-400">Process</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                A Structured Approach to{' '}
                <em className="not-italic text-sandstone-300">Interior Execution.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed">
                Every HSI project follows a disciplined, milestone-based execution process —
                powered by HSIOS™ and designed for premium residential complexity.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── PROCESS STEPS ─────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-ivory-300 hidden md:block" />

            <div className="space-y-8">
              {phases.map(({ n, title, duration, desc, tasks, milestone }, i) => (
                <RevealOnScroll key={n} delay={i * 0.08}>
                  <div className="md:pl-20 relative">
                    {/* Step bubble */}
                    <div className="hidden md:flex absolute left-0 top-8 w-12 h-12 rounded-full bg-sandstone-400 text-white items-center justify-center font-serif font-bold text-sm z-10">
                      {n}
                    </div>

                    <div className="bg-white border border-ivory-300 rounded-3xl p-8 hover:border-sandstone-300 hover:shadow-luxury transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                          <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-1">
                            Phase {n} · {duration}
                          </div>
                          <h2 className="font-serif text-2xl font-bold text-charcoal-800">{title}</h2>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sandstone-50 border border-sandstone-200">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 1v5l3 2" stroke="#9A7A54" strokeWidth="1.5" strokeLinecap="round"/>
                            <circle cx="6" cy="6" r="5.5" stroke="#C4A882"/>
                          </svg>
                          <span className="text-xs font-semibold text-sandstone-700">{milestone}</span>
                        </div>
                      </div>

                      <p className="text-warmgray-600 leading-relaxed mb-6">{desc}</p>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {tasks.map((task) => (
                          <div key={task} className="flex items-center gap-3 text-sm text-warmgray-700">
                            <div className="w-5 h-5 rounded-full bg-sandstone-100 flex items-center justify-center flex-shrink-0">
                              <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                                <path d="M1 3.5l2 2 4-4" stroke="#9A7A54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS WORKS ────────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Why This Works</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Structure Eliminates{' '}
              <span className="text-sandstone-600">Surprises.</span>
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '📋', title: 'Every Decision is Documented', desc: 'No verbal agreements. Every change, approval and decision is logged in HSIOS™ and visible to all stakeholders.' },
              { icon: '💰', title: 'Every Rupee is Tracked', desc: 'Real-time cost visibility across every trade, vendor and line item. Surprises are identified — and resolved — before they become problems.' },
              { icon: '📅', title: 'Every Milestone is Verified', desc: 'Work does not proceed past a milestone until the previous one passes a quality check. Progress is earned, not assumed.' },
            ].map(({ icon, title, desc }) => (
              <RevealOnScroll key={title}>
                <div className="card-warm p-8">
                  <div className="text-4xl mb-5">{icon}</div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section-py bg-charcoal-800 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <h2 className="font-serif text-display-md text-white mb-5">
              Ready to Begin?
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              Let us walk you through how this process would work for your specific project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-bronze">Book Consultation →</Link>
              <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
