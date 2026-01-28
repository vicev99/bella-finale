'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-blue-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive in-home care tailored to your loved one's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl border-2 border-gray-100 hover:border-blue-900 shadow-md hover:shadow-xl p-8 transition cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition">
                  <Icon className="w-7 h-7 text-blue-900 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-block text-blue-900 font-bold hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-blue-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-800 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
