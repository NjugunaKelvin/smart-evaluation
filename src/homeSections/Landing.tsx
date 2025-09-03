'use client'
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Landing() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 border-b border-gray-700 overflow-hidden min-h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDIwVjE0SDE0djIwek0xNCAxNGgyMnYyMEgxNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Push Your Services to <span className="text-green-500">The Next Level</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Access projects, tenders, and funding from governments, NGOs, institutions, and global organizations like the World Bank through our transparent evaluation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tenders">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg bg-green-600 hover:bg-green-700">
                Explore Opportunities
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg border-gray-600 hover:bg-gray-800">
                Register as Provider
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative h-96 w-full">
            <Image
              src="/images/home/bg.jpg"
              alt="Business growth illustration"
              fill
              className="rounded-lg object-cover"
              priority
            />
            <div className="absolute -bottom-6 -left-6 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 w-3/4">
              <h3 className="text-white font-semibold mb-2">$10M+ in funding accessed</h3>
              <p className="text-gray-400 text-sm">by our service providers in the last year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}