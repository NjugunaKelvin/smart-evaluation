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
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Opportunities',
      dropdown: [
        {
          name: 'All Opportunities',
          href: '/opportunities',
          description: 'Browse all available opportunities in one place'
        },
        {
          name: 'Tenders',
          href: '/opportunities?category=Tender', 
          description: 'Government and private sector tender notices'
        },
        {
          name: 'Grants',
          href: '/opportunities?category=Grant',
          description: 'Funding opportunities for projects and research'
        },
        {
          name: 'Contracts',
          href: '/opportunities?category=Contract',
          description: 'Available contracts across various industries'
        },
        {
          name: 'Funding',
          href: '/opportunities?category=Funding',
          description: 'Investment and funding opportunities'
        },
        {
          name: 'Partnerships',
          href: '/opportunities?category=Partnership',
          description: 'Collaboration and joint venture opportunities'
        }
      ]
    },
    {
      name: 'Resources',
      dropdown: [
        {
          name: 'Application Guides',
          href: '/resources/guidelines',
          description: 'Step-by-step guides for successful applications'
        },
        {
          name: 'Proposal Templates',
          href: '/resources/proposals',
          description: 'Professional templates for various opportunity types'
        },
        {
          name: 'Webinars & Training',
          href: '/resources/webinars',
          description: 'Learn from experts through our training sessions'
        },
        {
          name: 'Success Stories',
          href: '/resources/success-stories',
          description: 'Case studies of successful applications'
        },
        {
          name: 'Industry Insights',
          href: '/resources/insights',
          description: 'Market trends and opportunity analysis'
        },
        {
          name: 'Compliance Guidelines',
          href: '/resources/compliance',
          description: 'Regulatory requirements for different opportunities'
        }
      ]
    },
    {
      name: 'For Organizations',
      dropdown: [
        {
          name: 'Post Opportunities',
          href: '/organizations/post',
          description: 'Reach qualified applicants for your opportunities'
        },
        {
          name: 'Enterprise Solutions',
          href: '/organizations/enterprise',
          description: 'Custom solutions for large organizations'
        },
        {
          name: 'Government Portal',
          href: '/organizations/government',
          description: 'Dedicated portal for government agencies'
        },
        {
          name: 'NGO Programs',
          href: '/organizations/ngo',
          description: 'Tools for non-profit organizations'
        },
        {
          name: 'Pricing Plans',
          href: '/organizations/pricing',
          description: 'Subscription options for organizations'
        },
        {
          name: 'Client Success Stories',
          href: '/organizations/success',
          description: 'How organizations benefit from our platform'
        }
      ]
    },
    {
      name: 'About Us',
      dropdown: [
        {
          name: 'Our Mission',
          href: '/about/mission',
          description: 'How we\'re transforming opportunity access'
        },
        {
          name: 'Leadership Team',
          href: '/about/team',
          description: 'Meet our experienced leadership team'
        },
        {
          name: 'Global Reach',
          href: '/about/global-reach',
          description: 'Our presence and impact worldwide'
        },
        {
          name: 'Careers',
          href: '/about/careers',
          description: 'Join our team of passionate professionals'
        },
        {
          name: 'Patners',
          href: '/about/patners',
          description: 'Who we are collaborating with'
        },
        {
          name: 'Story',
          href: '/about/story',
          description: 'The story behind our company'
        }
      ]
    }
  ];

  const secondaryNavItems: NavItem[] = [
    { name: 'Dashboard', href: '/login' },
    { name: 'Saved Opportunities', href: '/login' },
    { name: 'Application Tracker', href: '/login' },
    { name: 'Notifications', href: '/login' },
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/contact' }
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
    }, 300);
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

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      if (mobileMenuOpen) {
        // Only close if we've scrolled a significant amount
        if (Math.abs(currentScrollY - lastScrollY.current) > 50) {
          closeMobileMenu();
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

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
    <nav className={`sticky top-0 z-50 bg-[#3e0369] shadow-xl border-b border-purple-500 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-0'}`}>
      {/* Top Navigation Row */}
      <div className="hidden md:block bg-purple-800/30 border-b border-purple-500/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-6 text-sm">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href!}
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-purple-200">
                Need help? Call <span className="text-white font-medium">+254 72000 000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-white text-[#3e0369] p-2 rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">OpportunityPortal</span>
            </Link>
          </div>

          {/* Middle Navigation */}
          <div className="hidden xl:flex items-center justify-center flex-1 mx-10">
            <div className="flex items-baseline space-x-1" ref={dropdownRef}>
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
                      className="text-purple-100 hover:text-white px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 flex items-center hover:bg-purple-700/40"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className={`flex items-center text-purple-100 hover:text-white px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-purple-700/40 ${activeDropdown === item.name ? 'text-white bg-purple-700/60' : ''}`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronIcon isActive={activeDropdown === item.name} />}
                    </button>
                  )}

                  {/* Dropdown Menu - Large Card Style */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-[60vw] max-w-6xl rounded-xl shadow-2xl bg-gradient-to-b from-[#4d047f] to-[#3e0369] border-2 border-purple-500 overflow-hidden z-50"
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-purple-400/30">{item.name}</h3>
                        <div className="grid grid-cols-2 gap-6">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block p-4 rounded-lg hover:bg-purple-700/40 transition-all duration-300 group border border-transparent hover:border-purple-400/30"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-purple-200/80 mt-2 leading-tight">
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
            </div>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <Link href="/login">
                <Button variant="primary" className="text-sm px-5 py-2.5 bg-white text-[#3e0369] hover:bg-purple-100 font-semibold transition-all duration-300">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" className="text-sm px-4 py-2.5 border-white text-white hover:bg-white hover:text-[#3e0369] font-medium transition-all duration-300">
                    Post Opportunities
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="text-sm px-4 py-2.5 border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-[#3e0369] font-medium transition-all duration-300">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" className="text-sm px-5 py-2.5 bg-white text-[#3e0369] hover:bg-purple-100 font-semibold transition-all duration-300 shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button - shown on devices below 1280px (xl breakpoint) */}
          <div className="xl:hidden flex items-center">
            <button
              ref={hamburgerButtonRef}
              className="text-purple-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 p-2 rounded-md transition-colors duration-300"
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
          <div className="pt-4 pb-6 space-y-1 border-t border-purple-500 mt-3">
            {/* Secondary navigation items in mobile */}
            <div className="px-4 py-2 text-xs font-semibold text-purple-300 uppercase tracking-wider">
              Quick Links
            </div>
            {secondaryNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href!}
                className="block py-2 px-4 text-sm text-purple-200 hover:text-white hover:bg-purple-700/40 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t border-purple-500/30 my-2"></div>
            
            {/* Main navigation items in mobile */}
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-purple-500/30 last:border-b-0">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-4 px-4 text-purple-100 hover:text-white hover:bg-purple-700/40 rounded-md transition-colors duration-300 text-base font-semibold"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex justify-between items-center w-full py-4 px-4 text-left text-purple-100 hover:text-white hover:bg-purple-700/40 rounded-md transition-colors duration-300 text-base font-semibold"
                    >
                      <span>{item.name}</span>
                      <ChevronIcon isActive={mobileDropdown === item.name} />
                    </button>
                    
                    {/* Mobile Dropdown Menu */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="pl-6 pb-2 space-y-2 bg-purple-800/20">
                        <h4 className="text-sm font-bold text-purple-200 pt-3 pl-4">{item.name}</h4>
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-3 px-4 text-sm text-purple-200 hover:text-white hover:bg-purple-700/40 rounded-md transition-colors duration-300"
                            onClick={closeMobileMenu}
                          >
                            <div className="font-medium">{dropdownItem.name}</div>
                            <div className="text-xs text-purple-200/70 mt-1">
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
            <div className="pt-4 border-t border-purple-500 mt-2 px-4">
              {isLoggedIn ? (
                <Link 
                  href="/dashboard" 
                  className="block w-full text-center py-3 px-4 bg-white text-[#3e0369] rounded-md hover:bg-purple-100 transition-all duration-300 mb-2 font-semibold"
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link 
                    href="/post-opportunity" 
                    className="block w-full text-center py-3 px-4 border border-white text-white rounded-md hover:bg-white hover:text-[#3e0369] transition-all duration-300 mb-2 font-medium"
                    onClick={closeMobileMenu}
                  >
                    Post Opportunities
                  </Link>
                  <Link 
                    href="/login" 
                    className="block w-full text-center py-3 px-4 border border-purple-400 text-purple-200 rounded-md hover:bg-purple-400 hover:text-[#3e0369] transition-all duration-300 mb-2 font-medium"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/register" 
                  className="block w-full text-center py-3 px-4 bg-white text-[#3e0369] rounded-md hover:bg-purple-100 transition-all duration-300 font-semibold"
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