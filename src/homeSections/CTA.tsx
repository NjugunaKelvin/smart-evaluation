/* eslint-disable react/no-unescaped-entities */
'use client'
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icon/Visual Element */}
        <div className="mb-6 flex justify-center">
          <div className="bg-green-500/10 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
          Unlock Premium Business Opportunities
        </h2>
        
        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join <span className="font-semibold text-green-400">500+</span> service providers growing their business through our transparent, streamlined platform
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link href="/register" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg font-medium bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg hover:shadow-green-500/20">
              Get Started Free
            </Button>
          </Link>
          <Link href="/tenders" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg font-medium border-gray-600 hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center justify-center">
                Explore Opportunities
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Button>
          </Link>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700/40">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Set up in minutes
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Premium support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}