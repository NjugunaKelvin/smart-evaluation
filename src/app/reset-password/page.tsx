/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function ResetPasswordPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const tokenParam = searchParams.get('token');
        if (tokenParam) {
            setToken(tokenParam);
        } else {
            setError('Invalid reset link');
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Password reset successful! Please login with your new password.');
                router.push('/login');
            } else {
                setError(data.message || 'Failed to reset password');
            }
        } catch (error) {
            console.error('Reset Password Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
                        <p className="text-gray-600 text-sm font-medium">
                            Enter your new password below.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">New Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                                placeholder="Enter new password"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 bg-white text-gray-900 transition-all"
                                placeholder="Confirm new password"
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                                <p className="text-sm text-red-800">{error}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            disabled={loading || !token}
                            className="w-full py-3.5 text-sm font-bold rounded-xl bg-purple-700 hover:bg-purple-800 shadow-lg shadow-purple-700/20 transition-all disabled:opacity-70"
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-center text-sm text-gray-600">
                            Remember your password?{' '}
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
                    alt="Business analytics dashboard"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-16 text-white">
                    <h2 className="text-4xl font-bold mb-4 leading-tight">Secure Your Account</h2>
                    <p className="text-lg text-gray-200 max-w-md">
                        Choose a strong password to protect your opportunities dashboard.
                    </p>
                </div>
            </div>
        </div>
    );
}
