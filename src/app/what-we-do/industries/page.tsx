/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '@/components/Navbar';

const IndustriesServed = () => {
  const industries = [
    {
      id: 1,
      name: "Healthcare & Biotechnology",
      description: "We help medical practices, research institutions, and health tech companies secure funding for innovation, equipment, and service expansion.",
      features: ["Clinical Research Grants", "Medical Equipment Funding", "Healthcare Innovation Programs"],
      stats: ["$350M+ Secured", "120+ Healthcare Clients", "92% Success Rate"]
    },
    {
      id: 2,
      name: "Clean Energy & Sustainability",
      description: "Supporting renewable energy projects, green technology development, and sustainable infrastructure initiatives through targeted funding opportunities.",
      features: ["Renewable Energy Grants", "Carbon Reduction Funds", "Sustainable Development Programs"],
      stats: ["$280M+ Secured", "85+ Energy Projects", "87% Success Rate"]
    },
    {
      id: 3,
      name: "Education & Research",
      description: "Assisting educational institutions, researchers, and edtech companies in securing grants, scholarships, and program funding.",
      features: ["Research Grants", "Educational Program Funding", "Technology Infrastructure Grants"],
      stats: ["$190M+ Secured", "140+ Education Clients", "94% Success Rate"]
    },
    {
      id: 4,
      name: "Technology & Innovation",
      description: "Empowering tech startups and established companies to secure R&D funding, innovation grants, and technology commercialization support.",
      features: ["R&D Tax Credits", "Innovation Grants", "Startup Funding Programs"],
      stats: ["$420M+ Secured", "200+ Tech Companies", "89% Success Rate"]
    },
    {
      id: 5,
      name: "Community Development",
      description: "Helping non-profits, community organizations, and municipal agencies access funding for social programs, infrastructure, and public services.",
      features: ["Community Development Grants", "Social Program Funding", "Public Infrastructure Funds"],
      stats: ["$175M+ Secured", "110+ Community Organizations", "96% Success Rate"]
    },
    {
      id: 6,
      name: "Manufacturing & Industry",
      description: "Supporting manufacturing companies in securing grants for modernization, expansion, workforce development, and sustainable practices.",
      features: ["Modernization Grants", "Export Development Funds", "Workforce Training Programs"],
      stats: ["$310M+ Secured", "95+ Manufacturing Clients", "90% Success Rate"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <Navbar />
        <br /><br />
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Industries Served
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            SmartEval supports a diverse range of industries in securing funding and tender opportunities
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gray-800">
              <div className="flex-1 px-6 py-8">
                <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                <p className="mt-3 text-base text-gray-400">{industry.description}</p>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-white">Key Funding Areas</h4>
                  <ul className="mt-2 space-y-2">
                    {industry.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-2 text-sm text-gray-400">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {industry.stats.map((stat, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Explore Opportunities
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-white">Don't see your industry?</h2>
            <p className="mt-4 text-lg text-gray-300">
              Our platform supports organizations across all sectors. Contact us to learn how we can help your specific industry.
            </p>
            <div className="mt-6">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;