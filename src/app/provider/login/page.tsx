
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { FiArrowLeft } from 'react-icons/fi';

export default function ProviderLoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                
                if (data.user.userType !== 'provider') {
                    alert('Access Denied: This portal is strictly for Providers.');
                    return;
                }

                
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));

                router.push('/provider/dashboard');
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login Error:', error);
            alert('An error occurred during login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 relative z-10">
                <div className="max-w-md w-full mx-auto">
                    <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-purple-600 transition-colors mb-8 group">
                        <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="mb-8">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                                SmartEval
                            </span>
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Provider Portal</h1>
                        <p className="text-gray-600 text-sm font-medium">
                            Sign in to manage your posted opportunities and review applications.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                                placeholder="company@domain.com"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-xs font-bold text-gray-700">Password</label>
                                <Link href="/forgot-password" className="text-xs text-purple-600 font-medium hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <input
                                type="password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                                placeholder="Your password"
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-600 font-medium">
                                Keep me logged in
                            </label>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            disabled={loading}
                            className="w-full py-3.5 text-sm font-bold rounded-xl bg-purple-700 hover:bg-purple-800 shadow-lg shadow-purple-700/20 transition-all disabled:opacity-70"
                        >
                            {loading ? 'Access Dashboard' : 'Access Dashboard'}
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-center text-sm text-gray-600">
                            New to SmartEval?{' '}
                            <Link href="/provider/register" className="text-purple-600 font-bold hover:underline">Create a Provider Account</Link>
                        </p>
                    </div>
                </div>
            </div>

            {}
            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-black/50 z-10" />
                <img
                    src="/images/login/1.jpg"
                    alt="Provider dashboard"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-16 text-white">
                    <h2 className="text-4xl font-bold mb-4 leading-tight">Partner with the Best</h2>
                    <p className="text-lg text-gray-200 max-w-md">
                        Join thousands of organizations finding top talent and service providers through our intelligent platform.
                    </p>
                </div>
            </div>
        </div>
    );
}
