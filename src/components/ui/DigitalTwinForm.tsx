'use client'

import { useState, useEffect, useCallback } from 'react'
import { analytics } from '@/lib/analytics'

type Mode = 'early-access' | 'walkthrough'

const MODES: Record<Mode, { tab: string; heading: string; intro: string; submit: string }> = {
  'early-access': {
    tab: 'Early Access',
    heading: 'Join early access',
    intro: 'For villas and second homes not built by HSI. We are onboarding standalone homes in stages and will contact you when your area opens.',
    submit: 'Join Early Access →',
  },
  walkthrough: {
    tab: 'HSI Clients',
    heading: 'Book a walkthrough',
    intro: 'Already building or living in an HSI villa? We will walk you through what your home’s Digital Twin will contain — in person or over video.',
    submit: 'Book a Walkthrough →',
  },
}

const homesOptions = ['1 home', '2–3 homes', '4 or more homes', 'I manage homes for others']

type FormState = {
  name: string
  email: string
  phone: string
  location: string
  homes: string
  hsiProject: string
  message: string
  honeypot: string
}

const initialForm: FormState = {
  name: '', email: '', phone: '', location: '', homes: '', hsiProject: '', message: '', honeypot: '',
}

/* Hero and card CTAs link to #get-access or #walkthrough — pick the matching tab. */
function modeFromHash(): Mode | null {
  if (typeof window === 'undefined') return null
  if (window.location.hash === '#walkthrough') return 'walkthrough'
  if (window.location.hash === '#get-access') return 'early-access'
  return null
}

export default function DigitalTwinForm() {
  const [mode, setMode] = useState<Mode>('early-access')
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const sync = () => { const m = modeFromHash(); if (m) setMode(m) }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.honeypot) return

    if (!form.name || !form.email || !form.location) {
      setStatus('error')
      setErrorMsg('Please fill in your name, email and the home’s location.')
      return
    }

    setStatus('sending')
    setErrorMsg('')

    const details = mode === 'walkthrough'
      ? `HSI project: ${form.hsiProject || 'not given'}`
      : `Homes: ${form.homes || 'not given'}`

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interest: 'digital-twin',
          name: form.name,
          email: form.email,
          phone: form.phone,
          location: form.location,
          projectType: mode === 'walkthrough' ? 'Digital Twin — Walkthrough (HSI client)' : 'Digital Twin — Early Access',
          message: `${details}\n\n${form.message || '(no message)'}`,
          honeypot: form.honeypot,
        }),
      })
      const data = await res.json() as { ok?: boolean; error?: string }
      if (res.ok && data.ok) {
        analytics.twinEnquiry(mode)
        analytics.formSubmit(`digital-twin-${mode}`)
        setStatus('success')
        setForm(initialForm)
      } else {
        throw new Error(data.error ?? 'Submission failed')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const copy = MODES[mode]

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury border border-ivory-200 text-center">
        <div className="w-14 h-14 rounded-full bg-sandstone-100 text-sandstone-700 flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
        <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-3">Thank you — we have it.</h3>
        <p className="text-warmgray-600 leading-relaxed mb-6">
          {mode === 'walkthrough'
            ? 'We will be in touch within 24 hours to schedule your walkthrough.'
            : 'You are on the early-access list. We will contact you when onboarding opens for your area.'}
        </p>
        <button onClick={() => setStatus('idle')} className="text-sm font-semibold text-sandstone-600 hover:text-sandstone-800">
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury border border-ivory-200">
      {/* Mode switch */}
      <div role="tablist" aria-label="Enquiry type" className="inline-flex p-1 rounded-full bg-ivory-100 border border-ivory-300 mb-8">
        {(Object.keys(MODES) as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => { setMode(m); setStatus('idle') }}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              mode === m ? 'bg-charcoal-800 text-white' : 'text-warmgray-600 hover:text-charcoal-800'
            }`}
          >
            {MODES[m].tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-2">{copy.heading}</h3>
        <p className="text-warmgray-500 text-sm mb-8 leading-relaxed">{copy.intro}</p>

        <input
          type="text" name="honeypot" value={form.honeypot} onChange={handleChange}
          className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="dt-name" className="form-label">Full Name *</label>
            <input id="dt-name" name="name" type="text" required autoComplete="name"
              value={form.name} onChange={handleChange} className="form-input" />
          </div>
          <div>
            <label htmlFor="dt-email" className="form-label">Email *</label>
            <input id="dt-email" name="email" type="email" required autoComplete="email"
              value={form.email} onChange={handleChange} className="form-input" />
          </div>
          <div>
            <label htmlFor="dt-phone" className="form-label">Phone / WhatsApp</label>
            <input id="dt-phone" name="phone" type="tel" autoComplete="tel"
              value={form.phone} onChange={handleChange} className="form-input" />
          </div>
          <div>
            <label htmlFor="dt-location" className="form-label">Where is the home? *</label>
            <input id="dt-location" name="location" type="text" required placeholder="e.g. Alibag, Lonavala, Goa"
              value={form.location} onChange={handleChange} className="form-input" />
          </div>

          {mode === 'walkthrough' ? (
            <div className="sm:col-span-2">
              <label htmlFor="dt-project" className="form-label">Your HSI project</label>
              <input id="dt-project" name="hsiProject" type="text" placeholder="Villa or project name"
                value={form.hsiProject} onChange={handleChange} className="form-input" />
            </div>
          ) : (
            <div className="sm:col-span-2">
              <label htmlFor="dt-homes" className="form-label">How many homes?</label>
              <select id="dt-homes" name="homes" value={form.homes} onChange={handleChange} className="form-input">
                <option value="">Select</option>
                {homesOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          )}

          <div className="sm:col-span-2">
            <label htmlFor="dt-message" className="form-label">Anything we should know?</label>
            <textarea id="dt-message" name="message" rows={3}
              value={form.message} onChange={handleChange} className="form-input resize-none" />
          </div>
        </div>

        {status === 'error' && (
          <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
            {errorMsg || 'Something went wrong. Please try WhatsApp or email directly.'}
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn btn-bronze disabled:opacity-60 disabled:cursor-not-allowed text-base px-10 py-4"
          >
            {status === 'sending' ? 'Sending…' : copy.submit}
          </button>
          <p className="text-xs text-warmgray-600 self-center">
            HSI will use these details only to respond to this enquiry.
          </p>
        </div>
      </form>
    </div>
  )
}
