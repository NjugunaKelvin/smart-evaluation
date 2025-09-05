'use client';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useRouter } from 'next/navigation';

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
  value: 'Ksh 150,000 - Ksh 200,000',
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
  const router = useRouter();
  
  // Calculate days until deadline
  const deadlineDate = new Date(tenderData.deadline);
  const today = new Date();
  const daysUntilDeadline = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
  
  // Function to handle document actions
  const handleDocumentAction = (action: 'view' | 'download', documentName: string) => {
    console.log(`${action}ing ${documentName}`);
    // In a real app, this would open a modal or download the file
  };
  
  // Function to handle proposal submission
  const handleSubmitProposal = () => {
    router.push(`/tenders/${params.id}/apply`);
  };
  
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tenders" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Tenders
        </Link>

        {/* Header with status badge */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-700/30">
              {tenderData.industry}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">{tenderData.title}</h1>
            <p className="text-gray-400 text-lg">Published by {tenderData.organization}</p>
          </div>
          <div className="text-right bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <div className="text-sm text-gray-400 uppercase tracking-wide">Reference #</div>
            <div className="text-white font-mono text-lg">ICT/{tenderData.id.toString().padStart(4, '0')}/2023</div>
          </div>
        </div>

        {/* Deadline alert */}
        <Card className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border-blue-700/50 mb-8 shadow-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center text-blue-400 mr-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center border-b border-gray-700/50 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Project Description
              </h2>
              <p className="text-gray-300 leading-relaxed mt-4">{tenderData.description}</p>
            </Card>

            {/* Requirements */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center border-b border-gray-700/50 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-400">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Requirements
              </h2>
              <ul className="space-y-3 mt-4">
                {tenderData.requirements.map((req, index) => (
                  <li key={index} className="flex items-start p-2 rounded-md hover:bg-gray-700/30 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 mr-3 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Documents */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center border-b border-gray-700/50 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                Documents
              </h2>
              <div className="space-y-3 mt-4">
                {tenderData.documents.map((doc, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-700/30 rounded-md hover:bg-gray-700/50 transition-all duration-200 border border-gray-700/30">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-3">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                      <span className="text-white">{doc}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="border-blue-600/50 hover:bg-blue-600/20 text-blue-300 text-xs py-1 px-3 transition-all duration-200"
                        onClick={() => handleDocumentAction('view', doc)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        View
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-green-600/50 hover:bg-green-600/20 text-green-300 text-xs py-1 px-3 transition-all duration-200"
                        onClick={() => handleDocumentAction('download', doc)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Key Information */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm overflow-hidden">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center border-b border-gray-700/50 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Key Information
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto smooth-scroll pr-2 py-2">
                <div className="p-3 rounded-md hover:bg-gray-700/30 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Project Value</h3>
                  <p className="text-green-400 font-semibold">{tenderData.value}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-700/30 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Location</h3>
                  <p className="text-white">{tenderData.location}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-700/30 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Duration</h3>
                  <p className="text-white">{tenderData.duration}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-700/30 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Published</h3>
                  <p className="text-blue-300">{tenderData.publishedDate}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-700/30 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Deadline</h3>
                  <p className="text-red-400 font-medium">{tenderData.deadline}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-700/30 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Evaluation</h3>
                  <p className="text-yellow-400">{tenderData.evaluationDate}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-700/30 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Award Notification</h3>
                  <p className="text-green-300">{tenderData.awardDate}</p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center border-b border-gray-700/50 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact Information
              </h2>
              <div className="space-y-4 mt-4">
                <div className="p-3 rounded-md bg-gray-700/30">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Contact Person</h3>
                  <p className="text-white">{tenderData.contact.name}</p>
                </div>
                <div className="p-3 rounded-md bg-gray-700/30">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Email</h3>
                  <p className="text-blue-300 break-all">{tenderData.contact.email}</p>
                </div>
                <div className="p-3 rounded-md bg-gray-700/30">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Phone</h3>
                  <p className="text-white">{tenderData.contact.phone}</p>
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sticky top-6">
              <Button 
                variant="primary" 
                className="bg-blue-600 hover:bg-blue-700 py-3 transition-all duration-300 shadow-lg shadow-blue-500/20"
                onClick={handleSubmitProposal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Submit Proposal
              </Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-700/50 text-gray-300 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Save for Later
              </Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-700/50 text-gray-300 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Print Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        .smooth-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .smooth-scroll::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.4);
          border-radius: 10px;
        }
        .smooth-scroll::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 10px;
        }
        .smooth-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  );
}