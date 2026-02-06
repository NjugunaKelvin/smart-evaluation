import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">OpportunityPortal</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming how service providers connect with meaningful projects through our transparent, equitable evaluation platform.
            </p>

            {}
            <div className="mb-6 space-y-2">
              <div className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-sm">Jadala Place, Along Ngong Lane</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-sm">+254 720000 00</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-sm">info@nothing.com</span>
              </div>
            </div>

            {}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">SUBSCRIBE TO UPDATES</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-900 border border-gray-700 rounded-l-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Get the latest tender opportunities and updates</p>
            </div>
          </div>

          {}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Categories</h3>
            <ul className="space-y-3">
              <li><Link href="/tenders/government" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Constructions & Engineering
              </Link></li>
              <li><Link href="/tenders/construction" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Information Technology
              </Link></li>
              <li><Link href="/tenders/it" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Professional & Business services
              </Link></li>
              <li><Link href="/tenders/healthcare" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Industrial Supply
              </Link></li>
              <li><Link href="/tenders/education" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Logistics & Suppy Chain
              </Link></li>
              <li><Link href="/tenders/consulting" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Consulting Services
              </Link></li>
              <li><Link href="/tenders/transportation" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Medical, & Pharmaceutical
              </Link></li>
              <li><Link href="/tenders/transportation" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Marketing, Media, & Creative
              </Link></li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">For Providers</h3>
            <ul className="space-y-3">
              <li><Link href="/provider/register" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Create Funder Account
              </Link></li>
              <li><Link href="/provider/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Funder Dashboard
              </Link></li>
              <li><Link href="/provider/dashboard?view=verification" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Verification Process
              </Link></li>
              <li><Link href="/provider/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Go to the dashboard
              </Link></li>
              <li><Link href="/provider/dashboard?view=success_stories" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Success Stories
              </Link></li>
              <li><Link href="/provider/dashboard?view=training" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Training & Certification
              </Link></li>
              <li><Link href="/provider/dashboard?view=performance" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Performance Metrics
              </Link></li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">For Clients</h3>
            <ul className="space-y-3">
              <li><Link href="/clients/register" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Post an opportunity
              </Link></li>
              <li><Link href="/clients/evaluation" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Evaluation Process
              </Link></li>
              <li><Link href="/clients/pricing" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Pricing Plans
              </Link></li>
              <li><Link href="/clients/success-stories" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Client Testimonials
              </Link></li>
              <li><Link href="/clients/support" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Client Support
              </Link></li>
              <li><Link href="/clients/enterprise" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Enterprise Solutions
              </Link></li>
              <li><Link href="/clients/api" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                API Integration
              </Link></li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/resources/blog" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Blog & Insights
              </Link></li>
              <li><Link href="/resources/guides" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Bid Writing Guides
              </Link></li>
              <li><Link href="/resources/webinars" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Webinars & Workshops
              </Link></li>
              <li><Link href="/resources/templates" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Document Templates
              </Link></li>
              <li><Link href="/resources/faq" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Frequently Asked Questions
              </Link></li>
              <li><Link href="/resources/glossary" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Industry Glossary
              </Link></li>
              <li><Link href="/resources/help-center" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Help Center
              </Link></li>
            </ul>
          </div>
        </div>

        {}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-800">
          {}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                About Us
              </Link></li>
              <li><Link href="/leadership" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Leadership Team
              </Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Careers
              </Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Partners
              </Link></li>
              <li><Link href="/newsroom" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Newsroom
              </Link></li>
              <li><Link href="/newsroom" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Contact Support
              </Link></li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Privacy Policy
              </Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Terms of Service
              </Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Cookie Policy
              </Link></li>
              <li><Link href="/data-processing" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Data Processing Agreement
              </Link></li>
              <li><Link href="/compliance" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Compliance
              </Link></li>
              <li><Link href="/compliance" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                How we handle Data.
              </Link></li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Contact Support
              </Link></li>
              <li><Link href="/help-desk" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Help Desk
              </Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                System Status
              </Link></li>
              <li><Link href="/documentation" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Documentation
              </Link></li>
              <li><Link href="/feedback" className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-1">
                Provide Feedback
              </Link></li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Global Offices</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm block py-1 font-medium">Nairobi, Kenya</span></li>
              <li><span className="text-gray-400 text-sm block py-1 font-medium">United Kingdom</span></li>
              <li><span className="text-gray-400 text-sm block py-1 font-medium">European Union</span></li>
              <li><span className="text-gray-400 text-sm block py-1 font-medium">Asia Pacific</span></li>
              <li><span className="text-gray-400 text-sm block py-1 font-medium">Middle East</span></li>
            </ul>
          </div>
        </div>

        {}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SmartEval, Inc. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/accessibility" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              Accessibility
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              Sitemap
            </Link>
            <Link href="/esg" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              ESG Commitment
            </Link>
          </div>
        </div>
      </div>

      {}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-500 text-sm">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mr-1">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              ISO 27001 Certified
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mr-1">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mr-1">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Secure & Encrypted
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mr-1">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              PCI DSS Compliant
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}