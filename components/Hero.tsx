'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, Phone, Heart } from 'lucide-react';
import { VideoSlideshow } from './VideoSlideshow';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-bella overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://video.unsplash.com/video-1609244824649-1a6f7a1c3e4e?w=1920"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-bella-sky/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="inline-block bg-bella-orange/20 border border-bella-orange px-4 py-2 rounded-full">
              <p className="text-bella-orange font-semibold text-sm">
                🏅 Maryland OHCQ Non-Expiring License
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Compassionate In-Home Care for Maryland Families
            </h1>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl space-y-3">
              <p className="font-bold text-bella-orange">✓ OHCQ Licensed (Non-Expiring)</p>
              <p className="font-bold text-bella-orange">✓ No Survey Required • COMAR 10.07.05 Compliant</p>
              <p className="font-bold text-bella-orange">✓ Licensed Administrator: Manfred Tambe</p>
              <p className="font-bold text-bella-orange">✓ Serving All Howard, Prince George's, Montgomery, Anne Arundel & Baltimore Counties</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/care-plan"
                className="bg-bella-orange hover:bg-bella-orange/90 text-bella-sky font-black px-8 py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Heart size={20} />
                Start Care Plan
              </Link>
              <a
                href="tel:+14105550100"
                className="border-2 border-bella-orange hover:bg-bella-orange/10 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-all border border-white/20">
                <Download size={18} />
                <a href="/license.pdf">Download Official License</a>
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full min-h-96 hidden lg:block"
          >
            <VideoSlideshow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
