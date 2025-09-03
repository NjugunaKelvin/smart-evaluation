import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';

interface Tender {
  id: number;
  title: string;
  description: string;
  deadline: string;
  value: string;
  category: string;
}

export default function Home() {
  const tenders: Tender[] = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Development of a corporate website with e-commerce functionality',
      deadline: '2023-12-15',
      value: '$15,000 - $20,000',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application for customer engagement',
      deadline: '2023-12-20',
      value: '$25,000 - $35,000',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Cloud Migration',
      description: 'Migration of on-premise infrastructure to cloud environment',
      deadline: '2023-12-10',
      value: '$40,000 - $50,000',
      category: 'Infrastructure'
    }
  ];

  // Custom SVG Icons
  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );

  const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 border-b border-gray-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDIwVjE0SDE0djIwek0xNCAxNGgyMnYyMEgxNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover & Apply for
            <span className="text-blue-500"> Tenders</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            SmartEval connects qualified service providers with premium tender opportunities through our transparent, equitable evaluation system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tenders">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-lg">
                Explore Opportunities
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary" className="w-full sm:w-auto px-8 py-3 text-lg border-gray-600 hover:bg-gray-800">
                Register as Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
              <div className="text-gray-400">Active Tenders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">$10M+</div>
              <div className="text-gray-400">Funding Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">1,200+</div>
              <div className="text-gray-400">Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">95%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Streamlined Process</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Our efficient three-step process ensures you spend less time searching and more time winning projects</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-gray-800 border-gray-700 p-6 hover:border-blue-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
                <SearchIcon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discover</h3>
              <p className="text-gray-400">Browse curated tender opportunities matching your expertise and capabilities</p>
            </Card>
            
            <Card className="text-center bg-gray-800 border-gray-700 p-6 hover:border-blue-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
                <DocumentIcon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Apply</h3>
              <p className="text-gray-400">Submit comprehensive proposals with all required documentation through our secure platform</p>
            </Card>
            
            <Card className="text-center bg-gray-800 border-gray-700 p-6 hover:border-blue-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
                <AwardIcon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Get Evaluated</h3>
              <p className="text-gray-400">Experience our transparent, unbiased assessment process with clear evaluation criteria</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Service Providers Choose SmartEval</h2>
              <p className="text-gray-400 mb-8">We're revolutionizing how service providers connect with meaningful projects through our innovative platform.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center mr-4 text-blue-500">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Complete Transparency</h3>
                    <p className="text-gray-400">Clear evaluation criteria with real-time updates on your proposal status</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center mr-4 text-blue-500">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Premium Opportunities</h3>
                    <p className="text-gray-400">Access exclusive tenders from various industries with substantial funding</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center mr-4 text-blue-500">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Accelerated Process</h3>
                    <p className="text-gray-400">Streamlined workflow reduces evaluation time from application to execution</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AwardIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visual Project Showcase</h3>
                  <p className="text-gray-400">Platform interface visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tenders */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Opportunities</h2>
              <p className="text-gray-400 mt-2">Curated tenders with significant funding potential</p>
            </div>
            <Link href="/tenders" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
                View All Tenders
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenders.map((tender) => (
              <Card key={tender.id} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-medium px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                      {tender.category}
                    </span>
                    <span className="text-xs text-gray-500">#{tender.id.toString().padStart(3, '0')}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{tender.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{tender.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Deadline: {tender.deadline}</span>
                    <span className="text-sm text-blue-400 font-medium">{tender.value}</span>
                  </div>
                  <Link href={`/tenders/${tender.id}`}>
                    <Button variant="primary" className="w-full">View Details & Apply</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Trusted by Service Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-900 border-gray-700 p-6 text-left">
              <p className="text-gray-300 italic mb-4">"SmartEval has transformed how we find relevant projects. The transparency in evaluation means we know exactly where we stand."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full mr-3 flex items-center justify-center text-blue-500 font-bold">
                  JD
                </div>
                <div>
                  <div className="font-medium text-white">John Doe</div>
                  <div className="text-sm text-gray-500">Tech Solutions Inc.</div>
                </div>
              </div>
            </Card>
            <Card className="bg-gray-900 border-gray-700 p-6 text-left">
              <p className="text-gray-300 italic mb-4">"The quality of opportunities on SmartEval is unmatched. We've grown our business by 40% since joining the platform."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full mr-3 flex items-center justify-center text-blue-500 font-bold">
                  AS
                </div>
                <div>
                  <div className="font-medium text-white">Alice Smith</div>
                  <div className="text-sm text-gray-500">Cloud Innovations</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Access Premium Tenders?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of service providers already growing their business through SmartEval
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-lg">
                Create Account
              </Button>
            </Link>
            <Link href="/tenders">
              <Button variant="secondary" className="w-full sm:w-auto px-8 py-3 text-lg border-gray-600 hover:bg-gray-700">
                Browse Tenders
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}