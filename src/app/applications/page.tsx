'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getToken } from '@/lib/auth';

export default function MyApplicationsPage() {
    const router = useRouter();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }

        fetchApplications();
    }, [router]);

    const fetchApplications = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/applications/my-applications', {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });

            const data = await response.json();
            if (response.ok) {
                setApplications(data.applications);
            }
        } catch (error) {
            console.error('Error fetching applications:', error);
        } finally {
            setLoading(false);
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
                <p className="text-gray-600">Loading applications...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">My Applications</h1>

                {applications.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 mb-4">You haven&apos;t applied to any opportunities yet.</p>
                        <button
                            onClick={() => router.push('/opportunities')}
                            className="px-6 py-3 bg-purple-700 text-white rounded-xl font-medium hover:bg-purple-800 transition"
                        >
                            Browse Opportunities
                        </button>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {applications.map((app: any) => (
                            <div key={app.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {app.opportunity?.title || 'Opportunity'}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-2">
                                            {app.opportunity?.organization}
                                        </p>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                                        </span>
                                    </div>
                                    <div className="text-right text-sm text-gray-500">
                                        <p>Applied: {new Date(app.appliedAt).toLocaleDateString()}</p>
                                        {app.opportunity?.deadline && (
                                            <p>Deadline: {new Date(app.opportunity.deadline).toLocaleDateString()}</p>
                                        )}
                                    </div>
                                </div>

                                {app.coverLetter && (
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <p className="text-sm font-medium text-gray-700 mb-2">Cover Letter:</p>
                                        <p className="text-sm text-gray-600">{app.coverLetter}</p>
                                    </div>
                                )}

                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={() => router.push(`/opportunities/${app.opportunityId}`)}
                                        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition text-sm font-medium"
                                    >
                                        View Opportunity
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
