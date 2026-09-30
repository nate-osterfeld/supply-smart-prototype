import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  MapPin, 
  ClipboardList, 
  Boxes, 
  BarChart3,
  Settings2, 
  Package,
  ChevronDown
} from 'lucide-react';

import DashboardPage from './pages/DashboardPage';
import StoragePage from './pages/StoragePage';
import CatalogPage from './pages/CatalogPage';
import SettingsPage from './pages/SettingsPage';
import ForecastPage from './pages/ForecastPage';
import ReportsPage from './pages/ReportsPage';
import AuthPage from './pages/AuthPage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('auth');

  const navigateTo = (screenName) => {
    setCurrentScreen(screenName);
  };

  // Section 1: Daily Operational Workspace
  const workspaceItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'storage', label: 'Storage Units', icon: MapPin },
    { id: 'forecast', label: 'Schedule Forecast', icon: ClipboardList },
    { id: 'catalog', label: 'Item Catalog', icon: Boxes },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  // Section 2: Administrative Management (Audit Log removed)
  const manageItems = [
    { id: 'settings', label: 'Workspace Settings', icon: Settings2 },
  ];

  if (currentScreen === 'auth') {
    return <AuthPage onNavigate={navigateTo} />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f7f8fa] font-sans text-slate-900">
      {/* Light Master Sidebar with Two Sections */}
      <aside className="flex w-[246px] shrink-0 flex-col border-r border-slate-200/80 bg-white">
        {/* Brand Header */}
        <div className="flex h-[72px] items-center gap-3 border-b border-slate-200/80 px-6">
          <div className="flex size-8 items-center justify-center rounded-lg bg-slate-950 text-white shadow-sm">
            <Package className="size-4" />
          </div>
          <div>
            <p className="text-[15px] font-semibold tracking-tight">SupplySmart</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">Inventory OS</p>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {/* Workspace Group */}
          <div>
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
            <nav className="flex flex-col gap-1">
              {workspaceItems.map(({ id, label, icon: Icon }) => {
                const active = currentScreen === id;
                return (
                  <button
                    key={id}
                    onClick={() => navigateTo(id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-colors ${
                      active 
                        ? 'bg-slate-100 text-slate-950 font-semibold' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`size-4 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{label}</span>
                    {active && <span className="ml-auto size-1.5 rounded-full bg-blue-600" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Manage Group (Admin Section) */}
          <div>
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Manage</p>
            <nav className="flex flex-col gap-1">
              {manageItems.map(({ id, label, icon: Icon }) => {
                const active = currentScreen === id;
                return (
                  <button
                    key={id}
                    onClick={() => navigateTo(id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-colors ${
                      active 
                        ? 'bg-slate-100 text-slate-950 font-semibold' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`size-4 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{label}</span>
                    {active && <span className="ml-auto size-1.5 rounded-full bg-blue-600" />}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom User Profile Footer */}
        <div className="border-t border-slate-200/80 p-4">
          <button 
            onClick={() => navigateTo('auth')}
            className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left hover:bg-slate-50 transition-colors group"
            title="Click to sign out"
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
              MC
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-slate-800">Josh Miller</p>
              <p className="truncate text-[11px] text-slate-400">Operations Manager</p>
            </div>
            <ChevronDown className="size-4 text-slate-400 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </aside>

      {/* Dynamic Screen Viewport */}
      <main className="flex-1 overflow-y-auto bg-[#f7f8fa]">
        {currentScreen === 'dashboard' && <DashboardPage onNavigate={navigateTo} />}
        {currentScreen === 'storage' && <StoragePage onNavigate={navigateTo} />}
        {currentScreen === 'forecast' && <ForecastPage onNavigate={navigateTo} />}
        {currentScreen === 'catalog' && <CatalogPage onNavigate={navigateTo} />}
        {currentScreen === 'settings' && <SettingsPage onNavigate={navigateTo} />}
        {currentScreen === 'reports' && <ReportsPage onNavigate={navigateTo} />}
      </main>
    </div>
  );
}