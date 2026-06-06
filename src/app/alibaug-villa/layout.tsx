import type { Metadata } from 'next'
import { getAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Build Your Luxury Villa in Alibaug | Hestia Villas',
  description:
    'Architecture, construction, interiors, and Digital Twin — one integrated ecosystem for discerning villa owners in Alibaug. Backed by HSI OS. Book a private consultation.',
  alternates: getAlternates('/alibaug-villa'),
  openGraph: {
    type: 'website',
    url: 'https://www.hsios.in/alibaug-villa',
    title: 'Monsoon-Proof Villa Delivery in Alibaug | Hestia Villas',
    description:
      'Build your Alibag luxury villa without the chaos. Monsoon-proof execution, marine-grade materials, real-time visibility, zero surprises. 7 villas delivered. See how.',
    images: [
      {
        url: 'https://www.hsios.in/projects-casa-frangipani-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Casa Frangipani — ₹2.8Cr luxury villa, delivered 3 weeks early',
      },
    ],
    siteName: 'Hestia Smart Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@hestiavillas',
    title: 'Monsoon-Proof Villa Execution in Alibaug',
    description: 'Delivered 3 weeks early. Zero cost overruns. Zero rework. See Casa Frangipani case study →',
    images: ['https://www.hsios.in/projects-casa-frangipani-1.jpg'],
  },
}

export default function AlibaugVillaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
