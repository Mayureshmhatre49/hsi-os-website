'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function sendToGA(metric: { name: string; value: number; id: string }) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    non_interaction: true,
  })
}

export default function WebVitals() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(sendToGA)
      onINP(sendToGA)
      onFCP(sendToGA)
      onLCP(sendToGA)
      onTTFB(sendToGA)
    }).catch(() => {
      // web-vitals not available — silently skip
    })
  }, [pathname])

  return null
}
