/* eslint-disable react/no-unescaped-entities */
'use client'
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Access Premium Opportunities?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join hundreds of service providers already growing their business through SmartEval's transparent platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-lg bg-green-600 hover:bg-green-700">
              Create Account
            </Button>
          </Link>
          <Link href="/tenders">
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-3 text-lg border-gray-600 hover:bg-gray-700">
              Browse Opportunities
            </Button>
          </Link>
        </div>
        <p className="text-gray-400 text-sm mt-6">No credit card required. Start with a free account.</p>
      </div>
    </section>
  );
}