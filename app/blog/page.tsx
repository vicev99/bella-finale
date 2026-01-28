import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Resources | Senior Care Tips | Bella Healthcare Services',
  description: 'Expert caregiving tips, elder care advice, health resources, and wellness information from Bella Healthcare Services. Learn about dementia care, aging, and senior health.',
  keywords: 'senior care tips, caregiving advice, elder care resources, dementia care, aging parents, health resources',
  openGraph: {
    title: 'Blog & Resources | Senior Care Information',
    description: 'Expert caregiving tips and health resources for families.',
    type: 'website',
  },
};

export default function Blog() {
  return (
    <div className="bg-white dark:bg-bella-sky/20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-bella text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black mb-6">Resources & Blog</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Expert caregiving advice, health tips, and resources to help you and your family navigate the journey of aging.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-white dark:bg-bella-sky/40 rounded-xl overflow-hidden border border-bella-orange/20 hover:shadow-xl hover:border-bella-orange/50 transition-all group cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-bella-orange/20 text-bella-orange text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-bella-sky dark:text-white mb-3 line-clamp-2 group-hover:text-bella-orange transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-bella-orange font-bold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-bella-cream dark:bg-bella-sky/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-bella-sky dark:text-white text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/category/caregiving-tips" className="group">
              <div className="p-6 bg-white dark:bg-bella-sky/60 rounded-xl border border-bella-orange/20 hover:border-bella-orange hover:shadow-lg transition-all text-center h-full">
                <p className="text-lg font-bold text-bella-sky dark:text-white group-hover:text-bella-orange transition">
                  Care Tips
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Browse Articles</p>
              </div>
            </Link>

            <Link href="/blog/category/health-guide" className="group">
              <div className="p-6 bg-white dark:bg-bella-sky/60 rounded-xl border border-bella-orange/20 hover:border-bella-orange hover:shadow-lg transition-all text-center h-full">
                <p className="text-lg font-bold text-bella-sky dark:text-white group-hover:text-bella-orange transition">
                  Health Guide
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Browse Articles</p>
              </div>
            </Link>

            <Link href="/blog/category/caregiver-support" className="group">
              <div className="p-6 bg-white dark:bg-bella-sky/60 rounded-xl border border-bella-orange/20 hover:border-bella-orange hover:shadow-lg transition-all text-center h-full">
                <p className="text-lg font-bold text-bella-sky dark:text-white group-hover:text-bella-orange transition">
                  Caregiver Support
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Browse Articles</p>
              </div>
            </Link>

            <Link href="/blog/category/health-wellness" className="group">
              <div className="p-6 bg-white dark:bg-bella-sky/60 rounded-xl border border-bella-orange/20 hover:border-bella-orange hover:shadow-lg transition-all text-center h-full">
                <p className="text-lg font-bold text-bella-sky dark:text-white group-hover:text-bella-orange transition">
                  Wellness
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Browse Articles</p>
              </div>
            </Link>

            <Link href="/blog/category/health-safety" className="group">
              <div className="p-6 bg-white dark:bg-bella-sky/60 rounded-xl border border-bella-orange/20 hover:border-bella-orange hover:shadow-lg transition-all text-center h-full">
                <p className="text-lg font-bold text-bella-sky dark:text-white group-hover:text-bella-orange transition">
                  Home Safety
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Browse Articles</p>
              </div>
            </Link>

            <Link href="/blog/category/mental-health" className="group">
              <div className="p-6 bg-white dark:bg-bella-sky/60 rounded-xl border border-bella-orange/20 hover:border-bella-orange hover:shadow-lg transition-all text-center h-full">
                <p className="text-lg font-bold text-bella-sky dark:text-white group-hover:text-bella-orange transition">
                  Mental Health
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Browse Articles</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-bella text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-black mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-white/90 mb-8">
              Get weekly caregiving tips, health insights, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-bella-sky placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bella-orange"
              />
              <button className="px-8 py-3 bg-bella-orange hover:bg-bella-orange/90 text-bella-sky font-bold rounded-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
