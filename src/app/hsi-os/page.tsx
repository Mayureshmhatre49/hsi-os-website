import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Wallet, Camera, CheckCircle2, GitBranch, Archive, ImageIcon,
  Armchair, ShieldCheck, Wrench, Award, Users, Ruler,
  Zap, RefreshCcw, Leaf, TrendingDown,
} from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { JsonLd } from '@/lib/JsonLd'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { getAlternates, breadcrumb } from '@/lib/seo'
import { WHATSAPP_NUMBER } from '@/lib/contact'
import { faqs } from '@/content/hsios-faqs'

export const metadata: Metadata = {
  title: {
    absolute: 'Our Platform — HSIOS™ | Hestia Smart Interiors',
  },
  description:
    'HSIOS™ is HSI’s in-house execution platform — how every client stays in control of their villa interior: a live budget, a daily photo timeline, digital approvals, clash detection and a handover dossier.',
  alternates: getAlternates('/hsi-os'),
}

/* Client-facing SoftwareApplication schema — no internal engine detail. */
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HSIOS™',
  alternateName: 'Hestia Smart Interiors platform',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  url: 'https://www.hsios.in/hsi-os',
  description:
    'HSI’s in-house execution platform giving every client a live budget dashboard, a daily photo timeline, digital approvals, clash detection and a handover dossier.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Provided to Hestia Smart Interiors clients as part of their project engagement',
  },
  creator: { '@id': 'https://www.hsios.in/#business' },
  featureList: [
    'Live budget dashboard',
    'Daily photo timeline tied to the schedule',
    'Digital change approvals',
    'Clash detection before site work',
    'Handover dossier and ownership records',
  ],
}

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in/' },
  { name: 'Our Platform', url: 'https://www.hsios.in/hsi-os' },
])

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

/* 5 client benefits — each paired with a client-view screenshot (to supply). */
const benefits = [
  {
    Icon: Wallet,
    title: 'A live budget dashboard',
    desc: 'Every rupee spent and committed on your project, updated as it happens. Change orders are priced and approved before any money moves — so there are no surprise invoices at handover.',
    shot: 'Casa Frangipani — client budget view',
  },
  {
    Icon: Camera,
    title: 'A daily photo timeline',
    desc: 'A dated photo record of every day on site, tied to the schedule. You can see exactly what happened and when, without asking anyone for an update.',
    shot: 'Casa Frangipani — daily site timeline',
  },
  {
    Icon: CheckCircle2,
    title: 'Digital change approvals',
    desc: 'Approve materials and changes from wherever you are. Every approval is logged with a date and kept as a permanent record you can refer back to.',
    shot: 'Casa Frangipani — approval request',
  },
  {
    Icon: GitBranch,
    title: 'Clash detection before site work',
    desc: 'Drawings are reconciled across trades so conflicts — a plumbing line under a kitchen island, a duct through a beam — are caught on paper, before anyone starts cutting.',
    shot: 'Casa Frangipani — clash check summary',
  },
  {
    Icon: Archive,
    title: 'A handover dossier',
    desc: 'Every finish, installation and warranty date documented and handed to you as a permanent record of your home — the reference you’ll use for years after the last trade leaves.',
    shot: 'Casa Frangipani — handover dossier',
  },
]

export default function HSIOSPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, softwareSchema, faqSchema]} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative py-32 bg-charcoal-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sandstone-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10 max-w-3xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400">Our Platform</div>
            <h1 className="font-serif text-display-xl text-white leading-[1.08] mb-6">
              The system behind{' '}
              <span className="text-sandstone-300">every HSI project.</span>
            </h1>
            <p className="text-lg text-warmgray-300 leading-relaxed mb-8 max-w-2xl">
              HSIOS™ is HSI’s in-house execution platform. It’s how you stay in control of your
              villa interior — the live budget, the daily photo proof, the approvals and the
              records — whether you’re on site in Alibag or watching from Mumbai or abroad.
              {/* [CONFIRM] add "Every HSI client gets access at no extra cost." once Nishant confirms the wording. */}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-bronze">Book a Consultation</Link>
              <Link href="/how-it-works" className="btn btn-outline-white">See how we work</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── 5 CLIENT BENEFITS ─────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-14 lg:mb-20">
              <div className="section-label">How you stay in control</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                Five things you can see{' '}
                <span className="text-sandstone-600">at any time.</span>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed">
                No chasing WhatsApp updates. Everything that matters about your project, in one place.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-12 lg:space-y-20">
            {benefits.map(({ Icon, title, desc, shot }, i) => (
              <RevealOnScroll key={title}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sandstone-100 flex items-center justify-center mb-5">
                      <Icon className="text-sandstone-700" size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-serif text-display-sm text-charcoal-800 mb-4">{title}</h3>
                    <p className="text-warmgray-600 text-lg leading-relaxed">{desc}</p>
                  </div>

                  {/* Client-view screenshot placeholder — real image to be supplied (see §4 image pass). */}
                  <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-ivory-100 border border-ivory-300 flex flex-col items-center justify-center text-center p-6">
                    <ImageIcon className="text-sandstone-300 mb-3" size={36} strokeWidth={1.25} />
                    <div className="text-xs font-bold tracking-widest uppercase text-sandstone-500">Client view · screenshot to supply</div>
                    <div className="text-sm text-warmgray-500 mt-1">{shot}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL STANDARDS + PHILOSOPHY ─────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Global Standards */}
            <RevealOnScroll>
              <div className="section-label text-sandstone-400">Built to Global Standards</div>
              <h2 className="font-serif text-display-md text-white mb-6">
                Benchmarked beyond{' '}
                <span className="text-sandstone-300">local practice.</span>
              </h2>
              <p className="text-warmgray-300 leading-relaxed mb-8">
                HSIOS™ builds international best practice into every execution decision — so your
                home is benchmarked against global residential standards, not just local norms.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: Armchair,    label: 'Ergonomics',      desc: 'Human-centred space planning and sizing' },
                  { Icon: ShieldCheck, label: 'Safety',          desc: 'Structural, electrical and fire safety' },
                  { Icon: Wrench,      label: 'Maintainability', desc: 'Service access and longevity' },
                  { Icon: Award,       label: 'Finish Quality',  desc: 'Premium execution benchmarks' },
                  { Icon: Users,       label: 'Usability',       desc: 'Clearances and accessibility' },
                  { Icon: Ruler,       label: 'Workflow',        desc: 'Efficient kitchen and circulation flow' },
                ].map(({ Icon: StdIcon, label, desc }) => (
                  <div key={label} className="p-4 rounded-xl bg-white/5 border border-white/8">
                    <div className="w-7 h-7 flex items-center justify-center text-sandstone-400 mb-2">
                      <StdIcon size={16} strokeWidth={1.5} />
                    </div>
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
                Refuse. Reuse. Recycle.{' '}
                <span className="text-sandstone-300">Built into every decision.</span>
              </h2>
              <p className="text-warmgray-300 leading-relaxed mb-8">
                Sustainability isn’t a costly add-on. It’s built into planning — smarter choices and
                efficient layouts that reduce waste without a cost premium or a compromise on design.{' '}
                <Link href="/sustainability" className="text-sandstone-300 underline underline-offset-2 hover:text-sandstone-200">
                  How we approach sustainability →
                </Link>
              </p>
              <div className="space-y-3">
                {[
                  { word: 'Refuse',  PhilIcon: Zap,          desc: 'Wasteful materials and inefficient decisions — rejected before they enter the plan.' },
                  { word: 'Reuse',   PhilIcon: RefreshCcw,   desc: 'Salvageable materials and adaptable elements — retained and integrated.' },
                  { word: 'Recycle', PhilIcon: Leaf,         desc: 'Responsible material planning and waste reduction — tracked through every phase.' },
                  { word: 'Reduce',  PhilIcon: TrendingDown, desc: 'Lower-impact materials, better light and ventilation — a smaller footprint, greater long-term value.' },
                ].map(({ word, PhilIcon, desc }) => (
                  <div key={word} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/8">
                    <div className="w-9 h-9 rounded-lg bg-sandstone-400/20 flex items-center justify-center text-sandstone-300 flex-shrink-0">
                      <PhilIcon size={16} strokeWidth={1.5} />
                    </div>
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

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-5">
                Everything you{' '}
                need to <span className="text-sandstone-600">know.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-8">
                Before starting your project, we answer the questions every owner and developer asks.
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

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="section-py bg-charcoal-800 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <h2 className="font-serif text-display-md text-white mb-6">
              See it with your own project.
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-10">
              Book a consultation and we’ll walk you through exactly how you’ll track your villa
              interior in HSIOS™ — in person, or over video if you’re building from another city or abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-bronze">Book a Consultation</Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20HSI%2C%20I%27d%20like%20to%20see%20how%20HSIOS%20works%20for%20my%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                WhatsApp Us
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
