'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getUser, logout } from '@/lib/auth';

export default function ProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        contactName: '',
        companyName: '',
        email: '',
        phone: '',
        sector: ''
    });

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }

        const userData = getUser();
        setUser(userData);
        setFormData({
            contactName: userData?.contactName || '',
            companyName: userData?.companyName || '',
            email: userData?.email || '',
            phone: userData?.phone || '',
            sector: userData?.sector || ''
        });
    }, [router]);

    const handleSave = async () => {
        
        alert('Profile update API not yet implemented');
        setEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b border-gray-200 px-4 py-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                    <p className="text-gray-600 mt-2">Manage your account information</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    {}
                    <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                        <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                            {user?.contactName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900">{user?.contactName || 'User'}</h2>
                            <p className="text-gray-600">{user?.email}</p>
                            <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                {user?.userType === 'provider' ? 'Provider Account' : 'Regular User'}
                            </span>
                        </div>
                        {!editing && (
                            <button
                                onClick={() => setEditing(true)}
                                className="px-6 py-3 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 transition"
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>

                    {}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                                <input
                                    type="text"
                                    disabled={!editing}
                                    value={formData.contactName}
                                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 disabled:bg-gray-50 disabled:text-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                <input
                                    type="text"
                                    disabled={!editing}
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 disabled:bg-gray-50 disabled:text-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    disabled
                                    value={formData.email}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                                />
                                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    disabled={!editing}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 disabled:bg-gray-50 disabled:text-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sector</label>
                                <input
                                    type="text"
                                    disabled={!editing}
                                    value={formData.sector}
                                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 disabled:bg-gray-50 disabled:text-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
                                <input
                                    type="text"
                                    disabled
                                    value={user?.userType === 'provider' ? 'Provider' : 'Regular User'}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                                />
                            </div>
                        </div>

                        {editing && (
                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={() => setEditing(false)}
                                    className="flex-1 px-6 py-3 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="flex-1 px-6 py-3 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 transition"
                                >
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {}
                <div className="mt-8 bg-white rounded-xl shadow-sm border border-red-200 p-8">
                    <h3 className="text-lg font-bold text-red-600 mb-4">Danger Zone</h3>
                    <p className="text-gray-600 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button
                        onClick={logout}
                        className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
