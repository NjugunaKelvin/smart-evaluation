'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {}
            <div className="relative bg-[#3e0369] py-24 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
                    <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Empowering Business Growth
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed"
                    >
                        SmartEval is the leading platform connecting businesses with opportunities. We bridge the gap between ambitious organizations and the contracts that fuel their growth.
                    </motion.p>
                </div>
            </div>

            {}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                            <div className="text-gray-600 font-medium">Business Sectors</div>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl font-bold text-purple-600 mb-2">$2B+</div>
                            <div className="text-gray-600 font-medium">Opportunity Value</div>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl font-bold text-purple-600 mb-2">10k+</div>
                            <div className="text-gray-600 font-medium">Active Providers</div>
                        </div>
                    </div>
                </div>
            </div>

            {}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We believe that every business, regardless of size, deserves fair access to growth opportunities. Our platform democratizes the tender and contract process through transparency, intelligent matching, and streamlined evaluation.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                By leveraging advanced algorithms and a user-centric design, we reduce the friction in finding, applying for, and winning business contracts.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                                {}
                                <div className="w-full h-full bg-gradient-to-br from-purple-900 to-gray-900 flex items-center justify-center text-white/20 text-6xl font-bold">
                                    Mission
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-100 rounded-full -z-10"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-50 rounded-full -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>

            {}
            <div className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Core Values</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            The principles that guide every decision we make.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Transparency</h3>
                            <p className="text-gray-400">
                                We build trust through open processes and clear communication in every interaction.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Innovation</h3>
                            <p className="text-gray-400">
                                We constantly evolve our technology to serve our users better and faster.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
                            <p className="text-gray-400">
                                We create opportunities for businesses of all sizes and backgrounds to thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
