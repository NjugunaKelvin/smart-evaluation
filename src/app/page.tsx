import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Home() {
  const tenders = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Development of a corporate website with e-commerce functionality',
      deadline: '2023-12-15',
      value: '$15,000 - $20,000'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application for customer engagement',
      deadline: '2023-12-20',
      value: '$25,000 - $35,000'
    },
    {
      id: 3,
      title: 'Cloud Migration',
      description: 'Migration of on-premise infrastructure to cloud environment',
      deadline: '2023-12-10',
      value: '$40,000 - $50,000'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find & Apply for Tenders
            <span className="text-blue-500"> Effortlessly</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            SmartEval connects service providers with tender opportunities through a transparent, fair evaluation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tenders">
              <Button variant="primary" className="w-full sm:w-auto">
                Browse Tenders
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary" className="w-full sm:w-auto">
                Register as Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Find</h3>
              <p className="text-gray-300">Browse through curated tender opportunities that match your expertise</p>
            </Card>
            
            <Card className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Apply</h3>
              <p className="text-gray-300">Submit your proposal with all required documentation through our platform</p>
            </Card>
            
            <Card className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fair Evaluation</h3>
              <p className="text-gray-300">Get evaluated through our transparent, unbiased assessment process</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose SmartEval</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
              <p className="text-gray-300">Clear evaluation criteria and real-time updates on your proposal status</p>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold text-white mb-3">More Opportunities</h3>
              <p className="text-gray-300">Access to exclusive tenders from various industries and sectors</p>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold text-white mb-3">Faster Results</h3>
              <p className="text-gray-300">Streamlined process reduces evaluation time and gets you working sooner</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tenders */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Tenders</h2>
            <Link href="/tenders">
              <Button variant="outline">View All Tenders</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenders.map((tender) => (
              <Card key={tender.id} className="hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-white mb-2">{tender.title}</h3>
                <p className="text-gray-300 mb-4">{tender.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">Deadline: {tender.deadline}</span>
                  <span className="text-sm text-blue-400">{tender.value}</span>
                </div>
                <Link href={`/tenders/${tender.id}`}>
                  <Button variant="primary" className="w-full">View Details</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}