import React, { useState } from 'react';
import { FiUploadCloud, FiFileText, FiCheck, FiRefreshCw, FiAlertTriangle, FiFilter } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ReportHub() {
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleUpload = () => {
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            setUploadSuccess(true);
            setTimeout(() => setUploadSuccess(false), 3000); 
        }, 2000);
    };

    const reports = [
        { id: 1, name: "Q1 Impact Assessment.pdf", project: "Solar Kiosks", date: "Jan 10, 2026", status: "Approved", size: "2.4 MB" },
        { id: 2, name: "Dec 2025 Financials.xlsx", project: "Turkana Grid", date: "Dec 31, 2025", status: "Under Review", size: "850 KB" },
        { id: 3, name: "Site Construction Photos.zip", project: "Rift Valley Borehole", date: "Nov 15, 2025", status: "Approved", size: "45 MB" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Report Submission</h2>
                    <p className="text-gray-500 text-sm mt-1">Submit updates to your grant providers.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm h-full flex flex-col">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="p-1.5 bg-purple-50 rounded text-purple-600"><FiUploadCloud /></div> Upload New Report
                        </h3>

                        <div className="space-y-4 flex-grow">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Select Project</label>
                                <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition">
                                    <option>Solar Kiosks Phase 2</option>
                                    <option>Turkana Energy Grid</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Report Type</label>
                                <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition">
                                    <option>Monthly Progress</option>
                                    <option>Financial Audit</option>
                                    <option>Impact Assessment</option>
                                </select>
                            </div>

                            <div
                                className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all mt-4 flex-grow min-h-[160px] ${uploadSuccess ? 'border-green-400 bg-green-50' : 'border-gray-200 hover:border-purple-400 hover:bg-purple-50'
                                    }`}
                                onClick={!uploading ? handleUpload : undefined}
                            >
                                {uploading ? (
                                    <FiRefreshCw className="w-8 h-8 text-purple-600 animate-spin mb-2" />
                                ) : uploadSuccess ? (
                                    <FiCheck className="w-8 h-8 text-green-600 mb-2" />
                                ) : (
                                    <FiUploadCloud className="w-8 h-8 text-gray-300 mb-2" />
                                )}

                                <p className="text-sm font-bold text-gray-700">
                                    {uploading ? 'Uploading...' : uploadSuccess ? 'Done!' : 'Click to Upload Report'}
                                </p>
                                {!uploading && !uploadSuccess && (
                                    <p className="text-xs text-gray-400 mt-1">PDF, Excel, or Zip (Max 50MB)</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Submission History</h3>
                            <button className="text-gray-500 hover:text-purple-600"><FiFilter /></button>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {reports.map((report) => (
                                <div key={report.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center border border-gray-200 group-hover:bg-purple-50 group-hover:text-purple-600 transition">
                                            <FiFileText size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm group-hover:text-purple-600 transition">{report.name}</h4>
                                            <p className="text-xs text-gray-500 mt-0.5">{report.project} • {report.date} • {report.size}</p>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${report.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' :
                                            report.status === 'Under Review' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                                                'bg-red-50 text-red-700 border-red-200'
                                        }`}>
                                        {report.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="p-3 text-center border-t border-gray-200 bg-gray-50">
                            <button className="text-xs text-purple-600 font-bold hover:underline">View All Submission History</button>
                        </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-4">
                        <FiAlertTriangle className="text-orange-600 w-5 h-5 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-sm text-orange-900 mb-1">Upcoming Deadline</h4>
                            <p className="text-orange-800/80 text-sm">
                                Your Quarterly Impact Report for <strong>Turkana Grid</strong> is due in 5 days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
