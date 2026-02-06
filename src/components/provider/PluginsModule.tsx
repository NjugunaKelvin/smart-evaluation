import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiCpu, FiShield, FiTrendingUp, FiGlobe, FiCheck, FiDownloadCloud, FiStar } from 'react-icons/fi';

export default function PluginsModule() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Models' },
        { id: 'risk', label: 'Risk & Fraud' },
        { id: 'impact', label: 'Impact Analysis' },
        { id: 'finance', label: 'Financial Audit' },
        { id: 'geo', label: 'Geospatial' }
    ];

    const plugins = [
        {
            id: 1,
            name: 'TruthSeeker AI',
            category: 'risk',
            description: 'Automated background checks and deep-web fraud detection for applicant entities.',
            icon: FiShield,
            price: 'Free',
            rating: 4.9,
            users: '2.4k',
            installed: true,
            color: 'blue'
        },
        {
            id: 2,
            name: 'BudgetHawk Pro',
            category: 'finance',
            description: 'Analyzes financial proposals line-by-line to detect anomalies, inflation, and math errors.',
            icon: FiTrendingUp,
            price: '$49/mo',
            rating: 4.8,
            users: '850',
            installed: false,
            color: 'green'
        },
        {
            id: 3,
            name: 'EcoImpact Forecaster',
            category: 'impact',
            description: 'Predicts long-term environmental ROI and carbon footprint reduction for infrastructure projects.',
            icon: FiGlobe,
            price: '$199/mo',
            rating: 4.7,
            users: '1.2k',
            installed: false,
            color: 'teal'
        },
        {
            id: 4,
            name: 'GeoVerify Satellite',
            category: 'geo',
            description: 'Real-time satellite imagery analysis to verify reported physical progress of remote construction sites.',
            icon: FiGlobe,
            price: '$299/mo',
            rating: 5.0,
            users: '500+',
            installed: false,
            color: 'indigo'
        },
        {
            id: 5,
            name: 'SentimentPulse',
            category: 'impact',
            description: 'Analyzes local social media and news to gauge beneficiary sentiment towards proposed projects.',
            icon: FiCpu,
            price: '$29/mo',
            rating: 4.5,
            users: '3.1k',
            installed: true,
            color: 'pink'
        },
        {
            id: 6,
            name: 'ComplianceGuard',
            category: 'risk',
            description: 'Automatically scans legal documents against local regulations and international standards (ISO/UN).',
            icon: FiBox,
            price: '$89/mo',
            rating: 4.6,
            users: '900+',
            installed: false,
            color: 'orange'
        }
    ];

    const filteredPlugins = activeCategory === 'all'
        ? plugins
        : plugins.filter(p => p.category === activeCategory);

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">AI Models Marketplace</h2>
                <p className="text-gray-500 text-sm mt-1">Supercharge your evaluation pipeline with specialized AI agents.</p>
            </div>

            {}
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10 max-w-xl">
                    <span className="bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-1 rounded mb-4 inline-block">NEW ARRIVAL</span>
                    <h3 className="text-3xl font-bold mb-2">Generative Proposal Architect</h3>
                    <p className="text-purple-100 mb-6">Create comprehensive RFPs and grant structures in seconds using our new LLM tailored for international development.</p>
                    <button className="bg-white text-purple-900 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-50 transition">
                        Explore Demo
                    </button>
                    <p className="text-xs text-purple-300 mt-3">* Included in Enterprise Plan</p>
                </div>
                {}
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-purple-500/20 to-transparent pointer-events-none"></div>
                <FiCpu className="absolute -right-10 -bottom-10 text-white/5 w-64 h-64" />
            </div>

            {}
            <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${activeCategory === cat.id
                                ? 'bg-purple-600 text-white shadow-md'
                                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlugins.map((plugin) => (
                    <motion.div
                        key={plugin.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl bg-${plugin.color}-50 text-${plugin.color}-600`}>
                                <plugin.icon className="w-6 h-6" />
                            </div>
                            {plugin.installed ? (
                                <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    <FiCheck /> Installed
                                </span>
                            ) : (
                                <span className="text-sm font-bold text-gray-900">{plugin.price}</span>
                            )}
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">{plugin.name}</h3>
                        <p className="text-sm text-gray-500 mb-4 flex-grow">{plugin.description}</p>

                        <div className="border-t border-gray-100 pt-4 mt-auto">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                                    <FiStar className="text-yellow-400 fill-current" /> {plugin.rating}
                                </div>
                                <span className="text-xs text-gray-400">{plugin.users} users</span>
                            </div>

                            <button
                                className={`w-full py-2.5 rounded-lg text-sm font-bold transition flex items-center justify-center gap-2 ${plugin.installed
                                        ? 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                        : 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-600/20'
                                    }`}
                            >
                                {plugin.installed ? 'Configure Settings' : 'Get Model'}
                                {!plugin.installed && <FiDownloadCloud />}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
