/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Card from '@/components/ui/Card';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: "Project Opportunities",
    description: "Access a wide range of projects from various sectors and industries with our curated database",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    visual: (
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
        <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20C100 20 140 40 140 100C140 160 100 180 100 180C100 180 60 160 60 100C60 40 100 20 100 20Z" stroke="currentColor" strokeWidth="8"/>
          <path d="M100 40C100 40 130 55 130 100C130 145 100 160 100 160C100 160 70 145 70 100C70 55 100 40 100 40Z" stroke="currentColor" strokeWidth="6"/>
          <path d="M100 60C100 60 120 70 120 100C120 130 100 140 100 140C100 140 80 130 80 100C80 70 100 60 100 60Z" stroke="currentColor" strokeWidth="4"/>
          <circle cx="100" cy="100" r="10" fill="currentColor"/>
        </svg>
      </div>
    ),
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Tender Submissions",
    description: "Submit winning proposals for government and institutional tenders with our streamlined process",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    visual: (
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
        <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="50" width="140" height="100" rx="10" stroke="currentColor" strokeWidth="8"/>
          <line x1="50" y1="70" x2="150" y2="70" stroke="currentColor" strokeWidth="4"/>
          <line x1="50" y1="90" x2="150" y2="90" stroke="currentColor" strokeWidth="4"/>
          <line x1="50" y1="110" x2="150" y2="110" stroke="currentColor" strokeWidth="4"/>
          <line x1="50" y1="130" x2="120" y2="130" stroke="currentColor" strokeWidth="4"/>
          <path d="M170 40L180 30V70" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Funding Access",
    description: "Connect directly with NGOs and international organizations for optimal funding opportunities",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    visual: (
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
        <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="8"/>
          <path d="M100 30V170" stroke="currentColor" strokeWidth="6"/>
          <path d="M170 100H30" stroke="currentColor" strokeWidth="6"/>
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="6"/>
          <path d="M130 70L70 130" stroke="currentColor" strokeWidth="6"/>
          <path d="M70 70L130 130" stroke="currentColor" strokeWidth="6"/>
          <circle cx="100" cy="100" r="15" fill="currentColor"/>
        </svg>
      </div>
    ),
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Proposal Evaluation",
    description: "Get expert feedback on your proposals with our transparent assessment system",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    visual: (
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
        <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M160 40L180 60L140 100" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M140 100L100 140L60 180" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 60L60 40L100 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="6"/>
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="4"/>
        </svg>
      </div>
    ),
    color: "from-purple-500 to-violet-500"
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)`
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/5 to-amber-500/5 animate-pulse-medium" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500/20 blur-xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-500/20 blur-xl animate-float-medium" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-amber-500/15 blur-lg animate-float-fast" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Comprehensive</span> Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover how our platform empowers businesses to secure valuable contracts, 
            funding, and projects through our streamlined, transparent processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-gray-800/40 backdrop-blur-md border border-gray-700/50 p-8 text-center hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              // Add transitionDelay inline to the Card's wrapper div if needed
              // and use Tailwind for background and boxShadow
              // Example:
              // style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Visual element for each card */}
              {service.visual}
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Main icon */}
              <div className={`w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-xl relative z-10 ${service.color.replace('from-', 'group-hover:from-').replace('to-', 'group-hover:to-')} group-hover:bg-gradient-to-br`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed relative z-10">
                {service.description}
              </p>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 relative z-10">
                <span className="inline-flex items-center text-cyan-400 text-sm font-medium">
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}