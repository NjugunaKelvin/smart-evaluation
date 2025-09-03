'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Button from './ui/Button';

interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'What We Do',
      dropdown: [
        {
          name: 'Why Choose Us',
          href: '/why-choose-us',
          description: 'Discover our competitive advantages and unique value proposition'
        },
        {
          name: 'Our Process',
          href: '/our-process',
          description: 'How our transparent evaluation system works'
        },
        {
          name: 'Success Stories',
          href: '/success-stories',
          description: 'Case studies and client testimonials'
        },
        {
          name: 'Industries Served',
          href: '/industries',
          description: 'Sectors and industries we specialize in'
        }
      ]
    },
    {
      name: 'Opportunities',
      dropdown: [
        {
          name: 'Tenders',
          href: '/tenders',
          description: 'Explore available tenders across different sectors'
        },
        {
          name: 'Fundings',
          href: '/fundings',
          description: 'Explore available funding opportunities across different sectors'
        },
        {
          name: 'Contracts',
          href: '/opportunities/contracts',
          description: 'Explore contract opportunities from different clients on different categories.'
        },
        {
          name: 'Recently Added',
          href: '/tenders/recent',
          description: 'Newly posted tender opportunities'
        },
        {
          name: 'Saved Tenders',
          href: '/tenders/saved',
          description: 'Your bookmarked tender opportunities'
        }
      ]
    },
    {
      name: 'Resources',
      dropdown: [
        {
          name: 'Insights & Analysis',
          href: '/insights',
          description: 'Market trends and industry analysis'
        },
        {
          name: 'Proposal Guidelines',
          href: '/resources/guidelines',
          description: 'How to prepare winning proposals'
        },
        {
          name: 'Webinars & Events',
          href: '/resources/webinars',
          description: 'Educational sessions and industry events'
        },
        {
          name: 'Support Center',
          href: '/support',
          description: 'Get assistance with our platform'
        }
      ]
    },
    {
      name: 'Pricing',
      dropdown: [
        {
          name: 'Plans & Features',
          href: '/pricing',
          description: 'Compare subscription options and benefits'
        },
        {
          name: 'Enterprise Solutions',
          href: '/enterprise',
          description: 'Custom solutions for large organizations'
        },
        {
          name: 'Government & NGOs',
          href: '/government',
          description: 'Specialized solutions for public sector'
        }
      ]
    },
    {
      name: 'About Us',
      dropdown: [
        {
          name: 'Our Story',
          href: '/about',
          description: 'The vision and mission behind SmartEval'
        },
        {
          name: 'Leadership Team',
          href: '/team',
          description: 'Meet our executive leadership and experts'
        },
        {
          name: 'Careers',
          href: '/careers',
          description: 'Join our innovative team'
        },
        {
          name: 'Partners & Alliances',
          href: '/partners',
          description: 'Our strategic partnerships'
        },
        {
          name: 'Press & Media',
          href: '/press',
          description: 'Company news and media resources'
        },
        {
          name: 'Contact Us',
          href: '/contact',
          description: 'Get in touch with our team'
        }
      ]
    }
  ];

  const handleDropdownEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownClick = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // SVG Chevron component
  const ChevronIcon = ({ isActive }: { isActive: boolean }) => (
    <svg 
      className={`ml-1 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
      width="12" 
      height="12" 
      viewBox="0 0 12 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M3 4.5L6 7.5L9 4.5" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg border-b border-gray-700">
      <div className="max-w-8xl mx-auto px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-emerald-600 text-white p-2 rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-white">SmartEval</span>
            </Link>
          </div>

          {/* Middle Navigation */}
          <div className="hidden xl:flex items-center justify-center flex-1 mx-10">
            <div className="flex items-baseline space-x-2" ref={dropdownRef}>
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
                      className="text-gray-300 hover:text-emerald-400 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className={`flex items-center text-gray-300 hover:text-emerald-400 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${activeDropdown === item.name ? 'text-emerald-400 bg-gray-800' : ''}`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronIcon isActive={activeDropdown === item.name} />}
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute left-0 mt-2 w-72 rounded-lg shadow-xl bg-gray-800 border border-gray-700 overflow-hidden z-50"
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-5 py-3 text-sm text-gray-300 hover:bg-gray-750 transition-all duration-200 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-white group-hover:text-emerald-400 transition-colors duration-200">
                              {dropdownItem.name}
                            </div>
                            <div className="text-xs text-gray-400 mt-1 leading-tight">
                              {dropdownItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Link href="/dashboard">
                <Button variant="primary" className="text-sm px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" className="text-sm px-5 py-2.5 border-gray-600 hover:bg-gray-800 hover:text-emerald-400">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" className="text-sm px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden ml-4">
            <button
              className="text-gray-300 hover:text-emerald-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              onClick={() => {/* Add mobile menu toggle logic */}}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}