'use client';

import { useState } from 'react';
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
}

const tenders: Tender[] = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Development of a corporate website with e-commerce functionality',
    industry: 'Technology',
    deadline: '2023-12-15',
    location: 'Remote',
    value: '$15,000 - $20,000'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile application for customer engagement',
    industry: 'Technology',
    deadline: '2023-12-20',
    location: 'Remote',
    value: '$25,000 - $35,000'
  },
  {
    id: 3,
    title: 'Cloud Migration',
    description: 'Migration of on-premise infrastructure to cloud environment',
    industry: 'Technology',
    deadline: '2023-12-10',
    location: 'New York, USA',
    value: '$40,000 - $50,000'
  },
  {
    id: 4,
    title: 'Marketing Campaign',
    description: 'Comprehensive digital marketing campaign for product launch',
    industry: 'Marketing',
    deadline: '2023-12-05',
    location: 'Remote',
    value: '$20,000 - $30,000'
  },
  {
    id: 5,
    title: 'HR Consulting',
    description: 'HR process optimization and employee training program development',
    industry: 'Consulting',
    deadline: '2023-12-18',
    location: 'London, UK',
    value: '$35,000 - $45,000'
  },
  {
    id: 6,
    title: 'Logistics Optimization',
    description: 'Supply chain analysis and logistics optimization consulting',
    industry: 'Logistics',
    deadline: '2023-12-22',
    location: 'Remote',
    value: '$50,000 - $70,000'
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
        tender.description.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const industries = [...new Set(tenders.map(t => t.industry))];
  const locations = [...new Set(tenders.map(t => t.location))];

  return (
    <div className="min-h-screen py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Available Tenders</h1>
        
        {/* Filters */}
        <Card className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Search</label>
              <input
                type="text"
                placeholder="Search tenders..."
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Industry</label>
              <select
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
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
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
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
                className="w-full"
                onClick={() => setFilters({industry: '', location: '', search: ''})}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </Card>

        {/* Tenders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTenders.map((tender) => (
            <Card key={tender.id} className="hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-white mb-2">{tender.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-2">{tender.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Industry:</span>
                  <span className="text-sm text-white">{tender.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Location:</span>
                  <span className="text-sm text-white">{tender.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Deadline:</span>
                  <span className="text-sm text-white">{tender.deadline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Value:</span>
                  <span className="text-sm text-blue-400">{tender.value}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="primary" className="flex-1">View Details</Button>
                <Button variant="outline">Save</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {filteredTenders.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="flex space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="primary">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </nav>
          </div>
        )}

        {filteredTenders.length === 0 && (
          <Card className="text-center py-12">
            <h3 className="text-xl font-semibold text-white mb-2">No tenders found</h3>
            <p className="text-gray-300">Try adjusting your filters to see more results</p>
          </Card>
        )}
      </div>
    </div>
  );
}