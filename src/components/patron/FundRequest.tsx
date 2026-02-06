import React, { useState } from 'react';
import { FiDollarSign, FiDownload, FiPlusCircle, FiCheckCircle, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function FundRequest() {
    const [requestModalOpen, setRequestModalOpen] = useState(false);

    const disbursements = [
        { id: "TRX-1001", date: "Jan 12, 2026", amount: 45000, project: "Turkana Grid", milestone: "Phase 1 Completion", status: "Processing" },
        { id: "TRX-0988", date: "Dec 20, 2025", amount: 20000, project: "Solar Kiosks", milestone: "Initial Mobilization", status: "Received" },
        { id: "TRX-0945", date: "Nov 05, 2025", amount: 15000, project: "Solar Kiosks", milestone: "Site Prep", status: "Received" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Funds & Disbursement</h2>
                    <p className="text-gray-500 text-sm mt-1">Track payments and manage grant requests.</p>
                </div>
                <button
                    onClick={() => setRequestModalOpen(true)}
                    className="bg-purple-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-purple-700 transition flex items-center gap-2 shadow-sm"
                >
                    <FiPlusCircle size={18} /> New Request
                </button>
            </div>

            {}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <p className="text-gray-500 text-xs font-bold uppercase mb-2">Total Allocated</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">$500,000</h3>

                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-purple-600 h-full w-[35%] rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-purple-700 font-bold">35% Disbursed</span>
                        <span className="text-gray-400">Target: 100%</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Pending Release</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">$45,000</h3>
                        </div>
                        <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                            <FiClock />
                        </div>
                    </div>
                    <p className="text-xs text-orange-600 font-medium bg-orange-50 inline-block px-2 py-1 rounded">Processing (Est. 2 days)</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Next Milestone</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">$30,000</h3>
                        </div>
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                            <FiDollarSign />
                        </div>
                    </div>
                    <p className="text-xs text-gray-500">Unlocks after "Grid Connection" verify.</p>
                </div>
            </div>

            {}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white">
                    <h3 className="font-bold text-gray-900 text-base">Transaction History</h3>
                    <button className="text-gray-400 hover:text-purple-600 transition">
                        <FiDownload size={18} />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Transaction ID</th>
                                <th className="px-6 py-4">Project / Milestone</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {disbursements.map((trx) => (
                                <tr key={trx.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 text-gray-600">{trx.date}</td>
                                    <td className="px-6 py-4 font-mono text-gray-400 text-xs">{trx.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-900">{trx.project}</div>
                                        <div className="text-xs text-gray-500">{trx.milestone}</div>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-900">${trx.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${trx.status === 'Received'
                                                ? 'bg-green-50 text-green-700 border-green-200'
                                                : 'bg-orange-50 text-orange-700 border-orange-200'
                                            }`}>
                                            {trx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {}
            {requestModalOpen && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Request Fund Release</h3>
                        <p className="text-gray-500 text-sm mb-6">Initiate a release for a completed milestone.</p>

                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Project</label>
                                <select className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition">
                                    <option>Turkana Energy Grid</option>
                                    <option>Solar Kiosks</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Milestone</label>
                                <input type="text" className="w-full p-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition" placeholder="e.g. Grid Connection Test" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Amount (USD)</label>
                                <input type="number" className="w-full p-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition" placeholder="30000" />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setRequestModalOpen(false)}
                                className="flex-1 py-2.5 border border-gray-200 rounded-lg text-gray-600 font-bold text-sm hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    alert("Request sent successfully!");
                                    setRequestModalOpen(false);
                                }}
                                className="flex-1 py-2.5 bg-purple-600 text-white rounded-lg font-bold text-sm hover:bg-purple-700 shadow-sm transition"
                            >
                                Submit Request
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
