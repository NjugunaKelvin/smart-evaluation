'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HelpPage() {
    const categories = [
        {
            title: 'Getting Started',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            links: [
                { title: 'How to create an account', href: '#' },
                { title: 'Setting up your profile', href: '#' },
                { title: 'Verifying your business', href: '#' }
            ]
        },
        {
            title: 'For Providers',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            links: [
                { title: 'Searching for opportunities', href: '#' },
                { title: 'Submitting a bid', href: '#' },
                { title: 'Tracking application status', href: '#' }
            ]
        },
        {
            title: 'For Clients',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            links: [
                { title: 'Posting a tender', href: '#' },
                { title: 'Evaluating proposals', href: '#' },
                { title: 'Managing contracts', href: '#' }
            ]
        },
        {
            title: 'Account & Billing',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            links: [
                { title: 'Subscription plans', href: '#' },
                { title: 'Payment methods', href: '#' },
                { title: 'Invoices and receipts', href: '#' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Search Header */}
            <div className="bg-[#3e0369] py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">How can we help you?</h1>
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500/30 shadow-xl"
                        />
                        <button className="absolute right-3 top-3 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mr-4">
                                    {category.icon}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {category.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-gray-600 hover:text-purple-600 flex items-center group">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></span>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link href="#" className="inline-block mt-6 text-purple-600 font-semibold text-sm hover:underline">
                                View all articles &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white border-t border-gray-200 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
                    <p className="text-gray-600 mb-8">Our support team is just a click away.</p>
                    <Link href="/contact" className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">
                        Contact Support
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
