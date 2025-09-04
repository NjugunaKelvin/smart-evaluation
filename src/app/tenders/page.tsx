'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Tender {
  id: number;
  title: string;
  description: string;
  industry: string;
  deadline: string;
  location: string;
  value: string;
  organization: string;
}

const tenders: Tender[] = [
  {
    id: 1,
    title: 'Website Development for Ministry Portal',
    description: 'Development of a comprehensive government service portal with e-commerce functionality and citizen engagement features.',
    industry: 'Technology',
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
    deadline: '2024-01-15',
    location: 'Remote',
    value: 'Ksh 1.5M - Ksh 2.5M',
    organization: 'FAO'
  }
];

export default function TendersPage() {
  const [filters, setFilters] = useState({
    industry: '',
    location: '',
    search: ''
  });

  const filteredTenders = tenders.filter(tender => {
    return (
      (filters.industry === '' || tender.industry === filters.industry) &&
      (filters.location === '' || tender.location.includes(filters.location)) &&
      (filters.search === '' || 
        tender.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        tender.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        tender.organization.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const industries = [...new Set(tenders.map(t => t.industry))];
  const locations = [...new Set(tenders.map(t => t.location))];

  // Get industry color class
  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case 'Technology':
        return 'bg-blue-500/20 text-blue-400';
      case 'Healthcare':
        return 'bg-pink-500/20 text-pink-400';
      case 'Infrastructure':
        return 'bg-green-500/20 text-green-400';
      case 'Education':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Agriculture':
        return 'bg-orange-500/20 text-orange-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  // Format date to more readable form
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Available Tenders & Opportunities</h1>
          <p className="text-gray-400">Discover projects from government agencies, NGOs, and international institutions</p>
        </div>
        
        {/* Filters */}
        <Card className="mb-8 bg-gray-800 border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Search</label>
              <input
                type="text"
                placeholder="Search tenders..."
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Industry</label>
              <select
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
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
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <Button 
                variant="outline" 
                className="w-full border-gray-600 hover:bg-gray-700"
                onClick={() => setFilters({industry: '', location: '', search: ''})}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </Card>

        {/* Results count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-400">
            Showing <span className="text-white font-medium">{filteredTenders.length}</span> of <span className="text-white font-medium">{tenders.length}</span> opportunities
          </p>
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">Sort by:</span>
            <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-1 text-white text-sm">
              <option>Newest First</option>
              <option>Deadline</option>
              <option>Value (High to Low)</option>
              <option>Value (Low to High)</option>
            </select>
          </div>
        </div>

        {/* Tenders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTenders.map((tender) => (
            <Card key={tender.id} className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300 group h-full flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getIndustryColor(tender.industry)}`}>
                    {tender.industry}
                  </span>
                  <span className="text-xs text-gray-500">#{tender.id.toString().padStart(3, '0')}</span>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">From {tender.organization}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                    {tender.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 flex-1">{tender.description}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-500">
                      <div className="font-medium">Deadline:</div>
                      <div>{formatDate(tender.deadline)}</div>
                    </div>
                    <div className="text-sm text-green-400 font-medium text-right">
                      <div className="font-medium">Value:</div>
                      <div>{tender.value}</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`/tenders/${tender.id}`} className="flex-1">
                      <Button variant="primary" className="w-full bg-green-600 hover:bg-green-700">
                        View Details
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {filteredTenders.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="flex space-x-2">
              <Button variant="outline" className="border-gray-600 hover:bg-gray-700" disabled>Previous</Button>
              <Button variant="primary" className="bg-green-600 hover:bg-green-700">1</Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-700">2</Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-700">3</Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-700">Next</Button>
            </nav>
          </div>
        )}

        {filteredTenders.length === 0 && (
          <Card className="text-center py-12 bg-gray-800 border-gray-700">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No tenders found</h3>
            <p className="text-gray-300 mb-4">Try adjusting your filters to see more results</p>
            <Button 
              variant="outline" 
              className="border-gray-600 hover:bg-gray-700"
              onClick={() => setFilters({industry: '', location: '', search: ''})}
            >
              Clear Filters
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}