import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Layers, Rotate3d, ScanText, QrCode, BellRing, Siren,
  FileSearch, PhoneCall, CalendarX2,
  Home, HardHat, Building2, Briefcase,
  Download, UserCheck, MapPin, EyeOff, Check, X,
} from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import FAQAccordion from '@/components/ui/FAQAccordion'
import DigitalTwinForm from '@/components/ui/DigitalTwinForm'
import { JsonLd } from '@/lib/JsonLd'
import { getAlternates, breadcrumb, OG_IMAGE } from '@/lib/seo'
import { twinFaqs } from '@/content/digital-twin'

export const metadata: Metadata = {
  title: {
    absolute: 'HSIOS™ Digital Twin — A Verified Record of Your Home | HSI',
  },
  description:
    'Every appliance, warranty, AMC and repair contact in your villa on one verified record — 360° walkthrough, QR labels and WhatsApp reminders. Early access.',
  alternates: getAlternates('/digital-twin'),
  openGraph: {
    title: 'HSIOS™ Digital Twin — A Verified Record of Your Home',
    description:
      'Every asset in your villa, on record and one scan away. 360° walkthrough, AI-read invoices, caretaker QR labels and WhatsApp reminders.',
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
    'A verified digital record of a home: room-by-room asset register, 360° walkthrough with pinned assets, AI extraction of invoices and warranty cards, no-app QR labels for caretakers and WhatsApp warranty and AMC reminders.',
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
    title: 'Invoices read for you',
    desc: 'Photograph or forward an invoice, warranty card or AMC contract. AI extracts the brand, model, dates and vendor; you confirm before anything is saved. The original is kept.',
  },
  {
    Icon: QrCode,
    title: 'QR labels for caretakers',
    desc: 'A weather-resistant label on every asset. Any phone camera opens its care steps and repair contact — no app, no login — in English, Hindi or Marathi.',
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
    phase: 'Phase 1', name: 'Home Ledger', status: 'In pilot',
    items: ['Asset register and emergency points', '360° walkthrough with pins', 'AI invoice and warranty reading', 'Caretaker QR labels', 'WhatsApp reminders'],
  },
  {
    phase: 'Phase 2', name: 'Service & Safety', status: 'Next',
    items: ['Caretaker tickets from a QR scan, with photo and voice note', 'Vendor dispatch and repair history', 'Water-leak detection with automatic shut-off', 'Per-appliance energy use in rupees'],
  },
  {
    phase: 'Phase 3', name: 'Marketplace', status: 'Planned',
    items: ['AMC renewals and repair bookings with vetted vendors', 'Energy-efficient replacements with real payback figures', 'Measured 3D layer of the home'],
  },
  {
    phase: 'Phase 4', name: 'Scale', status: 'Planned',
    items: ['Self-onboarding with a phone scan', 'Developer handover portal', 'Transferable home passport on sale'],
  },
]

const scanShows = ['Item name and room', 'Care steps and troubleshooting', 'Repair contact', 'Warranty and AMC status']
const scanHides = ['Invoice values', 'The owner’s identity', 'The home’s full address', 'Photos of the interior']

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
                HSIOS™ Digital Twin.{' '}
                <span className="text-sandstone-300">Every asset in your home, on record.</span>
              </h1>
              <p className="text-lg text-warmgray-300 leading-relaxed mb-8 max-w-2xl">
                A verified record of your villa — every appliance, warranty, AMC and repair contact,
                pinned inside a 360° walkthrough and one QR scan away for your caretaker. Built for
                homes you don’t live in every day.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="#get-access" className="btn btn-bronze">Join Early Access</a>
                <a href="#walkthrough" className="btn btn-outline-white">Book a Walkthrough</a>
              </div>
              <p className="text-sm text-warmgray-400">
                Walkthroughs are for HSI clients. Piloting first on{' '}
                <Link href="/projects/casa-frangipani" className="text-sandstone-300 underline underline-offset-2 hover:text-sandstone-200">
                  Casa Frangipani, Alibag
                </Link>.
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
          <div className="grid md:grid-cols-3 gap-5">
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
                Owners and managers who are signed in see the full record from the same label.
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
                <p className="text-warmgray-300 leading-relaxed mb-8 flex-1">
                  HSIOS™ already records your BOQ, vendors and handover dossier during execution. Your
                  Digital Twin is built from that record, so it is complete on the day you receive
                  the keys — with no separate data entry.
                </p>
                <a href="#walkthrough" className="btn btn-bronze self-start">Book a Walkthrough</a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="h-full p-8 md:p-10 rounded-3xl bg-ivory-100 border border-ivory-300 flex flex-col">
                <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-sandstone-600 mb-4">For any villa or second home</div>
                <h3 className="font-serif text-display-sm text-charcoal-800 mb-4">Onboarded by our team</h3>
                <p className="text-warmgray-600 leading-relaxed mb-8 flex-1">
                  Our onboarding team visits the home, captures the 360° walkthrough, registers and
                  labels each asset and reads your existing invoices and warranty cards. Standalone
                  homes are opening in stages.
                </p>
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
                  { Icon: Download,  title: 'Export at any time',   desc: 'The complete record — data, original documents and media — in one download.' },
                  { Icon: UserCheck, title: 'Consent per purpose',  desc: 'Reminders, sharing and marketing are each opted into separately, and can be withdrawn.' },
                  { Icon: MapPin,    title: 'Stored in India',      desc: 'Indian homes’ data is held in an Indian cloud region.' },
                  { Icon: EyeOff,    title: 'Private by default',   desc: 'Public QR views exclude costs, identity, address and interior photos.' },
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
      </div>
      <div className="text-center text-[11px] text-warmgray-400 mt-3">Illustrative view</div>
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
