'use client';

import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { marylandLocations, marylandRegions } from '@/data/locations';
import { MapPin, Phone, Globe } from 'lucide-react';
import { useState } from 'react';

export default function LocationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredLocations = selectedRegion
    ? marylandLocations.filter((loc) => {
        const region = marylandRegions.find((r) => r.counties.includes(loc.county));
        return region?.id === selectedRegion;
      })
    : marylandLocations;

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-4">Senior Care Across Maryland</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Professional in-home healthcare services serving all 24 Maryland counties and the regions they represent.
          </p>
        </div>
      </section>

      {/* Regional Filter */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Filter by Region</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedRegion(null)}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                selectedRegion === null
                  ? 'bg-bella-sky text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Regions
            </button>
            {marylandRegions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  selectedRegion === region.id
                    ? 'bg-bella-sky text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">
            Service Areas ({filteredLocations.length})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <Link key={location.id} href={`/locations/${location.id}`}>
                <div className="bg-white dark:bg-gray-900 h-full p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-bella-sky hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="text-bella-sky flex-shrink-0 mt-1" size={24} />
                    <h3 className="font-black text-gray-900 dark:text-white text-lg">{location.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{location.description}</p>
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">CITIES SERVED:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.cities.slice(0, 3).map((city, i) => (
                        <span key={i} className="bg-bella-sky/10 text-bella-sky text-xs px-2 py-1 rounded">
                          {city}
                        </span>
                      ))}
                      {location.cities.length > 3 && (
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded">
                          +{location.cities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {location.serviceRadius} radius
                    </span>
                    <span className="text-bella-sky font-bold hover:text-bella-sky/80 transition-colors">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">Maryland Service Regions</h2>
          <div className="space-y-8">
            {marylandRegions.map((region) => (
              <div key={region.id} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <Globe className="text-bella-sky flex-shrink-0 mt-1" size={32} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{region.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{region.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">COUNTIES:</p>
                      <div className="flex flex-wrap gap-2">
                        {region.counties.map((county, i) => (
                          <span key={i} className="bg-bella-sky/10 text-bella-sky text-sm px-3 py-1 rounded">
                            {county}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Key Cities: {region.cities.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Do you serve all of Maryland?',
                a: 'Yes! We provide in-home care services throughout all 24 Maryland counties, with a focus on Central Maryland including the Baltimore metropolitan area, Laurel, and surrounding regions.',
              },
              {
                q: 'What areas outside our county do you serve?',
                a: 'Each location page shows our specific service radius. We typically serve within 35-45 miles of our primary service areas. Contact us to confirm service availability for your specific address.',
              },
              {
                q: 'How quickly can you start services in my county?',
                a: 'Availability varies by location and caregiver demand. We can often begin services within 1-2 weeks. Contact us to discuss your timeline and specific needs.',
              },
              {
                q: 'Do you accept insurance in all counties?',
                a: 'We work with most major insurance plans across Maryland. Coverage varies by policy and location. Our team will verify your benefits and explain your options.',
              },
              {
                q: 'Can I choose my caregiver?',
                a: 'Absolutely. We work closely with families to match the right caregiver based on skills, experience, personality, and specific care needs.',
              },
              {
                q: 'What if I need emergency care?',
                a: 'We offer 24/7 support across all Maryland locations. Our coordinators are available around the clock for emergencies and urgent requests.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">{item.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Find your county above or contact us today to learn about in-home care services in your area.
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
              className="bg-white hover:bg-gray-100 text-bella-sky font-bold px-8 py-4 rounded-lg transition-all text-lg flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call (410) 555-1234
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
