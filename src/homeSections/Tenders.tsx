'use client'
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface Tender {
  id: number;
  title: string;
  description: string;
  deadline: string;
  value: string;
  category: string;
  organization: string;
}

export default function TendersSection() {
  const tenders: Tender[] = [
    {
      id: 1,
      title: 'Urban Road Constructions',
      description: 'Construction of urban roads in Nairobi to improve traffic flow and accessibility.',
      deadline: '2026-02-15',
      value: 'Ksh 1M - Ksh 3.5M',
      category: 'Infrastructure',
      organization: 'Ministry of Transport'
    },
    {
      id: 2,
      title: 'Supply for TextBooks & Learning Materials',
      description: 'Provision of textbooks and digital learning materials for primary and secondary schools across the country.',
      deadline: '2025-12-20',
      value: 'Ksh 3M - Ksh 5M',
      category: 'Education',
      organization: 'Frankdale International School'
    },
    {
      id: 3,
      title: 'Supply for Fire Fighting Equipments',
      description: 'Provision of fire fighting equipment and training for local communities.',
      deadline: '2023-12-10',
      value: 'Ksh 500K - Ksh 1.5M',
      category: 'Infrastructure',
      organization: 'National Treasury'
    },
    {
      id: 4,
      title: 'Educational Content Development',
      description: 'Creation of digital learning materials for primary schools in alignment with new curriculum standards.',
      deadline: '2023-12-25',
      value: 'Ksh 2M - Ksh 4M',
      category: 'Education',
      organization: 'Ministry of Education'
    },
    {
      id: 5,
      title: 'Water Sanitation Project',
      description: 'Implementation of clean water solutions in underserved communities with monitoring and evaluation components.',
      deadline: '2024-01-05',
      value: 'Ksh 1M - Ksh 2M',
      category: 'Infrastructure',
      organization: 'World Bank'
    },
    {
      id: 6,
      title: 'Solar Panels Installation',
      description: 'Installation of solar panels in rural health clinics to ensure reliable power supply.',
      deadline: '2026-01-15',
      value: 'Ksh 500K - Ksh 1M',
      category: 'Energy',
      organization: 'Ecobank Kenya'
    }
  ];

  // Format date to more readable form
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get category color class
  const getCategoryColor = (category: string) => {
    switch (category) {
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
      case 'Energy':
        return 'bg-purple-500/20 text-purple-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white">Active Tenders & Opportunities</h2>
            <p className="text-gray-400 mt-2">Latest projects from government agencies, NGOs, and international institutions</p>
          </div>
          <Link href="/tenders" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
              View All Tenders
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tenders.map((tender) => (
            <Card key={tender.id} className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300 group h-full flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(tender.category)}`}>
                    {tender.category}
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
                  <Link href={`/tenders/${tender.id}`}>
                    <Button variant="primary" className="w-full bg-green-600 hover:bg-green-700">
                      View Details & Apply
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/tenders">
            <Button variant="outline" className="border-gray-600 hover:bg-gray-800 px-8">
              Browse All Opportunities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}