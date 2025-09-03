'use client'
import Card from '@/components/ui/Card';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      content: "SmartEval has transformed how we find relevant projects. The transparency in evaluation means we know exactly where we stand and how to improve our proposals.",
      author: "Njuguna Kelvin",
      company: "Tech Solutions Inc.",
      role: "CEO"
    },
    {
      id: 2,
      content: "The quality of opportunities on SmartEval is unmatched. We've grown our business by 40% since joining the platform and secured funding we wouldn't have accessed otherwise.",
      author: "Mariam Mboya",
      company: "Cloud Innovations",
      role: "Director"
    },
    {
      id: 3,
      content: "As a small business, accessing government tenders was always challenging. SmartEval leveled the playing field and helped us win our first major contract.",
      author: "James Mwangi",
      company: "GreenBuild Constructions",
      role: "Managing Partner"
    }
  ];

  return (
    <section className="py-16 bg-gray-800 border-t border-gray-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Trusted by Service Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-900 border-gray-700 p-6 text-left h-full">
              <div className="mb-4 text-yellow-400">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-300 italic mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full mr-3 flex items-center justify-center text-green-500 font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Join Our Growing Community</h3>
          <p className="text-gray-400 mb-6">1,200+ service providers are already growing their business through SmartEval</p>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">95%</div>
              <div className="text-sm text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">Ksh 10B+</div>
              <div className="text-sm text-gray-400">Funding Accessed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">500+</div>
              <div className="text-sm text-gray-400">Active Tenders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}