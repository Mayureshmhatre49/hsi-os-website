import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'

const PAGE_URL = 'https://www.hsios.in/security'

export const metadata: Metadata = {
  title: 'Security & Trust — How HSIOS™ Protects Your Project',
  description:
    'How HSIOS™ keeps your project safe: your data in a region you choose, role-based access, one-time-code sign-in, a permanent audit trail, encrypted backups, and export on request.',
  alternates: getAlternates('/security'),
  openGraph: {
    title: 'Security & Trust — HSIOS™',
    description:
      'How HSIOS™ keeps your project data safe — role-based access, secure sign-in, a permanent audit trail, encrypted backups, and export on request.',
    url: PAGE_URL,
    images: [{ url: '/projects-casa-frangipani-1.jpg', width: 1200, height: 630, alt: 'Hestia Smart Interiors — secure project execution' }],
  },
}

const principles = [
  {
    title: 'Your data stays yours',
    desc: 'Your project’s records, photos and documents live on infrastructure in a region you choose. Your files aren’t handed off to a third-party cloud.',
  },
  {
    title: 'Everyone sees only what they should',
    desc: 'You, your vendors and our team each get a role-appropriate view. Vendors never see each other, and you never see internal notes you weren’t meant to.',
  },
  {
    title: 'Secure sign-in',
    desc: 'You sign in with a one-time code sent to your email or WhatsApp — there’s no fixed password to leak, and each code expires quickly.',
  },
  {
    title: 'A permanent audit trail',
    desc: 'Every approval, change order and sign-off is recorded on a tamperproof log you can review — or export — at any time.',
  },
  {
    title: 'Encrypted, verified backups',
    desc: 'Your project is backed up daily, encrypted, and checked so it can actually be restored if it’s ever needed.',
  },
  {
    title: 'Your data is portable',
    desc: 'Records, BOQ, logs and documents are all exportable on demand. Your data is stored in your project — never held against it.',
  },
]

const faqs = [
  {
    q: 'Where is my project data stored?',
    a: 'On infrastructure in a region you choose, with encrypted daily backups. Your photos and documents are not handed to a third-party cloud.',
  },
  {
    q: 'Who can see my financials?',
    a: 'Only your team and the managers you authorise see raw cost data. As an owner you see clear budget bands — never raw vendor invoices, markups or internal notes. The AI assistant follows the same rule.',
  },
  {
    q: 'What happens if my login is compromised?',
    a: 'If your session is used from somewhere it shouldn’t be, we shut it down immediately and ask you to sign in again — which cancels the old access straight away.',
  },
  {
    q: 'Is the AI assistant a privacy risk?',
    a: 'No. The assistant only ever sees what your role is allowed to see. It cannot surface financials, or another party’s data, that you were never shown.',
  },
  {
    q: 'Do you keep my project data forever?',
    a: 'We keep your project records for as long as you need them, and nothing is permanently deleted without an explicit request from you.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. Your records, BOQ, execution logs, audit trail and documents are all exportable on demand. Portability is a first-class concern, not an afterthought.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Security & Trust — How HSIOS™ Protects Your Project',
  description:
    'How HSIOS™ keeps your project safe — your data in a region you choose, role-based access, secure sign-in, a permanent audit trail, encrypted backups, and export on request.',
  url: PAGE_URL,
  author: { '@type': 'Organization', name: 'Hestia Smart Interiors', url: 'https://www.hsios.in' },
  publisher: { '@id': 'https://www.hsios.in/#organization' },
  inLanguage: 'en-IN',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in' },
  { name: 'Security & Trust', url: PAGE_URL },
])

export default async function SecurityPage() {
  return (
    <>
      <JsonLd data={[articleSchema, faqSchema, breadcrumbSchema]} />

      {/* ── HERO ── */}
      <section className="section-py bg-charcoal-800 pt-40">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400">Trust · Security · Engineering</div>
            <h1 className="font-serif text-display-xl text-white mt-3 mb-7 leading-[1.05]">
              Security as a{' '}
              <em className="not-italic text-sandstone-300">first-class concern.</em>
            </h1>
            <p className="text-xl text-warmgray-300 leading-relaxed">
              Premium interior projects involve seven-figure budgets, vendor contracts, design IP,
              and family financial decisions. HSIOS™ is engineered with the same security posture
              you&apos;d expect from a private banking application — because the data deserves it.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CORE PRINCIPLES ── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-12">
            <div className="section-label">Core Principles</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-2 mb-5">
              How your project is{' '}
              <em className="not-italic text-sandstone-600">protected.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              Six things we do — in plain terms — to keep your data private, your decisions on record,
              and your project yours.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map(({ title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.05}>
                <div className="h-full p-7 rounded-2xl bg-white border border-ivory-300">
                  <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-sandstone-600 mb-3">
                    {`0${i + 1}`}
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll className="text-center mb-12">
            <div className="section-label justify-center">Frequently Asked</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3">
              Common Security Questions
            </h2>
          </RevealOnScroll>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 0.04}>
                <div className="p-7 bg-white border border-ivory-300 rounded-2xl">
                  <h3 className="font-serif text-lg text-charcoal-800 mb-3">{f.q}</h3>
                  <p className="text-warmgray-700 leading-relaxed">{f.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-py bg-charcoal-800 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label justify-center text-sandstone-400">Need More Detail?</div>
            <h2 className="font-serif text-display-md text-white mt-3 mb-5">
              Talk to our team about <span className="text-sandstone-300">enterprise terms.</span>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              For NRI engagements, multi-stakeholder developments, and projects with specific
              data-residency or audit-cycle requirements, we can share a more detailed security
              brief on request.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-bronze">Request Security Brief</Link>
              <Link href="/hsi-os" className="btn btn-outline-white">Explore Our Platform</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
