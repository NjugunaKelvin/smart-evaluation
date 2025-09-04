import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Navbar from '@/components/Navbar';

const pricingTiers = [
  {
    name: 'Free',
    price: 'Ksh 0',
    description: 'For individual service providers starting out',
    features: [
      'Access to public tenders',
      '5 proposal submissions per month',
      'Basic support',
      'Email notifications'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: 'Ksh 4999',
    period: '/month',
    description: 'For growing businesses and freelancers',
    features: [
      'Access to all tenders',
      'Unlimited proposal submissions',
      'Priority support',
      'Advanced analytics',
      'Document templates',
      'Custom profile'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations and agencies',
    features: [
      'Dedicated account manager',
      'Custom tender alerts',
      'API access',
      'White-label options',
      'Team collaboration tools',
      'Advanced reporting',
      'Training & onboarding'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that works best for your business. All plans include access to our tender platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${tier.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.period && <span className="text-gray-400">{tier.period}</span>}
              </div>
              <p className="text-gray-300 mb-6">{tier.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={tier.popular ? 'primary' : 'secondary'} className="w-full">
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>

        <Card className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need something else?</h2>
          <p className="text-gray-300 mb-4">
            We offer custom solutions for large enterprises and government organizations.
          </p>
          <Button variant="outline">Contact Our Sales Team</Button>
        </Card>
      </div>
    </div>
  );
}