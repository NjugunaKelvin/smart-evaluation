'use client';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

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
  const [showSubmissionOptions, setShowSubmissionOptions] = useState(false);
  
  // Use params directly (no need to unwrap)
  // const unwrappedParams = use(params);
  
  // Calculate days until deadline
  const deadlineDate = new Date(tenderData.deadline);
  const today = new Date();
  const daysUntilDeadline = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
  
  // Function to handle document actions
  const handleDocumentAction = (action: 'view' | 'download', documentName: string) => {
    console.log(`${action}ing ${documentName}`);
    // This will open a modal or download the file
  };
  
  // Function to handle proposal submission options
  const handleShowSubmissionOptions = () => {
    setShowSubmissionOptions(true);
  };
  
  // Function to handle PDF submission
  const handlePdfSubmission = () => {
    // Logic to handle PDF upload
    console.log('PDF submission selected');
    // This would typically open a file upload dialog
  };
  
  // Function to handle form submission - FIXED: Use params directly
  const handleFormSubmission = () => {
    router.push(`/opportunities/${params.id}/apply`);
  };

  return (
    <div className="min-h-screen bg-[#ebe1f2]">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-purple-700 hover:text-purple-900 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/opportunities" className="text-purple-700 hover:text-purple-900 transition-colors">
                Opportunities
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700 truncate">Tender Details</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  {tenderData.industry}
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {tenderData.location}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{tenderData.title}</h1>
              <p className="text-gray-600">Published by <span className="font-semibold">{tenderData.organization}</span></p>
            </div>
            <div className="text-right bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Reference #</div>
              <div className="text-gray-900 font-mono text-lg font-semibold">ICT/{tenderData.id.toString().padStart(4, '0')}/2023</div>
            </div>
          </div>
        </div>

        {/* Deadline Alert */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                {daysUntilDeadline > 0 ? `${daysUntilDeadline} days left to apply` : 'Deadline passed'}
              </h3>
              <p className="text-white/90">Submission deadline: {new Date(tenderData.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>

        {/* Submission Options Modal */}
        {showSubmissionOptions && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Submission Method</h2>
              <p className="text-gray-600 mb-6">Select how you would like to submit your proposal for this tender.</p>
              
              <div className="space-y-4">
                <div 
                  className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={handlePdfSubmission}
                >
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">Upload PDF Document</h3>
                      <p className="text-gray-600 text-sm">Submit your complete proposal as a single PDF file</p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={handleFormSubmission}
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">Use Online Form</h3>
                      <p className="text-gray-600 text-sm">Fill out our step-by-step proposal form</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button 
                  variant="outline" 
                  className="mr-2 border-gray-300 text-gray-700"
                  onClick={() => setShowSubmissionOptions(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">{tenderData.description}</p>
            </Card>

            {/* Requirements */}
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Requirements
              </h2>
              <ul className="space-y-3">
                {tenderData.requirements.map((req, index) => (
                  <li key={index} className="flex items-start p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Documents */}
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Review Documents
              </h2>
              <div className="space-y-3">
                {tenderData.documents.map((doc, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-200 border border-gray-200">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-gray-900 font-medium">{doc}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="border-purple-200 hover:bg-purple-50 text-purple-700 text-xs py-1 px-3 transition-all duration-200"
                        onClick={() => handleDocumentAction('view', doc)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-blue-200 hover:bg-blue-50 text-blue-700 text-xs py-1 px-3 transition-all duration-200"
                        onClick={() => handleDocumentAction('download', doc)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Key Information
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 py-2">
                <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Project Value</h3>
                  <p className="text-purple-700 font-semibold">{tenderData.value}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
                  <p className="text-gray-900">{tenderData.location}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Duration</h3>
                  <p className="text-gray-900">{tenderData.duration}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Published</h3>
                  <p className="text-gray-900">{new Date(tenderData.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Deadline</h3>
                  <p className="text-red-600 font-medium">{new Date(tenderData.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Evaluation</h3>
                  <p className="text-gray-900">{new Date(tenderData.evaluationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Award Notification</h3>
                  <p className="text-gray-900">{new Date(tenderData.awardDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="p-3 rounded-md bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Contact Person</h3>
                  <p className="text-gray-900">{tenderData.contact.name}</p>
                </div>
                <div className="p-3 rounded-md bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                  <a href={`mailto:${tenderData.contact.email}`} className="text-blue-600 hover:text-blue-800 break-all transition-colors">
                    {tenderData.contact.email}
                  </a>
                </div>
                <div className="p-3 rounded-md bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Phone</h3>
                  <a href={`tel:${tenderData.contact.phone}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                    {tenderData.contact.phone}
                  </a>
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sticky top-6">
              <Button 
                variant="primary" 
                className="bg-purple-600 hover:bg-purple-700 py-3 transition-all duration-300 shadow-md"
                onClick={handleShowSubmissionOptions}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 11115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                Submit Proposal
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-100 text-gray-700 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save for Later
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-100 text-gray-700 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
                </svg>
                Print Details
              </Button>
            </div>
          </div>
          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>Only apply through this portal. Any applications sent elsewhere will not be considered.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}