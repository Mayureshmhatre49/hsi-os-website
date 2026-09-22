import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb, serviceSchema } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'
import { getVerifiedTestimonial } from '@/content/testimonials'

export const metadata: Metadata = {
  title: 'NRI Home Interior Management — Build in India from Anywhere',
  description:
    'Full interior execution management for NRIs building in India. HSIOS™ gives you real-time project visibility, cost transparency, and digital approvals — no site visits required.',
  alternates: getAlternates('/nri-home-interior-management'),
  openGraph: {
    title: 'NRI Home Interior Management — Build in India from Anywhere',
    description: 'Build your luxury Indian home from Dubai, London, or New York with total transparency — powered by HSIOS™.',
    url: 'https://www.hsios.in/nri-home-interior-management',
    alternateLocale: ['en_GB', 'en_US', 'en_AU', 'en_SG'],
    images: [{ url: '/projects-casa-frangipani-1.jpg', width: 1200, height: 630, alt: 'Casa Frangipani villa interior, Alibag — built remotely for an NRI owner' }],
  },
}

const serviceData = serviceSchema({
  name: 'NRI Remote Interior Management — Build in India from Anywhere',
  description:
    'Complete interior execution management for NRI homeowners. Real-time project visibility, cost transparency, and digital approvals — no site visits required, powered by HSIOS™.',
  url: 'https://www.hsios.in/nri-home-interior-management',
  areaServed: ['India', 'United Kingdom', 'United States', 'Australia', 'Singapore', 'United Arab Emirates'],
})

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in' },
  { name: 'NRI Home Management', url: 'https://www.hsios.in/nri-home-interior-management' },
])

const faqs = [
  {
    q: 'How do I check project progress when I\'m not in India?',
    a: "Through the HSIOS™ homeowner dashboard. Every day, your on-site supervisor logs progress photos tied to the day's scheduled tasks. You see exactly what work happened, not a curated image the contractor chose to share.",
  },
  {
    q: 'How do you handle financial tracking and payments for NRI projects?',
    a: 'All cost tracking, vendor payments and procurement requests are logged digitally. You approve a digital Change Order before any budget deviation is committed. All payments are linked to verified milestone completion, not contractor requests.',
  },
  {
    q: 'Can I still use my own architect based in India?',
    a: 'Absolutely. HSI is an Execution Partner. Your architect retains full creative control. We take the GFC drawings, digitise the project into trackable tasks and manage all on-ground execution while your designer stays involved at key milestones.',
  },
  {
    q: 'What is the "NRI Premium" and how does HSI prevent it?',
    a: 'The NRI Premium is when local vendors inflate costs knowing remote owners can\'t audit them. HSIOS™ blocks this with digital Material Takeoffs (MTOs) pre-calculated from drawings, vendor direct payment visibility, and formal Change Orders for every upgrade.',
  },
  {
    q: 'Do I need to fly to India at any point during execution?',
    a: 'No. HSIOS™ was specifically designed for this. You can manage your entire project digitally — approving changes, reviewing budgets and monitoring daily progress without a single site visit.',
  },
]

const painPoints = [
  {
    title: 'The Trust Deficit',
    desc: 'High-end interiors require millimetre precision. When you\'re 4,000 miles away, verifying that the right materials were used before they\'re concealed is impossible — unless the execution is fully digitised.',
  },
  {
    title: 'Cost Creep',
    desc: 'The "NRI Premium" is an industry reality. Inflated quotes, opaque material sourcing and fictitious labour escalations extract 20–40% more from remote owners. HSIOS™ eliminates this with locked-in transparency.',
  },
  {
    title: 'Timezone Communication',
    desc: 'You shouldn\'t have to stay awake at 2 AM to receive a chaotic WhatsApp update. HSIOS™ logs project health 24/7 — check your dashboard on your schedule, in your timezone.',
  },
  {
    title: 'Change Approval Chaos',
    desc: 'No more digging through hundreds of WhatsApp messages to verify if you approved a material change. Every decision is a formal digital record on the platform.',
  },
  {
    title: 'Quality Blind Spots',
    desc: 'Contractors show you finished marble, not the concealed plumbing behind it. HSIOS™ mandates photographic proof of all core engineering — pipes, conduits, waterproofing — before they\'re covered.',
  },
  {
    title: 'The Dependency on a Local Relative',
    desc: 'Delegating oversight to a family member in India places an unfair burden on them and still leaves you exposed. A digital execution OS is your independent, structured layer of control.',
  },
]

export default async function NriHomeInteriorManagementPage() {
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
      <JsonLd data={[faqSchema, serviceData, breadcrumbSchema]} />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hestia-villa-bellissimo.jpg"
            alt="NRI home interior management — luxury villa execution from anywhere in the world"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-800/50 to-charcoal-900/20" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">NRI Services</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Build Your Indian Home<br />
                From{' '}
                <span className="text-sandstone-400">Anywhere in the World</span>
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                HSIOS™ gives NRIs in Dubai, London and New York the same control as a homeowner on
                site daily — live dashboards, transparent costs and zero dependency on WhatsApp.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20an%20NRI%20interested%20in%20remote%20execution%20for%20my%20home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Start Your Remote Project
                </a>
                <Link href="/for-homeowners" className="btn btn-outline-light">
                  How It Works for Homeowners
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="py-24 bg-ivory-50">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">The NRI Problem, Solved</div>
              <h2 className="font-serif text-display-lg text-charcoal-900 mt-4">
                What We Eliminate From Your Remote Build
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Building from abroad through traditional contracting is a stressful, opaque, and
                costly experience. HSIOS™ was designed specifically to solve every one of these
                problems.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3">{p.title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-white">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <h2 className="font-serif text-display-md text-charcoal-900 mb-6">
              Four Thousand Miles Is Not a Barrier.<br />
              <span className="text-sandstone-600">It Is a Dashboard.</span>
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-8">
              HSIOS™ gives NRI homeowners structured execution intelligence — not WhatsApp updates. Every day, every rupee, and every decision is documented and accessible from anywhere in the world.
            </p>
          </RevealOnScroll>
          <div className="space-y-8">
            {[
              {
                num: '01',
                title: 'Daily Dashboard with Photographic Proof',
                desc: 'Every day, your on-site supervisor logs specific progress photos tied to the day\'s tasks. If electrical conduit routing was scheduled for Tuesday, you see the photos on Tuesday — not a curated highlight reel.',
              },
              {
                num: '02',
                title: 'Unimpeachable Cost Transparency',
                desc: 'All cost tracking, vendor payments and procurement requests are logged digitally. No more lump-sum shocks. If you want an imported chandelier, the system shows the exact cost, shipping margin and impact on your master timeline before any commitment.',
              },
              {
                num: '03',
                title: 'Structured Digital Approvals',
                desc: 'Every design decision, material change and budget deviation is forced through a digital approval funnel. It exists on permanent record — keeping your designers and our execution teams perfectly aligned, with you in control.',
              },
            ].map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-sandstone-100 flex items-center justify-center shrink-0">
                    <span className="font-serif text-bronze-700 font-bold text-sm">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal-900 mb-2">{step.title}</h3>
                    <p className="text-warmgray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIDE THE NRI PORTAL — concrete platform features ── */}
      <section className="py-24 bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-12">
            <div className="section-label text-sandstone-400">Inside the NRI Portal</div>
            <h2 className="font-serif text-display-lg text-white mt-3 mb-5">
              Built for{' '}
              <em className="not-italic text-sandstone-300">absentee ownership.</em>
            </h2>
            {/* [CONFIRM] which of these six are live today; remove or mark "coming soon" any that aren't. */}
            <p className="text-warmgray-300 text-lg leading-relaxed">
              Six concrete features that make HSIOS™ different from a contractor with a WhatsApp
              account.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Secure OTP Login',
                desc: 'No password to share across the family, and none to leak. Each session signs in with a time-bound one-time code sent to your email or WhatsApp.',
              },
              {
                title: 'Daily Photo Timeline',
                desc: 'Site photos captured against the master schedule, not chosen by the contractor. Every photo is date-stamped and tied to a milestone, so you can follow the build from London or Singapore as if you were on site.',
              },
              {
                title: 'Activity Log',
                desc: 'Every material upgrade approved, every change order signed, every snag logged and resolved — a complete, exportable record you can review from any device, the way you would a bank statement.',
              },
              {
                title: 'Aggregated Data View',
                desc: 'You see progress, budget bands and component status — never raw vendor invoices or internal markups. You only ever see what is meant for you.',
              },
              {
                title: 'Multi-Device Dashboard',
                desc: 'Mobile, tablet, desktop. Same view, same data, same approvals. Sign off a change order from a Dubai airport. Verify a milestone from a Sydney living room. No app install required.',
              },
              {
                title: 'Real-time Updates',
                desc: 'Status changes push to your device the moment the supervisor logs them on-site. No "I\'ll check tomorrow." The dashboard is the source of truth, and it\'s never more than seconds out of date.',
              },
            ].map(({ title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.05}>
                <div className="h-full p-7 rounded-2xl bg-white/5 border border-white/8 hover:border-sandstone-400/40 transition-colors">
                  <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-sandstone-400 mb-3">
                    {`Feature 0${i + 1}`}
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3 leading-snug">{title}</h3>
                  <p className="text-warmgray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-sandstone-50">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-md text-charcoal-900 mt-4">
                NRI Remote Execution Questions
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

      {/* ── TESTIMONIAL — Niket (Hong Kong NRI), renders only when verified ── */}
      {(() => {
        const t = getVerifiedTestimonial('niket-murdeshwar')
        if (!t) return null
        return (
          <section className="py-20 bg-ivory-100">
            <div className="container-luxury max-w-3xl">
              <RevealOnScroll>
                <div className="card-luxury bg-white p-6 sm:p-10 text-center">
                  <div className="font-serif text-5xl text-sandstone-300 leading-none mb-6">&ldquo;</div>
                  <p className="font-serif text-xl text-charcoal-800 leading-relaxed italic mb-8 max-w-2xl mx-auto">
                    {t.quote}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-sandstone-100 flex items-center justify-center font-serif font-bold text-sandstone-700 text-sm">{t.initials}</div>
                    <div className="text-left">
                      <div className="font-semibold text-charcoal-800 text-sm">{t.name}</div>
                      <div className="text-xs text-warmgray-500 mt-0.5">{t.location ? `${t.role} · ${t.location}` : t.role}</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </section>
        )
      })()}

      {/* ── CTA ── */}
      <section className="py-24 bg-charcoal-900 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4">For NRIs</div>
            <h2 className="font-serif text-display-lg text-white mb-6">
              Your Investment. Your Vision.<br />
              <span className="text-sandstone-400">Your Control — From Anywhere.</span>
            </h2>
            <p className="text-warmgray-400 mb-8">
              You are investing significantly. The execution layer should match that investment — structured, documented, and fully visible to you, regardless of where you are in the world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-bronze">
                Book a Video Consultation
              </Link>
              <a
                href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20an%20NRI%20interested%20in%20remote%20execution%20for%20my%20home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-xs text-warmgray-500 mt-5">Video calls scheduled around your time zone.</p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
