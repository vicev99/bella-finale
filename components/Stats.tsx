'use client';

import { motion } from 'framer-motion';
import { Users, Award, Heart, MapPin } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: Users, label: '500+ Families Served', value: '500+' },
    { icon: Award, label: 'Non-Expiring License', value: 'OHCQ' },
    { icon: Heart, label: 'Years Experience', value: '15+' },
    { icon: MapPin, label: 'Maryland Counties', value: '5' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-bella-cream to-white dark:from-bella-sky dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-white dark:bg-bella-sky/30 border border-bella-orange/20 hover:border-bella-orange/50 transition-all"
            >
              <stat.icon className="w-12 h-12 text-bella-orange mx-auto mb-4" />
              <p className="text-3xl font-black text-bella-sky dark:text-bella-orange mb-2">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-300 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
