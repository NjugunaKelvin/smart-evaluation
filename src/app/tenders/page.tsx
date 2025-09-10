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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Available Opportunities</h1>
          <p className="text-gray-400">Discover projects from government agencies, NGOs, and international institutions</p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                Filters
              </button>
              
              <Button 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-700"
                onClick={() => setFilters({industry: '', location: '', category: '', search: ''})}
              >
                Clear
              </Button>
            </div>
          </div>
          
          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-700">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                <label className="block text-sm font-medium text-gray-300 mb-1">Industry</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilters({...filters, category: ''})}
            className={`px-4 py-2 rounded-md text-sm font-medium ${filters.category === '' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'}`}
          >
            All Opportunities
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilters({...filters, category})}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${filters.category === category ? 'bg-green-800 text-white border-green-700' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results count and sort */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-400">
            Showing <span className="font-medium text-white">{filteredOpportunities.length}</span> of <span className="font-medium text-white">{opportunities.length}</span> opportunities
            {filters.category && (
              <span className="ml-2">
                in <span className="px-2 py-1 rounded-md text-xs font-medium bg-green-900 text-green-200">{filters.category}</span>
              </span>
            )}
          </p>
          <div className="flex items-center">
            <label className="text-sm text-gray-400 mr-2">Sort by:</label>
            <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
              <option>Newest First</option>
              <option>Deadline</option>
              <option>Value (High to Low)</option>
              <option>Value (Low to High)</option>
            </select>
          </div>
        </div>

        {/* Opportunities Grid */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="bg-gray-800 border border-gray-700 hover:border-green-500 transition-all duration-200 group h-full flex flex-col overflow-hidden">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                      {opportunity.industry}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
                      {opportunity.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-1">From {opportunity.organization}</div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">{opportunity.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4 text-sm">
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
                        <Button variant="primary" className="w-full bg-green-600 hover:bg-green-700">
                          View Details
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12 bg-gray-800 border border-gray-700">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">No opportunities found</h3>
            <p className="text-gray-400 mb-4">Try adjusting your filters to see more results</p>
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
              onClick={() => setFilters({industry: '', location: '', category: '', search: ''})}
            >
              Clear Filters
            </Button>
          </Card>
        )}

        {/* Pagination */}
        {filteredOpportunities.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="flex space-x-2">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700" disabled>Previous</Button>
              <Button variant="primary" className="bg-green-600 hover:bg-green-700">1</Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">2</Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">3</Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">Next</Button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}