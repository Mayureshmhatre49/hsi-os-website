'use client'

import { useEffect, useState } from 'react'
import AdminShell from '@/components/admin/AdminShell'
import Link from 'next/link'

const STATUS_COLORS: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700', CONTACTED: 'bg-yellow-100 text-yellow-700',
  SITE_VISIT: 'bg-purple-100 text-purple-700', CONVERTED: 'bg-green-100 text-green-700',
  LOST: 'bg-red-100 text-red-700',
}
const ALL_STATUSES = ['ALL', 'NEW', 'CONTACTED', 'SITE_VISIT', 'CONVERTED', 'LOST']

interface Lead {
  id: string; name: string; email: string; phone: string; project_type: string
  location: string; budget: string; status: string; lead_score: number
  referral_code: string | null; created_at: string
  referral_partners: { name: string } | null
}

export default function AdminLeadsPage() {
  const [leads, setLeads]       = useState<Lead[]>([])
  const [loading, setLoading]   = useState(true)
  const [filter, setFilter]     = useState('ALL')
  const [search, setSearch]     = useState('')

  useEffect(() => {
    fetch('/api/admin/leads')
      .then(r => r.json())
      .then(d => { setLeads(d.leads ?? []); setLoading(false) })
  }, [])

  const filtered = leads.filter(l => {
    const matchStatus = filter === 'ALL' || l.status === filter
    const q = search.toLowerCase()
    const matchSearch = !q || l.name.toLowerCase().includes(q) || l.phone.includes(q) || l.location.toLowerCase().includes(q)
    return matchStatus && matchSearch
  })

  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-charcoal-800">Leads</h1>
          <p className="text-xs text-warmgray-500 mt-1">{leads.length} total leads</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search by name, phone, location…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input flex-1 text-sm"
          />
          <div className="flex gap-2 flex-wrap">
            {ALL_STATUSES.map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  filter === s
                    ? 'bg-charcoal-800 text-white border-charcoal-800'
                    : 'bg-white text-warmgray-500 border-ivory-300 hover:border-sandstone-300'
                }`}
              >
                {s.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-ivory-300 divide-y divide-ivory-100">
            {filtered.map(lead => (
              <Link
                key={lead.id}
                href={`/admin/leads/${lead.id}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 hover:bg-ivory-50 transition-colors gap-2"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-charcoal-800">{lead.name}</span>
                    <span className="text-xs font-bold text-sandstone-600">#{lead.lead_score}</span>
                    {lead.referral_code && (
                      <span className="text-[10px] bg-sandstone-50 border border-sandstone-200 text-sandstone-600 px-2 py-0.5 rounded-full font-mono">
                        ref:{lead.referral_code}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-warmgray-400 mt-0.5">
                    {lead.phone} · {lead.project_type} · {lead.location} · {lead.budget}
                    {lead.referral_partners && (
                      <span className="ml-2 text-sandstone-500 font-medium">via {lead.referral_partners.name}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-warmgray-400">
                    {new Date(lead.created_at).toLocaleDateString('en-IN')}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${STATUS_COLORS[lead.status]}`}>
                    {lead.status.replace('_', ' ')}
                  </span>
                </div>
              </Link>
            ))}
            {filtered.length === 0 && (
              <div className="px-6 py-12 text-center text-sm text-warmgray-400">
                {search || filter !== 'ALL' ? 'No leads match your filter.' : 'No leads yet.'}
              </div>
            )}
          </div>
        )}
      </div>
    </AdminShell>
  )
}
