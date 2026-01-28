'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { marylandLocations, marylandRegions } from '@/data/locations';
import { MapPin, Phone, Clock, CheckCircle, Users, Award } from 'lucide-react';

export default function LocationPage() {
  const params = useParams();
  const locationId = params.county as string;

  const location = marylandLocations.find((loc) => loc.id === locationId);
  const region = marylandRegions.find((reg) => location && reg.counties.includes(location.county));

  if (!location) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Location Not Found</h1>
          <Link href="/locations" className="text-bella-sky hover:text-bella-sky/80">
            ← View All Locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-white/80">
            <MapPin size={20} />
            <p className="text-lg">{region?.name}</p>
          </div>
          <h1 className="text-5xl font-black mb-4">Senior Care in {location.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Professional, compassionate in-home healthcare services for seniors and families throughout{' '}
            {location.name}, including {location.cities.slice(0, 2).join(' and ')} and surrounding areas.
          </p>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <MapPin className="text-bella-sky mb-3" size={32} />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Service Area</h3>
              <p className="text-gray-600 dark:text-gray-400">{location.name}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <Users className="text-bella-sky mb-3" size={32} />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Population</h3>
              <p className="text-gray-600 dark:text-gray-400">{location.population} residents</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <Clock className="text-bella-sky mb-3" size={32} />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Coverage Radius</h3>
              <p className="text-gray-600 dark:text-gray-400">{location.serviceRadius} service area</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <Phone className="text-bella-sky mb-3" size={32} />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Contact</h3>
              <a href="tel:+14105551234" className="text-bella-sky hover:underline font-bold">
                (410) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cities */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">
            Cities We Serve in {location.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {location.cities.map((city, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-bella-sky transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="text-bella-sky flex-shrink-0 mt-1" size={20} />
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{city}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Senior in-home care services available in {city} and surrounding areas
                </p>
                <Link href={`/careers?location=${city}`} className="text-bella-sky hover:underline text-sm font-bold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this County */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">
            Services Available in {location.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Personal Care Assistance',
                description: 'Help with activities of daily living, hygiene, grooming, and dressing',
                icon: Users,
              },
              {
                title: 'Nursing Support',
                description: 'Licensed nurses providing medication management and health monitoring',
                icon: Award,
              },
              {
                title: 'Dementia Care',
                description: 'Specialized care for clients with cognitive decline and memory loss',
                icon: Award,
              },
              {
                title: 'Physical Therapy',
                description: 'Rehabilitation and mobility assistance tailored to individual needs',
                icon: Users,
              },
              {
                title: 'Companion Care',
                description: 'Social engagement and emotional support for isolated seniors',
                icon: Users,
              },
              {
                title: 'Respite Care',
                description: 'Temporary care assistance to give family caregivers a break',
                icon: Award,
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <Icon className="text-bella-sky mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">
            Why Families in {location.name} Choose Bella Healthcare
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'OHCQ Licensed Organization',
                description: 'We hold a non-expiring OHCQ license with excellent compliance record, ensuring highest quality standards.',
              },
              {
                title: 'Local Expertise',
                description: `Our team has deep knowledge of ${location.name}, including local healthcare providers, hospitals, and community resources.`,
              },
              {
                title: 'Experienced Caregivers',
                description: 'All staff are carefully screened, trained, and experienced in providing compassionate senior care.',
              },
              {
                title: '24/7 Availability',
                description: 'We offer flexible scheduling and emergency support to meet your family\'s needs any time.',
              },
              {
                title: 'Personalized Care Plans',
                description: 'Each client receives a customized care plan tailored to their specific health needs and preferences.',
              },
              {
                title: 'Family Communication',
                description: 'Regular updates and open communication with families to ensure peace of mind.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-bella-sky flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Insights */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">
            {location.name} Senior Care Information
          </h2>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {location.name} has a population of approximately {location.population} residents and includes the communities of{' '}
              {location.cities.join(', ')}. Many seniors in {location.name} prefer to age in place, remaining in their own homes
              surrounded by familiar surroundings, family, and community.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              At Bella Healthcare, we understand the unique healthcare needs of seniors in {location.name}. Our experienced care
              team is trained to provide compassionate, professional in-home care services that help your loved ones maintain their
              independence and quality of life.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you're looking for personal care assistance, nursing support, dementia care, or companion services, Bella
              Healthcare is committed to being your trusted partner in senior care throughout {location.name}.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your in-home care needs in {location.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-bella-orange hover:bg-bella-orange/90 text-white font-bold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Contact Us
            </Link>
            <a
              href="tel:+14105551234"
              className="bg-white hover:bg-gray-100 text-bella-sky font-bold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Call (410) 555-1234
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
