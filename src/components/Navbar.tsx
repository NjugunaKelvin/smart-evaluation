'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from './ui/Button';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface DropdownItem {
  name: string;
  href: string;
  description: string;
  icon?: React.ReactNode;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'What We Do',
      dropdown: [
        {
          name: 'Why Choose Us',
          href: '/why-choose-us',
          description: 'Discover our competitive advantages'
        },
        {
          name: 'Our Process',
          href: '/our-process',
          description: 'How our evaluation system works'
        },
        {
          name: 'Success Stories',
          href: '/success-stories',
          description: 'Case studies and client testimonials'
        }
      ]
    },
    {
      name: 'Tenders',
      dropdown: [
        {
          name: 'Browse Tenders',
          href: '/tenders',
          description: 'Explore available opportunities'
        },
        {
          name: 'Categories',
          href: '/tenders/categories',
          description: 'Tenders by industry and sector'
        },
        {
          name: 'Trending',
          href: '/tenders/trending',
          description: 'Most popular opportunities'
        },
        {
          name: 'Recently Added',
          href: '/tenders/recent',
          description: 'Newly posted tenders'
        }
      ]
    },
    {
      name: 'Resources',
      dropdown: [
        {
          name: 'Blog',
          href: '/blog',
          description: 'Industry insights and updates'
        },
        {
          name: 'Guidelines',
          href: '/resources/guidelines',
          description: 'How to prepare winning proposals'
        },
        {
          name: 'Webinars',
          href: '/resources/webinars',
          description: 'Educational sessions and workshops'
        },
        {
          name: 'FAQ',
          href: '/faq',
          description: 'Frequently asked questions'
        },
        {
          name: 'Support Center',
          href: '/support',
          description: 'Get help with our platform'
        }
      ]
    },
    {
      name: 'Pricing',
      dropdown: [
        {
          name: 'Plans & Features',
          href: '/pricing',
          description: 'Compare subscription options'
        },
        {
          name: 'Enterprise Solutions',
          href: '/enterprise',
          description: 'Custom solutions for large organizations'
        },
        {
          name: 'Free Trial',
          href: '/free-trial',
          description: 'Try our platform risk-free'
        }
      ]
    },
    {
      name: 'About Us',
      dropdown: [
        {
          name: 'Our Story',
          href: '/about',
          description: 'How SmartEval began'
        },
        {
          name: 'Team',
          href: '/team',
          description: 'Meet our leadership and experts'
        },
        {
          name: 'Careers',
          href: '/careers',
          description: 'Join our growing team'
        },
        {
          name: 'Partners',
          href: '/partners',
          description: 'Our strategic alliances'
        },
        {
          name: 'Contact',
          href: '/contact',
          description: 'Get in touch with us'
        }
      ]
    }
  ];

  const handleDropdownEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg backdrop-blur-sm bg-opacity-95 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white flex items-center">
              <span className="bg-blue-600 text-white p-1 rounded mr-2">SE</span>
              SmartEval
            </Link>
          </div>

          {/* Middle Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.href ? (
                    <Link 
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeDropdown === item.name ? 'text-white' : ''}`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <span className="ml-1">
                          {activeDropdown === item.name ? (
                            <ChevronUpIcon className="h-4 w-4" />
                          ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                          )}
                        </span>
                      )}
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium">{dropdownItem.name}</div>
                            <div className="text-xs text-gray-400 mt-1">{dropdownItem.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => {/* Add mobile menu toggle logic */}}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <Link href="/dashboard">
                <Button variant="primary" className="text-sm px-4 py-2">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" className="text-sm px-4 py-2 border-gray-600 hover:bg-gray-800">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" className="text-sm px-4 py-2">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {/* You would implement the mobile menu toggle functionality here */}
    </nav>
  );
}