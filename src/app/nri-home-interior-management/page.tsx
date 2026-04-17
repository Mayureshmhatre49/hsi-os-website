import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'NRI Home Interior Management — Build in India from Anywhere | HSIOS™',
  description:
    'Full interior execution management for NRIs building in India. HSIOS™ gives you real-time project visibility, cost transparency, and digital approvals — no site visits required.',
  alternates: { canonical: 'https://www.hsios.in/nri-home-interior-management' },
  openGraph: {
    title: 'NRI Home Interior Management — Build in India from Anywhere | HSIOS™',
    description: 'Build your luxury Indian home from Dubai, London, or New York with total transparency — powered by HSIOS™.',
    url: 'https://www.hsios.in/nri-home-interior-management',
  },
}

const faqs = [
  {
    q: 'How do I check project progress when I\'m not in India?',
    a: "Through the HSI OS homeowner dashboard. Every day, your on-site supervisor logs progress photos tied to the day's scheduled tasks. You see exactly what work happened, not a curated image the contractor chose to share.",
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
    a: 'The NRI Premium is when local vendors inflate costs knowing remote owners can\'t audit them. HSI OS blocks this with digital Material Takeoffs (MTOs) pre-calculated from drawings, vendor direct payment visibility, and formal Change Orders for every upgrade.',
  },
  {
    q: 'Do I need to fly to India at any point during execution?',
    a: 'No. HSI OS was specifically designed for this. You can manage your entire project digitally — approving changes, reviewing budgets and monitoring daily progress without a single site visit.',
  },
]

const painPoints = [
  {
    title: 'The Trust Deficit',
    desc: 'High-end interiors require millimetre precision. When you\'re 4,000 miles away, verifying that the right materials were used before they\'re concealed is impossible — unless the execution is fully digitised.',
  },
  {
    title: 'Cost Creep',
    desc: 'The "NRI Premium" is an industry reality. Inflated quotes, opaque material sourcing and fictitious labour escalations extract 20–40% more from remote owners. HSI OS eliminates this with locked-in transparency.',
  },
  {
    title: 'Timezone Communication',
    desc: 'You shouldn\'t have to stay awake at 2 AM to receive a chaotic WhatsApp update. HSI OS logs project health 24/7 — check your dashboard on your schedule, in your timezone.',
  },
  {
    title: 'Change Approval Chaos',
    desc: 'No more digging through hundreds of WhatsApp messages to verify if you approved a material change. Every decision is a formal digital record on the platform.',
  },
  {
    title: 'Quality Blind Spots',
    desc: 'Contractors show you finished marble, not the concealed plumbing behind it. HSI OS mandates photographic proof of all core engineering — pipes, conduits, waterproofing — before they\'re covered.',
  },
  {
    title: 'The Dependency on a Local Relative',
    desc: 'Delegating oversight to a family member in India places an unfair burden on them and still leaves you exposed. A digital execution OS is your independent, structured layer of control.',
  },
]

export default function NriHomeInteriorManagementPage() {
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
        <div className="absolute inset-0">
          <Image
            src="/hestia-villa-bellissimo.jpg"
            alt="NRI home interior management — luxury villa execution from anywhere in the world"
            fill
            className="object-cover"
            priority
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
                HSI OS gives NRIs in Dubai, London and New York the same control as a homeowner on
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
                costly experience. HSI OS was designed specifically to solve every one of these
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
              A New Standard for Remote Builds
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-8">
              HSI OS completely redefines how NRIs engage with their projects. Instead of
              unstructured communication, you get absolute execution intelligence.
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

      {/* ── CTA ── */}
      <section className="py-24 bg-charcoal-900 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4">For NRIs</div>
            <h2 className="font-serif text-display-lg text-white mb-6">
              Your Indian Home Deserves{' '}
              <span className="text-sandstone-400">More Than Hope</span>
            </h2>
            <p className="text-warmgray-400 mb-8">
              You are investing millions. The execution layer should match that investment. Plug into
              a digital execution engine — not a contractor&apos;s WhatsApp.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20an%20NRI%20interested%20in%20remote%20execution%20for%20my%20home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bronze"
              >
                Speak to Our NRI Specialists
              </a>
              <Link href="/contact" className="btn btn-outline-light">
                Request a Proposal
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
