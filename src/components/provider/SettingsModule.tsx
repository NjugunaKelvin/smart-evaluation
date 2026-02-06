import React, { useState } from 'react';
import { FiSave, FiMail, FiBell, FiLock, FiUser, FiGlobe, FiSettings } from 'react-icons/fi';

export default function SettingsModule() {
    const [activeTab, setActiveTab] = useState('email');
    const [emailTemplates, setEmailTemplates] = useState({
        success: `Dear [Name],\n\nWe are pleased to inform you that your proposal for [Project Name] has been shortlisted.\n\nBest regards,\n[Your Organization]`,
        rejection: `Dear [Name],\n\nThank you for your interest in [Project Name]. Unfortunately, we will not be proceeding with your proposal at this time.\n\nBest regards,\n[Your Organization]`
    });

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Platform Settings</h2>
                <p className="text-gray-500 text-sm mt-1">Manage your notification preferences, email templates, and account security.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {}
                <div className="w-full md:w-64 space-y-1">
                    {[
                        { id: 'general', label: 'General', icon: FiGlobe },
                        { id: 'profile', label: 'Profile & Team', icon: FiUser },
                        { id: 'email', label: 'Email Templates', icon: FiMail },
                        { id: 'notifications', label: 'Notifications', icon: FiBell },
                        { id: 'security', label: 'Security', icon: FiLock },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition ${activeTab === item.id ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <item.icon /> {item.label}
                        </button>
                    ))}
                </div>

                {}
                <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    {activeTab === 'email' ? (
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">Email Templates</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Shortlist Success Template</label>
                                    <textarea
                                        rows={6}
                                        value={emailTemplates.success}
                                        onChange={(e) => setEmailTemplates({ ...emailTemplates, success: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none bg-gray-50"
                                    />
                                    <p className="text-xs text-gray-400 mt-1">Available variables: [Name], [Project Name], [Date]</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Rejection Template</label>
                                    <textarea
                                        rows={6}
                                        value={emailTemplates.rejection}
                                        onChange={(e) => setEmailTemplates({ ...emailTemplates, rejection: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none bg-gray-50"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition flex items-center gap-2">
                                    <FiSave /> Save Changes
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-20 text-gray-400">
                            <FiSettings className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>This settings section is under development.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
