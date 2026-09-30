'use client'

import { useState } from 'react'

type IconName = 'package' | 'sparkles' | 'eye' | 'eyeOff' | 'arrowRight' | 'lock' | 'mapPin' | 'check' | 'chevronRight' | 'shield'

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  const common = { 
    className, 
    viewBox: '0 0 24 24', 
    fill: 'none', 
    stroke: 'currentColor', 
    strokeWidth: 1.8, 
    strokeLinecap: 'round' as const, 
    strokeLinejoin: 'round' as const, 
    'aria-hidden': true 
  }
  
  const paths: Record<IconName, React.ReactNode> = {
    package: <><path d="m16.5 9.4-9-5.19" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" /></>,
    sparkles: <><path d="m12 3-1.2 3.8L7 8l3.8 1.2L12 13l1.2-3.8L17 8l-3.8-1.2L12 3ZM19 13l-.7 2.3L16 16l2.3.7L19 19l.7-2.3L22 16l-2.3-.7L19 13ZM5 14l-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14Z" /></>,
    eye: <><path d="M2.1 12s3.5-6 9.9-6 9.9 6 9.9 6-3.5 6-9.9 6-9.9-6-9.9-6Z" /><circle cx="12" cy="12" r="2.5" /></>,
    eyeOff: <><path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A10.7 10.7 0 0 1 12 5c6.4 0 9.9 7 9.9 7a18.2 18.2 0 0 1-3 3.8M6.6 6.7C3.7 8.4 2.1 12 2.1 12s3.5 7 9.9 7c1.1 0 2.1-.2 3-.5" /></>,
    arrowRight: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    shield: <><path d="M12 22s8-3.8 8-10V5l-8-3-8 3v7c0 6.2 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
  }
  
  return <svg {...common}>{paths[name]}</svg>
}

const locations = [
  { name: 'Downtown Warehouse', detail: 'Primary Hub', active: true },
  { name: 'Northside Retail Branch #2', detail: 'Retail Operations', active: false },
  { name: 'Eastside Fulfillment Center', detail: 'Distribution Center', active: false },
]

export default function AuthPage({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [step, setStep] = useState<'auth' | 'locations'>('auth')
  const [mode, setMode] = useState<'sign-in' | 'create'>('sign-in')
  const [selectedLocation, setSelectedLocation] = useState(0)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-12 font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div 
        className="pointer-events-none absolute -left-32 top-1/4 size-[32rem] rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-950/30" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-indigo-100/70 blur-3xl dark:bg-indigo-950/20" 
        aria-hidden="true" 
      />

      <section className="relative flex w-full max-w-[470px] flex-col items-center" aria-label="SupplySmart authentication">
        <div className="mb-8 flex items-center gap-3 text-[22px] font-semibold tracking-[-0.03em] text-slate-900 dark:text-white">
          <span className="flex size-11 items-center justify-center rounded-[14px] bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.2)]">
            <Icon name="package" className="size-6" />
          </span>
          SupplySmart
        </div>

        <div className="w-full rounded-[24px] border border-slate-200 bg-white/95 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-10 dark:border-slate-800 dark:bg-slate-900/90">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400">
              <Icon name="sparkles" className="size-4" /> OPERATIONS INTELLIGENCE
            </div>
            <h1 className="text-[30px] font-semibold tracking-[-0.04em] text-slate-900 dark:text-white">
              {step === 'auth' ? 'Welcome back' : 'Select your location'}
            </h1>
            <p className="mx-auto mt-2 max-w-[330px] text-sm leading-6 text-slate-500 dark:text-slate-400">
              {step === 'auth' ? 'Sign in to manage inventory across your entire business.' : 'Choose the workspace you want to open for this session.'}
            </p>
          </div>

          {step === 'auth' ? (
            <>
              <div className="mb-7 grid grid-cols-2 rounded-xl bg-slate-100 p-1 dark:bg-slate-800" role="tablist" aria-label="Authentication options">
                {(['sign-in', 'create'] as const).map((item) => (
                  <button 
                    key={item} 
                    type="button" 
                    onClick={() => setMode(item)} 
                    role="tab" 
                    aria-selected={mode === item} 
                    className={`rounded-lg px-3 py-2.5 text-xs font-semibold transition ${
                      mode === item 
                        ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-900 dark:text-blue-400' 
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    {item === 'sign-in' ? 'Sign In' : 'Create Organization'}
                  </button>
                ))}
              </div>

              <form 
                className="flex flex-col gap-5" 
                onSubmit={(event) => { 
                  event.preventDefault()
                  setStep('locations') 
                }}
              >
                {mode === 'create' && (
                  <label className="flex flex-col gap-2 text-xs font-bold text-slate-700 dark:text-slate-300" htmlFor="org-name">
                    Organization name
                    <input 
                      id="org-name" 
                      className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" 
                      placeholder="Acme Supply Co." 
                      required 
                    />
                  </label>
                )}

                <label className="flex flex-col gap-2 text-xs font-bold text-slate-700 dark:text-slate-300" htmlFor="email">
                  Work email
                  <input 
                    id="email" 
                    type="email" 
                    autoComplete="email" 
                    className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" 
                    placeholder="you@company.com" 
                    required 
                  />
                </label>

                {mode === 'sign-in' && (
                  <>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                      <label htmlFor="password">Password</label>
                      <a className="font-semibold text-blue-600 hover:underline dark:text-blue-400" href="#forgot-password">
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <input 
                        id="password" 
                        type={showPassword ? 'text' : 'password'} 
                        autoComplete="current-password" 
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" 
                        placeholder="Enter your password" 
                        required 
                      />
                      <button 
                        type="button" 
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400" 
                        onClick={() => setShowPassword(!showPassword)} 
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        <Icon name={showPassword ? 'eyeOff' : 'eye'} className="size-5" />
                      </button>
                    </div>
                  </>
                )}

                <button 
                  className="mt-1 flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-[0_8px_18px_rgba(37,99,235,0.2)] transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-600/20" 
                  type="submit"
                >
                  {mode === 'sign-in' ? 'Sign In to Workspace' : 'Create Organization'}
                  <Icon name="arrowRight" className="size-4" />
                </button>
              </form>

              <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Icon name="lock" className="size-4 text-blue-600 dark:text-blue-400" /> Secured with enterprise-grade encryption
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3" role="radiogroup" aria-label="Business locations">
                {locations.map((location, index) => (
                  <button 
                    key={location.name} 
                    type="button" 
                    role="radio" 
                    aria-checked={selectedLocation === index} 
                    onClick={() => setSelectedLocation(index)} 
                    className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
                      selectedLocation === index 
                        ? 'border-blue-600 bg-blue-50/70 shadow-[0_0_0_3px_rgba(37,99,235,0.08)] dark:bg-blue-950/30' 
                        : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600'
                    }`}
                  >
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
                      selectedLocation === index 
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' 
                        : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                    }`}>
                      <Icon name="mapPin" className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <strong className="block truncate text-sm text-slate-900 dark:text-white">{location.name}</strong>
                      <small className="mt-1 block text-xs text-slate-500 dark:text-slate-400">{location.detail}</small>
                    </span>
                    {location.active && (
                      <span className="hidden items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 sm:flex dark:text-blue-400">
                        <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" /> Active
                      </span>
                    )}
                    {selectedLocation === index && (
                      <span className="flex size-6 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Icon name="check" className="size-3.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <button 
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-[0_8px_18px_rgba(37,99,235,0.2)] transition hover:bg-blue-700" 
                onClick={() => onNavigate('dashboard')}
              >
                Launch Workspace <Icon name="chevronRight" className="size-4" />
              </button>

              <button 
                className="text-xs font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400" 
                onClick={() => setStep('auth')}
              >
                Back to sign in
              </button>
            </div>
          )}
        </div>

        <div className="mt-7 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <Icon name="shield" className="size-4 text-blue-600 dark:text-blue-400" />
          <span>Trusted by modern operations teams</span>
          <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span>99.99% uptime</span>
        </div>

        <p className="mt-5 text-center text-[11px] leading-5 text-slate-400 dark:text-slate-500">
          By continuing, you agree to SupplySmart&apos;s{' '}
          <a className="underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400" href="#terms">Terms of Service</a> and{' '}
          <a className="underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400" href="#privacy">Privacy Policy</a>.
        </p>
      </section>
    </main>
  )
}