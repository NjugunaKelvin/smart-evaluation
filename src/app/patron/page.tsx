'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiHome, FiBriefcase, FiMessageSquare, FiFileText, FiDollarSign,
    FiSettings, FiBell, FiCheckCircle, FiMenu, FiX, FiSearch, FiLogOut, FiArrowLeft, FiHelpCircle
} from 'react-icons/fi';

import PatronOverview from '@/components/patron/PatronOverview';
import ProjectList from '@/components/patron/ProjectList';
import MessageCenter from '@/components/patron/MessageCenter';
import ReportHub from '@/components/patron/ReportHub';
import FundRequest from '@/components/patron/FundRequest';
import PatronSettings from '@/components/patron/PatronSettings';
import PlanUpgradeModule from '@/components/patron/PlanUpgradeModule';
import PatronNotifications from '@/components/patron/PatronNotifications';

type ViewType = 'home' | 'projects' | 'messages' | 'reports' | 'funds' | 'settings' | 'upgrade' | 'notifications';

export default function PatronDashboardPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [view, setView] = useState<ViewType>('home');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    
    const user = {
        name: "TechSol Solutions",
        email: "contact@techsol.com",
        initials: "TS"
    };

    useEffect(() => {
        const initialView = searchParams.get('view') as ViewType;
        if (initialView && ['home', 'projects', 'messages', 'reports', 'funds', 'settings', 'upgrade', 'notifications'].includes(initialView)) {
            setView(initialView);
        }
    }, [searchParams]);

    const navItems = [
        { id: 'home', label: 'Overview', icon: FiHome },
        { id: 'projects', label: 'My Projects', icon: FiBriefcase },
        { id: 'funds', label: 'Funds & Grants', icon: FiDollarSign },
        { id: 'reports', label: 'Reports', icon: FiFileText },
        { id: 'messages', label: 'Communication', icon: FiMessageSquare, badge: 2 },
        { id: 'settings', label: 'Settings', icon: FiSettings },
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] flex font-sans text-slate-800">
            {}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {}
            <aside className={`
                fixed lg:sticky top-0 h-screen w-72 bg-[#0f172a] text-white flex-shrink-0 z-50 flex flex-col border-r border-[#1e293b] shadow-2xl transition-transform duration-300
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="p-8 border-b border-[#1e293b]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/50">
                            <FiCheckCircle className="text-white w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight block">Patron<span className="text-purple-400">Hub</span></span>
                            <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold leading-none mt-1">Partner Portal</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2 no-scrollbar">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setView(item.id as any);
                                setSidebarOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${view === item.id
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 font-medium translate-x-1'
                                : 'text-slate-400 hover:bg-[#1e293b] hover:text-white hover:translate-x-1'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 transition-colors ${view === item.id ? 'text-white' : 'text-slate-500 group-hover:text-purple-400'}`} />
                            <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
                            {item.badge && (
                                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto">
                                    {item.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                <div className="p-6 border-t border-[#1e293b]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-200 font-bold">
                            {user.initials}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-white truncate">{user.name}</p>
                            <p className="text-xs text-slate-400 truncate">{user.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => router.push('/')}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-[#334155] text-slate-400 text-xs font-medium hover:bg-[#1e293b] hover:text-white transition"
                    >
                        <FiLogOut /> Sign Out
                    </button>
                </div>
            </aside>

            {}
            <main className="flex-1 min-h-screen flex flex-col relative overflow-hidden bg-[#f8fafc]">
                {}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                {}
                <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 px-6 md:px-8 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-purple-600 transition">
                            <FiMenu size={24} />
                        </button>
                        <div className="flex items-center gap-4">
                            <Link href="/" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition">
                                <FiArrowLeft /> Back to Portal
                            </Link>
                            <div className="hidden md:block w-px h-6 bg-gray-200"></div>
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 capitalize">
                                {view === 'notifications' ? 'Notifications' : navItems.find(n => n.id === view)?.label || (view === 'upgrade' ? 'Plan Upgrade' : 'Dashboard')}
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="relative hidden lg:block group">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-gray-100 border border-transparent text-sm pl-10 pr-4 py-2 rounded-full w-64 focus:bg-white focus:border-purple-300 focus:ring-4 focus:ring-purple-100 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <div className="flex items-center gap-2 md:gap-4 border-l border-gray-200 pl-4 md:pl-6">
                            <button className="text-gray-400 hover:text-purple-600 transition p-2 hover:bg-gray-100 rounded-full" title="Help & Support">
                                <FiHelpCircle className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setView('notifications')}
                                className={`relative p-2 rounded-full transition ${view === 'notifications' ? 'bg-purple-50 text-purple-600' : 'text-gray-400 hover:text-purple-600 hover:bg-gray-100'}`}
                                title="Notifications"
                            >
                                <FiBell className="w-5 h-5" />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="p-6 md:p-8 max-w-7xl mx-auto w-full relative z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={view}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {view === 'home' && <PatronOverview setView={(v: any) => setView(v)} />}
                            {view === 'projects' && <ProjectList />}
                            {view === 'messages' && <MessageCenter />}
                            {view === 'reports' && <ReportHub />}
                            {view === 'funds' && <FundRequest />}
                            {view === 'settings' && <PatronSettings onUpgrade={() => setView('upgrade')} />}
                            {view === 'upgrade' && <PlanUpgradeModule />}
                            {view === 'notifications' && <PatronNotifications />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
