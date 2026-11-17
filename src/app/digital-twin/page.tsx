import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Layers, Rotate3d, ScanText, QrCode, BellRing, Siren,
  FileSearch, PhoneCall, CalendarX2, Zap,
  Home, HardHat, Building2, Briefcase,
  Download, UserCheck, MapPin, EyeOff, Check, X,
  Smartphone, ShieldCheck, Activity, Gauge, AlertTriangle,
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

/* ── Content ───────────────────────────────────────────────── */
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

const features = [
  {
    Icon: Layers,
    title: 'Every asset, room by room',
    desc: 'House → floor → room → asset. Appliances, pumps, geysers, RO, HVAC, electrical, joinery and fixtures — each with brand, model, serial, warranty, AMC and full service history.',
  },
  {
    Icon: Rotate3d,
    title: '360° walkthrough, assets pinned',
    desc: 'Walk through the house from anywhere. Tap a pin on the geyser in the 360° view and its card opens — built to load quickly on a phone over 4G.',
  },
  {
    Icon: ScanText,
    title: 'Invoices & bills read for you',
    desc: 'Photograph or forward an invoice, warranty card, AMC contract or electricity bill. AI extracts the brand, model, dates, tariff and vendor; you confirm before anything is saved. The original is kept.',
  },
  {
    Icon: QrCode,
    title: 'QR labels for caretakers',
    desc: 'A weather-resistant label on every asset. Scan it with any phone camera to see what the item is, how to care for it and who to call.',
  },
  {
    Icon: BellRing,
    title: 'Reminders on WhatsApp',
    desc: 'Warranty and AMC expiry reminders at 30 days, 7 days and on the day — timed to your quiet hours and time zone, wherever you live.',
  },
  {
    Icon: Siren,
    title: 'Emergency points marked',
    desc: 'The main water valve, electrical DB, gas shut-off, inverter and fire extinguishers — pinned, so anyone in the house can find them when it matters.',
  },
]

const audiences = [
  { Icon: Home,      title: 'Owners & NRI owners', desc: 'See the house, its warranties and its costs from anywhere. Approve service work without a phone call.' },
  { Icon: HardHat,   title: 'Caretakers',          desc: 'Scan a label, see what to do and who to call. Built for a first-time smartphone user, in their language.' },
  { Icon: Briefcase, title: 'Villa managers',      desc: 'Several homes, one view — assets, reminders and service history across the portfolio.' },
  { Icon: Building2, title: 'Developers',          desc: 'Hand over every unit with its twin already built. Planned for a later phase.', later: true },
]

const roadmap = [
  {
    phase: 'Phase 1', name: 'Home Ledger + Live Energy', status: 'In pilot',
    items: [
      'Asset register and emergency points',
      '360° walkthrough with pins',
      'AI reading of invoices, warranties and electricity bills',
      'Caretaker QR labels',
      'WhatsApp reminders',
      'Live whole-house energy monitoring (3-phase smart meter)',
      'Per-appliance monitoring on high-load appliances',
      'Unusual-use power alerts',
      'The HSIOS™ Android app',
    ],
  },
  {
    phase: 'Phase 2', name: 'Service & Safety', status: 'Next',
    items: [
      'Caretaker tickets from a QR scan, with photo and voice note',
      'Vendor dispatch and repair history',
      'Water-leak detection with automatic shut-off',
      'Energy-based service prompts, e.g. "your AC is using 25% more than last month, so book a service"',
    ],
  },
  {
    phase: 'Phase 3', name: 'Marketplace', status: 'Planned',
    items: [
      'AMC renewals and repair bookings with vetted vendors',
      'Energy-efficient replacements with real payback figures (using measured consumption)',
      'Measured 3D layer of the home',
    ],
  },
  {
    phase: 'Phase 4', name: 'Scale', status: 'Planned',
    items: [
      'Self-onboarding with a phone scan',
      'Developer handover portal',
      'Transferable home passport on sale (including energy history)',
    ],
  },
]

const scanShows = ['Item name and room', 'Care steps and troubleshooting', 'Repair contact', 'Warranty and AMC status']
const scanHides = ['Invoice values', 'The owner’s identity', 'The home’s full address', 'Photos of the interior', 'Live energy data and alerts']

/* ── Page ──────────────────────────────────────────────────── */
export default function DigitalTwinPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, softwareSchema, faqSchema]} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-40 md:pb-32 bg-charcoal-800 overflow-hidden" aria-label="HSIOS Digital Twin">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-sandstone-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sandstone-400/15 border border-sandstone-400/30 text-sandstone-300 text-[11px] font-bold tracking-[0.16em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sandstone-300" />
                Early Access
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
              <div className="flex flex-wrap gap-3 mb-6">
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

      {/* ── THE PROBLEM ───────────────────────────────────────── */}
      <section className="section-py bg-white" aria-label="The problem">
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
              <RevealOnScroll key={title} delay={i * 0.06}>
                <div className="card-warm h-full p-7 rounded-2xl">
                  <Icon className="text-sandstone-600 mb-5" size={26} strokeWidth={1.5} />
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ─────────────────────────────────────── */}
      <section className="section-py bg-ivory-100" aria-label="What is inside">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <div className="section-label">What’s inside</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                One record.{' '}
                <span className="text-sandstone-600">The whole house.</span>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed">
                The first release — the Home Ledger — covers everything an owner and caretaker need
                to keep a villa running from a distance.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ Icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={(i % 3) * 0.06}>
                <div className="h-full p-7 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-sandstone-100 flex items-center justify-center mb-5">
                    <Icon className="text-sandstone-700" size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE ENERGY MONITORING ─────────────────────────────── */}
      <section className="section-py bg-white relative overflow-hidden" aria-label="Live energy monitoring">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <div className="section-label">LIVE ENERGY MONITORING</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                Know what your home is using,{' '}
                <span className="text-sandstone-600">right now, from anywhere.</span>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed">
                A smart 3-phase energy meter on your main supply streams readings to your Digital Twin
                around the clock over its own SIM connection, so it doesn’t depend on the villa’s Wi-Fi.
                Metering relays on your highest-load appliances show exactly where the power goes, and what it costs.
              </p>
            </div>
          </RevealOnScroll>

          {/* 3a. Three layers (3 cards) */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <RevealOnScroll delay={0}>
              <div className="h-full p-7 rounded-2xl bg-ivory-50 border border-ivory-300 hover:border-sandstone-300 transition-colors duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-sandstone-100 flex items-center justify-center mb-5">
                  <Activity className="text-sandstone-700" size={22} strokeWidth={1.75} />
                </div>
                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-sandstone-600 mb-2">Layer 1</div>
                <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-4">The whole house, live</h3>
                <ul className="space-y-3 text-sm text-warmgray-600 leading-relaxed flex-1">
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                    <span>Real-time power across all three phases</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                    <span>Today’s, this month’s and this year’s consumption in kWh and ₹</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Power-quality checks (voltage, phase balance, power factor) that protect costly appliances{' '}
                      <span className="text-xs text-sandstone-600 font-semibold">[CONFIRM: which readings Casa Energy shows]</span>
                    </span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.06}>
              <div className="h-full p-7 rounded-2xl bg-ivory-50 border border-ivory-300 hover:border-sandstone-300 transition-colors duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-sandstone-100 flex items-center justify-center mb-5">
                  <Gauge className="text-sandstone-700" size={22} strokeWidth={1.75} />
                </div>
                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-sandstone-600 mb-2">Layer 2</div>
                <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-4">Appliance by appliance</h3>
                <ul className="space-y-3 text-sm text-warmgray-600 leading-relaxed flex-1">
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Metering relays fitted to high-load appliances: <strong>air conditioners, geysers, swimming-pool filter pump, borewell pump</strong> and other heavy loads
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                    <span>Running hours, energy use and cost for each one</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                    <span>Spot an appliance using more than it should — an early sign it needs service</span>
                  </li>
                  <li className="flex items-start gap-2.5 pt-1 text-xs font-semibold text-sandstone-700">
                    <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                    <span>Live today at Casa Frangipani, Alibag.</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.12}>
              <div className="h-full p-7 rounded-2xl bg-ivory-50 border border-ivory-300 hover:border-sandstone-300 transition-colors duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-sandstone-100 flex items-center justify-center mb-5">
                  <Layers className="text-sandstone-700" size={22} strokeWidth={1.75} />
                </div>
                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-sandstone-600 mb-2">Layer 3</div>
                <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-4">Room by room</h3>
                <ul className="space-y-3 text-sm text-warmgray-600 leading-relaxed flex-1">
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                    <span>Energy grouped by floor and room, using the same house → floor → room structure as your asset register</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                    <span>Each appliance’s energy data sits directly on its asset card, next to its warranty and AMC</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>

          {/* 3b. Caught while you're away */}
          <div className="mb-16 p-8 md:p-10 rounded-3xl bg-charcoal-800 text-white">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sandstone-400/15 border border-sandstone-400/30 text-sandstone-300 text-[11px] font-bold tracking-[0.16em] uppercase mb-4">
                  <AlertTriangle size={14} className="text-sandstone-300" />
                  Unusual-Use Alerts
                </div>
                <h3 className="font-serif text-display-md text-white mb-4">
                  If your house is using power,{' '}
                  <span className="text-sandstone-300">you’ll know.</span>
                </h3>
                <p className="text-warmgray-300 leading-relaxed mb-6">
                  Because the supply to your home is watched 24/7, any use you didn’t expect shows up at
                  once. That means an AC running in a locked villa, a geyser switched on in the middle of
                  the night, or a sudden rise in load when the house should be empty. You get an alert on
                  the Android app and WhatsApp, with the time, the appliance and how much it’s using.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-warmgray-400 leading-relaxed">
                  <strong className="text-sandstone-300 font-semibold block mb-1">Your rules, your privacy</strong>
                  You set what counts as normal: occupied or vacant mode, guest bookings, caretaker hours,
                  quiet hours. Alerts are about your property’s power use, not about watching people.
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.08}>
                <div className="space-y-3">
                  <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-sandstone-300 mb-2 flex items-center justify-between">
                    <span>Alert examples</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-warmgray-300">Example</span>
                  </div>
                  {[
                    { title: 'Master-bedroom AC running for 6 hours', meta: 'The villa is marked Vacant' },
                    { title: 'Load jumped to 3.1 kW at 02:14', meta: 'No booking or visit is scheduled' },
                    { title: 'Pool filter pump has run continuously for 20 hours', meta: 'Exceeds standard cycle' },
                    { title: 'Geyser 2 drawing power', meta: 'No hot-water use expected' },
                  ].map((alert, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BellRing size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{alert.title}</div>
                        <div className="text-xs text-warmgray-300 mt-0.5">{alert.meta}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* 3c. See your bill before it arrives & 3d. CTA strip */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <RevealOnScroll>
              <div className="h-full p-8 rounded-3xl bg-ivory-100 border border-ivory-300 flex flex-col justify-between">
                <div>
                  <div className="section-label">Bill projections</div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">
                    See your bill before it arrives
                  </h3>
                  <ul className="space-y-3.5 text-sm text-warmgray-600 mb-6">
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-semibold text-charcoal-800">Your real tariff, set by a scan.</strong> Scan or upload a past electricity bill. HSIOS™ reads your tariff, slabs and fixed charges, so every rupee shown matches what MSEDCL will charge.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                      <span>Month-to-date spend and a projected monthly bill</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-sandstone-600 flex-shrink-0 mt-0.5" />
                      <span>Monthly report: top 5 appliances by cost, and changes from last month</span>
                    </li>
                  </ul>
                </div>
                <div className="text-xs text-warmgray-500 bg-white p-3.5 rounded-xl border border-ivory-200">
                  <span className="font-semibold text-charcoal-800">No bill surprises:</span> Catch faulty compressors, runaway pumps, or unintended standby consumption before the utility meter reads it.
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08}>
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-white flex flex-col justify-between border border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sandstone-400/15 border border-sandstone-400/30 text-sandstone-300 text-[11px] font-bold tracking-[0.16em] uppercase mb-4">
                    Live Demo
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    See it live at Casa Frangipani
                  </h3>
                  <p className="text-warmgray-300 text-sm leading-relaxed mb-6">
                    Book a walkthrough and we’ll show you the live Casa Energy dashboard in action on an operating luxury villa in Alibag.
                  </p>
                  <div className="text-xs text-warmgray-400 bg-white/5 p-3.5 rounded-xl border border-white/10 mb-6">
                    <span className="text-sandstone-300 font-semibold block mb-0.5">Note:</span>
                    Public walkthroughs are conducted privately with our engineering team.{' '}
                    <span className="text-warmgray-400">[CONFIRM: whether to add 2–3 static screenshots of the Casa Energy dashboard with realistic data instead]</span>
                  </div>
                </div>
                <a href="#walkthrough" className="btn btn-bronze self-start">
                  Book a Walkthrough
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── THE HSIOS APP ─────────────────────────────────────── */}
      <section className="section-py bg-ivory-100" aria-label="The HSIOS App">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <div className="section-label">THE HSIOS™ APP</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                One app for your home’s record{' '}
                <span className="text-sandstone-600">and its power.</span>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed">
                Owners, villa managers and HSI’s onboarding team use the HSIOS™ Android app to build, run and
                check on the Digital Twin.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              {
                title: 'Scan to add',
                desc: 'Scan an appliance’s barcode and HSIOS™ fills in the make, model and specs. You confirm before it’s saved.',
              },
              {
                title: 'Scan to open',
                desc: 'Scan any HSIOS™ QR label to open the full record: invoice, warranty, AMC, service history and live energy.',
              },
              {
                title: 'Live energy',
                desc: 'Whole-house and per-appliance readings, cost in rupees and complete historical consumption.',
              },
              {
                title: 'Alerts',
                desc: 'Unusual use, appliances left running, AMC and warranty expiry, delivered instantly on the Android app and on WhatsApp.',
              },
              {
                title: 'Every home in one place',
                desc: 'Villa managers can switch between properties effortlessly in a single tap.',
              },
              {
                title: 'Your language',
                desc: 'Full multi-language support in English, Hindi and Marathi across interfaces and care guides.',
              },
            ].map(({ title, desc }, i) => (
              <RevealOnScroll key={title} delay={(i % 3) * 0.05}>
                <div className="h-full p-7 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 transition-colors flex flex-col">
                  <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-sandstone-600 mb-2">Feature 0{i + 1}</div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-2.5">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed mb-2 flex-1">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="p-6 rounded-2xl bg-white border border-ivory-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-sm text-warmgray-700">
                <strong className="text-charcoal-800 font-semibold">Caretakers don’t need the app</strong> — a QR label scan works without it.
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-xs font-semibold text-sandstone-700 bg-sandstone-100/60 px-4 py-2 rounded-xl flex items-center gap-2">
                  <Smartphone size={15} className="flex-shrink-0" />
                  <span>Available now on <strong>Android</strong>. iPhone version coming soon.</span>
                </div>
                <a
                  href="#TODO-play-store-link"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-800 text-white text-xs font-semibold hover:bg-charcoal-900 transition-colors"
                  title="TODO: Play Store link"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-1.64V3.454c0-.64.22-1.22.61-1.64zm11.233 11.234l2.128 2.128-11.89 6.84 9.762-8.968zM4.08 2.05l11.89 6.84-2.128 2.128L4.08 2.05zm14.372 8.784l2.84 1.632a1.2 1.2 0 0 1 0 2.068l-2.84 1.632-2.348-2.348 2.348-2.348z" />
                  </svg>
                  <span>Get it on Google Play</span>
                  <span className="text-[10px] text-warmgray-400 font-normal">(TODO: Play Store link)</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CARETAKER QR VIEW ─────────────────────────────────── */}
      <section className="section-py bg-charcoal-900 relative overflow-hidden" aria-label="Caretaker QR view">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <RevealOnScroll className="order-2 lg:order-1 flex justify-center">
              <QRPhoneMock />
            </RevealOnScroll>

            <RevealOnScroll delay={0.08} className="order-1 lg:order-2">
              <div className="section-label text-sandstone-400">For your caretaker</div>
              <h2 className="font-serif text-display-md text-white mb-5">
                Scan the label.{' '}
                <span className="text-sandstone-300">Know what to do.</span>
              </h2>
              <p className="text-warmgray-300 leading-relaxed mb-8">
                No app to install and no password to remember. Your caretaker points any phone
                camera at the label and sees the care steps and the right repair contact — in
                English, Hindi or Marathi.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-sandstone-300 mb-4">A scan shows</div>
                  <ul className="space-y-2.5">
                    {scanShows.map((s) => (
                      <li key={s} className="flex gap-2.5 text-sm text-warmgray-200">
                        <Check size={16} className="text-sandstone-300 flex-shrink-0 mt-0.5" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-warmgray-400 mb-4">A public scan never shows</div>
                  <ul className="space-y-2.5">
                    {scanHides.map((s) => (
                      <li key={s} className="flex gap-2.5 text-sm text-warmgray-400">
                        <X size={16} className="text-warmgray-500 flex-shrink-0 mt-0.5" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm text-warmgray-400 mt-5">
                Owners and managers who are signed in see the full record from the same label. Caretakers never see energy data, invoices or owner details.{' '}
                <span className="text-sandstone-300 font-semibold text-xs">[CONFIRM: caretaker visibility]</span>
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── TWO WAYS TO GET IT ────────────────────────────────── */}
      <section className="section-py bg-white" aria-label="How to get it">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <div className="section-label">How to get it</div>
              <h2 className="font-serif text-display-lg text-charcoal-800">
                Built at handover,{' '}
                <span className="text-sandstone-600">or built for your home.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            <RevealOnScroll>
              <div className="h-full p-8 md:p-10 rounded-3xl bg-charcoal-800 text-white flex flex-col">
                <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-sandstone-300 mb-4">For HSI clients</div>
                <h3 className="font-serif text-display-sm mb-4">Handed over with your villa</h3>
                <p className="text-warmgray-300 leading-relaxed mb-6 flex-1">
                  HSIOS™ already records your BOQ, vendors and handover dossier during execution. Your
                  Digital Twin is built from that record, so it is complete on the day you receive
                  the keys — with no separate data entry.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 text-xs text-warmgray-300 leading-relaxed">
                  <span className="text-sandstone-300 font-semibold">Energy monitoring is included</span> — the smart meter and appliance relays are fitted before handover by a licensed electrician.
                </div>
                <a href="#walkthrough" className="btn btn-bronze self-start">Book a Walkthrough</a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="h-full p-8 md:p-10 rounded-3xl bg-ivory-100 border border-ivory-300 flex flex-col">
                <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-sandstone-600 mb-4">For any villa or second home</div>
                <h3 className="font-serif text-display-sm text-charcoal-800 mb-4">Onboarded by our team</h3>
                <p className="text-warmgray-600 leading-relaxed mb-6 flex-1">
                  Our onboarding team visits the home, captures the 360° walkthrough, scans and
                  labels every asset and reads your existing invoices and warranty cards. Standalone
                  homes are opening in stages.
                </p>
                <div className="p-4 rounded-xl bg-white border border-ivory-300 mb-6 text-xs text-warmgray-600 leading-relaxed">
                  <span className="text-sandstone-700 font-semibold">Energy monitoring is included</span> — our team fits the meter and relays during the onboarding visit.
                </div>
                <a href="#get-access" className="btn btn-outline-dark self-start">Join Early Access</a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────── */}
      <section className="section-py bg-ivory-100" aria-label="Who it is for">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-12">
              <div className="section-label">Who it’s for</div>
              <h2 className="font-serif text-display-md text-charcoal-800">
                One record,{' '}
                <span className="text-sandstone-600">the right view for each person.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map(({ Icon, title, desc, later }, i) => (
              <RevealOnScroll key={title} delay={i * 0.05}>
                <div className="h-full p-6 rounded-2xl bg-white border border-ivory-300">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="text-sandstone-600" size={24} strokeWidth={1.5} />
                    {later && <span className="badge-warm text-[10px]">Later</span>}
                  </div>
                  <h3 className="font-serif font-bold text-charcoal-800 mb-2">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ───────────────────────────────────────────── */}
      <section className="section-py bg-white" aria-label="Roadmap">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <div className="section-label">Roadmap</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-4">
                Released in phases,{' '}
                <span className="text-sandstone-600">proven on real villas first.</span>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed">
                Each phase goes live on HSI villas before it is offered more widely.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map(({ phase, name, status, items }, i) => {
              const current = i === 0
              return (
                <RevealOnScroll key={phase} delay={i * 0.06}>
                  <div className={`h-full p-6 rounded-2xl border ${current ? 'bg-charcoal-800 border-charcoal-800 text-white' : 'bg-ivory-50 border-ivory-300'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[11px] font-bold tracking-[0.14em] uppercase ${current ? 'text-sandstone-300' : 'text-sandstone-600'}`}>{phase}</span>
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${current ? 'bg-sandstone-400 text-charcoal-900' : 'bg-ivory-200 text-warmgray-600'}`}>{status}</span>
                    </div>
                    <h3 className={`font-serif text-xl font-bold mb-4 ${current ? 'text-white' : 'text-charcoal-800'}`}>{name}</h3>
                    <ul className="space-y-2">
                      {items.map((it) => (
                        <li key={it} className={`text-sm leading-snug flex gap-2 ${current ? 'text-warmgray-300' : 'text-warmgray-600'}`}>
                          <span className={current ? 'text-sandstone-300' : 'text-sandstone-500'}>·</span>{it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── YOUR DATA ─────────────────────────────────────────── */}
      <section className="section-py bg-charcoal-800" aria-label="Your data">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <RevealOnScroll>
              <div className="section-label text-sandstone-400">Your data</div>
              <h2 className="font-serif text-display-md text-white mb-5">
                Your home’s record{' '}
                <span className="text-sandstone-300">belongs to you.</span>
              </h2>
              <p className="text-warmgray-300 leading-relaxed mb-6">
                A Digital Twin holds a detailed picture of your home, so it is designed around
                privacy from the first release — under India’s Digital Personal Data Protection Act.
              </p>
              <Link href="/security" className="text-sandstone-300 font-semibold underline underline-offset-2 hover:text-sandstone-200">
                How HSI handles security →
              </Link>
            </RevealOnScroll>
            {/* [CONFIRM] Keep these statements in line with what is live — see SRS §8–9. */}
            <RevealOnScroll delay={0.08}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { Icon: Download,    title: 'Export at any time',       desc: 'The complete record — data, original documents, media and energy logs — in one download.' },
                  { Icon: UserCheck,   title: 'Consent per purpose',      desc: 'Reminders, sharing and marketing are each opted into separately, and can be withdrawn.' },
                  { Icon: MapPin,      title: 'Stored in India',          desc: 'Energy readings are stored in an Indian cloud region, like the rest of your record.' },
                  { Icon: EyeOff,      title: 'Private by default',       desc: 'Public QR views exclude costs, identity, address, interior photos and energy data.' },
                  { Icon: ShieldCheck, title: 'Controlled energy access', desc: 'You choose who sees energy data and alerts: owner, family, villa manager. Caretakers don’t see it by default.' },
                  { Icon: Activity,    title: 'Monitoring & alerts only', desc: 'Real-time observation and anomaly detection without remote appliance switching or control.' },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <Icon className="text-sandstone-300 mb-3" size={20} strokeWidth={1.5} />
                    <div className="text-sm font-semibold text-white mb-1">{title}</div>
                    <div className="text-sm text-warmgray-400 leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section-py bg-ivory-100" aria-label="Frequently asked questions">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-5">
                Questions owners{' '}
                <span className="text-sandstone-600">ask first.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed">
                The Digital Twin is part of{' '}
                <Link href="/hsi-os" className="text-sandstone-600 font-semibold hover:text-sandstone-700">HSIOS™</Link>,
                the platform behind every HSI project.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <FAQAccordion items={twinFaqs} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ──────────────────────────────────────── */}
      <section id="get-access" className="section-py bg-ivory-200 scroll-mt-16" aria-label="Enquire">
        {/* Second anchor so /digital-twin#walkthrough lands here and opens the HSI-client tab. */}
        <span id="walkthrough" className="block relative -top-16" aria-hidden="true" />
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label">Get started</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-5">
                Put your home{' '}
                <span className="text-sandstone-600">on record.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-6">
                HSI clients can book a walkthrough now. For other homes, join early access and we
                will contact you as onboarding opens in your area.
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

/* ── Illustrative mockups (replace with real Casa Frangipani captures after Phase 1) ── */

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
      <div className="text-center text-[11px] text-warmgray-400 mt-3">Illustrative view</div>
    </div>
  )
}
