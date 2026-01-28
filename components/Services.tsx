'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const iconMap: Record<string, React.ComponentType<any>> = {
    Heart: Icons.Heart,
    Users: Icons.Users,
    Brain: Icons.Brain,
    Activity: Icons.Activity,
    Home: Icons.Home,
    Smile: Icons.Smile,
    Stethoscope: Icons.Stethoscope,
    Clock: Icons.Clock,
    Nurse: Icons.Heart,
  };

  return (
    <section className="py-20 bg-white dark:bg-bella-sky/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-bella-sky dark:text-white mb-4"
          >
            Our Premium Services
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Comprehensive care solutions tailored to your family's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-white to-bella-cream dark:from-bella-sky/40 dark:to-bella-sky/20 p-8 rounded-xl border border-bella-orange/20 hover:border-bella-orange/50 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-bella rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent className="text-white" size={32} />}
                </div>
                <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-bella-orange hover:text-bella-orange/80 font-bold transition-all group"
                >
                  Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
