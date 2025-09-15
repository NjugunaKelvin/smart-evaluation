/* eslint-disable react-hooks/exhaustive-deps */
// components/home/ClientShowcase.tsx
'use client'
import { useEffect, useRef, useState } from 'react';

export default function ClientShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#031736] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Global Procurement Network
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Connecting enterprises with vetted opportunities from international institutions, 
            government agencies, and leading corporations through our secure tendering platform.
          </p>
        </div>
        
        {/* Data Visualization Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#0a2955] rounded-xl p-8 border border-[#1a3b6c]">
            <h3 className="text-2xl font-medium text-white mb-6">Opportunity Distribution</h3>
            
            {/* Chart bars */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Government Tenders</span>
                  <span>42%</span>
                </div>
                <div className="w-full bg-[#0c2044] rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>International Grants</span>
                  <span>28%</span>
                </div>
                <div className="w-full bg-[#0c2044] rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '28%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Corporate RFPs</span>
                  <span>18%</span>
                </div>
                <div className="w-full bg-[#0c2044] rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Development Funds</span>
                  <span>12%</span>
                </div>
                <div className="w-full bg-[#0c2044] rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0a2955] rounded-xl p-8 border border-[#1a3b6c]">
            <h3 className="text-2xl font-medium text-white mb-6">Sector Representation</h3>
            
            <div className="flex items-center justify-center h-64">
              <div className="relative w-56 h-56">
                {/* Pie chart segments */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute w-full h-full bg-[#0c2044]"></div>
                  <div className="absolute w-full h-full bg-purple-700" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}></div>
                  <div className="absolute w-full h-full bg-purple-600" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 0% 0%, 0% 50%)' }}></div>
                  <div className="absolute w-full h-full bg-purple-800" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
                </div>
                
                {/* Center circle */}
                <div className="absolute inset-8 bg-[#0a2955] rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-2xl font-medium">500+</div>
                    <div className="text-gray-300 text-sm">Sectors</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-700 mr-2"></div>
                <span className="text-gray-300 text-sm">Infrastructure</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-600 mr-2"></div>
                <span className="text-gray-300 text-sm">Technology</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-800 mr-2"></div>
                <span className="text-gray-300 text-sm">Healthcare</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#0c2044] mr-2"></div>
                <span className="text-gray-300 text-sm">Other Sectors</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Value Metrics */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#0a2955] rounded-xl p-8 border border-[#1a3b6c] text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-900/30 rounded-full mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-3xl font-medium text-white mb-3">Ksh 2.1B+</div>
            <div className="text-gray-300">Annual Opportunity Value</div>
          </div>
          
          <div className="bg-[#0a2955] rounded-xl p-8 border border-[#1a3b6c] text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-900/30 rounded-full mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-3xl font-medium text-white mb-3">850+</div>
            <div className="text-gray-300">Active Partner Organizations</div>
          </div>
          
          <div className="bg-[#0a2955] rounded-xl p-8 border border-[#1a3b6c] text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-900/30 rounded-full mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-3xl font-medium text-white mb-3">98%</div>
            <div className="text-gray-300">Compliance Rate</div>
          </div>
        </div>
        
        {/* Global Reach */}
        <div className={`bg-[#0a2955] rounded-xl p-8 border border-[#1a3b6c] transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-medium text-white mb-6 text-center">Global Presence</h3>
          
          <div className="relative h-64 bg-[#081e44] rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581947129956-4d1f5c9b9b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6 bg-[#031736]/90 backdrop-blur-sm rounded-lg border border-[#1a3b6c]">
                <h4 className="text-xl font-medium text-white mb-3">Operations in 60+ Countries</h4>
                <p className="text-gray-300">Serving organizations across Africa, Europe, North America, and Asia</p>
              </div>
            </div>
            
            {/* Map markers */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-2/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}