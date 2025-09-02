'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from './ui/Button';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 shadow-lg backdrop-blur-sm bg-opacity-90 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              SmartEval
            </Link>
          </div>

          {/* Middle Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/what-we-do" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                What We Do
              </Link>
              <Link href="/tenders" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Tenders
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Link href="/dashboard">
                <Button variant="primary">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}