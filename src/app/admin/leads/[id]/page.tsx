'use client'

import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import AdminShell from '@/components/admin/AdminShell'
import Link from 'next/link'
import { ArrowLeft, Send } from 'lucide-react'

const STATUSES = ['NEW', 'CONTACTED', 'SITE_VISIT', 'CONVERTED', 'LOST']
const STATUS_COLORS: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700', CONTACTED: 'bg-yellow-100 text-yellow-700',
  SITE_VISIT: 'bg-purple-100 text-purple-700', CONVERTED: 'bg-green-100 text-green-700',
  LOST: 'bg-red-100 text-red-700',
}
const STATUS_LABELS: Record<string, string> = {
  NEW: 'New', CONTACTED: 'Contacted', SITE_VISIT: 'Site Visit', CONVERTED: 'Converted', LOST: 'Lost',
}

interface Lead {
  id: string; name: string; email: string | null; phone: string
  project_type: string; location: string; budget: string; timeline: string
  services: string[]; source: string; lead_score: number; referral_code: string | null
  status: string; created_at: string
  referral_partners: { id: string; name: string; email: string; phone: string } | null
}
interface HistoryEntry { old_status: string | null; new_status: string; note: string | null; created_at: string }
interface Comment { comment: string; created_by: string; created_at: string }

export default function LeadDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [lead, setLead]         = useState<Lead | null>(null)
  const [history, setHistory]   = useState<HistoryEntry[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading]   = useState(true)
  const [newStatus, setNewStatus] = useState('')
  const [statusNote, setStatusNote] = useState('')
  const [updating, setUpdating] = useState(false)
  const [comment, setComment]   = useState('')
  const [posting, setPosting]   = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch(`/api/admin/leads/${id}`)
      .then(r => r.json())
      .then(d => {
        setLead(d.lead)
        setHistory(d.history ?? [])
        setComments(d.comments ?? [])
        setNewStatus(d.lead?.status ?? 'NEW')
        setLoading(false)
      })
  }, [id])

  async function updateStatus() {
    if (!lead || newStatus === lead.status) return
    setUpdating(true)
    const res = await fetch(`/api/admin/leads/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus, note: statusNote || undefined }),
    })
    if (res.ok) {
      setLead(l => l ? { ...l, status: newStatus } : l)
      setHistory(h => [...h, { old_status: lead.status, new_status: newStatus, note: statusNote || null, created_at: new Date().toISOString() }])
      setStatusNote('')
    }
    setUpdating(false)
  }

  async function postComment() {
    if (!comment.trim()) return
    setPosting(true)
    const res = await fetch(`/api/admin/leads/${id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment }),
    })
    if (res.ok) {
      const d = await res.json()
      setComments(c => [...c, d.comment])
      setComment('')
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
    }
    setPosting(false)
  }

  if (loading || !lead) {
    return <AdminShell><div className="flex items-center justify-center h-64"><div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" /></div></AdminShell>
  }

  return (
    <AdminShell>
      <div className="max-w-3xl space-y-6">
        <div className="flex items-center gap-3">
          <Link href="/admin/leads" className="text-warmgray-500 hover:text-charcoal-800">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="font-serif text-xl font-bold text-charcoal-800">{lead.name}</h1>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${STATUS_COLORS[lead.status]}`}>
                {STATUS_LABELS[lead.status]}
              </span>
              <span className="text-xs font-bold text-sandstone-600 bg-sandstone-50 px-2 py-0.5 rounded-full">
                Score: {lead.lead_score}
              </span>
            </div>
            <p className="text-xs text-warmgray-500 mt-0.5">
              {lead.phone}{lead.email ? ` · ${lead.email}` : ''} ·{' '}
              {new Date(lead.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Lead info */}
          <div className="bg-white rounded-2xl border border-ivory-300 p-5 space-y-3">
            <h2 className="font-serif text-sm font-bold text-charcoal-800">Project Details</h2>
            {[
              ['Type',     lead.project_type],
              ['Location', lead.location],
              ['Budget',   lead.budget],
              ['Timeline', lead.timeline],
              ['Source',   lead.source],
              ...(lead.referral_code ? [['Ref Code', lead.referral_code]] : []),
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-xs gap-2">
                <span className="text-warmgray-400 font-semibold uppercase tracking-wider text-[10px]">{k}</span>
                <span className="text-charcoal-800 font-medium text-right">{v}</span>
              </div>
            ))}
            {lead.services?.length > 0 && (
              <div>
                <div className="text-[10px] text-warmgray-400 font-semibold uppercase tracking-wider mb-1.5">Services</div>
                <div className="flex flex-wrap gap-1.5">
                  {lead.services.map(s => (
                    <span key={s} className="badge-warm text-[10px] px-2 py-0.5">{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Referral info + Status update */}
          <div className="space-y-4">
            {lead.referral_partners && (
              <div className="bg-sandstone-50 border border-sandstone-200 rounded-2xl p-5">
                <h2 className="font-serif text-sm font-bold text-charcoal-800 mb-2">Referred By</h2>
                <div className="text-sm font-semibold text-charcoal-800">{lead.referral_partners.name}</div>
                <div className="text-xs text-warmgray-500">{lead.referral_partners.email}</div>
                <div className="text-xs text-warmgray-500">{lead.referral_partners.phone}</div>
                <Link
                  href={`/admin/partners/${lead.referral_partners.id}`}
                  className="text-xs text-sandstone-600 font-semibold hover:underline mt-2 inline-block"
                >
                  View Partner →
                </Link>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-ivory-300 p-5 space-y-3">
              <h2 className="font-serif text-sm font-bold text-charcoal-800">Update Status</h2>
              <select
                value={newStatus}
                onChange={e => setNewStatus(e.target.value)}
                className="form-input text-sm"
              >
                {STATUSES.map(s => (
                  <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Optional note…"
                value={statusNote}
                onChange={e => setStatusNote(e.target.value)}
                className="form-input text-sm"
              />
              <button
                onClick={updateStatus}
                disabled={updating || newStatus === lead.status}
                className="btn btn-dark w-full justify-center py-2.5 text-xs disabled:opacity-50"
              >
                {updating ? 'Updating…' : 'Update Status'}
              </button>
              <p className="text-[10px] text-warmgray-400">Partner will be notified by email on status change.</p>
            </div>
          </div>
        </div>

        {/* Timeline + Comments */}
        <div className="bg-white rounded-2xl border border-ivory-300 p-6 space-y-6">
          <h2 className="font-serif text-base font-bold text-charcoal-800">Timeline & Comments</h2>

          <div className="space-y-3">
            {history.map((h, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-sandstone-400 mt-1.5 flex-shrink-0" />
                <div>
                  <span className="text-charcoal-800 font-semibold">
                    {h.old_status ? `${STATUS_LABELS[h.old_status]} → ` : ''}
                    {STATUS_LABELS[h.new_status]}
                  </span>
                  {h.note && <span className="text-warmgray-400 ml-1">· {h.note}</span>}
                  <div className="text-warmgray-400 mt-0.5">{new Date(h.created_at).toLocaleString('en-IN')}</div>
                </div>
              </div>
            ))}

            {comments.map((c, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-charcoal-400 mt-1.5 flex-shrink-0" />
                <div>
                  <span className="text-charcoal-800">{c.comment}</span>
                  <div className="text-warmgray-400 mt-0.5">
                    {c.created_by} · {new Date(c.created_at).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            ))}

            {history.length === 0 && comments.length === 0 && (
              <p className="text-xs text-warmgray-400">No activity yet.</p>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Add comment */}
          <div className="flex gap-2 pt-2 border-t border-ivory-200">
            <input
              type="text"
              placeholder="Add a comment…"
              value={comment}
              onChange={e => setComment(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') postComment() }}
              className="form-input flex-1 text-sm"
            />
            <button
              onClick={postComment}
              disabled={posting || !comment.trim()}
              className="btn btn-dark py-2.5 px-4 text-xs disabled:opacity-50 flex items-center gap-1.5"
            >
              <Send size={13} /> {posting ? '…' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </AdminShell>
  )
}
