'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getToken, getUser } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import PostOpportunityModal from '@/components/PostOpportunityModal';
import { FiBriefcase, FiTrendingUp, FiCpu, FiUserPlus, FiCheckCircle } from 'react-icons/fi';


export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [opportunities, setOpportunities] = useState<any[]>([]);
    const [analytics, setAnalytics] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [editingOpportunity, setEditingOpportunity] = useState<any>(null);

    const fetchDashboardData = useCallback(async () => {
        try {
            const token = getToken();
            const userData = getUser();
            const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

            
            const oppResponse = await fetch(`${API_BASE_URL}/api/opportunities`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (oppResponse.ok) {
                const oppData = await oppResponse.json();
                const allOpps = Array.isArray(oppData) ? oppData : (oppData.opportunities || []);
                const myOpps = allOpps.filter((opp: any) => opp.postedBy === userData?.uid);
                setOpportunities(myOpps);
            }

            
            const appsResponse = await fetch(`${API_BASE_URL}/api/applications/my-applications`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (appsResponse.ok) {
                const appsData = await appsResponse.json();
                
                setAnalytics((prev: any) => ({ ...prev, recentApplications: appsData.applications?.slice(0, 3) || [] }));
            }

        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }

        const userData = getUser();
        setUser(userData);
        fetchDashboardData();
    }, [router, fetchDashboardData]);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this opportunity? This action cannot be undone.')) {
            return;
        }

        try {
            const token = getToken();
            const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_BASE_URL}/api/opportunities/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                
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

                {}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer" onClick={() => router.push('/applications')}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                    <FiBriefcase className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">View All</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{analytics?.recentApplications?.length || 0}</h3>
                            <p className="text-gray-500 text-sm">Active Applications</p>
                        </Card>

                        <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setIsPostModalOpen(true)}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                                    <FiUserPlus className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">New</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{opportunities.length}</h3>
                            <p className="text-gray-500 text-sm">Opportunities Posted</p>
                        </Card>
                    </div>

                    {}
                    <div className="bg-gradient-to-br from-indigo-900 to-purple-800 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <FiTrendingUp className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">PRO</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Upgrade to Provider</h3>
                            <ul className="text-sm text-indigo-100 mb-6 space-y-2">
                                <li className="flex items-center gap-2"><FiCheckCircle className="text-green-400" /> Deep Analytics Dashboard</li>
                                <li className="flex items-center gap-2"><FiCpu className="text-green-400" /> AI-Assisted Evaluation</li>
                                <li className="flex items-center gap-2"><FiTrendingUp className="text-green-400" /> Priority Support</li>
                            </ul>
                            <button
                                onClick={() => {
                                    if (confirm('Upgrade to Provider Account? This is a simulation.')) {
                                        const updatedUser = { ...user, userType: 'provider' };
                                        localStorage.setItem('user', JSON.stringify(updatedUser)); 
                                        router.push('/provider/dashboard');
                                    }
                                }}
                                className="w-full py-2.5 bg-white text-indigo-900 rounded-lg font-bold text-sm hover:bg-gray-50 transition shadow-lg"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                {}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-gray-900">Recent Applications</h2>
                        <Button variant="outline" onClick={() => router.push('/applications')} className="text-sm py-1">View All</Button>
                    </div>
                    {analytics?.recentApplications && analytics.recentApplications.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {analytics.recentApplications.map((app: any) => (
                                <Card key={app.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="font-semibold text-gray-900 truncate pr-2">{app.opportunity?.title || 'Opportunity'}</div>
                                        <span className={`px-2 py-0.5 text-xs rounded-full capitalize ${app.status === 'accepted' ? 'bg-green-100 text-green-700' :
                                            app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                                                'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {app.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{app.coverLetter || 'No cover letter preview.'}</p>
                                    <div className="text-xs text-gray-400 flex justify-between items-center pt-3 border-t border-gray-100">
                                        <span>Applied: {new Date(app.appliedAt).toLocaleDateString()}</span>
                                        <span className="text-purple-600 font-medium cursor-pointer hover:underline" onClick={() => router.push('/applications')}>View Details</span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500">
                            <p>You haven't submitted any applications yet.</p>
                            <Button variant="primary" className="mt-4" onClick={() => router.push('/opportunities')}>Browse Opportunities</Button>
                        </div>
                    )}
                </div>

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
