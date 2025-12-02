/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600 text-sm font-medium">
              Sign in to access your opportunities dashboard.
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
                placeholder="you@company.com"
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
                Remember this device
              </label>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3.5 text-sm font-bold rounded-xl bg-purple-700 hover:bg-purple-800 shadow-lg shadow-purple-700/20 transition-all">
              Sign In
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-50 text-gray-500">Or sign in with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="py-2.5 px-4 border border-gray-200 rounded-xl text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all font-medium"
              >
                Google
              </button>
              <button
                type="button"
                className="py-2.5 px-4 border border-gray-200 rounded-xl text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all font-medium"
              >
                LinkedIn
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-purple-600 font-bold hover:underline">Sign up</Link>
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
          <h2 className="text-4xl font-bold mb-4 leading-tight">Access Your Opportunities</h2>
          <p className="text-lg text-gray-200 max-w-md">
            Manage your applications, track tenders, and grow your business with SmartEval.
          </p>
        </div>
      </div>
    </div>
  );
}