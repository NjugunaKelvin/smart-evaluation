// components/home/ClientShowcase.tsx
'use client'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const clients = [
  { name: 'World Bank', logo: '/images/logos/worldbank.png' },
  { name: 'Equity Bank', logo: '/images/logos/equity.png' },
  { name: 'Nairobi Government', logo: '/images/logos/nairobi.jpg' },
  { name: 'Ministry of Education', logo: '/images/logos/education.jpg' },
  { name: 'USAID', logo: '/images/logos/usaid.png' },
  { name: 'UNICEF', logo: '/images/logos/unicef.png' },
  { name: 'African Development Bank', logo: '/images/logos/africa.jpg' },
  { name: 'Kenya Power', logo: '/images/logos/kplc.jpg' },
  { name: 'Safaricom', logo: '/images/logos/safaricom.png' },
    { name: 'Kenha', logo: '/images/logos/kenha.jpg' },
];

export default function ClientShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Global Organizations</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We have partners from renowned organizations to deliver exceptional solutions and drive innovation forward.
          </p>
        </div>
        
        {/* First row - moves left */}
        <div className="flex overflow-hidden mb-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className={`flex animate-marquee-left whitespace-nowrap py-3 ${isVisible ? 'animate-slide' : ''}`}>
            {clients.concat(clients).map((client, index) => (
              <div 
                key={index} 
                className="mx-5 flex items-center justify-center group"
              >
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-5 border border-gray-700 transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-gray-800/80 h-28 w-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={70}
                    className="object-contain max-h-12 relative z-10 filter brightness-110 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row - moves right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className={`flex animate-marquee-right whitespace-nowrap py-3 ${isVisible ? 'animate-slide' : ''}`}>
            {clients.concat(clients).reverse().map((client, index) => (
              <div 
                key={index} 
                className="mx-5 flex items-center justify-center group"
              >
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-5 border border-gray-700 transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-gray-800/80 h-28 w-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={70}
                    className="object-contain max-h-12 relative z-10 filter brightness-110 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Patnered Organizations</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">30+</div>
            <div className="text-gray-300">Different Sectors</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
        
        /* Pause animation on hover */
        .flex:hover .animate-marquee-left,
        .flex:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}