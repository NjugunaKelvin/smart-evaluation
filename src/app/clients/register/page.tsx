'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ClientRegisterPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
                {}
                <div className="lg:w-1/2 bg-[#3e0369] text-white p-12 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-lg mx-auto lg:mx-0">
                        <div className="inline-block px-4 py-1 bg-purple-500/30 rounded-full text-sm font-semibold mb-6 border border-purple-400/30">
                            For Organizations & Governments
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Find the Perfect Service Providers
                        </h1>
                        <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                            Post your tenders, contracts, and opportunities to a network of verified, high-quality businesses. Streamline your evaluation process with our smart tools.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Verified Providers</h3>
                                    <p className="text-purple-200 text-sm">Access a database of vetted companies.</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Smart Analytics</h3>
                                    <p className="text-purple-200 text-sm">Track applications and performance metrics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {}
                <div className="lg:w-1/2 p-12 flex flex-col justify-center bg-white">
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Client Account</h2>
                        <p className="text-gray-600 mb-8">Start posting opportunities today.</p>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="Ministry of..." />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-white">
                                    <option>Government Agency</option>
                                    <option>Private Corporation</option>
                                    <option>Non-Profit / NGO</option>
                                    <option>Educational Institution</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="name@organization.com" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="••••••••" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm</label>
                                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="••••••••" />
                                </div>
                            </div>

                            <div className="flex items-start">
                                <input type="checkbox" className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                                <span className="ml-2 text-sm text-gray-600">
                                    I agree to the <Link href="/terms" className="text-purple-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link>.
                                </span>
                            </div>

                            <Button variant="primary" className="w-full py-4 text-base font-bold rounded-xl shadow-lg shadow-purple-600/20">
                                Create Account
                            </Button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600">
                                Looking for work instead? <Link href="/register" className="text-purple-600 font-bold hover:underline">Register as a Provider</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
