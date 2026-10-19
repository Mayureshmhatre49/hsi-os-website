import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClientStrip } from '@/components/ui/ClientSpotlight'
import {
  Building2, LayoutGrid, Hammer, Frame, Zap, Droplets, Wind, Layers, Brush, Cpu,
  Camera, Wallet, CheckCircle2, MapPin, ArrowRight,
} from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import MarqueeTicker from '@/components/ui/MarqueeTicker'
import { JsonLd } from '@/lib/JsonLd'
import { getAlternates } from '@/lib/seo'
import { FACTS } from '@/content/facts'
import { WHATSAPP_NUMBER } from '@/lib/contact'
import { verifiedTestimonials } from '@/content/testimonials'

/* ── SEO metadata (services-first, Alibag-led) ─────────────── */
export const metadata: Metadata = {
  title: {
    absolute: 'Luxury Villa Interiors in Alibag | Hestia Smart Interiors',
  },
  description:
    'Turnkey luxury villa interior execution in Alibag and the Konkan coast. Live budget, daily photo proof and digital approvals, built for Mumbai and NRI owners.',
  alternates: getAlternates('/'),
  openGraph: {
    type: 'website',
    url: 'https://www.hsios.in',
    siteName: 'Hestia Smart Interiors',
    title: 'Luxury Villa Interiors in Alibag — Turnkey Execution',
    description:
      'Turnkey luxury villa interior execution in Alibag and the Konkan coast — live budget, daily photo proof and digital approvals for Mumbai and NRI owners.',
    images: [{ url: '/projects-casa-frangipani-1.jpg', width: 1200, height: 630, alt: 'Casa Frangipani villa interior, Alibag — Hestia Smart Interiors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Villa Interiors in Alibag — Turnkey Execution',
    description: 'Turnkey villa interior execution in Alibag — live budget, daily photo proof and digital approvals for Mumbai and NRI owners.',
    images: ['/projects-casa-frangipani-1.jpg'],
  },
}

/* ── Verified testimonials only (src/content/testimonials.ts) ── */
const testimonials = verifiedTestimonials()

const reviewSchemas = testimonials.map((t) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@id': 'https://www.hsios.in/#business' },
  author: { '@type': 'Person', name: t.name, jobTitle: t.role },
  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
  reviewBody: t.quote,
  publisher: { '@id': 'https://www.hsios.in/#organization' },
}))

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: { '@id': 'https://www.hsios.in/#business' },
  ratingValue: '5.0',
  bestRating: '5',
  worstRating: '1',
  ratingCount: testimonials.length.toString(),
  reviewCount: testimonials.length.toString(),
}

/* Only emit review structured data when there are verified reviews to show. */
const reviewJsonLd = testimonials.length > 0 ? [...reviewSchemas, aggregateRatingSchema] : []

export default function HomePage() {
  return (
    <>
      {reviewJsonLd.length > 0 && <JsonLd data={reviewJsonLd} />}
      <HeroSection />
      <ProofBar />
      <ClientStrip />
      <MarqueeTicker />
      <NriStoryBand />
      <WhatWeExecute />
      <FeaturedProjects />
      <HowWeWork />
      <Testimonials />
      <InvestmentTeaser />
      <FinalCTASection />
    </>
  )
}

/* ── 1. HERO ─────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative flex items-end min-h-[100svh] overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Image
          src="/projects-casa-frangipani-1.jpg"
          alt="Casa Frangipani — luxury villa interior by Hestia Smart Interiors, Alibag"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-800/50 to-charcoal-900/15" />
        <div className="absolute inset-0 bg-bronze-800/8" />
      </div>

      <div className="relative z-10 container-luxury pb-24 lg:pb-20 pt-40 sm:pt-48 lg:pt-56 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <div className="w-7 h-px bg-sandstone-400 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-sandstone-300 leading-snug">
              Luxury Villa Interiors · Alibag
            </span>
          </div>

          <h1 className="font-serif text-display-xl text-white leading-[1.05] mb-5 animate-fade-up [animation-delay:100ms]">
            Luxury villa interiors, delivered exactly as designed.
          </h1>

          <p className="text-lg text-white/85 font-sans leading-relaxed max-w-xl mb-3 animate-fade-up [animation-delay:220ms] border-l-2 border-sandstone-400 pl-4">
            Complete interior execution for villas and second homes. Every rupee, decision and
            site day is visible to you — even from Mumbai or abroad.
          </p>

          <p className="text-sm text-sandstone-400/80 font-sans mb-10 pl-4 animate-fade-up [animation-delay:260ms] leading-relaxed">
            <Link href="/alibag-villa-interiors" className="hover:text-sandstone-300 underline-offset-4 hover:underline">Alibag</Link>
            {' · Konkan Coast · '}
            <Link href="/mumbai-luxury-interiors" className="hover:text-sandstone-300 underline-offset-4 hover:underline">Mumbai owners</Link>
            {' · '}
            <Link href="/nri-home-interior-management" className="hover:text-sandstone-300 underline-offset-4 hover:underline">NRI projects</Link>
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:320ms]">
            <Link href="/contact" className="btn btn-bronze text-base px-8 py-4">
              Book a Consultation
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20HSI%2C%20I%27d%20like%20to%20discuss%20my%20villa%20interior%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white text-base px-8 py-4"
            >
              WhatsApp Us
            </a>
            <Link href="/projects" className="text-sm font-semibold text-sandstone-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              See Our Projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 2. PROOF BAR ────────────────────────────────────────── */
function ProofBar() {
  const items = [
    { value: `${FACTS.villasDelivered}`, label: 'Luxury villas delivered' },
    { value: `${FACTS.conflictsCaughtPreExecution}`, label: 'Clashes caught before site work' },
    { value: FACTS.budgetClaimStat.value, label: FACTS.budgetClaimStat.label },
    { value: 'Alibag', label: 'Based on the Konkan coast' },
  ]
  return (
    <section className="bg-charcoal-800 py-10" aria-label="Proof points">
      <div className="container-luxury grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {items.map(({ value, label }) => (
          <div key={label}>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-sandstone-300 mb-1">{value}</div>
            <div className="text-xs font-medium text-white/75 tracking-wide uppercase leading-snug">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── 3. NRI / MUMBAI-OWNER STORY BAND ────────────────────── */
const nriBenefits = [
  { icon: Camera, title: 'Daily photo proof', desc: 'A dated photo record of every day on site, tied to your schedule.' },
  { icon: Wallet, title: 'Live budget', desc: 'Every rupee spent and committed, visible the moment it happens.' },
  { icon: CheckCircle2, title: 'Digital approvals', desc: 'Approve materials and changes from anywhere — each one on permanent record.' },
]

function NriStoryBand() {
  return (
    <section className="section-py bg-ivory-100" aria-label="Build without living on site">
      <div className="container-luxury grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <RevealOnScroll>
          <div className="section-label">For Mumbai &amp; NRI owners</div>
          <h2 className="font-serif text-display-lg text-charcoal-800 mb-5">
            Build your villa{' '}
            <span className="text-sandstone-600">without living on site.</span>
          </h2>
          <p className="text-warmgray-600 text-lg leading-relaxed mb-8">
            You don&rsquo;t have to be in Alibag to know exactly what&rsquo;s happening on your
            project. HSIOS™, our in-house platform, gives you the same visibility whether you&rsquo;re
            in Mumbai, the Gulf or the US.
          </p>
          <div className="space-y-4 mb-8">
            {nriBenefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-sandstone-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-sandstone-700" size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-semibold text-charcoal-800">{title}</div>
                  <div className="text-sm text-warmgray-600 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/nri-home-interior-management" className="btn btn-outline-dark">
            How we work with NRI owners
          </Link>
          <p className="mt-5 text-sm text-warmgray-600">
            Living in Mumbai?{' '}
            <Link href="/insights/alibag-second-home-from-mumbai" className="font-semibold text-sandstone-600 underline underline-offset-2 hover:text-sandstone-700">
              Read our guide to building an Alibag second home from Mumbai
            </Link>
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-luxury">
            <Image
              src="/hestia-villa-poolside-alibag.webp"
              alt="Poolside dining at a Hestia villa, Alibag — a project tracked remotely in HSIOS™"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 4. WHAT WE EXECUTE — compact discipline grid ────────── */
const disciplines = [
  { icon: Building2,    label: 'Civil & Structural' },
  { icon: LayoutGrid,   label: 'Flooring & Surfaces' },
  { icon: Hammer,       label: 'Bespoke Joinery' },
  { icon: Frame,        label: 'Metal & Glass' },
  { icon: Zap,          label: 'Electrical & Smart' },
  { icon: Droplets,     label: 'Plumbing & Baths' },
  { icon: Wind,         label: 'HVAC & Mechanical' },
  { icon: Layers,       label: 'Ceiling & Drywall' },
  { icon: Brush,        label: 'Surface Finishing' },
  { icon: Cpu,          label: 'Smart Villa Integration' },
]

function WhatWeExecute() {
  return (
    <section className="section-py bg-white" aria-label="What we execute">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-2xl mb-10 lg:mb-14">
            <div className="section-label">What we execute</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              Ten disciplines.{' '}
              <span className="text-sandstone-600">One accountable team.</span>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              Every trade in your interior — coordinated, sequenced and quality-checked through HSIOS™.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {disciplines.map(({ icon: Icon, label }, i) => (
            <RevealOnScroll key={label} delay={i * 0.04}>
              <div className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-ivory-50 border border-ivory-200 h-full">
                <div className="w-11 h-11 rounded-xl bg-sandstone-100 flex items-center justify-center">
                  <Icon className="text-sandstone-700" size={20} strokeWidth={1.75} />
                </div>
                <span className="text-sm font-semibold text-charcoal-800 leading-snug">{label}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-sandstone-700 hover:text-sandstone-800 transition-colors">
              See all services <ArrowRight size={16} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 5. FEATURED PROJECTS ────────────────────────────────── */
const secondaryProjects = [
  { name: 'Serenity Villa',   image: '/hestia-serenity-villa.jpg',   scope: 'Complete interior · Alibag' },
  { name: 'Villa Bellissimo', image: '/hestia-villa-bellissimo.jpg', scope: 'Complete interior · Alibag' },
  { name: 'Villa Awas',       image: '/hestia-villa-awas.jpg',       scope: 'Two homes merged · Alibag' },
]

function FeaturedProjects() {
  return (
    <section className="section-py bg-ivory-100" aria-label="Featured projects">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-xl mb-10 lg:mb-14">
            <div className="section-label">Featured Projects</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Delivered on the{' '}
              <span className="text-sandstone-600">Konkan coast.</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Casa Frangipani — large */}
        <RevealOnScroll>
          <Link href="/projects/casa-frangipani" className="group grid lg:grid-cols-5 gap-6 lg:gap-8 items-center mb-8">
            <div className="lg:col-span-3 relative rounded-3xl overflow-hidden aspect-[16/9]">
              <Image
                src="/projects-casa-frangipani-1.jpg"
                alt="Casa Frangipani living room, Alibag — Hestia Smart Interiors"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-2">
              <div className="badge-warm mb-5">Alibag · 6 Bedrooms</div>
              <h3 className="font-serif text-display-sm text-charcoal-800 mb-4 group-hover:text-sandstone-700 transition-colors">
                Casa Frangipani
              </h3>
              <p className="text-warmgray-600 leading-relaxed mb-6">
                A 6-bedroom villa executed as a complete end-to-end interior — from design
                coordination and clash detection through documented, snag-free handover.
                {' '}<strong className="text-charcoal-800">12 conflicts</strong> caught before site work began.
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-sandstone-700 group-hover:gap-3 transition-all">
                View full project <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </RevealOnScroll>

        {/* 3 secondary cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {secondaryProjects.map(({ name, image, scope }, i) => (
            <RevealOnScroll key={name} delay={i * 0.08}>
              <Link href="/projects" className="group block">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                  <Image
                    src={image}
                    alt={`${name} interior, Alibag — Hestia Smart Interiors`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal-800 group-hover:text-sandstone-700 transition-colors">{name}</h3>
                <p className="text-sm text-warmgray-500">{scope}</p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="mt-10">
            <Link href="/projects" className="btn btn-dark">See all projects</Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 6. HOW WE WORK — four moments ───────────────────────── */
const workflowSteps = [
  { step: 'Clarity before commitment', desc: 'A full bill of quantities, clash detection and locked material specs before a single trade quote is accepted — all tracked in HSIOS™, our in-house platform.' },
  { step: 'Your design survives the site', desc: 'Every decision is measured against the approved drawings, and trades are sequenced so the build matches the design — not a site-adapted compromise.' },
  { step: 'Every rupee is visible', desc: 'A live budget dashboard and approved change orders in HSIOS™. No surprise invoices — you know what it costs before it happens.' },
  { step: 'Documented, snag-free handover', desc: 'Every snag closed and signed off before keys change hands — with full documentation, warranties and AMC, and records that stay with your home.' },
]

function HowWeWork() {
  return (
    <section className="section-py bg-charcoal-900 relative overflow-hidden" aria-label="How we work">
      <div className="absolute inset-0 bg-gradient-to-br from-sandstone-900/15 to-transparent pointer-events-none" />
      <div className="container-luxury relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl mb-10 lg:mb-16">
            <div className="section-label text-sandstone-400">How we work</div>
            <h2 className="font-serif text-display-lg text-white mb-4">
              Four moments that{' '}
              <em className="not-italic text-sandstone-300">define every project.</em>
            </h2>
            <p className="text-warmgray-400 text-lg leading-relaxed">
              Four concrete outcomes that separate a project that delivers from one that disappoints.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-sandstone-600/20 via-sandstone-500/40 to-sandstone-600/20 pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map(({ step, desc }, i) => (
              <RevealOnScroll key={step} delay={i * 0.07}>
                <div className="relative flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sandstone-500/30 hover:bg-white/8 transition-all duration-300 h-full">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sandstone-400/15 border border-sandstone-400/25 flex items-center justify-center">
                    <span className="font-serif font-bold text-sandstone-300 text-xs">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif font-bold text-white text-sm mb-1.5 leading-snug">{step}</h3>
                    <p className="text-warmgray-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="mt-12">
            <Link href="/how-it-works" className="btn btn-bronze">See the full process →</Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 7. TESTIMONIALS — verified only ─────────────────────── */
function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <section className="section-py bg-ivory-200" aria-label="Testimonials">
      <div className="container-luxury">
        <RevealOnScroll>
          <div className="max-w-xl mb-10 lg:mb-16">
            <div className="section-label">Client Voices</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              What our clients{' '}
              <em className="not-italic text-sandstone-600">actually say.</em>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, location, initials }, i) => (
            <RevealOnScroll key={name} delay={i * 0.08}>
              <div className="card-luxury p-8 flex flex-col h-full bg-white">
                <div className="font-serif text-5xl text-sandstone-300 leading-none mb-4">&ldquo;</div>
                <p className="text-warmgray-700 leading-relaxed text-sm flex-1 mb-8 italic">{quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-sandstone-100 flex items-center justify-center font-serif font-bold text-sandstone-700 text-sm flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-800 text-sm">{name}</div>
                    <div className="text-xs text-warmgray-500 mt-0.5">{location ? `${role} · ${location}` : role}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 8. INVESTMENT TEASER ────────────────────────────────── */
function InvestmentTeaser() {
  return (
    <section className="section-py bg-white" aria-label="Investment">
      <div className="container-luxury max-w-3xl text-center">
        <RevealOnScroll>
          <div className="section-label mx-auto">Investment</div>
          <h2 className="font-serif text-display-md text-charcoal-800 mb-4">
            A typical 4,000 sq ft Alibag villa:{' '}
            <span className="text-sandstone-600">{FACTS.typicalVillaInvestment}</span>
          </h2>
          <p className="text-warmgray-600 text-lg leading-relaxed mb-8">
            What drives the number — size, finish grade and site conditions — and how we keep it
            transparent from the first estimate to handover.
          </p>
          <Link href="/pricing" className="btn btn-outline-dark">See how pricing works</Link>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ── 9. FINAL CTA ────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1C1C1E 0%, #3A3530 50%, #1C1C1E 100%)' }}
      aria-label="Book consultation"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-sandstone-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative z-10 text-center">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-sandstone-400/50" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-sandstone-400">
                Currently accepting new projects
              </span>
              <div className="w-12 h-px bg-sandstone-400/50" />
            </div>

            <h2 className="font-serif text-display-xl text-white mb-6">
              The home you envisioned.<br />
              Delivered exactly as designed.
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed mb-10">
              Book a consultation to walk through your drawings, timeline and budget — in person,
              or over video if you&rsquo;re building from another city or abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-bronze text-base px-8 py-4">Book a Consultation</Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20HSI%2C%20I%27d%20like%20to%20discuss%20my%20villa%20interior%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white text-base px-8 py-4"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 text-sm text-warmgray-400">
              <MapPin size={14} className="text-sandstone-400" />
              {FACTS.serviceArea}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
