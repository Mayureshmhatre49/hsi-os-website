import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Premium Interiors in Pune — Villa & Apartment Execution by Hestia Smart Interiors',
  description:
    'Premium interior execution for apartments, villas and penthouses in Pune. HSI OS brings transparency and structure to luxury projects in Koregaon Park, Kalyani Nagar and beyond.',
  alternates: { canonical: 'https://www.hsios.in/pune-premium-interiors' },
  openGraph: {
    title: 'Premium Interiors in Pune — Hestia Smart Interiors',
    description: "Technology-driven interior execution for Pune's luxury residences, powered by HSIOS™.",
    url: 'https://www.hsios.in/pune-premium-interiors',
  },
}

const faqs = [
  {
    q: 'Do you execute new villas or just apartments?',
    a: 'Both. HSI handles the complete interior shell and core execution for new standalone villas on the outskirts of Pune, as well as high-end penthouses and apartments in the city centre.',
  },
  {
    q: 'Can I hire HSI just for project management?',
    a: 'Yes. You can use HSI OS and our team strictly as an Execution Partner while maintaining your own chosen contractors, or you can opt for our full end-to-end execution service where we supply the workforce.',
  },
  {
    q: 'How do you ensure quality on handcrafted premium finishes?',
    a: 'Our platform tracks quality metrics digitally at every milestone. Daily progress photos are logged against scheduled tasks. No phase proceeds until it passes our on-site inspection and digital quality checklist.',
  },
  {
    q: 'How does HSI prevent timeline delays in Pune?',
    a: 'We micro-schedule works down to the daily level using the HSI OS Planning Engine. Different trades are sequenced so they do not bottleneck each other, and delays are flagged in real time — not discovered at the end.',
  },
]

const features = [
  {
    title: 'Consistent Quality Control',
    desc: 'Handcrafting premium finishes requires daily, strict supervision. Our platform tracks quality metrics digitally, leaving no room for corner-cutting on Koregaon Park luxury builds.',
  },
  {
    title: 'Total Cost Visibility',
    desc: 'We eliminate the "black box" of interior costs. HSI OS tracks every purchase and vendor payment, alerting you instantly of variances against the approved estimate.',
  },
  {
    title: 'Timeline Integrity',
    desc: 'Delays are costly. We micro-schedule works down to the daily level, ensuring different trades operate without bottlenecking each other.',
  },
  {
    title: 'Live Owner Dashboard',
    desc: 'Daily progress photos, digital change approvals and real-time spend tracking — accessible from anywhere. Manage your Kalyani Nagar penthouse from your office.',
  },
  {
    title: 'Villas & Apartments',
    desc: 'New shell villas on Pune outskirts or high-end apartments in the city centre — our execution framework adapts to every project type.',
  },
  {
    title: 'Flexible Engagement',
    desc: 'Use HSI as a full execution partner with our own workforce, or plug us in as project managers over your existing contractors. The platform works both ways.',
  },
]

export default function PunePremiumInteriorsPage() {
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
            src="/hestia-villa-vayu.jpg"
            alt="Premium luxury interiors in Pune by Hestia Smart Interiors"
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
              <div className="section-label text-sandstone-400">Location Services</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Premium Interiors in{' '}
                <span className="text-sandstone-400">Pune</span>
                <br />
                Execution That Matches Global Standards
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                Koregaon Park. Kalyani Nagar. Prabhat Road. Delivering Pune&apos;s finest residences
                with absolute execution intelligence and zero surprises.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Pune%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Start Your Pune Project
                </a>
                <Link href="/contact" className="btn btn-outline-light">
                  Get a Cost Estimate
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 bg-ivory-50">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">The Standard We Set</div>
              <h2 className="font-serif text-display-lg text-charcoal-900 mt-4">
                How HSI Elevates Pune Execution
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3">{f.title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{f.desc}</p>
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
              The Standard for Pune&apos;s Premium Residences
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Pune&apos;s luxury real estate market is expanding rapidly. Discerning homeowners in
              Koregaon Park, Kalyani Nagar and Prabhat Road are demanding execution quality that
              rivals global standards. Yet the gap between stunning architectural design and the
              reality of on-ground execution remains vast — unstructured vendor coordination, rampant
              cost escalations, and timeline failures are endemic.
            </p>
            <p className="text-warmgray-600 leading-relaxed">
              HSI OS bridges this gap. By utilising our technology-driven platform, we manage the
              entire execution lifecycle of your Pune residence. Every rupee is tracked. Every
              milestone is photographed. Your architect&apos;s vision is translated perfectly without
              the usual stress — and you have a live dashboard proving it, every single day.
            </p>
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
                Pune Interior Questions
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
              Execute Your Pune Home{' '}
              <span className="text-sandstone-400">Intelligently</span>
            </h2>
            <p className="text-warmgray-400 mb-8">
              Precise execution. Complete transparency. Zero surprises at handover.
            </p>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Pune%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bronze"
            >
              Discuss Your Pune Project
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
