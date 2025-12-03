'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getToken } from '@/lib/auth';

export default function SavedOpportunitiesPage() {
    const router = useRouter();
    const [opportunities, setOpportunities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }

        fetchSavedOpportunities();
    }, [router]);

    const fetchSavedOpportunities = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/user/saved-opportunities', {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });

            const data = await response.json();
            if (response.ok) {
                setOpportunities(data.opportunities);
            }
        } catch (error) {
            console.error('Error fetching saved opportunities:', error);
        } finally {
            setLoading(false);
        }
    };

    const unsaveOpportunity = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/user/save-opportunity/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });

            if (response.ok) {
                setOpportunities(opportunities.filter((opp: any) => opp.id !== id));
            }
        } catch (error) {
            console.error('Error unsaving opportunity:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-600">Loading saved opportunities...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Saved Opportunities</h1>

                {opportunities.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 mb-4">You haven&apos;t saved any opportunities yet.</p>
                        <button
                            onClick={() => router.push('/opportunities')}
                            className="px-6 py-3 bg-purple-700 text-white rounded-xl font-medium hover:bg-purple-800 transition"
                        >
                            Browse Opportunities
                        </button>
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
                                                {opp.industry}
                                            </span>
                                        </div>
                                        <div className="flex gap-6 text-sm text-gray-500">
                                            <span>📅 Deadline: {new Date(opp.deadline).toLocaleDateString()}</span>
                                            <span>📍 {opp.location}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => router.push(`/opportunities/${opp.id}`)}
                                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-medium"
                                        >
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => unsaveOpportunity(opp.id)}
                                            className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition text-sm font-medium"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
