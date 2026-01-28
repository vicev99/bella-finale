'use client';

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-bella-cream to-white dark:from-black dark:to-bella-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-bella-sky dark:text-white mb-4">
            Trusted by Maryland Families
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Real stories from families whose lives we've touched
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20 hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-bella-orange text-bella-orange" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.relation}`}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover"
                  decoding="async"
                  style={{ width: '48px', height: '48px' }}
                />
                <div>
                  <p className="font-bold text-bella-sky dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.relation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
