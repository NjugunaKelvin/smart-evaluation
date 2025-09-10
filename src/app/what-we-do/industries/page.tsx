/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '@/components/Navbar';
import { 
  FaHeartbeat, 
  FaLeaf, 
  FaGraduationCap, 
  FaMicrochip, 
  FaHandsHelping, 
  FaIndustry,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const IndustriesServed = () => {
  const industries = [
    {
      id: 1,
      name: "Healthcare & Biotechnology",
      description: "We help medical practices, research institutions, and health tech companies secure funding for innovation, equipment, and service expansion.",
      features: ["Clinical Research Grants", "Medical Equipment Funding", "Healthcare Innovation Programs"],
      stats: ["$350M+ Secured", "120+ Healthcare Clients", "92% Success Rate"],
      icon: <FaHeartbeat className="text-blue-400" />,
    },
    {
      id: 2,
      name: "Clean Energy & Sustainability",
      description: "Supporting renewable energy projects, green technology development, and sustainable infrastructure initiatives through targeted funding opportunities.",
      features: ["Renewable Energy Grants", "Carbon Reduction Funds", "Sustainable Development Programs"],
      stats: ["$280M+ Secured", "85+ Energy Projects", "87% Success Rate"],
      icon: <FaLeaf className="text-blue-400" />,
    },
    {
      id: 3,
      name: "Education & Research",
      description: "Assisting educational institutions, researchers, and edtech companies in securing grants, scholarships, and program funding.",
      features: ["Research Grants", "Educational Program Funding", "Technology Infrastructure Grants"],
      stats: ["$190M+ Secured", "140+ Education Clients", "94% Success Rate"],
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      id: 4,
      name: "Technology & Innovation",
      description: "Empowering tech startups and established companies to secure R&D funding, innovation grants, and technology commercialization support.",
      features: ["R&D Tax Credits", "Innovation Grants", "Startup Funding Programs"],
      stats: ["$420M+ Secured", "200+ Tech Companies", "89% Success Rate"],
      icon: <FaMicrochip className="text-blue-400" />,
    },
    {
      id: 5,
      name: "Community Development",
      description: "Helping non-profits, community organizations, and municipal agencies access funding for social programs, infrastructure, and public services.",
      features: ["Community Development Grants", "Social Program Funding", "Public Infrastructure Funds"],
      stats: ["$175M+ Secured", "110+ Community Organizations", "96% Success Rate"],
      icon: <FaHandsHelping className="text-blue-400" />,
    },
    {
      id: 6,
      name: "Manufacturing & Industry",
      description: "Supporting manufacturing companies in securing grants for modernization, expansion, workforce development, and sustainable practices.",
      features: ["Modernization Grants", "Export Development Funds", "Workforce Training Programs"],
      stats: ["$310M+ Secured", "95+ Manufacturing Clients", "90% Success Rate"],
      icon: <FaIndustry className="text-blue-400" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      
      <div className="max-w-7xl mx-auto mt-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industries <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">Served</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
            SmartEval supports a diverse range of industries in securing funding and tender opportunities
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-gray-800 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Industry Header */}
              <div className="p-5 bg-gray-700/30 flex items-center">
                <div className="p-3 rounded-lg bg-gray-700">
                  {industry.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">{industry.name}</h3>
              </div>
              
              {/* Content */}
              <div className="flex-1 px-5 py-6">
                <p className="text-gray-300 mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-white mb-3">Key Funding Areas</h4>
                  <ul className="space-y-2">
                    {industry.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <p className="ml-3 text-sm text-gray-400">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Stats */}
                <div className="pt-5 border-t border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {industry.stats.map((stat, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="px-5 py-4 bg-gray-800/50">
                <button className="w-full flex justify-center items-center px-4 py-3 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 group">
                  Explore Opportunities
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Don't see your industry?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Our platform supports organizations across all sectors. Contact us to learn how we can help your specific industry.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center">
            Contact Our Team
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;