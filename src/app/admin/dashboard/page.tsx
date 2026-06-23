'use client'

import { useEffect, useState } from 'react'
import AdminShell from '@/components/admin/AdminShell'
import Link from 'next/link'
import { Users, FileText, TrendingUp, ArrowRight } from 'lucide-react'

const STATUS_COLORS: Record<string, string> = {
  NEW:        'bg-blue-100 text-blue-700',
  CONTACTED:  'bg-yellow-100 text-yellow-700',
  SITE_VISIT: 'bg-purple-100 text-purple-700',
  CONVERTED:  'bg-green-100 text-green-700',
  LOST:       'bg-red-100 text-red-700',
}

interface Lead {
  id: string; name: string; phone: string; project_type: string
  location: string; status: string; lead_score: number; created_at: string
  referral_partners: { name: string } | null
}

export default function AdminDashboardPage() {
  const [leads, setLeads]       = useState<Lead[]>([])
  const [partners, setPartners] = useState<{ id: string; name: string }[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/leads').then(r => r.json()),
      fetch('/api/admin/partners').then(r => r.json()),
    ]).then(([ld, pt]) => {
      setLeads(ld.leads ?? [])
      setPartners(pt.partners ?? [])
      setLoading(false)
    })
  }, [])

  const statusCounts = leads.reduce<Record<string, number>>((acc, l) => {
    acc[l.status] = (acc[l.status] ?? 0) + 1
    return acc
  }, {})

  const referralLeads = leads.filter(l => l.referral_partners).length

  if (loading) {
    return (
      <AdminShell>
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" />
        </div>
      </AdminShell>
    )
  }

  return (
    <AdminShell>
      <div className="space-y-8">
        <div>
          <h1 className="font-serif text-2xl font-bold text-charcoal-800">Dashboard</h1>
          <p className="text-xs text-warmgray-500 mt-1">Referral program overview</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Leads',     value: leads.length,    icon: FileText,   color: 'text-blue-600'  },
            { label: 'Partners',        value: partners.length, icon: Users,      color: 'text-sandstone-600' },
            { label: 'Via Referral',    value: referralLeads,   icon: TrendingUp, color: 'text-green-600' },
            { label: 'Converted',       value: statusCounts.CONVERTED ?? 0, icon: TrendingUp, color: 'text-purple-600' },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-2xl border border-ivory-300 p-5">
              <Icon size={18} className={`${color} mb-3`} strokeWidth={1.5} />
              <div className="font-serif text-3xl font-bold text-charcoal-800">{value}</div>
              <div className="text-xs text-warmgray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Status breakdown */}
        <div className="bg-white rounded-2xl border border-ivory-300 p-6">
          <h2 className="font-serif text-base font-bold text-charcoal-800 mb-4">Lead Pipeline</h2>
          <div className="flex flex-wrap gap-3">
            {['NEW', 'CONTACTED', 'SITE_VISIT', 'CONVERTED', 'LOST'].map(s => (
              <span key={s} className={`px-3 py-1.5 rounded-full text-xs font-bold ${STATUS_COLORS[s]}`}>
                {s.replace('_', ' ')} — {statusCounts[s] ?? 0}
              </span>
            ))}
          </div>
        </div>

        {/* Recent leads */}
        <div className="bg-white rounded-2xl border border-ivory-300">
          <div className="flex items-center justify-between px-6 py-4 border-b border-ivory-200">
            <h2 className="font-serif text-base font-bold text-charcoal-800">Recent Leads</h2>
            <Link href="/admin/leads" className="text-xs text-sandstone-600 font-semibold flex items-center gap-1 hover:underline">
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-ivory-100">
            {leads.slice(0, 8).map(lead => (
              <Link
                key={lead.id}
                href={`/admin/leads/${lead.id}`}
                className="flex items-center justify-between px-6 py-4 hover:bg-ivory-50 transition-colors"
              >
                <div>
                  <div className="text-sm font-semibold text-charcoal-800">{lead.name}</div>
                  <div className="text-xs text-warmgray-400 mt-0.5">
                    {lead.project_type} · {lead.location}
                    {lead.referral_partners && (
                      <span className="ml-2 text-sandstone-500 font-medium">via {lead.referral_partners.name}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-sandstone-600">#{lead.lead_score}</span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${STATUS_COLORS[lead.status]}`}>
                    {lead.status.replace('_', ' ')}
                  </span>
                </div>
              </Link>
            ))}
            {leads.length === 0 && (
              <div className="px-6 py-10 text-center text-sm text-warmgray-400">No leads yet.</div>
            )}
          </div>
        </div>
      </div>
    </AdminShell>
  )
}
