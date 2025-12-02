/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    sector: '',
    contactName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    interests: [] as string[]
  });

  const sectors = [
    'Technology',
    'Construction',
    'Consulting',
    'Marketing',
    'Healthcare',
    'Education',
    'Logistics',
    'Finance',
    'Legal',
    'Manufacturing',
    'Other'
  ];

  const interestCategories = [
    'Government Tenders',
    'Private Contracts',
    'Grants & Funding',
    'Partnership Opportunities',
    'Subcontracting',
    'Supply Chain',
    'Consultancy Projects',
    'Software Development',
    'Civil Works',
    'Medical Supplies'
  ];

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
    // Here you would typically send the data to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Form Panel */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                SmartEval
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {step === 1 && "Create Account"}
              {step === 2 && "Business Profile"}
              {step === 3 && "Curate Your Feed"}
            </h1>
            <p className="text-gray-600 text-sm font-medium">
              {step === 1 && "Join the premier business opportunities portal."}
              {step === 2 && "Tell us more about your organization."}
              {step === 3 && "Select opportunities you are interested in."}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center mb-8 space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${step >= i ? 'w-8 bg-purple-600' : 'w-4 bg-gray-200'}`} />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Password *</label>
                      <input
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                        placeholder="Create password"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Confirm *</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                  <Button type="button" onClick={handleNext} className="w-full py-3.5 text-sm bg-purple-700 font-bold rounded-xl hover:bg-purple-800 transition-colors shadow-lg shadow-purple-700/20">
                    Continue
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                      placeholder="Acme Corp Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Industry Sector *</label>
                    <select
                      name="sector"
                      required
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all appearance-none"
                    >
                      <option value="">Select your primary sector</option>
                      {sectors.map(sector => (
                        <option key={sector} value={sector}>{sector}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <Button type="button" variant="outline" onClick={handleBack} className="flex-1 py-3.5 text-sm font-bold rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50">
                      Back
                    </Button>
                    <Button type="button" onClick={handleNext} className="flex-1 py-3.5 text-sm bg-purple-700 font-bold rounded-xl hover:bg-purple-800 transition-colors shadow-lg shadow-purple-700/20">
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select opportunities you're interested in:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {interestCategories.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`p-3 text-xs font-medium rounded-xl border transition-all duration-200 text-left ${formData.interests.includes(interest)
                              ? 'border-purple-600 bg-purple-50 text-purple-700 shadow-sm'
                              : 'border-gray-200 bg-white text-gray-600 hover:border-purple-300 hover:bg-gray-50'
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{interest}</span>
                            {formData.interests.includes(interest) && (
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      required
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label className="text-xs text-gray-600 leading-tight">
                      I agree to the{' '}
                      <Link href="/terms" className="text-purple-600 font-medium hover:underline">Terms of Service</Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-purple-600 font-medium hover:underline">Privacy Policy</Link>
                    </label>
                  </div>

                  <div className="flex space-x-3">
                    <Button type="button" variant="outline" onClick={handleBack} className="flex-1 py-3.5 text-sm font-bold rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50">
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 py-3.5 text-sm bg-purple-700 font-bold rounded-xl hover:bg-purple-800 transition-colors shadow-lg shadow-purple-700/20">
                      Create Account
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-600 font-bold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-black/50 z-10" />
        <img
          src="/images/login/1.jpg"
          alt="Business professionals collaborating"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-16 text-white">
          <h2 className="text-4xl font-bold mb-4 leading-tight">Unlock New Business Opportunities</h2>
          <p className="text-lg text-gray-200 max-w-md">
            Join thousands of companies using SmartEval to find and win their next big contract.
          </p>
        </div>
      </div>
    </div>
  );
}