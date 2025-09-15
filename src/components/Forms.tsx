/* eslint-disable react/no-unescaped-entities */
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
    { id: 1, title: 'Organization' },
    { id: 2, title: 'Contact' },
    { id: 3, title: 'Company' },
    { id: 4, title: 'Technical' },
    { id: 5, title: 'Financial' },
    { id: 6, title: 'Documents' },
    { id: 7, title: 'Review' },
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
    router.push('/opportunities');
  };

  // Render the appropriate form step with a key for smooth re-renders
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div key="step1" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Organization Details</h3>
            <p className="text-gray-600 mb-6">Please provide your organization's legal information.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                <input
                  id="organizationName"
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="Enter your organization name"
                />
              </div>
              
              <div>
                <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-2">Registration Number *</label>
                <input
                  id="registrationNumber"
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="Enter registration number"
                />
              </div>
              
              <div>
                <label htmlFor="taxId" className="block text-sm font-medium text-gray-700 mb-2">Tax ID *</label>
                <input
                  id="taxId"
                  type="text"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="Enter tax ID"
                />
              </div>
              
              <div>
                <label htmlFor="yearEstablished" className="block text-sm font-medium text-gray-700 mb-2">Year Established *</label>
                <input
                  id="yearEstablished"
                  type="number"
                  name="yearEstablished"
                  value={formData.yearEstablished}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="e.g., 2005"
                />
              </div>
              
              <div>
                <label htmlFor="legalStatus" className="block text-sm font-medium text-gray-700 mb-2">Legal Status *</label>
                <select
                  id="legalStatus"
                  name="legalStatus"
                  value={formData.legalStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
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
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
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
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="Enter full address"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div key="step2" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h3>
            <p className="text-gray-600 mb-6">Please provide contact details for this tender application.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">Contact Person Name *</label>
                <input
                  id="contactName"
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="Enter full name"
                />
              </div>
              
              <div>
                <label htmlFor="contactPosition" className="block text-sm font-medium text-gray-700 mb-2">Position *</label>
                <input
                  id="contactPosition"
                  type="text"
                  name="contactPosition"
                  value={formData.contactPosition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="e.g., CEO"
                />
              </div>
              
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  id="contactEmail"
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  id="contactPhone"
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="Enter phone number"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="alternateContact" className="block text-sm font-medium text-gray-700 mb-2">Alternate Contact (Optional)</label>
                <input
                  id="alternateContact"
                  type="text"
                  name="alternateContact"
                  value={formData.alternateContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter alternate contact details"
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div key="step3" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Company Profile</h3>
            <p className="text-gray-600 mb-6">Tell us about your company and its capabilities.</p>
            
            <div>
              <label htmlFor="companyOverview" className="block text-sm font-medium text-gray-700 mb-2">Company Overview *</label>
              <textarea
                id="companyOverview"
                name="companyOverview"
                value={formData.companyOverview}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="Provide a brief description of your company, including mission and vision"
              />
            </div>
            
            <div>
              <label htmlFor="coreBusiness" className="block text-sm font-medium text-gray-700 mb-2">Core Business Activities *</label>
              <textarea
                id="coreBusiness"
                name="coreBusiness"
                value={formData.coreBusiness}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="Describe your company's main products or services"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="totalEmployees" className="block text-sm font-medium text-gray-700 mb-2">Total Number of Employees *</label>
                <input
                  id="totalEmployees"
                  type="number"
                  name="totalEmployees"
                  value={formData.totalEmployees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="e.g., 150"
                />
              </div>
              
              <div>
                <label htmlFor="relevantExperience" className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience (Years) *</label>
                <input
                  id="relevantExperience"
                  type="number"
                  name="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="e.g., 10"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="pastClients" className="block text-sm font-medium text-gray-700 mb-2">Past Clients/Projects (Optional)</label>
              <textarea
                id="pastClients"
                name="pastClients"
                value={formData.pastClients}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="List notable clients or projects"
              />
            </div>
            
            <div>
              <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-2">Certifications (Optional)</label>
              <textarea
                id="certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="List relevant certifications or awards"
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div key="step4" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Proposal</h3>
            <p className="text-gray-600 mb-6">Describe your technical approach to this project.</p>
            
            <div>
              <label htmlFor="technicalApproach" className="block text-sm font-medium text-gray-700 mb-2">Technical Approach *</label>
              <textarea
                id="technicalApproach"
                name="technicalApproach"
                value={formData.technicalApproach}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="Describe your technical approach to the project"
              />
            </div>
            
            <div>
              <label htmlFor="methodology" className="block text-sm font-medium text-gray-700 mb-2">Methodology *</label>
              <textarea
                id="methodology"
                name="methodology"
                value={formData.methodology}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="Explain the methodology for project execution"
              />
            </div>
            
            <div>
              <label htmlFor="projectTimeline" className="block text-sm font-medium text-gray-700 mb-2">Project Timeline *</label>
              <textarea
                id="projectTimeline"
                name="projectTimeline"
                value={formData.projectTimeline}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="Provide a detailed project timeline"
              />
            </div>
            
            <div>
              <label htmlFor="keyPersonnel" className="block text-sm font-medium text-gray-700 mb-2">Key Personnel *</label>
              <textarea
                id="keyPersonnel"
                name="keyPersonnel"
                value={formData.keyPersonnel}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="List key team members and qualifications"
              />
            </div>
            
            <div>
              <label htmlFor="riskManagement" className="block text-sm font-medium text-gray-700 mb-2">Risk Management Plan *</label>
              <textarea
                id="riskManagement"
                name="riskManagement"
                value={formData.riskManagement}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="Describe risk management strategies"
              />
            </div>
          </div>
        );
      
      case 5:
        return (
          <div key="step5" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Proposal</h3>
            <p className="text-gray-600 mb-6">Provide detailed financial information for this tender.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="totalProposedAmount" className="block text-sm font-medium text-gray-700 mb-2">Total Proposed Amount (USD) *</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    id="totalProposedAmount"
                    type="number"
                    name="totalProposedAmount"
                    value={formData.totalProposedAmount}
                    onChange={handleInputChange}
                    className="w-full pl-7 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    required
                    placeholder="e.g., 50000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="validityPeriod" className="block text-sm font-medium text-gray-700 mb-2">Proposal Validity Period (Days) *</label>
                <input
                  id="validityPeriod"
                  type="number"
                  name="validityPeriod"
                  value={formData.validityPeriod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                  placeholder="e.g., 90"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="costBreakdown" className="block text-sm font-medium text-gray-700 mb-2">Cost Breakdown *</label>
              <textarea
                id="costBreakdown"
                name="costBreakdown"
                value={formData.costBreakdown}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="Provide detailed cost breakdown"
              />
            </div>
            
            <div>
              <label htmlFor="paymentTerms" className="block text-sm font-medium text-gray-700 mb-2">Payment Terms *</label>
              <textarea
                id="paymentTerms"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
                placeholder="Specify payment schedule"
              />
            </div>
            
            <div>
              <label htmlFor="additionalCosts" className="block text-sm font-medium text-gray-700 mb-2">Additional Costs (Optional)</label>
              <textarea
                id="additionalCosts"
                name="additionalCosts"
                value={formData.additionalCosts}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="List any additional costs"
              />
            </div>
          </div>
        );
      
      case 6:
        return (
          <div key="step6" className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Supporting Documents</h3>
            <p className="text-gray-600 mb-6">Upload all required supporting documents for your tender application.</p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="companyRegistration" className="block text-sm font-medium text-gray-700 mb-2">Company Registration Certificate *</label>
                <div className="flex items-center">
                  <label htmlFor="companyRegistration" className="cursor-pointer bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Choose File
                  </label>
                  <input
                    id="companyRegistration"
                    type="file"
                    onChange={(e) => handleFileChange(e, 'companyRegistration')}
                    className="hidden"
                    required
                  />
                  {formData.companyRegistration && <span className="ml-4 text-gray-700 truncate max-w-xs">{formData.companyRegistration.name}</span>}
                </div>
              </div>
              
              <div>
                <label htmlFor="taxCompliance" className="block text-sm font-medium text-gray-700 mb-2">Tax Compliance Certificate *</label>
                <div className="flex items-center">
                  <label htmlFor="taxCompliance" className="cursor-pointer bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Choose File
                  </label>
                  <input
                    id="taxCompliance"
                    type="file"
                    onChange={(e) => handleFileChange(e, 'taxCompliance')}
                    className="hidden"
                    required
                  />
                  {formData.taxCompliance && <span className="ml-4 text-gray-700 truncate max-w-xs">{formData.taxCompliance.name}</span>}
                </div>
              </div>
              
              <div>
                <label htmlFor="financialStatements" className="block text-sm font-medium text-gray-700 mb-2">Financial Statements (Last 2 years) *</label>
                <div className="flex items-center">
                  <label htmlFor="financialStatements" className="cursor-pointer bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Choose File
                  </label>
                  <input
                    id="financialStatements"
                    type="file"
                    onChange={(e) => handleFileChange(e, 'financialStatements')}
                    className="hidden"
                    required
                  />
                  {formData.financialStatements && <span className="ml-4 text-gray-700 truncate max-w-xs">{formData.financialStatements.name}</span>}
                </div>
              </div>
              
              <div>
                <label htmlFor="proposalDocument" className="block text-sm font-medium text-gray-700 mb-2">Detailed Proposal Document *</label>
                <div className="flex items-center">
                  <label htmlFor="proposalDocument" className="cursor-pointer bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Choose File
                  </label>
                  <input
                    id="proposalDocument"
                    type="file"
                    onChange={(e) => handleFileChange(e, 'proposalDocument')}
                    className="hidden"
                    required
                  />
                  {formData.proposalDocument && <span className="ml-4 text-gray-700 truncate max-w-xs">{formData.proposalDocument.name}</span>}
                </div>
              </div>
              
              <div>
                <label htmlFor="additionalDocuments" className="block text-sm font-medium text-gray-700 mb-2">Additional Supporting Documents (Optional)</label>
                <div className="flex items-center">
                  <label htmlFor="additionalDocuments" className="cursor-pointer bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Files
                  </label>
                  <input
                    id="additionalDocuments"
                    type="file"
                    multiple
                    onChange={handleAddDocument}
                    className="hidden"
                  />
                </div>
                
                {formData.additionalDocuments.length > 0 && (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-gray-600">Added documents:</p>
                    {formData.additionalDocuments.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-300">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-gray-700 text-sm truncate max-w-xs">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveDocument(index)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium p-1"
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
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Review & Submit</h3>
            <p className="text-gray-600 mb-6">Please review your information before submitting your tender proposal.</p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-300">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Review Your Submission</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-purple-600 font-medium mb-3 border-b pb-2">Organization Details</h5>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Name:</dt>
                      <dd className="text-gray-800 font-medium">{formData.organizationName || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Registration #:</dt>
                      <dd className="text-gray-800 font-medium">{formData.registrationNumber || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Tax ID:</dt>
                      <dd className="text-gray-800 font-medium">{formData.taxId || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Year Established:</dt>
                      <dd className="text-gray-800 font-medium">{formData.yearEstablished || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Legal Status:</dt>
                      <dd className="text-gray-800 font-medium">{formData.legalStatus || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Country:</dt>
                      <dd className="text-gray-800 font-medium">{formData.country || 'N/A'}</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-gray-600 mb-1">Address:</dt>
                      <dd className="text-gray-800 font-medium">{formData.address || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-purple-600 font-medium mb-3 border-b pb-2">Contact Information</h5>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Contact Person:</dt>
                      <dd className="text-gray-800 font-medium">{formData.contactName || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Position:</dt>
                      <dd className="text-gray-800 font-medium">{formData.contactPosition || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Email:</dt>
                      <dd className="text-gray-800 font-medium">{formData.contactEmail || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Phone:</dt>
                      <dd className="text-gray-800 font-medium">{formData.contactPhone || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Alternate Contact:</dt>
                      <dd className="text-gray-800 font-medium">{formData.alternateContact || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-purple-600 font-medium mb-3 border-b pb-2">Company Profile</h5>
                  <dl className="grid grid-cols-1 gap-3 text-sm">
                    <div>
                      <dt className="text-gray-600 mb-1">Overview:</dt>
                      <dd className="text-gray-800 font-medium">{formData.companyOverview || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 mb-1">Core Business:</dt>
                      <dd className="text-gray-800 font-medium">{formData.coreBusiness || 'N/A'}</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Employees:</dt>
                        <dd className="text-gray-800 font-medium">{formData.totalEmployees || 'N/A'}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Experience (Years):</dt>
                        <dd className="text-gray-800 font-medium">{formData.relevantExperience || 'N/A'}</dd>
                      </div>
                    </div>
                    <div>
                      <dt className="text-gray-600 mb-1">Past Clients:</dt>
                      <dd className="text-gray-800 font-medium">{formData.pastClients || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 mb-1">Certifications:</dt>
                      <dd className="text-gray-800 font-medium">{formData.certifications || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-purple-600 font-medium mb-3 border-b pb-2">Technical Proposal</h5>
                  <dl className="grid grid-cols-1 gap-3 text-sm">
                    <div>
                      <dt className="text-gray-600 mb-1">Approach:</dt>
                      <dd className="text-gray-800 font-medium">{formData.technicalApproach || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 mb-1">Methodology:</dt>
                      <dd className="text-gray-800 font-medium">{formData.methodology || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 mb-1">Timeline:</dt>
                      <dd className="text-gray-800 font-medium">{formData.projectTimeline || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 mb-1">Key Personnel:</dt>
                      <dd className="text-gray-800 font-medium">{formData.keyPersonnel || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 mb-1">Risk Management:</dt>
                      <dd className="text-gray-800 font-medium">{formData.riskManagement || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-purple-600 font-medium mb-3 border-b pb-2">Financial Proposal</h5>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Total Amount:</dt>
                      <dd className="text-gray-800 font-medium">{formData.totalProposedAmount ? `$${formData.totalProposedAmount}` : 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Validity Period:</dt>
                      <dd className="text-gray-800 font-medium">{formData.validityPeriod ? `${formData.validityPeriod} days` : 'N/A'}</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-gray-600 mb-1">Cost Breakdown:</dt>
                      <dd className="text-gray-800 font-medium">{formData.costBreakdown || 'N/A'}</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-gray-600 mb-1">Payment Terms:</dt>
                      <dd className="text-gray-800 font-medium">{formData.paymentTerms || 'N/A'}</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-gray-600 mb-1">Additional Costs:</dt>
                      <dd className="text-gray-800 font-medium">{formData.additionalCosts || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h5 className="text-purple-600 font-medium mb-3 border-b pb-2">Supporting Documents</h5>
                  <dl className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Company Registration:</dt>
                      <dd className="text-gray-800 font-medium truncate max-w-[50%]">{formData.companyRegistration?.name || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Tax Compliance:</dt>
                      <dd className="text-gray-800 font-medium truncate max-w-[50%]">{formData.taxCompliance?.name || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Financial Statements:</dt>
                      <dd className="text-gray-800 font-medium truncate max-w-[50%]">{formData.financialStatements?.name || 'N/A'}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Proposal Document:</dt>
                      <dd className="text-gray-800 font-medium truncate max-w-[50%]">{formData.proposalDocument?.name || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 mb-1">Additional Documents:</dt>
                      <dd className="text-gray-800 font-medium">
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
            
            <div className="space-y-4 pt-4 border-t border-gray-300">
              <div className="flex items-start space-x-3">
                <input
                  id="agreeTerms"
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-5 w-5 rounded border-gray-300 bg-white text-purple-600 focus:ring-purple-500"
                  required
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-700">
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
                  className="mt-1 h-5 w-5 rounded border-gray-300 bg-white text-purple-600 focus:ring-purple-500"
                  required
                />
                <label htmlFor="agreeAccuracy" className="text-sm text-gray-700">
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
    <div className="min-h-screen py-12 bg-[#ebe1f2]">
      <Navbar />
      <br /><br />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Submit Tender Proposal</h1>
          <p className="text-gray-600">Tender Reference: ICT/{tenderId.padStart(4, '0')}/2023</p>
        </div>

        {/* Progress Steps */}
        <Card className="bg-white border border-gray-300 shadow-sm mb-8 p-6">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center flex-1 relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 ${
                    currentStep === step.id
                      ? 'bg-purple-600 text-white border-2 border-white shadow'
                      : currentStep > step.id
                      ? 'bg-green-500 text-white border-2 border-white shadow'
                      : 'bg-gray-200 text-gray-500 border-2 border-white'
                  }`}
                >
                  {currentStep > step.id ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`text-xs mt-2 text-center ${
                    currentStep >= step.id ? 'text-gray-800 font-medium' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
                {step.id < steps.length && (
                  <div className={`absolute top-5 left-1/2 w-full h-0.5 ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-300'} -z-1`}></div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Form */}
        <Card className="bg-white border border-gray-300 shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            {renderStep()}
            
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-300">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
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
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center"
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  disabled={!formData.agreeTerms || !formData.agreeAccuracy}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Submit Proposal
                </Button>
              )}
            </div>
          </form>
        </Card>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}