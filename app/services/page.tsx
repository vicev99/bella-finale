import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-Home Care Services | Bella Healthcare | OHCQ Licensed Maryland',
  description: 'Explore comprehensive in-home care services including companion care, dementia care, skilled nursing, and therapies. OHCQ licensed. Serving all Maryland counties.',
  keywords: 'in-home care services maryland, senior care services, dementia care, skilled nursing, home healthcare maryland',
  openGraph: {
    title: 'Professional In-Home Care Services | Bella Healthcare',
    description: 'Companion care, dementia care, skilled nursing, therapies, and more. OHCQ licensed across Maryland.',
    type: 'website',
  },
};

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

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-bella text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black mb-6">Our Premium Services</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive in-home care solutions designed to meet your family's unique needs,
            delivered with warmth, professionalism, and dignity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-bella-sky/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20 hover:border-bella-orange/50 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-bella rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent className="text-white" size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-3 group-hover:text-bella-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-bella-orange font-bold">
                    Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
