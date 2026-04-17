'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const demoItems = [
  {
    icon: '📊',
    title: 'Live Budget Dashboard',
    desc: 'See how every rupee is tracked across all trades in real time — with line-item vendor mapping and digital change order approval.',
  },
  {
    icon: '🔍',
    title: 'Conflict Detection Engine',
    desc: 'Watch a pre-execution conflict scan run on a real project — HVAC vs ceiling, plumbing vs millwork, structural vs layout. Flagged before site work begins.',
  },
  {
    icon: '📅',
    title: 'Project Timeline & Sequencing',
    desc: 'See how trade sequencing is planned and monitored — milestone gates, critical path dependencies, and pre-monsoon deadline tracking.',
  },
  {
    icon: '🏭',
    title: 'Vendor Management Module',
    desc: 'How vendor commitments, delivery windows, and payment milestones are logged and enforced — replacing verbal promises with documented accountability.',
  },
  {
    icon: '📸',
    title: 'Daily Progress Documentation',
    desc: 'How site progress is captured, tied to scheduled milestones, and made available to clients remotely — no site visits required.',
  },
  {
    icon: '🌿',
    title: 'Sustainability & Handover Report',
    desc: 'The full project close-out — waste reduction records, material sourcing decisions, carbon estimates, warranty log, and handover documentation pack.',
  },
]

const audiences = [
  {
    icon: '🏠',
    title: 'Homeowners',
    desc: "See exactly how you'll track your project from any device — budget, progress, and vendor status — without needing to be on site.",
    highlight: false,
  },
  {
    icon: '📐',
    title: 'Architects & Designers',
    desc: 'See how your design intent is protected through conflict detection and documented execution — and how HSIOS™ works alongside your practice.',
    highlight: true,
  },
  {
    icon: '🏗️',
    title: 'Developers',
    desc: "See the multi-unit execution framework, developer reporting layer, and how sample flat delivery is documented for buyer confidence.",
    highlight: false,
  },
]

interface FormState {
  name: string
  email: string
  phone: string
  role: string
  interest: string
  honeypot: string
}

const initialForm: FormState = {
  name: '', email: '', phone: '', role: '', interest: '', honeypot: '',
}

const roles = [
  'Homeowner — planning a villa or apartment',
  'NRI — managing a project remotely',
  'Architect or Interior Designer',
  'Developer — residential or hospitality',
  'Contractor or trade partner',
  'Other',
]

const interests = [
  'Budget tracking and cost visibility',
  'Conflict detection engine',
  'Remote project monitoring (NRI)',
  'Vendor management and accountability',
  'Developer / multi-unit execution',
  'Full platform overview',
]

export default function DemoPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.honeypot) return

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          projectType: `Demo Request — Role: ${form.role}`,
          location: '',
          budget: '',
          message: `Demo request from hsios.in/demo\n\nRole: ${form.role}\nMost interested in: ${form.interest || 'Not specified'}`,
          honeypot: form.honeypot,
        }),
      })
      const data = await res.json() as { ok?: boolean; error?: string }
      if (res.ok && data.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        throw new Error(data.error ?? 'Submission failed')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C1C1E 0%, #3A3530 60%, #1C1C1E 100%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-bronze-700/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="section-label text-sandstone-400">Platform Demo</div>
              <h1 className="font-serif text-display-xl text-white mb-4">
                See HSIOS™<br />
                <em className="not-italic text-sandstone-300">Running on a Real Project.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed mb-8 max-w-lg">
                A 30-minute live walkthrough of the platform — budget tracking, conflict
                detection, progress documentation, and vendor management — on an actual
                completed project.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#request-demo" className="btn btn-bronze">Request Your Demo</a>
                <Link href="/hsi-os" className="btn btn-outline-white">Platform Overview</Link>
              </div>
            </div>

            {/* Right — dashboard mockup */}
            <div>
              <div className="relative">
                <div className="bg-charcoal-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  {/* Topbar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-charcoal-900 border-b border-white/8">
                    <div className="flex gap-1.5">
                      {['bg-red-500', 'bg-yellow-400', 'bg-green-500'].map(c => (
                        <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                      ))}
                    </div>
                    <span className="text-xs text-warmgray-400 font-medium">HSIOS™ · Project Intelligence</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] text-green-400 font-semibold">Live</span>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="p-5 space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        ['Budget', '₹3.2Cr', '✓ On Track'],
                        ['Conflicts', '12 Found', '12 Resolved'],
                        ['Timeline', '68%', '↑ On Schedule'],
                      ].map(([l, v, s]) => (
                        <div key={l} className="bg-white/5 rounded-lg p-3 border border-white/8">
                          <div className="text-[10px] text-warmgray-400 mb-1">{l}</div>
                          <div className="text-base font-bold font-serif text-white">{v}</div>
                          <div className="text-[10px] text-sandstone-400 mt-0.5">{s}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-semibold text-warmgray-400 uppercase tracking-wider">Casa Frangipani · Alibag</span>
                        <span className="text-xs font-bold text-sandstone-400">68%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-sandstone-400 rounded-full w-[68%]" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        ['Conflict Detection Scan', 'Complete', true],
                        ['BOQ & Planning', 'Complete', true],
                        ['Execution & Monitoring', 'Live', false, true],
                        ['Snag Resolution', 'Pending', false],
                        ['Handover Documentation', 'Pending', false],
                      ].map(([t, s, done, live]) => (
                        <div key={String(t)} className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0
                            ${done ? 'bg-sandstone-400 text-white' : live ? 'bg-green-400/20 border border-green-400' : 'border border-white/20'}`}>
                            {done ? '✓' : live ? <span className="w-1.5 h-1.5 rounded-full bg-green-400 block" /> : ''}
                          </div>
                          <span className={`text-xs ${done ? 'text-warmgray-300 line-through' : live ? 'text-white font-semibold' : 'text-warmgray-500'}`}>{t}</span>
                          <span className={`ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded
                            ${done ? 'bg-sandstone-400/20 text-sandstone-400' : live ? 'bg-green-400/15 text-green-400' : 'text-warmgray-500'}`}>{s}</span>
                        </div>
                      ))}
                    </div>
                    {/* Conflict mini-scan */}
                    <div className="border-t border-white/8 pt-4">
                      <div className="text-[10px] font-bold tracking-widest uppercase text-sandstone-400 mb-3">◆ Conflict Scan — Pre-Execution</div>
                      {[
                        ['HVAC vs false ceiling depth', 'Resolved'],
                        ['Plumbing vs kitchen island', 'Resolved'],
                        ['Staircase vs structural beam', 'Resolved'],
                      ].map(([clash, status]) => (
                        <div key={clash} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                          <span className="text-[11px] text-warmgray-300">{clash}</span>
                          <span className="text-[9px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">{status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 text-[10px] font-bold tracking-widest uppercase bg-sandstone-400 text-white px-3 py-1 rounded-full">
                  HSIOS™ v2 · Live Demo Build
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL SEE ───────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">What You&apos;ll See</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              A 30-Minute Live<br />
              <span className="text-sandstone-600">Platform Walkthrough.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 leading-relaxed">
              Every demo runs on a real completed project — not a staging environment.
              You see exactly what a client or architect sees during live execution.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoItems.map(({ icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card-warm p-8 h-full">
                  <div className="text-4xl mb-5">{icon}</div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label text-sandstone-400">Who Should Request a Demo</div>
            <h2 className="font-serif text-display-lg text-white">
              Built for Every<br />
              <em className="not-italic text-sandstone-300">Decision-Maker.</em>
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-3 gap-6">
            {audiences.map(({ icon, title, desc, highlight }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className={`
                  rounded-3xl p-8 h-full border transition-all duration-300
                  ${highlight
                    ? 'bg-sandstone-400 border-sandstone-300'
                    : 'bg-white/5 border-white/10 hover:bg-white/8'}
                `}>
                  <div className="text-4xl mb-5">{icon}</div>
                  <h3 className={`font-serif text-xl font-bold mb-3 ${highlight ? 'text-white' : 'text-white'}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${highlight ? 'text-white/85' : 'text-warmgray-400'}`}>{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO REQUEST FORM ─────────────────────────────── */}
      <section id="request-demo" className="section-py bg-ivory-200">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Info */}
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <div className="lg:sticky lg:top-28 space-y-8">
                  <div>
                    <div className="section-label">Request Your Demo</div>
                    <h2 className="font-serif text-display-sm text-charcoal-800 mb-4">
                      See It on a Real Project.
                    </h2>
                    <p className="text-warmgray-600 leading-relaxed">
                      We will schedule a 30-minute screen share at a time that works for you.
                      No slides, no pitch deck — just the live platform on a real completed project.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-ivory-300">
                      <div className="w-10 h-10 rounded-xl bg-sandstone-50 flex items-center justify-center flex-shrink-0 text-xl">⏱️</div>
                      <div>
                        <div className="font-semibold text-charcoal-800 text-sm">30 Minutes</div>
                        <div className="text-xs text-warmgray-500 mt-0.5">Live screen share — no slides</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-ivory-300">
                      <div className="w-10 h-10 rounded-xl bg-sandstone-50 flex items-center justify-center flex-shrink-0 text-xl">🏠</div>
                      <div>
                        <div className="font-semibold text-charcoal-800 text-sm">Real Project Data</div>
                        <div className="text-xs text-warmgray-500 mt-0.5">Alibag villa — not a staging environment</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-ivory-300">
                      <div className="w-10 h-10 rounded-xl bg-sandstone-50 flex items-center justify-center flex-shrink-0 text-xl">💬</div>
                      <div>
                        <div className="font-semibold text-charcoal-800 text-sm">Q&A Included</div>
                        <div className="text-xs text-warmgray-500 mt-0.5">Ask anything about the platform or process</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-sandstone-50 border border-sandstone-200">
                    <p className="text-sm text-warmgray-700 leading-relaxed">
                      <span className="font-semibold text-charcoal-800">No commitment required.</span>{' '}
                      The demo is purely to help you understand what HSIOS™ can do for your
                      project or practice. No pressure to engage.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <RevealOnScroll delay={0.1}>
                <div className="bg-white rounded-4xl p-10 border border-ivory-300 shadow-luxury">

                  {status === 'success' ? (
                    <div className="text-center py-16">
                      <div className="text-6xl mb-6">✓</div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-3">
                        Demo Request Received.
                      </h3>
                      <p className="text-warmgray-600 leading-relaxed mb-8 max-w-sm mx-auto">
                        We&apos;ll reach out within 24 hours to schedule your 30-minute walkthrough
                        at a time that works for you.
                      </p>
                      <a
                        href="https://wa.me/918010234802?text=Hi%20HSIOS%2C%20I%27ve%20just%20requested%20a%20demo%20via%20your%20website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-bronze"
                      >
                        Message Us on WhatsApp
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <h2 className="font-serif text-2xl font-bold text-charcoal-800 mb-2">
                        Request a Demo
                      </h2>
                      <p className="text-warmgray-500 text-sm mb-8">
                        We&apos;ll schedule your walkthrough within 24 hours.
                      </p>

                      {/* Honeypot */}
                      <input
                        type="text" name="honeypot" value={form.honeypot}
                        onChange={handleChange} className="hidden"
                        tabIndex={-1} autoComplete="off" aria-hidden="true"
                      />

                      <div className="space-y-5">
                        <div>
                          <label htmlFor="name" className="form-label">Full Name *</label>
                          <input
                            id="name" type="text" name="name"
                            value={form.name} onChange={handleChange}
                            placeholder="Your full name"
                            required className="form-input"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="email" className="form-label">Email Address *</label>
                            <input
                              id="email" type="email" name="email"
                              value={form.email} onChange={handleChange}
                              placeholder="hello@example.com"
                              required className="form-input"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
                            <input
                              id="phone" type="tel" name="phone"
                              value={form.phone} onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className="form-input"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="role" className="form-label">I am a… *</label>
                          <select
                            id="role" name="role"
                            value={form.role} onChange={handleChange}
                            required className="form-input"
                          >
                            <option value="">Select your role</option>
                            {roles.map((r) => (
                              <option key={r} value={r}>{r}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="interest" className="form-label">I&apos;m most interested in seeing…</label>
                          <select
                            id="interest" name="interest"
                            value={form.interest} onChange={handleChange}
                            className="form-input"
                          >
                            <option value="">Select (optional)</option>
                            {interests.map((r) => (
                              <option key={r} value={r}>{r}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {status === 'error' && (
                        <div className="mt-5 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                          {errorMsg || 'Something went wrong. Please try WhatsApp directly.'}
                        </div>
                      )}

                      <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="btn btn-bronze disabled:opacity-60 disabled:cursor-not-allowed text-base px-10 py-4"
                        >
                          {status === 'sending' ? 'Sending…' : 'Request Demo →'}
                        </button>
                        <p className="text-xs text-warmgray-400 self-center">
                          We&apos;ll reach out within 24 hours. No spam, no pressure.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-20 bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll className="mb-12">
            <div className="section-label">Demo FAQ</div>
            <h2 className="font-serif text-display-sm text-charcoal-800">
              Questions About the Demo
            </h2>
          </RevealOnScroll>
          <div className="space-y-4">
            {[
              {
                q: 'Is this a sales call or an actual product demo?',
                a: "It's a live screen share of the HSIOS™ platform on a real completed project. You'll see the budget dashboard, conflict scan results, progress documentation, and vendor management in action — not a slide deck. If it makes sense to discuss your project afterwards, we're happy to. But the demo itself is purely informational.",
              },
              {
                q: 'Does the demo require me to share any project details?',
                a: "Not at all. The demo runs on our own completed project data. You don't need to share anything about your project to attend — the purpose is to show you the platform, not to qualify your project.",
              },
              {
                q: 'How quickly can I schedule a demo after requesting?',
                a: "We'll reach out within 24 hours of your request to find a time that works. Most demos are scheduled within 2–3 working days.",
              },
              {
                q: "I'm an NRI. Can I attend the demo from overseas?",
                a: "Absolutely. The demo is a screen share — it works from any time zone. We regularly schedule walkthroughs for clients in the UK, UAE, US, Singapore, and Australia.",
              },
            ].map(({ q, a }) => (
              <RevealOnScroll key={q}>
                <div className="p-7 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 transition-colors">
                  <h3 className="font-serif font-bold text-charcoal-800 mb-2">{q}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{a}</p>
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
              Not Ready for a Demo Yet?
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              Start with the platform overview — how HSIOS™ works, what each module does,
              and what it means for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/hsi-os" className="btn btn-bronze">Explore the Platform →</Link>
              <Link href="/pricing" className="btn btn-outline-white">View Pricing</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
