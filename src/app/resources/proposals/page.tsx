/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/Resources/ProposalTemplates.tsx
'use client'
import React, { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`templates-tabpanel-${index}`}
      aria-labelledby={`templates-tab-${index}`}
      {...other}
    >
      {value === index && <div className="py-6">{children}</div>}
    </div>
  );
}

const ProposalTemplates = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleOpenDialog = (template: any) => {
    setSelectedTemplate(template);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredTemplates = (templates: any[]) => {
    if (!searchQuery) return templates;
    return templates.filter(template => 
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const grantTemplates = [
    {
      id: 1,
      title: 'Research Grant Proposal',
      category: 'Academic',
      image: '/1.jpg',
      description: 'Comprehensive template for academic research funding applications with sections for literature review, methodology, and budget.',
      pages: 12,
      downloads: '1.5K',
      rating: 4.8,
      format: 'DOCX',
      price: 'Free'
    },
    {
      id: 2,
      title: 'Nonprofit Program Grant',
      category: 'Nonprofit',
      image: '/1.jpg',
      description: 'Template designed for nonprofit organizations seeking program funding, including logic model and evaluation plan.',
      pages: 15,
      downloads: '2.3K',
      rating: 4.9,
      format: 'DOCX',
      price: 'Free'
    },
    {
      id: 3,
      title: 'Federal Grant Application',
      category: 'Government',
      image: '/1.jpg',
      description: 'Structured template meeting federal grant requirements with all necessary sections and compliance documentation.',
      pages: 25,
      downloads: '980',
      rating: 4.7,
      format: 'PDF',
      price: 'Premium'
    },
    {
      id: 4,
      title: 'Arts & Culture Grant',
      category: 'Arts',
      image: '/1.jpg',
      description: 'Specialized template for arts organizations and individual artists applying for cultural funding.',
      pages: 10,
      downloads: '1.2K',
      rating: 4.6,
      format: 'DOCX',
      price: 'Free'
    },
  ];

  const businessTemplates = [
    {
      id: 1,
      title: 'Startup Funding Proposal',
      category: 'Business',
      image: '/images/home/bg3.jpg',
      description: 'Comprehensive business proposal for securing startup funding from investors or venture capital firms.',
      pages: 18,
      downloads: '3.4K',
      rating: 4.9,
      format: 'DOCX',
      price: 'Premium'
    },
    {
      id: 2,
      title: 'Project Proposal',
      category: 'Business',
      image: '/images/home/bg3.jpg',
      description: 'Professional project proposal template with timeline, deliverables, and budget sections.',
      pages: 8,
      downloads: '5.1K',
      rating: 4.7,
      format: 'DOCX',
      price: 'Free'
    },
    {
      id: 3,
      title: 'Consulting Services Proposal',
      category: 'Business',
      image: '/images/home/bg3.jpg',
      description: 'Template for consulting firms to propose services, including methodology, team bios, and case studies.',
      pages: 14,
      downloads: '2.8K',
      rating: 4.8,
      format: 'DOCX',
      price: 'Free'
    },
    {
      id: 4,
      title: 'Partnership Proposal',
      category: 'Business',
      image: '/images/home/bg3.jpg',
      description: 'Strategic partnership proposal template outlining mutual benefits and collaboration framework.',
      pages: 9,
      downloads: '1.9K',
      rating: 4.5,
      format: 'DOCX',
      price: 'Premium'
    },
  ];

  const tenderTemplates = [
    {
      id: 1,
      title: 'Government Tender Response',
      category: 'Government',
      image: '/2.jpg',
      description: 'Comprehensive template for responding to government tender opportunities with compliance checklist.',
      pages: 22,
      downloads: '1.7K',
      rating: 4.8,
      format: 'DOCX',
      price: 'Premium'
    },
    {
      id: 2,
      title: 'Construction Bid Proposal',
      category: 'Construction',
      image: '/2.jpg',
      description: 'Specialized template for construction companies bidding on projects, including safety plans and timelines.',
      pages: 16,
      downloads: '1.2K',
      rating: 4.6,
      format: 'DOCX',
      price: 'Premium'
    },
    {
      id: 3,
      title: 'IT Services RFP Response',
      category: 'Technology',
      image: '/2.jpg',
      description: 'Template for responding to IT services RFPs with technical specifications and implementation plan.',
      pages: 13,
      downloads: '2.1K',
      rating: 4.7,
      format: 'DOCX',
      price: 'Free'
    },
  ];

  const TemplateCard = ({ template }: { template: any }) => (
    <div className="flex flex-col rounded-lg bg-gray-800 overflow-hidden shadow-lg border border-gray-700 h-full">
      <div className="relative h-40">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            template.price === 'Free' 
              ? 'bg-green-600 text-white' 
              : 'bg-yellow-500 text-gray-900'
          }`}>
            {template.price}
          </span>
        </div>
        <div
          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => handleOpenDialog(template)}
        >
          <span className="text-white font-medium bg-blue-600 px-3 py-1.5 rounded-md text-sm">
            Preview Template
          </span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white">
            {template.title}
          </h3>
          <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
            {template.format}
          </span>
        </div>
        <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded mb-3">
          {template.category}
        </span>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
          {template.description}
        </p>
        <div className="flex items-center text-sm text-gray-400 justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{template.pages} pages</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{template.downloads}</span>
            </div>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{template.rating}</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => handleOpenDialog(template)}
            className="flex-1 border border-blue-600 text-blue-500 font-medium py-2 rounded-md flex items-center justify-center text-sm hover:bg-blue-600/10 transition-colors"
          >
            Preview
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md flex items-center justify-center text-sm transition-colors">
            Download
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proposal <span className="text-blue-500">Templates</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access professionally designed templates to create winning proposals for grants, business projects, and tenders.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex justify-center w-full md:w-auto">
            <div className="inline-flex rounded-md bg-gray-800 p-1">
              {['Grant Proposals', 'Business Proposals', 'Tender Documents'].map((tab, index) => (
                <button
                  key={index}
                  onClick={(e) => handleTabChange(e, index)}
                  className={`py-2 px-4 text-sm font-medium rounded-md transition-all ${
                    tabValue === index
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full md:w-64 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <TabPanel value={tabValue} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTemplates(grantTemplates).map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTemplates(businessTemplates).map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTemplates(tenderTemplates).map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </TabPanel>

        <div className="mt-12 p-6 bg-gray-800 rounded-lg shadow-lg text-center border border-blue-500/20">
          <h4 className="text-xl font-bold text-white mb-3">
            Need a Custom Template?
          </h4>
          <p className="text-gray-400 mb-5 text-sm max-w-2xl mx-auto">
            We can develop tailored proposal templates specifically designed for your industry and requirements.
          </p>
          <button className="border border-blue-600 text-blue-500 font-medium py-2 px-5 rounded-md text-sm inline-flex items-center space-x-1 hover:bg-blue-600/10 transition-colors">
            <span>Request Custom Template</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {openDialog && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="relative">
                <button
                  onClick={handleCloseDialog}
                  className="absolute top-4 right-4 text-white bg-gray-900 rounded-full p-1 hover:bg-gray-700 transition-colors z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {selectedTemplate && (
                  <div>
                    <div className="relative h-56">
                      <img
                        src={selectedTemplate.image}
                        alt={selectedTemplate.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4">
                        <h2 className="text-2xl font-bold text-white">
                          {selectedTemplate.title}
                        </h2>
                        <span className="inline-block bg-gray-700 text-gray-300 text-sm px-2 py-1 rounded mt-2">
                          {selectedTemplate.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-700 p-3 rounded-md">
                          <p className="text-gray-400 text-xs mb-1">Format</p>
                          <p className="text-white font-medium text-sm">{selectedTemplate.format}</p>
                        </div>
                        <div className="bg-gray-700 p-3 rounded-md">
                          <p className="text-gray-400 text-xs mb-1">Pages</p>
                          <p className="text-white font-medium text-sm">{selectedTemplate.pages}</p>
                        </div>
                        <div className="bg-gray-700 p-3 rounded-md">
                          <p className="text-gray-400 text-xs mb-1">Downloads</p>
                          <p className="text-white font-medium text-sm">{selectedTemplate.downloads}</p>
                        </div>
                        <div className="bg-gray-700 p-3 rounded-md">
                          <p className="text-gray-400 text-xs mb-1">Rating</p>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-white font-medium text-sm">{selectedTemplate.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                        {selectedTemplate.description}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-white mb-3">Template Includes:</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                          <li className="flex items-start">
                            <svg className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Professional layout and formatting
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            All necessary sections for this proposal type
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Placeholder text and instructions
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Budget tables and timelines (if applicable)
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Easy-to-customize structure
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="flex-1 border border-blue-600 text-blue-500 font-medium py-2 rounded-md text-sm hover:bg-blue-600/10 transition-colors">
                          Preview Full Template
                        </button>
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md text-sm transition-colors">
                          Download Template
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalTemplates;