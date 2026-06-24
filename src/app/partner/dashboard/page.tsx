'use client'

import { useEffect, useState } from 'react'
import PartnerShell from '@/components/admin/PartnerShell'
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

const STATUS_COLORS: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700', CONTACTED: 'bg-yellow-100 text-yellow-700',
  SITE_VISIT: 'bg-purple-100 text-purple-700', CONVERTED: 'bg-green-100 text-green-700',
  LOST: 'bg-red-100 text-red-700',
}
const STATUS_LABELS: Record<string, string> = {
  NEW: 'New', CONTACTED: 'Contacted', SITE_VISIT: 'Site Visit', CONVERTED: 'Converted', LOST: 'Not Proceeding',
}

interface Lead {
  id: string; name: string; project_type: string
  location: string; budget: string; status: string; created_at: string
}
interface PartnerInfo {
  name: string; email: string
  referral_links: { code: string; payment_per_lead: number; is_active: boolean }[]
}

export default function PartnerDashboardPage() {
  const [leads, setLeads]     = useState<Lead[]>([])
  const [partner, setPartner] = useState<PartnerInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/partner/me').then(r => r.json()),
      fetch('/api/partner/leads').then(r => r.json()),
    ]).then(([me, ld]) => {
      setPartner(me.partner)
      setLeads(ld.leads ?? [])
      setLoading(false)
    })
  }, [])

  const link = partner?.referral_links?.[0]
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.hsios.in'
  const referralUrl = link ? `${siteUrl}/enquiry?ref=${link.code}` : ''
  const converted = leads.filter(l => l.status === 'CONVERTED').length
  const estEarnings = converted * (link?.payment_per_lead ?? 0)

  if (loading) {
    return <PartnerShell><div className="flex items-center justify-center h-64"><div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" /></div></PartnerShell>
  }

  return (
    <PartnerShell>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-charcoal-800">My Leads</h1>
          <p className="text-xs text-warmgray-500 mt-1">Welcome, {partner?.name}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'Total Leads',   value: leads.length },
            { label: 'Converted',     value: converted },
            { label: 'Est. Earnings', value: `₹${estEarnings.toLocaleString('en-IN')}` },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-2xl border border-ivory-300 p-5">
              <div className="font-serif text-2xl font-bold text-charcoal-800">{value}</div>
              <div className="text-xs text-warmgray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Referral link */}
        {link && (
          <div className="bg-sandstone-50 border border-sandstone-200 rounded-2xl p-5">
            <div className="text-xs font-bold text-sandstone-600 uppercase tracking-wider mb-2">Your Referral Link</div>
            <code className="text-xs font-mono text-charcoal-800 break-all">{referralUrl}</code>
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => navigator.clipboard.writeText(referralUrl)}
                className="btn btn-bronze text-xs py-2 px-4 shadow-bronze"
              >
                Copy Link
              </button>
              <div className="text-xs text-warmgray-500 self-center">₹{link.payment_per_lead.toLocaleString('en-IN')}/converted lead</div>
            </div>
          </div>
        )}

        {/* Leads table */}
        <div className="bg-white rounded-2xl border border-ivory-300">
          <div className="px-6 py-4 border-b border-ivory-200 flex items-center justify-between">
            <h2 className="font-serif text-base font-bold text-charcoal-800">All My Leads</h2>
            <TrendingUp size={16} className="text-warmgray-400" />
          </div>
          <div className="divide-y divide-ivory-100">
            {leads.map(lead => (
              <Link
                key={lead.id}
                href={`/partner/leads/${lead.id}`}
                className="flex items-center justify-between px-6 py-4 hover:bg-ivory-50 transition-colors"
              >
                <div>
                  <div className="text-sm font-semibold text-charcoal-800">{lead.name}</div>
                  <div className="text-xs text-warmgray-400 mt-0.5">
                    {lead.project_type} · {lead.location} · {lead.budget}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[10px] text-warmgray-400">
                    {new Date(lead.created_at).toLocaleDateString('en-IN')}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${STATUS_COLORS[lead.status]}`}>
                    {STATUS_LABELS[lead.status]}
                  </span>
                </div>
              </Link>
            ))}
            {leads.length === 0 && (
              <div className="px-6 py-12 text-center">
                <p className="text-sm text-warmgray-400">No leads yet.</p>
                <p className="text-xs text-warmgray-400 mt-1">Share your referral link to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PartnerShell>
  )
}
