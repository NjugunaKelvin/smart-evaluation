'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated, getToken, getUser } from '@/lib/auth';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiHome, FiBriefcase, FiBarChart2, FiCpu, FiShare2, FiMessageSquare,
    FiCreditCard, FiSettings, FiBell, FiSearch, FiUser, FiPlus,
    FiChevronRight, FiTrendingUp, FiUsers, FiEye, FiCheckCircle, FiClock,
    FiEdit2, FiTrash2, FiPauseCircle, FiPlayCircle, FiXCircle, FiTarget,
    FiDownload, FiShield, FiDatabase, FiLayers, FiDollarSign, FiMail
} from 'react-icons/fi';
import ImportModule from '@/components/provider/ImportModule';
import EvaluationModule from '@/components/provider/EvaluationModule';
import PipelineModule from '@/components/provider/PipelineModule';
import EmailWorkflow from '@/components/provider/EmailWorkflow';
import ProjectWorkspace from '@/components/provider/ProjectWorkspace';
import ReportsModule from '@/components/provider/ReportsModule';
import FinanceModule from '@/components/provider/FinanceModule';
import PluginsModule from '@/components/provider/PluginsModule';
import SettingsModule from '@/components/provider/SettingsModule';
import AuditTrailModule from '@/components/provider/AuditTrailModule';


type ViewType = 'home' | 'opportunities' | 'pipeline' | 'import' | 'evaluation' | 'emails' | 'projects' | 'analytics' | 'settings' | 'manage_opportunity' | 'finance' | 'plugins' | 'audit';

export default function ProviderDashboardPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    
    const [user, setUser] = useState<any>(null);
    const [view, setView] = useState<ViewType>('home');
    const [loading, setLoading] = useState(true);
    const [opportunities, setOpportunities] = useState<any[]>([]);
    const [selectedOpp, setSelectedOpp] = useState<any>(null);
    const [shortlistedCandidates, setShortlistedCandidates] = useState<any[]>([]);

    
    useEffect(() => {
        const initialView = searchParams.get('view') as ViewType;
        if (initialView && ['home', 'opportunities', 'pipeline', 'import', 'evaluation', 'emails', 'projects', 'analytics', 'settings', 'finance', 'plugins', 'audit'].includes(initialView)) {
            setView(initialView);
        }

        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }

        const currentUser = getUser();
        setUser(currentUser);
        
        setTimeout(() => setLoading(false), 800);
        fetchOpportunities();
    }, [router, searchParams]);

    const fetchOpportunities = async () => {
        
        try {
            
            const token = getToken();
            if (token) {
                const response = await fetch('http://localhost:5000/api/opportunities', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    const allOpps = Array.isArray(data) ? data : (data.opportunities || []);
                    setOpportunities(allOpps.filter((o: any) => o.postedBy === getUser()?.uid));
                }
            }
        } catch (e) {
            console.error("Fetch error", e);
        }
    };

    
    const navItems = [
        { id: 'home', label: 'Overview', icon: FiHome },
        { id: 'pipeline', label: 'Due Diligence Pipeline', icon: FiLayers, highlight: true },
        { id: 'import', label: 'Import Data', icon: FiDatabase },
        { id: 'evaluation', label: 'Evaluation Models', icon: FiTarget },
        { id: 'plugins', label: 'AI Plugins', icon: FiCpu }, 
        { id: 'emails', label: 'Communication', icon: FiMail },
        { id: 'projects', label: 'Active Projects', icon: FiBriefcase },
        { id: 'opportunities', label: 'My Opportunities', icon: FiBriefcase },
        { id: 'analytics', label: 'Reports & Analytics', icon: FiBarChart2 },
        { id: 'finance', label: 'Funds & Disbursement', icon: FiDollarSign },
        { id: 'audit', label: 'Audit Trail', icon: FiShield },
        { id: 'settings', label: 'Settings', icon: FiSettings },
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 font-medium tracking-wide">Loading Evaluator Dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] flex font-sans text-slate-800">
            {}
            <aside className="w-72 bg-[#0f172a] text-white flex-shrink-0 fixed h-full z-30 hidden lg:flex flex-col border-r border-[#1e293b] shadow-2xl">
                <div className="p-8 border-b border-[#1e293b]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/50">
                            <FiCheckCircle className="text-white w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-xl font-bold tracking-tight block">Smart<span className="text-purple-400">Eval</span></span>
                            <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Due Diligence Suite</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2 no-scrollbar">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setView(item.id as any)}
                            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${view === item.id
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 font-medium translate-x-1'
                                : 'text-slate-400 hover:bg-[#1e293b] hover:text-white hover:translate-x-1'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 transition-colors ${view === item.id ? 'text-white' : 'text-slate-500 group-hover:text-purple-400'}`} />
                            <span className="text-sm font-medium">{item.label}</span>
                            {item.highlight && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></div>}
                        </button>
                    ))}
                </div>

                <div className="p-6 border-t border-[#1e293b]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-200 font-bold">
                            {user?.contactName?.charAt(0) || 'U'}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-white truncate">{user?.contactName || 'Evaluator'}</p>
                            <p className="text-xs text-slate-400 truncate">{user?.email}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {}
            <main className="flex-1 lg:ml-72 min-h-screen flex flex-col relative overflow-hidden">
                {}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                {}
                <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 px-8 flex items-center justify-between sticky top-0 z-20">
                    <h2 className="text-xl font-bold text-gray-800 capitalize flex items-center gap-2">
                        {navItems.find(n => n.id === view)?.label}
                        {view === 'pipeline' && <span className="text-xs font-normal bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full ml-2">Live</span>}
                    </h2>

                    <div className="flex items-center gap-6">
                        <button className="text-gray-400 hover:text-purple-600 transition relative">
                            <FiBell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <button
                            onClick={() => router.push('/')}
                            className="text-sm font-medium text-gray-500 hover:text-gray-800 transition"
                        >
                            Back to Portal
                        </button>
                    </div>
                </header>

                {}
                <div className="p-8 max-w-7xl mx-auto w-full relative z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={view}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {view === 'home' && (
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl shadow-purple-200">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                                    <FiBriefcase className="w-6 h-6 text-white" />
                                                </div>
                                                <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded text-white">Active</span>
                                            </div>
                                            <h3 className="text-3xl font-bold mb-1">{opportunities.length}</h3>
                                            <p className="text-purple-100 text-sm">Open Opportunities</p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 bg-blue-50 rounded-lg">
                                                    <FiUsers className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12 new</span>
                                            </div>
                                            <h3 className="text-3xl font-bold mb-1 text-gray-900">142</h3>
                                            <p className="text-gray-500 text-sm">Total Applications Pending</p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 bg-green-50 rounded-lg">
                                                    <FiDollarSign className="w-6 h-6 text-green-600" />
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-bold mb-1 text-gray-900">$1.2M</h3>
                                            <p className="text-gray-500 text-sm">Funds Disbursed This Month</p>
                                        </div>
                                    </div>

                                    {}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <button onClick={() => setView('import')} className="p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition text-left group">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-purple-50 group-hover:bg-purple-100 rounded-lg text-purple-600 transition">
                                                    <FiDatabase />
                                                </div>
                                                <span className="font-bold text-gray-700">Import Data</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Connect to external sources or upload CSVs.</p>
                                        </button>

                                        <button onClick={() => setView('evaluation')} className="p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition text-left group">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-orange-50 group-hover:bg-orange-100 rounded-lg text-orange-600 transition">
                                                    <FiTarget />
                                                </div>
                                                <span className="font-bold text-gray-700">Evaluation Engine</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Build criteria and run AI scoring.</p>
                                        </button>

                                        <button onClick={() => setView('pipeline')} className="p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition text-left group">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-blue-50 group-hover:bg-blue-100 rounded-lg text-blue-600 transition">
                                                    <FiLayers />
                                                </div>
                                                <span className="font-bold text-gray-700">Track Pipeline</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Monitor application stages.</p>
                                        </button>

                                        <button onClick={() => setView('projects')} className="p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition text-left group">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-teal-50 group-hover:bg-teal-100 rounded-lg text-teal-600 transition">
                                                    <FiBriefcase />
                                                </div>
                                                <span className="font-bold text-gray-700">Workspace</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Manage ongoing projects & chats.</p>
                                        </button>
                                    </div>

                                    {}
                                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                        <h3 className="font-bold text-gray-900 mb-6">Recent Activity</h3>
                                        <div className="space-y-6">
                                            {[
                                                { text: "World Bank Proposal #442 moved to 'Due Diligence'", time: "2 hours ago", icon: FiCheckCircle, color: "text-green-600", bg: "bg-green-100" },
                                                { text: "Imported 45 new applications from Tendersure", time: "5 hours ago", icon: FiDatabase, color: "text-blue-600", bg: "bg-blue-100" },
                                                { text: "Funds disbursed to 'TechSol Ltd' for Milestone 1", time: "1 day ago", icon: FiDollarSign, color: "text-purple-600", bg: "bg-purple-100" },
                                            ].map((activity, i) => (
                                                <div key={i} className="flex items-start gap-4">
                                                    <div className={`w-8 h-8 rounded-full ${activity.bg} flex items-center justify-center flex-shrink-0 mt-1`}>
                                                        <activity.icon className={`w-4 h-4 ${activity.color}`} />
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-800 text-sm font-medium">{activity.text}</p>
                                                        <p className="text-gray-400 text-xs mt-0.5">{activity.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {view === 'import' && (
                                <ImportModule
                                    onImportComplete={() => {
                                        
                                        setView('evaluation');
                                    }}
                                />
                            )}

                            {view === 'evaluation' && (
                                <EvaluationModule
                                    onEvaluationComplete={(results) => {
                                        setShortlistedCandidates(results);
                                        setView('emails');
                                    }}
                                />
                            )}

                            {view === 'emails' && (
                                <EmailWorkflow
                                    candidates={shortlistedCandidates}
                                    onComplete={() => setView('projects')}
                                />
                            )}

                            {view === 'pipeline' && <PipelineModule />}

                            {view === 'projects' && <ProjectWorkspace />}

                            {view === 'opportunities' && (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl font-bold text-gray-900">Your Opportunities</h2>
                                        <Link href="/provider/opportunities/create">
                                            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition">
                                                + Post New
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                        {opportunities.length === 0 ? (
                                            <div className="p-8 text-center text-gray-500">
                                                No opportunities found.
                                            </div>
                                        ) : (
                                            <table className="w-full text-left text-sm">
                                                <thead className="bg-gray-50 border-b border-gray-200">
                                                    <tr>
                                                        <th className="px-6 py-4 font-semibold text-gray-700">Title</th>
                                                        <th className="px-6 py-4 font-semibold text-gray-700">Status</th>
                                                        <th className="px-6 py-4 font-semibold text-gray-700">Applicants</th>
                                                        <th className="px-6 py-4 font-semibold text-gray-700 text-right">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {opportunities.map((opp: any) => (
                                                        <tr key={opp.id} className="hover:bg-gray-50">
                                                            <td className="px-6 py-4 font-medium text-gray-900">{opp.title}</td>
                                                            <td className="px-6 py-4">
                                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${opp.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'} `}>
                                                                    {opp.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-gray-500">{opp.applications || 0}</td>
                                                            <td className="px-6 py-4 text-right">
                                                                <button
                                                                    onClick={() => {
                                                                        setSelectedOpp(opp);
                                                                        setView('manage_opportunity');
                                                                    }}
                                                                    className="text-purple-600 hover:underline font-medium"
                                                                >
                                                                    Manage
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )}
                                    </div>
                                </div>
                            )}

                            {view === 'analytics' && <ReportsModule />}
                            {view === 'finance' && <FinanceModule />}
                            {view === 'plugins' && <PluginsModule />}
                            {view === 'audit' && <AuditTrailModule />}

                            {view === 'settings' && <SettingsModule />}

                            {view === 'manage_opportunity' && selectedOpp && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <button
                                            onClick={() => {
                                                setView('opportunities');
                                                setSelectedOpp(null);
                                            }}
                                            className="p-2 hover:bg-gray-100 rounded-full transition"
                                        >
                                            <FiChevronRight className="w-5 h-5 rotate-180" />
                                        </button>
                                        <h2 className="text-2xl font-bold text-gray-900">Manage Opportunity</h2>
                                    </div>

                                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedOpp.title}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedOpp.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                                        {selectedOpp.status}
                                                    </span>
                                                    <span className="text-gray-500 text-sm">Posted on {new Date().toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-4xl font-bold text-purple-600 mb-1">{selectedOpp.applications || 0}</div>
                                                <div className="text-sm text-gray-500 font-medium">Total Applications</div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                            <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <FiUsers className="w-5 h-5 text-purple-600" />
                                                    <span className="font-semibold text-gray-700">Candidates</span>
                                                </div>
                                                <p className="text-sm text-gray-600">Review and shortlist applicants for this role.</p>
                                            </div>
                                            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <FiTarget className="w-5 h-5 text-blue-600" />
                                                    <span className="font-semibold text-gray-700">Evaluation</span>
                                                </div>
                                                <p className="text-sm text-gray-600">Configure AI scoring models and criteria.</p>
                                            </div>
                                            <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <FiBarChart2 className="w-5 h-5 text-orange-600" />
                                                    <span className="font-semibold text-gray-700">Analytics</span>
                                                </div>
                                                <p className="text-sm text-gray-600">Track performance and engagement stats.</p>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-100 pt-8 flex justify-end gap-4">
                                            <button
                                                onClick={() => setView('opportunities')}
                                                className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={async () => {
                                                    if (confirm('Are you sure you want to delete this opportunity? This action cannot be undone.')) {
                                                        try {
                                                            
                                                            const newOpps = opportunities.filter(o => o.id !== selectedOpp.id);
                                                            setOpportunities(newOpps);

                                                            
                                                            const token = getToken();
                                                            if (token) {
                                                                await fetch(`http://localhost:5000/api/opportunities/${selectedOpp.id}`, {
                                                                    method: 'DELETE',
                                                                    headers: { 'Authorization': `Bearer ${token}` }
                                                                });
                                                            }

                                                            setView('opportunities');
                                                            setSelectedOpp(null);
                                                        } catch (e) {
                                                            console.error("Delete failed", e);
                                                            
                                                            alert('Failed to delete on server, but removed locally.');
                                                        }
                                                    }
                                                }}
                                                className="px-6 py-2.5 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition flex items-center gap-2"
                                            >
                                                <FiTrash2 className="w-4 h-4" />
                                                Delete Opportunity
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
