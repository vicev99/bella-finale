import { COMPANY, TEAM } from '@/lib/constants';
import { Star } from 'lucide-react';
import { LicenseBadge } from '@/components/LicenseBadge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Bella Healthcare Services | OHCQ Licensed | Manfred Tambe',
  description: 'Learn about Bella Healthcare Services, founded by Manfred Tambe. 15+ years of experience in compassionate, OHCQ-licensed in-home senior care across all Maryland counties.',
  keywords: 'about bella healthcare, senior care company maryland, OHCQ licensed healthcare provider, manfred tambe',
  openGraph: {
    title: 'About Bella Healthcare Services | Maryland Senior Care',
    description: 'Compassionate in-home care founded by Manfred Tambe. OHCQ Licensed. Serving all Maryland counties.',
    type: 'website',
  },
};

export default function About() {
  return (
    <div className="bg-white dark:bg-bella-sky/20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-bella text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 inline-block">
            <LicenseBadge />
          </div>
          <h1 className="text-5xl font-black mb-6">About Bella Healthcare Services</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Founded on principles of compassion, excellence, and dignity, Bella Healthcare Services
            has been serving Maryland families since 2010.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-black text-bella-sky dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Manfred and Mirabelle Tambe co-founded Bella Healthcare Services with a simple yet powerful vision:
                to provide in-home care that treats every client like family. With Mirabelle's financial vision and support, and Manfred's over 15 years
                of healthcare management experience, they recognized a gap in the market for
                truly compassionate, professional care.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Today, Bella Healthcare Services proudly serves over 500 families across central
                Maryland, backed by our Maryland OHCQ non-expiring license and a team of dedicated,
                highly trained caregivers.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/bella-about-hero.png"
                alt="Bella Healthcare team"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-bella-cream dark:bg-bella-sky/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Our Mission',
                description:
                  'To provide compassionate, professional in-home care that empowers seniors to maintain dignity, independence, and quality of life.',
              },
              {
                title: 'Our Values',
                description:
                  'Compassion, excellence, integrity, respect, and family-centered care in every interaction.',
              },
              {
                title: 'Our Commitment',
                description:
                  'To exceed regulatory standards, prioritize client safety, and treat every family member with warmth and professionalism.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-bella-sky/60 p-8 rounded-xl border border-bella-orange/20">
                <h3 className="text-2xl font-black text-bella-sky dark:text-bella-orange mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-bella-sky dark:text-white text-center mb-16">
            Meet Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="bg-white dark:bg-bella-sky/40 rounded-xl overflow-hidden border border-bella-orange/20 hover:shadow-xl transition-all"
              >
                <div className="h-96 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-bella-sky dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-bella-orange font-bold text-sm mb-2">{member.title}</p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-bella text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Families Served', value: '500+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Service Areas', value: '5' },
              { label: 'OHCQ Licensed', value: 'Yes' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-black text-bella-orange mb-2">{stat.value}</p>
                <p className="text-white/80 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
