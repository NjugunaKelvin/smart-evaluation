'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface FormsProps {
  tenderId: string;
}

interface FormData {
  // Organization Details
  organizationName: string;
  registrationNumber: string;
  taxId: string;
  yearEstablished: string;
  legalStatus: string;
  address: string;
  country: string;
  
  // Contact Information
  contactName: string;
  contactPosition: string;
  contactEmail: string;
  contactPhone: string;
  alternateContact: string;
  
  // Company Profile
  companyOverview: string;
  coreBusiness: string;
  totalEmployees: string;
  relevantExperience: string;
  pastClients: string;
  certifications: string;
  
  // Technical Proposal
  technicalApproach: string;
  methodology: string;
  projectTimeline: string;
  keyPersonnel: string;
  riskManagement: string;
  
  // Financial Proposal
  totalProposedAmount: string;
  costBreakdown: string;
  paymentTerms: string;
  validityPeriod: string;
  additionalCosts: string;
  
  // Supporting Documents
  companyRegistration: File | null;
  taxCompliance: File | null;
  financialStatements: File | null;
  proposalDocument: File | null;
  additionalDocuments: File[];
  
  // Terms and Conditions
  agreeTerms: boolean;
  agreeAccuracy: boolean;
}

export default function Forms({ tenderId }: FormsProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    registrationNumber: '',
    taxId: '',
    yearEstablished: '',
    legalStatus: '',
    address: '',
    country: '',
    
    contactName: '',
    contactPosition: '',
    contactEmail: '',
    contactPhone: '',
    alternateContact: '',
    
    companyOverview: '',
    coreBusiness: '',
    totalEmployees: '',
    relevantExperience: '',
    pastClients: '',
    certifications: '',
    
    technicalApproach: '',
    methodology: '',
    projectTimeline: '',
    keyPersonnel: '',
    riskManagement: '',
    
    totalProposedAmount: '',
    costBreakdown: '',
    paymentTerms: '',
    validityPeriod: '',
    additionalCosts: '',
    
    companyRegistration: null,
    taxCompliance: null,
    financialStatements: null,
    proposalDocument: null,
    additionalDocuments: [],
    
    agreeTerms: false,
    agreeAccuracy: false,
  });

  const steps = [
    { id: 1, title: 'Organization Details', icon: '🏢' },
    { id: 2, title: 'Contact Information', icon: '👤' },
    { id: 3, title: 'Company Profile', icon: '📊' },
    { id: 4, title: 'Technical Proposal', icon: '🔧' },
    { id: 5, title: 'Financial Proposal', icon: '💰' },
    { id: 6, title: 'Supporting Documents', icon: '📎' },
    { id: 7, title: 'Review & Submit', icon: '✅' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [fieldName]: file });
  };

  const handleAddDocument = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({
      ...formData,
      additionalDocuments: [...formData.additionalDocuments, ...files],
    });
  };

  const handleRemoveDocument = (index: number) => {
    const updatedDocuments = [...formData.additionalDocuments];
    updatedDocuments.splice(index, 1);
    setFormData({ ...formData, additionalDocuments: updatedDocuments });
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Proposal submitted successfully!');
    router.push('/tenders');
  };

  // Render the appropriate form step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Organization Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Organization Name *</label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Registration Number *</label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Tax ID *</label>
                <input
                  type="text"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Year Established *</label>
                <input
                  type="number"
                  name="yearEstablished"
                  value={formData.yearEstablished}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Legal Status *</label>
                <select
                  name="legalStatus"
                  value={formData.legalStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Legal Status</option>
                  <option value="sole-proprietorship">Sole Proprietorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="limited-liability">Limited Liability Company</option>
                  <option value="corporation">Corporation</option>
                  <option value="non-profit">Non-Profit Organization</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="kenya">Kenya</option>
                  <option value="uganda">Uganda</option>
                  <option value="tanzania">Tanzania</option>
                  <option value="rwanda">Rwanda</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Contact Person Name *</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Position *</label>
                <input
                  type="text"
                  name="contactPosition"
                  value={formData.contactPosition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone *</label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-1">Alternate Contact (Optional)</label>
                <input
                  type="text"
                  name="alternateContact"
                  value={formData.alternateContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Company Profile</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Company Overview *</label>
              <textarea
                name="companyOverview"
                value={formData.companyOverview}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Brief description of your company, mission, and vision"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Core Business Activities *</label>
              <textarea
                name="coreBusiness"
                value={formData.coreBusiness}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Describe your company's main products or services"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Total Number of Employees *</label>
                <input
                  type="number"
                  name="totalEmployees"
                  value={formData.totalEmployees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Relevant Experience (Years) *</label>
                <input
                  type="number"
                  name="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Past Clients/Projects (Optional)</label>
              <textarea
                name="pastClients"
                value={formData.pastClients}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="List notable clients or projects you've worked on"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Certifications (Optional)</label>
              <textarea
                name="certifications"
                value={formData.certifications}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="List any relevant certifications or awards"
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Technical Proposal</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Technical Approach *</label>
              <textarea
                name="technicalApproach"
                value={formData.technicalApproach}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Describe your technical approach to this project"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Methodology *</label>
              <textarea
                name="methodology"
                value={formData.methodology}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Explain your methodology for executing this project"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Project Timeline *</label>
              <textarea
                name="projectTimeline"
                value={formData.projectTimeline}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Provide a detailed timeline for project completion"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Key Personnel *</label>
              <textarea
                name="keyPersonnel"
                value={formData.keyPersonnel}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="List key team members and their qualifications"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Risk Management Plan *</label>
              <textarea
                name="riskManagement"
                value={formData.riskManagement}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Describe how you will manage potential risks"
              />
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Financial Proposal</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Total Proposed Amount (USD) *</label>
                <input
                  type="number"
                  name="totalProposedAmount"
                  value={formData.totalProposedAmount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Proposal Validity Period (Days) *</label>
                <input
                  type="number"
                  name="validityPeriod"
                  value={formData.validityPeriod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Cost Breakdown *</label>
              <textarea
                name="costBreakdown"
                value={formData.costBreakdown}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Provide a detailed breakdown of all costs"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Payment Terms *</label>
              <textarea
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Specify your expected payment schedule"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Additional Costs (Optional)</label>
              <textarea
                name="additionalCosts"
                value={formData.additionalCosts}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="List any additional costs not included in the main breakdown"
              />
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Supporting Documents</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company Registration Certificate *</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'companyRegistration')}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tax Compliance Certificate *</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'taxCompliance')}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Financial Statements (Last 2 years) *</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'financialStatements')}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Detailed Proposal Document *</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'proposalDocument')}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Additional Supporting Documents (Optional)</label>
                <input
                  type="file"
                  multiple
                  onChange={handleAddDocument}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                {formData.additionalDocuments.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-gray-400">Added documents:</p>
                    {formData.additionalDocuments.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-700 p-2 rounded-md">
                        <span className="text-white text-sm truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveDocument(index)}
                          className="text-red-400 hover:text-red-300 ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Review & Submit</h3>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
              <h4 className="text-lg font-medium text-white mb-4">Please review your information before submitting</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Organization Details</h5>
                  <p className="text-gray-300"><span className="text-gray-500">Name:</span> {formData.organizationName}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Registration #:</span> {formData.registrationNumber}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Tax ID:</span> {formData.taxId}</p>
                </div>
                
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Contact Information</h5>
                  <p className="text-gray-300"><span className="text-gray-500">Contact Person:</span> {formData.contactName}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Email:</span> {formData.contactEmail}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Phone:</span> {formData.contactPhone}</p>
                </div>
                
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Financial Proposal</h5>
                  <p className="text-gray-300"><span className="text-gray-500">Total Amount:</span> ${formData.totalProposedAmount}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Validity Period:</span> {formData.validityPeriod} days</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 mr-3"
                  required
                />
                <label className="text-gray-300 text-sm">
                  I agree to the terms and conditions of this tender process and understand that any false information may lead to disqualification.
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeAccuracy"
                  checked={formData.agreeAccuracy}
                  onChange={handleInputChange}
                  className="mt-1 mr-3"
                  required
                />
                <label className="text-gray-300 text-sm">
                  I certify that all information provided in this proposal is accurate to the best of my knowledge.
                </label>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Submit Proposal</h1>
          <p className="text-gray-400">Tender Reference: ICT/{tenderId.padStart(4, '0')}/2023</p>
        </div>

        {/* Progress Steps */}
        <Card className="bg-gray-800/50 border-gray-700/50 mb-8 p-4">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    currentStep === step.id
                      ? 'bg-blue-600 text-white'
                      : currentStep > step.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  {currentStep > step.id ? '✓' : step.icon}
                </div>
                <span
                  className={`text-xs mt-2 ${
                    currentStep === step.id ? 'text-blue-400 font-medium' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </Card>

        {/* Form */}
        <Card className="bg-gray-800/50 border-gray-700/50 p-6">
          <form onSubmit={handleSubmit}>
            {renderStep()}
            
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-700/50">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="border-gray-600 hover:bg-gray-700/50 text-gray-300"
                >
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              
              {currentStep < steps.length ? (
                <Button
                  type="button"
                  variant="primary"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!formData.agreeTerms || !formData.agreeAccuracy}
                >
                  Submit Proposal
                </Button>
              )}
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}