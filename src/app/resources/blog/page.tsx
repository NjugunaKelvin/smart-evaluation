'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        {
            title: 'How to Win Government Tenders in 2025',
            excerpt: 'Strategies and tips for navigating the new procurement regulations and increasing your success rate.',
            category: 'Guides',
            date: 'Dec 1, 2025',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
            slug: 'how-to-win-tenders'
        },
        {
            title: 'The Future of Smart Contracts in Procurement',
            excerpt: 'Exploring how blockchain and AI are revolutionizing the way businesses handle contracts.',
            category: 'Technology',
            date: 'Nov 28, 2025',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
            slug: 'smart-contracts-future'
        },
        {
            title: 'Top 10 Sectors for Growth in East Africa',
            excerpt: 'A detailed analysis of the emerging markets and opportunities in the region.',
            category: 'Market Insights',
            date: 'Nov 25, 2025',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
            slug: 'growth-sectors-east-africa'
        },
        {
            title: 'Optimizing Your Business Profile for Evaluators',
            excerpt: 'What evaluators look for and how to make your business stand out from the competition.',
            category: 'Tips',
            date: 'Nov 20, 2025',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000',
            slug: 'optimize-profile'
        },
        {
            title: 'Understanding Compliance Requirements',
            excerpt: 'A comprehensive guide to the legal and regulatory requirements for government suppliers.',
            category: 'Compliance',
            date: 'Nov 15, 2025',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
            slug: 'compliance-guide'
        },
        {
            title: 'Success Story: From Startup to Major Supplier',
            excerpt: 'How one local tech company used SmartEval to secure their first major government contract.',
            category: 'Case Study',
            date: 'Nov 10, 2025',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
            slug: 'success-story-startup'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-[#3e0369] py-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
                    <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & News</h1>
                    <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                        Latest updates, guides, and success stories from the world of business opportunities.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Link href={`/resources/blog/${post.slug}`} key={index} className="group">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-700 uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-gray-400 text-xs font-medium mb-3">{post.date}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                                        Read Article
                                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
