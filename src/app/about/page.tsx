import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About SmartEval</h1>
          <p className="text-xl text-gray-300">
            Revolutionizing the way service providers find and apply for tenders
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To create a transparent, efficient, and fair platform that connects service providers 
              with tender opportunities, eliminating barriers and simplifying the procurement process.
            </p>
          </Card>
          
          <Card>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To become the global standard for tender evaluation and procurement, where quality 
              and capability are the primary determinants of success, not connections or bureaucracy.
            </p>
          </Card>
        </div>

        {/* Company Story */}
        <Card className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Founded in 2020, SmartEval emerged from our founders' frustration with the traditional 
              tender process. Having experienced firsthand the inefficiencies, lack of transparency, 
              and barriers that small and medium-sized businesses face when trying to compete for 
              contracts, we set out to create a better solution.
            </p>
            <p>
              Today, SmartEval serves thousands of service providers across multiple industries, 
              helping them discover opportunities that match their expertise and submit winning 
              proposals through our streamlined platform.
            </p>
            <p>
              Our commitment to innovation, fairness, and user experience continues to drive our 
              development as we expand our services and reach new markets.
            </p>
          </div>
        </Card>

        {/* Contact Form */}
        <Card>
          <h2 className="text-2xl font-semibold text-white mb-6">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <Button variant="primary" type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}