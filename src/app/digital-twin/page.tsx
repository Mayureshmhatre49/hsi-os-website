import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Layers, Rotate3d, ScanText, BellRing, Siren,
  FileSearch, PhoneCall, CalendarX2, Zap,
  Download, UserCheck, MapPin, EyeOff, Check, X,
  ShieldCheck, Activity, Gauge, AlertTriangle,
  ChevronDown,
} from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import FAQAccordion from '@/components/ui/FAQAccordion'
import DigitalTwinForm from '@/components/ui/DigitalTwinForm'
import { JsonLd } from '@/lib/JsonLd'
import { getAlternates, breadcrumb, OG_IMAGE } from '@/lib/seo'
import { twinFaqs } from '@/content/digital-twin'

export const metadata: Metadata = {
  title: {
    absolute: 'HSIOS™ Digital Twin — Home Records & Live Energy Monitoring | Hestia Smart Interiors',
  },
  description:
    'A verified record of your villa’s assets plus live 24/7 energy monitoring of the whole house and every major appliance. Get alerts when your second home uses power it shouldn’t. Pilot live in Alibag.',
  alternates: getAlternates('/digital-twin'),
  openGraph: {
    title: 'HSIOS™ Digital Twin — Home Records & Live Energy Monitoring | Hestia Smart Interiors',
    description:
      'A verified record of your villa’s assets plus live 24/7 energy monitoring of the whole house and every major appliance. Get alerts when your second home uses power it shouldn’t. Pilot live in Alibag.',
    url: 'https://www.hsios.in/digital-twin',
    images: [OG_IMAGE],
  },
}

/* ── Structured data ───────────────────────────────────────── */
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HSIOS™ Digital Twin',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Web, iOS, Android',
  url: 'https://www.hsios.in/digital-twin',
  description:
    'A verified digital record of a home: room-by-room asset register, 360° walkthrough with pinned assets, 24/7 whole-house and per-appliance live energy monitoring, AI extraction of invoices and warranty cards, no-app QR labels for caretakers, unusual-use power alerts and WhatsApp warranty and AMC reminders.',
  creator: { '@id': 'https://www.hsios.in/#business' },
  isPartOf: { '@type': 'SoftwareApplication', name: 'HSIOS™', url: 'https://www.hsios.in/hsi-os' },
  areaServed: { '@type': 'Country', name: 'India' },
  inLanguage: ['en-IN', 'hi', 'mr'],
  featureList: [
    'Room-by-room asset register',
    '360° walkthrough with assets pinned in place',
    'AI extraction of invoices, warranty cards and AMC contracts',
    'No-app QR labels for caretakers in English, Hindi and Marathi',
    'Warranty and AMC reminders on WhatsApp',
    'Emergency points: main valve, DB, gas shut-off',
    '24/7 whole-house live energy monitoring (3-phase smart meter)',
    'Per-appliance monitoring on heavy loads (ACs, geysers, pumps)',
    'Unusual-use power alerts on the HSIOS™ Android app and WhatsApp',
  ],
}

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in/' },
  { name: 'Digital Twin', url: 'https://www.hsios.in/digital-twin' },
])

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: twinFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

/* ── Content Constants ─────────────────────────────────────── */
const problems = [
  {
    Icon: FileSearch,
    title: 'The warranty card is in a drawer — somewhere',
    desc: 'The AC fails in May. The invoice is in an email from 2023, the warranty card is at the villa, and nobody knows whether it is still covered.',
  },
  {
    Icon: PhoneCall,
    title: 'Your caretaker calls you for a phone number',
    desc: 'The pump has stopped. Your caretaker needs the technician’s number, and you are in a meeting in Dubai.',
  },
  {
    Icon: CalendarX2,
    title: 'AMCs lapse without anyone noticing',
    desc: 'The pre-monsoon service is missed because the renewal date was on a paper contract no one looked at.',
  },
  {
    Icon: Zap,
    title: 'The bill is the first you hear of it',
    desc: 'An AC left on for a week, a pool pump that never switches off, someone using the villa while you’re away. In a second home, you usually find out a month later, on the electricity bill.',
  },
]

const roadmap = [
  {
    phase: 'Phase 1', name: 'Home Ledger + Live Energy', status: 'In pilot',
    items: [
      'Asset register & emergency points',
      '360° walkthrough with pins',
      'AI reading of invoices, warranties & electricity bills',
      'Caretaker QR labels',
      'WhatsApp reminders',
      'Live whole-house energy monitoring (3-phase meter)',
      'Per-appliance monitoring on high loads',
      'Unusual-use power alerts',
      'The HSIOS™ Android app',
    ],
  },
  {
    phase: 'Phase 2', name: 'Service & Safety', status: 'Next',
    items: [
      'Caretaker tickets from a QR scan with photo/voice note',
      'Vendor dispatch and repair history',
      'Water-leak detection with automatic shut-off',
      'Energy-based service prompts, e.g. "your AC is using 25% more than last month, so book a service"',
    ],
  },
  {
    phase: 'Phase 3', name: 'Marketplace', status: 'Planned',
    items: [
      'AMC renewals and repair bookings with vetted vendors',
      'Energy-efficient replacements with real payback figures',
      'Measured 3D layer of the home',
    ],
  },
  {
    phase: 'Phase 4', name: 'Scale', status: 'Planned',
    items: [
      'Self-onboarding with a phone scan',
      'Developer handover portal',
      'Transferable home passport on sale (with energy history)',
    ],
  },
]

const scanShows = ['Item name and room', 'Care steps and troubleshooting', 'Repair contact', 'Warranty and AMC status']
const scanHides = ['Invoice values', 'The owner’s identity', 'The home’s full address', 'Photos of the interior', 'Live energy data and alerts']

/* ── Page Component ────────────────────────────────────────── */
export default function DigitalTwinPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, softwareSchema, faqSchema]} />

      {/* ────────────────────────────────────────────────────────
          CHAPTER 1: THE REALITY & THE HOOK
          ──────────────────────────────────────────────────────── */}

      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-40 md:pb-32 bg-charcoal-800 overflow-hidden" aria-label="HSIOS Digital Twin">
        <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-sandstone-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sandstone-400/15 border border-sandstone-400/30 text-sandstone-300 text-[11px] font-bold tracking-[0.16em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sandstone-300 animate-pulse" />
                Early Access · Alibag Pilot Live
              </div>
              <h1 className="font-serif text-display-xl text-white leading-[1.08] mb-6">
                Every asset in your home, on record.{' '}
                <span className="text-sandstone-300">Every unit of power, on watch.</span>
              </h1>
              <p className="text-lg text-warmgray-300 leading-relaxed mb-8 max-w-2xl">
                A verified record of your villa’s appliances, warranties, AMCs and repair contacts,
                pinned to a 360° walkthrough, plus live energy monitoring of the whole house and its
                biggest appliances, 24/7. Built for homes their owners don’t live in full time.
              </p>
              <div className="flex flex-wrap gap-3.5 mb-6">
                <a href="#get-access" className="btn btn-bronze">Join Early Access</a>
                <a href="#walkthrough" className="btn btn-outline-white">Book a Walkthrough</a>
              </div>
              <p className="text-sm text-warmgray-400">
                Walkthroughs are for HSI clients. Live in pilot at{' '}
                <Link href="/projects/casa-frangipani" className="text-sandstone-300 underline underline-offset-2 hover:text-sandstone-200">
                  Casa Frangipani, Alibag
                </Link>. Energy monitoring included.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <AssetCardMock />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-py bg-white" aria-label="Why it exists">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <div className="section-label">Why it exists</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                A second home forgets{' '}
                <span className="text-sandstone-600">what it’s made of.</span>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed">
                The information that keeps a villa running is scattered across emails, drawers and
                people’s phones. When something breaks, the owner is usually the furthest away.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map(({ Icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.05}>
                <div className="card-warm h-full p-7 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sandstone-100/70 flex items-center justify-center mb-5">
                      <Icon className="text-sandstone-700" size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                    <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          CHAPTER 2: THE TWO CORE PILLARS
          ──────────────────────────────────────────────────────── */}
      <section className="section-py bg-ivory-100 relative overflow-hidden" aria-label="The Two Core Pillars">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-3xl mb-14 lg:mb-20">
              <div className="section-label">The Capabilities</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                Two pillars.{' '}
                <span className="text-sandstone-600">Complete visibility over your property.</span>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed">
                HSIOS™ Digital Twin brings together a permanent asset ledger and 24/7 live energy observation
                into one unified system built specifically for luxury second homes.
              </p>
            </div>
          </RevealOnScroll>

          {/* PILLAR 1: THE HOME LEDGER */}
          <div className="mb-20">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-sandstone-200 text-sandstone-800 text-[11px] font-bold tracking-[0.14em] uppercase">Pillar 01</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-800">The Verified Home Ledger</h3>
              </div>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    Icon: Rotate3d,
                    title: '360° Walkthrough with Pinned Assets',
                    desc: 'Walk through your villa remotely. Tap any appliance in the 360° sphere to view its specifications, AMC, and service contacts.',
                  },
                  {
                    Icon: ScanText,
                    title: 'AI Reading of Invoices & Bills',
                    desc: 'Snap or forward bills and warranty cards. AI extracts brand, model, dates, tariff and vendor; you confirm before anything is saved.',
                  },
                  {
                    Icon: Layers,
                    title: 'Room-by-Room Structure',
                    desc: 'Organized as House → Floor → Room → Asset. Appliances, pumps, geysers, RO, and HVAC with brand, model, and full service logs.',
                  },
                  {
                    Icon: BellRing,
                    title: 'WhatsApp Expiry Reminders',
                    desc: 'Reminders at 30 days, 7 days, and day-of expiry — respecting your quiet hours and international time zones.',
                  },
                ].map(({ Icon, title, desc }, i) => (
                  <RevealOnScroll key={title} delay={i * 0.05}>
                    <div className="h-full p-6 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 transition-colors flex flex-col">
                      <div className="w-10 h-10 rounded-lg bg-sandstone-100 flex items-center justify-center mb-4 text-sandstone-700">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <h4 className="font-serif font-bold text-charcoal-800 mb-2">{title}</h4>
                      <p className="text-warmgray-600 text-xs leading-relaxed flex-1">{desc}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              {/* Hierarchy Showcase Card */}
              <RevealOnScroll delay={0.1}>
                <div className="h-full p-7 rounded-2xl bg-white border border-ivory-300 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-ivory-200">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-sandstone-600">Asset Hierarchy</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">Casa Frangipani · Alibag</span>
                    </div>
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-ivory-100 text-charcoal-800">
                        <div className="text-[10px] uppercase font-bold text-warmgray-500 mb-1">House Record</div>
                        <div className="font-semibold text-sm">Villa Ground + First Floor · 5,200 sq.ft</div>
                      </div>
                      <div className="pl-4 border-l-2 border-sandstone-300 space-y-2 text-warmgray-700">
                        <div className="p-2.5 rounded-lg bg-ivory-50 border border-ivory-200 flex items-center justify-between">
                          <span>Ground Floor · Utility Area</span>
                          <span className="text-xs text-sandstone-700 font-semibold">Borewell Pump 3HP</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-ivory-50 border border-ivory-200 flex items-center justify-between">
                          <span>First Floor · Master Bath</span>
                          <span className="text-xs text-sandstone-700 font-semibold">Geyser 25L Storage</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-ivory-50 border border-ivory-200 flex items-center justify-between">
                          <span>Ground Floor · Plant Room</span>
                          <span className="text-xs text-sandstone-700 font-semibold">Pool Filter Pump</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-ivory-200 flex items-center justify-between text-xs text-warmgray-500">
                    <span className="flex items-center gap-1.5">
                      <Siren size={15} className="text-rose-600" />
                      Emergency points marked: Main Valve, DB, Gas Shut-off
                    </span>
                    <span className="font-semibold text-sandstone-700">All Pinned</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* PILLAR 2: 24/7 LIVE ENERGY MONITORING */}
          <div>
            <RevealOnScroll>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-sandstone-200 text-sandstone-800 text-[11px] font-bold tracking-[0.14em] uppercase">Pillar 02</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-800">24/7 Live Energy & Anomaly Alerts</h3>
                </div>
                <div className="text-xs text-sandstone-700 bg-sandstone-100/80 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Independent SIM Connection (Works Without Villa Wi-Fi)
                </div>
              </div>
            </RevealOnScroll>

            {/* 3 Layers of Energy */}
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  layer: 'Layer 01',
                  title: 'The Whole House, Live',
                  icon: Activity,
                  bullets: [
                    'Real-time power draw across all three phases',
                    'Daily, monthly and annual spend in kWh and ₹',
                    'Power-quality checks (voltage, balance, power factor) [CONFIRM: which readings Casa Energy shows]',
                  ],
                },
                {
                  layer: 'Layer 02',
                  title: 'Appliance by Appliance',
                  icon: Gauge,
                  bullets: [
                    'Dedicated relays on ACs, geysers, pool pump and borewell pump',
                    'Running hours, energy use and cost for each circuit',
                    'Live today at Casa Frangipani, Alibag',
                  ],
                },
                {
                  layer: 'Layer 03',
                  title: 'Room-by-Room Tracking',
                  icon: Layers,
                  bullets: [
                    'Energy consumption grouped by floor and room',
                    'Appliance energy sits directly on its asset card next to warranty',
                    'Identify inefficient appliances before failure',
                  ],
                },
              ].map(({ layer, title, icon: Icon, bullets }, i) => (
                <RevealOnScroll key={title} delay={i * 0.06}>
                  <div className="h-full p-6 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-sandstone-600">{layer}</span>
                        <Icon size={18} className="text-sandstone-600" />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h4>
                      <ul className="space-y-2.5 text-xs text-warmgray-600 leading-relaxed">
                        {bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2">
                            <Check size={14} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Unusual-Use Alerts & Bill Projection */}
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
              <RevealOnScroll>
                <div className="h-full p-8 rounded-3xl bg-charcoal-800 text-white flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sandstone-400/15 border border-sandstone-400/30 text-sandstone-300 text-[11px] font-bold tracking-[0.16em] uppercase mb-4">
                      <AlertTriangle size={14} className="text-sandstone-300" />
                      Unusual-Use Alerts
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl font-bold text-white mb-3">
                      If your house uses power unexpectedly, <span className="text-sandstone-300">you’ll know.</span>
                    </h4>
                    <p className="text-warmgray-300 text-sm leading-relaxed mb-6">
                      An AC left on for a week, a geyser active at 2 a.m., or a sudden surge while the home is marked vacant — you receive instant alerts on WhatsApp and the Android app with the appliance and cost.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {[
                        { title: 'Master AC running 6 hrs', meta: 'Villa marked Vacant' },
                        { title: 'Load jumped to 3.1 kW at 02:14', meta: 'No visit scheduled' },
                        { title: 'Pool pump ran 20 hrs continuous', meta: 'Exceeds standard cycle' },
                        { title: 'Geyser 2 drawing power', meta: 'No hot water expected' },
                      ].map((a, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/10 border border-white/15 text-xs">
                          <div className="font-semibold text-white flex items-center justify-between mb-0.5">
                            <span>{a.title}</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/30 text-amber-300 font-normal">Alert</span>
                          </div>
                          <div className="text-warmgray-300 text-[11px]">{a.meta}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-warmgray-400 leading-relaxed">
                    <strong className="text-sandstone-300 font-semibold">Your rules, your privacy:</strong> You set occupied/vacant schedules and quiet hours. Alerts track property consumption, not people.
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.08}>
                <div className="h-full p-8 rounded-3xl bg-white border border-ivory-300 flex flex-col justify-between">
                  <div>
                    <div className="section-label">Bill projections</div>
                    <h4 className="font-serif text-xl md:text-2xl font-bold text-charcoal-800 mb-3">
                      See your bill before it arrives
                    </h4>
                    <p className="text-warmgray-600 text-sm leading-relaxed mb-6">
                      Scan or forward past utility bills. HSIOS™ automatically configures your exact tariff, slabs, and fixed charges so rupee figures match what MSEDCL bills you.
                    </p>
                    <ul className="space-y-3 text-sm text-warmgray-600 mb-6">
                      <li className="flex items-start gap-2.5">
                        <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-charcoal-800">Exact Tariff Matching:</strong> Reads MSEDCL slabs, fuel adjustments, and fixed charges directly from previous bill scans.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-charcoal-800">Month-to-Date & Projected Bill:</strong> Real-time rupee projection of your upcoming month-end invoice.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-charcoal-800">Top 5 Power Consumers:</strong> Monthly report highlighting which appliances drove your bill.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200 text-xs text-warmgray-600 flex items-center justify-between">
                    <span>Catch runaway equipment before the meter reader visits.</span>
                    <span className="font-semibold text-sandstone-700">No Surprises</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          CHAPTER 3: TWO TAILORED EXPERIENCES (THE CENTERPIECE)
          ──────────────────────────────────────────────────────── */}
      <section className="section-py bg-charcoal-900 text-white relative overflow-hidden" aria-label="Two Tailored Experiences">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-sandstone-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl mb-14 lg:mb-20">
              <div className="section-label text-sandstone-400">The User Experience</div>
              <h2 className="font-serif text-display-lg text-white mb-4">
                One home.{' '}
                <span className="text-sandstone-300">Two tailored experiences.</span>
              </h2>
              <p className="text-warmgray-300 text-lg leading-relaxed">
                Villa owners and managers need deep insight, live power data, and asset documentation. Caretakers need immediate clarity on what to do when something stops working.
              </p>
            </div>
          </RevealOnScroll>

          {/* Side-by-side Experience Comparison */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* Left: Owner & Manager App */}
            <RevealOnScroll>
              <div className="h-full p-8 md:p-10 rounded-3xl bg-charcoal-800/90 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-sandstone-400/20 text-sandstone-300 text-[11px] font-bold tracking-[0.14em] uppercase">
                      For Owners & Villa Managers
                    </span>
                    <span className="text-xs text-warmgray-400 font-semibold">Native App</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    The HSIOS™ Android App
                  </h3>
                  <p className="text-warmgray-300 text-sm leading-relaxed mb-8">
                    Complete oversight of your home’s records, real-time power draw, warranties, and multi-property management in your pocket.
                  </p>

                  <div className="flex justify-center mb-8">
                    <OwnerAppMock />
                  </div>

                  <div className="space-y-3 text-xs text-warmgray-300 mb-8">
                    <div className="flex items-start gap-2.5">
                      <Check size={15} className="text-sandstone-300 flex-shrink-0 mt-0.5" />
                      <span><strong>Live power & rupee costs:</strong> Real-time 3-phase draw plus high-load relay breakdown.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check size={15} className="text-sandstone-300 flex-shrink-0 mt-0.5" />
                      <span><strong>Barcode auto-fill:</strong> Scan any appliance barcode to populate brand, model, and specs.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check size={15} className="text-sandstone-300 flex-shrink-0 mt-0.5" />
                      <span><strong>Portfolio switching:</strong> Manage multiple second homes across Alibag, Goa, and Karjat.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-warmgray-400">
                    Available now on <strong className="text-white">Android</strong>. iPhone version coming soon.
                  </div>
                  <a
                    href="#TODO-play-store-link"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-charcoal-900 text-xs font-semibold hover:bg-sandstone-200 transition-colors"
                    title="TODO: Play Store link"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-1.64V3.454c0-.64.22-1.22.61-1.64zm11.233 11.234l2.128 2.128-11.89 6.84 9.762-8.968zM4.08 2.05l11.89 6.84-2.128 2.128L4.08 2.05zm14.372 8.784l2.84 1.632a1.2 1.2 0 0 1 0 2.068l-2.84 1.632-2.348-2.348 2.348-2.348z" />
                    </svg>
                    <span>Google Play</span>
                    <span className="text-[10px] text-warmgray-500 font-normal">(TODO: Play Store link)</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right: Caretaker QR View */}
            <RevealOnScroll delay={0.08}>
              <div className="h-full p-8 md:p-10 rounded-3xl bg-charcoal-800/90 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-sandstone-400/20 text-sandstone-300 text-[11px] font-bold tracking-[0.14em] uppercase">
                      For Caretakers
                    </span>
                    <span className="text-xs text-sandstone-300 font-semibold">Zero App · Zero Login</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    Scan the Label. Know What to Do.
                  </h3>
                  <p className="text-warmgray-300 text-sm leading-relaxed mb-8">
                    Your caretaker points any phone camera at the weather-resistant label and immediately sees care steps and the repair contact in English, Hindi, or Marathi.
                  </p>

                  <div className="flex justify-center mb-8">
                    <QRPhoneMock />
                  </div>

                  {/* Scan Shows vs Never Shows */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6 text-xs">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] font-bold tracking-wider uppercase text-sandstone-300 mb-2">A scan shows</div>
                      <ul className="space-y-1.5 text-warmgray-300">
                        {scanShows.map(s => (
                          <li key={s} className="flex items-center gap-1.5">
                            <Check size={13} className="text-sandstone-300" /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] font-bold tracking-wider uppercase text-warmgray-400 mb-2">A scan never shows</div>
                      <ul className="space-y-1.5 text-warmgray-400">
                        {scanHides.map(s => (
                          <li key={s} className="flex items-center gap-1.5">
                            <X size={13} className="text-warmgray-500" /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 text-xs text-warmgray-400 leading-relaxed">
                  Caretakers never see energy data, invoices or owner details. Energy readings and alerts are for owners and managers only.{' '}
                  <span className="text-sandstone-300 font-semibold">[CONFIRM: caretaker visibility]</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          CHAPTER 4: TRUST, ROLLOUT & HOW TO GET IT
          ──────────────────────────────────────────────────────── */}
      <section className="section-py bg-white" aria-label="Trust, Rollout and Access">
        <div className="container-luxury">
          {/* Two Ways to Get It */}
          <RevealOnScroll>
            <div className="max-w-3xl mb-12">
              <div className="section-label">How to get it</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                Built at handover,{' '}
                <span className="text-sandstone-600">or built for your home.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <RevealOnScroll>
              <div className="h-full p-8 md:p-10 rounded-3xl bg-charcoal-800 text-white flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-sandstone-300 mb-3">For HSI clients</div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Handed over with your villa</h3>
                  <p className="text-warmgray-300 leading-relaxed text-sm mb-6">
                    HSIOS™ already records your BOQ, vendors and handover dossier during execution. Your
                    Digital Twin is built from that record, so it is complete on the day you receive
                    the keys — with no separate data entry.
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 text-xs text-warmgray-300 leading-relaxed">
                    <span className="text-sandstone-300 font-semibold block mb-1">Energy monitoring is included.</span>
                    The smart meter and appliance relays are fitted before handover by a licensed electrician, with no interior rewiring.
                  </div>
                </div>
                <a href="#walkthrough" className="btn btn-bronze self-start">Book a Walkthrough</a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08}>
              <div className="h-full p-8 md:p-10 rounded-3xl bg-ivory-100 border border-ivory-300 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-sandstone-600 mb-3">For any villa or second home</div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">Onboarded by our team</h3>
                  <p className="text-warmgray-600 leading-relaxed text-sm mb-6">
                    Our onboarding team visits the home, captures the 360° walkthrough, scans and
                    labels every asset and reads your existing invoices and warranty cards. Standalone
                    homes are opening in stages.
                  </p>
                  <div className="p-4 rounded-xl bg-white border border-ivory-300 mb-6 text-xs text-warmgray-600 leading-relaxed">
                    <span className="text-sandstone-700 font-semibold block mb-1">Energy monitoring is included.</span>
                    Our team fits the 3-phase meter and relays during the onboarding visit, with no disruption to your interiors.
                  </div>
                </div>
                <a href="#get-access" className="btn btn-outline-dark self-start">Join Early Access</a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Data Sovereignty & Privacy Grid */}
          <div className="mb-20">
            <RevealOnScroll>
              <div className="max-w-2xl mb-10">
                <div className="section-label">Your data</div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-800 mb-3">
                  Your home’s record <span className="text-sandstone-600">belongs to you.</span>
                </h3>
                <p className="text-warmgray-600 text-sm leading-relaxed">
                  A Digital Twin holds a complete record of your villa. It is designed around privacy under India’s Digital Personal Data Protection Act.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { Icon: Download,    title: 'Export at any time',       desc: 'The complete record — data, original invoices, media and energy logs — in one download.' },
                { Icon: UserCheck,   title: 'Consent per purpose',      desc: 'Reminders, sharing and marketing are each opted into separately and can be withdrawn.' },
                { Icon: MapPin,      title: 'Stored in India',          desc: 'Energy readings and asset documents are stored in an Indian cloud region.' },
                { Icon: EyeOff,      title: 'Private by default',       desc: 'Public QR views exclude invoice values, owner identity, address and live energy readings.' },
                { Icon: ShieldCheck, title: 'Controlled energy access', desc: 'You choose who sees live energy and alerts: owner, family, villa manager. Caretakers don’t see it by default.' },
                { Icon: Activity,    title: 'Monitoring & alerts only', desc: 'Real-time observation and anomaly detection without remote appliance switching or control.' },
              ].map(({ Icon, title, desc }) => (
                <RevealOnScroll key={title}>
                  <div className="p-5 rounded-2xl bg-ivory-50 border border-ivory-200 h-full">
                    <Icon className="text-sandstone-700 mb-2.5" size={20} strokeWidth={1.5} />
                    <div className="text-sm font-semibold text-charcoal-800 mb-1">{title}</div>
                    <div className="text-xs text-warmgray-600 leading-relaxed">{desc}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Pilot Proof & 4-Phase Roadmap */}
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <RevealOnScroll>
              <div className="p-8 rounded-3xl bg-charcoal-800 text-white flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sandstone-400/15 border border-sandstone-400/30 text-sandstone-300 text-[11px] font-bold tracking-[0.16em] uppercase mb-4">
                    Live Demo
                  </div>
                  <h4 className="font-serif text-2xl font-bold mb-3">See it live at Casa Frangipani</h4>
                  <p className="text-warmgray-300 text-sm leading-relaxed mb-6">
                    Book a walkthrough and we’ll show you the live Casa Energy dashboard and Digital Twin in action on an operating luxury villa in Alibag.
                  </p>
                  <div className="text-xs text-warmgray-400 bg-white/5 p-3.5 rounded-xl border border-white/10 mb-6">
                    Public walkthroughs are conducted privately with our engineering team.{' '}
                    <span className="text-warmgray-400">[CONFIRM: whether to add 2–3 static screenshots of the Casa Energy dashboard with realistic data instead]</span>
                  </div>
                </div>
                <a href="#walkthrough" className="btn btn-bronze self-start">Book a Walkthrough</a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08}>
              <div className="section-label">Rollout</div>
              <h4 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">
                Proven on real villas first.
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {roadmap.map(({ phase, name, status, items }, i) => {
                  const current = i === 0
                  return (
                    <div key={phase} className={`p-5 rounded-2xl border ${current ? 'bg-sandstone-50 border-sandstone-300' : 'bg-ivory-50 border-ivory-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sandstone-700">{phase}</span>
                        <span className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${current ? 'bg-sandstone-200 text-sandstone-900' : 'bg-ivory-200 text-warmgray-600'}`}>{status}</span>
                      </div>
                      <div className="font-serif font-bold text-charcoal-800 text-sm mb-2">{name}</div>
                      <ul className="space-y-1 text-xs text-warmgray-600">
                        {items.slice(0, 3).map(it => (
                          <li key={it} className="flex items-center gap-1.5">
                            <span className="text-sandstone-600">·</span> {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          CHAPTER 5: ACTION & CLARITY
          ──────────────────────────────────────────────────────── */}

      {/* FAQ */}
      <section className="section-py bg-ivory-100" aria-label="Frequently asked questions">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-5">
                Questions owners <span className="text-sandstone-600">ask first.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-6">
                The Digital Twin is part of{' '}
                <Link href="/hsi-os" className="text-sandstone-600 font-semibold hover:text-sandstone-700">HSIOS™</Link>,
                the operating platform behind every HSI luxury project.
              </p>
              <div className="p-4 rounded-xl bg-white border border-ivory-300 text-xs text-warmgray-600 space-y-2">
                <div className="font-semibold text-charcoal-800">Quick answers on energy & hardware:</div>
                <div>• Independent SIM connection (no villa broadband needed)</div>
                <div>• Energy monitoring included with setup</div>
                <div>• Caretakers use camera only (no app required)</div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08}>
              <FAQAccordion items={twinFaqs} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="get-access" className="section-py bg-ivory-200 scroll-mt-16" aria-label="Enquire">
        <span id="walkthrough" className="block relative -top-16" aria-hidden="true" />
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label">Get started</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-5">
                Put your home <span className="text-sandstone-600">on record.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-6">
                HSI clients can book a walkthrough now. For other homes, join early access and our onboarding engineering team will contact you.
              </p>
              <ul className="space-y-3 text-sm text-warmgray-600">
                {['We reply within 24 hours', 'In person or over video', 'No obligation'].map((t) => (
                  <li key={t} className="flex gap-2.5"><Check size={16} className="text-sandstone-600 mt-0.5" />{t}</li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <DigitalTwinForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Illustrative Mockups ──────────────────────────────────── */

function AssetCardMock() {
  return (
    <div className="relative mx-auto max-w-md" aria-hidden="true">
      {/* 360° room strip */}
      <div className="relative h-44 rounded-t-3xl overflow-hidden bg-gradient-to-br from-sandstone-700/60 via-charcoal-700 to-charcoal-900 border border-white/10">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
        <div className="absolute inset-y-0 left-1/3 w-px bg-white/10" />
        <div className="absolute inset-y-0 left-2/3 w-px bg-white/10" />
        {[
          { l: '22%', t: '38%', active: false },
          { l: '54%', t: '30%', active: true },
          { l: '80%', t: '55%', active: false },
        ].map((p, i) => (
          <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: p.l, top: p.t }}>
            <span className={`block w-4 h-4 rounded-full border-2 ${p.active ? 'bg-sandstone-300 border-white' : 'bg-white/30 border-white/70'}`} />
            {p.active && <span className="absolute inset-0 rounded-full bg-sandstone-300/50 animate-ping" />}
          </span>
        ))}
        <div className="absolute top-3 left-4 text-[10px] font-bold tracking-[0.16em] uppercase text-white/70">360° · Master bathroom</div>
      </div>
      {/* Asset card */}
      <div className="rounded-b-3xl bg-white p-6 shadow-luxury-lg">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-sandstone-600 mb-1">Water heating</div>
            <div className="font-serif text-lg font-bold text-charcoal-800">Geyser · 25 L</div>
            <div className="text-xs text-warmgray-500">Master bathroom · First floor</div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">Working</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-ivory-100">
            <div className="text-warmgray-500 mb-0.5">Warranty</div>
            <div className="font-semibold text-charcoal-800">Covered · 14 months left</div>
          </div>
          <div className="p-3 rounded-xl bg-ivory-100">
            <div className="text-warmgray-500 mb-0.5">AMC</div>
            <div className="font-semibold text-charcoal-800">Renews in 7 days</div>
          </div>
          <div className="p-3 rounded-xl bg-ivory-100">
            <div className="text-warmgray-500 mb-0.5">Last service</div>
            <div className="font-semibold text-charcoal-800">Descaled · Mar</div>
          </div>
          <div className="p-3 rounded-xl bg-ivory-100">
            <div className="text-warmgray-500 mb-0.5">Documents</div>
            <div className="font-semibold text-charcoal-800">Invoice · Warranty · Manual</div>
          </div>
        </div>

        {/* Live energy strip */}
        <div className="mt-3 p-3.5 rounded-xl bg-sandstone-50 border border-sandstone-200">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5 text-sandstone-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live energy · Running now
            </span>
            <span className="px-1.5 py-0.5 rounded bg-sandstone-200 text-charcoal-700 text-[9px] font-semibold tracking-wider uppercase">Example</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <div className="text-warmgray-500 text-[10px]">Load</div>
              <div className="font-semibold text-charcoal-800">2.0 kW</div>
            </div>
            <div>
              <div className="text-warmgray-500 text-[10px]">Today</div>
              <div className="font-semibold text-charcoal-800">3.2 kWh · ₹38</div>
            </div>
            <div>
              <div className="text-warmgray-500 text-[10px]">Last 30 days</div>
              <div className="font-semibold text-charcoal-800">₹1,152</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[11px] text-warmgray-400 mt-3">Illustrative view (Example data)</div>
    </div>
  )
}

function OwnerAppMock() {
  return (
    <div className="relative w-[270px] rounded-[2.5rem] bg-charcoal-900 p-3 shadow-luxury-lg border border-white/20" aria-hidden="true">
      <div className="rounded-[2rem] bg-charcoal-800 overflow-hidden text-white">
        {/* App Topbar */}
        <div className="px-4 pt-5 pb-3 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[9px] font-bold tracking-wider uppercase text-sandstone-300">Property</div>
            <div className="font-serif text-xs font-bold flex items-center gap-1">
              <span>Casa Frangipani</span>
              <ChevronDown size={12} className="text-sandstone-300" />
            </div>
          </div>
          <span className="text-[8px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase tracking-wider">Vacant Mode</span>
        </div>

        {/* Live Power Gauge */}
        <div className="p-4 bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-b border-white/10">
          <div className="flex items-center justify-between text-[10px] text-warmgray-400 mb-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Whole House Draw
            </span>
            <span className="text-[9px] px-1 rounded bg-white/10 text-warmgray-300">Example</span>
          </div>
          <div className="font-serif text-2xl font-bold text-white mb-2">3.1 kW</div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded-lg bg-white/5">
              <div className="text-warmgray-400">Today</div>
              <div className="font-semibold text-sandstone-300">18.4 kWh · ₹221</div>
            </div>
            <div className="p-2 rounded-lg bg-white/5">
              <div className="text-warmgray-400">Projected Bill</div>
              <div className="font-semibold text-sandstone-300">₹6,450</div>
            </div>
          </div>
        </div>

        {/* Relay List */}
        <div className="p-3 space-y-2 text-[10px]">
          <div className="text-warmgray-400 font-bold uppercase tracking-wider text-[9px] px-1">Active Circuits</div>
          <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
            <span>Pool Filter Pump</span>
            <span className="text-emerald-400 font-semibold">1.2 kW · Active</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
            <span>Master AC</span>
            <span className="text-warmgray-400">0.0 kW · Off</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
            <span>Geyser 25L</span>
            <span className="text-warmgray-400">0.0 kW · Standby</span>
          </div>
        </div>

        {/* Active Alert Pill */}
        <div className="p-2.5 mx-3 mb-4 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center gap-2 text-[10px] text-amber-200">
          <AlertTriangle size={12} className="text-amber-400 flex-shrink-0" />
          <span className="truncate">Load jumped to 3.1 kW at 02:14</span>
        </div>
      </div>
      <div className="text-center text-[10px] text-warmgray-400 mt-2.5">HSIOS™ Android App</div>
    </div>
  )
}

function QRPhoneMock() {
  return (
    <div className="relative w-[270px] rounded-[2.5rem] bg-charcoal-700 p-3 shadow-luxury-lg border border-white/10" aria-hidden="true">
      <div className="rounded-[2rem] bg-ivory-50 overflow-hidden">
        <div className="bg-charcoal-800 px-5 pt-6 pb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-sandstone-300">HSIOS™ Care</span>
            <span className="flex gap-1 text-[10px] font-semibold">
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-white/60">EN</span>
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-white/60">हि</span>
              <span className="px-1.5 py-0.5 rounded bg-sandstone-400 text-charcoal-900">मरा</span>
            </span>
          </div>
          <div className="font-serif text-lg font-bold text-white leading-tight">बोअरवेल पंप</div>
          <div className="text-xs text-warmgray-400">Borewell pump · Utility area</div>
        </div>
        <div className="p-4 space-y-3">
          <div className="p-3 rounded-xl bg-white border border-ivory-300">
            <div className="text-[10px] font-bold tracking-wider uppercase text-sandstone-600 mb-1.5">Care steps</div>
            <ol className="text-xs text-charcoal-700 space-y-1 list-decimal list-inside">
              <li>Check the tank float switch</li>
              <li>Reset the starter once</li>
              <li>If it trips again, call below</li>
            </ol>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 p-2.5 rounded-xl bg-emerald-50 text-[11px] font-semibold text-emerald-800">AMC active</div>
            <div className="flex-1 p-2.5 rounded-xl bg-ivory-100 text-[11px] font-semibold text-charcoal-700">Warranty ended</div>
          </div>
          <div className="w-full py-3 rounded-full bg-bronze-600 text-white text-center text-sm font-semibold">Call repair contact</div>
          <div className="w-full py-3 rounded-full border border-ivory-300 text-center text-sm font-semibold text-charcoal-700">Watch the how-to video</div>
        </div>
      </div>
      <div className="text-center text-[10px] text-warmgray-400 mt-2.5">Caretaker Public Scan (No App)</div>
    </div>
  )
}
