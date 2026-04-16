'use client'
import { useState } from 'react'

type TabKey = 'command' | 'portfolio' | 'twin' | 'eim'
const tabs: { key: TabKey; label: string }[] = [
  { key: 'command',   label: 'Command Center' },
  { key: 'portfolio', label: 'Portfolio Intelligence' },
  { key: 'twin',      label: 'Digital Twin' },
  { key: 'eim',       label: 'EIM Dashboard' },
]

const s: Record<string, React.CSSProperties> = {
  shell:    { background: '#1A1917', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', height: 420 },
  sidebar:  { width: 140, background: '#141311', borderRight: '1px solid rgba(255,255,255,0.07)', padding: '12px 0', display: 'flex', flexDirection: 'column', flexShrink: 0, overflow: 'hidden' },
  sLogo:    { display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px 10px', fontSize: 13, fontWeight: 700, color: '#F0ECE7' },
  sLogoIco: { width: 20, height: 20, borderRadius: 4, background: 'rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#C9A84C' },
  sTag:     { margin: '0 12px 10px', fontSize: 7, fontWeight: 700, color: '#4ade80', letterSpacing: '0.06em', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: 3, padding: '3px 6px', width: 'fit-content' },
  sSect:    { fontSize: 7, fontWeight: 700, color: 'rgba(240,236,231,0.3)', letterSpacing: '0.08em', padding: '8px 12px 4px', textTransform: 'uppercase' },
  sItem:    { fontSize: 9, color: 'rgba(240,236,231,0.5)', padding: '5px 12px', cursor: 'pointer' },
  sItemA:   { fontSize: 9, color: '#F0ECE7', padding: '5px 12px', background: 'rgba(255,255,255,0.06)', fontWeight: 600 },
  main:     { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  topbar:   { height: 40, background: '#141311', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10, flexShrink: 0 },
  tProj:    { display: 'flex', alignItems: 'center', gap: 6 },
  tProjH:   { width: 18, height: 18, borderRadius: 4, background: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#12110F' },
  tSearch:  { flex: 1, fontSize: 8.5, color: 'rgba(240,236,231,0.3)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '4px 10px' },
  tAvatar:  { width: 22, height: 22, borderRadius: '50%', background: 'rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#C9A84C' },
  body:     { flex: 1, overflowY: 'auto', padding: 14 },
  card:     { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '10px 12px', marginBottom: 10 },
  kpiGrid:  { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 10 },
  kpiCard:  { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6, padding: '8px 10px' },
  kpiLabel: { fontSize: 7, color: 'rgba(240,236,231,0.4)', fontWeight: 700, letterSpacing: '0.06em', marginBottom: 3 },
  kpiVal:   { fontSize: 16, fontWeight: 800, color: '#F0ECE7', fontFamily: 'serif', letterSpacing: '-0.5px' },
  badge:    { fontSize: 7.5, fontWeight: 700, padding: '2px 6px', borderRadius: 3 },
  projCard: { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '10px 12px', marginBottom: 8 },
  progBar:  { height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2, marginTop: 8, overflow: 'hidden' },
}

function CommandCenter() {
  return (
    <div style={s.shell}>
      <div style={s.sidebar}>
        <div style={s.sLogo}><div style={s.sLogoIco}>◆</div>HSI OS</div>
        <div style={s.sTag}>● ENGINE LIVE</div>
        <div style={s.sSect}>Operations</div>
        <div style={s.sItemA}>◯ Command Center</div>
        <div style={s.sItem}>◉ Project Control <span style={{ marginLeft: 4, background: 'rgba(201,168,76,0.2)', color: '#C9A84C', borderRadius: 3, padding: '1px 4px', fontSize: 7 }}>6</span></div>
        <div style={s.sItem}>⬡ Digital Twin</div>
        <div style={s.sItem}>▷ Execution Engine</div>
        <div style={s.sSect}>Financial</div>
        <div style={s.sItem}>💰 Cost &amp; Procurement</div>
        <div style={s.sItem}>📊 Finance Intelligence</div>
      </div>
      <div style={s.main}>
        <div style={s.topbar}>
          <div style={s.tProj}><div style={s.tProjH}>H</div><div style={{ fontSize: 10, fontWeight: 600, color: '#F0ECE7' }}>Hestia Alibag V2 ▾</div></div>
          <div style={s.tSearch}>⌕ Search everything… ⌘K</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 7, color: '#C9A84C', fontWeight: 700 }}>Founder</span>
            <div style={s.tAvatar}>F</div>
          </div>
        </div>
        <div style={s.body}>
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#F0ECE7', fontFamily: 'serif', letterSpacing: '-0.5px' }}>Welcome back, Founder</div>
            <div style={{ fontSize: 8.5, color: 'rgba(240,236,231,0.4)', marginTop: 2 }}>Monitoring 6 active projects across ₹63.7 Cr portfolio.</div>
          </div>
          <div style={{ ...s.card, display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px' }}>
            <div style={{ fontSize: 10 }}>◆</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#F0ECE7' }}>AI INTELLIGENCE ENGINE</div>
              <div style={{ fontSize: 8, color: 'rgba(240,236,231,0.4)' }}>5 engines active · real-time monitoring</div>
            </div>
            <span style={{ ...s.badge, background: 'rgba(239,68,68,0.15)', color: '#f87171' }}>4 CRITICAL</span>
            <span style={{ ...s.badge, background: 'rgba(250,204,21,0.15)', color: '#facc15' }}>8 WARNINGS</span>
          </div>
          <div style={s.kpiGrid}>
            <div style={s.kpiCard}><div style={s.kpiLabel}>PORTFOLIO VALUE</div><div style={s.kpiVal}>₹63.7 Cr</div><div style={{ fontSize: 7, color: '#4ade80', marginTop: 2 }}>+4.2% ↑</div></div>
            <div style={s.kpiCard}><div style={s.kpiLabel}>EST. MARGIN</div><div style={s.kpiVal}>51.3%</div><div style={{ fontSize: 7, color: '#f87171', marginTop: 2 }}>-1.5% ↓</div></div>
            <div style={s.kpiCard}><div style={s.kpiLabel}>ACTIVE VENDORS</div><div style={s.kpiVal}>12</div><div style={{ fontSize: 7, color: '#4ade80', marginTop: 2 }}>+12% ↑</div></div>
            <div style={s.kpiCard}><div style={s.kpiLabel}>EXECUTION RATE</div><div style={s.kpiVal}>34%</div><div style={{ fontSize: 7, color: '#4ade80', marginTop: 2 }}>+2.1% ↑</div></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 10 }}>
            <div style={s.card}>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: '#F0ECE7', marginBottom: 8, letterSpacing: '0.05em' }}>⚠ PRIORITY RANKING</div>
              <div style={{ background: 'rgba(250,204,21,0.06)', border: '1px solid rgba(250,204,21,0.15)', borderRadius: 5, padding: '8px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                  <span style={{ fontSize: 8.5, fontWeight: 700, color: '#F0ECE7' }}>#1 Flooring</span>
                  <span style={{ ...s.badge, background: 'rgba(250,204,21,0.2)', color: '#facc15' }}>Delay</span>
                </div>
                <div style={{ fontSize: 7.5, color: 'rgba(240,236,231,0.4)' }}>1 day overdue · Entrance Porch</div>
              </div>
            </div>
            <div style={s.card}>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: '#F0ECE7', marginBottom: 8, letterSpacing: '0.05em' }}>◆ FINANCIAL FORECAST</div>
              {[['APPROVED BUDGET', '₹1.00 Cr', 100, '#C9A84C'], ['CURRENT SPEND', '₹0.02 Cr', 2, 'rgba(201,168,76,0.5)'], ['PROJECTED FINAL', '₹0.01 Cr', 1, '#4ade80']].map(([lbl, val, pct, clr]) => (
                <div key={String(lbl)} style={{ marginBottom: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 7, color: 'rgba(240,236,231,0.4)' }}>{lbl}</span>
                    <span style={{ fontSize: 8.5, fontWeight: 700, color: '#F0ECE7' }}>{val}</span>
                  </div>
                  <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${pct}%`, background: String(clr), borderRadius: 2 }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 8, padding: '4px 8px', background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: 4, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 8, color: '#4ade80' }}>✓ Under Budget</span>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#4ade80' }}>-₹0.99 Cr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PortfolioIntelligence() {
  const projects = [
    { name: 'Hestia Alibag V2',        loc: 'Alibag Beachfront · Villa',      budget: '₹15 Cr',  spent: '₹4.5 Cr',  balance: '₹10.5 Cr', pct: 34 },
    { name: 'Mumbai Sky Penthouse',     loc: 'Worli Sea Face · Penthouse',     budget: '₹22 Cr',  spent: '₹18.5 Cr', balance: '₹3.5 Cr',  pct: 82 },
    { name: 'Goa Eco Retreat',          loc: 'Ashwem Beach · Hospitality',     budget: '₹7.5 Cr', spent: '₹1.8 Cr',  balance: '₹5.7 Cr',  pct: 22 },
    { name: 'Serenity Heights Lonavala',loc: 'Lonavala Hill Station · Villa',  budget: '₹9.5 Cr', spent: '₹6.2 Cr',  balance: '₹3.3 Cr',  pct: 68 },
  ]
  return (
    <div style={s.shell}>
      <div style={s.sidebar}>
        <div style={s.sLogo}><div style={s.sLogoIco}>◆</div>HSI OS</div>
        <div style={s.sTag}>● ENGINE LIVE</div>
        <div style={s.sSect}>Operations</div>
        <div style={s.sItem}>◯ Command Center</div>
        <div style={s.sItemA}>◉ Project Control <span style={{ marginLeft: 4, background: 'rgba(201,168,76,0.2)', color: '#C9A84C', borderRadius: 3, padding: '1px 4px', fontSize: 7 }}>6</span></div>
        <div style={s.sItem}>⬡ Digital Twin</div>
        <div style={s.sItem}>▷ Execution Engine</div>
      </div>
      <div style={s.main}>
        <div style={s.topbar}>
          <div style={s.tProj}><div style={s.tProjH}>H</div><div style={{ fontSize: 10, fontWeight: 600, color: '#F0ECE7' }}>Hestia Alibag V2 ▾</div></div>
          <div style={s.tSearch}>⌕ Search everything...</div>
          <div style={s.tAvatar}>F</div>
        </div>
        <div style={s.body}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#F0ECE7', fontFamily: 'serif' }}>Portfolio Intelligence</div>
              <div style={{ fontSize: 9, color: 'rgba(240,236,231,0.4)' }}>6 active projects in system.</div>
            </div>
            <button style={{ fontSize: 9, padding: '5px 12px', background: '#C9A84C', color: '#12110F', border: 'none', borderRadius: 4, fontWeight: 700, cursor: 'pointer' }}>+ New Project</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {projects.map(p => (
              <div key={p.name} style={s.projCard}>
                <div style={{ fontSize: 7, fontWeight: 700, color: 'rgba(240,236,231,0.4)', letterSpacing: '0.06em', marginBottom: 4 }}>◯ PLANNING</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#F0ECE7', marginBottom: 2 }}>{p.name}</div>
                <div style={{ fontSize: 8, color: 'rgba(240,236,231,0.4)', marginBottom: 8 }}>📍 {p.loc}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4, marginBottom: 6 }}>
                  {[['BUDGET', p.budget, '#F0ECE7'], ['SPENT', p.spent, '#F0ECE7'], ['BALANCE', p.balance, '#C9A84C'], ['PROGRESS', `${p.pct}%`, '#F0ECE7']].map(([k, v, c]) => (
                    <div key={String(k)}>
                      <div style={{ fontSize: 8.5, fontWeight: 700, color: String(c) }}>{v}</div>
                      <div style={{ fontSize: 6.5, color: 'rgba(240,236,231,0.4)' }}>{k}</div>
                    </div>
                  ))}
                </div>
                <div style={s.progBar}><div style={{ height: '100%', width: `${p.pct}%`, background: '#C9A84C', borderRadius: 2 }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DigitalTwin() {
  return (
    <div style={s.shell}>
      <div style={s.sidebar}>
        <div style={s.sLogo}><div style={s.sLogoIco}>◆</div>HSI OS</div>
        <div style={s.sTag}>● ENGINE LIVE</div>
        <div style={s.sSect}>Operations</div>
        <div style={s.sItem}>◯ Command Center</div>
        <div style={s.sItem}>◉ Project Control</div>
        <div style={s.sItemA}>⬡ Digital Twin</div>
        <div style={s.sItem}>▷ Execution Engine</div>
      </div>
      <div style={s.main}>
        <div style={s.topbar}>
          <div style={s.tProj}><div style={s.tProjH}>H</div><div style={{ fontSize: 10, fontWeight: 600, color: '#F0ECE7' }}>Hestia Alibag V2 ▾</div></div>
          <div style={s.tSearch}>⌕ Search everything...</div>
          <div style={s.tAvatar}>F</div>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '150px 1fr 170px', overflow: 'hidden' }}>
          {/* Spaces list */}
          <div style={{ borderRight: '1px solid rgba(255,255,255,0.07)', padding: '10px 0', overflow: 'hidden' }}>
            <div style={{ fontSize: 7.5, fontWeight: 700, color: 'rgba(240,236,231,0.4)', padding: '0 10px 6px', letterSpacing: '0.06em' }}>SPACES <span style={{ float: 'right', color: '#C9A84C' }}>12</span></div>
            {['Entrance Porch', 'Grand Living Room', 'Dining Room', 'Country Kitchen', 'Master Bedroom'].map((room, i) => (
              <div key={room} style={{ fontSize: 9, color: i === 0 ? '#F0ECE7' : 'rgba(240,236,231,0.5)', padding: '5px 10px', background: i === 0 ? 'rgba(255,255,255,0.06)' : 'transparent', display: 'flex', justifyContent: 'space-between' }}>
                <span>{room}</span><span style={{ color: 'rgba(240,236,231,0.3)' }}>0%</span>
              </div>
            ))}
          </div>
          {/* 3D canvas */}
          <div style={{ background: '#2a2a28', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: 8, padding: '6px 10px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {['STRUCTURAL','FLOOR PLAN','4D TIMELINE','MEP'].map((t, i) => (
                <span key={t} style={{ fontSize: 7.5, fontWeight: 700, color: i === 0 ? '#F0ECE7' : 'rgba(240,236,231,0.4)', letterSpacing: '0.06em', cursor: 'pointer' }}>{t}</span>
              ))}
              <span style={{ marginLeft: 'auto', fontSize: 8, color: '#4ade80' }}>FPS 60</span>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ border: '1px solid rgba(201,168,76,0.2)', borderRadius: 6, padding: '30px 50px', textAlign: 'center' }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#C9A84C', letterSpacing: '0.08em', marginBottom: 6 }}>DIGITAL TWIN</div>
                <div style={{ fontSize: 8, color: 'rgba(240,236,231,0.4)' }}>AD PROJECT</div>
              </div>
              {[[40,42,0],[60,65,0.4],[30,72,0.8]].map(([t,l,d]) => (
                <div key={`${t}-${l}`} style={{ position: 'absolute', top: `${t}%`, left: `${l}%`, width: 8, height: 8, borderRadius: '50%', background: '#C9A84C', boxShadow: '0 0 8px #C9A84C', opacity: 0.8 }} />
              ))}
            </div>
            <div style={{ padding: '5px 10px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 12, fontSize: 8, color: 'rgba(240,236,231,0.4)' }}>
              <span>📍 ENTRANCE PORCH</span><span>● 0 LIVE EVENTS</span><span style={{ marginLeft: 'auto' }}>3 of 12</span>
            </div>
          </div>
          {/* Details panel */}
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.07)', padding: 12, overflow: 'hidden' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#F0ECE7', marginBottom: 8 }}>AD Project · Pune</div>
            {[['PROGRESS','0%'],['PHASE','PLANNING'],['CONTRACT','₹1.0 Cr']].map(([k,v]) => (
              <div key={String(k)} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 8 }}>
                <span style={{ color: 'rgba(240,236,231,0.4)' }}>{k}</span>
                <span style={{ color: k === 'PHASE' ? '#C9A84C' : '#F0ECE7', fontWeight: 600 }}>{v}</span>
              </div>
            ))}
            {['Flooring','Wall Cladding','False Ceiling'].map(comp => (
              <div key={comp} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 5, padding: '6px 8px', marginBottom: 5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8.5, color: '#F0ECE7', marginBottom: 2 }}>
                  <span>{comp}</span><span style={{ fontSize: 7, border: '1px solid rgba(255,255,255,0.15)', borderRadius: 2, padding: '1px 5px', color: 'rgba(240,236,231,0.5)' }}>PLANNED</span>
                </div>
                <div style={{ fontSize: 7.5, color: 'rgba(240,236,231,0.4)' }}>₹0 planned · On Track</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function EIMDashboard() {
  const pipeline = [
    { icon: '▦', label: 'DATA LAYER',      sub: 'Site data collection',  clr: '#60a5fa' },
    { icon: '⚡', label: 'SIGNAL LAYER',    sub: '8 signals generated',   clr: '#a78bfa' },
    { icon: '📊', label: 'PATTERN LAYER',   sub: 'Trend detection',        clr: '#C9A84C' },
    { icon: '🎯', label: 'PREDICTION LAYER',sub: 'Risk probability',       clr: '#f87171' },
    { icon: '◆',  label: 'INSIGHT LAYER',   sub: 'AI recommendations',     clr: '#F0ECE7' },
  ]
  const healthSubs = [['TIMELINE','90','green'],['COST','100','green'],['VENDOR','75','#facc15'],['QUALITY','85','green']]
  return (
    <div style={s.shell}>
      <div style={s.sidebar}>
        <div style={s.sLogo}><div style={s.sLogoIco}>◆</div>HSI OS</div>
        <div style={s.sTag}>● ENGINE LIVE</div>
        <div style={s.sSect}>Intelligence</div>
        <div style={s.sItemA}>♡ EIM Dashboard</div>
        <div style={s.sItem}>◆ AI Forecasting</div>
      </div>
      <div style={s.main}>
        <div style={s.topbar}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#F0ECE7' }}>Execution Intelligence Model</div>
          <div style={{ fontSize: 8, color: '#C9A84C', marginLeft: 8 }}>⚠ AI OFFLINE — RULE-ENGINE MODE</div>
          <div style={{ marginLeft: 'auto' }}>
            <button style={{ fontSize: 9, padding: '5px 10px', background: '#C9A84C', color: '#12110F', border: 'none', borderRadius: 4, fontWeight: 700, cursor: 'pointer' }}>+ RUN EIM ANALYSIS</button>
          </div>
        </div>
        <div style={{ ...s.body }}>
          <div style={{ ...s.card, marginBottom: 12 }}>
            <div style={{ fontSize: 8.5, fontWeight: 700, color: '#C9A84C', letterSpacing: '0.06em', marginBottom: 10 }}>✦ EXECUTION INTELLIGENCE PIPELINE</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, overflowX: 'auto' }}>
              {pipeline.map((p, i) => (
                <>
                  <div key={p.label} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${p.clr}33`, borderRadius: 6, padding: '6px 10px', textAlign: 'center', flexShrink: 0 }}>
                    <div style={{ fontSize: 14, marginBottom: 3 }}>{p.icon}</div>
                    <div style={{ fontSize: 7, fontWeight: 700, color: p.clr, letterSpacing: '0.05em' }}>{p.label}</div>
                    <div style={{ fontSize: 6.5, color: 'rgba(240,236,231,0.4)', marginTop: 2 }}>{p.sub}</div>
                  </div>
                  {i < pipeline.length - 1 && <span key={`arr-${i}`} style={{ fontSize: 10, color: 'rgba(240,236,231,0.3)', flexShrink: 0 }}>→</span>}
                </>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 12 }}>
            <div style={s.card}>
              <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(240,236,231,0.5)', letterSpacing: '0.06em', marginBottom: 10 }}>🏆 EXECUTION HEALTH SCORE</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ position: 'relative', width: 80, height: 80 }}>
                  <svg viewBox="0 0 100 100" width="80" height="80">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#4ade80" strokeWidth="8"
                      strokeDasharray="263.9" strokeDashoffset="29" strokeLinecap="round"
                      transform="rotate(-90 50 50)"/>
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: '#F0ECE7', fontFamily: 'serif' }}>89</div>
                  </div>
                </div>
                <div style={{ fontSize: 8, fontWeight: 700, color: '#4ade80', letterSpacing: '0.08em' }}>HEALTHY</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, width: '100%' }}>
                  {healthSubs.map(([k,v,c]) => (
                    <div key={String(k)} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 4, padding: '5px 8px', textAlign: 'center' }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: c === 'green' ? '#4ade80' : String(c) }}>{v}</div>
                      <div style={{ fontSize: 6.5, color: 'rgba(240,236,231,0.4)' }}>{k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ ...s.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(240,236,231,0.5)', letterSpacing: '0.06em', alignSelf: 'flex-start' }}>✦ AI ANALYSIS</div>
              <div style={{ fontSize: 28 }}>◆</div>
              <div style={{ fontSize: 10, color: 'rgba(240,236,231,0.4)', textAlign: 'center', padding: '0 12px' }}>
                Click <span style={{ color: '#C9A84C', fontWeight: 600 }}>Run EIM Analysis</span> to generate AI-powered execution intelligence.
              </div>
              <div style={{ fontSize: 9, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', padding: '5px 12px', borderRadius: 4, color: '#C9A84C' }}>
                ⚠ Rule-engine mode active
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PlatformPreview() {
  const [active, setActive] = useState<TabKey>('command')
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200
              ${active === t.key
                ? 'bg-charcoal-800 text-white'
                : 'bg-ivory-200 text-warmgray-600 hover:bg-ivory-300'
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl">
        {active === 'command'   && <CommandCenter />}
        {active === 'portfolio' && <PortfolioIntelligence />}
        {active === 'twin'      && <DigitalTwin />}
        {active === 'eim'       && <EIMDashboard />}
      </div>
    </div>
  )
}
