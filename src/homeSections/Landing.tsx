'use client'
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Landing() {
  return (
    <section className="relative py-16 bg-[#ebe1f2] border-b border-gray-200 overflow-hidden min-h-screen flex items-center">
      {/* Background pattern with subtle animation */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEwIi8+PHBhdGggZD0iTTMwIDBhMzAgMzAgMCAwIDEgMCA2MFYweiIvPjwvZz48L2c+PC9zdmc+')] animate-pulse-slow"></div>
      </div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNIDEwMCAwIEwgMCAwIDAgMTAwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wMykiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-medium"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-left">
          <div className="flex items-center mb-6">
            <div className="h-0.5 w-12 bg-purple-600 mr-4"></div>
            <p className="text-purple-700 font-medium uppercase tracking-wider text-sm">Global Opportunity Platform</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect with <span className="text-purple-600">Verified</span> Business Opportunities
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join thousands of service providers accessing vetted opportunities from governments, multilateral institutions, and global NGOs through our transparent evaluation and bidding platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-lg mr-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">Verified Opportunities</h3>
                <p className="text-gray-600 text-sm">Direct access to pre-qualified tenders and grants</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-lg mr-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">Efficiency Tools</h3>
                <p className="text-gray-600 text-sm">Streamlined submission and tracking process</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-lg mr-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">Community Network</h3>
                <p className="text-gray-600 text-sm">Connect with other successful providers</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-lg mr-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">Growth Analytics</h3>
                <p className="text-gray-600 text-sm">Track your success and identify new opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/opportunities">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-3.5 text-base font-medium bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-purple-500/30 text-white">
                Explore Opportunities
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary" className="w-full sm:w-auto px-8 py-3.5 text-base font-medium border-purple-200 bg-white/70 hover:bg-white hover:border-purple-300 transition-all duration-300 backdrop-blur-sm text-purple-700">
                Register Your Business
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center mt-10">
            <div className="flex -space-x-3 mr-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-15${397+item}06407504-ba87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80`}
                    alt="Happy business owner"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              <span className="text-purple-700 font-medium">200+</span> service providers growing with us
            </p>
          </div>
        </div>
        
        <div className="relative">
          {/* Main card with happy business people */}
          <div className="relative h-96 w-full rounded-xl overflow-hidden border border-white shadow-2xl bg-white">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt="Diverse group of happy business professionals celebrating success"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ebe1f2]/40 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating card 1 */}
          <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-purple-100 w-64">
            <div className="flex items-center mb-3">
              <div className="bg-purple-100 p-1.5 rounded-md mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 font-semibold">Funding Accessed</h3>
            </div>
            <p className="text-2xl font-bold text-purple-600 mb-1">Ksh 10B+</p>
            <p className="text-gray-600 text-sm">by our business partners in the last year</p>
          </div>
          
          {/* Floating card 2 */}
          <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-purple-100 w-64">
            <div className="flex items-center mb-3">
              <div className="bg-green-100 p-1.5 rounded-md mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 font-semibold">Active Projects</h3>
            </div>
            <p className="text-2xl font-bold text-green-600 mb-1">100,000+</p>
            <p className="text-gray-600 text-sm">currently available across multiple sectors</p>
          </div>

          {/* Additional happy faces collage */}
          <div className="absolute -bottom-16 left-10 flex gap-2">
            <div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="Happy businesswoman"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="Successful businessperson"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 20s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}