/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '@/components/Navbar';

const PartnersAlliances = () => {
  const partnerTiers = [
    {
      name: "Strategic Partners",
      description: "Organizations we work with closely to develop integrated solutions",
      partners: [
        { name: "Global Funding Network", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "TechForGood Foundation", logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Innovate Capital Group", logo: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
      ]
    },
    {
      name: "Technology Partners",
      description: "Companies whose technologies complement and enhance our platform",
      partners: [
        { name: "CloudSecure Inc.", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "DataAnalytics Pro", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "DocuSign Enterprises", logo: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
      ]
    },
    {
      name: "Implementation Partners",
      description: "Certified consultants who help organizations implement Smarteval",
      partners: [
        { name: "Business Solutions Group", logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "GrantExperts Worldwide", logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "ProConnect Consultants", logo: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Partners & Alliances</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional value to our clients
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-400">Collaborating for Success</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-750 p-8 rounded-xl text-center">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategic Alliances</h3>
              <p className="text-gray-300">
                Long-term partnerships focused on joint innovation and developing comprehensive 
                solutions that address complex challenges in funding acquisition.
              </p>
            </div>
            
            <div className="bg-gray-750 p-8 rounded-xl text-center">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Technology Integration</h3>
              <p className="text-gray-300">
                Seamless connections with complementary platforms that extend the functionality 
                of Smarteval and create a more powerful ecosystem for our users.
              </p>
            </div>
            
            <div className="bg-gray-750 p-8 rounded-xl text-center">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Implementation Excellence</h3>
              <p className="text-gray-300">
                Certified experts who ensure successful deployment and adoption of Smarteval, 
                maximizing value for organizations of all sizes and complexities.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-10 rounded-xl">
            <p className="text-xl text-gray-300 text-center">
              At Smarteval, we believe that strategic partnerships are essential to delivering 
              comprehensive solutions to our clients. Our alliance partners extend the value of 
              our platform through integrated technologies, specialized expertise, and expanded 
              market reach.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Partner Network</h2>
          
          <div className="space-y-20">
            {partnerTiers.map((tier, index) => (
              <div key={index} className="pb-12 border-b border-gray-700 last:border-0 last:pb-0">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-green-400">{tier.name}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{tier.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {tier.partners.map((partner, pIndex) => (
                    <div key={pIndex} className="bg-gray-800 p-6 rounded-xl group hover:bg-gray-750 transition-colors">
                      <div className="mb-6 h-40 overflow-hidden rounded-lg">
                        <div 
                          className="h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                          style={{ backgroundImage: `url(${partner.logo})` }}
                        ></div>
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-center">{partner.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Success Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden">
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
              ></div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Global Funding Network Integration</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our partnership with Global Funding Network has enabled seamless access to thousands of 
                funding opportunities directly through the Smarteval platform. This integration has 
                helped our clients discover 47% more relevant opportunities and reduce research time by 65%.
              </p>
              <div className="bg-gray-750 p-6 rounded-xl">
                <p className="text-gray-300 italic">
                  "The integration between Smarteval and Global Funding Network has transformed how 
                  we identify and pursue funding opportunities. What used to take weeks now happens 
                  in minutes with significantly better results."
                </p>
                <p className="text-gray-400 mt-4">- Sarah Johnson, Director of Development at Community Health Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Interested in partnering with Smarteval? We're always looking for organizations 
            that share our commitment to excellence and innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-400">For Technology Companies</h3>
              <p className="text-gray-300 mb-6">
                Integrate your solution with Smarteval to create a more comprehensive offering 
                for mutual clients and expand your market reach.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors w-full">
                Technology Partnership
              </button>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-400">For Consulting Firms</h3>
              <p className="text-gray-300 mb-6">
                Become a certified implementation partner and help organizations successfully 
                deploy and maximize the value of Smarteval.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors w-full">
                Implementation Partnership
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800 p-10 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Why Partner With Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
                <p className="text-gray-300">Growth in partner revenue over past 2 years</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">92%</div>
                <p className="text-gray-300">Partner satisfaction rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">48</div>
                <p className="text-gray-300">Countries with active partner implementations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersAlliances;