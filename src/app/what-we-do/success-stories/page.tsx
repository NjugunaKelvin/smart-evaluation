import React from 'react';
import Navbar from '@/components/Navbar';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      title: "GreenTech Solutions Secures $2M in Clean Energy Grants",
      description: "Through SmartEval, GreenTech Solutions successfully applied for and secured significant funding to expand their solar panel manufacturing capabilities, creating 45 new jobs in the process.",
      metrics: ["$2M Funding", "45 Jobs Created", "6 Month Process"],
      category: "Clean Energy"
    },
    {
      id: 2,
      title: "MedInnovate Receives Healthcare Innovation Grant",
      description: "A digital health startup used SmartEval's proposal optimization tools to win a highly competitive healthcare innovation grant, enabling them to bring their remote patient monitoring system to market.",
      metrics: ["$1.5M Award", "92% Success Score", "3 Proposals"],
      category: "Healthcare"
    },
    {
      id: 3,
      title: "UrbanFarm Collective Wins Municipal Contract",
      description: "This urban agriculture initiative leveraged SmartEval's tender application system to secure a 5-year contract with their city government, providing fresh produce to school districts and community centers.",
      metrics: ["5-Year Contract", "12 Schools Served", "100% Compliance"],
      category: "Agriculture"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <Navbar />
        <br /><br />
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Success Stories
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Discover how organizations have achieved remarkable results with SmartEval
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {successStories.map((story) => (
            <div key={story.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-medium bg-indigo-500 text-white">
                    {story.category}
                  </span>
                  <div className="flex space-x-4">
                    {story.metrics.map((metric, index) => (
                      <span key={index} className="inline-flex items-center text-sm text-gray-400">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{story.title}</h3>
                <p className="mt-2 text-gray-400">{story.description}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Read full case study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to create your success story?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Join thousands of service providers who have achieved their funding goals with SmartEval
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;