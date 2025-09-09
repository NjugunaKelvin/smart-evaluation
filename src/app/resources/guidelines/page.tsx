/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// src/pages/Resources/ProposalGuidelines.tsx
'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const ProposalGuidelines = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    deadline: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
    setIsFormOpen(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      deadline: '',
      budget: '',
      message: ''
    });
  };

  const guidelinesSections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'planning', title: 'Planning Phase' },
    { id: 'writing', title: 'Writing Process' },
    { id: 'budgeting', title: 'Budget Development' },
    { id: 'submission', title: 'Submission Tips' },
    { id: 'evaluation', title: 'Evaluation Criteria' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <Navbar />
      <br /><br />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proposal <span className="text-blue-500">Writing Guidelines</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive guidance to help you create compelling, professional proposals that stand out to funders, clients, and stakeholders.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-gray-800 rounded-lg p-5 sticky top-24">
              <h2 className="text-lg font-bold text-white mb-4">Guidelines Sections</h2>
              <nav className="space-y-2">
                {guidelinesSections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-bold text-white mb-3">Need Professional Help?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Our expert writers can craft a compelling proposal tailored to your specific needs.
                </p>
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition-colors"
                >
                  Hire a Writer
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-gray-800 rounded-lg p-6 md:p-8">
              {/* Introduction Section */}
              {activeSection === 'introduction' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Introduction to Proposal Writing</h2>
                  <p className="text-gray-400 mb-6">
                    Proposal writing is a critical skill for securing funding, winning contracts, and advancing projects. 
                    A well-crafted proposal demonstrates your understanding of the problem, presents a compelling solution, 
                    and establishes your credibility to deliver results.
                  </p>
                  
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-5 mb-6">
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Key Principles</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Understand your audience and tailor your proposal to their priorities</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Clearly define the problem and your proposed solution</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Provide evidence of your capability to deliver results</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Create a realistic and justified budget</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Follow all formatting and submission guidelines precisely</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Types of Proposals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Grant Proposals</h4>
                      <p className="text-gray-400 text-sm">Seeking funding from foundations, government agencies, or corporations for projects or programs.</p>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Business Proposals</h4>
                      <p className="text-gray-400 text-sm">Offering products, services, or partnerships to potential clients or collaborators.</p>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Project Proposals</h4>
                      <p className="text-gray-400 text-sm">Proposing new initiatives, research, or internal projects within an organization.</p>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Response to RFPs</h4>
                      <p className="text-gray-400 text-sm">Formal responses to Requests for Proposals from government or corporate entities.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Planning Phase Section */}
              {activeSection === 'planning' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Planning Your Proposal</h2>
                  <p className="text-gray-400 mb-6">
                    Effective planning is the foundation of a successful proposal. Before you start writing, invest time in thorough research and strategy development.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Research Steps</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">1</div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Understand the Funder</h4>
                        <p className="text-gray-400 text-sm">Research the organization's mission, priorities, past funded projects, and application guidelines.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">2</div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Analyze the Problem</h4>
                        <p className="text-gray-400 text-sm">Gather data and evidence to clearly define and quantify the problem your project will address.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">3</div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Develop Your Solution</h4>
                        <p className="text-gray-400 text-sm">Design a comprehensive approach with clear objectives, activities, and measurable outcomes.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">4</div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Assess Resources</h4>
                        <p className="text-gray-400 text-sm">Identify what personnel, equipment, and partnerships you'll need to implement your project.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Proposal Timeline</h3>
                  <div className="bg-gray-700/30 p-5 rounded-lg mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-gray-400">Start Date</div>
                      <div className="text-sm text-gray-400">Deadline</div>
                    </div>
                    <div className="relative h-2 bg-gray-600 rounded-full mb-6">
                      <div className="absolute h-full bg-blue-600 rounded-full w-3/4"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div className="text-center">
                        <div className="text-blue-400 font-medium">Research</div>
                        <div className="text-gray-400">Week 1-2</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-medium">Outline</div>
                        <div className="text-gray-400">Week 3</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-medium">Drafting</div>
                        <div className="text-gray-400">Week 4-5</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-medium">Review</div>
                        <div className="text-gray-400">Week 6</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Writing Process Section */}
              {activeSection === 'writing' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">The Writing Process</h2>
                  <p className="text-gray-400 mb-6">
                    A well-structured proposal tells a compelling story about your project and why it deserves support. 
                    Follow these guidelines to create a persuasive and professional document.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Essential Components</h3>
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Executive Summary</h4>
                      <p className="text-gray-400 text-sm">A concise overview of your entire proposal (typically 1 page). This is often the first section read and should capture the reader's attention immediately.</p>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Statement of Need</h4>
                      <p className="text-gray-400 text-sm">Clearly define the problem or opportunity, supported by data and evidence. Explain why this issue matters and requires immediate attention.</p>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Project Description</h4>
                      <p className="text-gray-400 text-sm">Detail your approach, objectives, methods, timeline, and expected outcomes. Be specific about what will be accomplished and how.</p>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Organizational Information</h4>
                      <p className="text-gray-400 text-sm">Establish your credibility by describing your organization's mission, history, and relevant experience. Include key personnel qualifications.</p>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Budget</h4>
                      <p className="text-gray-400 text-sm">Provide a detailed financial plan that justifies all expenses. Include both income and expenditure projections with clear explanations.</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Writing Tips</h3>
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-5">
                    <ul className="text-gray-400 space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Use clear, concise language and avoid jargon unless clearly defined</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Tailor your writing style to your audience's level of expertise</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Use headings, subheadings, and bullet points to improve readability</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Support claims with data, statistics, and evidence</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Proofread meticulously to eliminate errors and ensure consistency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Additional sections would continue here... */}
              {activeSection !== 'introduction' && activeSection !== 'planning' && activeSection !== 'writing' && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Content Coming Soon</h3>
                  <p className="text-gray-500">We're developing comprehensive guidelines for this section.</p>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gray-800 rounded-lg text-center border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Need Professional Proposal Writing Help?</h3>
              <p className="text-gray-400 mb-5 max-w-2xl mx-auto">
                Our team of expert writers has years of experience creating winning proposals for various industries and funding sources.
              </p>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-md transition-colors inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Hire a Professional Writer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hire a Writer Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl max-w-md w-full border border-gray-700">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Hire a Professional Writer</h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-1">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a project type</option>
                    <option value="grant">Grant Proposal</option>
                    <option value="business">Business Proposal</option>
                    <option value="project">Project Proposal</option>
                    <option value="rfp">RFP Response</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-400 mb-1">Deadline</label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-1">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000+">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project, requirements, and any specific guidelines..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition-colors"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalGuidelines;