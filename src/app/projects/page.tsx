import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Case Studies & Projects — Luxury Villa Interiors by HSIOS™ | Hestia Smart Interiors',
  description:
    'See how HSIOS™ delivered 7 premium villa interiors with zero budget overruns — conflicts detected pre-execution, real-time budget tracking, and full documentation from start to handover.',
  alternates: { canonical: 'https://www.hsios.in/projects' },
}

const projects = [
  {
    name: 'Casa Frangipani',
    location: 'Alibag',
    tag: '6 Bedrooms',
    image: '/hestia-casa-frangipani.jpg',
    desc: 'A full-turnkey 6-bedroom villa in Alibag — bespoke interiors, complete privacy, and complex multi-trade coordination across 6,500 sq ft.',
    href: 'https://hestiavillas.in/case_study/casa-frangipani-rent-and-buy/',
    featured: true,
    metrics: [
      { label: 'Conflicts Detected Pre-Execution', value: '12' },
      { label: 'Budget Adherence', value: '100%' },
      { label: 'Delivery', value: 'On Schedule' },
    ],
  },
  {
    name: 'Serenity Villa',
    location: 'Dhokawade, Alibag',
    tag: 'Villa',
    image: '/hestia-serenity-villa.jpg',
    desc: 'A luxury retreat in Dhokawade — architectural elegance balanced with natural calm. Multi-trade coordination in a constrained coastal site.',
    href: 'https://hestiavillas.in/case_study/serenity-villa/',
    metrics: [
      { label: 'Trade Clashes Resolved', value: '8' },
      { label: 'Delivered Within Budget', value: 'Yes' },
      { label: 'Vendor Escalations', value: '0' },
    ],
  },
  {
    name: 'Villa Rughani',
    location: 'Kothimbe, Karjat',
    tag: 'Hill Villa',
    image: '/hestia-villa-rughani.jpeg',
    desc: 'A premium hilltop residence in Karjat — site access constraints, hillside structural considerations, and a precision finish standard throughout.',
    href: 'https://hestiavillas.in/case_study/rughani-house/',
    metrics: [
      { label: 'Conflicts Detected Pre-Execution', value: '7' },
      { label: 'Budget Overrun', value: 'None' },
      { label: 'Site Surprises', value: '0' },
    ],
  },
  {
    name: 'Villa Blue Haven',
    location: 'Alibag',
    tag: 'Renovation',
    image: '/hestia-villa-blue-haven.jpg',
    desc: 'A complex renovation — transforming an existing residence into a contemporary luxury villa while preserving the structural soul of the original space.',
    href: 'https://hestiavillas.in/case_study/villa-blue-haven/',
    metrics: [
      { label: 'Legacy Conflicts Identified', value: '9' },
      { label: 'Existing Fixtures Reused', value: '60%' },
      { label: 'Delivered Within Budget', value: 'Yes' },
    ],
  },
  {
    name: 'Villa Bellissimo',
    location: 'Village Awas, Alibag',
    tag: 'Villa',
    image: '/hestia-villa-bellissimo.jpg',
    desc: 'A grand residential statement in Village Awas — timeless form, bespoke interiors, meticulous coordination across all finishing trades.',
    href: 'https://hestiavillas.in/case_study/villa-bellissimo/',
    metrics: [
      { label: 'Conflicts Resolved Pre-Site', value: '10' },
      { label: 'On-Site Rework', value: 'Minimal' },
      { label: 'Budget Adherence', value: '100%' },
    ],
  },
  {
    name: 'Villa Vayu',
    location: 'Alibag',
    tag: '4 Bedrooms · Pool',
    image: '/hestia-villa-vayu.jpg',
    desc: 'A 4-bedroom pool villa surrounded by hills and temple — HVAC, pool mechanical, and interior trade coordination in a tight structural envelope.',
    href: 'https://hestiavillas.in/case_study/coffee-book/',
    metrics: [
      { label: 'Conflicts Detected Pre-Execution', value: '11' },
      { label: 'Trade Sequencing Cycles', value: '4' },
      { label: 'Delivery', value: 'On Schedule' },
    ],
  },
  {
    name: 'Villa Awas',
    location: 'Alibag',
    tag: 'Family Residence',
    image: '/hestia-villa-awas.jpg',
    desc: 'Two existing houses merged into one seamless family residence for 10 — the most structurally complex project in the Hestia portfolio.',
    href: 'https://hestiavillas.in/case_study/villa-awas/',
    featured: true,
    metrics: [
      { label: 'Conflicts Detected Pre-Execution', value: '18' },
      { label: 'Structural Clashes Resolved', value: '6' },
      { label: 'Budget Adherence', value: '100%' },
    ],
  },
]

const spotlights = [
  {
    name: 'Casa Frangipani',
    location: 'Alibag · 6 Bedrooms · Full Turnkey',
    image: '/hestia-casa-frangipani.jpg',
    href: 'https://hestiavillas.in/case_study/casa-frangipani-rent-and-buy/',
    challenge: 'A 6-bedroom full-turnkey villa demanding precise coordination across civil, plumbing, HVAC, electrical, carpentry, and finishing trades — simultaneously. Over 6,500 sq ft of premium space with zero margin for rework.',
    interventions: [
      'HVAC duct routing vs false ceiling depth — flagged and re-routed before site work',
      'Plumbing vs kitchen island conflict — resolved at planning stage, saving 3+ weeks',
      'Electrical conduit vs structural beam — identified during conflict scan, avoided full ceiling redo',
      'Vendor delivery sequencing optimised across 6 simultaneous trade streams',
      'Real-time budget dashboard gave client full visibility throughout',
    ],
    outcomes: [
      { value: '12', label: 'Conflicts Detected Before Site Began' },
      { value: '100%', label: 'Budget Adherence' },
      { value: '0', label: 'On-Site Surprises' },
      { value: 'Full', label: 'Sustainability Report Delivered' },
    ],
  },
  {
    name: 'Villa Awas',
    location: 'Alibag · Family Residence · Two-Structure Merge',
    image: '/hestia-villa-awas.jpg',
    href: 'https://hestiavillas.in/case_study/villa-awas/',
    challenge: 'The most structurally complex project in the Hestia portfolio — merging two adjacent houses into one coherent luxury residence for a family of 10. Existing structural misalignments, legacy plumbing conflicts, and two different electrical grids to reconcile.',
    interventions: [
      'Structural wall alignment mapped across both buildings — 6 critical conflicts identified',
      'Legacy plumbing rerouted to unified system before finishes began',
      'Electrical grid unification planned and sequenced to avoid double-work',
      'Shared wall and ceiling details redesigned to conceal the join seamlessly',
      'Material sourcing consolidated across both structures to maintain finish consistency',
    ],
    outcomes: [
      { value: '18', label: 'Conflicts Detected Pre-Execution' },
      { value: '6', label: 'Structural Clashes Resolved' },
      { value: '100%', label: 'Budget Adherence' },
      { value: '1', label: 'Seamless Family Residence' },
    ],
  },
]

const learnings = [
  { n: '01', title: 'Coordination Gaps Cost Time and Money',   desc: 'When teams work in silos, rework and delays follow. HSIOS™ creates a single execution layer all stakeholders operate from.' },
  { n: '02', title: 'Budget Overruns Are Preventable',         desc: 'Most cost surprises happen because of a lack of real-time visibility. Our Budget Intelligence module was built specifically to end this.' },
  { n: '03', title: 'Homeowners Deserve Full Information',     desc: 'The traditional model keeps homeowners in the dark. Our real-time dashboards give them the visibility they have always deserved.' },
  { n: '04', title: 'Vendor Management is the Hidden Bottleneck', desc: 'Procurement delays and vendor misalignment are the most underestimated risk in interior execution. HSIOS™ addresses this directly.' },
]

export default function ProjectsPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <section className="relative py-40 bg-charcoal-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects-casa-frangipani-1.jpg"
            alt="Hestia Smart Interiors — luxury villa project execution"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal-900/50" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <div className="section-label text-sandstone-400">Our Work</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Built on Real<br />
                <em className="not-italic text-sandstone-300">Project Experience.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed">
                Every feature of HSIOS™ was forged through the real-world challenges of premium villa execution.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="py-12 bg-sandstone-400">
        <div className="container-luxury grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-white">
          {[
            { val: '7+',   label: 'Premium Villas Delivered' },
            { val: '75+',  label: 'Trade Conflicts Resolved Pre-Execution' },
            { val: '100%', label: 'Delivered On Budget' },
            { val: '0',    label: 'Client Budget Surprises' },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="font-serif text-4xl font-bold">{val}</div>
              <div className="text-sm text-white/75 mt-1 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECT GRID ──────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">7 Completed Projects</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Premium Villas Delivered by{' '}
              <span className="text-sandstone-600">Hestia.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ name, location, tag, image, desc, href, featured, metrics }, i) => (
              <RevealOnScroll key={name} delay={i * 0.07}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group card-luxury block
                    ${featured ? 'ring-1 ring-sandstone-400/40' : ''}
                  `}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${name} — Hestia Smart Interiors`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {featured && (
                      <div className="absolute top-4 left-4 badge-warm bg-sandstone-400/90 text-white border-sandstone-500">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-7">
                    <div className="text-xs font-semibold tracking-widest uppercase text-sandstone-600 mb-2">
                      {location} · {tag}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 group-hover:text-sandstone-700 transition-colors">
                      {name}
                    </h3>
                    <p className="text-warmgray-600 text-sm leading-relaxed mb-5">{desc}</p>
                    {/* Metrics strip */}
                    <div className="grid grid-cols-3 gap-2 mb-5 pt-4 border-t border-ivory-300">
                      {metrics.map(({ label, value }) => (
                        <div key={label} className="text-center">
                          <div className="font-serif text-lg font-bold text-sandstone-600">{value}</div>
                          <div className="text-[10px] leading-tight text-warmgray-500 mt-0.5">{label}</div>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-sandstone-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      View Project
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY SPOTLIGHT ──────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label text-sandstone-400">Case Studies</div>
            <h2 className="font-serif text-display-lg text-white">
              Challenge. Execution.<br />
              <em className="not-italic text-sandstone-300">Outcome.</em>
            </h2>
            <p className="text-warmgray-300 mt-4 leading-relaxed">
              Two projects that defined how HSIOS™ works under real-world pressure.
            </p>
          </RevealOnScroll>

          <div className="space-y-20">
            {spotlights.map(({ name, location, image, href, challenge, interventions, outcomes }, i) => (
              <RevealOnScroll key={name}>
                <div className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10`}>
                  {/* Image */}
                  <div className={`relative min-h-[320px] lg:min-h-[480px] ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <Image
                      src={image}
                      alt={`${name} case study — HSIOS execution`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-xs font-bold tracking-widest uppercase text-sandstone-400 mb-1">{location}</div>
                      <div className="font-serif text-2xl font-bold text-white">{name}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-charcoal-900 p-10 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-sandstone-400 mb-4">The Challenge</div>
                      <p className="text-warmgray-300 text-sm leading-relaxed mb-8">{challenge}</p>

                      <div className="text-xs font-bold tracking-widest uppercase text-sandstone-400 mb-4">HSIOS™ Interventions</div>
                      <ul className="space-y-2.5 mb-8">
                        {interventions.map(item => (
                          <li key={item} className="flex items-start gap-3 text-sm text-warmgray-200">
                            <span className="w-5 h-5 rounded-full bg-sandstone-500/20 flex items-center justify-center flex-shrink-0 text-sandstone-400 text-xs mt-0.5">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome metrics */}
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-sandstone-400 mb-4">Outcomes</div>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {outcomes.map(({ value, label }) => (
                          <div key={label} className="bg-white/5 border border-white/8 rounded-xl p-4 text-center">
                            <div className="font-serif text-2xl font-bold text-sandstone-300">{value}</div>
                            <div className="text-[11px] text-warmgray-400 mt-1 leading-snug">{label}</div>
                          </div>
                        ))}
                      </div>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-bronze w-full justify-center text-sm"
                      >
                        Read Full Project →
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE LEARNED ───────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">From Field to Platform</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              The Real Problems<br />
              <span className="text-sandstone-600">HSIOS™ Solves.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 leading-relaxed">
              Every challenge we encountered in the field became a module in the platform.
            </p>
          </RevealOnScroll>

          <div className="max-w-3xl space-y-5">
            {learnings.map(({ n, title, desc }, i) => (
              <RevealOnScroll key={n} delay={i * 0.08}>
                <div className="flex gap-6 p-7 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 hover:shadow-card transition-all duration-300">
                  <div className="font-serif text-5xl font-bold text-sandstone-200 leading-none flex-shrink-0">
                    {n}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-2">{title}</h3>
                    <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
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
            <div className="section-label justify-center text-sandstone-400">Your Project Next</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              Let&apos;s Bring <span className="text-sandstone-300">Precision</span> to Your Project.
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              Structure, transparency and intelligence for your premium interior project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-bronze">Start Your Project →</Link>
              <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
