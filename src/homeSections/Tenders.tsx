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

  // Get deadline status
  const getDeadlineStatus = (dateString: string) => {
    const today = new Date();
    const deadline = new Date(dateString);
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { status: 'expired', text: 'Expired', color: 'text-red-400 bg-red-400/10' };
    if (diffDays <= 7) return { status: 'urgent', text: 'Urgent', color: 'text-amber-400 bg-amber-400/10' };
    if (diffDays <= 30) return { status: 'soon', text: 'Soon', color: 'text-blue-400 bg-blue-400/10' };
    return { status: 'normal', text: 'Open', color: 'text-green-400 bg-green-400/10' };
  };

  // Get category color class
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Healthcare':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'Infrastructure':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Education':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Agriculture':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Energy':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500/20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-500/20 blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Active Tenders & Opportunities</h2>
            <p className="text-gray-400 text-lg">Latest projects from government agencies, NGOs, and international institutions</p>
          </div>
          <Link href="/opportunities" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-gray-600 hover:bg-gray-800/50 hover:border-gray-500 group">
              <span>View All Tenders</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tenders.map((tender) => {
            const deadlineStatus = getDeadlineStatus(tender.deadline);
            
            return (
              <Card key={tender.id} className="group h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(tender.category)}`}>
                      {tender.category}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${deadlineStatus.color}`}>
                      {deadlineStatus.text}
                    </span>
                  </div>
                  
                  <div className="mb-4 flex-1">
                    <div className="text-xs text-gray-500 mb-2 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                      {tender.organization}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {tender.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{tender.description}</p>
                  </div>
                  
                  <div className="mt-auto space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <div className="text-gray-500 font-medium mb-1">Deadline:</div>
                        <div className={`font-medium ${deadlineStatus.status === 'expired' ? 'text-red-400' : 'text-white'}`}>
                          {formatDate(tender.deadline)}
                        </div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="text-gray-500 font-medium mb-1">Value:</div>
                        <div className="text-green-400 font-medium">{tender.value}</div>
                      </div>
                    </div>
                    
                    <Link href={`/tenders/${tender.id}`}>
                      <Button variant="primary" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                        View Details & Apply
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/opportunities">
            <Button variant="outline" className="border-gray-600 hover:bg-gray-800/50 hover:border-gray-500 px-8 py-3 group">
              <span>Browse All Opportunities</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}