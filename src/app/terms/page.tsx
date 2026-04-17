import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Hestia Smart Interiors',
  description: 'Terms of Service for Hestia Smart Interiors and HSIOS™ — the terms governing use of our website and services.',
  alternates: { canonical: 'https://www.hsios.in/terms' },
  robots: { index: false },
}

export default function TermsPage() {
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
          <h1 className="font-serif text-display-md text-charcoal-800 mt-4 mb-3">Terms of Service</h1>
          <p className="text-warmgray-500 text-sm">Last updated: April 2026</p>
        </div>

        <div className="space-y-10 text-warmgray-700">

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed">
              By accessing or using the website at <strong>www.hsios.in</strong> (&ldquo;Site&rdquo;) or engaging
              the services of Hestia Smart Interiors (&ldquo;HSI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you agree to be
              bound by these Terms of Service. If you do not agree to these terms, please
              do not use our Site or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">2. Services</h2>
            <p className="text-sm leading-relaxed">
              Hestia Smart Interiors provides luxury interior execution services for
              residential and hospitality projects in India, powered by the HSIOS™ platform.
              Our services include project management, procurement, quality supervision,
              and post-handover lifecycle support. Specific scope, timelines, and costs
              are defined in individual service agreements signed with each client.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">3. Website Use</h2>
            <p className="text-sm leading-relaxed mb-3">
              This Site is provided for informational purposes. You agree not to:
            </p>
            <ul className="text-sm space-y-2 list-none pl-0">
              {[
                'Use the Site for any unlawful purpose or in any way that could harm HSI or third parties',
                'Reproduce, distribute, or commercially exploit Site content without written permission',
                'Attempt to gain unauthorised access to any part of the Site or its systems',
                'Submit false or misleading information through any forms on the Site',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">4. Enquiries and Consultations</h2>
            <p className="text-sm leading-relaxed">
              Submitting an enquiry form or requesting a consultation does not constitute
              a binding service agreement. A formal engagement begins only upon execution
              of a written service agreement between you and Hestia Smart Interiors.
              We reserve the right to decline any enquiry at our discretion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">5. Intellectual Property</h2>
            <p className="text-sm leading-relaxed">
              All content on this Site — including text, images, logos, the HSIOS™ brand name,
              design systems, and project photography — is the intellectual property of
              Hestia Smart Interiors or its licensors. No content may be reproduced or
              used without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">6. Project Photography and Case Studies</h2>
            <p className="text-sm leading-relaxed">
              Project photographs and case studies displayed on this Site are used with
              permission from the respective property owners. Client names are
              partially anonymised to protect privacy unless explicit written consent
              for full attribution has been obtained.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-sm leading-relaxed">
              This Site and its content are provided &ldquo;as is&rdquo; without warranties of any
              kind, express or implied. HSI does not warrant that the Site will be
              uninterrupted, error-free, or free of viruses. Project outcomes are
              governed by individual service agreements and are not guaranteed by
              content on this Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              To the fullest extent permitted by applicable law, Hestia Smart Interiors
              shall not be liable for any indirect, incidental, or consequential damages
              arising from your use of this Site. Our total liability for any claim
              arising from Site use shall not exceed ₹10,000.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">9. Third-Party Links</h2>
            <p className="text-sm leading-relaxed">
              This Site may contain links to third-party websites including
              <strong> hestiavillas.in</strong> and external case study pages.
              We are not responsible for the content, privacy practices, or accuracy
              of third-party sites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">10. Governing Law</h2>
            <p className="text-sm leading-relaxed">
              These Terms are governed by the laws of India. Any disputes arising
              from these Terms or your use of the Site shall be subject to the
              exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">11. Changes to These Terms</h2>
            <p className="text-sm leading-relaxed">
              We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date
              reflects the most recent revision. Continued use of the Site after
              changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-charcoal-800 mb-4">12. Contact</h2>
            <p className="text-sm leading-relaxed">
              Questions about these Terms?
              Email us at{' '}
              <a href="mailto:hello@hsios.in" className="text-sandstone-700 hover:text-sandstone-900 underline">hello@hsios.in</a>{' '}
              or call +91-8010234802.
            </p>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-ivory-300 flex flex-wrap items-center gap-6">
          <Link href="/" className="text-sm text-warmgray-500 hover:text-charcoal-800 transition-colors">Home</Link>
          <Link href="/privacy" className="text-sm text-warmgray-500 hover:text-charcoal-800 transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="text-sm text-warmgray-500 hover:text-charcoal-800 transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  )
}
