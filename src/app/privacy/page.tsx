import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hestia Smart Interiors',
  description: 'Privacy Policy for Hestia Smart Interiors and HSIOS™ — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.hsios.in/privacy' },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <div className="bg-ivory-50 min-h-screen">
      <div className="container-luxury max-w-3xl py-24">

        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-warmgray-500 hover:text-charcoal-800 transition-colors mb-8">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
          <div className="section-label">Legal</div>
          <h1 className="font-serif text-display-md text-charcoal-800 mt-4 mb-3">Privacy Policy</h1>
          <p className="text-warmgray-500 text-sm">Last updated: April 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-10 text-warmgray-700">

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">1. Who We Are</h2>
            <p className="text-sm leading-relaxed">
              Hestia Smart Interiors (&ldquo;HSI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website
              <strong> www.hsios.in</strong> and provides luxury interior execution services powered by the HSIOS™
              platform. Our registered address is in Alibag, Maharashtra, India.
              Contact: <a href="mailto:hello@hsios.in" className="text-sandstone-700 hover:text-sandstone-900 underline">hello@hsios.in</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">2. Information We Collect</h2>
            <p className="text-sm leading-relaxed mb-3">We collect information you provide directly, including:</p>
            <ul className="text-sm space-y-2 list-none pl-0">
              {[
                'Name, email address, phone number when you submit a contact or enquiry form',
                'Project details (type, location, budget range) you share with us',
                'Communications sent via WhatsApp, email, or our website forms',
                'IP address, browser type, and pages visited (via standard server logs and analytics)',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-sm leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="text-sm space-y-2 list-none pl-0">
              {[
                'Respond to your enquiries and schedule consultations',
                'Provide and manage our interior execution services',
                'Send project updates, proposals, and relevant communications',
                'Improve our website and services through analytics',
                'Comply with legal obligations',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed mt-4">
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">4. Data Storage and Security</h2>
            <p className="text-sm leading-relaxed">
              Your data is stored securely on servers located in India. We implement
              industry-standard technical and organisational measures to protect your personal
              information against unauthorised access, disclosure, or destruction.
              Form submissions are transmitted over HTTPS encryption.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">5. Cookies and Analytics</h2>
            <p className="text-sm leading-relaxed">
              Our website uses cookies and Google Analytics (GA4) to understand how visitors
              use our site. Analytics data is anonymised and aggregated. You may disable
              cookies through your browser settings, though some site functionality may be affected.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">6. Third-Party Services</h2>
            <p className="text-sm leading-relaxed">
              We use the following third-party services which may process your data under
              their own privacy policies: Google Analytics (analytics), WhatsApp Business (messaging).
              We are not responsible for the privacy practices of these third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">7. Your Rights</h2>
            <p className="text-sm leading-relaxed mb-3">You have the right to:</p>
            <ul className="text-sm space-y-2 list-none pl-0">
              {[
                'Request access to the personal data we hold about you',
                'Request correction of inaccurate or incomplete data',
                'Request deletion of your personal data',
                'Withdraw consent for marketing communications at any time',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed mt-4">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:hello@hsios.in" className="text-sandstone-700 hover:text-sandstone-900 underline">hello@hsios.in</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">8. Data Retention</h2>
            <p className="text-sm leading-relaxed">
              We retain your personal information for as long as necessary to provide our
              services and comply with legal obligations — typically no longer than 7 years
              for business records. Enquiry data from non-clients is deleted after 12 months
              of inactivity.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">9. Changes to This Policy</h2>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. Material changes will be
              communicated via our website. The &ldquo;Last updated&rdquo; date at the top of this page
              reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">10. Contact Us</h2>
            <p className="text-sm leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices,
              please contact us at{' '}
              <a href="mailto:hello@hsios.in" className="text-sandstone-700 hover:text-sandstone-900 underline">hello@hsios.in</a>{' '}
              or call +91-8010234802.
            </p>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-ivory-300 flex flex-wrap items-center gap-6">
          <Link href="/" className="text-sm text-warmgray-500 hover:text-charcoal-800 transition-colors">Home</Link>
          <Link href="/terms" className="text-sm text-warmgray-500 hover:text-charcoal-800 transition-colors">Terms of Service</Link>
          <Link href="/contact" className="text-sm text-warmgray-500 hover:text-charcoal-800 transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  )
}
