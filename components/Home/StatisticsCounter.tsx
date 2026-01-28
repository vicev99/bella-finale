'use client';

import { motion } from 'framer-motion';
import { Heart, Award, Users, CheckCircle } from 'lucide-react';

const StatisticsCounter = () => {
  const stats = [
    { icon: Heart, label: 'Clients Served', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Users, label: 'Expert Caregivers', value: '150+' },
    { icon: CheckCircle, label: 'OHCQ Licensed', value: 'Non-Expiring' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">By The Numbers</h2>
          <p className="text-xl text-blue-100">Trusted by Maryland families since 2015</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;
