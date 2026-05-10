import type { Metadata } from 'next'
import Link from 'next/link'
import {
  LayoutGrid, Package, Users2, Zap, Layers, Eye,
  Store, ShoppingCart, Sparkles, Coffee, RefreshCcw, Building2,
  ShieldCheck, BarChart2, Clock, GitBranch,
} from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb, serviceSchema } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'

export const metadata: Metadata = {
  title: 'Commercial Interior Execution — HSIOS™ for Retail & Commercial Spaces',
  description:
    'HSIOS™ brings structured interior execution to commercial spaces — retail stores, experience centres, F&B outlets, and franchise rollouts. Zone-based tracking, fixture BOQs, and multi-unit scalability.',
  alternates: getAlternates('/commercial-interiors'),
}

const serviceData = serviceSchema({
  name: 'Commercial Interior Execution — Retail, F&B & Experience Centres',
  description:
    'HSIOS™ delivers structured commercial interior execution — zone-based tracking, fixture BOQs, and multi-unit scalability for retail stores, experience centres, and F&B outlets.',
  url: 'https://www.hsios.in/commercial-interiors',
  areaServed: ['India'],
})

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in' },
  { name: 'Commercial Spaces', url: 'https://www.hsios.in/commercial-interiors' },
])

const capabilities = [
  {
    Icon: LayoutGrid,
    title: 'Zone-Based Execution',
    desc: 'Every commercial space is divided into execution zones — storefront, display area, service counter, back office. Progress is tracked and reported zone by zone, not as one opaque project.',
  },
  {
    Icon: Package,
    title: 'Fixture-Based BOQs',
    desc: 'Commercial interiors are built around fixtures, not rooms. HSIOS™ structures BOQs around shelving systems, counters, signage, lighting rigs, and fit-out components — each with vendor, cost, and timeline.',
  },
  {
    Icon: Users2,
    title: 'Vendor Coordination',
    desc: 'Multiple specialist vendors — joinery, MEP, signage, AV, flooring — coordinated through a single system. No parallel WhatsApp chains, no conflicting instructions, no accountability gaps.',
  },
  {
    Icon: Zap,
    title: 'MEP Integration Awareness',
    desc: 'Mechanical, electrical, and plumbing requirements are mapped against fixture placement and ceiling plans before execution. Conflicts surfaced early — not discovered on site.',
  },
  {
    Icon: Layers,
    title: 'Multi-Unit Scalability',
    desc: 'Launching five stores simultaneously? HSIOS™ manages each location as a parallel execution track — standardised specifications, independent progress, unified reporting.',
  },
  {
    Icon: Eye,
    title: 'Remote Progress Monitoring',
    desc: 'Daily photo updates, milestone sign-offs, and live budget tracking — accessible to brand managers, developers, and franchise operators from any device, anywhere.',
  },
]

const projectTypes = [
  {
    Icon: Store,
    title: 'Retail Stores',
    desc: 'Flagship and high-street retail fit-outs with fixture precision, brand-guideline compliance, and timeline discipline.',
  },
  {
    Icon: ShoppingCart,
    title: 'Supermarkets & Convenience',
    desc: 'High-SKU environments with shelving, cold-chain infrastructure, and operational flow built into the execution plan.',
  },
  {
    Icon: Sparkles,
    title: 'Experience Centres',
    desc: 'Product showrooms, brand galleries, and customer experience spaces where finish quality and presentation precision are non-negotiable.',
  },
  {
    Icon: Coffee,
    title: 'Café & F&B Outlets',
    desc: 'Kitchen infrastructure, seating design, ventilation, and front-of-house execution — coordinated as a single delivery.',
  },
  {
    Icon: RefreshCcw,
    title: 'Franchise Rollouts',
    desc: 'Standardised spec sheets, repeatable BOQs, and consistent execution quality across every new franchise location.',
  },
  {
    Icon: Building2,
    title: 'Developer Commercial',
    desc: 'Commercial lobbies, amenity decks, sample units, and handover-ready commercial spaces within mixed-use developments.',
  },
]

const reasons = [
  {
    Icon: ShieldCheck,
    title: 'Single Point of Accountability',
    desc: 'One team owns the outcome. No finger-pointing between contractors, vendors, or consultants when something slips. HSIOS™ holds the full execution chain accountable.',
  },
  {
    Icon: BarChart2,
    title: 'Cost Transparency at Every Stage',
    desc: 'Approved spend, committed orders, and projected final cost — visible in real time. Finance teams and brand managers see the same numbers without waiting for monthly reports.',
  },
  {
    Icon: Clock,
    title: 'Timeline Control, Not Timeline Hope',
    desc: 'Each zone and fixture has a committed delivery date. Delays are flagged automatically — before they cascade into handover failures or launch postponements.',
  },
  {
    Icon: GitBranch,
    title: 'Built for Parallel Execution',
    desc: 'HSIOS™ was designed for complexity. Multiple vendors, multiple zones, multiple sites — all running simultaneously, all visible, all accountable within one structured system.',
  },
]

export default async function CommercialInteriorsPage() {
  return (
    <>
      <JsonLd data={[serviceData, breadcrumbSchema]} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal-900">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#C4A882 1px, transparent 1px), linear-gradient(90deg, #C4A882 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800/80 to-charcoal-900" />

        <div className="container-luxury relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <RevealOnScroll>
              <div className="section-label text-sandstone-400">Commercial Interior Execution</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Structured Execution<br />
                <em className="not-italic text-sandstone-300">for Commercial Spaces.</em>
              </h1>
              <p className="text-warmgray-200 text-lg leading-relaxed mb-4">
                HSIOS™ brings the same precision that protects luxury residential projects to retail fit-outs, experience centres, F&amp;B rollouts, and developer commercial spaces.
              </p>
              <p className="text-warmgray-400 leading-relaxed mb-10">
                Zone-based tracking. Fixture-level BOQs. Multi-unit scalability. One accountable system.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Discuss Your Project</Link>
                <Link href="/hsi-os" className="btn btn-outline-white">Explore the Platform</Link>
              </div>
            </RevealOnScroll>

            {/* Zone Tracking Mockup */}
            <RevealOnScroll delay={0.15}>
              <div className="bg-charcoal-800/80 rounded-2xl border border-white/8 p-7 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-sandstone-400">Zone Execution Status</div>
                    <div className="text-white font-medium mt-0.5">Flagship Store — Bandra West</div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sandstone-400/15 text-sandstone-300">Live</span>
                </div>
                {[
                  { zone: 'Storefront & Façade',   pct: 100, status: 'Complete',    clr: 'bg-green-500' },
                  { zone: 'Display Floor — Zone A', pct: 88,  status: 'In Progress', clr: 'bg-sandstone-400' },
                  { zone: 'Display Floor — Zone B', pct: 62,  status: 'In Progress', clr: 'bg-sandstone-400' },
                  { zone: 'Service Counter & POS',  pct: 45,  status: 'Active',      clr: 'bg-sandstone-400' },
                  { zone: 'Trial Rooms',             pct: 20,  status: 'Scheduled',   clr: 'bg-warmgray-500' },
                  { zone: 'Back Office & Storage',  pct: 0,   status: 'Pending',     clr: 'bg-warmgray-600' },
                ].map(({ zone, pct, status, clr }) => (
                  <div key={zone} className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-white/80">{zone}</span>
                      <span className="text-xs text-warmgray-400">{status}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full transition-all ${clr}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
                <div className="mt-6 pt-5 border-t border-white/8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-serif font-bold text-white">58%</div>
                    <div className="text-[10px] text-warmgray-500 mt-0.5">Overall Progress</div>
                  </div>
                  <div>
                    <div className="text-xl font-serif font-bold text-sandstone-300">Day 34</div>
                    <div className="text-[10px] text-warmgray-500 mt-0.5">of 60-Day Schedule</div>
                  </div>
                  <div>
                    <div className="text-xl font-serif font-bold text-green-400">On Track</div>
                    <div className="text-[10px] text-warmgray-500 mt-0.5">Launch: June 15</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-10 lg:mb-16">
            <div className="section-label">What HSIOS™ Enables</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Execution Infrastructure<br />
              <span className="text-sandstone-600">Built for Commercial Scale.</span>
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ Icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card-warm p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-sandstone-100 border border-sandstone-200 flex items-center justify-center text-sandstone-600 mb-5">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT TYPES ─────────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-10 lg:mb-16">
            <div className="section-label text-sandstone-400">Project Types</div>
            <h2 className="font-serif text-display-lg text-white">
              Every Commercial Format.<br />
              <span className="text-sandstone-300">One Execution System.</span>
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectTypes.map(({ Icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="bg-charcoal-900/60 border border-white/8 rounded-2xl p-7 h-full hover:border-sandstone-400/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sandstone-400 mb-5">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-base font-bold text-white mb-3">{title}</h3>
                  <p className="text-warmgray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HSIOS FOR COMMERCIAL ──────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-10 lg:mb-16">
            <div className="section-label">Operational Advantage</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Why Brands and Developers<br />
              <span className="text-sandstone-600">Choose HSIOS™.</span>
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map(({ Icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card-warm p-8 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-sandstone-100 border border-sandstone-200 flex items-center justify-center text-sandstone-600 flex-shrink-0">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-2">{title}</h3>
                      <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATION CALLOUT ───────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <RevealOnScroll>
              <div className="section-label">Residential vs Commercial</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-6">
                The Same Rigour.<br />
                <span className="text-sandstone-600">A Different Scale.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-8">
                HSIOS™ was built for environments where detail is non-negotiable. Whether that means a luxury villa in Alibag or a flagship store in Mumbai, the underlying system is the same — structured, documented, and accountable.
              </p>
              <ul className="space-y-3">
                {[
                  'Residential precision applied to commercial complexity',
                  'BOQ and vendor management at fixture-level granularity',
                  'Brand-guideline compliance built into execution checkpoints',
                  'Launch-ready handovers — documented, photographed, signed off',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-warmgray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sandstone-500 flex-shrink-0 mt-2 block" />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="space-y-3">
                {/* Column header — hidden on mobile */}
                <div className="hidden sm:grid sm:grid-cols-3 gap-4 px-5 pb-1 text-[10px] font-semibold tracking-widest uppercase text-warmgray-400">
                  <div />
                  <div>Residential</div>
                  <div className="text-sandstone-600">Commercial</div>
                </div>
                {[
                  { label: 'Execution Method',  residential: 'Room-by-room phases',    commercial: 'Zone-by-zone tracking' },
                  { label: 'BOQ Structure',     residential: 'Material & finish specs', commercial: 'Fixture & system specs' },
                  { label: 'Client Reporting',  residential: 'Homeowner dashboard',     commercial: 'Brand / developer portal' },
                  { label: 'Scale',             residential: 'Single project',           commercial: 'Multi-unit rollouts' },
                  { label: 'Accountability',    residential: 'One team, one outcome',    commercial: 'One system, multiple sites' },
                ].map(({ label, residential, commercial }) => (
                  <div key={label} className="rounded-xl bg-white border border-ivory-300 overflow-hidden">
                    {/* Label row — full width header on mobile */}
                    <div className="sm:hidden px-4 py-2.5 bg-ivory-50 border-b border-ivory-200">
                      <span className="text-xs font-semibold text-warmgray-600">{label}</span>
                    </div>
                    {/* Desktop: 3-col grid */}
                    <div className="hidden sm:grid sm:grid-cols-3 gap-4 p-5 text-sm items-center">
                      <div className="text-warmgray-500 font-medium">{label}</div>
                      <div className="text-warmgray-600">{residential}</div>
                      <div className="text-charcoal-800 font-medium">{commercial}</div>
                    </div>
                    {/* Mobile: 2-col side-by-side */}
                    <div className="sm:hidden grid grid-cols-2 divide-x divide-ivory-200">
                      <div className="p-3.5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-warmgray-400 mb-1">Residential</div>
                        <div className="text-xs text-warmgray-600">{residential}</div>
                      </div>
                      <div className="p-3.5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-sandstone-600 mb-1">Commercial</div>
                        <div className="text-xs text-charcoal-800 font-medium">{commercial}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── FUTURE VISION ─────────────────────────────────── */}
      <section className="section-py bg-charcoal-900">
        <div className="container-luxury max-w-3xl text-center">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 text-center">The Vision</div>
            <h2 className="font-serif text-display-lg text-white mb-6">
              Interior Execution OS.<br />
              <span className="text-sandstone-300">For Every Space That Matters.</span>
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed mb-6">
              HSIOS™ started in luxury residential because that is where execution quality is most personal. It is expanding into commercial because the same problems — opacity, cost drift, vendor chaos, accountability gaps — exist at every scale.
            </p>
            <p className="text-warmgray-400 leading-relaxed mb-12">
              Our ambition is not to be a construction company or a design firm. It is to be the execution operating system that every interior project runs on — residential or commercial, one villa or twenty stores.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-bronze">Start a Commercial Conversation</Link>
              <Link href="/hsi-os" className="btn btn-outline-white">See the Full Platform</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-sandstone-400 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <h2 className="font-serif text-display-md text-white mb-5">
              Your Brand Standard,<br />Executed at Every Location.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Tell us about your space — we will show you exactly how HSIOS™ applies to your scope, timeline, and launch window.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-charcoal-800 hover:bg-ivory-100">
                Book a Strategy Call
              </Link>
              <a
                href="https://wa.me/918010234802?text=Hi%20HSIOS%2C%20I%27m%20interested%20in%20commercial%20interior%20execution"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
