'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import Button from './ui/Button';
import { JSX } from '@emotion/react/jsx-dev-runtime';
import { isAuthenticated, logout, isProvider, getUser } from '@/lib/auth';

interface DropdownItem {
  name: string;
  href: string;
  description: string;
  icon: JSX.Element;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}


const Icons = {
  All: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Tenders: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Grants: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Contracts: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Funding: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Partnerships: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Guides: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Templates: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Training: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  Success: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Insights: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Compliance: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Post: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  Enterprise: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Government: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  NGO: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Pricing: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ClientSuccess: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Mission: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Team: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Global: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Careers: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Partners: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Story: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0a2 2 0 01-2-2V3a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2z" />
    </svg>
  )
};

export default function Navbar() {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated());
  }, []);

  
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Opportunities',
      dropdown: [
        {
          name: 'All Opportunities',
          href: '/opportunities',
          description: 'Browse all available opportunities',
          icon: Icons.All
        },
        {
          name: 'Tenders',
          href: '/opportunities?category=Tender',
          description: 'Government and private sector tender notices',
          icon: Icons.Tenders
        },
        {
          name: 'Grants',
          href: '/opportunities?category=Grant',
          description: 'Funding opportunities for projects',
          icon: Icons.Grants
        },
        {
          name: 'Contracts',
          href: '/opportunities?category=Contract',
          description: 'Available contracts across industries',
          icon: Icons.Contracts
        },
        {
          name: 'Funding',
          href: '/opportunities?category=Funding',
          description: 'Investment and funding opportunities',
          icon: Icons.Funding
        },
        {
          name: 'Partnerships',
          href: '/opportunities?category=Partnership',
          description: 'Collaboration opportunities',
          icon: Icons.Partnerships
        }
      ]
    },
    {
      name: 'Resources',
      dropdown: [
        {
          name: 'Application Guides',
          href: '/resources/guidelines',
          description: 'Step-by-step guides for applications',
          icon: Icons.Guides
        },
        {
          name: 'Proposal Templates',
          href: '/resources/proposals',
          description: 'Professional templates',
          icon: Icons.Templates
        },
        {
          name: 'Webinars & Training',
          href: '/resources/webinars',
          description: 'Learn from experts',
          icon: Icons.Training
        },
        {
          name: 'Success Stories',
          href: '/resources/success-stories',
          description: 'Case studies of success',
          icon: Icons.Success
        },
        {
          name: 'Industry Insights',
          href: '/resources/insights',
          description: 'Market trends and analysis',
          icon: Icons.Insights
        },
        {
          name: 'Compliance Guidelines',
          href: '/resources/compliance',
          description: 'Regulatory requirements',
          icon: Icons.Compliance
        }
      ]
    },
    {
      name: 'For Organizations',
      dropdown: [
        {
          name: 'Post Opportunities',
          href: '/opportunities',
          description: 'Reach qualified applicants',
          icon: Icons.Post
        },
        {
          name: 'Enterprise Solutions',
          href: '/organizations/enterprise',
          description: 'Custom solutions for large orgs',
          icon: Icons.Enterprise
        },
        {
          name: 'Government Portal',
          href: '/organizations/government',
          description: 'Dedicated portal for agencies',
          icon: Icons.Government
        },
        {
          name: 'NGO Programs',
          href: '/organizations/ngo',
          description: 'Tools for non-profits',
          icon: Icons.NGO
        },
        {
          name: 'Pricing Plans',
          href: '/organizations/pricing',
          description: 'Subscription options',
          icon: Icons.Pricing
        },
        {
          name: 'Client Success Stories',
          href: '/organizations/success',
          description: 'How organizations benefit',
          icon: Icons.ClientSuccess
        }
      ]
    },
    {
      name: 'About Us',
      dropdown: [
        {
          name: 'Our Mission',
          href: '/about/mission',
          description: 'Transforming opportunity access',
          icon: Icons.Mission
        },
        {
          name: 'Leadership Team',
          href: '/about/team',
          description: 'Meet our leadership',
          icon: Icons.Team
        },
        {
          name: 'Global Reach',
          href: '/about/global-reach',
          description: 'Our presence worldwide',
          icon: Icons.Global
        },
        {
          name: 'Careers',
          href: '/about/careers',
          description: 'Join our team',
          icon: Icons.Careers
        },
        {
          name: 'Partners',
          href: '/about/partners',
          description: 'Our collaborations',
          icon: Icons.Partners
        },
        {
          name: 'Our Story',
          href: '/about/story',
          description: 'The story behind us',
          icon: Icons.Story
        }
      ]
    }
  ];

  
  const loggedInSecondaryNav: NavItem[] = [
    { name: 'Dashboard', href: isProvider() ? '/provider/dashboard' : '/dashboard' },
    { name: 'My Applications', href: '/applications' },
    { name: 'Saved Opportunities', href: '/opportunities/saved' },
    { name: 'Notifications', href: '/notifications' },
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/contact' }
  ];

  
  const guestSecondaryNav: NavItem[] = [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/contact' }
  ];

  const secondaryNavItems = loggedIn ? loggedInSecondaryNav : guestSecondaryNav;

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

  const handleLogout = () => {
    logout();
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (mobileMenuOpen) {
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

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }

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

  
  const ChevronIcon = ({ isActive }: { isActive: boolean }) => (
    <svg
      className={`ml-1 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
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
        fill="none"
      />
    </svg>
  );

  return (
    <nav className={`sticky top-0 z-50 bg-[#3e0369] shadow-2xl border-b border-purple-500/50 transition-all duration-300 ${isScrolled ? 'py-0' : 'py-0'}`}>
      {}
      <div className="hidden md:block bg-gradient-to-r from-purple-800/40 to-purple-600/30 border-b border-purple-500/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-6 text-sm">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href!}
                  className="text-purple-200 hover:text-white transition-all duration-200 hover:scale-105"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-purple-200">
                Need help? <span className="text-white font-semibold">+254 72000 000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-white text-[#3e0369] p-2 rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                OpportunityPortal
              </span>
            </Link>
          </div>

          {}
          <div className="hidden xl:flex items-center justify-center flex-1 mx-8">
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
                      className="text-purple-100 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center hover:bg-purple-700/30 hover:shadow-lg"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className={`flex items-center text-purple-100 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-purple-700/30 hover:shadow-lg ${activeDropdown === item.name ? 'text-white bg-purple-700/50 shadow-lg' : ''
                        }`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronIcon isActive={activeDropdown === item.name} />}
                    </button>
                  )}

                  {}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute left-0 transform mt-2 w-80 rounded-xl shadow-2xl bg-gradient-to-br from-[#4d047f] to-[#3e0369] border border-purple-400/50 backdrop-blur-sm overflow-hidden z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white mb-3 pb-2 border-b border-purple-400/30 flex items-center">
                          <span className="bg-white/10 p-1 rounded-lg mr-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                          {item.name}
                        </h3>
                        <div className="space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group border border-transparent hover:border-white/20"
                            >
                              <div className="text-purple-200 mr-3 group-hover:text-white transition-colors duration-200">
                                {dropdownItem.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-white group-hover:text-purple-200 transition-colors duration-200 text-sm">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-xs text-purple-200/70 mt-1 leading-tight">
                                  {dropdownItem.description}
                                </div>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-white">
                                →
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

          {}
          <div className="hidden md:flex items-center space-x-3">
            {loggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => handleDropdownClick('user')}
                  className="flex items-center space-x-2 text-purple-100 hover:text-white focus:outline-none bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-md border-2 border-purple-300">
                    {(() => {
                      const user = getUser();
                      if (!user) return 'U';
                      const name = user.companyName || user.name || 'User';
                      return name.substring(0, 2).toUpperCase();
                    })()}
                  </div>
                  <span className="font-medium text-sm">
                    {(() => {
                      const user = getUser();
                      return user?.companyName || user?.name || 'Account';
                    })()}
                  </span>
                  <ChevronIcon isActive={activeDropdown === 'user'} />
                </button>

                {activeDropdown === 'user' && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="p-3 border-b border-gray-100 bg-gray-50">
                      <p className="text-sm font-bold text-gray-900">
                        {(() => {
                          const user = getUser();
                          return user?.companyName || user?.name || 'My Account';
                        })()}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{getUser()?.email || 'Manage your preferences'}</p>
                    </div>
                    <div className="py-1">
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profile
                      </Link>
                      <Link
                        href={isProvider() ? '/provider/dashboard' : '/dashboard'}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Dashboard
                      </Link>
                      <Link
                        href="/applications"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        My Applications
                      </Link>
                      <Link
                        href="/opportunities/saved"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        Saved Items
                      </Link>
                    </div>
                    <div className="border-t border-gray-100 py-1">
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/opportunities">
                  <Button variant="outline" className="text-sm px-4 py-2.5 border-white/80 text-white hover:bg-white hover:text-[#3e0369] font-medium transition-all duration-300 hover:scale-105">
                    Post Opportunities
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="text-sm px-4 py-2.5 border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-[#3e0369] font-medium transition-all duration-300 hover:scale-105">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" className="text-sm px-5 py-2.5 bg-gradient-to-r from-white to-purple-100 text-[#3e0369] hover:from-purple-100 hover:to-white hover:scale-105 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {}
          <div className="xl:hidden flex items-center">
            <button
              ref={hamburgerButtonRef}
              className="text-purple-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 p-2 rounded-lg transition-all duration-300 hover:bg-purple-700/30"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {}
        <div
          ref={mobileMenuRef}
          className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
        >
          <div className="bg-[#4d047f] rounded-xl shadow-inner p-4 space-y-2 border border-purple-500/30">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-purple-500/30 last:border-0 pb-2 last:pb-0">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-purple-100 hover:text-white hover:bg-purple-600/30 rounded-lg transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-3 text-purple-100 hover:text-white hover:bg-purple-600/30 rounded-lg transition-colors font-medium"
                    >
                      {item.name}
                      <ChevronIcon isActive={mobileDropdown === item.name} />
                    </button>
                    <div
                      className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${mobileDropdown === item.name ? 'max-h-96 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      {item.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center px-4 py-2 text-sm text-purple-200 hover:text-white hover:bg-purple-600/20 rounded-lg transition-colors"
                        >
                          <span className="mr-3 opacity-70">{dropdownItem.icon}</span>
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {}
            <div className="pt-4 mt-4 border-t border-purple-500/30 space-y-3">
              {loggedIn ? (
                <>
                  <Link href="/profile" className="block w-full">
                    <Button variant="outline" className="w-full justify-center border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-[#3e0369]">
                      My Profile
                    </Button>
                  </Link>
                  <Link href={isProvider() ? '/provider/dashboard' : '/dashboard'} className="block w-full">
                    <Button variant="primary" className="w-full justify-center bg-white text-[#3e0369] hover:bg-purple-100">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    onClick={() => { handleLogout(); closeMobileMenu(); }}
                    variant="outline"
                    className="w-full justify-center border-red-400 text-red-300 hover:bg-red-500 hover:text-white"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block w-full">
                    <Button variant="outline" className="w-full justify-center border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-[#3e0369]">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register" className="block w-full">
                    <Button variant="primary" className="w-full justify-center bg-gradient-to-r from-white to-purple-100 text-[#3e0369]">
                      Get Started
                    </Button>
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