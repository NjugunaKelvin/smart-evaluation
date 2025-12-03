'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getToken, getUser, isProvider } from '@/lib/auth';

export default function ProviderDashboardPage() {
    const router = useRouter();
    const [opportunities, setOpportunities] = useState([]);
    const [selectedOpp, setSelectedOpp] = useState<any>(null);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<'opportunities' | 'applications'>('opportunities');

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }

        if (!isProvider()) {
            alert('Provider account required');
            router.push('/opportunities');
            return;
        }

        fetchOpportunities();
    }, [router]);

    const fetchOpportunities = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/opportunities', {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });

            const data = await response.json();
            if (response.ok) {
                const user = getUser();
                // Filter to only show opportunities posted by this provider
                const myOpportunities = data.opportunities.filter((opp: any) => opp.postedBy === user?.uid);
                setOpportunities(myOpportunities);
            }
        } catch (error) {
            console.error('Error fetching opportunities:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchApplications = async (oppId: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/applications/opportunity/${oppId}`, {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });

            const data = await response.json();
            if (response.ok) {
                setApplications(data.applications);
                setView('applications');
            }
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    const updateApplicationStatus = async (appId: string, status: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/applications/${appId}/status`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${getToken()}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });

            if (response.ok) {
                // Refresh applications
                if (selectedOpp) {
                    fetchApplications(selectedOpp.id);
                }
            }
        } catch (error) {
            console.error('Error updating application:', error);
        }
    };

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            pending: 'bg-yellow-100 text-yellow-700',
            reviewing: 'bg-blue-100 text-blue-700',
            shortlisted: 'bg-green-100 text-green-700',
            rejected: 'bg-red-100 text-red-700',
            accepted: 'bg-purple-100 text-purple-700'
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-600">Loading dashboard...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b border-gray-200 px-4 py-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">Provider Dashboard</h1>
                    <p className="text-gray-600 mt-2">Manage your opportunities and review applications</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-6 flex gap-4">
                    <button
                        onClick={() => setView('opportunities')}
                        className={`px-6 py-3 rounded-lg font-medium transition ${view === 'opportunities'
                                ? 'bg-purple-700 text-white'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        My Opportunities ({opportunities.length})
                    </button>
                    {selectedOpp && (
                        <button
                            onClick={() => setView('applications')}
                            className={`px-6 py-3 rounded-lg font-medium transition ${view === 'applications'
                                    ? 'bg-purple-700 text-white'
                                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            Applications ({applications.length})
                        </button>
                    )}
                </div>

                {view === 'opportunities' && (
                    <div>
                        <div className="mb-6">
                            <button
                                onClick={() => router.push('/opportunities')}
                                className="px-6 py-3 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 transition"
                            >
                                + Post New Opportunity
                            </button>
                        </div>

                        {opportunities.length === 0 ? (
                            <div className="text-center py-12 bg-white rounded-xl">
                                <p className="text-gray-600 mb-4">You haven&apos;t posted any opportunities yet.</p>
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {opportunities.map((opp: any) => (
                                    <div key={opp.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{opp.title}</h3>
                                                <p className="text-gray-600 mb-4">{opp.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                                        {opp.category}
                                                    </span>
                                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                                        {opp.status}
                                                    </span>
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Posted: {new Date(opp.postedDate).toLocaleDateString()}
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => {
                                                        setSelectedOpp(opp);
                                                        fetchApplications(opp.id);
                                                    }}
                                                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-medium"
                                                >
                                                    View Applications ({opp.applications || 0})
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {view === 'applications' && selectedOpp && (
                    <div>
                        <div className="mb-6 bg-white rounded-xl p-6 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedOpp.title}</h2>
                            <p className="text-gray-600">Applications: {applications.length}</p>
                        </div>

                        {applications.length === 0 ? (
                            <div className="text-center py-12 bg-white rounded-xl">
                                <p className="text-gray-600">No applications yet.</p>
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {applications.map((app: any) => (
                                    <div key={app.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900">{app.applicantName}</h4>
                                                <p className="text-sm text-gray-600">{app.applicantEmail}</p>
                                                <p className="text-sm text-gray-600">{app.phoneNumber}</p>
                                            </div>
                                            <div className="text-right text-sm text-gray-500">
                                                <p>Applied: {new Date(app.appliedAt).toLocaleDateString()}</p>
                                                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                                                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                                                </span>
                                            </div>
                                        </div>

                                        {app.coverLetter && (
                                            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                                                <p className="text-sm font-medium text-gray-700 mb-2">Cover Letter:</p>
                                                <p className="text-sm text-gray-600">{app.coverLetter}</p>
                                            </div>
                                        )}

                                        <div className="flex gap-2 flex-wrap">
                                            <button
                                                onClick={() => updateApplicationStatus(app.id, 'reviewing')}
                                                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition text-sm font-medium"
                                            >
                                                Mark as Reviewing
                                            </button>
                                            <button
                                                onClick={() => updateApplicationStatus(app.id, 'shortlisted')}
                                                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition text-sm font-medium"
                                            >
                                                Shortlist
                                            </button>
                                            <button
                                                onClick={() => updateApplicationStatus(app.id, 'accepted')}
                                                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition text-sm font-medium"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                onClick={() => updateApplicationStatus(app.id, 'rejected')}
                                                className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition text-sm font-medium"
                                            >
                                                Reject
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition text-sm font-medium opacity-50 cursor-not-allowed"
                                                title="AI Analysis (Premium Feature)"
                                            >
                                                🤖 AI Analysis (Premium)
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
