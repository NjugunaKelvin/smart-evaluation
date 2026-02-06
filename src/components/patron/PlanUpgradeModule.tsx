'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiStar, FiZap, FiShield, FiBriefcase } from 'react-icons/fi';

interface PlanUpgradeModuleProps {
    currentPlan?: string;
}

export default function PlanUpgradeModule({ currentPlan = "Professional" }: PlanUpgradeModuleProps) {
    const plans = [
        {
            id: 'starter',
            name: 'Starter',
            price: 'Free',
            period: 'forever',
            description: 'Essential tools for small organizations starting their impact journey.',
            icon: FiZap,
            color: 'blue',
            popular: false,
            features: [
                '1 Team Member',
                'Manage up to 3 Projects',
                'Basic Impact Reporting',
                'Standard Email Support',
                '1GB Document Storage',
                'Community Forum Access'
            ],
        },
        {
            id: 'growth',
            name: 'Growth',
            price: 'KES 15,000',
            period: '/ month',
            description: 'Advanced features for growing foundations and grant-makers.',
            icon: FiStar,
            color: 'purple',
            popular: true,
            features: [
                'Up to 5 Team Members',
                'Unlimited Projects',
                'Advanced Analytics & Reporting',
                'Priority Email & Chat Support',
                '10GB Document Storage',
                'Custom Evaluation Criteria',
                'Bulk Data Export',
                'Automated Workflows'
            ],
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 'KES 45,000',
            period: '/ month',
            description: 'Full-scale solution for large organizations requiring maximum control.',
            icon: FiShield,
            color: 'slate',
            popular: false,
            features: [
                'Unlimited Team Members',
                'Unlimited Projects & Storage',
                'Custom AI Evaluation Models',
                '24/7 Dedicated Support Phone Line',
                'API & Webhooks Access',
                'White-label Portal & Custom Domain',
                'SSO & Advanced Security',
                'Audit Logs & Compliance',
                'On-premise Deployment Option'
            ],
        }
    ];

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-white w-full rounded-[2rem] shadow-sm border border-gray-200 overflow-hidden flex flex-col"
            >
                {}
                <div className="absolute top-0 inset-x-0 h-80 bg-slate-900 overflow-hidden z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                </div>

                {}
                <div className="relative z-10 px-8 py-12 md:px-16 md:py-20 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg mb-6"
                    >
                        <FiBriefcase className="w-4 h-4" /> Upgrade Your Plan
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        Unlock your full potential
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Choose the perfect plan to scale your impact. Change plans or cancel anytime with zero hidden fees.
                    </motion.p>
                </div>

                {}
                <div className="relative z-10 px-6 pb-16 md:px-12 -mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => {
                            const isCurrent = currentPlan?.toLowerCase() === plan.name.toLowerCase();

                            return (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className={`
                                        flex flex-col h-full rounded-[1.5rem] bg-white transition-all duration-300 relative group
                                        ${plan.popular
                                            ? 'shadow-2xl shadow-purple-900/10 ring-4 ring-purple-600/10 z-10 scale-[1.02] lg:-translate-y-8'
                                            : 'shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2'
                                        }
                                    `}
                                >
                                    {plan.popular && (
                                        <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center z-20">
                                            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide flex items-center gap-1.5">
                                                <FiStar className="fill-current" /> Most Popular
                                            </span>
                                        </div>
                                    )}

                                    {}
                                    <div className={`p-8 rounded-t-[1.5rem] ${plan.popular ? 'bg-gradient-to-b from-purple-50/50 to-white' : 'bg-transparent'}`}>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm
                                                ${plan.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''}
                                                ${plan.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                                                ${plan.color === 'slate' ? 'bg-slate-100 text-slate-800' : ''}
                                            `}>
                                                <plan.icon />
                                            </div>
                                            {isCurrent && (
                                                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
                                                    Current Plan
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                        <p className="text-gray-500 text-sm h-10 leading-snug">{plan.description}</p>

                                        <div className="mt-6 flex items-baseline gap-1">
                                            <span className="text-4xl font-black text-gray-900 tracking-tight">{plan.price}</span>
                                            {plan.price !== 'Free' && <span className="text-gray-500 font-medium">{plan.period}</span>}
                                        </div>
                                    </div>

                                    {}
                                    <div className="px-8 flex items-center gap-4">
                                        <div className="h-px bg-gray-100 flex-1"></div>
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Features</span>
                                        <div className="h-px bg-gray-100 flex-1"></div>
                                    </div>

                                    {}
                                    <div className="p-8 pt-6 flex-1">
                                        <ul className="space-y-4">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                                    <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.color === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'}`}>
                                                        <FiCheck className="w-3 h-3" strokeWidth={3} />
                                                    </div>
                                                    <span className="font-medium leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {}
                                    <div className="p-8 pt-0 mt-auto">
                                        <button
                                            disabled={isCurrent}
                                            className={`
                                                w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide transition-all transform duration-200
                                                ${isCurrent
                                                    ? 'bg-gray-50 text-gray-400 border border-gray-200 cursor-not-allowed'
                                                    : plan.popular
                                                        ? 'bg-gray-900 text-white hover:bg-black hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98]'
                                                        : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 active:scale-[0.98]'}
                                            `}
                                        >
                                            {isCurrent ? 'Plan Active' : 'Upgrade to ' + plan.name}
                                        </button>
                                        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                                            <FiShield className="w-3 h-3" /> Secure Payment
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
