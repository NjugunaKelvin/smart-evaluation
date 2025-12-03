'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getToken, getUser, isProvider } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import PostOpportunityModal from '@/components/PostOpportunityModal';

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [opportunities, setOpportunities] = useState<any[]>([]);
    const [analytics, setAnalytics] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [editingOpportunity, setEditingOpportunity] = useState<any>(null);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }

        const userData = getUser();
        setUser(userData);
        fetchDashboardData();
    }, [router]);

    const fetchDashboardData = async () => {
        try {
            const token = getToken();
            const userData = getUser();

            // Fetch all opportunities
            const oppResponse = await fetch('http://localhost:5000/api/opportunities', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (oppResponse.ok) {
                const oppData = await oppResponse.json();
                // Filter for opportunities posted by the current user
                // Ensure we handle both array response and object response correctly
                const allOpps = Array.isArray(oppData) ? oppData : (oppData.opportunities || []);
                const myOpps = allOpps.filter((opp: any) => opp.postedBy === userData?.uid);
                setOpportunities(myOpps);
            }

            if (isProvider()) {
                // Fetch analytics
                const analyticsResponse = await fetch('http://localhost:5000/api/analytics', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (analyticsResponse.ok) {
                    const analyticsData = await analyticsResponse.json();
                    setAnalytics(analyticsData);
                }
            }
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this opportunity? This action cannot be undone.')) {
            return;
        }

        try {
            const token = getToken();
            const response = await fetch(`http://localhost:5000/api/opportunities/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                // Remove from local state immediately
                setOpportunities(prev => prev.filter(opp => opp.id !== id));
            } else {
                alert('Failed to delete opportunity');
            }
        } catch (error) {
            console.error('Error deleting opportunity:', error);
            alert('An error occurred while deleting');
        }
    };

    const handleEdit = (opportunity: any) => {
        setEditingOpportunity(opportunity);
        setIsPostModalOpen(true);
    };

    const handleModalClose = () => {
        setIsPostModalOpen(false);
        setEditingOpportunity(null);
    };

    const handleModalSuccess = () => {
        fetchDashboardData();
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#ebe1f2] flex items-center justify-center">
                <Navbar />
                <div className="text-center mt-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#ebe1f2]">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600 mt-1">Welcome back, {user?.contactName || 'User'}</p>
                    </div>
                    <Button
                        variant="primary"
                        onClick={() => setIsPostModalOpen(true)}
                        className="bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-200"
                    >
                        + Post New Opportunity
                    </Button>
                </div>

                {/* Analytics Section */}
                {isProvider() && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Total Posted</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">{analytics?.totalPosted || opportunities.length}</p>
                                </div>
                                <div className="p-3 bg-purple-100 rounded-full">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                            </div>
                        </Card>
                        <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Active Opportunities</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">{analytics?.active || opportunities.filter((o: any) => new Date(o.deadline) > new Date()).length}</p>
                                </div>
                                <div className="p-3 bg-green-100 rounded-full">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </Card>
                        <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Total Applications</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">{analytics?.totalApplications || 0}</p>
                                </div>
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}

                {/* Opportunities List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                        <h2 className="text-lg font-semibold text-gray-900">My Posted Opportunities</h2>
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {opportunities.length} Total
                        </span>
                    </div>

                    {opportunities.length === 0 ? (
                        <div className="p-12 text-center">
                            <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No opportunities posted yet</h3>
                            <p className="mt-1 text-gray-500">Get started by posting your first opportunity.</p>
                            <div className="mt-6">
                                <Button variant="primary" onClick={() => setIsPostModalOpen(true)}>
                                    Post Opportunity
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opportunity</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {opportunities.map((opp: any) => {
                                        const isExpired = new Date(opp.deadline) < new Date();
                                        return (
                                            <tr key={opp.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">{opp.title}</div>
                                                            <div className="text-sm text-gray-500">{opp.category} • {opp.industry}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${isExpired
                                                            ? 'bg-red-100 text-red-800'
                                                            : 'bg-green-100 text-green-800'
                                                        }`}>
                                                        {isExpired ? 'Expired' : 'Active'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {opp.applicationsCount || 0}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(opp.deadline).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end space-x-2">
                                                        <button
                                                            onClick={() => router.push(`/opportunities/${opp.id}`)}
                                                            className="text-purple-600 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-3 py-1 rounded-md transition-colors"
                                                        >
                                                            View
                                                        </button>
                                                        <button
                                                            onClick={() => handleEdit(opp)}
                                                            className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(opp.id)}
                                                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            <PostOpportunityModal
                isOpen={isPostModalOpen}
                onClose={handleModalClose}
                onSuccess={handleModalSuccess}
                initialData={editingOpportunity}
                isEditing={!!editingOpportunity}
            />
        </div>
    );
}
