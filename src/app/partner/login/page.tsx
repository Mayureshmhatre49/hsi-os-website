'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

export default function PartnerLoginPage() {
  const router = useRouter()
  const [form, setForm]     = useState({ email: '', password: '' })
  const [show, setShow]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')

  useEffect(() => {
    fetch('/api/partner/me').then(r => { if (r.ok) router.replace('/partner/dashboard') })
  }, [router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/partner/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      router.replace('/partner/dashboard')
    } else {
      const d = await res.json()
      setError(d.error ?? 'Login failed.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-charcoal-800 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-luxury-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-sandstone-400 flex items-center justify-center mb-4 text-white font-bold text-lg">
            H
          </div>
          <h1 className="text-2xl font-bold text-charcoal-800">Partner Portal</h1>
          <p className="text-xs text-warmgray-500 mt-1">Hestia Smart Interiors</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="form-label">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray-400" size={15} />
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com"
                className="form-input pl-10"
                autoFocus
              />
            </div>
          </div>

          <div>
            <label className="form-label">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray-400" size={15} />
              <input
                type={show ? 'text' : 'password'}
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                placeholder="Enter your password"
                className="form-input pl-10 pr-11"
              />
              <button
                type="button"
                onClick={() => setShow(s => !s)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-warmgray-400 hover:text-charcoal-800"
              >
                {show ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

          <button
            type="submit"
            disabled={loading || !form.email || !form.password}
            className="btn btn-bronze w-full justify-center py-3 text-sm shadow-bronze disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-warmgray-400 mt-6">
          <Link href="/" className="text-sandstone-600 hover:underline">← Back to hsios.in</Link>
        </p>
      </div>
    </div>
  )
}
