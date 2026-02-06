'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiUser, FiLock, FiBell, FiUsers, FiCreditCard,
    FiSave, FiUpload, FiTrash2, FiPlus, FiCheck, FiShield
} from 'react-icons/fi';

export default function PatronSettings({ onUpgrade }: { onUpgrade?: () => void }) {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="space-y-6 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                    <p className="text-gray-500">Manage your organization profile and preferences</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden min-h-[600px]">
                <div className="flex border-b border-gray-200 overflow-x-auto no-scrollbar">
                    {[
                        { id: 'profile', label: 'Organization Profile', icon: FiUser },
                        { id: 'security', label: 'Security', icon: FiLock },
                        { id: 'notifications', label: 'Notifications', icon: FiBell },
                        { id: 'team', label: 'Team Members', icon: FiUsers },
                        { id: 'billing', label: 'Billing', icon: FiCreditCard },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                                ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="p-6 md:p-8">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'profile' && <ProfileSettings />}
                        {activeTab === 'security' && <SecuritySettings />}
                        {activeTab === 'notifications' && <NotificationSettings />}
                        {activeTab === 'team' && <TeamSettings onUpgrade={onUpgrade} />}
                        {activeTab === 'billing' && <BillingSettings onUpgrade={onUpgrade} />}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function ProfileSettings() {
    return (
        <div className="max-w-2xl space-y-8">
            <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 relative group cursor-pointer overflow-hidden">
                    <FiUpload className="w-8 h-8 group-hover:scale-110 transition" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white text-xs font-medium">
                        Change
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Organization Logo</h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Upload a PNG or JPG file. Recommended size 400x400px.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">
                            Remove
                        </button>
                        <button className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition">
                            Upload New
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                        <input
                            type="text"
                            defaultValue="TechSol Solutions"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-100 focus:border-purple-500 outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                        <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-100 focus:border-purple-500 outline-none transition bg-white">
                            <option>Technology</option>
                            <option>Education</option>
                            <option>Healthcare</option>
                            <option>Finance</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio / Description</label>
                    <textarea
                        rows={4}
                        defaultValue="Leading provider of innovative technology solutions for modern businesses."
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-100 focus:border-purple-500 outline-none transition resize-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                        <input
                            type="url"
                            defaultValue="https://techsol.com"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-100 focus:border-purple-500 outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                        <input
                            type="email"
                            defaultValue="contact@techsol.com"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-100 focus:border-purple-500 outline-none transition"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-lg shadow-purple-900/20 font-medium">
                    <FiSave /> Save Changes
                </button>
            </div>
        </div>
    );
}

function SecuritySettings() {
    return (
        <div className="max-w-2xl space-y-8">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Password</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-purple-500 transition" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-purple-500 transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div className="flex justify-end mt-2">
                        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition">Update Password</button>
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50/50">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                            <FiShield className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">2FA is currently <span className="text-green-600 font-bold">Enabled</span></p>
                            <p className="text-sm text-gray-500">Your account is secured with authenticator app.</p>
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
                        Configure
                    </button>
                </div>
            </div>
        </div>
    );
}

function NotificationSettings() {
    const [toggles, setToggles] = useState({
        emailMarketing: false,
        emailSecurity: true,
        pushMessages: true,
        pushProjects: true
    });

    const Toggle = ({ checked, onChange }: { checked: boolean, onChange: () => void }) => (
        <button
            onClick={onChange}
            className={`w-11 h-6 rounded-full transition-colors relative ${checked ? 'bg-purple-600' : 'bg-gray-200'}`}
        >
            <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
    );

    return (
        <div className="max-w-2xl space-y-8">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <p className="font-medium text-gray-900">Marketing & Updates</p>
                            <p className="text-sm text-gray-500">Receive news, trends, and product updates.</p>
                        </div>
                        <Toggle checked={toggles.emailMarketing} onChange={() => setToggles({ ...toggles, emailMarketing: !toggles.emailMarketing })} />
                    </div>
                    <div className="flex items-center justify-between py-2 border-t border-gray-100">
                        <div>
                            <p className="font-medium text-gray-900">Security Alerts</p>
                            <p className="text-sm text-gray-500">Get notified about login attempts and password changes.</p>
                        </div>
                        <Toggle checked={toggles.emailSecurity} onChange={() => setToggles({ ...toggles, emailSecurity: !toggles.emailSecurity })} />
                    </div>
                </div>
            </div>

            <div className="pt-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Push Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <p className="font-medium text-gray-900">New Messages</p>
                            <p className="text-sm text-gray-500">Get notified when you receive a message from a provider.</p>
                        </div>
                        <Toggle checked={toggles.pushMessages} onChange={() => setToggles({ ...toggles, pushMessages: !toggles.pushMessages })} />
                    </div>
                    <div className="flex items-center justify-between py-2 border-t border-gray-100">
                        <div>
                            <p className="font-medium text-gray-900">Project Updates</p>
                            <p className="text-sm text-gray-500">Get notified about project milestones and reports.</p>
                        </div>
                        <Toggle checked={toggles.pushProjects} onChange={() => setToggles({ ...toggles, pushProjects: !toggles.pushProjects })} />
                    </div>
                </div>
            </div>

            <div className="pt-6 flex justify-end">
                <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium">Save Preferences</button>
            </div>
        </div>
    );
}

function TeamSettings({ onUpgrade }: { onUpgrade?: () => void }) {
    const members = [
        { name: "Alex Morgan", email: "alex@techsol.com", role: "Admin", avatar: "AM" },
        { name: "Sarah Chen", email: "sarah@techsol.com", role: "Manager", avatar: "SC" },
        { name: "Mike Ross", email: "mike@techsol.com", role: "Viewer", avatar: "MR" },
    ];

    return (
        <div className="max-w-3xl space-y-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
                    <p className="text-sm text-gray-500">Manage who has access to this dashboard.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-medium">
                    <FiPlus /> Add Member
                </button>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {members.map((member, i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">
                                            {member.avatar}
                                        </div>
                                        <span className="font-medium text-gray-900">{member.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{member.email}</td>
                                <td className="px-6 py-4">
                                    <span className="inline-block px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                                        {member.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-red-500 transition">
                                        <FiTrash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
                <p className="flex items-center gap-2">
                    <span className="bg-blue-200 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">i</span>
                    You can invite up to 2 more members on your current plan.
                </p>
                <button
                    onClick={onUpgrade}
                    className="text-blue-700 font-bold hover:underline"
                >
                    Upgrade Plan
                </button>
            </div>
        </div>
    );
}

function BillingSettings({ onUpgrade }: { onUpgrade?: () => void }) {
    return (
        <div className="max-w-3xl space-y-8">
            <div className="p-6 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <p className="text-purple-200 font-medium mb-1">Current Plan</p>
                        <h2 className="text-3xl font-bold mb-4">Professional</h2>
                        <p className="text-sm text-purple-200/80 max-w-sm">
                            Perfect for growing grant-making organizations and foundations managing multiple projects.
                        </p>
                    </div>
                    <div className="text-right">
                        <button
                            onClick={onUpgrade}
                            className="px-4 py-2 bg-white text-purple-900 rounded-lg text-sm font-bold hover:bg-purple-50 transition shadow-lg"
                        >
                            Upgrade Plan
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="border border-gray-200 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-slate-800 rounded text-white flex items-center justify-center font-bold text-xs">VISA</div>
                        <div>
                            <p className="font-medium text-gray-900">Visa ending in 4242</p>
                            <p className="text-sm text-gray-500">Expires 12/26</p>
                        </div>
                    </div>
                    <button className="text-sm text-purple-600 font-medium hover:text-purple-700">Edit</button>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h3>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
                            <tr>
                                <th className="px-6 py-4">Invoice</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { id: "INV-001", date: "Jan 01, 2026", amount: "$199.00", status: "Paid" },
                                { id: "INV-002", date: "Dec 01, 2025", amount: "$199.00", status: "Paid" },
                                { id: "INV-003", date: "Nov 01, 2025", amount: "$199.00", status: "Paid" },
                            ].map((invoice, i) => (
                                <tr key={i} className="hover:bg-gray-50/50 transition">
                                    <td className="px-6 py-4 font-medium text-gray-900">{invoice.id}</td>
                                    <td className="px-6 py-4 text-gray-600">{invoice.date}</td>
                                    <td className="px-6 py-4 text-gray-600">{invoice.amount}</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-200">
                                            <FiCheck className="w-3 h-3" /> {invoice.status}
                                        </span>
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
