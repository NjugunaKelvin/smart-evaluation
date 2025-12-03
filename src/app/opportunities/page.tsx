'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PostOpportunityModal from '@/components/PostOpportunityModal';

interface Opportunity {
    id: string;
    title: string;
    description: string;
    industry: string;
    category: string;
    deadline: string;
    location: string;
    value: string;
    organization: string;
    status: string;
    postedDate: string;
    applications: number;
}

function OpportunitiesContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const categoryParam = searchParams.get('category');

    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [filters, setFilters] = useState({
        industry: '',
        location: '',
        category: categoryParam || '',
        status: '',
        search: ''
    });

    const [sortBy, setSortBy] = useState('newest');
    const [showFilters, setShowFilters] = useState(false);

    // Fetch opportunities
    const fetchOpportunities = async () => {
        setLoading(true);
        try {
            const queryParams = new URLSearchParams();
            if (filters.industry) queryParams.append('industry', filters.industry);
            if (filters.category) queryParams.append('category', filters.category);
            if (filters.status) queryParams.append('status', filters.status);
            if (filters.search) queryParams.append('search', filters.search);

            const response = await fetch(`http://localhost:5000/api/opportunities?${queryParams.toString()}`);
            if (response.ok) {
                const data = await response.json();
                setOpportunities(data);
            }
        } catch (error) {
            console.error('Error fetching opportunities:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOpportunities();
    }, [filters.industry, filters.category, filters.status, filters.search]); // Re-fetch on filter change (or handle client-side filtering if preferred)

    // Handle Post Opportunity Click
    const handlePostClick = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        } else {
            setIsModalOpen(true);
        }
    };

    // Update filters when category param changes
    useEffect(() => {
        if (categoryParam) {
            setFilters(prev => ({ ...prev, category: categoryParam }));
        }
    }, [categoryParam]);

    // Sort opportunities (client-side for now)
    const sortedOpportunities = [...opportunities].sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
        } else if (sortBy === 'deadline') {
            return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        } else if (sortBy === 'applications') {
            return b.applications - a.applications;
        }
        return 0;
    });

    const industries = ['Technology', 'Construction', 'Consulting', 'Marketing', 'Healthcare', 'Education', 'Logistics', 'Finance', 'Legal', 'Manufacturing', 'Other'];
    const locations = [...new Set(opportunities.map(t => t.location))];
    const categories = ['Tender', 'Grant', 'Contract', 'Partnership', 'Subcontracting'];
    const statuses = ['Active', 'Upcoming', 'Closed'];

    // Date format
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Calculate days until deadline
    const daysUntilDeadline = (deadline: string) => {
        const today = new Date();
        const deadlineDate = new Date(deadline);
        const diffTime = deadlineDate.getTime() - today.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Secondary Navigation */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Opportunities Portal</h1>
                            <p className="text-sm text-gray-600">Discover and apply for tenders, grants, fundings, patnerships and contracts</p>
                        </div>
                        <button
                            onClick={handlePostClick}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center transition-colors font-semibold"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            Post Opportunity
                        </button>
                    </div>

                    <div className="flex space-x-8 py-2">
                        <Link href="/opportunities" className="border-b-2 border-purple-600 text-purple-600 font-semibold py-2">
                            Browse Opportunities
                        </Link>
                        <Link href="/my-applications" className="text-gray-700 hover:text-purple-600 font-medium py-2">
                            My Applications
                        </Link>
                        <Link href="/saved" className="text-gray-700 hover:text-purple-600 font-medium py-2">
                            Saved Opportunities
                        </Link>
                        <Link href="/guidelines" className="text-gray-700 hover:text-purple-600 font-medium py-2">
                            Application Guidelines
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Opportunities</h1>
                    <p className="text-gray-700">Discover projects from government agencies, NGOs, and international institutions</p>
                </div>

                {/* Search and Filter Section */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search by title, description, or organization..."
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 font-medium"
                                    value={filters.search}
                                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="inline-flex items-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                </svg>
                                Filters
                            </button>

                            <button
                                className="inline-flex items-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                onClick={() => setFilters({ industry: '', location: '', category: '', status: '', search: '' })}
                            >
                                Clear
                            </button>
                        </div>
                    </div>

                    {/* Expandable Filters */}
                    {showFilters && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                                <select
                                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm font-medium"
                                    value={filters.category}
                                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                                >
                                    <option value="">All Categories</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Industry</label>
                                <select
                                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm font-medium"
                                    value={filters.industry}
                                    onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                                >
                                    <option value="">All Industries</option>
                                    {industries.map(industry => (
                                        <option key={industry} value={industry}>{industry}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                                <select
                                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm font-medium"
                                    value={filters.location}
                                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                                >
                                    <option value="">All Locations</option>
                                    {locations.map(location => (
                                        <option key={location} value={location}>{location}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                                <select
                                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm font-medium"
                                    value={filters.status}
                                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                                >
                                    <option value="">All Statuses</option>
                                    {statuses.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Filters and Results Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setFilters({ ...filters, category: '', status: '' })}
                            className={`px-3 py-1.5 rounded-md text-sm font-semibold ${filters.category === '' && filters.status === '' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            All Opportunities
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilters({ ...filters, category })}
                                className={`px-3 py-1.5 rounded-md text-sm font-semibold ${filters.category === category ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                {category}s
                            </button>
                        ))}
                        <button
                            onClick={() => setFilters({ ...filters, status: 'Active' })}
                            className={`px-3 py-1.5 rounded-md text-sm font-semibold ${filters.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            Active
                        </button>
                    </div>

                    <div className="flex items-center gap-2 self-stretch md:self-auto">
                        <p className="text-sm text-gray-700 whitespace-nowrap font-medium">
                            <span className="text-gray-900">{opportunities.length}</span> opportunities
                        </p>
                        <div className="h-4 w-px bg-gray-400"></div>
                        <div className="flex items-center">
                            <label className="text-sm text-gray-700 mr-2 whitespace-nowrap font-medium">Sort by:</label>
                            <select
                                className="bg-white border border-gray-300 rounded-md px-2 py-1 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 font-medium"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="newest">Newest First</option>
                                <option value="deadline">Deadline</option>
                                <option value="applications">Most Applications</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Opportunities Table */}
                {loading ? (
                    <div className="text-center py-12">Loading opportunities...</div>
                ) : sortedOpportunities.length > 0 ? (
                    <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Opportunity
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Organization
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Value
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Deadline
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {sortedOpportunities.map((opportunity) => (
                                    <tr key={opportunity.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-md flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-semibold text-gray-900">{opportunity.title}</div>
                                                    <div className="text-sm text-gray-600">{opportunity.industry}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-semibold text-gray-900">{opportunity.organization}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-semibold text-gray-900">{opportunity.value}</div>
                                            <div className="text-sm text-gray-600">{opportunity.applications} applications</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-semibold text-gray-900">{formatDate(opportunity.deadline)}</div>
                                            <div className="text-sm text-gray-600">{daysUntilDeadline(opportunity.deadline)} days left</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${opportunity.status === 'Active' ? 'bg-green-100 text-green-800' : opportunity.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {opportunity.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link href={`/opportunities/${opportunity.id}`}>
                                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm transition-colors font-semibold">
                                                    View Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="bg-white text-center py-12 rounded-lg border border-gray-200">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No opportunities found</h3>
                        <p className="text-gray-700 mb-4">Try adjusting your filters to see more results</p>
                        <button
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            onClick={() => setFilters({ industry: '', location: '', category: '', status: '', search: '' })}
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {sortedOpportunities.length > 0 && (
                    <div className="flex justify-center mt-8">
                        <nav className="flex items-center space-x-2">
                            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50" disabled>
                                Previous
                            </button>
                            <button className="px-3 py-1.5 border border-purple-600 rounded-md text-sm font-semibold bg-purple-600 text-white">
                                1
                            </button>
                            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50">
                                2
                            </button>
                            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50">
                                3
                            </button>
                            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50">
                                Next
                            </button>
                        </nav>
                    </div>
                )}
            </div>

            <PostOpportunityModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={() => {
                    fetchOpportunities();
                    // Optionally redirect to analytics or show success message
                }}
            />

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Montserrat', sans-serif;
          color: #000;
        }
      `}</style>
        </div>
    );
}

// Loading component
function OpportunitiesLoading() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>

                    <div className="bg-white rounded-lg p-4 mb-6 border border-gray-300">
                        <div className="h-10 bg-gray-300 rounded mb-4"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="h-10 bg-gray-300 rounded"></div>
                            <div className="h-10 bg-gray-300 rounded"></div>
                            <div className="h-10 bg-gray-300 rounded"></div>
                            <div className="h-10 bg-gray-300 rounded"></div>
                        </div>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg border border-gray-300 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <th key={i} className="px-6 py-3">
                                            <div className="h-4 bg-gray-300 rounded"></div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-300">
                                {[1, 2, 3].map((row) => (
                                    <tr key={row}>
                                        {[1, 2, 3, 4, 5, 6].map((col) => (
                                            <td key={col} className="px-6 py-4">
                                                <div className="h-4 bg-gray-300 rounded"></div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main page component with Suspense boundary
export default function OpportunitiesPage() {
    return (
        <Suspense fallback={<OpportunitiesLoading />}>
            <OpportunitiesContent />
        </Suspense>
    );
}
