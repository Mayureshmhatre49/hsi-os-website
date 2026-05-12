import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'

const PAGE_URL = 'https://www.hsios.in/security'

export const metadata: Metadata = {
  title: 'Security & Trust — How HSIOS™ Protects Your Project',
  description:
    'Per-tenant isolation, refresh-token rotation with theft detection, role-based AI context, encrypted backups, and a documented audit trail. Enterprise-grade hygiene for premium interior execution.',
  alternates: getAlternates('/security'),
  openGraph: {
    title: 'Security & Trust — HSIOS™',
    description:
      'How HSIOS™ protects your project data: per-tenant isolation, refresh-token rotation, role-based AI sanitisation, encrypted backups, and a documented audit trail.',
    url: PAGE_URL,
  },
}

const principles = [
  {
    title: 'Per-Tenant Isolation',
    desc: 'Every query, every event, every Socket.io broadcast is scoped to your tenant. Cross-tenant access returns 404 (never leaks existence). Verified at middleware, service, and socket layers — three independent checks, not one.',
  },
  {
    title: 'Refresh-Token Rotation',
    desc: 'Each refresh issues a fresh token and burns the previous one. Reuse of an already-rotated token revokes the entire token family — a strong signal that a session was stolen. Reused tokens trigger an immediate logout and security notification.',
  },
  {
    title: 'Role-Based AI Sanitisation',
    desc: 'AI Co-Pilot context is filtered by your role before any prompt reaches a model. Homeowner prompts cannot surface vendor markups. Vendor prompts cannot extract internal financials. The model only sees what your role is permitted to see.',
  },
  {
    title: 'Encrypted Daily Backups',
    desc: 'Custom-format pg_dump runs daily with structural verification. Archived to a separate region, retention-pruned automatically, and validated for restorability — backups that are not restorable are not backups.',
  },
  {
    title: 'Documented Audit Trail',
    desc: 'Every state change is captured in an immutable event log — approvals, change orders, vendor swaps, snags, sign-offs. 180-day retention by default, exportable on demand. Auditors get a structured paper trail, not a chat history.',
  },
  {
    title: 'Per-Request CSP Nonce',
    desc: 'Every page response is served with a unique per-request Content Security Policy nonce. Inline scripts that did not originate from HSIOS™ cannot execute. Mitigates an entire class of script-injection attacks at the browser level.',
  },
]

const operational = [
  {
    title: 'HTTPS-only with HSTS preload',
    desc: 'Strict Transport Security with 2-year max-age, includeSubDomains, and preload. HTTP traffic is rejected before the application ever sees the request.',
  },
  {
    title: 'Rate limiting per identity',
    desc: '500 requests per 15 minutes globally, 30 AI requests per 10 minutes per user. Protects platform availability without throttling legitimate work.',
  },
  {
    title: 'Email + OTP verification',
    desc: 'Verification tokens are single-use, time-bound, and rate-limited. Forgot-password and resend-verification flows never confirm whether an email exists — no enumeration leak.',
  },
  {
    title: 'Mass-assignment guard',
    desc: 'Patch endpoints use explicit field allowlists. A request body cannot promote a user, change a project\'s tenant, or overwrite an audit field — even if the field is present in the JSON.',
  },
  {
    title: 'Field-level immutability',
    desc: 'Document file URLs and version numbers are write-once after creation. To version a document, you create a new record — you do not overwrite the original. The audit trail is preserved by design.',
  },
  {
    title: 'OTP fail-closed in production',
    desc: 'Vendor and Client portals refuse to accept any developer-mode OTP in production environments unless an explicit override env var is set. Dev convenience never leaks into prod.',
  },
]

const faqs = [
  {
    q: 'Where is my project data stored?',
    a: 'On a Linux VPS in a region of your choosing. The database runs locally on the host with SSL-required connections. Backups are encrypted before leaving the host. Object storage (uploads) is on the same infrastructure — no third-party cloud handles your photos or documents.',
  },
  {
    q: 'Who can see my financials?',
    a: 'Only roles that are explicitly authorised: Founder, Admin, Project Manager, and Finance Manager see raw cost data. Client and Vendor roles see aggregated bands (e.g. "1–2 Cr range", "70-80% spent") — never raw vendor invoices, markups, or internal notes. The AI Co-Pilot enforces the same boundary.',
  },
  {
    q: 'What happens if my login is compromised?',
    a: 'Refresh tokens are family-tracked. If a stolen token is replayed, the entire family is revoked instantly and the legitimate user is logged out with a "Session reuse detected" message. You then re-authenticate fresh, which invalidates the stolen credentials.',
  },
  {
    q: 'Is the AI Co-Pilot a privacy risk?',
    a: 'No. Project context is sanitised by role before any prompt reaches the AI provider. A Client-role prompt cannot extract financials the Client was never shown. A Vendor-role prompt cannot reach another vendor\'s data. The sanitisation runs server-side; there is no client-side path to bypass it.',
  },
  {
    q: 'Do you retain my project data forever?',
    a: 'Event logs are pruned after 180 days by default — retention is tunable per tenant. Refresh tokens are pruned 14 days after expiry. Project records use a soft-delete archive flag so historical data is recoverable; nothing is hard-deleted without explicit action.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. Project records, BOQ items, execution logs, audit trail, and uploaded documents are all exportable on demand. The platform stores your data in your project — not against your project. Portability is a first-class concern, not an afterthought.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Security & Trust — How HSIOS™ Protects Your Project',
  description:
    'Per-tenant isolation, refresh-token rotation with theft detection, role-based AI sanitisation, encrypted backups, and a documented audit trail.',
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
              Six engineering primitives that work together to keep your data isolated, your
              decisions auditable, and your AI assistance privacy-respecting.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map(({ title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.05}>
                <div className="h-full p-7 rounded-2xl bg-white border border-ivory-300">
                  <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-sandstone-600 mb-3">
                    {`Principle 0${i + 1}`}
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL CONTROLS ── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-12">
            <div className="section-label text-sandstone-400">Operational Controls</div>
            <h2 className="font-serif text-display-lg text-white mt-2 mb-5">
              Hardening, all the way <em className="not-italic text-sandstone-300">down the stack.</em>
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed">
              Six concrete controls applied at the transport, application, and storage layers.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {operational.map(({ title, desc }) => (
              <RevealOnScroll key={title}>
                <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/8">
                  <h3 className="font-serif text-base text-white mb-2 leading-snug">{title}</h3>
                  <p className="text-warmgray-300 text-xs leading-relaxed">{desc}</p>
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
              <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
