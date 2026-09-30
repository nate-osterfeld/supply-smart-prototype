'use client'

import { useState, type ReactNode } from 'react'

type IconName = 'boxes' | 'dashboard' | 'stethoscope' | 'clipboard' | 'package' | 'chart' | 'settings' | 'file' | 'chevron' | 'menu' | 'search' | 'bell' | 'plus' | 'calendar' | 'alert' | 'arrow' | 'x' | 'sparkles'

function Icon({ name, size = 18, stroke = 1.8 }: { name: IconName; size?: number; stroke?: number }) {
  const common = { 
    width: size, 
    height: size, 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    strokeWidth: stroke, 
    strokeLinecap: 'round' as const, 
    strokeLinejoin: 'round' as const, 
    'aria-hidden': true 
  }
  
  const paths: Record<IconName, ReactNode> = {
    boxes: (
      <>
        <path d="m21 8-9-5-9 5 9 5 9-5Z" />
        <path d="m3 8 9 5 9-5" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    stethoscope: (
      <>
        <path d="M4 3v5a4 4 0 0 0 8 0V3" />
        <path d="M8 3v5" />
        <path d="M4 3h8" />
        <path d="M12 12v2a5 5 0 0 0 10 0v-1" />
        <circle cx="20" cy="10" r="2" />
      </>
    ),
    clipboard: (
      <>
        <rect x="4" y="4" width="16" height="17" rx="2" />
        <path d="M9 4V3h6v1M8 9h8M8 13h8M8 17h5" />
      </>
    ),
    package: (
      <>
        <path d="m21 8-9-5-9 5 9 5 9-5Z" />
        <path d="M3 8v8l9 5 9-5V8M12 13v8" />
        <path d="m7.5 5.5 9 5" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5M4 19h17" />
        <path d="m7 15 3-4 3 2 5-7" />
      </>
    ),
    settings: (
      <>
        <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="m19.4 15 .1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.9 1.9 0 0 0-3.2 1.3V19a2 2 0 1 1-4 0v-.1a1.9 1.9 0 0 0-3.2-1.3l-.1.1a2 2 0 1 1-2.8-2.8l-.1-.1A1.9 1.9 0 0 0 2.1 12 1.9 1.9 0 0 0 3.4 8.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.9 1.9 0 0 0 9.4 4.7V4.5a2 2 0 1 1 4 0v.1a1.9 1.9 0 0 0 3.2 1.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.9 1.9 0 0 0 20.7 12a1.9 1.9 0 0 0-1.3 3Z" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
    alert: (
      <>
        <path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4M12 17h.01" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    x: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3-1.2 4.8L6 9l4.8 1.2L12 15l1.2-4.8L18 9l-4.8-1.2L12 3ZM19 15l-.6 2.4L16 18l2.4.6L19 21l.6-2.4L22 18l-2.4-.6L19 15Z" />
      </>
    ),
  }
  
  return <svg {...common}>{paths[name]}</svg>
}

const procedures = [
  ['Mon, Jun 16', '08:30 AM', 'Dental Implant', 'Operatory 04', 'Ready', '2 kits'],
  ['Tue, Jun 17', '10:00 AM', 'Root Canal', 'Operatory 02', 'Deficit', '3 kits'],
  ['Wed, Jun 18', '01:30 PM', 'Composite Restoration', 'Operatory 01', 'Ready', '1 kit'],
  ['Thu, Jun 19', '09:15 AM', 'Dental Implant', 'Operatory 04', 'Deficit', '2 kits'],
]

const supplies = [
  ['Anesthetic Vials', 'Consumable', 30, 12, 'vials'],
  ['Implant Fixture — 4.2mm', 'Procedure kit', 8, 8, 'units'],
  ['Surgical Suture 4-0', 'Consumable', 24, 18, 'packs'],
  ['Composite Resin A2', 'Consumable', 12, 15, 'syringes'],
]

export default function ForecastPage({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const [range, setRange] = useState('next')
  const [alertVisible, setAlertVisible] = useState(true)
  const [expanded, setExpanded] = useState<number | null>(null)
  const [purchaseOrder, setPurchaseOrder] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900 pb-12">
      <header className="flex h-[68px] items-center justify-between border-b border-slate-200/80 bg-white px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-[11px] font-medium text-slate-400">Forecast / Planning</p>
            <h1 className="text-[16px] font-semibold">Procedure Schedule &amp; Demand Forecast</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden p-2 text-slate-500 sm:block"><Icon name="search" /></button>
          <button className="p-2 text-slate-500"><Icon name="bell" /></button>
          <button className="hidden items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800 sm:flex">
            <Icon name="plus" size={15} /> Schedule Procedure
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-10">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-[13px] font-medium text-blue-600">Planning overview</p>
            <h2 className="text-[26px] font-semibold tracking-[-0.035em]">Upcoming schedule</h2>
            <p className="mt-1 text-sm text-slate-500">Plan coverage and inventory needs before the week begins.</p>
          </div>
          <div className="flex w-fit overflow-hidden rounded-md border border-slate-200 bg-white text-xs">
            <button 
              onClick={() => setRange('this')} 
              className={`h-9 px-3 ${range === 'this' ? 'bg-slate-100 font-medium' : ''}`}
            >
              This Week
            </button>
            <button 
              onClick={() => setRange('next')} 
              className={`h-9 border-l border-slate-200 px-3 ${range === 'next' ? 'bg-slate-100 font-medium' : ''}`}
            >
              Next Week
            </button>
            <button 
              onClick={() => setRange('custom')} 
              className={`flex h-9 items-center gap-2 border-l border-slate-200 px-3 ${range === 'custom' ? 'bg-slate-100 font-medium' : ''}`}
            >
              <Icon name="calendar" size={14} /> Custom Range
            </button>
          </div>
        </div>

        {alertVisible && (
          <div className="relative mb-6 flex gap-3 rounded-lg border border-amber-200 bg-[#fffaf0] px-4 py-3.5 text-amber-950">
            <Icon name="alert" size={19} stroke={2} />
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[13px] font-semibold">Supply Deficit Alert</p>
                <p className="mt-1 text-xs leading-5 text-amber-900/75">
                  Next week&apos;s schedule <strong className="text-amber-950">(17 scheduled procedures)</strong> requires 23 procedure kits; only 15 are currently available in stock.
                </p>
              </div>
              <button 
                onClick={() => setPurchaseOrder(true)} 
                className="w-fit shrink-0 rounded-md border border-amber-300 bg-white px-3 py-2 text-xs font-medium text-amber-900 shadow-sm hover:bg-amber-50"
              >
                {purchaseOrder ? 'Purchase Order Drafted' : 'Auto-Generate Purchase Order'} <Icon name="arrow" size={14} />
              </button>
            </div>
            <button 
              aria-label="Dismiss alert" 
              onClick={() => setAlertVisible(false)} 
              className="absolute right-2 top-2 p-1 text-amber-700/60"
            >
              <Icon name="x" size={15} />
            </button>
          </div>
        )}

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(360px,1fr)]">
          <section className="overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h3 className="text-[14px] font-semibold">Upcoming schedule</h3>
                <p className="mt-1 text-xs text-slate-500">17 procedures planned for Jun 16 – Jun 22, 2025</p>
              </div>
              <button className="hidden text-xs text-slate-500 sm:block">View calendar <Icon name="arrow" size={14} /></button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/70 text-[10px] uppercase tracking-[0.1em] text-slate-500">
                  <tr>
                    <th className="px-5 py-3 font-medium">Date / time</th>
                    <th className="px-3 py-3 font-medium">Procedure type</th>
                    <th className="px-3 py-3 font-medium">Room</th>
                    <th className="px-3 py-3 font-medium">Status</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {procedures.map((p, i) => (
                    <tr 
                      key={p[0]} 
                      onClick={() => setExpanded(expanded === i ? null : i)} 
                      className="cursor-pointer border-t border-slate-100 hover:bg-slate-50/70"
                    >
                      <td className="px-5 py-4 align-top">
                        <p className="text-xs font-semibold">{p[0]}</p>
                        <p className="mt-1 text-[11px] text-slate-400">{p[1]}</p>
                      </td>
                      <td className="px-3 py-4 align-top">
                        <div className="flex items-center gap-2">
                          <div className="flex size-7 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                            <Icon name="stethoscope" size={14} />
                          </div>
                          <div>
                            <p className="text-xs font-medium">{p[2]}</p>
                            <p className="mt-1 text-[11px] text-slate-400">{p[5]}</p>
                          </div>
                        </div>
                        {expanded === i && (
                          <p className="mt-3 rounded-md bg-slate-50 p-2 text-[11px] text-slate-500">
                            Kit allocation is {p[4].toLowerCase()} for this scheduled procedure.
                          </p>
                        )}
                      </td>
                      <td className="px-3 py-4 text-xs text-slate-500">{p[3]}</td>
                      <td className="px-3 py-4">
                        <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${p[4] === 'Ready' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                          {p[4]}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-400"><Icon name="chevron" size={15} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200/80 bg-white shadow-sm">
            <div className="flex items-start justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h3 className="text-[14px] font-semibold">Aggregated supply demand</h3>
                <p className="mt-1 text-xs text-slate-500">Forecast for Jun 16 – Jun 22, 2025</p>
              </div>
              <div className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon name="sparkles" size={16} />
              </div>
            </div>
            <div className="px-5 py-5">
              <div className="mb-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
                  <p className="text-[11px] text-slate-500">Items required</p>
                  <p className="mt-1 text-[22px] font-semibold">74</p>
                  <p className="mt-1 text-[10px] text-slate-400">Across 17 procedures</p>
                </div>
                <div className="rounded-lg border border-rose-200 bg-rose-50/40 p-3">
                  <p className="text-[11px] text-rose-700/70">Items available</p>
                  <p className="mt-1 text-[22px] font-semibold text-rose-700">53</p>
                  <p className="mt-1 text-[10px] text-rose-700/60">21 items short</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {supplies.map(([name, category, required, available, unit]) => {
                  const shortage = Number(required) > Number(available)
                  const coverage = Math.min(100, Math.round((Number(available) / Number(required)) * 100))
                  return (
                    <div key={String(name)} className="rounded-lg px-2 py-3 hover:bg-slate-50">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-medium">{name}</p>
                          <p className="mt-0.5 text-[10px] text-slate-400">{category}</p>
                        </div>
                        <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${shortage ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}`}>
                          {shortage ? 'Shortage' : 'Covered'}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div className={`h-full rounded-full ${shortage ? 'bg-rose-400' : 'bg-emerald-400'}`} style={{ width: `${coverage}%` }} />
                        </div>
                        <span className="text-[10px] text-slate-400">{available} / {required} {unit}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="mt-6 flex items-center gap-2 text-[11px] text-slate-400">
          <span className="size-1.5 rounded-full bg-emerald-500" /> Forecast updated just now <span className="text-slate-300">•</span> Based on current inventory and scheduled procedures
        </div>
      </main>
    </div>
  )
}