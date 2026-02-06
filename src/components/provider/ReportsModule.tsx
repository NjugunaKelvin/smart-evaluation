import React from 'react';
import { FiBarChart2, FiPieChart, FiTrendingUp, FiCalendar, FiDownload, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ReportsModule() {
    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Reports and Analytics</h2>
                    <p className="text-gray-500 text-sm mt-1">Comprehensive view of your program's impact and performance.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
                        <FiCalendar /> This Quarter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition shadow-sm">
                        <FiDownload /> Export PDF
                    </button>
                </div>
            </div>

            {/* Top Level Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Funds Disbursed', value: '$2.4M', change: '+12%', color: 'green' },
                    { label: 'Beneficiaries Reached', value: '14,205', change: '+8%', color: 'blue' },
                    { label: 'Active Projects', value: '34', change: '+2', color: 'purple' },
                    { label: 'Avg. Impact Score', value: '4.8/5', change: '+0.2', color: 'orange' }
                ].map((stat, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                    >
                        <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                        <div className="flex items-end gap-3">
                            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                            <span className={`text-xs font-bold px-1.5 py-0.5 rounded bg-${stat.color}-50 text-${stat.color}-600 mb-1`}>
                                {stat.change}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                            <FiTrendingUp className="text-purple-600" /> Disbursement vs Impact
                        </h3>
                    </div>
                    {}
                    <div className="h-64 flex items-end justify-between gap-2 px-4 border-b border-gray-100 pb-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                            <div key={i} className="w-full relative group">
                                <div
                                    className="bg-purple-100 hover:bg-purple-200 transition-all rounded-t-md absolute bottom-0 w-full"
                                    style={{ height: `${h}%` }}
                                ></div>
                                <div
                                    className="bg-purple-600 hover:bg-purple-700 transition-all rounded-t-md absolute bottom-0 w-full opacity-80"
                                    style={{ height: `${h * 0.7}%` }}
                                ></div>
                                {}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                                    Month {i + 1}: ${(h * 10)}k
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400 px-4">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                {}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-6">
                        <FiPieChart className="text-blue-600" /> Sector Allocation
                    </h3>
                    <div className="flex-1 flex items-center justify-center relative">
                        {}
                        <div className="w-48 h-48 rounded-full border-[16px] border-blue-500 border-r-purple-500 border-b-green-500 border-l-orange-500 rotate-45"></div>
                        <div className="absolute text-center">
                            <div className="text-3xl font-bold text-gray-900">100%</div>
                            <div className="text-xs text-gray-500 font-medium tracking-wider uppercase">Allocated</div>
                        </div>
                    </div>
                    <div className="mt-8 space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Education</span>
                            <span className="font-bold text-gray-700">35%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500"></span> Healthcare</span>
                            <span className="font-bold text-gray-700">25%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> Agriculture</span>
                            <span className="font-bold text-gray-700">20%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500"></span> Infrastructure</span>
                            <span className="font-bold text-gray-700">20%</span>
                        </div>
                    </div>
                </div>
            </div>

            {}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <FiMapPin className="text-red-500" /> Project Locations
                    </h3>
                    <button className="text-sm text-purple-600 font-medium hover:underline">View Full Map</button>
                </div>
                <div className="bg-blue-50/50 rounded-xl h-64 border border-blue-100 flex items-center justify-center relative overflow-hidden">
                    <div className="text-blue-300 font-bold text-4xl select-none opacity-20 transform -rotate-12">INTERACTIVE MAP PREVIEW</div>

                    {}
                    <div className="absolute top-1/4 left-1/4 animate-bounce duration-[2000ms]">
                        <FiMapPin className="w-8 h-8 text-red-500 drop-shadow-md" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 animate-bounce delay-75 duration-[2200ms]">
                        <FiMapPin className="w-8 h-8 text-purple-500 drop-shadow-md" />
                    </div>
                    <div className="absolute bottom-1/3 right-1/4 animate-bounce delay-150 duration-[1800ms]">
                        <FiMapPin className="w-8 h-8 text-orange-500 drop-shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    );
}
