import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Mumbai Luxury Interiors — Premium Apartment & Penthouse Execution | HSIOS™',
  description:
    'Premium interior execution for Mumbai apartments, penthouses, and high-rises. HSIOS™ navigates society approvals, high-rise logistics, and vendor coordination with full cost transparency.',
  alternates: { canonical: 'https://www.hsios.in/mumbai-luxury-interiors' },
  openGraph: {
    title: 'Mumbai Luxury Interiors — Premium Apartment & Penthouse Execution | HSIOS™',
    description: 'Premium interior execution for Mumbai luxury residences — society-compliant, fully transparent, powered by HSIOS™.',
    url: 'https://www.hsios.in/mumbai-luxury-interiors',
  },
}

const faqs = [
  {
    q: 'How do you manage society working-hour restrictions in Mumbai buildings?',
    a: 'We build society NOC timelines and permitted working windows directly into the HSI OS project schedule before execution starts. All vendors are briefed and our daily task plans respect building-level rules automatically.',
  },
  {
    q: 'Can I work with my own interior designer while using HSI for execution?',
    a: 'Yes. HSI acts as the Execution Partner, not the design firm. Your designer retains full creative control. We take the approved drawings, manage procurement and all vendor coordination on the ground.',
  },
  {
    q: 'How do you handle cost overruns in Mumbai projects?',
    a: 'The HSI OS Budget Intelligence module tracks every rupee against the approved estimate in real time. Any deviation triggers a digital Change Order that requires your sign-off before a single rupee is spent.',
  },
  {
    q: 'Do you manage work in both new Bandra apartments and older South Mumbai buildings?',
    a: 'Yes. We have experience across the full Mumbai micro-market spectrum — from brand-new shells in BKC to heritage buildings in Breach Candy that require careful structural sensitivity.',
  },
]

const challenges = [
  {
    title: 'High-Rise Logistics',
    desc: 'Material hoisting schedules, goods-lift bookings and floor-protection protocols require precise coordination. HSI OS manages every logistics window.',
  },
  {
    title: 'Society Rule Compliance',
    desc: 'Working-hour restrictions, NOC requirements and builder-imposed material specifications are mapped into the project schedule from day one.',
  },
  {
    title: '15+ Vendor Orchestration',
    desc: 'Civil, electrical, plumbing, HVAC, automation, stone, carpentry — sequenced in HSI OS so no trade stalls while waiting on another.',
  },
  {
    title: 'Radical Cost Control',
    desc: 'Live budget tracking with line-item visibility. Every vendor invoice is mapped to an approved estimate. No lump-sum surprises at handover.',
  },
  {
    title: 'Remote Owner Visibility',
    desc: 'Daily progress photos tied to scheduled milestones, accessible from any device. Manage your Mumbai home from Singapore or Dubai.',
  },
  {
    title: 'Quality at Finish Level',
    desc: 'Milestone-locked quality inspections with photographic proof. No phase proceeds until the previous one passes our 200-point digital snagging checklist.',
  },
]

export default function MumbaiLuxuryInteriorsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal-900" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 30% 50%, #C4935A33 0%, transparent 70%)',
          }}
        />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Location Services</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Luxury Interiors in{' '}
                <span className="text-sandstone-400">Mumbai</span>
                <br />
                High-Rise Execution Without Compromise
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                From Worli penthouses to Bandra sea-facing apartments — HSI OS navigates every
                society rule, logistics window, and vendor timeline so you don&apos;t have to.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Mumbai%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Start Your Mumbai Project
                </a>
                <Link href="/contact" className="btn btn-outline-light">
                  Get a Cost Estimate
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="py-24 bg-ivory-50">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">Mumbai Execution Reality</div>
              <h2 className="font-serif text-display-lg text-charcoal-900 mt-4">
                Challenges Unique to Mumbai Interiors
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Mumbai&apos;s luxury micro-market has its own rules. HSI OS has been purpose-built
                to handle all of them without adding friction to your project.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3">{c.title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-24 bg-white">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <h2 className="font-serif text-display-md text-charcoal-900 mb-6">
              Structured Execution for Mumbai&apos;s Finest Residences
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Mumbai&apos;s premium residential market demands execution precision that goes far
              beyond aesthetics. A Worli sea-facing penthouse requires 15+ agencies — civil
              contractors, electricians, plumbers, HVAC engineers, stone installers, home automation
              specialists — all operating in a building that has its own rules, timings, and
              committees. One coordination failure cascades into weeks of lost time.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSI OS is the operating layer that eliminates this chaos. Every trade is sequenced.
              Every material is tracked. Every cost is transparent. And every decision you make is
              documented — so you are never chasing a WhatsApp thread to remember if you approved
              the imported marble upgrade.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-2xl text-charcoal-900 mb-4">
              Mumbai-Specific Capabilities
            </h3>
            <ul className="space-y-3 text-warmgray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-bronze-600 font-bold mt-0.5">—</span>
                <span>
                  Pre-project society NOC and builder-specification audit built into the onboarding
                  phase
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze-600 font-bold mt-0.5">—</span>
                <span>
                  Goods-lift and material-hoisting schedule integrated with building management
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze-600 font-bold mt-0.5">—</span>
                <span>
                  Live budget dashboard with line-item vendor payment tracking and digital change
                  order workflow
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze-600 font-bold mt-0.5">—</span>
                <span>200-point digital snagging at handover — nothing is missed</span>
              </li>
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-sandstone-50">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-md text-charcoal-900 mt-4">
                Mumbai Interior Questions
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className="card-warm p-8">
                  <h3 className="font-serif text-lg text-charcoal-900 mb-3">{f.q}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-charcoal-900 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4">Ready to Build?</div>
            <h2 className="font-serif text-display-lg text-white mb-6">
              Execute Your Mumbai Home{' '}
              <span className="text-sandstone-400">Intelligently</span>
            </h2>
            <p className="text-warmgray-400 mb-8">
              No society stress. No vendor chaos. No hidden costs. Just the home you envisioned.
            </p>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Mumbai%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bronze"
            >
              Discuss Your Mumbai Project
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
