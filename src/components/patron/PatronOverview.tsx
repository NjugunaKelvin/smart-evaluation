import React from 'react';
import { FiBriefcase, FiClock, FiCheckCircle, FiAlertCircle, FiArrowRight, FiDollarSign } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function PatronOverview({ setView }: { setView: (view: string) => void }) {
    const stats = [
        { label: 'Active Projects', value: '3', icon: FiBriefcase, color: 'blue' },
        { label: 'Pending Reports', value: '1', icon: FiClock, color: 'orange' },
        { label: 'Funds Received', value: '$125k', icon: FiDollarSign, color: 'green' },
    ];

    const projects = [
        {
            id: 1,
            title: "Turkana Energy Grid Expansion",
            status: "In Progress",
            progress: 65,
            nextMilestone: "Grid Connection Test",
            deadline: "Oct 15, 2025"
        },
        {
            id: 2,
            title: "Community Solar Kiosks Phase 2",
            status: "Reporting",
            progress: 90,
            nextMilestone: "Final Impact Report",
            deadline: "Jan 20, 2026"
        },
        {
            id: 3,
            title: "Rift Valley Water Borehole",
            status: "Planning",
            progress: 15,
            nextMilestone: "Site Survey",
            deadline: "Mar 01, 2026"
        }
    ];

    return (
        <div className="space-y-8">
            {}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                    >
                        <p className="text-sm text-gray-500 mb-2 font-medium">{stat.label}</p>
                        <div className="flex justify-between items-end">
                            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                            <div className={`p-2 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
                        <h3 className="font-bold text-gray-900 text-lg">My Projects</h3>
                        <button onClick={() => setView('projects')} className="text-purple-600 hover:text-purple-700 text-sm font-medium hover:underline">
                            View All Projects
                        </button>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {projects.map((project) => (
                            <div key={project.id} className="p-6 hover:bg-gray-50 transition group">
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="font-bold text-gray-800 text-base">{project.title}</h4>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                                            project.status === 'Reporting' ? 'bg-orange-100 text-orange-700' :
                                                'bg-purple-100 text-purple-700'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="h-full bg-purple-500 rounded-full"
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500 font-medium">
                                        <span>Progress: {project.progress}%</span>
                                        <span>Due: {project.deadline}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <FiCheckCircle className="text-green-500" />
                                        <span>Next Goal: <span className="font-semibold text-gray-800">{project.nextMilestone}</span></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-xl p-6 shadow-lg shadow-purple-200 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <FiAlertCircle /> Action Required
                            </h3>
                            <p className="text-purple-100 text-sm mb-5 leading-relaxed">
                                You have a pending status report for "Solar Kiosks Phase 2". Submitting on time ensures faster fund release.
                            </p>
                            <button onClick={() => setView('reports')} className="bg-white text-purple-600 w-full py-2.5 rounded-lg font-bold text-sm hover:bg-purple-50 transition shadow-sm">
                                Submit Report Now
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">Recent Updates</h3>
                        <div className="space-y-4">
                            {[
                                { text: "Fund disbursement of $45k approved.", time: "2h ago", icon: FiDollarSign, bg: "bg-green-100", textCol: "text-green-600" },
                                { text: "New message from Grant Manager.", time: "5h ago", icon: FiBriefcase, bg: "bg-blue-100", textCol: "text-blue-600" },
                                { text: "Quarterly report verified.", time: "1d ago", icon: FiCheckCircle, bg: "bg-purple-100", textCol: "text-purple-600" }
                            ].map((update, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <div className={`w-8 h-8 rounded-lg ${update.bg} ${update.textCol} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                        <update.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700 font-medium leading-snug">{update.text}</p>
                                        <span className="text-xs text-gray-400">{update.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
