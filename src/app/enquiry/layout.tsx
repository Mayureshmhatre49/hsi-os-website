import type { Metadata } from 'next'
import { getAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Start Your Consultation | Hestia Smart Interiors',
  description:
    'Begin your luxury interior project. Tell us about your apartment, villa, or holiday home in Mumbai, Alibag, and beyond, and configure your consultation.',
  alternates: getAlternates('/enquiry'),
  openGraph: {
    type: 'website',
    url: 'https://www.hsios.in/enquiry',
    title: 'Private Consultation Request | Hestia Smart Interiors',
    description:
      'Qualify your luxury residential interior project. Precision execution, milestone-verified outcomes, and complete design-to-delivery fidelity.',
    images: [
      {
        url: 'https://www.hsios.in/projects-casa-frangipani-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Hestia Smart Interiors — Luxury Villa Execution',
      },
    ],
    siteName: 'Hestia Smart Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultation Request | Hestia Smart Interiors',
    description:
      'Tell us about your property and planning timeline. Premium residential interiors powered by HSIOS™.',
    images: ['https://www.hsios.in/projects-casa-frangipani-1.jpg'],
  },
}

export default function EnquiryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
