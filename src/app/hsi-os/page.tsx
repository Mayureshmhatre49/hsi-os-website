import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import MarqueeTicker from '@/components/ui/MarqueeTicker'
import PlatformPreview from '@/components/ui/PlatformPreview'
import FAQAccordion from '@/components/ui/FAQAccordion'

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
    desc: 'Analyse plans before execution begins — identifying poor furniture flow, impractical layouts, space wastage, and ventilation mistakes when corrections are still easy and economical.',
    features: ['Scope definition & BOQ', 'Upfront layout and flow analysis', 'Phase-based milestone planning', 'Design change management', 'Trade sequencing and coordination'],
    ui: (
      <div className="space-y-2 mt-4">
        {[['Scope', '100%'], ['Plan', '75%'], ['Brief', '55%']].map(([label, w]) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-xs text-warmgray-500 w-10">{label}</span>
            <div className="flex-1 h-1.5 bg-ivory-300 rounded-full overflow-hidden">
              <div className="h-full bg-sandstone-400 rounded-full" style={{ width: w }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    n: '02', icon: '💰',
    title: 'Budget & Cost Intelligence',
    desc: 'Live cost tracking across every room, trade and vendor. Variance alerts. Real-time budget dashboards. The end of financial surprises.',
    features: ['Real-time spend tracking', 'Vendor-level cost breakdown', 'Change order impact analysis', 'Projected completion cost'],
    ui: (
      <div className="mt-4">
        <div className="flex gap-3 mb-2">
          {[['₹4.5Cr','Spent','bg-sandstone-400'],['₹10.5Cr','Balance','bg-ivory-300'],['0','Overruns','bg-green-100']].map(([v,k,bg]) => (
            <div key={k} className={`flex-1 ${bg} rounded-lg p-2 text-center`}>
              <div className="text-xs font-bold text-charcoal-800">{v}</div>
              <div className="text-[10px] text-warmgray-600">{k}</div>
            </div>
          ))}
        </div>
        <div className="h-1.5 bg-ivory-300 rounded-full overflow-hidden">
          <div className="h-full bg-sandstone-400 rounded-full w-[30%]" />
        </div>
      </div>
    ),
  },
  {
    n: '03', icon: '⚡',
    title: 'Execution Tracking System',
    desc: 'Real-time progress monitoring across all teams, trades and site activities. Milestone tracking. Snag management. Quality inspection logs.',
    features: ['Milestone progress tracking', 'Snag management', 'Quality inspection records', 'Site photo documentation'],
    ui: (
      <div className="mt-4 space-y-1.5">
        {[['✓ Planning complete','text-green-600'],['✓ Budgeting locked','text-green-600'],['● Execution — Live','text-sandstone-600'],['○ QA Pending','text-warmgray-400']].map(([t,c]) => (
          <div key={t} className={`text-xs font-medium ${c}`}>{t}</div>
        ))}
      </div>
    ),
  },
  {
    n: '04', icon: '🔗',
    title: 'Vendor & Procurement',
    desc: 'Streamlined vendor coordination, purchase orders, delivery schedules and approval workflows. Every vendor relationship structured and accountable.',
    features: ['Vendor onboarding & rating', 'PO management', 'Delivery tracking', 'Invoice approval workflow'],
    ui: (
      <div className="mt-4 grid grid-cols-2 gap-1.5">
        {[['Electrician','bg-green-100 text-green-700'],['Carpenter','bg-green-100 text-green-700'],['Plumber','bg-yellow-100 text-yellow-700'],['Flooring','bg-sandstone-100 text-sandstone-700']].map(([v,c]) => (
          <div key={v} className={`text-[10px] font-semibold px-2 py-1.5 rounded-md ${c}`}>{v}</div>
        ))}
      </div>
    ),
  },
  {
    n: '05', icon: '📊',
    title: 'Real-Time Client Dashboard',
    desc: 'Elegant dashboards giving homeowners and developer clients instant visibility. Progress, costs, decisions — all in one place, always current.',
    features: ['Live progress overview', 'Budget vs actuals', 'Key decisions log', 'Document centre'],
  },
  {
    n: '06', icon: '⚠️',
    title: 'Conflict Detection Engine',
    desc: 'Identify clashes between trades before site work begins — when corrections are still easy and economical. Resolving these digitally saves time, cost, rework, and frustration.',
    features: [
      'Civil vs electrical conduit routing',
      'Plumbing vs furniture alignment',
      'HVAC vs ceiling design and depth',
      'Bathroom slope and drain planning',
      'Shaft and service access limitations',
      'Storage planning and circulation flow',
      'Door swing and staircase conflicts',
      'Structural vs interior wall alignment',
    ],
    ui: (
      <div className="mt-4 space-y-1.5">
        {[
          ['⚠ Poor furniture flow in living area', 'text-yellow-600'],
          ['✗ Plumbing vs kitchen island clash', 'text-red-500'],
          ['✗ HVAC duct vs false ceiling depth', 'text-red-500'],
          ['✓ Door swing conflicts — resolved', 'text-green-600'],
          ['✓ Bathroom slope — corrected upfront', 'text-green-600'],
        ].map(([t, c]) => (
          <div key={String(t)} className={`text-xs font-medium ${c}`}>{String(t)}</div>
        ))}
      </div>
    ),
  },
  {
    n: '07', icon: '🏠',
    title: 'Ownership Mode',
    desc: 'Your home should become smarter after handover. HSIOS™ ownership systems help manage asset records, maintenance planning, upgrade history and vendor intelligence for the life of your home.',
    features: ['Asset & material records', 'Maintenance schedule planning', 'Upgrade history tracking', 'Vendor intelligence log'],
    ui: (
      <div className="mt-4 flex items-end gap-1.5 h-12">
        {[40,65,50,80,60,90].map((h, i) => (
          <div key={i} className="flex-1 bg-sandstone-400 rounded-sm" style={{ height: `${h}%`, opacity: 0.6 + i * 0.06 }} />
        ))}
      </div>
    ),
  },
]

const howWeWork = [
  {
    n: '01', clr: 'border-sandstone-400', num: 'text-sandstone-500', tag: 'bg-sandstone-100 text-sandstone-700',
    title: 'End-to-End Execution Partner',
    desc: 'HSI manages your complete interior execution — from planning and design coordination to on-site delivery — fully powered by HSIOS™.',
    features: ['Dedicated execution team', 'Full HSIOS™ platform access', 'Weekly client reporting'],
    tagLabel: 'Service + Platform',
  },
  {
    n: '02', clr: 'border-purple-400', num: 'text-purple-500', tag: 'bg-purple-100 text-purple-700',
    title: 'Platform-Enabled Execution',
    desc: 'Use HSIOS™ as a standalone platform. Architects, designers, and developers manage their own projects with full structure and transparency.',
    features: ['Full platform access', 'Your team, our system', 'Onboarding + training'],
    tagLabel: 'Platform Only',
  },
  {
    n: '03', clr: 'border-blue-400', num: 'text-blue-500', tag: 'bg-blue-100 text-blue-700',
    title: 'Works with Your Existing Team',
    desc: 'Retain your architect — HSIOS™ manages the execution layer, tracking progress and maintaining full accountability alongside your design team.',
    features: ['Collaborative by design', 'Design-execution bridge', 'Shared visibility layer'],
    tagLabel: 'Collaborative Model',
  },
]

const processSteps = [
  { n: 1, title: 'Project Understanding', desc: 'Goals, brief & scope definition', chip: '📋 Brief locked',   active: true },
  { n: 2, title: 'Planning & Budgeting',  desc: 'Timeline, BOQ & cost structure',    chip: '💰 BOQ approved'                },
  { n: 3, title: 'Execution & Monitoring',desc: 'Real-time site tracking & vendor management', chip: '● Live now', live: true },
  { n: 4, title: 'QA & Compliance',       desc: 'Quality checks, snag lists & sign-off', chip: '✓ Snag-free'               },
  { n: 5, title: 'Delivery & Handover',   desc: 'Final handover & documentation',    chip: '🏠 Keys delivered'              },
]

const testimonials = [
  {
    initial: 'S', name: 'Saurabh M.', role: 'Homeowner · Alibag Villa',
    quote: 'Building my villa in Alibag while living in Mumbai was my biggest fear. I expected endless delays. HSI OS gave me an exact roadmap, and I tracked every rupee on my dashboard. They delivered my home 3 weeks ahead of schedule.',
    highlight: '3 weeks ahead of schedule.',
    outcomes: ['Delivered 3 weeks early', '₹0 cost overrun', '100% transparent spend', 'Full OS dashboard access'],
  },
  {
    initial: 'A', name: 'Ankit R.', role: 'NRI Client · Goa Project',
    quote: 'As an NRI, I had no way of verifying what my previous contractor was charging me. HSI stepped in, onboarded my property, and suddenly I had complete visibility. The trust factor is unmatched.',
    highlight: 'complete visibility.',
  },
]

export default function HSIOSPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-charcoal-800">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bronze-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-sandstone-400/15 border border-sandstone-400/25">
                <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-sandstone-400">Execution Intelligence Platform</span>
              </div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                The Operating System<br />
                for <em className="not-italic text-sandstone-300">Premium Interiors.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed mb-8 max-w-xl">
                HSIOS™ brings military-grade execution intelligence to luxury villa and residential
                interiors — real-time cost tracking, vendor coordination, and complete transparency
                for every rupee and every day of your project.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="btn btn-bronze">Request a Demo →</Link>
                <Link href="/how-it-works" className="btn btn-outline-white">See How It Works</Link>
              </div>
              <div className="flex flex-wrap gap-8">
                {[['7+','Premium Villas'],['₹100Cr+','Execution Value'],['100%','Cost Transparency'],['0','Surprises']].map(([v,l]) => (
                  <div key={l}>
                    <div className="font-serif text-2xl font-bold text-white">{v}</div>
                    <div className="text-xs text-warmgray-400 mt-0.5 uppercase tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard card mockup */}
            <div className="animate-fade-up [animation-delay:300ms]">
              <div className="relative">
                <div className="bg-charcoal-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  {/* Topbar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-charcoal-900 border-b border-white/8">
                    <div className="flex gap-1.5">
                      {['bg-red-500','bg-yellow-400','bg-green-500'].map(c => <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />)}
                    </div>
                    <span className="text-xs text-warmgray-400 font-medium">Portfolio Intelligence</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] text-green-400 font-semibold">Live</span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-5 space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      {[['Budget','₹15Cr','↑ On Track'],['Spent','₹4.5Cr','30% utilised'],['Timeline','34%','↑ On Schedule']].map(([l,v,s]) => (
                        <div key={l} className="bg-white/5 rounded-lg p-3 border border-white/8">
                          <div className="text-[10px] text-warmgray-400 mb-1">{l}</div>
                          <div className="text-base font-bold font-serif text-white">{v}</div>
                          <div className="text-[10px] text-sandstone-400 mt-0.5">{s}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-semibold text-warmgray-400 uppercase tracking-wider">Execution Progress — Hestia Alibag V2</span>
                        <span className="text-xs font-bold text-sandstone-400">34%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-sandstone-400 rounded-full w-[34%]" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {[['Project Understanding & Scope','Done',true],['Planning & Budgeting','Done',true],['Execution & Site Monitoring','Live',false,true],['QA & Compliance','Pending',false],['Delivery & Handover','Pending',false]].map(([t,s,done,live]) => (
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
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 text-[10px] font-bold tracking-widest uppercase bg-sandstone-400 text-white px-3 py-1 rounded-full">
                  HSI OS v2.0 · ENGINE LIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────── */}
      <MarqueeTicker />

      {/* ── WHAT IS HSIOS ─────────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="section-label">The Platform</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-6">
                Premium Villa Interiors,<br />
                Executed with <span className="text-sandstone-600">Precision.</span>
              </h2>
              <div className="w-10 h-px bg-sandstone-400 mb-6" />
              <p className="text-warmgray-600 leading-relaxed mb-6">
                Most luxury interior projects fail not because of bad design — but because of broken execution.
                Cost overruns with no explanation. Delays with no accountability. Vendors in silos.
                <strong className="text-charcoal-800"> HSIOS™</strong> was built to eliminate this entirely.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Full lifecycle project management from scope to handover',
                  'Real-time cost and budget intelligence — every rupee tracked',
                  'Conflicts detected digitally before site execution begins',
                  'Sustainability built into core planning — not an add-on, no cost premium',
                  'Global best practices: ergonomics, durability, safety, and finish quality',
                  'Predictable, on-time delivery with zero surprises',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7.5" stroke="#C4A882" strokeWidth="1"/>
                      <path d="M5 8l2.5 2.5 3.5-4" stroke="#9A7A54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-warmgray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-bronze">Explore the Platform →</Link>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/hestia-villa-bellissimo.jpg"
                    alt="HSI OS Platform — Premium Interior Execution"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-luxury px-4 py-3 flex items-center gap-3 border border-ivory-200">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-serif text-lg font-bold text-charcoal-800">₹100Cr+</div>
                    <div className="text-xs text-warmgray-500">Managed on HSIOS™</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────────────────────── */}
      <section className="py-16 bg-charcoal-800">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
            {[
              { val: '7+',    label: 'Premium villa interiors delivered across Alibag', trend: '↑ Growing' },
              { val: '₹100Cr',label: 'Execution value managed live on HSIOS™',         trend: '↑ Active' },
              { val: '100%',  label: 'Cost transparency on every active project',       trend: '↑ Always' },
              { val: '0',     label: 'Execution surprises on completed projects',       trend: '✓ Zero',  green: true },
            ].map(({ val, label, trend, green }) => (
              <RevealOnScroll key={val} className="px-8 py-2 text-center">
                <div className="font-serif text-4xl font-bold text-white mb-2">{val}</div>
                <div className="text-xs text-warmgray-400 leading-relaxed mb-2">{label}</div>
                <div className={`text-xs font-bold ${green ? 'text-green-400' : 'text-sandstone-400'}`}>{trend}</div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 MODULES ─────────────────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Core Modules</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Everything in One{' '}
              <span className="text-sandstone-600">Intelligent System.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 leading-relaxed">
              Seven purpose-built modules working in concert — total command of every rupee, every day.
            </p>
          </RevealOnScroll>

          <div className="space-y-6">
            {modules.map(({ n, icon, title, desc, features, ui }, i) => (
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
                    {ui}
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

      {/* ── GLOBAL STANDARDS + PHILOSOPHY ────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Global Standards */}
            <RevealOnScroll>
              <div className="section-label text-sandstone-400">Built to Global Standards</div>
              <h2 className="font-serif text-display-md text-white mb-6">
                Every Project Benchmarked<br />
                <span className="text-sandstone-300">Beyond Local Practice.</span>
              </h2>
              <p className="text-warmgray-300 leading-relaxed mb-8">
                HSIOS™ incorporates international best practices into every execution decision — ensuring projects are future-ready and benchmarked against global residential standards, not just conventional local norms.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🪑', label: 'Ergonomics', desc: 'Human-centred space planning and furniture sizing' },
                  { icon: '🔒', label: 'Safety', desc: 'Structural, electrical, and fire safety standards' },
                  { icon: '⚙️', label: 'Maintainability', desc: 'Service access, panel placement, and longevity' },
                  { icon: '🏅', label: 'Finish Quality', desc: 'Premium grade execution benchmarks at every stage' },
                  { icon: '♿', label: 'Usability', desc: 'Universal design, clearances, and accessibility' },
                  { icon: '📐', label: 'Workflow', desc: 'Efficient kitchen, bathroom, and circulation flow' },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="p-4 rounded-xl bg-white/5 border border-white/8 hover:bg-white/8 hover:border-sandstone-400/30 transition-all duration-300">
                    <div className="text-xl mb-2">{icon}</div>
                    <div className="text-sm font-semibold text-white mb-1">{label}</div>
                    <div className="text-xs text-warmgray-400 leading-snug">{desc}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Philosophy */}
            <RevealOnScroll delay={0.1}>
              <div className="section-label text-sandstone-400">Core Philosophy</div>
              <h2 className="font-serif text-display-md text-white mb-6">
                Refuse. Reuse. Recycle.<br />
                <span className="text-sandstone-300">Built into Every Decision.</span>
              </h2>
              <p className="text-warmgray-300 leading-relaxed mb-8">
                Sustainability is not an expensive add-on in HSIOS™. It is integrated into core planning — ensuring smarter choices, efficient layouts, and long-term value from the start. No cost premium. No compromise on aesthetics.
              </p>
              <div className="space-y-4">
                {[
                  { word: 'Refuse', icon: '🚫', desc: 'Unnecessary materials, wasteful designs, and inefficient decisions — rejected before they enter the plan.' },
                  { word: 'Reuse', icon: '♻️', desc: 'Existing assets, salvageable materials, and adaptable design elements — retained and integrated.' },
                  { word: 'Recycle', icon: '🌿', desc: 'Responsible material planning and waste reduction — tracked and documented through every phase.' },
                  { word: 'Reduce', icon: '📉', desc: 'Alternate low-impact materials, optimised transport, better natural light and ventilation — smaller footprint, greater long-term value.' },
                ].map(({ word, icon, desc }) => (
                  <div key={word} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/8">
                    <div className="text-2xl flex-shrink-0">{icon}</div>
                    <div>
                      <div className="font-serif font-bold text-sandstone-300 mb-1">{word}</div>
                      <div className="text-sm text-warmgray-400 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── PLATFORM PREVIEW ──────────────────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-10">
            <div className="section-label">Platform Preview</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              See HSIOS™ in <span className="text-sandstone-600">Action.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 leading-relaxed">
              Every module is purpose-built for premium interior execution — not a generic tool adapted for interiors.
              Explore the platform below.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <PlatformPreview />
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FOR WHO ───────────────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mx-auto text-center mb-16">
            <div className="section-label mx-auto">Who It&apos;s For</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Built for Homeowners{' '}
              <span className="text-sandstone-600">and Developers.</span>
            </h2>
          </RevealOnScroll>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Homeowners */}
            <RevealOnScroll>
              <div className="rounded-3xl bg-ivory-100 border border-ivory-300 p-10 h-full flex flex-col">
                <div className="section-label mb-6">For Homeowners</div>
                <h3 className="font-serif text-display-sm text-charcoal-800 mb-4">
                  Your Dream Home,<br />
                  <em className="not-italic text-sandstone-600">Precisely Delivered.</em>
                </h3>
                <p className="text-warmgray-600 leading-relaxed mb-6">
                  You&apos;ve invested in vision. We ensure the execution matches it — every rupee tracked,
                  every decision documented, every milestone met.
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {['Real-time cost dashboard — no surprises','Live progress tracking from your phone','End-to-end execution with full accountability'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-warmgray-700">
                      <span className="w-5 h-5 rounded-full bg-sandstone-400/20 text-sandstone-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/for-homeowners" className="btn btn-outline-dark w-fit">Explore for Homeowners →</Link>
              </div>
            </RevealOnScroll>
            {/* Developers */}
            <RevealOnScroll delay={0.1}>
              <div className="rounded-3xl bg-charcoal-800 p-10 h-full flex flex-col">
                <div className="section-label text-sandstone-400 mb-6">For Developers</div>
                <h3 className="font-serif text-display-sm text-white mb-4">
                  Scale Your Portfolio<br />
                  <em className="not-italic text-sandstone-300">Without Chaos.</em>
                </h3>
                <p className="text-warmgray-300 leading-relaxed mb-6">
                  Standardise interior execution across every unit. Give buyers confidence. Reduce rework.
                  Deliver every time.
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {['Consistent quality across all residences','Portfolio-level execution intelligence','Use as service partner or standalone platform'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-warmgray-200">
                      <span className="w-5 h-5 rounded-full bg-sandstone-400/20 text-sandstone-400 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/for-developers" className="btn btn-bronze w-fit">Explore for Developers →</Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ───────────────────────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label text-sandstone-400">How We Work</div>
            <h2 className="font-serif text-display-lg text-white">
              Flexible by Design.<br />
              <em className="not-italic text-sandstone-300">Built for Real-World Execution.</em>
            </h2>
            <p className="text-warmgray-400 mt-4 leading-relaxed">
              Three ways to work with HSI — same intelligence, different levels of involvement.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {howWeWork.map(({ n, clr, num, tag, title, desc, features, tagLabel }, i) => (
              <RevealOnScroll key={n} delay={i * 0.08}>
                <div className={`bg-white/5 rounded-2xl border-t-2 ${clr} border border-white/8 p-7 h-full flex flex-col`}>
                  <div className={`font-serif text-3xl font-bold ${num} mb-4 opacity-70`}>{n}</div>
                  <h3 className="font-serif text-lg font-bold text-white mb-3">{title}</h3>
                  <p className="text-warmgray-400 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {features.map(f => <li key={f} className="text-xs text-warmgray-300">✓ {f}</li>)}
                  </ul>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full w-fit ${tag}`}>{tagLabel}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <blockquote className="text-center border-t border-white/10 pt-10">
              <span className="font-serif text-4xl text-sandstone-400/40 leading-none block">&ldquo;</span>
              <p className="font-serif text-xl text-white/70 italic mt-2">Service, Platform, or Both — one system, zero chaos.</p>
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── PROCESS STEPS ─────────────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <RevealOnScroll>
              <div className="section-label">Process</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-5">
                How Every Project<br />
                Gets <span className="text-sandstone-600">Structured.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-8">
                A five-phase approach with full accountability at every step — from your first brief to final handover.
              </p>
              <Link href="/how-it-works" className="btn btn-bronze">See Full Process →</Link>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="relative pl-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-px before:bg-sandstone-200">
                {processSteps.map(({ n, title, desc, chip, active, live }, i) => (
                  <div key={n} className={`relative mb-8 last:mb-0 ${i < processSteps.length - 1 ? '' : ''}`}>
                    <div className={`absolute -left-8 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold
                      ${active ? 'border-sandstone-400 bg-sandstone-400 text-white' : 'border-sandstone-300 bg-white text-sandstone-600'}`}>
                      {n}
                    </div>
                    <div className="pl-2">
                      <div className="font-serif font-bold text-charcoal-800 mb-0.5">{title}</div>
                      <div className="text-sm text-warmgray-500 mb-2">{desc}</div>
                      <span className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full border
                        ${live
                          ? 'border-green-300 bg-green-50 text-green-700'
                          : 'border-sandstone-200 bg-sandstone-50 text-sandstone-700'
                        }`}>
                        {chip}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="mb-12">
            <div className="section-label text-sandstone-400">Trust &amp; Transparency</div>
            <h2 className="font-serif text-display-lg text-white max-w-xl">
              What clients say about working with{' '}
              <em className="not-italic text-sandstone-300">HSIOS™.</em>
            </h2>
          </RevealOnScroll>
          <div className="grid lg:grid-cols-3 gap-6 items-start mb-12">
            {/* Quote 1 */}
            <RevealOnScroll className="lg:col-span-1">
              <div className="bg-white/5 rounded-2xl border border-white/8 p-8 h-full">
                <div className="font-serif text-5xl text-sandstone-400/40 leading-none mb-4">&ldquo;</div>
                <p className="text-warmgray-200 leading-relaxed mb-6 text-sm">
                  Building my villa in Alibag while living in Mumbai was my biggest fear. I expected endless delays.
                  HSI OS gave me an exact roadmap, and I tracked every rupee on my dashboard. They delivered my home{' '}
                  <strong className="text-white">3 weeks ahead of schedule.</strong>
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sandstone-400/20 text-sandstone-400 flex items-center justify-center font-bold text-sm">S</div>
                  <div>
                    <div className="text-white text-sm font-semibold">Saurabh M.</div>
                    <div className="text-warmgray-500 text-xs">Homeowner · Alibag Villa</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            {/* Proof card */}
            <RevealOnScroll delay={0.08}>
              <div className="bg-charcoal-900 rounded-2xl border border-sandstone-400/20 p-8">
                <div className="text-xs font-bold tracking-widest uppercase text-sandstone-400 mb-5">◆ Project Outcomes</div>
                {['Delivered 3 weeks early','₹0 cost overrun','100% transparent spend','Full OS dashboard access'].map((item, i) => (
                  <div key={item} className={`flex items-center gap-3 py-3 border-b border-white/6 last:border-0`}>
                    <span className={i < 3 ? 'text-green-400' : 'text-sandstone-400'}>{i < 3 ? '✓' : '◆'}</span>
                    <span className="text-warmgray-200 text-sm">{item}</span>
                  </div>
                ))}
                <div className="mt-5 pt-4 border-t border-white/8 text-[10px] text-warmgray-600 tracking-widest uppercase">
                  HSI OS · Hestia Alibag V2
                </div>
              </div>
            </RevealOnScroll>
            {/* Quote 2 */}
            <RevealOnScroll delay={0.16}>
              <div className="bg-white/5 rounded-2xl border border-white/8 p-8 h-full">
                <div className="font-serif text-5xl text-sandstone-400/40 leading-none mb-4">&ldquo;</div>
                <p className="text-warmgray-200 leading-relaxed mb-6 text-sm">
                  As an NRI, I had no way of verifying what my previous contractor was charging me. HSI stepped in,
                  onboarded my property, and suddenly I had{' '}
                  <strong className="text-white">complete visibility.</strong> The trust factor is unmatched.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sandstone-400/20 text-sandstone-400 flex items-center justify-center font-bold text-sm">A</div>
                  <div>
                    <div className="text-white text-sm font-semibold">Ankit R.</div>
                    <div className="text-warmgray-500 text-xs">NRI Client · Goa Project</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div className="text-center text-warmgray-400 text-sm border-t border-white/8 pt-8">
              Founded by <strong className="text-white">Nishant Mhatre</strong> — years of frontline luxury execution experience + enterprise-grade project intelligence.{' '}
              <Link href="/about" className="text-sandstone-400 hover:text-sandstone-300 underline underline-offset-2">Read the founder&apos;s story →</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-5">
                Everything you<br />
                need to <span className="text-sandstone-600">know.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-8">
                Before starting your project, we answer the questions every homeowner and developer asks.
              </p>
              <Link href="/contact" className="text-sandstone-600 font-semibold hover:text-sandstone-700 transition-colors">
                Still have questions? →
              </Link>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <FAQAccordion />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ───────────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="prose prose-warmgray max-w-none">
              <h2 className="font-serif text-display-sm text-charcoal-800">
                Premium Interior Execution in Alibag &amp; Mumbai — Powered by HSIOS™
              </h2>
              <p className="text-warmgray-600 leading-relaxed">
                Alibag and Mumbai are two of India&apos;s most active markets for premium residential interiors. Alibag draws
                high-net-worth second-home buyers seeking luxury villas in a coastal setting. Mumbai&apos;s premium apartment and
                penthouse market demands execution precision across South Mumbai, Bandra, Juhu, and Worli. Both markets share
                coastal conditions, discerning clients, and zero tolerance for execution failures. HSIOS™ was built to serve
                exactly this profile.
              </p>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mt-8 mb-3">
                Interior Designers in Alibag &amp; Mumbai vs. HSI&apos;s Execution Intelligence
              </h3>
              <p className="text-warmgray-600 leading-relaxed">
                Premium interior projects in both Alibag and Mumbai face similar core challenges: coordination gaps between
                design and execution teams, cost overruns from unmanaged changes, and timeline delays from poor vendor
                accountability. HSIOS™ provides the structured system to prevent this — tracking every phase, every rupee,
                and every vendor from day one.
              </p>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mt-8 mb-3">
                Why Premium Residential Developers Choose HSIOS™
              </h3>
              <p className="text-warmgray-600 leading-relaxed">
                Developers delivering luxury residences in Alibag, Karjat, Lonavala, and Mumbai face the challenge of
                maintaining consistent interior quality across dozens of units. HSIOS™ provides the system to standardise
                execution — reducing rework, improving handover timelines, and giving buyers confidence that their home&apos;s
                interiors are being delivered with the same rigour as the construction itself.{' '}
                <Link href="/for-developers" className="text-sandstone-600 hover:text-sandstone-700 underline underline-offset-2">
                  Learn how HSI works for developers →
                </Link>
              </p>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mt-8 mb-3">
                The HSI Advantage: Service + Platform
              </h3>
              <p className="text-warmgray-600 leading-relaxed">
                Whether you&apos;re a homeowner who wants complete hand-holding through your villa interior project, or a developer
                looking to give your team a smarter execution system, HSI can work both ways.{' '}
                <Link href="/contact" className="text-sandstone-600 hover:text-sandstone-700 underline underline-offset-2">
                  Request a demo
                </Link>{' '}
                to see it in action for your project.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-charcoal-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl relative z-10">
            <div className="section-label text-sandstone-400 mx-auto mb-6">Get Started</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              The Interior Project<br />
              <em className="not-italic text-sandstone-300">You Deserve is Possible.</em>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              Talk to us about your villa or residential project. See how HSIOS™ changes execution
              for your team, your budget, and your timeline.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27m%20interested%20in%20discussing%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-bronze text-base px-10 py-4"
              >
                Request a Demo Today →
              </a>
              <Link href="/contact" className="btn btn-outline-white">
                Contact the Team
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
