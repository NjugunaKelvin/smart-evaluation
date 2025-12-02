'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function PricingPage() {
    const [annual, setAnnual] = useState(true);

    const plans = [
        {
            name: 'Starter',
            description: 'For small businesses just getting started.',
            price: annual ? 0 : 0,
            features: [
                'Access to basic opportunities',
                'Email notifications',
                'Basic profile',
                'Community support'
            ],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Professional',
            description: 'For growing businesses seeking more contracts.',
            price: annual ? 29 : 39,
            features: [
                'Unlimited opportunity access',
                'Advanced filtering & alerts',
                'Priority bid placement',
                'Analytics dashboard',
                'Document templates',
                'Priority support'
            ],
            cta: 'Start Free Trial',
            popular: true
        },
        {
            name: 'Enterprise',
            description: 'For large organizations with custom needs.',
            price: annual ? 99 : 129,
            features: [
                'All Professional features',
                'Multiple user accounts',
                'API access',
                'Dedicated account manager',
                'Custom integrations',
                'SLA support'
            ],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-[#3e0369] py-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
                    <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-10">
                        Choose the plan that best fits your business needs. No hidden fees. Cancel anytime.
                    </p>

                    <div className="flex items-center justify-center space-x-4">
                        <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-purple-300'}`}>Monthly</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            className="relative w-14 h-8 bg-purple-600 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </button>
                        <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-purple-300'}`}>
                            Yearly <span className="text-green-400 text-xs ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${plan.popular ? 'border-purple-500 transform scale-105 z-20' : 'border-transparent'}`}
                        >
                            {plan.popular && (
                                <div className="bg-purple-500 text-white text-xs font-bold uppercase tracking-wider text-center py-1">
                                    Most Popular
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                                <div className="flex items-baseline mb-6">
                                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                                    <span className="text-gray-500 ml-2">/month</span>
                                </div>
                                <Button
                                    variant={plan.popular ? 'primary' : 'outline'}
                                    className={`w-full py-3 rounded-xl font-bold ${plan.popular ? 'shadow-lg shadow-purple-500/30' : ''}`}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                            <div className="bg-gray-50 p-8 border-t border-gray-100">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">What's included</p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Can I switch plans later?</h3>
                            <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of the next billing cycle.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a free trial?</h3>
                            <p className="text-gray-600">We offer a 14-day free trial for the Professional plan. No credit card required to start.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
                            <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
