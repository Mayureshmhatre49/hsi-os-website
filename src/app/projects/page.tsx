import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Our Projects — 7 Luxury Villa Interiors Delivered | Hestia Smart Interiors',
  description:
    'Explore completed luxury villa and residential interior projects by Hestia Smart Interiors — Casa Frangipani, Serenity Villa, Villa Rughani, Villa Blue Haven, Villa Bellissimo, Villa Vayu, Villa Awas.',
  alternates: { canonical: 'https://www.hsios.in/projects' },
}

const projects = [
  {
    name: 'Casa Frangipani',
    location: 'Alibag',
    tag: '6 Bedrooms',
    image: '/hestia-casa-frangipani.jpg',
    desc: 'A luxurious 6-bedroom villa in Alibag — surrounded by lush greenery with bespoke interiors and complete privacy. Executed as a full turnkey interior project.',
    href: 'https://hestiavillas.in/case_study/casa-frangipani-rent-and-buy/',
    featured: true,
  },
  {
    name: 'Serenity Villa',
    location: 'Dhokawade, Alibag',
    tag: 'Villa',
    image: '/hestia-serenity-villa.jpg',
    desc: 'A stunning retreat in Dhokawade — designed for luxury and tranquillity. Architectural elegance balanced with natural calm.',
    href: 'https://hestiavillas.in/case_study/serenity-villa/',
  },
  {
    name: 'Villa Rughani',
    location: 'Kothimbe, Karjat',
    tag: 'Hill Villa',
    image: '/hestia-villa-rughani.jpeg',
    desc: 'A luxurious residence in Kothimbe — surrounded by hills. Premium bungalow delivering refined living in Maharashtra\'s most scenic hill location.',
    href: 'https://hestiavillas.in/case_study/rughani-house/',
  },
  {
    name: 'Villa Blue Haven',
    location: 'Alibag',
    tag: 'Renovation',
    image: '/hestia-villa-blue-haven.jpg',
    desc: 'A complex renovation project by Hestia — transforming an existing residence into a contemporary luxury villa while preserving the soul of the original space.',
    href: 'https://hestiavillas.in/case_study/villa-blue-haven/',
  },
  {
    name: 'Villa Bellissimo',
    location: 'Village Awas, Alibag',
    tag: 'Villa',
    image: '/hestia-villa-bellissimo.jpg',
    desc: 'A grand residential statement in Village Awas — combining timeless architectural form with bespoke interiors and meticulous craftsmanship.',
    href: 'https://hestiavillas.in/case_study/villa-bellissimo/',
  },
  {
    name: 'Villa Vayu',
    location: 'Alibag',
    tag: '4 Bedrooms · Pool',
    image: '/hestia-villa-vayu.jpg',
    desc: 'A 4-bedroom villa with a long pool — surrounded by hills on the west, a temple on the east. A deeply serene and elevated living experience.',
    href: 'https://hestiavillas.in/case_study/coffee-book/',
  },
  {
    name: 'Villa Awas',
    location: 'Alibag',
    tag: 'Family Residence',
    image: '/hestia-villa-awas.jpg',
    desc: 'A unique challenge — combining two existing houses into one luxurious family residence for a family of 10. Complex execution, seamless outcome.',
    href: 'https://hestiavillas.in/case_study/villa-awas/',
    featured: true,
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
            { val: '7+',  label: 'Premium Villas' },
            { val: '2',   label: 'States Served' },
            { val: '100%', label: 'Delivered On Budget' },
            { val: '0',   label: 'Execution Surprises' },
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
            {projects.map(({ name, location, tag, image, desc, href, featured }, i) => (
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
                    <p className="text-warmgray-600 text-sm leading-relaxed mb-4">{desc}</p>
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
