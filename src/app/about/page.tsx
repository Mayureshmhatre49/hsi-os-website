import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'About Hestia Smart Interiors — Our Story, Values & Vision',
  description:
    'Hestia Smart Interiors was born from real project experience. We combine deep on-ground villa execution with HSIOS™ — our proprietary execution intelligence platform.',
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
              The unified execution intelligence platform powering every Hestia project.
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
