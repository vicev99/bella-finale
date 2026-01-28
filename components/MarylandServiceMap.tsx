'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function MarylandServiceMap() {
  const counties = [
    { name: 'Howard County', position: 'left-1/2 top-1/3' },
    { name: 'Prince George\'s County', position: 'left-1/2 top-1/2' },
    { name: 'Montgomery County', position: 'left-1/3 top-1/4' },
    { name: 'Anne Arundel County', position: 'right-1/4 top-2/5' },
    { name: 'Baltimore County', position: 'right-1/3 top-1/4' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-bella-cream dark:from-bella-sky dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-bella-sky dark:text-white text-center mb-16">
          Serving All of Central Maryland
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Bella Healthcare Services proudly serves families across Maryland's central region,
              providing compassionate in-home care tailored to each community's unique needs.
            </p>
            <div className="space-y-4">
              {counties.map((county) => (
                <motion.div
                  key={county.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-bella-sky/40 rounded-lg border border-bella-orange/20 hover:border-bella-orange/50 transition-all"
                >
                  <MapPin className="text-bella-orange flex-shrink-0" size={24} />
                  <span className="font-semibold text-bella-sky dark:text-white">
                    {county.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Maryland Map Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-full h-96 rounded-2xl border-2 border-bella-orange/30 overflow-hidden"
          >
            <img
              src="/images/maryland-service-map.png"
              alt="Maryland Service Map showing Howard, Prince George's, Montgomery, Anne Arundel, and Baltimore counties service areas"
              loading="eager"
              className="w-full h-full object-cover"
              role="img"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
