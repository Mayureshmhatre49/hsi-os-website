import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Target, Eye, Building2, Settings, Users, Leaf } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'

export const metadata: Metadata = {
  title: 'About Hestia Smart Interiors — Leadership Team, Vision & Values',
  description:
    'Meet the leadership team behind Hestia Smart Interiors — Nishant Mhatre (Founder & CEO), Sanjay Joshi (Co-founder & CTO), and Vishal Patil (COO) — and the vision behind HSIOS™.',
  alternates: getAlternates('/about'),
}

const values = [
  { Icon: Target,    title: 'Precision First',         desc: 'Interior execution demands precision at every step. We built HSIOS™ to eliminate guesswork entirely.' },
  { Icon: Eye,       title: 'Radical Transparency',    desc: 'Homeowners and developers deserve to know exactly where their project stands — always.' },
  { Icon: Building2, title: 'Ground-Level Experience', desc: 'HSIOS™ is built on real learnings from premium villa projects. Not theory — practice.' },
  { Icon: Settings,  title: 'Systems Thinking',        desc: 'Interior projects are complex systems. We treat them that way — with structured workflows and data.' },
  { Icon: Users,     title: 'Partnership Mindset',     desc: 'We work alongside homeowners, developers and vendors — not above them. Success is shared.' },
  { Icon: Leaf,      title: 'Responsible Luxury',      desc: 'Premium outcomes should not come at the cost of the environment. Sustainability is built into every project.' },
]

const nishantFocus = [
  'Investment-ready luxury villa communities powered by clean energy',
  'AI-driven digital transformation advisory',
  'Mentoring early-stage startups on growth & investor readiness',
  'Bridging real estate, technology and AI at scale',
]

const sanjayFocus = [
  'Technology Roadmap & Platform Strategy',
  'Data-driven Execution Systems',
  'Enterprise Architecture & Consulting',
  'Corporate Training & Change Management',
]

const vishalFocus = [
  'Site Execution & Quality Control',
  'Contractor & Vendor Coordination',
  'Statutory Compliance & Safety',
  'Execution Risk Management',
]

const nishantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nishant Mhatre',
  jobTitle: 'Founder & CEO',
  worksFor: { '@id': 'https://www.hsios.in/#business' },
  image: 'https://www.hsios.in/nishant-mhatre.jpg',
  description:
    'Founder & CEO of Hestia Smart Interiors with 20+ years of international experience in real estate, technology, and AI-driven digital transformation.',
  url: 'https://www.hsios.in/about',
  knowsAbout: ['Luxury Real Estate', 'AI & Digital Transformation', 'Interior Execution', 'Startup Mentoring'],
}

const sanjaySchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sanjay Joshi',
  jobTitle: 'Co-founder & CTO',
  worksFor: { '@id': 'https://www.hsios.in/#business' },
  image: 'https://www.hsios.in/sanjay-joshi.jpg',
  description:
    'Co-founder & CTO of Hestia Smart Interiors with 20+ years in enterprise technology, platform strategy, and data-driven execution systems.',
  url: 'https://www.hsios.in/about',
}

const vishalSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vishal Patil',
  jobTitle: 'COO',
  worksFor: { '@id': 'https://www.hsios.in/#business' },
  image: 'https://www.hsios.in/vishal-patil.jpg',
  description:
    'COO of Hestia Smart Interiors overseeing site execution, quality control, vendor coordination, and statutory compliance across premium projects.',
  url: 'https://www.hsios.in/about',
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Hestia Smart Interiors',
  url: 'https://www.hsios.in/about',
  description:
    'Learn about the leadership team, vision, and values behind Hestia Smart Interiors and the HSIOS™ platform.',
  publisher: { '@id': 'https://www.hsios.in/#business' },
  mainEntity: { '@id': 'https://www.hsios.in/#business' },
}

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in' },
  { name: 'About', url: 'https://www.hsios.in/about' },
])

export default async function AboutPage() {
  return (
    <>
      <JsonLd data={[nishantSchema, sanjaySchema, vishalSchema, aboutPageSchema, breadcrumbSchema]} />

      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <section className="relative py-40 bg-charcoal-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects-casa-frangipani-1.jpg"
            alt="Hestia Smart Interiors — premium villa execution"
            fill
            className="object-cover opacity-25"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal-900/60" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <div className="section-label text-sandstone-400">About HSI</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                The Execution Intelligence<br />
                <em className="not-italic text-sandstone-300">Behind Premium Homes.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed">
                Built from real project experience. Engineered to ensure what is designed, gets built — precisely and responsibly.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── MEET THE FOUNDER ───────────────────────────────── */}
      <section className="section-py bg-white overflow-hidden" aria-label="Meet our founder">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Founder Image + Pull-Quote */}
            <RevealOnScroll className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative mx-4">
                <div className="absolute -inset-3 bg-sandstone-100 rounded-[2rem] -rotate-1 opacity-80" />
                <div className="relative bg-charcoal-800 aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/nishant-mhatre.jpg"
                    alt="Nishant Mhatre — Founder of Hestia Smart Interiors"
                    fill
                    className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-sandstone-400/40" />
                  <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-sandstone-400/40" />
                </div>
              </div>

              {/* Pull-quote — placed directly below the founder portrait */}
              <figure className="mt-8 pl-6 mx-4 border-l-2 border-sandstone-300">
                <blockquote className="italic font-serif text-charcoal-700 text-xl leading-relaxed">
                  &ldquo;The next decade belongs to entrepreneurs who can merge sustainability with intelligence — and I&apos;m committed to leading that change.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-warmgray-500 font-semibold tracking-wide uppercase not-italic">
                  — Nishant Mhatre, Founder
                </figcaption>
              </figure>
            </RevealOnScroll>

            {/* Founder Content */}
            <RevealOnScroll className="lg:col-span-7" delay={0.1}>
              <div className="section-label">Founder & CEO</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-1 mt-2">
                Nishant Mhatre
              </h2>
              <p className="text-sandstone-600 font-semibold text-base mb-8 leading-relaxed">
                Founder & CEO, Hestia Smart Interiors &nbsp;·&nbsp; Managing Partner, Hestia Villas
              </p>

              <div className="space-y-5 text-warmgray-600 leading-relaxed text-lg">
                <p className="font-medium text-charcoal-800">
                  Driven by a vision to merge Real Estate, Technology, and AI into future-ready ecosystems — with 20+ years of international experience creating value for investors, businesses, and communities.
                </p>
                <p>
                  After a decade of driving large-scale telecom and digital transformation programs across the USA, UK, Europe, Australia, New Zealand, and India, Nishant transitioned into real estate entrepreneurship — founding a premium villa brand that reimagines luxury living through design, sustainability, and hospitality partnerships.
                </p>
                <p>
                  He identified a persistent gap in premium residential execution: fragmented workflows, avoidable delays, material wastage, and limited accountability. This led to the creation of HSIOS™ — an intelligent Interior Operating System built to bring precision, transparency, and sustainability into every stage of the project lifecycle.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="mt-10 grid sm:grid-cols-2 gap-3">
                {nishantFocus.map((label) => (
                  <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-ivory-100 border border-ivory-200">
                    <span className="text-sandstone-500 font-bold shrink-0 mt-0.5">—</span>
                    <p className="text-sm text-warmgray-600 leading-snug">{label}</p>
                  </div>
                ))}
              </div>

            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── TEAM INTRO DIVIDER ─────────────────────────────── */}
      <div className="bg-charcoal-800 py-16">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <div className="section-label text-sandstone-400">The Team</div>
                <h2 className="font-serif text-display-md text-white mt-2">
                  Led by <em className="not-italic text-sandstone-300">Experience.</em>
                </h2>
              </div>
              <p className="text-warmgray-400 text-base max-w-sm leading-relaxed sm:text-right">
                Decades of combined expertise across technology, execution, and operations — united by one goal: precision interior delivery with documented accountability.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* ── SANJAY JOSHI ───────────────────────────────────── */}
      <section className="section-py bg-ivory-100 overflow-hidden" aria-label="Sanjay Joshi — Co-founder & CTO">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Photo */}
            <RevealOnScroll className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative mx-4">
                <div className="absolute -inset-3 bg-white rounded-[2rem] -rotate-1 shadow-sm" />
                <div className="relative bg-charcoal-800 aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/sanjay-joshi.jpg"
                    alt="Sanjay Joshi — Co-founder & CTO, Hestia Smart Interiors"
                    fill
                    className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-sandstone-400/40" />
                  <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-sandstone-400/40" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Content */}
            <RevealOnScroll className="lg:col-span-7" delay={0.1}>
              <div className="section-label">Co-founder & CTO</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-1 mt-2">
                Sanjay Joshi
              </h2>
              <p className="text-sandstone-600 font-semibold text-base mb-8 leading-relaxed">
                Chief Technology & Platform Officer, Hestia Smart Interiors
              </p>

              <div className="space-y-5 text-warmgray-600 leading-relaxed text-lg">
                <p className="font-medium text-charcoal-800">
                  20+ years translating complex enterprise technology into practical, business-ready systems.
                </p>
                <p>
                  Sanjay owns HSI&apos;s technology roadmap and platform strategy — designing the digital systems that connect design, execution, vendors, and clients in real time, enabling data-driven decisions and process standardisation across every project.
                </p>
                <p>
                  An entrepreneur, management consultant, and corporate trainer, Sanjay has advised organisations across IT, manufacturing, agriculture, and direct selling. He has an uncanny ability to convert complex technical concepts into clear, actionable frameworks — a quality that directly shapes how HSIOS™ is built and communicated.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="mt-10 grid sm:grid-cols-2 gap-3">
                {sanjayFocus.map((label) => (
                  <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-ivory-200">
                    <span className="text-sandstone-500 font-bold shrink-0 mt-0.5">—</span>
                    <p className="text-sm text-warmgray-600 leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              {/* Career Highlights */}
              <div className="mt-10">
                <p className="text-xs font-semibold text-charcoal-700 uppercase tracking-widest mb-5">Career Highlights</p>
                <div className="space-y-4 border-l-2 border-sandstone-200 pl-5">
                  {[
                    { role: 'CTO', org: 'Ellora Systems' },
                    { role: 'Co-Founder', org: 'Boston Byte LLC' },
                    { role: 'Technology Leadership', org: 'Tata Consultancy Services & Infodat' },
                    { role: 'Mechanical Engineer · MBA · MA Economics', org: 'Member, ISPI' },
                  ].map((item) => (
                    <div key={item.org}>
                      <p className="text-sm font-semibold text-charcoal-700">{item.role}</p>
                      <p className="text-sm text-warmgray-500">{item.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── THIN DIVIDER ───────────────────────────────────── */}
      <div className="bg-sandstone-400 h-px w-full" />

      {/* ── VISHAL PATIL ───────────────────────────────────── */}
      <section className="section-py bg-white overflow-hidden" aria-label="Vishal Patil — COO">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Photo */}
            <RevealOnScroll className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative mx-4">
                <div className="absolute -inset-3 bg-ivory-100 rounded-[2rem] rotate-1 shadow-sm" />
                <div className="relative bg-charcoal-800 aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/vishal-patil.jpg"
                    alt="Vishal Patil — COO, Hestia Smart Interiors"
                    fill
                    className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-sandstone-400/40" />
                  <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-sandstone-400/40" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Content */}
            <RevealOnScroll className="lg:col-span-7" delay={0.1}>
              <div className="section-label">COO</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-1 mt-2">
                Vishal Patil
              </h2>
              <p className="text-sandstone-600 font-semibold text-base mb-8 leading-relaxed">
                Head — Project Execution & Operations, Hestia Smart Interiors
              </p>

              <div className="space-y-5 text-warmgray-600 leading-relaxed text-lg">
                <p className="font-medium text-charcoal-800">
                  24+ years of execution leadership delivering complex interior projects at scale.
                </p>
                <p>
                  Vishal leads site execution, contractor coordination, and quality control — ensuring every HSI project is delivered on time, on budget, and exactly as designed. His remit covers statutory compliance, safety governance, and execution risk management across all active projects.
                </p>
                <p>
                  With senior leadership experience at globally recognised organisations, Vishal brings institutional rigour and operational discipline to premium residential interiors — translating design intent into precisely executed on-ground reality.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="mt-10 grid sm:grid-cols-2 gap-3">
                {vishalFocus.map((label) => (
                  <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-ivory-100 border border-ivory-200">
                    <span className="text-sandstone-500 font-bold shrink-0 mt-0.5">—</span>
                    <p className="text-sm text-warmgray-600 leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              {/* Career Highlights */}
              <div className="mt-10">
                <p className="text-xs font-semibold text-charcoal-700 uppercase tracking-widest mb-5">Career Highlights</p>
                <div className="space-y-4 border-l-2 border-sandstone-200 pl-5">
                  {[
                    { role: 'Senior Leadership', org: 'WeWork India' },
                    { role: 'Operations Leadership', org: 'Morgan Stanley' },
                    { role: 'Operations Leadership', org: 'Royal Bank of Scotland' },
                    { role: 'Facilities & Operations', org: 'Sodexo (Pfizer)' },
                  ].map((item) => (
                    <div key={item.org}>
                      <p className="text-sm font-semibold text-charcoal-700">{item.role}</p>
                      <p className="text-sm text-warmgray-500">{item.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── MISSION & STANDARDS ───────────────────────────── */}
      <section className="section-py bg-sandstone-400">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label text-white/60">Our Mission</div>
              <h2 className="font-serif text-display-md text-white mb-6">
                To become the most trusted operating system for premium residential interiors.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Built from frustration with how premium homes were being built — beautiful designs
                ruined during execution, poor planning hidden until too late, waste mistaken for premium,
                clients forced to micromanage. HSIOS™ was created to change that.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="section-label text-white/60">Our Standards</div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {['Precision Execution','Documented Accountability','Lifecycle Sustainability','Earned Completion','Radical Transparency','Responsible Luxury'].map((standard, i) => (
                  <div key={standard} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/15">
                    <span className="font-serif text-2xl font-bold text-white/20 leading-none">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-semibold text-white text-sm">{standard}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <RevealOnScroll>
              <div className="section-label">Our Story</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-6">
                Born from Real<br />
                <span className="text-sandstone-600">Project Experience.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-5 text-lg">
                Hestia Smart Interiors was created to answer one specific problem: why do premium residential projects — with large budgets and considered designs — so consistently fail in execution?
              </p>
              <p className="text-warmgray-600 leading-relaxed mb-5">
                Luxury interiors today involve multiple stakeholders, evolving designs and complex
                execution workflows. Despite high budgets, outcomes are often unpredictable — delays,
                cost overruns and communication gaps are the norm.
              </p>
              <p className="text-warmgray-600 leading-relaxed mb-8">
                HSI combines deep on-ground experience in 7+ premium villa projects with a
                technology-driven approach through HSIOS™ — creating a new standard for
                how interiors are planned and executed.
              </p>
              <blockquote className="border-l-4 border-sandstone-400 pl-6 italic text-charcoal-700 font-serif text-lg">
                &ldquo;We are not just an interior service company — we are building the
                operating system for premium interior execution.&rdquo;
              </blockquote>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className="relative rounded-4xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/projects-casa-frangipani-3.jpg"
                  alt="Hestia Smart Interiors — project execution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── KEY POSITIONING ───────────────────────────────── */}
      <section className="py-24 bg-sandstone-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E\")" }} />
        <RevealOnScroll>
          <div className="container-luxury text-center">
            <p className="font-serif text-display-sm text-white max-w-3xl mx-auto leading-snug">
              &ldquo;Most premium interior projects fail not because of bad design —
              but because of broken execution. We built HSIOS™ to end that.&rdquo;
            </p>
            <p className="mt-6 text-white/70 text-sm font-semibold tracking-wider uppercase">
              — Nishant Mhatre, Founder · Hestia Smart Interiors
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── VALUES ────────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">What Drives Us</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              The Principles Behind{' '}
              <span className="text-sandstone-600">HSIOS™.</span>
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ Icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-sandstone-100 border border-sandstone-200 flex items-center justify-center text-sandstone-600 mb-5">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
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
            <div className="section-label justify-center text-sandstone-400">Work With HSI</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              Meet <span className="text-sandstone-300">HSIOS™</span>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              The unified execution intelligence platform powering every Hestia project. See it in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/hsi-os" className="btn btn-bronze">Explore HSIOS™ →</Link>
              <Link href="/contact" className="btn btn-outline-white">Request Consultation</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
