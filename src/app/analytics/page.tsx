'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

interface AnalyticsData {
    totalOpportunities: number;
    activeOpportunities: number;
    closedOpportunities: number;
    totalApplications: number;
    recentActivity: any[];
}

export default function AnalyticsPage() {
    const [data, setData] = useState<AnalyticsData | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchAnalytics = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/login');
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/analytics', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const analyticsData = await response.json();
                    setData(analyticsData);
                } else {
                    
                    if (response.status === 401) {
                        router.push('/login');
                    }
                }
            } catch (error) {
                console.error('Analytics Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-purple-600 font-semibold">Loading analytics...</div>
            </div>
        );
    }

    if (!data) {
        return null; 
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Analytics</h1>

                {}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Total Opportunities</h3>
                        <p className="text-3xl font-bold text-gray-900">{data.totalOpportunities}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Active Listings</h3>
                        <p className="text-3xl font-bold text-purple-600">{data.activeOpportunities}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Total Applications</h3>
                        <p className="text-3xl font-bold text-gray-900">{data.totalApplications}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Closed/Archived</h3>
                        <p className="text-3xl font-bold text-gray-600">{data.closedOpportunities}</p>
                    </div>
                </div>

                {}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900">Recent Opportunities</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {data.recentActivity.length > 0 ? (
                            data.recentActivity.map((opp: any) => (
                                <div key={opp.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 mb-1">{opp.title}</h3>
                                            <p className="text-xs text-gray-500 mb-2">Posted on {new Date(opp.postedDate).toLocaleDateString()}</p>
                                            <div className="flex space-x-2">
                                                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md font-medium">{opp.industry}</span>
                                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">{opp.status}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-gray-900">{opp.applications || 0}</p>
                                            <p className="text-xs text-gray-500">Applications</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-6 text-center text-gray-500">No recent activity found.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
