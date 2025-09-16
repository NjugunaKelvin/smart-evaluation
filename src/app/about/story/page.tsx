/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '@/components/Navbar';

const OurStory = () => {
  return (
    <div className="bg-gray-900 text-white">
    <Navbar />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Revolutionizing how organizations secure funding and opportunities
          </p>
        </div>
      </section>

      <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">The Beginning</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Smarteval was founded in 2018 with a simple yet ambitious mission: to revolutionize how organizations 
                apply for and manage proposals, grants, funding opportunities, and tenders.
              </p>
              <p className="text-lg leading-relaxed">
                Our founders, with decades of combined experience in both the public and private sectors, recognized 
                the inefficiencies in traditional application processes that were preventing great ideas from receiving funding.
              </p>
              <p className="text-lg leading-relaxed">
                What started as a conversation between frustrated professionals grew into a determined effort to build 
                solutions that would eliminate these barriers for organizations worldwide.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-full min-h-[400px] rounded-2xl overflow-hidden">
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <div className="relative h-[60vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white max-w-4xl px-4">
            Transforming obstacles into opportunities
          </h3>
        </div>
      </div>

      <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">The Challenge We Faced</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-750 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Inefficient Processes</h3>
              <p className="text-gray-300">
                Organizations were spending countless hours navigating complex application processes, 
                often with inconsistent formatting requirements and tight deadlines. The manual effort 
                required was overwhelming and prone to errors.
              </p>
            </div>
            
            <div className="bg-gray-750 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Resource Drain</h3>
              <p className="text-gray-300">
                Valuable resources were being wasted on administrative tasks rather than focusing on 
                creating compelling proposals that could make a real difference. This was particularly 
                challenging for smaller organizations with limited staff.
              </p>
            </div>
            
            <div className="bg-gray-750 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Missed Opportunities</h3>
              <p className="text-gray-300">
                Many worthy projects never received funding simply because the application process 
                was too complex or time-consuming. Great ideas were being lost in paperwork and bureaucracy.
              </p>
            </div>
            
            <div className="bg-gray-750 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Inconsistent Standards</h3>
              <p className="text-gray-300">
                Different funding sources had vastly different requirements, making it difficult for 
                organizations to efficiently repurpose content or maintain consistency across multiple applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-400">Our Solution</h2>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
            We developed Smarteval as a comprehensive platform that streamlines the entire application process
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden">
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
              ></div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Comprehensive Platform</h3>
                  <p className="text-gray-300">
                    Our system provides templates, compliance checking, collaboration tools, and 
                    submission management—all in one secure environment.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Time Savings</h3>
                  <p className="text-gray-300">
                    Organizations using Smarteval report reducing their application preparation time 
                    by an average of 65%, allowing them to focus on their core mission.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Increased Success Rates</h3>
                  <p className="text-gray-300">
                    By ensuring compliance with requirements and improving proposal quality, our 
                    clients experience significantly higher success rates in securing funding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-gray-750 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-400 mb-3">1000+</div>
              <h3 className="text-xl font-medium mb-3">Organizations Served</h3>
              <p className="text-gray-300">From non-profits to government agencies</p>
            </div>
            
            <div className="text-center bg-gray-750 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-400 mb-3">$2B+</div>
              <h3 className="text-xl font-medium mb-3">Funding Secured</h3>
              <p className="text-gray-300">For our clients through successful applications</p>
            </div>
            
            <div className="text-center bg-gray-750 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-400 mb-3">85%</div>
              <h3 className="text-xl font-medium mb-3">Time Reduction</h3>
              <p className="text-gray-300">In application preparation time</p>
            </div>
          </div>
          
          <div className="bg-gray-900 p-10 rounded-xl">
            <p className="text-xl text-gray-300 text-center">
              Today, thousands of organizations trust Smarteval to help them secure funding and 
              opportunities that drive their missions forward. We're proud to play a role in 
              enabling important work across sectors and around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <blockquote className="text-xl md:text-2xl text-gray-300 italic leading-relaxed max-w-3xl mx-auto">
            "To empower organizations of all sizes to efficiently access funding and opportunities 
            through technology that simplifies complex application processes, enabling them to focus 
            on their core missions and maximize their impact."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default OurStory;