'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import AdminShell from '@/components/admin/AdminShell'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Copy, Check, ExternalLink } from 'lucide-react'

const STATUS_COLORS: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700', CONTACTED: 'bg-yellow-100 text-yellow-700',
  SITE_VISIT: 'bg-purple-100 text-purple-700', CONVERTED: 'bg-green-100 text-green-700',
  LOST: 'bg-red-100 text-red-700',
}

export default function PartnerDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [data, setData]     = useState<{
    partner: {
      name: string; email: string; phone: string; company: string | null
      referral_links: { code: string; payment_per_lead: number; qr_data_url: string; is_active: boolean }[]
    }
    leads: { id: string; name: string; phone: string; project_type: string; location: string; status: string; lead_score: number; created_at: string }[]
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied]   = useState(false)

  useEffect(() => {
    fetch(`/api/admin/partners/${id}`)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
  }, [id])

  if (loading || !data) {
    return <AdminShell><div className="flex items-center justify-center h-64"><div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" /></div></AdminShell>
  }

  const { partner, leads } = data
  const link = partner.referral_links?.[0]
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hsios.in'
  const referralUrl = link ? `${siteUrl}/enquiry?ref=${link.code}` : ''
  const totalEarnings = leads.filter(l => l.status === 'CONVERTED').length * (link?.payment_per_lead ?? 0)

  function copyUrl() {
    navigator.clipboard.writeText(referralUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function downloadQR() {
    const a = document.createElement('a')
    a.href = link.qr_data_url
    a.download = `qr-${link.code}.png`
    a.click()
  }

  return (
    <AdminShell>
      <div className="max-w-3xl space-y-6">
        <div className="flex items-center gap-3">
          <Link href="/admin/partners" className="text-warmgray-500 hover:text-charcoal-800">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-charcoal-800">{partner.name}</h1>
            <p className="text-xs text-warmgray-500">{partner.email} · {partner.phone}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Total Leads',    value: leads.length },
            { label: 'Converted',      value: leads.filter(l => l.status === 'CONVERTED').length },
            { label: 'Est. Earnings',  value: `₹${totalEarnings.toLocaleString('en-IN')}` },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-2xl border border-ivory-300 p-5">
              <div className="text-2xl font-bold text-charcoal-800">{value}</div>
              <div className="text-xs text-warmgray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {link && (
          <div className="bg-white rounded-2xl border border-ivory-300 p-6 space-y-5">
            <h2 className="text-base font-bold text-charcoal-800">Referral Assets</h2>
            <div>
              <div className="form-label mb-1">Referral URL</div>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-xs bg-ivory-100 border border-ivory-200 px-3 py-2 rounded-lg font-mono text-sandstone-700 truncate">
                  {referralUrl}
                </code>
                <button onClick={copyUrl} className="btn btn-outline-warm text-xs py-2 px-3 flex-shrink-0 flex items-center gap-1">
                  {copied ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy</>}
                </button>
                <a href={referralUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warm text-xs py-2 px-3 flex-shrink-0">
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
            <div>
              <div className="form-label mb-2">QR Code</div>
              <div className="flex items-start gap-4">
                <div className="border border-ivory-200 rounded-xl p-3 bg-ivory-50">
                  <Image src={link.qr_data_url} alt="QR Code" width={140} height={140} />
                </div>
                <div className="space-y-2 pt-1">
                  <div className="text-xs text-warmgray-500">Code: <strong className="font-mono text-sandstone-700">{link.code}</strong></div>
                  <div className="text-xs text-warmgray-500">Payment: <strong>₹{link.payment_per_lead.toLocaleString('en-IN')}/lead</strong></div>
                  <button onClick={downloadQR} className="btn btn-bronze text-xs py-2 px-4 shadow-bronze">Download PNG</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-ivory-300">
          <div className="px-6 py-4 border-b border-ivory-200">
            <h2 className="text-base font-bold text-charcoal-800">Leads from this Partner</h2>
          </div>
          <div className="divide-y divide-ivory-100">
            {leads.map(lead => (
              <Link
                key={lead.id}
                href={`/admin/leads/${lead.id}`}
                className="flex items-center justify-between px-6 py-4 hover:bg-ivory-50 transition-colors"
              >
                <div>
                  <div className="text-sm font-semibold text-charcoal-800">{lead.name}</div>
                  <div className="text-xs text-warmgray-400 mt-0.5">{lead.project_type} · {lead.location}</div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${STATUS_COLORS[lead.status]}`}>
                  {lead.status.replace('_', ' ')}
                </span>
              </Link>
            ))}
            {leads.length === 0 && (
              <div className="px-6 py-10 text-center text-sm text-warmgray-400">No leads from this partner yet.</div>
            )}
          </div>
        </div>
      </div>
    </AdminShell>
  )
}
