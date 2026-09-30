'use client'

import { useState } from 'react'

type IconProps = { className?: string; strokeWidth?: number }
type IconName = 'bell' | 'boxes' | 'chevron-down' | 'clipboard' | 'chart' | 'dashboard' | 'logout' | 'mail' | 'map-pin' | 'menu' | 'network' | 'package' | 'pencil' | 'save' | 'send' | 'settings' | 'shield' | 'sparkles' | 'trash' | 'users' | 'x'

function InlineIcon({ name, className, strokeWidth = 1.8 }: IconProps & { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    boxes: (
      <>
        <path d="m21 8-9 5-9-5 9-5 9 5Z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
    'chevron-down': <path d="m6 9 6 6 6-6" />,
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V2h6v2M9 9h6M9 13h6M9 17h3" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 3-4 3 2 5-7" />
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
    logout: (
      <>
        <path d="M10 17l5-5-5-5M15 12H3" />
        <path d="M14 3h5v18h-5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    'map-pin': (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    network: (
      <>
        <rect x="9" y="3" width="6" height="6" rx="1" />
        <rect x="3" y="15" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M12 9v3M6 15v-3h12v3" />
      </>
    ),
    package: (
      <>
        <path d="m21 8-9 5-9-5 9-5 9 5Z" />
        <path d="M3 8v8l9 5 9-5V8M12 13v8" />
      </>
    ),
    pencil: (
      <>
        <path d="m4 20 4.5-1L19 8.5a2.1 2.1 0 0 0-3-3L5.5 16 4 20Z" />
        <path d="m14.5 7.5 3 3" />
      </>
    ),
    save: (
      <>
        <path d="M5 3h12l3 3v15H4V3h1Z" />
        <path d="M8 3v6h8V3M8 21v-7h8v7" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),
    settings: (
      <path 
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19.4 15l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4v.2a2 2 0 0 1-4 0v-.2a2 2 0 0 0-3.4-1.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A2 2 0 0 0 1.7 12a2 2 0 0 1 0-4h.2a2 2 0 0 0 1.4-3.4l-.1-.1A2 2 0 1 1 6 1.7l.1.1A2 2 0 0 0 9.5.4V.2a2 2 0 0 1 4 0v.2a2 2 0 0 0 3.4 1.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A2 2 0 0 0 21.2 8h.2a2 2 0 0 1 0 4h-.2a2 2 0 0 0-1.8 3Z" 
        transform="translate(0 4) scale(.67)" 
      />
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3-1.2 4.8L6 9l4.8 1.2L12 15l1.2-4.8L18 9l-4.8-1.2L12 3ZM5 16l-.6 2.4L2 19l2.4.6L5 22l.6-2.4L8 19l-2.4-.6L5 16ZM19 14l-.6 2.4L16 17l2.4.6L19 20l.6-2.4L22 17l-2.4-.6L19 14Z" />
      </>
    ),
    trash: (
      <>
        <path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  }
  
  return (
    <svg 
      aria-hidden="true" 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const ChevronDown = (props: IconProps) => <InlineIcon name="chevron-down" {...props} />
const Mail = (props: IconProps) => <InlineIcon name="mail" {...props} />
const MapPin = (props: IconProps) => <InlineIcon name="map-pin" {...props} />
const Pencil = (props: IconProps) => <InlineIcon name="pencil" {...props} />
const Save = (props: IconProps) => <InlineIcon name="save" {...props} />
const Send = (props: IconProps) => <InlineIcon name="send" {...props} />
const ShieldCheck = (props: IconProps) => <InlineIcon name="shield" {...props} />
const Sparkles = (props: IconProps) => <InlineIcon name="sparkles" {...props} />
const Trash2 = (props: IconProps) => <InlineIcon name="trash" {...props} />
const Users = (props: IconProps) => <InlineIcon name="users" {...props} />

const settingsTabs = [
  { id: 'billing', label: 'SaaS Subscription & Billing', icon: Sparkles },
  { id: 'email', label: 'Low-Stock Email Templates', icon: Mail },
  { id: 'permissions', label: 'Tenant User Permissions', icon: Users },
  { id: 'locations', label: 'Locations & Warehouses', icon: MapPin },
]

const initialLocations = [
  { id: 1, name: 'Downtown Warehouse', address: '125 Market Street, Downtown', status: 'Primary Hub' },
  { id: 2, name: 'Northside Retail Branch', address: '48 North Avenue, Northside', status: 'Active' },
  { id: 3, name: 'Eastside Fulfillment Center', address: '902 East Industrial Way, Eastside', status: 'Active' },
]

const template = `# 🚨 SupplySmart Low Stock Alert: {{item_name}}

**Location:** {{supply_room}}  
**Current Stock:** {{current_quantity}}  
**Minimum Threshold:** {{minimum_threshold}}

Please restock this item at your earliest convenience.`

export default function SettingsPage({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const [activeTab, setActiveTab] = useState('billing')
  const [alertTrigger, setAlertTrigger] = useState('Item Reaches Low-Stock Limit')
  const [templateValue, setTemplateValue] = useState(template)
  const [saved, setSaved] = useState(false)
  const [locations, setLocations] = useState(initialLocations)

  const addLocation = () => {
    const name = window.prompt('Location name')?.trim()
    if (!name) return
    const address = window.prompt('Location address')?.trim() || 'Address not provided'
    setLocations((current) => [...current, { id: Date.now(), name, address, status: 'Active' }])
  }

  const editLocation = (id: number) => {
    const location = locations.find((item) => item.id === id)
    if (!location) return
    const name = window.prompt('Location name', location.name)?.trim()
    if (!name) return
    const address = window.prompt('Location address', location.address)?.trim() || location.address
    setLocations((current) => current.map((item) => item.id === id ? { ...item, name, address } : item))
  }

  const deleteLocation = (id: number) => {
    const location = locations.find((item) => item.id === id)
    if (location && window.confirm(`Delete ${location.name}?`)) {
      setLocations((current) => current.filter((item) => item.id !== id))
    }
  }

  const saveChanges = () => {
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2200)
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#172033] pb-12">
      <header className="flex min-h-[74px] items-center justify-between border-b border-[#e4e8ee] bg-white px-5 sm:px-8 lg:px-10">
        <div>
          <p className="text-[17px] font-bold tracking-[-0.025em]">Organization Settings</p>
          <p className="mt-0.5 text-[11px] text-[#8c97a6]">Manage your workspace configuration and preferences</p>
        </div>
        <div className="hidden items-center gap-2 rounded-lg border border-[#e2e6eb] bg-[#fbfcfd] px-3 py-2 text-[11px] font-medium text-[#687587] sm:flex">
          <ShieldCheck className="size-3.5 text-[#65758e]" />
          <span>Tenant ID: <strong className="font-semibold text-[#344154]">adv-dent-092</strong></span>
          <span className="mx-0.5 h-3.5 w-px bg-[#dfe4ea]" />
          <span>Super-Admin Access</span>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-7 sm:px-8 lg:flex-row lg:gap-10 lg:px-10 lg:py-9">
        <aside className="w-full shrink-0 lg:w-[245px]">
          <p className="mb-3 px-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#a1aab7]">Settings</p>
          <div className="flex flex-col gap-1">
            {settingsTabs.map(({ id, label, icon: Icon }) => (
              <button 
                key={id} 
                onClick={() => setActiveTab(id)} 
                className={`flex items-start gap-3 rounded-lg px-3 py-3 text-left text-[13px] leading-5 transition-all ${
                  activeTab === id 
                    ? 'bg-white font-semibold text-[#172033] shadow-[0_1px_3px_rgba(23,32,51,0.08)] ring-1 ring-[#e6e9ee]' 
                    : 'font-medium text-[#778395] hover:bg-white hover:text-[#344154]'
                }`}
              >
                <Icon className={`mt-0.5 size-[16px] shrink-0 ${activeTab === id ? 'text-[#172033]' : 'text-[#9ba5b2]'}`} />
                {label}
              </button>
            ))}
          </div>
          <div className="mt-8 hidden rounded-xl border border-[#e4e8ee] bg-white p-4 lg:block">
            <p className="text-[11px] font-semibold text-[#687587]">Need help?</p>
            <p className="mt-1.5 text-[11px] leading-5 text-[#9aa4b2]">Visit the SupplySmart knowledge base for configuration guides.</p>
            <button className="mt-3 text-[11px] font-semibold text-[#536987] hover:underline">Open knowledge base →</button>
          </div>
        </aside>

        <section className="min-w-0 flex-1 pb-12">
          {activeTab === 'billing' && <BillingPanel />}
          {activeTab === 'email' && <EmailPanel alertTrigger={alertTrigger} setAlertTrigger={setAlertTrigger} templateValue={templateValue} setTemplateValue={setTemplateValue} saveChanges={saveChanges} saved={saved} />}
          {activeTab === 'permissions' && <PermissionsPanel />}
          {activeTab === 'locations' && <LocationsPanel locations={locations} addLocation={addLocation} editLocation={editLocation} deleteLocation={deleteLocation} />}
        </section>
      </div>
    </div>
  )
}

function BillingPanel() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-[14px] font-semibold">SaaS Subscription &amp; Billing</p>
        <p className="mt-1 text-[12px] text-[#8994a3]">Review your current plan and manage workspace capacity.</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#e1e6ec] bg-white shadow-[0_1px_2px_rgba(23,32,51,0.02)]">
        <div className="flex flex-col gap-5 border-b border-[#edf0f3] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9aa4b2]">Current plan</p>
            <div className="mt-2 flex items-center gap-3">
              <h1 className="text-[19px] font-bold tracking-[-0.03em]">Professional Plan</h1>
              <span className="rounded-md bg-[#e9f1ff] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#5577a8]">Active</span>
            </div>
            <p className="mt-2 text-[12px] text-[#8b96a5]">Billed annually · Renews on October 12, 2026</p>
          </div>
          <button className="h-9 rounded-lg border border-[#d8dee6] px-3.5 text-[12px] font-semibold text-[#46546a] transition-colors hover:bg-[#f8f9fb]">
            Manage billing
          </button>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[13px] font-semibold">Active Supply Rooms</p>
              <p className="mt-1 text-[11px] text-[#98a2b0]">Containers allocation</p>
            </div>
            <p className="text-[13px] font-semibold text-[#344154]">8 <span className="font-normal text-[#9ca5b1]">/ 15 Rooms Used</span></p>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#edf0f3]">
            <div className="h-full w-[53.33%] rounded-full bg-[#607697]" />
          </div>
          <p className="mt-2.5 text-[11px] text-[#9aa4b2]">7 rooms remaining on your current plan</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-xl border border-[#dbe6f6] bg-[#f2f6fc] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-[13px] font-semibold text-[#344d70]">Need infinite rooms and custom data exporting?</p>
          <p className="mt-1 text-[11px] text-[#7790b4]">Unlock advanced controls and unlimited workspace capacity.</p>
        </div>
        <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#415a7c] px-4 text-[12px] font-semibold text-white shadow-sm transition-colors hover:bg-[#344d70]">
          Upgrade to Enterprise <ChevronDown className="size-3.5 -rotate-90" />
        </button>
      </div>
    </div>
  )
}

function EmailPanel({ alertTrigger, setAlertTrigger, templateValue, setTemplateValue, saveChanges, saved }: { alertTrigger: string; setAlertTrigger: (value: string) => void; templateValue: string; setTemplateValue: (value: string) => void; saveChanges: () => void; saved: boolean }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-[14px] font-semibold">Low-Stock Email Templates</p>
        <p className="mt-1 text-[12px] text-[#8994a3]">Customize the markdown text blocks auto-fired to phone networks during threshold triggers.</p>
      </div>
      <div className="rounded-xl border border-[#e1e6ec] bg-white shadow-[0_1px_2px_rgba(23,32,51,0.02)]">
        <div className="border-b border-[#edf0f3] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#f0f3f7] text-[#64748b]">
              <InlineIcon name="bell" className="size-4" />
            </div>
            <div>
              <p className="text-[13px] font-semibold">Alert notification content</p>
              <p className="mt-1 text-[11px] leading-5 text-[#929cab]">Use the available variables to personalize notifications sent to your team.</p>
            </div>
          </div>
          <label className="mt-5 block text-[11px] font-semibold text-[#536174]" htmlFor="trigger">Alert Event Trigger</label>
          <div className="relative mt-2">
            <select 
              id="trigger" 
              value={alertTrigger} 
              onChange={(event) => setAlertTrigger(event.target.value)} 
              className="h-10 w-full appearance-none rounded-lg border border-[#dfe4ea] bg-white px-3 text-[12px] text-[#344154] outline-none transition-shadow focus:border-[#9aabc2] focus:ring-3 focus:ring-[#e7edf5]"
            >
              <option>Item Reaches Low-Stock Limit</option>
              <option>Item Falls Out of Stock</option>
              <option>Weekly Inventory Digest</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-3 size-4 text-[#8994a3]" />
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-semibold text-[#536174]" htmlFor="template">Message template</label>
            <span className="text-[10px] text-[#a1aab7]">Markdown supported</span>
          </div>
          <textarea 
            id="template" 
            value={templateValue} 
            onChange={(event) => setTemplateValue(event.target.value)} 
            className="mt-2 min-h-[245px] w-full resize-y rounded-lg border border-[#dfe4ea] bg-[#fbfcfd] p-4 font-mono text-[12px] leading-6 text-[#485568] outline-none transition-shadow focus:border-[#9aabc2] focus:ring-3 focus:ring-[#e7edf5]" 
            spellCheck={false} 
          />
          <div className="mt-5 flex flex-col-reverse gap-3 border-t border-[#edf0f3] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-[#9aa4b2]">Last updated by Jordan Davis · Just now</p>
            <div className="flex gap-2">
              <button className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#d8dee6] px-3.5 text-[12px] font-semibold text-[#536174] transition-colors hover:bg-[#f8f9fb]">
                <Send className="size-3.5" />Send Test Alert
              </button>
              <button 
                onClick={saveChanges} 
                className="flex h-9 items-center justify-center gap-2 rounded-lg bg-[#172033] px-3.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#2b374b]"
              >
                <Save className="size-3.5" />{saved ? 'Changes Saved' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type Location = { id: number; name: string; address: string; status: string }

function LocationsPanel({ locations, addLocation, editLocation, deleteLocation }: { locations: Location[]; addLocation: () => void; editLocation: (id: number) => void; deleteLocation: (id: number) => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[14px] font-semibold">Physical Stores &amp; Warehouses</p>
          <p className="mt-1 text-[12px] text-[#8994a3]">Manage the physical locations connected to your inventory workspace.</p>
        </div>
        <button 
          onClick={addLocation} 
          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[#172033] px-3.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#2b3850]"
        >
          <span className="text-[15px] leading-none">+</span> Add Location
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#e1e6ec] bg-white shadow-[0_1px_2px_rgba(23,32,51,0.02)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#edf0f3] bg-[#fbfcfd]">
                <th className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#9aa4b2]">Name</th>
                <th className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#9aa4b2]">Address</th>
                <th className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#9aa4b2]">Status</th>
                <th className="px-5 py-3.5 text-right text-[10px] font-bold uppercase tracking-[0.1em] text-[#9aa4b2]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf0f3]">
              {locations.map((location) => (
                <tr key={location.id} className="transition-colors hover:bg-[#fcfdfe]">
                  <td className="px-5 py-4 text-[12px] font-semibold text-[#344154]">{location.name}</td>
                  <td className="px-5 py-4 text-[12px] text-[#778395]">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="size-3.5 text-[#9ba5b2]" />
                      {location.address}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-md px-2.5 py-1 text-[10px] font-semibold ${
                      location.status === 'Primary Hub' 
                        ? 'bg-[#e9f1ff] text-[#5577a8]' 
                        : 'bg-[#edf7f1] text-[#4c8064]'
                    }`}>
                      {location.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => editLocation(location.id)} 
                        className="inline-flex items-center gap-1 rounded-md border border-[#dfe4ea] px-2.5 py-1.5 text-[11px] font-semibold text-[#5d6b7f] hover:bg-[#f8f9fb]" 
                        aria-label={`Edit ${location.name}`}
                      >
                        <Pencil className="size-3" />Edit
                      </button>
                      <button 
                        onClick={() => deleteLocation(location.id)} 
                        className="inline-flex items-center gap-1 rounded-md border border-[#eadfe0] px-2.5 py-1.5 text-[11px] font-semibold text-[#9a6267] hover:bg-[#fff8f8]" 
                        aria-label={`Delete ${location.name}`}
                      >
                        <Trash2 className="size-3" />Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function PermissionsPanel() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-[14px] font-semibold">Tenant User Permissions</p>
        <p className="mt-1 text-[12px] text-[#8994a3]">Control who can view, edit, and administer your SupplySmart workspace.</p>
      </div>
      <div className="rounded-xl border border-[#e1e6ec] bg-white p-6 shadow-[0_1px_2px_rgba(23,32,51,0.02)]">
        <div className="flex items-center gap-3 border-b border-[#edf0f3] pb-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-[#f0f3f7] text-[#64748b]">
            <InlineIcon name="users" className="size-4" />
          </div>
          <div>
            <p className="text-[13px] font-semibold">Workspace roles</p>
            <p className="mt-1 text-[11px] text-[#929cab]">3 members have access to this tenant.</p>
          </div>
        </div>
        <div className="flex flex-col divide-y divide-[#edf0f3]">
          <RoleRow initials="JD" name="Jordan Davis" email="jordan@adv-dent.com" role="Super Administrator" />
          <RoleRow initials="AM" name="Alex Morgan" email="alex@adv-dent.com" role="Inventory Manager" />
          <RoleRow initials="SK" name="Sam Kim" email="sam@adv-dent.com" role="Viewer" />
        </div>
        <button className="mt-5 h-9 rounded-lg border border-[#d8dee6] px-3.5 text-[12px] font-semibold text-[#536174] hover:bg-[#f8f9fb]">
          Invite team member
        </button>
      </div>
    </div>
  )
}

function RoleRow({ initials, name, email, role }: { initials: string; name: string; email: string; role: string }) {
  return (
    <div className="flex items-center gap-3 py-4">
      <div className="flex size-8 items-center justify-center rounded-full bg-[#e8edf4] text-[10px] font-bold text-[#61718a]">{initials}</div>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-semibold">{name}</p>
        <p className="truncate text-[11px] text-[#99a3b0]">{email}</p>
      </div>
      <span className="rounded-md bg-[#f2f4f7] px-2.5 py-1 text-[10px] font-semibold text-[#687587]">{role}</span>
    </div>
  )
}