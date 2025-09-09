/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '@/components/Navbar';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Evaluation System",
      description: "Our proprietary algorithm evaluates your proposals against funding criteria before submission, dramatically increasing your success rate.",
      icon: (
        <svg className="h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Comprehensive Funding Database",
      description: "Access thousands of current tenders, grants, and funding opportunities from government agencies, foundations, and private organizations.",
      icon: (
        <svg className="h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Streamlined Application Process",
      description: "Our platform guides you through complex application requirements with intuitive tools and templates that save time and reduce errors.",
      icon: (
        <svg className="h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Professional Proposal Enhancement",
      description: "Leverage our expert insights and editing tools to transform your proposals into compelling, funder-ready documents.",
      icon: (
        <svg className="h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Deadline Management System",
      description: "Never miss an application deadline with our intelligent tracking and notification system that keeps your team on schedule.",
      icon: (
        <svg className="h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Dedicated Support Team",
      description: "Get expert guidance from our team of funding specialists who understand the intricacies of tender and grant applications.",
      icon: (
        <svg className="h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    }
  ];

  const stats = [
    { label: "Successful Applications", value: "4,200+" },
    { label: "Funding Secured", value: "$1.8B+" },
    { label: "Client Success Rate", value: "91%" },
    { label: "Active Opportunities", value: "12,500+" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <Navbar />
        <br /><br />
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose SmartEval
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            The intelligent platform designed to maximize your success in securing tenders, grants, and funding
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-12">
            <h2 className="text-2xl font-bold text-white text-center">Proven Results</h2>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">Ready to transform your funding strategy?</h2>
              <p className="mt-4 text-lg text-gray-300">
                Join thousands of service providers who have increased their success rates and secured more funding with SmartEval.
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Start Your Free Trial
                </button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-medium text-white text-center">What our clients say</h3>
                <div className="mt-4">
                  <p className="text-gray-400 italic">
                    "SmartEval transformed our approach to grant applications. We've increased our success rate by 65% and secured over $3M in funding that we would have otherwise missed."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="ml-4">
                      <p className="text-sm font-medium text-white">Sarah Johnson</p>
                      <p className="text-sm text-gray-400">Director, Innovation Nonprofit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;