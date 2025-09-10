import React from 'react';
import Navbar from '@/components/Navbar';
import { FaLeaf, FaHeartbeat, FaSeedling, FaArrowRight, FaTrophy, FaUsers, FaChartLine } from 'react-icons/fa';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      title: "GreenTech Solutions Secures $2M in Clean Energy Grants",
      description: "Through SmartEval, GreenTech Solutions successfully applied for and secured significant funding to expand their solar panel manufacturing capabilities, creating 45 new jobs in the process.",
      metrics: [
        { value: "$2M", label: "Funding", icon: <FaTrophy /> },
        { value: "45", label: "Jobs Created", icon: <FaUsers /> },
        { value: "92%", label: "Success Score", icon: <FaChartLine /> }
      ],
      category: "Clean Energy",
      icon: <FaLeaf className="text-green-400" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "MedInnovate Receives Healthcare Innovation Grant",
      description: "A digital health startup used SmartEval's proposal optimization tools to win a highly competitive healthcare innovation grant, enabling them to bring their remote patient monitoring system to market.",
      metrics: [
        { value: "$1.5M", label: "Award", icon: <FaTrophy /> },
        { value: "92%", label: "Success Score", icon: <FaChartLine /> },
        { value: "3", label: "Proposals", icon: <FaUsers /> }
      ],
      category: "Healthcare",
      icon: <FaHeartbeat className="text-red-400" />,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "UrbanFarm Collective Wins Municipal Contract",
      description: "This urban agriculture initiative leveraged SmartEval's tender application system to secure a 5-year contract with their city government, providing fresh produce to school districts and community centers.",
      metrics: [
        { value: "5-Year", label: "Contract", icon: <FaTrophy /> },
        { value: "12", label: "Schools Served", icon: <FaUsers /> },
        { value: "100%", label: "Compliance", icon: <FaChartLine /> }
      ],
      category: "Agriculture",
      icon: <FaSeedling className="text-amber-400" />,
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      
      <div className="max-w-7xl mx-auto mt-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Stories</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
            Discover how organizations have achieved remarkable results with SmartEval
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {successStories.map((story) => (
            <div 
              key={story.id} 
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${story.color} p-4 flex items-center justify-between`}>
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full">
                    {story.icon}
                  </div>
                  <span className="ml-3 text-white font-semibold">{story.category}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{story.title}</h3>
                <p className="text-gray-300 mb-6">{story.description}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {story.metrics.map((metric, index) => (
                    <div key={index} className="text-center bg-gray-700 bg-opacity-50 rounded-lg p-3">
                      <div className="text-indigo-300 flex justify-center mb-1">
                        {metric.icon}
                      </div>
                      <div className="text-white font-bold">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-700 bg-opacity-50 hover:bg-opacity-70 text-white rounded-lg transition-all duration-300 group">
                  Read full case study
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to create your success story?
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
            Join thousands of service providers who have achieved their funding goals with SmartEval
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1 inline-flex items-center">
            Get Started Today
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;