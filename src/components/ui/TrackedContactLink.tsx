'use client'

import { analytics } from '@/lib/analytics'

type Props = {
  href: string
  kind: 'whatsapp' | 'phone' | 'email'
  /** Where on the site the click came from, e.g. "contact-hero". */
  source: string
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

/**
 * A contact link (wa.me / tel: / mailto:) that reports the click to GA4.
 * Lets server components keep their markup while still measuring the
 * enquiries that now arrive by WhatsApp and phone instead of a form.
 */
export default function TrackedContactLink({ href, kind, source, className, children, ...rest }: Props) {
  const external = kind === 'whatsapp'
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={() => {
        if (kind === 'whatsapp') analytics.whatsappClick(source)
        else if (kind === 'phone') analytics.phoneClick(source)
        else analytics.ctaClick('email', source)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
