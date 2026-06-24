'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import PartnerShell from '@/components/admin/PartnerShell'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const STATUS_COLORS: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700', CONTACTED: 'bg-yellow-100 text-yellow-700',
  SITE_VISIT: 'bg-purple-100 text-purple-700', CONVERTED: 'bg-green-100 text-green-700',
  LOST: 'bg-red-100 text-red-700',
}
const STATUS_LABELS: Record<string, string> = {
  NEW: 'New', CONTACTED: 'Contacted', SITE_VISIT: 'Site Visit Scheduled',
  CONVERTED: 'Converted ✓', LOST: 'Not Proceeding',
}

interface Lead {
  id: string; name: string; project_type: string; location: string
  budget: string; timeline: string; status: string; created_at: string
}
interface HistoryEntry { new_status: string; note: string | null; created_at: string }
interface Comment { comment: string; created_by: string; created_at: string }

export default function PartnerLeadDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [lead, setLead]         = useState<Lead | null>(null)
  const [history, setHistory]   = useState<HistoryEntry[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    fetch(`/api/partner/leads/${id}`)
      .then(r => r.json())
      .then(d => {
        setLead(d.lead)
        setHistory(d.history ?? [])
        setComments(d.comments ?? [])
        setLoading(false)
      })
  }, [id])

  if (loading || !lead) {
    return <PartnerShell><div className="flex items-center justify-center h-64"><div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" /></div></PartnerShell>
  }

  return (
    <PartnerShell>
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-3">
          <Link href="/partner/dashboard" className="text-warmgray-500 hover:text-charcoal-800">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-xl font-bold text-charcoal-800">{lead.name}</h1>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${STATUS_COLORS[lead.status]}`}>
                {STATUS_LABELS[lead.status]}
              </span>
            </div>
            <p className="text-xs text-warmgray-500 mt-0.5">
              Submitted {new Date(lead.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-ivory-300 p-5 space-y-3">
          <h2 className="text-sm font-bold text-charcoal-800">Project Details</h2>
          {[
            ['Project Type', lead.project_type],
            ['Location',     lead.location],
            ['Budget',       lead.budget],
            ['Timeline',     lead.timeline],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-xs">
              <span className="text-warmgray-400 font-semibold uppercase tracking-wider text-[10px]">{k}</span>
              <span className="text-charcoal-800 font-medium">{v}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-ivory-300 p-6 space-y-4">
          <h2 className="text-base font-bold text-charcoal-800">Activity</h2>
          <p className="text-xs text-warmgray-400">Status updates and notes from the HSI team.</p>

          <div className="space-y-3">
            {history.map((h, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-sandstone-400 mt-1.5 flex-shrink-0" />
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mr-2 ${STATUS_COLORS[h.new_status]}`}>
                    {STATUS_LABELS[h.new_status]}
                  </span>
                  {h.note && <span className="text-warmgray-600 italic">{h.note}</span>}
                  <div className="text-warmgray-400 mt-0.5">{new Date(h.created_at).toLocaleString('en-IN')}</div>
                </div>
              </div>
            ))}

            {comments.map((c, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-warmgray-300 mt-1.5 flex-shrink-0" />
                <div>
                  <span className="text-charcoal-800">{c.comment}</span>
                  <div className="text-warmgray-400 mt-0.5">HSI Team · {new Date(c.created_at).toLocaleString('en-IN')}</div>
                </div>
              </div>
            ))}

            {history.length === 0 && comments.length === 0 && (
              <p className="text-xs text-warmgray-400">No updates yet. You will receive an email notification when the status changes.</p>
            )}
          </div>
        </div>
      </div>
    </PartnerShell>
  )
}
