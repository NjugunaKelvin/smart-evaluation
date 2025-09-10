'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Navbar from '@/components/Navbar';
import { useSearchParams } from 'next/navigation';

interface Opportunity {
  id: number;
  title: string;
  description: string;
  industry: string;
  category: string;
  deadline: string;
  location: string;
  value: string;
  organization: string;
}

const opportunities: Opportunity[] = [
  {
    id: 1,
    title: 'Website Development for Ministry Portal',
    description: 'Development of a comprehensive government service portal with e-commerce functionality and citizen engagement features.',
    industry: 'Technology',
    category: 'Tender',
    deadline: '2023-12-15',
    location: 'Remote',
    value: 'Ksh 1M - Ksh 1.5M',
    organization: 'Ministry of ICT'
  },
  {
    id: 2,
    title: 'Mobile App for Health Services',
    description: 'Cross-platform mobile application for patient engagement and health service delivery in rural areas.',
    industry: 'Healthcare',
    category: 'Grant',
    deadline: '2023-12-20',
    location: 'Remote',
    value: 'Ksh 800K - Ksh 1.2M',
    organization: 'Ministry of Health'
  },
  {
    id: 3,
    title: 'Cloud Migration Project',
    description: 'Migration of government on-premise infrastructure to secure cloud environment with enhanced security protocols.',
    industry: 'Technology',
    category: 'Contract',
    deadline: '2023-12-10',
    location: 'Nairobi, Kenya',
    value: 'Ksh 2M - Ksh 2.5M',
    organization: 'National Treasury'
  },
  {
    id: 4,
    title: 'Educational Content Development',
    description: 'Creation of digital learning materials for primary schools in alignment with new curriculum standards.',
    industry: 'Education',
    category: 'Funding',
    deadline: '2023-12-25',
    location: 'Remote',
    value: 'Ksh 2M - Ksh 4M',
    organization: 'Ministry of Education'
  },
  {
    id: 5,
    title: 'Water Sanitation Project',
    description: 'Implementation of clean water solutions in underserved communities with monitoring and evaluation components.',
    industry: 'Infrastructure',
    category: 'Partnership',
    deadline: '2024-01-05',
    location: 'Kisumu, Kenya',
    value: 'Ksh 1M - Ksh 2M',
    organization: 'World Bank'
  },
  {
    id: 6,
    title: 'Agricultural Support Program',
    description: 'Digital platform for connecting farmers with markets and providing agricultural extension services.',
    industry: 'Agriculture',
    category: 'Funding',
    deadline: '2024-01-15',
    location: 'Remote',
    value: 'Ksh 1.5M - Ksh 2.5M',
    organization: 'FAO'
  },
  {
    id: 7,
    title: 'Renewable Energy Initiative',
    description: 'Development of solar power solutions for rural communities without grid access.',
    industry: 'Energy',
    category: 'Grant',
    deadline: '2024-02-10',
    location: 'Remote',
    value: 'Ksh 3M - Ksh 4.5M',
    organization: 'UNDP'
  },
  {
    id: 8,
    title: 'Road Construction Project',
    description: 'Construction of 50km access road in Western Kenya region with drainage systems.',
    industry: 'Infrastructure',
    category: 'Tender',
    deadline: '2024-01-30',
    location: 'Kakamega, Kenya',
    value: 'Ksh 5M - Ksh 7M',
    organization: 'KeNHA'
  }
];

export default function OpportunitiesPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filters, setFilters] = useState({
    industry: '',
    location: '',
    category: categoryParam || '',
    search: ''
  });

  const [showFilters, setShowFilters] = useState(false);

  // Update filters when category param changes
  useEffect(() => {
    if (categoryParam) {
      setFilters(prev => ({...prev, category: categoryParam}));
    }
  }, [categoryParam]);

  const filteredOpportunities = opportunities.filter(opportunity => {
    return (
      (filters.industry === '' || opportunity.industry === filters.industry) &&
      (filters.location === '' || opportunity.location.includes(filters.location)) &&
      (filters.category === '' || opportunity.category === filters.category) &&
      (filters.search === '' || 
        opportunity.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        opportunity.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        opportunity.organization.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const industries = [...new Set(opportunities.map(t => t.industry))];
  const locations = [...new Set(opportunities.map(t => t.location))];
  const categories = ['Tender', 'Funding', 'Contract', 'Grant', 'Partnership'];

  // Format date to more readable form
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-1">Available Opportunities</h1>
          <p className="text-gray-400 text-sm">Discover projects from government agencies, NGOs, and international institutions</p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="mb-5">
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="block w-full pl-9 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 text-sm"
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-3 py-2 border border-gray-700 rounded-lg text-xs font-medium text-gray-300 bg-gray-800 hover:bg-gray-750"
              >
                <svg className="mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                Filters
              </button>
              
              <button 
                className="px-3 py-2 border border-gray-700 rounded-lg text-xs text-gray-300 hover:bg-gray-750"
                onClick={() => setFilters({industry: '', location: '', category: '', search: ''})}
              >
                Clear
              </button>
            </div>
          </div>
          
          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-gray-800">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Category</label>
                <select
                  className="block w-full px-2.5 py-1.5 text-sm border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-green-500"
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Industry</label>
                <select
                  className="block w-full px-2.5 py-1.5 text-sm border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-green-500"
                  value={filters.industry}
                  onChange={(e) => setFilters({...filters, industry: e.target.value})}
                >
                  <option value="">All Industries</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Location</label>
                <select
                  className="block w-full px-2.5 py-1.5 text-sm border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-green-500"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
        
        {/* Quick Category Filters */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          <button
            onClick={() => setFilters({...filters, category: ''})}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${filters.category === '' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-750'}`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilters({...filters, category})}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium ${filters.category === category ? 'bg-green-800 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-750'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results count and sort */}
        <div className="mb-5 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            Showing <span className="font-medium text-white">{filteredOpportunities.length}</span> of <span className="font-medium text-white">{opportunities.length}</span> opportunities
            {filters.category && (
              <span className="ml-2">
                in <span className="px-2 py-1 rounded-md text-xs font-medium bg-green-900 text-green-200">{filters.category}</span>
              </span>
            )}
          </p>
          <div className="flex items-center">
            <label className="text-xs text-gray-400 mr-2">Sort by:</label>
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-2 py-1 text-white text-xs focus:outline-none focus:border-green-500">
              <option>Newest First</option>
              <option>Deadline</option>
              <option>Value (High to Low)</option>
              <option>Value (Low to High)</option>
            </select>
          </div>
        </div>

        {/* Opportunities Grid */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-gray-800 border border-gray-700 rounded-lg hover:border-green-500 transition-colors duration-150 group h-full flex flex-col overflow-hidden">
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-750 text-gray-300">
                      {opportunity.industry}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-900 text-green-200">
                      {opportunity.category}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-xs text-gray-400 mb-1">From {opportunity.organization}</div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3 line-clamp-3 flex-1">{opportunity.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-3 text-xs">
                      <div className="text-gray-400">
                        <div className="font-medium text-gray-300">Deadline:</div>
                        <div>{formatDate(opportunity.deadline)}</div>
                      </div>
                      <div className="text-green-400 font-medium text-right">
                        <div className="font-medium text-gray-300">Value:</div>
                        <div>{opportunity.value}</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/opportunities/${opportunity.id}`} className="flex-1">
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white text-xs font-medium py-2 rounded-lg transition-colors">
                          View Details
                        </button>
                      </Link>
                      <button className="p-2 border border-gray-700 text-gray-400 hover:bg-gray-750 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-800 border border-gray-700 rounded-lg">
            <div className="w-12 h-12 bg-gray-750 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base font-medium text-white mb-1">No opportunities found</h3>
            <p className="text-gray-400 text-xs mb-3">Try adjusting your filters to see more results</p>
            <button 
              className="px-3 py-1.5 border border-gray-700 text-gray-300 text-xs rounded-lg hover:bg-gray-750"
              onClick={() => setFilters({industry: '', location: '', category: '', search: ''})}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredOpportunities.length > 0 && (
          <div className="flex justify-center mt-6">
            <nav className="flex space-x-2">
              <button className="px-3 py-1.5 border border-gray-700 text-gray-400 text-xs rounded-lg hover:bg-gray-800" disabled>Previous</button>
              <button className="px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg">1</button>
              <button className="px-3 py-1.5 border border-gray-700 text-gray-400 text-xs rounded-lg hover:bg-gray-800">2</button>
              <button className="px-3 py-1.5 border border-gray-700 text-gray-400 text-xs rounded-lg hover:bg-gray-800">3</button>
              <button className="px-3 py-1.5 border border-gray-700 text-gray-400 text-xs rounded-lg hover:bg-gray-800">Next</button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}