import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface TenderDetailPageProps {
  params: {
    id: string;
  };
}

const tenderData = {
  id: 1,
  title: 'Website Development Project',
  description: 'We are seeking an experienced web development team to create a comprehensive corporate website with e-commerce functionality. The project requires modern design, responsive layout, and integration with our existing systems.',
  requirements: [
    '5+ years of web development experience',
    'Proficiency in React/Next.js and Node.js',
    'Experience with e-commerce platforms',
    'Strong UI/UX design skills',
    'Knowledge of SEO best practices'
  ],
  deadline: '2023-12-15',
  publishedDate: '2023-11-01',
  evaluationDate: '2023-12-20',
  awardDate: '2023-12-25',
  value: '$15,000 - $20,000',
  industry: 'Technology',
  location: 'Remote',
  duration: '3 months',
  documents: ['RFP Document', 'Technical Specifications', 'Contract Template']
};

export default function TenderDetailPage({ params }: TenderDetailPageProps) {
  return (
    <div className="min-h-screen py-12 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tenders" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
          ← Back to Tenders
        </Link>

        <Card className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-4">{tenderData.title}</h1>
          <p className="text-gray-300 mb-6">{tenderData.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Key Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-white">{tenderData.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white">{tenderData.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Project Value:</span>
                  <span className="text-blue-400">{tenderData.value}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{tenderData.duration}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Key Dates</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Published:</span>
                  <span className="text-white">{tenderData.publishedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Submission Deadline:</span>
                  <span className="text-white">{tenderData.deadline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Evaluation:</span>
                  <span className="text-white">{tenderData.evaluationDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Award Notification:</span>
                  <span className="text-white">{tenderData.awardDate}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {tenderData.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Documents</h2>
          <div className="space-y-3">
            {tenderData.documents.map((doc, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
                <span className="text-white">{doc}</span>
                <Button variant="outline">Download</Button>
              </div>
            ))}
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" className="flex-1">
            Submit Proposal
          </Button>
          <Button variant="outline">
            Save for Later
          </Button>
        </div>
      </div>
    </div>
  );
}