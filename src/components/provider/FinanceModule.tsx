import React, { useState } from 'react';
import { FiDollarSign, FiPrinter, FiDownload, FiCheckCircle, FiClock, FiAlertCircle, FiSearch, FiFilter } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function FinanceModule() {
    const [activeTab, setActiveTab] = useState<'disbursements' | 'account' | 'reports'>('disbursements');

    const transactions = [
        { id: 'TRX-8932', project: 'Turkana Energy Grid', date: '2025-01-12', amount: 50000, recipient: 'SolarTech Ltd', status: 'Completed', type: 'Milestone 1' },
        { id: 'TRX-8931', project: 'Nairobi Water Works', date: '2025-01-10', amount: 12500, recipient: 'CleanFlow Inc', status: 'Pending', type: 'Initial Deposit' },
        { id: 'TRX-8930', project: 'Mombasa Port Expansion', date: '2025-01-08', amount: 340000, recipient: 'Global Construction', status: 'Processing', type: 'Equipment' },
        { id: 'TRX-8929', project: 'Tech Hub Kisumu', date: '2025-01-05', amount: 25000, recipient: 'DevBuilders Co', status: 'Completed', type: 'Grant' },
    ];

    const handlePrint = () => {
        
        window.print();
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Funds & Disbursement</h2>
                    <p className="text-gray-500 text-sm mt-1">Manage project funding, view transaction history, and generate financial reports.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                    >
                        <FiPrinter /> Print Report
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition shadow-sm">
                        <FiDollarSign /> New Transfer
                    </button>
                </div>
            </div>

            {}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg">
                    <p className="text-gray-400 text-sm mb-1">Total Balance</p>
                    <h3 className="text-3xl font-bold mb-4">$5,240,000.00</h3>
                    <div className="flex gap-2">
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">Available</span>
                        <span className="text-xs text-gray-400 py-1">USD Account ****4482</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Disbursed This Month</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">$1.2M</h3>
                    <div className="text-xs text-green-600 font-medium flex items-center gap-1">
                        <FiCheckCircle /> 12 Transactions Completed
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Pending Requests</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">4</h3>
                    <div className="text-xs text-orange-600 font-medium flex items-center gap-1">
                        <FiClock /> Needs Approval
                    </div>
                </div>
            </div>

            {}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <h3 className="font-bold text-gray-900">Recent Transactions</h3>
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search transactions..."
                                className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-purple-500 w-64"
                            />
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                        <FiFilter /> Filter
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500">
                            <tr>
                                <th className="px-6 py-3 font-medium">Transaction ID</th>
                                <th className="px-6 py-3 font-medium">Project</th>
                                <th className="px-6 py-3 font-medium">Recipient</th>
                                <th className="px-6 py-3 font-medium">Date</th>
                                <th className="px-6 py-3 font-medium">Amount</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {transactions.map((trx) => (
                                <tr key={trx.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 font-mono text-gray-600 font-medium">{trx.id}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{trx.project}</td>
                                    <td className="px-6 py-4 text-gray-600">{trx.recipient}</td>
                                    <td className="px-6 py-4 text-gray-500">{trx.date}</td>
                                    <td className="px-6 py-4 font-bold text-gray-900">${trx.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${trx.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                trx.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-blue-100 text-blue-700'
                                            }`}>
                                            {trx.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-purple-600 transition">
                                            <FiDownload className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
                    <button className="text-sm text-purple-600 font-medium hover:underline">View All Transactions</button>
                </div>
            </div>
        </div>
    );
}
