import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCheck, FiX, FiSend, FiEdit3 } from 'react-icons/fi';

interface EmailWorkflowProps {
    candidates: any[];
    onComplete: () => void;
}

export default function EmailWorkflow({ candidates, onComplete }: EmailWorkflowProps) {
    const [templateType, setTemplateType] = useState<'success' | 'rejection'>('success');

    const templates = {
        success: {
            subject: "Congratulations! You've been shortlisted - [Project Name]",
            body: `Dear [Name],\n\nWe are pleased to inform you that your proposal for [Project Name] has been shortlisted for the next stage of due diligence.\n\nPlease log in to the portal to view the next steps and schedule a preliminary discussion.\n\nBest regards,\n[Your Organization]`
        },
        rejection: {
            subject: "Update on your proposal for [Project Name]",
            body: `Dear [Name],\n\nThank you for your interest in [Project Name]. After careful review, we regret to inform you that we will not be proceeding with your proposal at this time.\n\nWe appreciate the time you took to apply and encourage you to apply for future opportunities.\n\nBest regards,\n[Your Organization]`
        }
    };

    const [emailContent, setEmailContent] = useState(templates.success);

    
    const handleTypeSwitch = (type: 'success' | 'rejection') => {
        setTemplateType(type);
        setEmailContent(templates[type]);
    };

    const handleSend = () => {
        
        setTimeout(() => {
            alert(`Emails sent successfully to ${candidates.length} candidates.`);
            onComplete();
        }, 1000);
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl max-w-4xl mx-auto overflow-hidden">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <FiMail className="text-purple-400" /> Communications Hub
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">Send status updates to your evaluated candidates.</p>
                </div>
                <div className="text-right">
                    <span className="block text-2xl font-bold">{candidates.length}</span>
                    <span className="text-xs text-slate-400">Recipients</span>
                </div>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {}
                <div className="space-y-6">
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">Email Type</label>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => handleTypeSwitch('success')}
                                className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition ${templateType === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${templateType === 'success' ? 'bg-green-200 text-green-700' : 'bg-gray-200'}`}>
                                    <FiCheck />
                                </div>
                                Shortlist Notification
                            </button>
                            <button
                                onClick={() => handleTypeSwitch('rejection')}
                                className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition ${templateType === 'rejection' ? 'bg-red-50 text-red-700 border border-red-200' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${templateType === 'rejection' ? 'bg-red-200 text-red-700' : 'bg-gray-200'}`}>
                                    <FiX />
                                </div>
                                Regret Email
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Recipients</label>
                        <div className="max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                            {candidates.map((c, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-gray-700 p-2 bg-gray-50 rounded">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">
                                        {c.name.charAt(0)}
                                    </div>
                                    <span className="truncate">{c.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {}
                <div className="md:col-span-2 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject Line</label>
                        <input
                            type="text"
                            value={emailContent.subject}
                            onChange={(e) => setEmailContent({ ...emailContent, subject: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message Body</label>
                        <div className="relative">
                            <textarea
                                value={emailContent.body}
                                onChange={(e) => setEmailContent({ ...emailContent, body: e.target.value })}
                                className="w-full h-64 px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none font-mono text-sm leading-relaxed"
                            />
                            <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-white/80 p-1 rounded">
                                Tips: Use [Name] for dynamic insertion.
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                        <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition">
                            Save as Template
                        </button>
                        <button
                            onClick={handleSend}
                            className="px-6 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition flex items-center gap-2 shadow-lg"
                        >
                            <FiSend /> Send Emails
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
