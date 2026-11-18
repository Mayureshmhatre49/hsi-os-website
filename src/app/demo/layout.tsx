import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Demo | HSIOS™',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
