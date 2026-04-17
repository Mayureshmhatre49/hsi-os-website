'use client'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

type GTagEvent = {
  action: string
  category: string
  label?: string
  value?: number
  [key: string]: unknown
}

function gtag(command: string, ...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(command, ...args)
  }
}

export function trackEvent({ action, category, label, value, ...rest }: GTagEvent) {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  })
}

export const analytics = {
  ctaClick: (label: string, destination?: string) =>
    trackEvent({ action: 'cta_click', category: 'engagement', label, destination }),

  whatsappClick: (source: string) =>
    trackEvent({ action: 'whatsapp_click', category: 'contact', label: source }),

  formSubmit: (formName: string) =>
    trackEvent({ action: 'form_submit', category: 'conversion', label: formName }),

  formStart: (formName: string) =>
    trackEvent({ action: 'form_start', category: 'engagement', label: formName }),

  phoneClick: (source: string) =>
    trackEvent({ action: 'phone_click', category: 'contact', label: source }),

  scrollDepth: (percent: number, page: string) =>
    trackEvent({ action: 'scroll_depth', category: 'engagement', label: page, value: percent }),

  projectView: (projectName: string) =>
    trackEvent({ action: 'project_view', category: 'content', label: projectName }),

  demoRequest: (source: string) =>
    trackEvent({ action: 'demo_request', category: 'conversion', label: source }),

  navClick: (label: string) =>
    trackEvent({ action: 'nav_click', category: 'navigation', label }),
}
