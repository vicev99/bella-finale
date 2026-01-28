'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-bella relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Heart className="absolute top-10 left-10 text-white" size={60} />
        <Heart className="absolute bottom-20 right-20 text-white" size={80} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Ready to Start Your Care Journey?
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let Manfred Tambe and the Bella Healthcare team create a personalized care plan
            for your family. Maryland OHCQ licensed. Non-expiring certification.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              href="/care-plan"
              className="bg-bella-orange hover:bg-bella-orange/90 text-bella-sky font-black px-10 py-4 rounded-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Heart size={24} />
              Build Care Plan
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="border-2 border-bella-orange hover:bg-bella-orange/10 text-white font-bold px-10 py-4 rounded-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone size={24} />
              Call {COMPANY.phone}
            </a>
          </div>

          <p className="text-sm text-white/70">
            Available 24/7 • Free consultation • Serving Howard, Prince George's, Montgomery, Anne Arundel & Baltimore Counties
          </p>
        </motion.div>
      </div>
    </section>
  );
}
