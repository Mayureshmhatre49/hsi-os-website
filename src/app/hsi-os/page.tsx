import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Wallet, Camera, CheckCircle2, GitBranch, Archive,
  Armchair, ShieldCheck, Wrench, Award, Users, Ruler,
  Zap, RefreshCcw, Leaf, TrendingDown,
  FolderOpen, ClipboardList, HardHat, Home, PenTool, UserCheck,
  ArrowRight, ArrowUpRight,
} from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { JsonLd } from '@/lib/JsonLd'
import FAQAccordion from '@/components/ui/FAQAccordion'
import PlatformPreview from '@/components/ui/PlatformPreview'
import ClientViewMockup, { type ClientViewKey } from '@/components/ui/ClientViewMockups'
import EngagementModels from '@/components/ui/EngagementModels'
import { getAlternates, breadcrumb } from '@/lib/seo'
import { WHATSAPP_NUMBER } from '@/lib/contact'
import { faqs } from '@/content/hsios-faqs'

export const metadata: Metadata = {
  title: {
    absolute: 'HSIOS™ Platform — How It Works | Hestia Smart Interiors',
  },
  description:
    'How HSIOS™ runs a build from brief to handover: BOQ and budget, clash detection, daily photo proof, digital approvals, milestone QA and a permanent handover dossier.',
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
    'HSI’s execution platform giving every client a live budget dashboard, a daily photo timeline, digital approvals, clash detection and a handover dossier.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Provided to Hestia Smart Interiors clients as part of their project engagement',
  },
  creator: { '@id': 'https://www.hsios.in/#business' },
  featureList: [
    'Line-by-line BOQ and budget baseline',
    'Clash detection before site work',
    'Daily photo timeline tied to the schedule',
    'Digital change approvals',
    'Milestone quality checkpoints',
    'Handover dossier and ownership records',
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How HSIOS™ runs a project from brief to handover',
  step: [] as { '@type': 'HowToStep'; position: number; name: string; text: string }[],
}

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in/' },
  { name: 'HSIOS™ Platform', url: 'https://www.hsios.in/hsi-os' },
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

/* ── How it works: the six stages every project moves through in HSIOS™ ── */
const stages: { Icon: typeof Wallet; title: string; desc: string; see: string }[] = [
  {
    Icon: FolderOpen,
    title: 'Set up the project record',
    desc: 'Drawings, scope, site details and every stakeholder are loaded into one project. From this point, nothing about your build lives in a WhatsApp thread or someone’s notebook.',
    see: 'One shared project record with the latest drawing set',
  },
  {
    Icon: ClipboardList,
    title: 'Plan, quantify and budget',
    desc: 'The BOQ is built line by line and the budget is baselined against it. Work is sequenced across trades into a schedule with clear milestones.',
    see: 'Your baseline budget and milestone schedule',
  },
  {
    Icon: GitBranch,
    title: 'Coordinate before site work',
    desc: 'Drawings are reconciled across civil, MEP, joinery and finishes. Conflicts — a drain line under an island, a duct through a beam — are resolved on paper, not on site.',
    see: 'A clash summary and how each one was resolved',
  },
  {
    Icon: Camera,
    title: 'Execute with daily proof',
    desc: 'Site teams log progress every day with dated photos against the schedule. Costs update as money is committed, not when the invoice arrives.',
    see: 'A daily photo timeline and live spend vs budget',
  },
  {
    Icon: CheckCircle2,
    title: 'Approve changes, verify milestones',
    desc: 'Every change is priced and sent for your approval before work starts. Each milestone passes its quality checkpoints before the next stage begins.',
    see: 'Approval requests and milestone QA sign-offs',
  },
  {
    Icon: Archive,
    title: 'Hand over the complete record',
    desc: 'Every finish, installation, warranty and vendor is documented in a handover dossier — the reference for your home long after the last trade leaves.',
    see: 'Your handover dossier and HSIOS™ Digital Twin',
  },
]

howToSchema.step = stages.map((s, i) => ({
  '@type': 'HowToStep',
  position: i + 1,
  name: s.title,
  text: s.desc,
}))

/* ── Who is connected in HSIOS™ ── */
const roles: { Icon: typeof Wallet; who: string; does: string }[] = [
  { Icon: Home,      who: 'Owners',                  does: 'See spend, progress and photos at any time. Approve changes from anywhere — Mumbai, Alibag or abroad.' },
  { Icon: PenTool,   who: 'Architects & designers',  does: 'Share drawings once, track design intent through execution and sign off on deviations before they are built.' },
  { Icon: HardHat,   who: 'Site & partner teams',    does: 'Work from the latest drawings, log daily progress and close QA checkpoints against each milestone.' },
  { Icon: UserCheck, who: 'HSI project lead',        does: 'Sequences trades, manages procurement and holds single-point accountability for the build.' },
]

/* ── What you see at any time (client view) ── */
const benefits: {
  Icon: typeof Wallet
  title: string
  desc: string
  shot: string
  view: ClientViewKey
  link?: { href: string; label: string }
}[] = [
  {
    Icon: Wallet,
    title: 'A live budget dashboard',
    desc: 'Every rupee spent and committed on your project, updated as it happens. Change orders are priced and approved before any money moves — so there are no surprise invoices at handover.',
    shot: 'Client budget view',
    view: 'budget',
  },
  {
    Icon: Camera,
    title: 'A daily photo timeline',
    desc: 'A dated photo record of every day on site, tied to the schedule. You can see exactly what happened and when, without asking anyone for an update.',
    shot: 'Daily site timeline',
    view: 'timeline',
  },
  {
    Icon: CheckCircle2,
    title: 'Digital change approvals',
    desc: 'Approve materials and changes from wherever you are. Every approval is logged with a date and kept as a permanent record you can refer back to.',
    shot: 'Approval request',
    view: 'approval',
  },
  {
    Icon: GitBranch,
    title: 'Clash detection before site work',
    desc: 'Drawings are reconciled across trades so conflicts are caught on paper, before anyone starts cutting.',
    shot: 'Clash check summary',
    view: 'clash',
  },
  {
    Icon: Archive,
    title: 'A handover dossier',
    desc: 'Every finish, installation and warranty date documented and handed to you as a permanent record of your home.',
    shot: 'Handover dossier',
    view: 'dossier',
    link: { href: '/digital-twin', label: 'It becomes your home’s HSIOS™ Digital Twin →' },
  },
]

export default function HSIOSPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, softwareSchema, howToSchema, faqSchema]} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative py-32 bg-charcoal-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sandstone-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10 max-w-3xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400">The HSIOS™ Platform</div>
            <h1 className="font-serif text-display-xl text-white leading-[1.08] mb-6">
              The operating system behind{' '}
              <span className="text-sandstone-300">every HSI build.</span>
            </h1>
            <p className="text-lg text-warmgray-300 leading-relaxed mb-8 max-w-2xl">
              HSIOS™ is HSI’s execution platform. It runs every project from brief to handover —
              the budget, the drawings, the daily site proof, the approvals and the records — so you
              stay in control whether you’re on site in Alibag or watching from Mumbai or abroad.
              {/* [CONFIRM] add "Every HSI client gets access at no extra cost." once Nishant confirms the wording. */}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/demo" className="btn btn-bronze">Request a Demo</Link>
              <a href="#how-it-works" className="btn btn-outline-white">See how it works</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── THE GAP ───────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-ivory-100 border-b border-ivory-300">
        <div className="container-luxury max-w-4xl text-center">
          <RevealOnScroll>
            <p className="font-serif text-display-sm text-charcoal-800 leading-snug">
              Most projects fail not in design but in the gap between what was drawn and what was
              built. <span className="text-sandstone-600">That gap is exactly where HSIOS™ operates.</span>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section id="how-it-works" className="section-py bg-white scroll-mt-24">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-14 lg:mb-20">
              <div className="section-label">How It Works</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                Six stages, one record,{' '}
                <span className="text-sandstone-600">brief to handover.</span>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed">
                Every HSI project moves through the same stages inside HSIOS™. Each stage leaves
                a documented trail you can open at any time.
              </p>
            </div>
          </RevealOnScroll>

          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stages.map(({ Icon, title, desc, see }, i) => (
              <li key={title}>
              <RevealOnScroll delay={(i % 3) * 0.06} className="h-full">
                <div className="card-warm h-full p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sandstone-100 flex items-center justify-center">
                      <Icon className="text-sandstone-700" size={22} strokeWidth={1.75} />
                    </div>
                    <span className="font-serif text-3xl font-bold text-sandstone-300" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3">
                    <span className="sr-only">Stage {i + 1}: </span>{title}
                  </h3>
                  <p className="text-warmgray-600 leading-relaxed mb-6 flex-1">{desc}</p>
                  <div className="pt-4 border-t border-ivory-300">
                    <div className="text-[11px] font-bold tracking-widest uppercase text-sandstone-600 mb-1">
                      What you see
                    </div>
                    <div className="text-sm text-charcoal-700">{see}</div>
                  </div>
                </div>
              </RevealOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── PLATFORM PREVIEW ──────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <div className="section-label">Inside the Platform</div>
                <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                  One view of the{' '}
                  <span className="text-sandstone-600">whole build.</span>
                </h2>
                <p className="text-warmgray-600 text-lg leading-relaxed">
                  A preview of the dashboards HSI’s team and clients work from every day.
                </p>
              </div>
              <a
                href="https://os.hsios.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sandstone-600 font-semibold hover:text-sandstone-700 transition-colors"
              >
                Open HSIOS™ <ArrowUpRight size={16} />
              </a>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <PlatformPreview />
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
            {benefits.map(({ Icon, title, desc, view, link }, i) => (
              <RevealOnScroll key={title}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sandstone-100 flex items-center justify-center mb-5">
                      <Icon className="text-sandstone-700" size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-serif text-display-sm text-charcoal-800 mb-4">{title}</h3>
                    <p className="text-warmgray-600 text-lg leading-relaxed">{desc}</p>
                    {link && (
                      <Link href={link.href} className="inline-block mt-5 text-sandstone-600 font-semibold hover:text-sandstone-700 transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </div>

                  {/* Illustrative client-view mockup. Swap for a real os.hsios.in screenshot of `shot` when available. */}
                  <div
                    className="relative rounded-3xl overflow-hidden flex min-h-[16rem] sm:min-h-[20rem] bg-gradient-to-br from-ivory-100 via-sandstone-50 to-sandstone-100 border border-ivory-300 p-3 sm:p-6 lg:p-8"
                    aria-hidden="true"
                  >
                    <ClientViewMockup view={view} />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS CONNECTED ──────────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl mb-12">
              <div className="section-label text-sandstone-400">One Connected Team</div>
              <h2 className="font-serif text-display-md text-white mb-4">
                Everyone works from{' '}
                <span className="text-sandstone-300">the same record.</span>
              </h2>
              <p className="text-warmgray-300 leading-relaxed">
                Each stakeholder sees what they need, and every decision they make is logged against
                the project — so accountability never depends on memory.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map(({ Icon, who, does }, i) => (
              <RevealOnScroll key={who} delay={i * 0.05}>
                <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-sandstone-400/20 flex items-center justify-center text-sandstone-300 mb-4">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">{who}</h3>
                  <p className="text-sm text-warmgray-400 leading-relaxed">{does}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ─────────────────────────────────── */}
      <EngagementModels eyebrow="Two Ways to Use HSIOS™" />

      {/* ── GLOBAL STANDARDS + PHILOSOPHY ─────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

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
              We’ll walk you through exactly how your build would run in HSIOS™ — in person, or
              over video if you’re building from another city or abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/demo" className="btn btn-bronze inline-flex items-center gap-2">
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline-white">Book a Private Consultation</Link>
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
