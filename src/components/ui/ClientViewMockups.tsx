import Image from 'next/image'
import type { ReactNode } from 'react'
import {
  Check, Clock, FileText, ShieldCheck, Wrench, Users, Paintbrush, Camera,
} from 'lucide-react'

/*
 * Illustrative HSIOS™ client-view panels for the /hsi-os "Five things you can see" section.
 * Static, decorative UI (the wrapping panel is aria-hidden). Replace with real
 * screenshots from os.hsios.in when they are available.
 */

export type ClientViewKey = 'budget' | 'timeline' | 'approval' | 'clash' | 'dossier'

function Window({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full self-stretch rounded-2xl bg-white shadow-luxury border border-ivory-300 overflow-hidden flex flex-col text-left">
      <div className="flex items-center gap-1.5 px-3 sm:px-4 h-8 sm:h-9 border-b border-ivory-300 bg-ivory-50 shrink-0">
        <span className="w-2 h-2 rounded-full bg-sandstone-300" />
        <span className="w-2 h-2 rounded-full bg-sandstone-200" />
        <span className="w-2 h-2 rounded-full bg-ivory-300" />
        <span className="ml-2 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-sandstone-600 truncate">
          HSIOS™ · {title}
        </span>
        <span className="ml-auto text-[9px] sm:text-[10px] text-warmgray-500 truncate hidden sm:inline">Hestia Alibag V2</span>
      </div>
      <div data-mockup-body className="flex-1 p-3 sm:p-5 flex flex-col justify-center">{children}</div>
    </div>
  )
}

/* ── 1. Live budget ─────────────────────────────────────────── */
function BudgetView() {
  const lines = [
    { name: 'Civil & structure', pct: 82 },
    { name: 'Joinery',           pct: 54 },
    { name: 'MEP',               pct: 61 },
    { name: 'Finishes',          pct: 23 },
  ]
  return (
    <Window title="Budget">
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
        {[
          ['Approved', '₹1.20 Cr'],
          ['Spent', '₹0.68 Cr'],
          ['Committed', '₹0.21 Cr'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-ivory-100 px-2 py-1.5 sm:px-3 sm:py-2">
            <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-warmgray-500">{k}</div>
            <div className="font-serif text-sm sm:text-lg font-bold text-charcoal-800">{v}</div>
          </div>
        ))}
      </div>
      <div className="h-2 rounded-full bg-ivory-200 overflow-hidden flex mb-1">
        <div className="bg-bronze-600" style={{ width: '57%' }} />
        <div className="bg-sandstone-300" style={{ width: '17%' }} />
      </div>
      <div className="flex gap-3 text-[8px] sm:text-[10px] text-warmgray-500 mb-3 sm:mb-4">
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />Spent</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-sandstone-300" />Committed</span>
        <span className="ml-auto text-emerald-700 font-semibold">Within budget</span>
      </div>
      <div className="space-y-1.5 sm:space-y-2">
        {lines.map(({ name, pct }) => (
          <div key={name} className="flex items-center gap-2 text-[9px] sm:text-xs">
            <span className="w-20 sm:w-28 text-charcoal-700 truncate">{name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-ivory-200 overflow-hidden">
              <div className="h-full bg-sandstone-500 rounded-full" style={{ width: `${pct}%` }} />
            </div>
            <span className="w-7 text-right text-warmgray-500">{pct}%</span>
          </div>
        ))}
      </div>
    </Window>
  )
}

/* ── 2. Daily photo timeline ────────────────────────────────── */
function TimelineView() {
  const days = [
    { date: '12 Nov', note: 'Living room wall panelling — 60% fixed', img: '/projects-casa-frangipani-1.jpg', photos: 14 },
    { date: '11 Nov', note: 'Pool deck stone laying started',          img: '/projects-casa-frangipani-2.jpg', photos: 9 },
    { date: '10 Nov', note: 'Façade lighting conduit tested',           img: '/projects-casa-frangipani-3.jpg', photos: 11 },
  ]
  return (
    <Window title="Site timeline">
      <ol className="relative space-y-2 sm:space-y-3 pl-4 before:absolute before:left-[5px] before:top-1 before:bottom-1 before:w-px before:bg-sandstone-200">
        {days.map(({ date, note, img, photos }, i) => (
          <li key={date} className="relative flex items-center gap-2 sm:gap-3">
            <span className={`absolute -left-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white ${i === 0 ? 'bg-bronze-600' : 'bg-sandstone-300'}`} />
            <div className="relative w-14 h-10 sm:w-20 sm:h-14 rounded-md overflow-hidden shrink-0 bg-ivory-200">
              <Image src={img} alt="" fill sizes="80px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-sandstone-600">{date}</div>
              <div className="text-[10px] sm:text-xs text-charcoal-800 font-medium truncate">{note}</div>
              <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-warmgray-500">
                <Camera size={10} /> {photos} photos · on schedule
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Window>
  )
}

/* ── 3. Change approval ─────────────────────────────────────── */
function ApprovalView() {
  return (
    <Window title="Approvals">
      <div className="rounded-xl border border-sandstone-200 bg-ivory-50 p-3 sm:p-4 mb-2 sm:mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-sandstone-600">Change request CR-08</span>
          <span className="text-[9px] sm:text-[10px] rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 font-semibold">Awaiting you</span>
        </div>
        <div className="text-xs sm:text-sm font-semibold text-charcoal-800 mb-2">
          Master bath: upgrade vanity top to honed quartzite
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-md bg-white px-2 py-1.5 border border-ivory-300">
            <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-warmgray-500">Cost impact</div>
            <div className="text-xs sm:text-sm font-bold text-charcoal-800">+ ₹1.85 L</div>
          </div>
          <div className="rounded-md bg-white px-2 py-1.5 border border-ivory-300">
            <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-warmgray-500">Schedule impact</div>
            <div className="text-xs sm:text-sm font-bold text-charcoal-800">+ 0 days</div>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="flex-1 text-center rounded-full bg-bronze-600 text-white text-[10px] sm:text-xs font-semibold py-1.5">Approve</span>
          <span className="flex-1 text-center rounded-full border border-charcoal-300 text-charcoal-700 text-[10px] sm:text-xs font-semibold py-1.5">Discuss</span>
        </div>
      </div>
      <div className="space-y-1 text-[9px] sm:text-[11px] text-warmgray-600">
        <div className="flex items-center gap-1.5"><Check size={11} className="text-emerald-700 shrink-0" /><span className="truncate">CR-07 Kitchen hardware finish · approved 04 Nov, 9:12 pm</span></div>
        <div className="flex items-center gap-1.5"><Check size={11} className="text-emerald-700 shrink-0" /><span className="truncate">CR-06 Deck lighting layout · approved 28 Oct, 7:40 am</span></div>
      </div>
    </Window>
  )
}

/* ── 4. Clash check summary ─────────────────────────────────── */
function ClashView() {
  const clashes = [
    { item: 'Drain line under kitchen island',  trades: 'Plumbing × Joinery', open: false },
    { item: 'AC duct through beam B4',          trades: 'HVAC × Structure',   open: false },
    { item: 'Switchboard behind wardrobe shutter', trades: 'Electrical × Joinery', open: true },
    { item: 'False-ceiling level vs curtain pelmet', trades: 'Ceiling × Finishes', open: false },
  ]
  return (
    <Window title="Clash check">
      <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="flex-1 rounded-lg bg-emerald-50 px-3 py-1.5 sm:py-2">
          <div className="font-serif text-base sm:text-xl font-bold text-emerald-800">23</div>
          <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-emerald-800/80">Resolved on drawings</div>
        </div>
        <div className="flex-1 rounded-lg bg-amber-50 px-3 py-1.5 sm:py-2">
          <div className="font-serif text-base sm:text-xl font-bold text-amber-800">1</div>
          <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-amber-800/80">Open before site work</div>
        </div>
      </div>
      <ul className="divide-y divide-ivory-300">
        {clashes.map(({ item, trades, open }) => (
          <li key={item} className="flex items-center gap-2 py-1 sm:py-1.5">
            <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${open ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-700'}`}>
              {open ? <Clock size={9} /> : <Check size={9} />}
            </span>
            <span className="text-[10px] sm:text-xs text-charcoal-800 truncate flex-1">{item}</span>
            <span className="text-[8px] sm:text-[10px] text-warmgray-500 shrink-0 hidden sm:inline">{trades}</span>
          </li>
        ))}
      </ul>
    </Window>
  )
}

/* ── 5. Handover dossier ────────────────────────────────────── */
function DossierView() {
  const sections = [
    { Icon: Paintbrush,  name: 'Finishes & materials', count: '64 entries' },
    { Icon: Wrench,      name: 'Installations & as-builts', count: '38 drawings' },
    { Icon: ShieldCheck, name: 'Warranties',           count: '21 · next expiry Mar 2028' },
    { Icon: Users,       name: 'Vendors & contacts',   count: '17 vendors' },
    { Icon: FileText,    name: 'QA sign-offs',         count: '104 checkpoints' },
  ]
  return (
    <Window title="Handover dossier">
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="text-xs sm:text-sm font-semibold text-charcoal-800">Villa handover record</div>
        <span className="text-[9px] sm:text-[10px] rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 font-semibold">Complete</span>
      </div>
      <ul className="space-y-1 sm:space-y-1.5">
        {sections.map(({ Icon, name, count }) => (
          <li key={name} className="flex items-center gap-2 rounded-lg bg-ivory-50 border border-ivory-300 px-2 py-1 sm:px-3 sm:py-1.5">
            <Icon size={12} className="text-sandstone-600 shrink-0" />
            <span className="text-[10px] sm:text-xs text-charcoal-800 truncate flex-1">{name}</span>
            <span className="text-[8px] sm:text-[10px] text-warmgray-500 shrink-0">{count}</span>
          </li>
        ))}
      </ul>
    </Window>
  )
}

const views: Record<ClientViewKey, () => ReactNode> = {
  budget: BudgetView,
  timeline: TimelineView,
  approval: ApprovalView,
  clash: ClashView,
  dossier: DossierView,
}

export default function ClientViewMockup({ view }: { view: ClientViewKey }) {
  const View = views[view]
  return <View />
}
