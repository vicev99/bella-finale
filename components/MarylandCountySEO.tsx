import Link from 'next/link';
import { marylandLocations, marylandRegions } from '@/data/locations';
import { MapPin, Phone } from 'lucide-react';

export function MarylandCountySEO() {
  // Group locations by region for better organization
  const regionMap = new Map();
  
  marylandRegions.forEach((region) => {
    regionMap.set(region.id, {
      name: region.name,
      counties: marylandLocations.filter((loc) => region.counties.includes(loc.county)),
    });
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Senior Care Across All Maryland Counties
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Bella Healthcare provides professional in-home care services throughout all 24 Maryland counties, from Western Maryland to the Eastern Shore. Find care in your region.
          </p>
        </div>

        {/* Region Blocks */}
        <div className="space-y-12">
          {Array.from(regionMap.entries()).map(([regionId, regionData]) => (
            <div key={regionId} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <MapPin className="text-bella-sky" size={32} />
                {regionData.name}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {regionData.counties.map((county) => (
                  <Link
                    key={county.id}
                    href={`/locations/${county.id}`}
                    className="group p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-bella-sky hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-bella-sky transition-colors">
                          {county.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                          {county.cities.slice(0, 2).join(', ')}...
                        </p>
                      </div>
                      <div className="text-bella-sky font-bold group-hover:scale-110 transition-transform">→</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Locations */}
        <div className="mt-12 text-center">
          <Link
            href="/locations"
            className="inline-block bg-bella-sky hover:bg-bella-sky/90 text-white font-bold px-8 py-4 rounded-lg transition-all text-lg"
          >
            View All Maryland Locations & Service Areas
          </Link>
        </div>

        {/* SEO Rich Text */}
        <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Maryland Senior Care Coverage</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Bella Healthcare Services is proud to serve seniors and families across all 24 Maryland counties. Whether you're in Baltimore City, Montgomery County, Prince George's County, Anne Arundel County, Howard County, or any other Maryland county, we have experienced caregivers ready to provide compassionate, professional in-home care.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our service areas include Western Maryland (Frederick, Washington, Allegany, Garrett counties), Northern Maryland (Harford, Cecil, Carroll counties), Central Maryland (Baltimore City, Baltimore County, and the DC metro area), Southern Maryland (Charles, Calvert, St. Mary's counties), and the entire Eastern Shore (Talbot, Dorchester, Wicomico, Worcester, Somerset, Queen Anne's, Caroline, and Kent counties). OHCQ Licensed, we're committed to providing the highest quality senior care throughout Maryland.
          </p>
        </div>
      </div>
    </section>
  );
}
