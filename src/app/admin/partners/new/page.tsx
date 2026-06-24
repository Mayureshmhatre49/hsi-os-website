'use client'

import { useState } from 'react'
import AdminShell from '@/components/admin/AdminShell'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function NewPartnerPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', payment_per_lead: '' })
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [result, setResult]     = useState<{
    partner: { name: string; email: string }
    link: { code: string; qr_data_url: string }
    referralUrl: string
    tempPassword: string | null
  } | null>(null)
  const [copied, setCopied] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/partners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, payment_per_lead: parseInt(form.payment_per_lead) || 0 }),
    })
    const data = await res.json()
    if (!res.ok) { setError(data.error ?? 'Failed to create partner.'); setLoading(false); return }
    setResult(data)
    setLoading(false)
  }

  function copyUrl() {
    if (!result) return
    navigator.clipboard.writeText(result.referralUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function downloadQR() {
    if (!result) return
    const a = document.createElement('a')
    a.href = result.link.qr_data_url
    a.download = `qr-${result.link.code}.png`
    a.click()
  }

  if (result) {
    return (
      <AdminShell>
        <div className="max-w-lg space-y-6">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push('/admin/partners')} className="text-warmgray-500 hover:text-charcoal-800">
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-xl font-bold text-charcoal-800">Partner Created</h1>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-sm text-green-800 font-semibold">
            ✓ {result.partner.name} has been registered successfully.
          </div>

          <div className="bg-white rounded-2xl border border-ivory-300 p-6 space-y-5">
            <div>
              <div className="form-label mb-1">Referral URL</div>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-xs bg-ivory-100 border border-ivory-200 px-3 py-2 rounded-lg font-mono text-sandstone-700 truncate">
                  {result.referralUrl}
                </code>
                <button onClick={copyUrl} className="btn btn-outline-warm text-xs py-2 px-3 flex-shrink-0 flex items-center gap-1">
                  {copied ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy</>}
                </button>
              </div>
            </div>

            <div>
              <div className="form-label mb-2">QR Code</div>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="border border-ivory-200 rounded-xl p-3 bg-ivory-50">
                  <Image src={result.link.qr_data_url} alt="QR Code" width={160} height={160} />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-warmgray-500">Share this QR code for offline/print use.</p>
                  <button onClick={downloadQR} className="btn btn-bronze text-xs py-2 px-5 shadow-bronze">
                    Download QR
                  </button>
                </div>
              </div>
            </div>

            {result.tempPassword && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs space-y-1">
                <div className="font-bold text-amber-800">Partner Login Credentials</div>
                <div className="text-amber-700">Email: <strong>{result.partner.email}</strong></div>
                <div className="text-amber-700">Temp Password: <strong className="font-mono">{result.tempPassword}</strong></div>
                <div className="text-amber-600 mt-1">Share these with the partner. They can change their password after first login.</div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button onClick={() => router.push('/admin/partners/new')} className="btn btn-outline-warm text-xs py-2.5 px-5">
              Add Another
            </button>
            <Link href="/admin/partners" className="btn btn-dark text-xs py-2.5 px-5">
              Back to Partners
            </Link>
          </div>
        </div>
      </AdminShell>
    )
  }

  return (
    <AdminShell>
      <div className="max-w-lg space-y-6">
        <div className="flex items-center gap-3">
          <Link href="/admin/partners" className="text-warmgray-500 hover:text-charcoal-800">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-charcoal-800">New Partner</h1>
            <p className="text-xs text-warmgray-500 mt-0.5">A unique referral link + QR will be generated automatically.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-ivory-300 p-6 space-y-5">
          {[
            { id: 'name',    label: 'Full Name *',         placeholder: 'e.g. Rahul Mehta',              type: 'text' },
            { id: 'email',   label: 'Email Address *',     placeholder: 'rahul@example.com',             type: 'email' },
            { id: 'phone',   label: 'Phone Number *',      placeholder: '+91 98765 43210',               type: 'tel' },
            { id: 'company', label: 'Company / Agency',    placeholder: 'Optional',                      type: 'text' },
          ].map(({ id, label, placeholder, type }) => (
            <div key={id}>
              <label htmlFor={id} className="form-label">{label}</label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={form[id as keyof typeof form]}
                onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                className="form-input"
              />
            </div>
          ))}

          <div>
            <label htmlFor="payment_per_lead" className="form-label">Payment Per Lead (₹)</label>
            <input
              id="payment_per_lead"
              type="number"
              min="0"
              placeholder="e.g. 2000"
              value={form.payment_per_lead}
              onChange={e => setForm(f => ({ ...f, payment_per_lead: e.target.value }))}
              className="form-input"
            />
            <p className="text-[11px] text-warmgray-400 mt-1">Amount you agree to pay this partner per qualified lead.</p>
          </div>

          {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

          <button
            type="submit"
            disabled={loading || !form.name || !form.email || !form.phone}
            className="btn btn-bronze w-full justify-center py-3 text-sm shadow-bronze disabled:opacity-50"
          >
            {loading ? 'Creating…' : 'Create Partner & Generate Link'}
          </button>
        </form>
      </div>
    </AdminShell>
  )
}
