import type { Metadata } from 'next'
import { getAlternates, breadcrumb } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'

export const metadata: Metadata = {
  title: 'Contact — Book a Private Consultation',
  description:
    'WhatsApp, call or visit Hestia Smart Interiors — offices in Alibag and Pune. A member of our team usually replies on WhatsApp within 2 hours.',
  alternates: getAlternates('/contact'),
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Hestia Smart Interiors',
  url: 'https://www.hsios.in/contact',
  description: 'Book a private consultation with Hestia Smart Interiors for luxury interior execution.',
  mainEntity: { '@id': 'https://www.hsios.in/#business' },
}

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in' },
  { name: 'Contact', url: 'https://www.hsios.in/contact' },
])

export default async function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[contactPageSchema, breadcrumbSchema]} />
      {children}
    </>
  )
}
