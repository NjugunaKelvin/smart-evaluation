/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Navbar from './Navbar';

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
    { id: 1, title: 'Organization Details' },
    { id: 2, title: 'Contact Information' },
    { id: 3, title: 'Company Profile' },
    { id: 4, title: 'Technical Proposal' },
    { id: 5, title: 'Financial Proposal' },
    { id: 6, title: 'Supporting Documents' },
    { id: 7, title: 'Review & Submit' },
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
    // TODO: Implement actual backend submission logic here
    console.log('Form submitted:', formData);
    alert('Proposal submitted successfully!');
    router.push('/tenders');
  };

  // Render the appropriate form step with a key for smooth re-renders
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div key="step1" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-white">Organization Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organizationName" className="block text-sm font-medium text-gray-300 mb-1">Organization Name *</label>
                <input
                  id="organizationName"
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="Enter your organization name"
                />
              </div>
              
              <div>
                <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-300 mb-1">Registration Number *</label>
                <input
                  id="registrationNumber"
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="Enter registration number"
                />
              </div>
              
              <div>
                <label htmlFor="taxId" className="block text-sm font-medium text-gray-300 mb-1">Tax ID *</label>
                <input
                  id="taxId"
                  type="text"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="Enter tax ID"
                />
              </div>
              
              <div>
                <label htmlFor="yearEstablished" className="block text-sm font-medium text-gray-300 mb-1">Year Established *</label>
                <input
                  id="yearEstablished"
                  type="number"
                  name="yearEstablished"
                  value={formData.yearEstablished}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="e.g., 2005"
                />
              </div>
              
              <div>
                <label htmlFor="legalStatus" className="block text-sm font-medium text-gray-300 mb-1">Legal Status *</label>
                <select
                  id="legalStatus"
                  name="legalStatus"
                  value={formData.legalStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">Country *</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Enter full address"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div key="step2" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-white">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-1">Contact Person Name *</label>
                <input
                  id="contactName"
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="Enter full name"
                />
              </div>
              
              <div>
                <label htmlFor="contactPosition" className="block text-sm font-medium text-gray-300 mb-1">Position *</label>
                <input
                  id="contactPosition"
                  type="text"
                  name="contactPosition"
                  value={formData.contactPosition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="e.g., CEO"
                />
              </div>
              
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                <input
                  id="contactEmail"
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-300 mb-1">Phone *</label>
                <input
                  id="contactPhone"
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="Enter phone number"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="alternateContact" className="block text-sm font-medium text-gray-300 mb-1">Alternate Contact (Optional)</label>
                <input
                  id="alternateContact"
                  type="text"
                  name="alternateContact"
                  value={formData.alternateContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter alternate contact details"
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div key="step3" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-white">Company Profile</h3>
            
            <div>
              <label htmlFor="companyOverview" className="block text-sm font-medium text-gray-300 mb-1">Company Overview *</label>
              <textarea
                id="companyOverview"
                name="companyOverview"
                value={formData.companyOverview}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Provide a brief description of your company, including mission and vision"
              />
            </div>
            
            <div>
              <label htmlFor="coreBusiness" className="block text-sm font-medium text-gray-300 mb-1">Core Business Activities *</label>
              <textarea
                id="coreBusiness"
                name="coreBusiness"
                value={formData.coreBusiness}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Describe your company's main products or services"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="totalEmployees" className="block text-sm font-medium text-gray-300 mb-1">Total Number of Employees *</label>
                <input
                  id="totalEmployees"
                  type="number"
                  name="totalEmployees"
                  value={formData.totalEmployees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="e.g., 150"
                />
              </div>
              
              <div>
                <label htmlFor="relevantExperience" className="block text-sm font-medium text-gray-300 mb-1">Relevant Experience (Years) *</label>
                <input
                  id="relevantExperience"
                  type="number"
                  name="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="e.g., 10"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="pastClients" className="block text-sm font-medium text-gray-300 mb-1">Past Clients/Projects (Optional)</label>
              <textarea
                id="pastClients"
                name="pastClients"
                value={formData.pastClients}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="List notable clients or projects"
              />
            </div>
            
            <div>
              <label htmlFor="certifications" className="block text-sm font-medium text-gray-300 mb-1">Certifications (Optional)</label>
              <textarea
                id="certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="List relevant certifications or awards"
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div key="step4" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-white">Technical Proposal</h3>
            
            <div>
              <label htmlFor="technicalApproach" className="block text-sm font-medium text-gray-300 mb-1">Technical Approach *</label>
              <textarea
                id="technicalApproach"
                name="technicalApproach"
                value={formData.technicalApproach}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Describe your technical approach to the project"
              />
            </div>
            
            <div>
              <label htmlFor="methodology" className="block text-sm font-medium text-gray-300 mb-1">Methodology *</label>
              <textarea
                id="methodology"
                name="methodology"
                value={formData.methodology}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Explain the methodology for project execution"
              />
            </div>
            
            <div>
              <label htmlFor="projectTimeline" className="block text-sm font-medium text-gray-300 mb-1">Project Timeline *</label>
              <textarea
                id="projectTimeline"
                name="projectTimeline"
                value={formData.projectTimeline}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Provide a detailed project timeline"
              />
            </div>
            
            <div>
              <label htmlFor="keyPersonnel" className="block text-sm font-medium text-gray-300 mb-1">Key Personnel *</label>
              <textarea
                id="keyPersonnel"
                name="keyPersonnel"
                value={formData.keyPersonnel}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="List key team members and qualifications"
              />
            </div>
            
            <div>
              <label htmlFor="riskManagement" className="block text-sm font-medium text-gray-300 mb-1">Risk Management Plan *</label>
              <textarea
                id="riskManagement"
                name="riskManagement"
                value={formData.riskManagement}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Describe risk management strategies"
              />
            </div>
          </div>
        );
      
      case 5:
        return (
          <div key="step5" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-white">Financial Proposal</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="totalProposedAmount" className="block text-sm font-medium text-gray-300 mb-1">Total Proposed Amount (USD) *</label>
                <input
                  id="totalProposedAmount"
                  type="number"
                  name="totalProposedAmount"
                  value={formData.totalProposedAmount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="e.g., 50000"
                />
              </div>
              
              <div>
                <label htmlFor="validityPeriod" className="block text-sm font-medium text-gray-300 mb-1">Proposal Validity Period (Days) *</label>
                <input
                  id="validityPeriod"
                  type="number"
                  name="validityPeriod"
                  value={formData.validityPeriod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="e.g., 90"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="costBreakdown" className="block text-sm font-medium text-gray-300 mb-1">Cost Breakdown *</label>
              <textarea
                id="costBreakdown"
                name="costBreakdown"
                value={formData.costBreakdown}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Provide detailed cost breakdown"
              />
            </div>
            
            <div>
              <label htmlFor="paymentTerms" className="block text-sm font-medium text-gray-300 mb-1">Payment Terms *</label>
              <textarea
                id="paymentTerms"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Specify payment schedule"
              />
            </div>
            
            <div>
              <label htmlFor="additionalCosts" className="block text-sm font-medium text-gray-300 mb-1">Additional Costs (Optional)</label>
              <textarea
                id="additionalCosts"
                name="additionalCosts"
                value={formData.additionalCosts}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="List any additional costs"
              />
            </div>
          </div>
        );
      
      case 6:
        return (
          <div key="step6" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-white">Supporting Documents</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="companyRegistration" className="block text-sm font-medium text-gray-300 mb-2">Company Registration Certificate *</label>
                <input
                  id="companyRegistration"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'companyRegistration')}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                {formData.companyRegistration && <p className="mt-1 text-sm text-gray-400">Uploaded: {formData.companyRegistration.name}</p>}
              </div>
              
              <div>
                <label htmlFor="taxCompliance" className="block text-sm font-medium text-gray-300 mb-2">Tax Compliance Certificate *</label>
                <input
                  id="taxCompliance"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'taxCompliance')}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                {formData.taxCompliance && <p className="mt-1 text-sm text-gray-400">Uploaded: {formData.taxCompliance.name}</p>}
              </div>
              
              <div>
                <label htmlFor="financialStatements" className="block text-sm font-medium text-gray-300 mb-2">Financial Statements (Last 2 years) *</label>
                <input
                  id="financialStatements"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'financialStatements')}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                {formData.financialStatements && <p className="mt-1 text-sm text-gray-400">Uploaded: {formData.financialStatements.name}</p>}
              </div>
              
              <div>
                <label htmlFor="proposalDocument" className="block text-sm font-medium text-gray-300 mb-2">Detailed Proposal Document *</label>
                <input
                  id="proposalDocument"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'proposalDocument')}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                {formData.proposalDocument && <p className="mt-1 text-sm text-gray-400">Uploaded: {formData.proposalDocument.name}</p>}
              </div>
              
              <div>
                <label htmlFor="additionalDocuments" className="block text-sm font-medium text-gray-300 mb-2">Additional Supporting Documents (Optional)</label>
                <input
                  id="additionalDocuments"
                  type="file"
                  multiple
                  onChange={handleAddDocument}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                {formData.additionalDocuments.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-gray-300">Added documents:</p>
                    {formData.additionalDocuments.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-700/50 p-3 rounded-md border border-gray-600">
                        <span className="text-white text-sm truncate max-w-[80%]">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveDocument(index)}
                          className="text-red-400 hover:text-red-300 text-sm font-medium"
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
          <div key="step7" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-white">Review & Submit</h3>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-medium text-white mb-4">Review Your Submission</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Organization Details</h5>
                  <dl className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Name:</dt>
                      <dd className="text-gray-300">{formData.organizationName || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Registration #:</dt>
                      <dd className="text-gray-300">{formData.registrationNumber || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Tax ID:</dt>
                      <dd className="text-gray-300">{formData.taxId || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Year Established:</dt>
                      <dd className="text-gray-300">{formData.yearEstablished || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Legal Status:</dt>
                      <dd className="text-gray-300">{formData.legalStatus || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Country:</dt>
                      <dd className="text-gray-300">{formData.country || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Address:</dt>
                      <dd className="text-gray-300">{formData.address || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Contact Information</h5>
                  <dl className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Contact Person:</dt>
                      <dd className="text-gray-300">{formData.contactName || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Position:</dt>
                      <dd className="text-gray-300">{formData.contactPosition || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Email:</dt>
                      <dd className="text-gray-300">{formData.contactEmail || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Phone:</dt>
                      <dd className="text-gray-300">{formData.contactPhone || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Alternate Contact:</dt>
                      <dd className="text-gray-300">{formData.alternateContact || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Company Profile</h5>
                  <dl className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Overview:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.companyOverview || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Core Business:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.coreBusiness || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Employees:</dt>
                      <dd className="text-gray-300">{formData.totalEmployees || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Experience (Years):</dt>
                      <dd className="text-gray-300">{formData.relevantExperience || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Past Clients:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.pastClients || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Certifications:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.certifications || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Technical Proposal</h5>
                  <dl className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Approach:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.technicalApproach || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Methodology:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.methodology || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Timeline:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.projectTimeline || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Key Personnel:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.keyPersonnel || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Risk Management:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.riskManagement || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Financial Proposal</h5>
                  <dl className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Total Amount (USD):</dt>
                      <dd className="text-gray-300">{formData.totalProposedAmount ? `$${formData.totalProposedAmount}` : 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Validity Period:</dt>
                      <dd className="text-gray-300">{formData.validityPeriod ? `${formData.validityPeriod} days` : 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Cost Breakdown:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.costBreakdown || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Payment Terms:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.paymentTerms || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Additional Costs:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.additionalCosts || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Supporting Documents</h5>
                  <dl className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Company Registration:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.companyRegistration?.name || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Tax Compliance:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.taxCompliance?.name || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Financial Statements:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.financialStatements?.name || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Proposal Document:</dt>
                      <dd className="text-gray-300 truncate max-w-[70%]">{formData.proposalDocument?.name || 'N/A'}</dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="text-gray-400 mb-1">Additional Documents:</dt>
                      <dd className="text-gray-300">
                        {formData.additionalDocuments.length > 0 ? 
                          formData.additionalDocuments.map(file => file.name).join(', ') : 
                          'N/A'
                        }
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-gray-700">
              <div className="flex items-start space-x-3">
                <input
                  id="agreeTerms"
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                  required
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-300">
                  I agree to the terms and conditions of this tender process and understand that any false information may lead to disqualification.
                </label>
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  id="agreeAccuracy"
                  type="checkbox"
                  name="agreeAccuracy"
                  checked={formData.agreeAccuracy}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                  required
                />
                <label htmlFor="agreeAccuracy" className="text-sm text-gray-300">
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
    <div className="min-h-screen py-12 bg-gray-900">
      <Navbar />
      <br /><br />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Submit Proposal</h1>
          <p className="text-gray-400">Tender Reference: ICT/{tenderId.padStart(4, '0')}/2023</p>
        </div>

        {/* Progress Steps */}
        <Card className="bg-gray-800 border border-gray-700 mb-8 p-6">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep === step.id
                      ? 'bg-blue-600 text-white'
                      : currentStep > step.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  {currentStep > step.id ? '✓' : step.id}
                </div>
                <span
                  className={`text-xs mt-2 text-center ${
                    currentStep >= step.id ? 'text-white font-medium' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-1.5">
            <div
              className="bg-blue-600 h-1.5 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </Card>

        {/* Form */}
        <Card className="bg-gray-800 border border-gray-700 p-8">
          <form onSubmit={handleSubmit}>
            {renderStep()}
            
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-600 hover:bg-gray-700 text-gray-300 rounded-md transition-colors"
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
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

// Add this style in your global CSS or in a style tag if needed
// For the fade-in animation
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
`;