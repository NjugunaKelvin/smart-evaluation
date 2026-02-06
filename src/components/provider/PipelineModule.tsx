import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiFilter, FiSearch, FiFileText, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

export default function PipelineModule() {
    const steps = [
        {
            id: 'screening',
            label: 'Screening',
            count: 45,
            icon: FiUsers,
            colorStyles: { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-900', icon: 'text-blue-600', badge: 'text-blue-700' }
        },
        {
            id: 'evaluation',
            label: 'Evaluation',
            count: 12,
            icon: FiFilter,
            colorStyles: { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-900', icon: 'text-purple-600', badge: 'text-purple-700' }
        },
        {
            id: 'due_diligence',
            label: 'Due Diligence',
            count: 5,
            icon: FiSearch,
            colorStyles: { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-900', icon: 'text-orange-600', badge: 'text-orange-700' }
        },
        {
            id: 'contracting',
            label: 'Contracting',
            count: 2,
            icon: FiFileText,
            colorStyles: { bg: 'bg-pink-50', border: 'border-pink-100', text: 'text-pink-900', icon: 'text-pink-600', badge: 'text-pink-700' }
        },
        {
            id: 'disbursement',
            label: 'Disbursement',
            count: 1,
            icon: FiDollarSign,
            colorStyles: { bg: 'bg-green-50', border: 'border-green-100', text: 'text-green-900', icon: 'text-green-600', badge: 'text-green-700' }
        },
        {
            id: 'delivery',
            label: 'Delivery',
            count: 8,
            icon: FiCheckCircle,
            colorStyles: { bg: 'bg-teal-50', border: 'border-teal-100', text: 'text-teal-900', icon: 'text-teal-600', badge: 'text-teal-700' }
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Project Lifecycle Pipeline</h2>
                <p className="text-gray-500 text-sm mt-1">Track projects in one place - from screening to delivery.</p>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-6 custom-scrollbar">
                {steps.map((step, index) => (
                    <div key={step.id} className="min-w-[240px] flex-1">
                        {}
                        <div className={`p-4 rounded-t-xl ${step.colorStyles.bg} border ${step.colorStyles.border} border-b-0 flex items-center justify-between`}>
                            <div className="flex items-center gap-2">
                                <step.icon className={step.colorStyles.icon} />
                                <span className={`font-bold ${step.colorStyles.text}`}>{step.label}</span>
                            </div>
                            <span className={`bg-white ${step.colorStyles.badge} text-xs font-bold px-2 py-1 rounded-full shadow-sm`}>
                                {step.count}
                            </span>
                        </div>

                        {}
                        <div className="bg-gray-50/50 border border-gray-200 rounded-b-xl min-h-[400px] p-3 space-y-3">
                            {[...Array(Math.max(1, Math.min(step.count, 3)))].map((_, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -2 }}
                                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                                            {['TE', 'NW', 'GC', 'SK'][i] || 'PR'}
                                        </div>
                                        <span className="text-[10px] text-gray-400">2d ago</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                                        {[
                                            'Energy Solutions Turkana',
                                            'Nairobi Water Works',
                                            'Green City Initiative',
                                            'Solar Kiosk Pilot'
                                        ][i] || `Project Alpha ${i + 1}`}
                                    </h4>
                                    <p className="text-xs text-gray-500 line-clamp-2">Detailed technical specification for the project deployment...</p>

                                    {step.id === 'disbursement' && (
                                        <div className="mt-3 pt-2 border-t border-gray-50 flex justify-between items-center">
                                            <span className="text-xs font-bold text-green-600">$50,000</span>
                                            <span className="text-[10px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded">Pending</span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {step.count > 3 && (
                                <button className="w-full py-2 text-xs text-gray-400 hover:text-purple-600 transition text-center">
                                    View {step.count - 3} more...
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
