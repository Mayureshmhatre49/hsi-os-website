import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'About Hestia Smart Interiors — Vision, Values & Founder',
  description:
    'Hestia Smart Interiors was built to change how premium homes are executed. Meet our founder, values, and the vision behind HSIOS™.',
  alternates: { canonical: 'https://www.hsios.in/about' },
}

const values = [
  { icon: '🎯', title: 'Precision First',         desc: 'Interior execution demands precision at every step. We built HSIOS™ to eliminate guesswork entirely.' },
  { icon: '🔍', title: 'Radical Transparency',    desc: 'Homeowners and developers deserve to know exactly where their project stands — always.' },
  { icon: '🏗️', title: 'Ground-Level Experience', desc: 'HSIOS™ is built on real learnings from premium villa projects. Not theory — practice.' },
  { icon: '⚙️', title: 'Systems Thinking',        desc: 'Interior projects are complex systems. We treat them that way — with structured workflows and data.' },
  { icon: '🤝', title: 'Partnership Mindset',     desc: 'We work alongside homeowners, developers and vendors — not above them. Success is shared.' },
  { icon: '🌿', title: 'Responsible Luxury',      desc: 'Premium outcomes should not come at the cost of the environment. Sustainability is built into every project.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <section className="relative py-40 bg-charcoal-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hestia-villa-vayu.jpg"
            alt="Hestia Smart Interiors — premium villa execution"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal-900/60" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <div className="section-label text-sandstone-400">About HSI</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Redefining Interior Execution<br />
                for <em className="not-italic text-sandstone-300">Premium Homes.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed">
                A new standard for how luxury interiors are planned, executed and delivered.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── MEET THE FOUNDER ───────────────────────────────── */}
      <section className="section-py bg-white overflow-hidden" aria-label="Meet our founder">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Founder Image Column */}
            <RevealOnScroll className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute -inset-4 bg-sandstone-100 rounded-[2.5rem] -rotate-2" />
                <div className="relative bg-charcoal-800 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/nishant-mhatre.jpg"
                    alt="Nishant Mhatre — Founder of Hestia Smart Interiors"
                    fill
                    className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent opacity-60" />
                  {/* Decorative corner elements */}
                  <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-sandstone-400/30" />
                  <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-sandstone-400/30" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Founder Narrative Column */}
            <RevealOnScroll className="lg:col-span-7" delay={0.1}>
              <div className="section-label">The Vision Behind HSI</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-8 mt-2">
                Redefining the Future of <em className="not-italic text-sandstone-600">Interior Execution.</em>
              </h2>
              
              <div className="space-y-6 text-warmgray-600 leading-relaxed text-lg">
                <p className="font-medium text-charcoal-800">
                  Nishant Mhatre is a visionary entrepreneur committed to redefining premium interiors through technology, operational excellence, and sustainability.
                </p>
                <p>
                  As the founder of HSIOS, he believes the future of interior execution must go beyond aesthetics and timelines—it must also create smarter, cleaner, and more responsible spaces.
                </p>
                <p>
                  Through years of experience in luxury residential and villa projects, Nishant identified recurring industry challenges: fragmented execution, avoidable delays, material wastage, poor coordination, and limited accountability.
                </p>
                <p>
                  This vision led to the creation of HSIOS: an intelligent Interior Operating System built to bring precision, transparency, and sustainability into every stage of the project lifecycle.
                </p>
              </div>

              {/* Sustainability Framework Sub-section */}
              <div className="mt-12 p-8 rounded-3xl bg-ivory-100 border border-ivory-200">
                <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-6 flex items-center gap-3">
                  <span className="text-2xl">🌿</span>
                  The Sustainability Framework
                </h3>
                <div className="grid gap-6">
                  {[
                    { title: 'Refuse', desc: 'Unnecessary consumption, wasteful materials, and inefficient processes.' },
                    { title: 'Reuse', desc: 'Existing assets, salvageable materials, and components wherever possible.' },
                    { title: 'Recycle', desc: 'Responsibly through structured disposal and circular material practices.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="font-serif text-sandstone-600 font-bold italic w-16 pt-0.5">{item.title}</div>
                      <div className="text-sm text-warmgray-600 flex-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 space-y-6 text-warmgray-600 leading-relaxed">
                <p>
                  His mission is to help every project reduce carbon footprint, minimize construction waste, optimize material usage, and create premium interiors that are elegant not only in appearance—but also in impact.
                </p>
                <p className="italic font-serif text-charcoal-700 text-xl">
                  &ldquo;Nishant’s long-term vision is clear: to make world-class interior execution measurable, predictable, sustainable, and scalable across India and beyond.&rdquo;
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── MISSION & STANDARDS ───────────────────────────── */}
      <section className="section-py bg-sandstone-400">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                {['Precision','Integrity','Sustainability','Innovation','Transparency','Long-term value creation'].map((standard, i) => (
                  <div key={standard} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/15">
                    <span className="font-serif text-2xl font-bold text-white/20 leading-none">{String(i + 1).padStart(2,'0')}</span>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="section-label">Our Story</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-6">
                Born from Real<br />
                <span className="text-sandstone-600">Project Experience.</span>
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-5 text-lg">
                Hestia Smart Interiors was created with a simple but powerful vision — to bring
                structure, clarity and intelligence to premium residential interior projects.
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
                  src="/hestia-casa-frangipani.jpg"
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
              &ldquo;Most luxury interior projects in India fail not because of bad design —
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
            {values.map(({ icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <div className="text-3xl mb-4">{icon}</div>
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
