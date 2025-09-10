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
  const [isLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'What We Do',
      dropdown: [
        {
          name: 'Why Choose Us',
          href: '/what-we-do/why-choose-us',
          description: 'Discover our competitive advantages and unique value proposition'
        },
        {
          name: 'Success Stories',
          href: '/what-we-do/success-stories',
          description: 'Case studies and client testimonials'
        },
        {
          name: 'Industries Served',
          href: '/what-we-do/industries',
          description: 'Sectors and industries we specialize in'
        }
      ]
    },
    {
      name: 'Opportunities',
      dropdown: [
        {
          name: 'Tenders',
          href: '/opportunities?category=Tender', 
          description: 'Explore available tenders across different sectors'
        },
        {
          name: 'Fundings',
          href: '/opportunities?category=Funding',
          description: 'Explore available funding opportunities across different sectors'
        },
        {
          name: 'Contracts',
          href: '/opportunities?category=Contract',
          description: 'Explore contract opportunities from different clients on different categories.'
        },
        {
          name: 'Grants',
          href: '/opportunities?category=Grant',
          description: 'For research, innovation, or development.'
        },
        {
          name: 'Patnerships',
          href: '/opportunities?category=Partnership',
          description: 'Collaborations or joint ventures with institutions or companies.'
        }
      ]
    },
    {
      name: 'Resources',
      dropdown: [
        {
          name: 'Proposals & Templates',
          href: '/resources/proposals',
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdown(mobileDropdown === itemName ? null : itemName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close desktop dropdowns when clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      
      // Close mobile menu when clicking outside (excluding the hamburger button)
      if (mobileMenuRef.current && 
          mobileMenuOpen && 
          !mobileMenuRef.current.contains(event.target as Node) &&
          hamburgerButtonRef.current &&
          !hamburgerButtonRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when scrolling outside the menu
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        // Check if we're scrolling outside the menu area
        const currentScrollY = window.scrollY;
        
        // Only close if we've scrolled a significant amount (to avoid closing on tiny scroll movements)
        if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
          closeMobileMenu();
        }
        
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  // Allow scrolling within the mobile menu
  useEffect(() => {
    const handleMenuScroll = (e: Event) => {
      // Allow scrolling within the menu
      e.stopPropagation();
    };

    if (mobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.addEventListener('scroll', handleMenuScroll);
    }

    return () => {
      if (mobileMenuRef.current) {
        mobileMenuRef.current.removeEventListener('scroll', handleMenuScroll);
      }
    };
  }, [mobileMenuOpen]);

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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-700 text-white p-2 rounded-md">
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
                      className="text-gray-300 hover:text-blue-700 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className={`flex items-center text-gray-300 hover:text-blue-700 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${activeDropdown === item.name ? 'text-emerald-400 bg-gray-800' : ''}`}
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
                            <div className="font-medium text-white group-hover:text-blue-700 transition-colors duration-200">
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
          <div className="hidden md:flex items-center space-x-4">
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
                  <Button variant="primary" className="text-sm px-5 py-2.5 bg-blue-700 hover:bg-blue-900">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              ref={hamburgerButtonRef}
              className="text-gray-300 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 p-2 rounded-md"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}
        >
          <div className="pt-4 pb-6 space-y-1 border-t border-gray-700 mt-3">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-800 last:border-b-0">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-4 px-4 text-gray-300 hover:text-emerald-400 hover:bg-gray-800 rounded-md transition-colors duration-200 text-base font-medium"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex justify-between items-center w-full py-4 px-4 text-left text-gray-300 hover:text-emerald-400 hover:bg-gray-800 rounded-md transition-colors duration-200 text-base font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronIcon isActive={mobileDropdown === item.name} />
                    </button>
                    
                    {/* Mobile Dropdown Menu */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="pl-6 pb-2 space-y-2 bg-gray-850">
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-3 px-4 text-sm text-gray-300 hover:text-emerald-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                            onClick={closeMobileMenu}
                          >
                            <div className="font-medium">{dropdownItem.name}</div>
                            <div className="text-xs text-gray-400 mt-1">
                              {dropdownItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-700 mt-2 px-4">
              {isLoggedIn ? (
                <Link 
                  href="/dashboard" 
                  className="block w-full text-center py-3 px-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200 mb-2 font-medium"
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link 
                    href="/login" 
                    className="block w-full text-center py-3 px-4 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 hover:text-emerald-400 transition-colors duration-200 mb-2 font-medium"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/register" 
                  className="block w-full text-center py-3 px-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200 font-medium"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}