'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Users, FileText, LogOut, Menu, X } from 'lucide-react'

const NAV = [
  { href: '/admin/dashboard', label: 'Dashboard',  icon: LayoutDashboard },
  { href: '/admin/partners',  label: 'Partners',    icon: Users },
  { href: '/admin/leads',     label: 'Leads',       icon: FileText },
]

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const router   = useRouter()
  const pathname = usePathname()
  const [ready,      setReady]      = useState(false)
  const [sidebarOpen, setSidebar]   = useState(false)

  useEffect(() => {
    fetch('/api/admin/me').then(r => {
      if (!r.ok) router.replace('/admin/login')
      else setReady(true)
    })
  }, [router])

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.replace('/admin/login')
  }

  if (!ready) {
    return (
      <div className="min-h-screen bg-ivory-100 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" />
      </div>
    )
  }

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      <div className="px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sandstone-400 flex items-center justify-center text-white text-xs font-bold">H</div>
          <div>
            <div className="text-white text-sm font-bold leading-none">HSI Admin</div>
            <div className="text-white/40 text-[10px] tracking-widest uppercase mt-0.5">Referral Panel</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setSidebar(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active
                  ? 'bg-sandstone-400 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon size={16} strokeWidth={2} />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-white/10">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-sm font-semibold text-white/60 hover:text-white hover:bg-white/10 transition-all"
        >
          <LogOut size={16} strokeWidth={2} />
          Sign Out
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-ivory-100 flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-56 bg-charcoal-800 flex-col flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-56 bg-charcoal-800 flex flex-col">
            <Sidebar />
          </div>
          <div className="flex-1 bg-black/50" onClick={() => setSidebar(false)} />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile topbar */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-charcoal-800 text-white">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sandstone-400 flex items-center justify-center text-white text-xs font-bold">H</div>
            <span className="text-sm font-bold">HSI Admin</span>
          </div>
          <button onClick={() => setSidebar(s => !s)}>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
