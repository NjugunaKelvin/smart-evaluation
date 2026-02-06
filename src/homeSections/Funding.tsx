
'use client'
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FundingSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/bg.webp" 
          alt="Global funding opportunities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Access Funding from <span className="text-yellow-400">NGOs & Global Institutions</span>
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              We've partnered with leading NGOs and international organizations to bring you exclusive funding opportunities for your projects and initiatives.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-100">Grants from international development organizations</span>
              </li>
              <li className="flex items-start animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-100">NGO funding for development projects</span>
              </li>
              <li className="flex items-start animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-100">World Bank and IMF initiatives for developing regions</span>
              </li>
            </ul>
            
            <Link href="/opportunities">
              <Button variant="primary" className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300">
                Explore Funding Opportunities
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-48 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400/30 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-center">Development Grants</h3>
              <p className="text-gray-300 text-sm text-center mt-2">For infrastructure and community projects</p>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-48 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400/30 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-center">Research Funding</h3>
              <p className="text-gray-300 text-sm text-center mt-2">For academic and innovation projects</p>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-48 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400/30 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-center">NGO Partnerships</h3>
              <p className="text-gray-300 text-sm text-center mt-2">Collaborate with international NGOs</p>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-48 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400/30 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-center">Microfinancing</h3>
              <p className="text-gray-300 text-sm text-center mt-2">Small business and startup funding</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}