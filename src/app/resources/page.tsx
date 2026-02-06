import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const blogPosts = [
  {
    id: 1,
    title: 'How to Write a Winning Tender Proposal',
    excerpt: 'Learn the key elements that make a tender proposal stand out from the competition.',
    date: '2023-11-15',
    category: 'Proposal Writing'
  },
  {
    id: 2,
    title: 'Understanding Evaluation Criteria',
    excerpt: 'A deep dive into how tenders are evaluated and what evaluators look for.',
    date: '2023-11-10',
    category: 'Evaluation'
  },
  {
    id: 3,
    title: 'Digital Transformation in Procurement',
    excerpt: 'How technology is changing the way organizations procure services.',
    date: '2023-11-05',
    category: 'Industry Trends'
  },
  {
    id: 4,
    title: 'Building a Competitive Pricing Strategy',
    excerpt: 'Strategies for pricing your services competitively while maintaining profitability.',
    date: '2023-10-28',
    category: 'Pricing'
  },
  {
    id: 5,
    title: 'The Future of Remote Work in Service Delivery',
    excerpt: 'How remote work is transforming service delivery models across industries.',
    date: '2023-10-20',
    category: 'Industry Trends'
  },
  {
    id: 6,
    title: 'Compliance and Regulatory Requirements',
    excerpt: 'Understanding the legal and regulatory aspects of tender submissions.',
    date: '2023-10-15',
    category: 'Compliance'
  }
];

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'Click on the "Get Started" button in the top navigation and fill out the registration form with your company details.'
  },
  {
    question: 'What types of Opportunities are available?',
    answer: 'We have opportunities across various industries including technology, construction, consulting, marketing, and more.'
  },
  {
    question: 'How does the evaluation process work?',
    answer: 'Each opportunity has specific evaluation criteria. Proposals are evaluated based on technical merit, price, and other factors specified in the opportunity documents.'
  },
  {
    question: 'Can I save opportunities to review later?',
    answer: 'Yes, you can save opportunities to your watchlist by clicking the Save button on any opportunity listing.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, bank transfers, and other payment methods depending on your region.'
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Resources & Learning</h1>
        
        {}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-700 rounded-t-lg mb-4"></div>
                <div>
                  <span className="text-sm text-blue-400 mb-2">{post.category}</span>
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <Button variant="outline">Read More</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}