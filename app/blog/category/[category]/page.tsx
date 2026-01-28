import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import type { Metadata } from 'next';

const categoryDisplayNames: Record<string, string> = {
  'caregiving-tips': 'Caregiving Tips',
  'health-safety': 'Health & Safety',
  'health-wellness': 'Health & Wellness',
  'health-guide': 'Health Guide',
  'caregiver-support': 'Caregiver Support',
  'mental-health': 'Mental Health',
};

const categoryDescriptions: Record<string, string> = {
  'caregiving-tips': 'Essential tips and strategies for caregivers to provide compassionate, effective care while managing stress and maintaining work-life balance.',
  'health-safety': 'Comprehensive guides on preventing common health issues and creating a safe home environment for seniors.',
  'health-wellness': 'Articles focusing on overall wellness, nutrition, fitness, and lifestyle choices for healthy aging.',
  'health-guide': 'Detailed health information and medical guidance for managing chronic conditions and age-related health concerns.',
  'caregiver-support': 'Resources and support for caregivers dealing with emotional, physical, and financial challenges of caregiving.',
  'mental-health': 'Resources and articles on mental health, cognitive wellness, emotional support, and psychological well-being for seniors and caregivers.',
};

export function generateStaticParams() {
  const categories = ['caregiving-tips', 'health-safety', 'health-wellness', 'health-guide', 'caregiver-support', 'mental-health'];
  return categories.map((category) => ({
    category,
  }));
}

export const generateMetadata = ({ params }: { params: { category: string } }): Metadata => {
  const displayName = categoryDisplayNames[params.category] || params.category;
  const description = categoryDescriptions[params.category] || `Read articles about ${displayName}`;
  
  return {
    title: `${displayName} | Bella Healthcare Blog`,
    description,
  };
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categorySlug = params.category.toLowerCase();
  const categoryName = categoryDisplayNames[categorySlug] || categorySlug;
  const categoryDescription = categoryDescriptions[categorySlug] || '';

  // Normalize category name for matching
  const normalizeCategory = (cat: string) => {
    return cat.toLowerCase().replace(/&/g, '').replace(/\s+/g, '').trim();
  };

  const categoryNormalized = normalizeCategory(categoryName);
  
  const categoryPosts = blogPosts.filter((post) => 
    normalizeCategory(post.category) === categoryNormalized
  );

  return (
    <div className="bg-white dark:bg-bella-sky/20">
      {/* Header */}
      <section className="py-12 bg-gradient-bella text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <h1 className="text-5xl font-black mb-4">{categoryName}</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {categoryDescription}
          </p>
          <p className="text-white/70 mt-4">
            {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="bg-white dark:bg-bella-sky/40 rounded-xl overflow-hidden border border-bella-orange/20 hover:shadow-xl hover:border-bella-orange/50 transition-all group h-full flex flex-col cursor-pointer">
                    {/* Featured Image */}
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
                      {/* Meta Info */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-bella-orange/20 text-bella-orange text-xs font-bold rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-bella-sky dark:text-white mb-3 line-clamp-2 group-hover:text-bella-orange transition">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Author & Date */}
                      <div className="border-t border-bella-orange/20 pt-4 space-y-2 text-xs text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <div className="inline-flex items-center gap-2 text-bella-orange font-bold group-hover:gap-3 transition-all mt-4">
                        Read More →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No articles found in this category yet.
              </p>
              <Link href="/blog" className="inline-block mt-6 text-bella-orange hover:text-bella-orange/80 font-bold">
                Browse all articles →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-bella-cream dark:bg-bella-sky/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-8">Other Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categoryDisplayNames).map(([slug, name]) => {
              if (slug === categorySlug) return null;
              const count = blogPosts.filter((p) => 
                normalizeCategory(p.category) === normalizeCategory(name)
              ).length;
              return (
                <Link
                  key={slug}
                  href={`/blog/category/${slug}`}
                  className="group bg-white dark:bg-bella-sky/60 p-6 rounded-lg border border-bella-orange/20 hover:border-bella-orange/50 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-bold text-bella-sky dark:text-white group-hover:text-bella-orange transition mb-2">
                    {name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {count} article{count !== 1 ? 's' : ''}
                  </p>
                  <p className="text-bella-orange font-bold group-hover:translate-x-1 transition-transform mt-3">
                    Explore →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-bella text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-black mb-4">Need Personalized Care Guidance?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Our care experts can help you understand the best options for your family's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-bella-orange hover:bg-bella-orange/90 text-bella-sky font-bold rounded-lg transition-all inline-block">
                Contact Us
              </Link>
              <Link href="/care-plan" className="px-8 py-3 border-2 border-bella-orange hover:bg-bella-orange/10 text-white font-bold rounded-lg transition-all inline-block">
                Build Your Care Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
