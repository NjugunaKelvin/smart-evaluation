/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
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

  // Validation State
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Password Visibility State
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  // Calculate Password Strength
  useEffect(() => {
    const password = formData.password;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  }, [formData.password]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear errors on change
    if (name === 'email') setEmailError('');
    if (name === 'password' || name === 'confirmPassword') setPasswordError('');
  };

  const handleNext = () => {
    if (step === 1) {
      // Step 1 Validation
      if (!formData.contactName || !formData.email || !formData.password || !formData.confirmPassword) {
        alert("Please fill in all required fields.");
        return;
      }

      if (!validateEmail(formData.email)) {
        setEmailError("Please enter a valid email address.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setPasswordError("Passwords do not match.");
        return;
      }

      if (passwordStrength < 3) {
        setPasswordError("Password is too weak. Include uppercase, numbers, and symbols.");
        return;
      }
    } else if (step === 2) {
      // Step 2 Validation
      if (!formData.companyName || !formData.sector) {
        alert("Please fill in all required fields.");
        return;
      }
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final check before submit
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/opportunities');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      alert('An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  // Helper for password strength color
  const getStrengthColor = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength === 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength === 3) return 'Medium';
    return 'Strong';
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
                      className={`w-full px-4 py-3 text-sm rounded-xl border ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-purple-600 focus:ring-purple-600/20'} focus:outline-none focus:ring-2 bg-white text-gray-900 transition-all`}
                      placeholder="john@company.com"
                    />
                    {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Password *</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 text-sm rounded-xl border ${passwordError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-purple-600 focus:ring-purple-600/20'} focus:outline-none focus:ring-2 bg-white text-gray-900 transition-all pr-10`}
                          placeholder="Create password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeSlashIcon className="h-5 w-5" />
                          ) : (
                            <EyeIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Confirm *</label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 text-sm rounded-xl border ${passwordError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-purple-600 focus:ring-purple-600/20'} focus:outline-none focus:ring-2 bg-white text-gray-900 transition-all pr-10`}
                          placeholder="Confirm password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? (
                            <EyeSlashIcon className="h-5 w-5" />
                          ) : (
                            <EyeIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Strength</span>
                        <span className={`font-medium ${passwordStrength <= 2 ? 'text-red-500' :
                            passwordStrength === 3 ? 'text-yellow-600' : 'text-green-600'
                          }`}>
                          {getStrengthText()}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${getStrengthColor()}`}
                          style={{ width: `${(passwordStrength / 4) * 100}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-gray-400">
                        Use 8+ chars, uppercase, numbers & symbols.
                      </p>
                    </div>
                  )}

                  {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}

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
                      Select opportunities you&apos;re interested in:
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
                    <Button type="submit" disabled={loading} className="flex-1 py-3.5 text-sm bg-purple-700 font-bold rounded-xl hover:bg-purple-800 transition-colors shadow-lg shadow-purple-700/20 disabled:opacity-70">
                      {loading ? 'Creating Account...' : 'Create Account'}
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