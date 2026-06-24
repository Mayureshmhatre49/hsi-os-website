'use client'

import { useEffect, useState } from 'react'
import AdminShell from '@/components/admin/AdminShell'
import Link from 'next/link'
import { Plus, ExternalLink } from 'lucide-react'

interface Partner {
  id: string; name: string; email: string; phone: string; company: string | null
  created_at: string
  referral_links: { code: string; payment_per_lead: number; is_active: boolean }[]
}

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    fetch('/api/admin/partners')
      .then(r => r.ok ? r.json() : { partners: [] })
      .then(d => setPartners(d.partners ?? []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hsios.in'

  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-charcoal-800">Partners</h1>
            <p className="text-xs text-warmgray-500 mt-1">{partners.length} referral partner{partners.length !== 1 ? 's' : ''}</p>
          </div>
          <Link href="/admin/partners/new" className="btn btn-bronze text-xs py-2.5 px-5 shadow-bronze">
            <Plus size={14} /> New Partner
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-ivory-300 divide-y divide-ivory-100">
            {partners.map(p => {
              const link = p.referral_links?.[0]
              return (
                <div key={p.id} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-sm text-charcoal-800">{p.name}</span>
                      {p.company && <span className="text-xs text-warmgray-400">· {p.company}</span>}
                    </div>
                    <div className="text-xs text-warmgray-400 mt-0.5">{p.email} · {p.phone}</div>
                    {link && (
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <code className="text-xs bg-ivory-100 border border-ivory-200 px-2 py-0.5 rounded font-mono text-sandstone-700">
                          {link.code}
                        </code>
                        <span className="text-xs text-warmgray-400">₹{link.payment_per_lead.toLocaleString('en-IN')}/lead</span>
                        <a
                          href={`${siteUrl}/enquiry?ref=${link.code}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-sandstone-600 flex items-center gap-1 hover:underline"
                        >
                          <ExternalLink size={11} /> Test link
                        </a>
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/admin/partners/${p.id}`}
                    className="btn btn-outline-warm text-xs py-2 px-4 self-start sm:self-auto flex-shrink-0"
                  >
                    View
                  </Link>
                </div>
              )
            })}
            {partners.length === 0 && (
              <div className="px-6 py-12 text-center">
                <p className="text-sm text-warmgray-400">No partners yet.</p>
                <Link href="/admin/partners/new" className="btn btn-bronze text-xs py-2 px-5 mt-4 inline-flex shadow-bronze">
                  Add First Partner
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </AdminShell>
  )
}
