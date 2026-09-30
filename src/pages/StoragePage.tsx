'use client'

import { useMemo, useState } from 'react'

type Level = 'locations' | 'suite' | 'cabinet' | 'shelf'
type IconName = 'grid' | 'pin' | 'clipboard' | 'box' | 'sliders' | 'settings' | 'logout' | 'bell' | 'search' | 'plus' | 'move' | 'scan' | 'folder' | 'package' | 'shield' | 'menu' | 'close' | 'chevron'

type Location = {
  name: string
  kind: string
  count: number
  detail: string
}

type Item = {
  name: string
  sku: string
  lot: string
  expiration: string
  quantity: number
  status: string
}

const locations: Record<Level, Location[]> = {
  locations: [
    { name: 'Sterilization Room', kind: 'Room', count: 12, detail: 'Cleaning & sterilization' },
    { name: 'Exam Room 1', kind: 'Room', count: 8, detail: 'Patient care supplies' },
    { name: 'Main Supply Closet', kind: 'Room', count: 45, detail: 'Central inventory storage' },
    { name: 'Main Dental Suite', kind: 'Suite', count: 54, detail: 'Dental care storage' },
  ],
  suite: [
    { name: 'Cabinet A', kind: 'Cabinet', count: 18, detail: 'Main Dental Suite' },
    { name: 'Cabinet B', kind: 'Cabinet', count: 22, detail: 'Main Dental Suite' },
    { name: 'Countertop Drawer', kind: 'Drawer', count: 14, detail: 'Main Dental Suite' },
  ],
  cabinet: [
    { name: 'Shelf 1', kind: 'Shelf', count: 6, detail: 'Cabinet A' },
    { name: 'Shelf 2', kind: 'Shelf', count: 11, detail: 'Cabinet A' },
    { name: 'Shelf 3', kind: 'Shelf', count: 14, detail: 'Cabinet A' },
  ],
  shelf: [
    { name: 'Bin #4', kind: 'Bin', count: 14, detail: 'Cabinet A · Shelf 3' },
    { name: 'Bin #5', kind: 'Bin', count: 9, detail: 'Cabinet A · Shelf 3' },
  ],
}

const items: Item[] = [
  { name: 'Nitrile Gloves · Medium', sku: 'GLV-NTR-M', lot: 'LT-48392', expiration: 'Oct 24, 2026', quantity: 120, status: 'Safe' },
  { name: 'Dental Bibs · Blue', sku: 'BIB-BLU-500', lot: 'LT-49018', expiration: 'Nov 08, 2026', quantity: 86, status: 'Safe' },
  { name: 'Composite Resin Syringes', sku: 'CMP-RSN-A2', lot: 'LT-47221', expiration: 'Oct 02, 2026', quantity: 24, status: 'Expiring Soon' },
  { name: 'Prophy Angles · Soft', sku: 'PRP-ANG-S', lot: 'LT-48110', expiration: 'Dec 12, 2026', quantity: 7, status: 'Low Stock' },
  { name: 'Surface Disinfectant Wipes', sku: 'DSN-WIP-160', lot: 'LT-48880', expiration: 'Jan 15, 2027', quantity: 54, status: 'Safe' },
]

function Icon({ name, size = 17 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, string> = {
    grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
    pin: 'M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    clipboard: 'M9 5h6M9 3h6v4H9zM6 5H4v16h16V5h-2M8 12h8M8 16h5',
    box: 'M4 7l8-4 8 4v10l-8 4-8-4V7Zm0 0 8 4 8-4M12 11v10',
    sliders: 'M4 7h16M4 17h16M8 4v6M16 14v6',
    settings: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-12v2M12 18.5v2M4.6 6.1l1.4 1.4M18 18l1.4 1.4M3 12h2M19 12h2M4.6 17.9 6 16.5M18 6l1.4-1.4',
    logout: 'M10 17l5-5-5-5M15 12H3M21 19V5a2 2 0 0 0-2-2h-6',
    bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4',
    search: 'M20 20l-4-4M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z',
    plus: 'M12 5v14M5 12h14',
    move: 'M5 12h14M12 5l7 7-7 7M5 5h4v4H5z',
    scan: 'M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4',
    folder: 'M3 6h7l2 2h9v11H3z',
    package: 'M5 8l7-4 7 4v8l-7 4-7-4V8Zm0 0 7 4 7-4M12 12v8',
    shield: 'M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z',
    menu: 'M4 7h16M4 12h16M4 17h16',
    close: 'M6 6l12 12M18 6 6 18',
    chevron: 'M9 18l6-6-6-6',
  }
  
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  )
}

function Status({ value }: { value: string }) {
  const color = 
    value === 'Safe' 
      ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/15' 
      : value === 'Expiring Soon' 
      ? 'bg-amber-50 text-amber-700 ring-amber-600/20' 
      : 'bg-rose-50 text-rose-700 ring-rose-600/15'
      
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${color}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {value}
    </span>
  )
}

export default function StoragePage({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const [level, setLevel] = useState<Level>('shelf')
  const [selected, setSelected] = useState('Bin #4')
  
  const visible = locations[level]
  const current = useMemo(
    () => visible.find((entry) => entry.name === selected) || visible[0], 
    [level, selected]
  )
  
  const crumbs = [
    { label: 'Locations', level: 'locations' as Level, selection: 'Main Dental Suite' },
    { label: 'Main Dental Suite', level: 'suite' as Level, selection: 'Cabinet A' },
    { label: 'Cabinet A', level: 'cabinet' as Level, selection: 'Shelf 3' },
    { label: 'Shelf 3', level: 'shelf' as Level, selection: 'Bin #4' },
  ]
  
  const go = (nextLevel: Level, nextSelection: string) => { 
    setLevel(nextLevel)
    setSelected(nextSelection) 
  }
  
  const shown = items.slice(0, Math.max(2, Math.ceil(current.count / 6)))

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900 pb-12">
      <header className="sticky top-0 z-20 flex h-[70px] items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative hidden w-[260px] sm:block">
            <Icon name="search" size={16} />
            <input 
              aria-label="Search inventory" 
              placeholder="Search inventory..." 
              className="absolute inset-0 h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-12 text-xs outline-none placeholder:text-slate-400 focus:border-blue-400" 
            />
            <span className="pointer-events-none absolute right-2 top-2 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">⌘ K</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 shadow-sm sm:flex">
            <Icon name="plus" size={14} />Add Room / Container
          </button>
          <button className="hidden h-9 items-center gap-2 rounded-lg bg-slate-900 px-3 text-xs font-semibold text-white shadow-sm md:flex">
            <Icon name="move" size={14} />Move Item
          </button>
          <button className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 shadow-sm">
            <Icon name="scan" size={14} />Scan Barcode
          </button>
          <span className="mx-1 h-5 w-px bg-slate-200" />
          <button aria-label="Notifications" className="relative p-2 text-slate-500">
            <Icon name="bell" size={18} />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700">JD</div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-5 py-7 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-1.5 text-xs text-slate-400">
              {crumbs.map((crumb, index) => (
                <span key={crumb.label} className="flex items-center gap-1.5">
                  <button 
                    onClick={() => go(crumb.level, crumb.selection)} 
                    className={`rounded px-1 py-0.5 hover:bg-blue-50 hover:text-blue-600 ${level === crumb.level ? 'font-semibold text-blue-700' : ''}`}
                  >
                    {crumb.label}
                  </button>
                  {index < crumbs.length - 1 && <Icon name="chevron" size={13} />}
                </span>
              ))}
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-950">Storage</h1>
            <p className="mt-1 text-sm text-slate-500">Navigate your physical inventory by location and storage compartment.</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600">
              <Icon name="sliders" size={14} />Filter
            </button>
            <button className="flex h-9 items-center gap-2 rounded-lg bg-blue-600 px-3 text-xs font-semibold text-white">
              <Icon name="plus" size={14} />Add location
            </button>
          </div>
        </div>

        <div className="mb-5 flex items-center gap-2 overflow-x-auto rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <span className="flex shrink-0 items-center gap-2 text-xs font-semibold text-slate-700">
            <Icon name="pin" size={15} />Current location
          </span>
          <span className="text-slate-300">→</span>
          {crumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex shrink-0 items-center gap-2">
              <button 
                onClick={() => go(crumb.level, crumb.selection)} 
                className={`rounded-md px-2 py-1 text-xs hover:bg-blue-50 hover:text-blue-700 ${level === crumb.level ? 'bg-blue-50 font-semibold text-blue-700' : 'text-slate-500'}`}
              >
                {crumb.label}
              </button>
              {index < crumbs.length - 1 && <Icon name="chevron" size={13} />}
            </span>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(300px,0.83fr)_minmax(0,1.65fr)]">
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900">Storage locations</h2>
                <p className="mt-0.5 text-xs text-slate-400">{visible.length} locations in this hierarchy</p>
              </div>
              <Icon name="sliders" size={16} />
            </div>
            <div className="p-3">
              {visible.map((location) => (
                <button 
                  key={location.name} 
                  onClick={() => setSelected(location.name)} 
                  className={`group mb-1 flex w-full items-start gap-3 rounded-lg border px-3 py-3 text-left ${
                    selected === location.name 
                      ? 'border-blue-200 bg-blue-50/70 shadow-sm' 
                      : 'border-transparent hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                    selected === location.name 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Icon name={location.kind === 'Bin' ? 'package' : 'folder'} size={15} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-[13px] font-semibold text-slate-800">{location.name}</p>
                      <Icon name="chevron" size={15} />
                    </div>
                    <p className="mt-1 truncate text-[11px] text-slate-400">{location.detail}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">{location.kind}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="text-[10px] text-slate-500">{location.count} items</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="border-t border-slate-100 px-5 py-3 text-[11px] text-slate-400">Select a location to view its contents</div>
          </section>

          <section className="min-w-0 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col justify-between gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-slate-900">Contents in {current.name}</h2>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">{current.count} items</span>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                  <Icon name="pin" size={12} />{current.detail} · Last updated 12 min ago
                </p>
              </div>
              <button className="flex h-8 items-center gap-1.5 rounded-md border border-slate-200 px-2.5 text-xs font-semibold text-slate-600">
                <Icon name="plus" size={13} />Add item
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th className="px-5 py-3">Item name</th>
                    <th className="px-3 py-3">SKU</th>
                    <th className="px-3 py-3">Lot number</th>
                    <th className="px-3 py-3">Expiration date</th>
                    <th className="px-3 py-3 text-right">Quantity</th>
                    <th className="px-3 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {shown.map((item) => (
                    <tr key={item.sku} className="hover:bg-slate-50/70">
                      <td className="whitespace-nowrap px-5 py-3.5 text-[12px] font-semibold text-slate-800">{item.name}</td>
                      <td className="px-3 py-3.5 text-[11px] text-slate-500">{item.sku}</td>
                      <td className="px-3 py-3.5 text-[11px] text-slate-500">{item.lot}</td>
                      <td className="px-3 py-3.5 text-[11px] text-slate-500">{item.expiration}</td>
                      <td className="px-3 py-3.5 text-right text-[12px] font-semibold">{item.quantity}</td>
                      <td className="px-3 py-3.5"><Status value={item.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {[
            ['Location capacity', '68%', '14 of 20 slots occupied', 'folder'],
            ['Inventory health', 'Good', '92% of items are within safe levels', 'shield'],
            ['Last cycle count', 'Sep 18', 'Counted by Jordan Davis', 'clipboard']
          ].map(([title, value, detail, icon]) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500">{title}</p>
                  <p className="mt-1 text-xl font-bold tracking-tight">{value}</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Icon name={icon as IconName} size={16} />
                </div>
              </div>
              {title === 'Location capacity' && (
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[68%] rounded-full bg-blue-500" />
                </div>
              )}
              <p className="mt-3 text-[11px] text-slate-400">{detail}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}