'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const projectTypes = [
  'Villa — Full Turnkey Interior',
  'Premium Apartment',
  'Holiday Home / Farmhouse',
  'Luxury Renovation',
  'Penthouse',
  'Developer Project / Sample Villa',
  'Boutique Hospitality',
  'Other',
]

const locations = [
  'Alibag', 'Mumbai', 'Pune', 'Goa', 'Bangalore',
  'Karjat / Lonavala', 'NRI — Managing Remotely', 'Other',
]

const budgetRanges = [
  '₹25 – 50 Lakhs',
  '₹50 Lakhs – 1 Crore',
  '₹1 – 2 Crore',
  '₹2 – 5 Crore',
  '₹5 Crore+',
  'Not yet determined',
]

interface FormState {
  name: string
  email: string
  phone: string
  projectType: string
  location: string
  budget: string
  message: string
  honeypot: string // anti-spam
}

const initialForm: FormState = {
  name: '', email: '', phone: '', projectType: '',
  location: '', budget: '', message: '', honeypot: '',
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (form.honeypot) return

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json() as { ok?: boolean; error?: string }
      if (res.ok && data.ok) {
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

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="py-32 bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-xl">
              <div className="section-label text-sandstone-400">Let&apos;s Talk</div>
              <h1 className="font-serif text-display-xl text-white mb-5">
                Book Your<br />
                <em className="not-italic text-sandstone-300">Private Consultation.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed">
                Share your project vision with us. We will come back to you within 24 hours
                to schedule a call and show you exactly how HSI would work for your home.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Info Column */}
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <div className="space-y-8 lg:sticky lg:top-28">
                  <div>
                    <h2 className="font-serif text-display-sm text-charcoal-800 mb-4">
                      We Would Love to Hear About Your Project.
                    </h2>
                    <p className="text-warmgray-600 leading-relaxed">
                      Whether it is a villa in Alibag, an apartment in Mumbai or a holiday
                      home you are planning from abroad — let us show you what is possible.
                    </p>
                  </div>

                  {/* Contact blocks */}
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27d%20like%20to%20book%20a%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 hover:shadow-card transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 text-xl">
                        💬
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-0.5">WhatsApp</div>
                        <div className="font-semibold text-charcoal-800 group-hover:text-sandstone-700 transition-colors">+91-8010234802</div>
                        <div className="text-xs text-warmgray-500">Typically replies within 2 hours</div>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@hsios.in"
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 hover:shadow-card transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-sandstone-50 flex items-center justify-center flex-shrink-0 text-xl">
                        ✉️
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-0.5">Email</div>
                        <div className="font-semibold text-charcoal-800 group-hover:text-sandstone-700 transition-colors">hello@hsios.in</div>
                        <div className="text-xs text-warmgray-500">We respond within 24 hours</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-ivory-300">
                      <div className="w-11 h-11 rounded-xl bg-sandstone-50 flex items-center justify-center flex-shrink-0 text-xl">
                        📍
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-0.5">We Serve</div>
                        <div className="font-semibold text-charcoal-800">Alibag · Mumbai · Pune · Goa</div>
                        <div className="text-xs text-warmgray-500">And beyond — NRI projects welcome</div>
                      </div>
                    </div>
                  </div>

                  {/* Trust note */}
                  <div className="p-5 rounded-2xl bg-sandstone-50 border border-sandstone-200">
                    <p className="text-sm text-warmgray-700 leading-relaxed">
                      <span className="font-semibold text-charcoal-800">No pressure, no sales pitch.</span>{' '}
                      Our first call is purely to understand your project and share whether HSI
                      would be a good fit. We only take on projects where we can deliver genuine value.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <RevealOnScroll delay={0.1}>
                <div className="bg-white rounded-4xl p-10 border border-ivory-300 shadow-luxury">

                  {status === 'success' ? (
                    <div className="text-center py-16">
                      <div className="text-6xl mb-6">🙏</div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-3">
                        Thank You — We&apos;ll Be in Touch.
                      </h3>
                      <p className="text-warmgray-600 leading-relaxed mb-8 max-w-sm mx-auto">
                        We&apos;ve received your enquiry and will reach out within 24 hours
                        to schedule your consultation.
                      </p>
                      <a
                        href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27ve%20just%20submitted%20an%20enquiry%20via%20your%20website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-bronze"
                      >
                        Message Us on WhatsApp
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <h2 className="font-serif text-2xl font-bold text-charcoal-800 mb-2">
                        Tell Us About Your Project
                      </h2>
                      <p className="text-warmgray-500 text-sm mb-8">
                        All fields marked * are required. Your information is kept strictly private.
                      </p>

                      {/* Honeypot — hidden from humans */}
                      <input
                        type="text"
                        name="honeypot"
                        value={form.honeypot}
                        onChange={handleChange}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />

                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="sm:col-span-2">
                          <label htmlFor="name" className="form-label">Full Name *</label>
                          <input
                            id="name" type="text" name="name"
                            value={form.name} onChange={handleChange}
                            placeholder="Your full name"
                            required className="form-input"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="form-label">Email Address *</label>
                          <input
                            id="email" type="email" name="email"
                            value={form.email} onChange={handleChange}
                            placeholder="hello@example.com"
                            required className="form-input"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
                          <input
                            id="phone" type="tel" name="phone"
                            value={form.phone} onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="form-input"
                          />
                        </div>

                        {/* Project Type */}
                        <div>
                          <label htmlFor="projectType" className="form-label">Project Type *</label>
                          <select
                            id="projectType" name="projectType"
                            value={form.projectType} onChange={handleChange}
                            required className="form-input"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>

                        {/* Location */}
                        <div>
                          <label htmlFor="location" className="form-label">Project Location *</label>
                          <select
                            id="location" name="location"
                            value={form.location} onChange={handleChange}
                            required className="form-input"
                          >
                            <option value="">Select location</option>
                            {locations.map((l) => (
                              <option key={l} value={l}>{l}</option>
                            ))}
                          </select>
                        </div>

                        {/* Budget */}
                        <div className="sm:col-span-2">
                          <label htmlFor="budget" className="form-label">Approximate Budget</label>
                          <select
                            id="budget" name="budget"
                            value={form.budget} onChange={handleChange}
                            className="form-input"
                          >
                            <option value="">Select a range (optional)</option>
                            {budgetRanges.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                          <label htmlFor="message" className="form-label">Project Description *</label>
                          <textarea
                            id="message" name="message"
                            value={form.message} onChange={handleChange}
                            placeholder="Tell us about your property, your vision and any specific requirements..."
                            required rows={5}
                            className="form-input resize-none"
                          />
                        </div>
                      </div>

                      {/* Error */}
                      {status === 'error' && (
                        <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                          {errorMsg || 'Something went wrong. Please try WhatsApp or email directly.'}
                        </div>
                      )}

                      {/* Submit */}
                      <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="btn btn-bronze disabled:opacity-60 disabled:cursor-not-allowed text-base px-10 py-4"
                        >
                          {status === 'sending' ? 'Sending…' : 'Send Enquiry →'}
                        </button>
                        <p className="text-xs text-warmgray-400 self-center">
                          By submitting, you agree that HSI may contact you about your enquiry.
                          We never share your data.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ QUICK ─────────────────────────────────────── */}
      <section className="py-20 bg-ivory-200">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="section-label">Quick Answers</div>
            <h2 className="font-serif text-display-sm text-charcoal-800 mb-10">
              Common Questions Before You Reach Out
            </h2>
          </RevealOnScroll>
          <div className="space-y-4">
            {[
              {
                q: 'Do I need to have a design already?',
                a: 'No. We can work with your existing architect or designer, or help you coordinate one. We are execution specialists — we work with whatever stage you are at.',
              },
              {
                q: 'Can you manage a project remotely if I am an NRI?',
                a: 'Absolutely. HSIOS™ was built with remote management in mind. You will have full visibility via your dashboard — and we keep you updated at every key milestone.',
              },
              {
                q: 'What is the minimum project size you work with?',
                a: 'We focus on premium residential projects — typically ₹25 Lakhs and above. Our process is designed for projects where structure and quality genuinely matter.',
              },
            ].map(({ q, a }) => (
              <RevealOnScroll key={q}>
                <div className="p-7 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 transition-colors">
                  <h3 className="font-serif font-bold text-charcoal-800 mb-2">{q}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll className="mt-8">
            <Link href="/insights" className="text-sm font-semibold text-sandstone-600 hover:text-sandstone-800 flex items-center gap-2 transition-colors">
              More questions answered in our Insights →
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
