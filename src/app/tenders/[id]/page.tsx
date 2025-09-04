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
    'Knowledge of SEO best practices',
    'Experience with government projects is a plus',
    'Ability to meet tight deadlines'
  ],
  deadline: '2026-12-15',
  publishedDate: '2023-11-01',
  evaluationDate: '2023-12-20',
  awardDate: '2026-12-25',
  value: '$15,000 - $20,000',
  industry: 'Technology',
  location: 'Remote',
  duration: '3 months',
  organization: 'Ministry of ICT',
  documents: ['RFP Document', 'Technical Specifications', 'Contract Template', 'Evaluation Criteria'],
  contact: {
    name: 'Procurement Department',
    email: 'procurement@ict.go.ke',
    phone: '+254 700 123 456'
  }
};

export default function TenderDetailPage({ params }: TenderDetailPageProps) {
  // Calculate days until deadline
  const deadlineDate = new Date(tenderData.deadline);
  const today = new Date();
  const daysUntilDeadline = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
  
  return (
    <div className="min-h-screen py-12 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tenders" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Tenders
        </Link>

        {/* Header with status badge */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
              {tenderData.industry}
            </span>
            <h1 className="text-3xl font-bold text-white mb-2">{tenderData.title}</h1>
            <p className="text-gray-400">Published by {tenderData.organization}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Reference #</div>
            <div className="text-white font-mono">ICT/{tenderData.id.toString().padStart(4, '0')}/2023</div>
          </div>
        </div>

        {/* Deadline alert */}
        <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 mb-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                {daysUntilDeadline > 0 ? `${daysUntilDeadline} days left to apply` : 'Deadline passed'}
              </h3>
              <p className="text-gray-400">Submission deadline: {tenderData.deadline}</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Description */}
            <Card className="mb-6 bg-gray-800 border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-400">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Project Description
              </h2>
              <p className="text-gray-300 leading-relaxed">{tenderData.description}</p>
            </Card>

            {/* Requirements */}
            <Card className="mb-6 bg-gray-800 border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-400">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Requirements
              </h2>
              <ul className="space-y-3">
                {tenderData.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 mr-2 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Documents */}
            <Card className="mb-6 bg-gray-800 border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-400">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                Documents
              </h2>
              <div className="space-y-3">
                {tenderData.documents.map((doc, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                      <span className="text-white">{doc}</span>
                    </div>
                    <Button variant="outline" className="border-gray-600 hover:bg-gray-600 text-xs py-1">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            {/* Key Information */}
            <Card className="mb-6 bg-gray-800 border-gray-700 sticky top-6">
              <h2 className="text-xl font-semibold text-white mb-4">Key Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Project Value</h3>
                  <p className="text-green-400 font-semibold">{tenderData.value}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Location</h3>
                  <p className="text-white">{tenderData.location}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Duration</h3>
                  <p className="text-white">{tenderData.duration}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Published</h3>
                  <p className="text-white">{tenderData.publishedDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Deadline</h3>
                  <p className="text-white">{tenderData.deadline}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Evaluation</h3>
                  <p className="text-white">{tenderData.evaluationDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Award Notification</h3>
                  <p className="text-white">{tenderData.awardDate}</p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="mb-6 bg-gray-800 border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Contact Person</h3>
                  <p className="text-white">{tenderData.contact.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Email</h3>
                  <p className="text-white">{tenderData.contact.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Phone</h3>
                  <p className="text-white">{tenderData.contact.phone}</p>
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sticky top-80">
              <Button variant="primary" className="bg-green-600 hover:bg-green-700 py-3">
                Submit Proposal
              </Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-700 py-3">
                Save for Later
              </Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-700 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                Print Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}