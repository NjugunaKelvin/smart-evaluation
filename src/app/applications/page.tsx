'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated, getToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiClock, FiCheckCircle, FiXCircle, FiFileText, FiChevronDown,
    FiChevronUp, FiExternalLink, FiSearch, FiFilter, FiBriefcase
} from 'react-icons/fi';

export default function MyApplicationsPage() {
    const router = useRouter();
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }

        fetchApplications();
    }, [router]);

    const fetchApplications = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/applications/my-applications', {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });

            const data = await response.json();
            if (response.ok) {
                setApplications(data.applications || []);
            }
        } catch (error) {
            console.error('Error fetching applications:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#ebe1f2] flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto"></div>
                        <p className="mt-4 text-gray-600 font-medium">Loading your applications...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f9fc]">
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Applications</h1>
                        <p className="text-gray-500 mt-2">Track the status of your proposals and submissions.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search applications..."
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                            />
                        </div>
                        <button className="p-2 border border-gray-200 rounded-lg bg-white text-gray-600 hover:bg-gray-50">
                            <FiFilter />
                        </button>
                    </div>
                </div>

                {applications.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100"
                    >
                        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiBriefcase className="text-purple-600 text-3xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No applications yet</h3>
                        <p className="text-gray-500 mb-8 max-w-sm mx-auto">You haven't submitted any proposals yet. Explore open opportunities and start applying!</p>
                        <Link
                            href="/opportunities"
                            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-200"
                        >
                            Browse Opportunities
                        </Link>
                    </motion.div>
                ) : (
                    <div className="space-y-6">
                        <AnimatePresence>
                            {applications.map((app, index) => (
                                <ApplicationCard
                                    key={app.id}
                                    app={app}
                                    isExpanded={expandedId === app.id}
                                    onToggle={() => toggleExpand(app.id)}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
}

function ApplicationCard({ app, isExpanded, onToggle, index }: { app: any, isExpanded: boolean, onToggle: () => void, index: number }) {
    const statusConfig = {
        pending: { color: 'bg-yellow-100 text-yellow-700', icon: FiClock, label: 'Under Review' },
        reviewing: { color: 'bg-blue-100 text-blue-700', icon: FiSearch, label: 'Reviewing' },
        shortlisted: { color: 'bg-indigo-100 text-indigo-700', icon: FiCheckCircle, label: 'Shortlisted' },
        accepted: { color: 'bg-green-100 text-green-700', icon: FiCheckCircle, label: 'Accepted' },
        rejected: { color: 'bg-red-100 text-red-700', icon: FiXCircle, label: 'Not Selected' }
    };

    // Default to pending if status unknown
    const status = statusConfig[app.status as keyof typeof statusConfig] || statusConfig.pending;
    const StatusIcon = status.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${isExpanded ? 'shadow-md border-purple-200' : 'shadow-sm border-gray-100 hover:border-gray-200'}`}
        >
            <div className="p-6 cursor-pointer" onClick={onToggle}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-gray-50 rounded-lg flex items-center justify-center text-xl font-bold text-gray-400 border border-gray-100">
                            {app.opportunity?.organization?.charAt(0) || 'O'}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                                {app.opportunity?.title || 'Unknown Opportunity'}
                            </h3>
                            <p className="text-sm text-gray-500">{app.opportunity?.organization || 'Unknown Organization'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 self-end md:self-auto">
                        <div className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${status.color}`}>
                            <StatusIcon size={14} />
                            {status.label}
                        </div>
                        <div className="text-gray-400">
                            {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                        </div>
                    </div>
                </div>

                {/* Visual Status Bar */}
                <div className="mt-6 flex items-center gap-2">
                    {['Pending', 'Reviewing', 'Shortlisted', 'Decision'].map((step, i) => {
                        // Simple logic to determine progress state
                        const fillLevel = getStepStatus(step, app.status);
                        return (
                            <div key={i} className="flex-1">
                                <div className={`h-1.5 rounded-full mb-2 ${fillLevel === 'completed' ? 'bg-green-500' : fillLevel === 'current' ? 'bg-purple-600' : 'bg-gray-100'}`}></div>
                                <p className={`text-[10px] font-medium ${fillLevel === 'completed' || fillLevel === 'current' ? 'text-gray-900' : 'text-gray-400'}`}>{step}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-50 bg-gray-50/50"
                    >
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="col-span-2 space-y-4">
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Cover Letter</h4>
                                        <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600 leading-relaxed">
                                            {app.coverLetter || "No cover letter provided."}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Application Details</h4>
                                        <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-50">
                                            <div className="p-3 flex justify-between text-sm">
                                                <span className="text-gray-500">Applied On</span>
                                                <span className="font-medium text-gray-900">{new Date(app.appliedAt).toLocaleDateString()}</span>
                                            </div>
                                            <div className="p-3 flex justify-between text-sm">
                                                <span className="text-gray-500">Method</span>
                                                <span className="font-medium text-gray-900 capitalize">{app.resumeUrl ? 'PDF Upload' : 'Proposal Builder'}</span>
                                            </div>
                                            <div className="p-3 flex justify-between text-sm">
                                                <span className="text-gray-500">Reference ID</span>
                                                <span className="font-medium text-gray-900 font-mono text-xs">{app.id.substring(0, 8).toUpperCase()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Link
                                            href={`/opportunities/${app.opportunityId}`}
                                            className="w-full py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
                                        >
                                            View Opportunity <FiExternalLink />
                                        </Link>
                                        {app.resumeUrl && (
                                            <a
                                                href={app.resumeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-2 bg-purple-50 border border-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 flex items-center justify-center gap-2"
                                            >
                                                Download Proposal <FiFileText />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// Helper to determine status bar state
function getStepStatus(stepLabel: string, currentStatus: string) {
    const steps = ['Pending', 'Reviewing', 'Shortlisted', 'Decision']; // Decision covers Accepted/Rejected
    const roadmap = ['pending', 'reviewing', 'shortlisted', 'accepted', 'rejected'];

    // Normalize status
    let statusIndex = -1;
    if (currentStatus === 'accepted' || currentStatus === 'rejected') statusIndex = 3;
    else if (currentStatus === 'shortlisted') statusIndex = 2;
    else if (currentStatus === 'reviewing') statusIndex = 1;
    else statusIndex = 0; // pending

    const stepIndex = steps.indexOf(stepLabel);

    if (stepIndex < statusIndex) return 'completed';
    if (stepIndex === statusIndex) return 'current';
    return 'upcoming';
}
