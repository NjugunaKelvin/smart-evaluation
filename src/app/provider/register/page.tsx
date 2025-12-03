/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function ProviderRegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        sector: '',
        contactName: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [loading, setLoading] = useState(false);

    const sectors = [
        'Technology', 'Construction', 'Consulting', 'Marketing',
        'Healthcare', 'Education', 'Logistics', 'Finance',
        'Legal', 'Manufacturing', 'Other'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    userType: 'provider' // Register as provider
                })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                router.push('/provider/dashboard');
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

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 relative z-10">
                <div className="max-w-md w-full mx-auto">
                    <div className="mb-8">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                                SmartEval
                            </span>
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Provider Account</h1>
                        <p className="text-gray-600 text-sm font-medium">
                            Register as a provider to post opportunities and manage applications.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Contact Name *</label>
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

                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Industry Sector *</label>
                            <select
                                name="sector"
                                required
                                value={formData.sector}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                            >
                                <option value="">Select sector</option>
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
                                    placeholder="Password"
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
                                    placeholder="Confirm"
                                />
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                required
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className="mt-0.5 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label className="text-xs text-gray-600">
                                I agree to the{' '}
                                <Link href="/terms" className="text-purple-600 font-medium hover:underline">Terms</Link>
                                {' '}and{' '}
                                <Link href="/privacy" className="text-purple-600 font-medium hover:underline">Privacy Policy</Link>
                            </label>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 text-sm bg-purple-700 font-bold rounded-xl hover:bg-purple-800 transition-colors shadow-lg shadow-purple-700/20 disabled:opacity-70"
                        >
                            {loading ? 'Creating Account...' : 'Create Provider Account'}
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link href="/login" className="text-purple-600 font-bold hover:underline">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-black/50 z-10" />
                <img
                    src="/images/login/1.jpg"
                    alt="Business professionals"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-16 text-white">
                    <h2 className="text-4xl font-bold mb-4 leading-tight">Post Opportunities</h2>
                    <p className="text-lg text-gray-200 max-w-md">
                        Connect with qualified candidates and manage applications efficiently.
                    </p>
                </div>
            </div>
        </div>
    );
}
