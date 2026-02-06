'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiSearch, FiFilter, FiDownload, FiUser, FiCalendar, FiClock, FiActivity,
    FiShield, FiArrowLeft, FiFileText, FiDollarSign, FiPenTool, FiCheckCircle,
    FiAlertCircle, FiSettings, FiBriefcase, FiLayers
} from 'react-icons/fi';


interface AuditLog {
    id: string;
    action: string;
    category: 'financial' | 'report' | 'contract' | 'system' | 'compliance';
    user: string;
    role: string;
    timestamp: string;
    details: string;
    amount?: string; 
    status: 'success' | 'pending' | 'failed' | 'warning';
}

interface Project {
    id: string;
    name: string;
    partner: string;
    startDate: string;
    endDate: string;
    budget: string;
    status: 'Active' | 'Completed' | 'On Hold' | 'Under Review';
    riskScore: 'Low' | 'Medium' | 'High';
}

export default function AuditTrailModule() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'timeline' | 'financial' | 'contracts'>('timeline');

    
    const projects: Project[] = [
        {
            id: 'PRJ-2024-001',
            name: 'Clean Water Initiative',
            partner: 'Green Earth NGO',
            startDate: '2024-01-15',
            endDate: '2024-12-31',
            budget: '$50,000',
            status: 'Active',
            riskScore: 'Low'
        },
        {
            id: 'PRJ-2023-045',
            name: 'Rural Education Program',
            partner: 'EduComm Foundation',
            startDate: '2023-06-01',
            endDate: '2024-05-30',
            budget: '$120,000',
            status: 'Active',
            riskScore: 'Medium'
        },
        {
            id: 'PRJ-2023-012',
            name: 'Urban Health Access',
            partner: 'HealthFirst Ltd',
            startDate: '2023-01-01',
            endDate: '2023-12-31',
            budget: '$75,000',
            status: 'Completed',
            riskScore: 'Low'
        },
        {
            id: 'PRJ-2024-112',
            name: 'Wildlife Conservation',
            partner: 'Nature Trust',
            startDate: '2024-03-10',
            endDate: '2025-03-10',
            budget: '$200,000',
            status: 'Under Review',
            riskScore: 'High'
        }
    ];

    
    const projectLogs: AuditLog[] = [
        {
            id: 'evt-101',
            action: 'Funds Disbursed',
            category: 'financial',
            user: 'Finance Manager',
            role: 'Admin',
            timestamp: '2024-03-15 14:30',
            details: 'Milestone 1 Payment processed successfully.',
            amount: '$15,000',
            status: 'success'
        },
        {
            id: 'evt-102',
            action: 'Quarterly Report Submitted',
            category: 'report',
            user: 'Partner Admin',
            role: 'Partner',
            timestamp: '2024-03-10 09:15',
            details: 'Q1 Impact Report uploaded and verified.',
            status: 'success'
        },
        {
            id: 'evt-103',
            action: 'Contract Amendment',
            category: 'contract',
            user: 'Legal Team',
            role: 'Admin',
            timestamp: '2024-02-28 11:45',
            details: 'Appendix B added regarding safety compliance.',
            status: 'warning'
        },
        {
            id: 'evt-104',
            action: 'Project Started',
            category: 'system',
            user: 'Program Director',
            role: 'Manager',
            timestamp: '2024-01-15 08:00',
            details: 'Project status changed to Active.',
            status: 'success'
        },
        {
            id: 'evt-105',
            action: 'Budget Approval',
            category: 'financial',
            user: 'Board Committee',
            role: 'Approver',
            timestamp: '2024-01-10 16:20',
            details: 'Initial budget of $50,000 approved.',
            status: 'success'
        }
    ];

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'financial': return FiDollarSign;
            case 'report': return FiFileText;
            case 'contract': return FiPenTool;
            case 'system': return FiSettings;
            default: return FiActivity;
        }
    };

    const getRiskColor = (risk: string) => {
        switch (risk) {
            case 'Low': return 'bg-green-100 text-green-700';
            case 'Medium': return 'bg-yellow-100 text-yellow-700';
            case 'High': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    
    if (!selectedProject) {
        return (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <FiShield className="text-purple-600" /> Audit & Compliance
                        </h1>
                        <p className="text-gray-500">Select a project to view detailed audit trails and financial history.</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    {}
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                                <tr>
                                    <th className="px-6 py-4">Project Name</th>
                                    <th className="px-6 py-4">Partner</th>
                                    <th className="px-6 py-4">Timeline</th>
                                    <th className="px-6 py-4">Total Budget</th>
                                    <th className="px-6 py-4">Risk Score</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {projects.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map((project, i) => (
                                    <tr key={project.id} className="hover:bg-gray-50/80 transition">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                                                    <FiBriefcase className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{project.name}</p>
                                                    <p className="text-xs text-gray-500">{project.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-700 font-medium">{project.partner}</td>
                                        <td className="px-6 py-4 text-gray-500 text-xs">
                                            {project.startDate} <span className="mx-1">→</span> {project.endDate}
                                        </td>
                                        <td className="px-6 py-4 font-mono font-medium text-gray-900">{project.budget}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${getRiskColor(project.riskScore)}`}>
                                                {project.riskScore} Risk
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border
                                                ${project.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                                                ${project.status === 'Completed' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                                                ${project.status === 'Under Review' ? 'bg-orange-50 text-orange-700 border-orange-200' : ''}
                                            `}>
                                                {project.status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>}
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="text-purple-600 hover:text-purple-800 font-medium hover:underline"
                                            >
                                                View Audit Log
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition text-gray-500"
                >
                    <FiArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{selectedProject.name}</h1>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        ID: {selectedProject.id} • <span className="font-medium text-purple-600">{selectedProject.partner}</span>
                    </p>
                </div>
                <div className="ml-auto flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                        <FiDownload /> Download Report
                    </button>
                </div>
            </div>

            {}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Total Budget</p>
                    <p className="text-2xl font-bold text-gray-900">{selectedProject.budget}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Disbursed</p>
                    <p className="text-2xl font-bold text-green-600">$15,000</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Risk Level</p>
                    <p className={`text-xl font-bold ${selectedProject.riskScore === 'Low' ? 'text-green-600' : 'text-red-500'}`}>
                        {selectedProject.riskScore}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Last Audit</p>
                    <p className="text-xl font-bold text-gray-900">Mar 15, 2024</p>
                </div>
            </div>

            {}
            <div className="flex border-b border-gray-200 space-x-6">
                {['timeline', 'financial', 'contracts'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`pb-3 text-sm font-medium capitalize transition-colors relative ${activeTab === tab ? 'text-purple-600' : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {tab} History
                        {activeTab === tab && (
                            <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
                        )}
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[400px]">
                {activeTab === 'timeline' && (
                    <div className="p-8">
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            {projectLogs.map((log) => {
                                const Icon = getCategoryIcon(log.category);
                                return (
                                    <div key={log.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                        {}
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-500">
                                            <Icon className="w-5 h-5" />
                                        </div>

                                        {}
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="font-bold text-gray-900">{log.action}</div>
                                                <time className="font-mono text-xs text-gray-500">{log.timestamp}</time>
                                            </div>
                                            <div className="text-slate-500 text-sm mb-2">{log.details}</div>

                                            {log.amount && (
                                                <div className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded mb-2">
                                                    Amount: {log.amount}
                                                </div>
                                            )}

                                            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-50 text-xs text-gray-500">
                                                <FiUser className="w-3 h-3" />
                                                <span>{log.user} ({log.role})</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {activeTab === 'financial' && (
                    <div className="p-8 text-center text-gray-500">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FiDollarSign className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Financial Records</h3>
                        <p className="max-w-md mx-auto mt-2">Detailed ledger of all financial transactions, disbursements, and refunds associated with this project.</p>
                    </div>
                )}

                {activeTab === 'contracts' && (
                    <div className="p-8 text-center text-gray-500">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FiFileText className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Contract History</h3>
                        <p className="max-w-md mx-auto mt-2">Repository of all signed contracts, amendments, and legal documents.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
