'use client'

import { useMemo, useState, type ReactNode } from 'react'

type IconName = 'grid' | 'boxes' | 'file' | 'package' | 'clipboard' | 'settings' | 'chevron' | 'menu' | 'plus' | 'search' | 'sliders' | 'shield' | 'arrow' | 'more' | 'clock' | 'archive'
type ItemStatus = 'In Stock' | 'Low Stock' | 'Expired' | 'Quarantined'

function Icon({ name, size = 17 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    boxes: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4.5 7.75 7.5 4.5 7.5-4.5M12 12.25V21" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </>
    ),
    package: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M4.5 7.75 12 12l7.5-4.25M12 12v9" />
      </>
    ),
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1M9 12l2 2 4-4M9 17h6" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.56-1.03H6v-2.4h.2A1.7 1.7 0 0 0 7.76 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.7-1.7.06.06A1.7 1.7 0 0 0 11 6.76 1.7 1.7 0 0 0 12.03 5.2V5h2.4v.2A1.7 1.7 0 0 0 15.46 6.76a1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 18.7 10a1.7 1.7 0 0 0 1.56 1.03h.2v2.4h-.2A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 6h6M14 6h6M4 12h3M11 12h9M4 18h8M16 18h4" />
        <circle cx="12" cy="6" r="2" />
        <circle cx="9" cy="12" r="2" />
        <circle cx="14" cy="18" r="2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    arrow: (
      <>
        <path d="M7 17 17 7M8 7h9v9" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    archive: (
      <>
        <path d="M4 7h16M6 7v12h12V7M9 11h6M5 4h14v3H5z" />
      </>
    ),
  }

  return (
    <svg 
      aria-hidden="true" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const items = [
  ['Nitrile Examination Gloves', 'MED-GLV-1002', 'Medical Supplies', '12,480', 'WH-A / Aisle 04', 'Nov 24, 2027', 'In Stock'],
  ['Sterile Saline Solution 500ml', 'MED-SAL-0500', 'Medical Supplies', '842', 'WH-A / Aisle 07', 'Aug 12, 2026', 'Low Stock'],
  ['Industrial Safety Helmet', 'PPE-HLM-0018', 'PPE & Safety', '2,360', 'WH-B / Rack 12', 'Mar 30, 2029', 'In Stock'],
  ['Hydraulic Filter Element', 'MRO-FLT-2240', 'MRO Components', '94', 'WH-C / Bin 08', 'Jan 16, 2027', 'Low Stock'],
  ['Epoxy Resin — Part A', 'CHM-EPX-A210', 'Chemicals', '0', 'WH-B / Quarantine', 'Feb 02, 2026', 'Expired'],
  ['High Visibility Safety Vest', 'PPE-VST-0007', 'PPE & Safety', '634', 'WH-B / Rack 04', 'Sep 18, 2028', 'In Stock'],
]

const auditRows = [
  ['Today, 09:42:18', 'Jordan Lee', 'JL', 'Item updated', 'blue', 'Sterile Saline Solution 500ml · MED-SAL-0500', 'Stock threshold changed from 1,000 to 850 units'],
  ['Today, 08:16:04', 'Amara Okafor', 'AO', 'Compliance review', 'violet', 'Epoxy Resin — Part A · CHM-EPX-A210', 'Item moved to quarantine location'],
  ['Yesterday, 16:28:51', 'System', 'SY', 'Status changed', 'amber', 'Hydraulic Filter Element · MRO-FLT-2240', 'Automatic low-stock threshold reached'],
  ['Yesterday, 14:03:27', 'Derek Chen', 'DC', 'Item created', 'green', 'High Visibility Safety Vest · PPE-VST-0007', 'Created with 634 units across WH-B'],
  ['Sep 18, 11:37:10', 'Jordan Lee', 'JL', 'Item updated', 'blue', 'Nitrile Examination Gloves · MED-GLV-1002', 'Expiration date updated to Nov 24, 2027'],
]

function Status({ value }: { value: string }) {
  const tone = value === 'In Stock' ? 'emerald' : value === 'Low Stock' ? 'amber' : value === 'Expired' ? 'red' : 'violet'
  
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-${tone}-50 px-2.5 py-1 text-xs font-medium text-${tone}-700 ring-1 ring-inset ring-${tone}-600/20`}>
      <span className="size-1.5 rounded-full bg-current" />
      {value}
    </span>
  )
}

export default function CatalogPage({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const [tab, setTab] = useState<'catalog' | 'audit'>('catalog')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All categories')
  const [status, setStatus] = useState('All statuses')
  const [notice, setNotice] = useState('')

  const filtered = useMemo(
    () => 
      items.filter(
        (item) => 
          (`${item[0]} ${item[1]}`).toLowerCase().includes(query.toLowerCase()) && 
          (category === 'All categories' || item[2] === category) && 
          (status === 'All statuses' || item[6] === status)
      ), 
    [query, category, status]
  )
  
  const notify = (message: string) => { 
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2200) 
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900 pb-12">
      <header className="flex min-h-[72px] items-center justify-between gap-4 border-b border-slate-200/90 bg-white px-5 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-[11px] font-medium text-slate-400">Catalog / Inventory</p>
            <h1 className="text-[17px] font-semibold tracking-[-0.02em]">Item Catalog &amp; Compliance Audit Trail</h1>
          </div>
        </div>
        <button 
          onClick={() => notify('New item form ready to open')} 
          className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-3.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          <Icon name="plus" size={15} />
          Add New Item
        </button>
      </header>

      <main className="mx-auto max-w-[1480px] px-5 py-7 sm:px-8 lg:px-10">
        <div className="mb-7 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-slate-950">Catalog governance</h2>
            <p className="mt-1 text-[13px] text-slate-500">Manage inventory records and maintain an immutable compliance history.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="text-emerald-600"><Icon name="shield" size={16} /></span>
            All records compliant <span className="text-slate-300">·</span> Last synced 2m ago
          </div>
        </div>

        <div className="mb-6 flex items-center gap-1 border-b border-slate-200">
          <button 
            onClick={() => setTab('catalog')} 
            className={`relative px-4 pb-3 text-[13px] font-semibold ${tab === 'catalog' ? 'text-blue-700' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Master Inventory Catalog
            {tab === 'catalog' && <span className="absolute inset-x-0 bottom-[-1px] h-0.5 rounded-full bg-blue-600" />}
          </button>
          <button 
            onClick={() => setTab('audit')} 
            className={`relative px-4 pb-3 text-[13px] font-semibold ${tab === 'audit' ? 'text-blue-700' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Immutable Audit Ledger
            {tab === 'audit' && <span className="absolute inset-x-0 bottom-[-1px] h-0.5 rounded-full bg-blue-600" />}
          </button>
        </div>

        {tab === 'catalog' ? (
          <section aria-label="Master Inventory Catalog">
            <div className="mb-4 grid gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-[minmax(220px,1fr)_190px_160px_auto]">
              <label className="relative">
                <span className="sr-only">Search catalog</span>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Icon name="search" size={15} />
                </span>
                <input 
                  value={query} 
                  onChange={(e) => setQuery(e.target.value)} 
                  placeholder="Search by item name or SKU..." 
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100" 
                />
              </label>
              
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-blue-400"
              >
                <option>All categories</option>
                <option>Medical Supplies</option>
                <option>PPE &amp; Safety</option>
                <option>MRO Components</option>
                <option>Chemicals</option>
              </select>
              
              <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)} 
                className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-blue-400"
              >
                <option>All statuses</option>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Expired</option>
              </select>
              
              <button 
                onClick={() => { 
                  setQuery('')
                  setCategory('All categories')
                  setStatus('All statuses') 
                }} 
                className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-600 hover:bg-slate-50"
              >
                <Icon name="sliders" size={14} />
                Reset
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h3 className="text-sm font-semibold">Master inventory catalog</h3>
                  <p className="mt-0.5 text-xs text-slate-400">{filtered.length} of {items.length} records</p>
                </div>
                <button 
                  onClick={() => notify('Export queued for download')} 
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50"
                >
                  <Icon name="archive" size={14} />
                  Export
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-slate-50/80 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    <tr>
                      {['Item name & SKU', 'Category', 'Current stock qty', 'Location', 'Expiration date', 'Status', ''].map((head) => (
                        <th key={head} className="px-5 py-3 font-semibold">{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filtered.map((item) => (
                      <tr key={item[1]} className="transition-colors hover:bg-slate-50/70">
                        <td className="px-5 py-4">
                          <div className="text-xs font-semibold text-slate-800">{item[0]}</div>
                          <div className="mt-1 font-mono text-[10px] text-slate-400">{item[1]}</div>
                        </td>
                        <td className="px-5 py-4 text-xs text-slate-600">{item[2]}</td>
                        <td className="px-5 py-4 text-xs font-semibold tabular-nums text-slate-800">{item[3]}</td>
                        <td className="px-5 py-4 text-xs text-slate-600">{item[4]}</td>
                        <td className="px-5 py-4 text-xs text-slate-600">{item[5]}</td>
                        <td className="px-5 py-4"><Status value={item[6]} /></td>
                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-1">
                            <button 
                              onClick={() => notify(`Editing ${item[0]}`)} 
                              className="rounded-md px-2 py-1.5 text-[11px] font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => notify(`History opened for ${item[1]}`)} 
                              className="rounded-md px-2 py-1.5 text-[11px] font-medium text-blue-600 hover:bg-blue-50"
                            >
                              History
                            </button>
                            <button 
                              aria-label={`More actions for ${item[0]}`} 
                              className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100"
                            >
                              <Icon name="more" size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ) : (
          <section aria-label="Immutable Audit Ledger">
            <div className="mb-4 flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-xs text-blue-800">
              <span className="text-blue-600"><Icon name="shield" size={16} /></span>
              <span>
                <strong>Immutable audit events</strong>
                <span className="ml-1 text-blue-700/80">Every catalog mutation is cryptographically signed and retained for compliance review.</span>
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h3 className="text-sm font-semibold">Compliance activity ledger</h3>
                  <p className="mt-0.5 text-xs text-slate-400">Read-only event history · 5 recent events</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700">
                  <Icon name="shield" size={14} />Chain verified
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[850px] text-left">
                  <thead className="bg-slate-50/80 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    <tr>
                      {['Timestamp', 'User', 'Action type', 'Item details', ''].map((head) => (
                        <th key={head} className="px-5 py-3 font-semibold">{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {auditRows.map((row) => (
                      <tr key={row[0] + row[1]} className="hover:bg-slate-50/70">
                        <td className="px-5 py-4 text-xs tabular-nums text-slate-500">
                          <span className="inline-flex items-center gap-2">
                            <Icon name="clock" size={13} />
                            {row[0]}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-700">
                            <span className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-[10px] font-semibold text-slate-500">
                              {row[2]}
                            </span>
                            {row[1]}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            row[4] === 'blue' 
                              ? 'bg-blue-50 text-blue-700' 
                              : row[4] === 'violet' 
                              ? 'bg-violet-50 text-violet-700' 
                              : row[4] === 'amber' 
                              ? 'bg-amber-50 text-amber-700' 
                              : 'bg-emerald-50 text-emerald-700'
                          }`}>
                            {row[3]}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-xs font-medium text-slate-700">{row[5]}</div>
                          <div className="mt-1 text-[11px] text-slate-400">{row[6]}</div>
                        </td>
                        <td className="px-5 py-4 text-right text-slate-300">
                          <Icon name="arrow" size={15} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>

      {notice && (
        <div role="status" className="fixed bottom-5 left-1/2 z-30 -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-medium text-white shadow-xl">
          {notice}
        </div>
      )}
    </div>
  )
}