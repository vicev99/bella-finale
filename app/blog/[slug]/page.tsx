'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="bg-white dark:bg-bella-sky/20">
      {/* Header */}
      <section className="py-12 bg-gradient-bella text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <h1 className="text-5xl font-black mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
            <span className="px-3 py-1 bg-bella-orange text-bella-sky text-sm font-bold rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gray-100 dark:bg-gray-800">
            <img
              src={post.image}
              alt={post.title}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t-2 border-bella-orange/20">
            <h3 className="text-xl font-bold text-bella-sky mb-3">About the Author</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {post.author} is a healthcare professional with extensive expertise in senior care, wellness, and caregiving support. They are committed to providing evidence-based, practical advice to help families navigate the aging journey.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-bella-cream dark:bg-bella-sky/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-bella-sky dark:text-white mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-white dark:bg-bella-sky/40 rounded-xl overflow-hidden border border-bella-orange/20 hover:shadow-xl hover:border-bella-orange/50 transition-all group h-full flex flex-col cursor-pointer">
                    <div className="h-40 overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-bold text-bella-sky dark:text-white mb-2 line-clamp-2 group-hover:text-bella-orange transition">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-1 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <Calendar size={12} />
                        {new Date(relatedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-bella text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-black mb-4">Ready to Learn More?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Our care experts at Bella Healthcare Services are here to help. Contact us for personalized guidance and care solutions.
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
