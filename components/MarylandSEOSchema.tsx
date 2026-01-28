'use client';

import { useEffect } from 'react';

export function MarylandSEOSchema() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      '@id': 'https://bellahealthcare.md',
      name: 'Bella Healthcare Services',
      image: 'https://bellahealthcare.md/logo.png',
      description: 'Professional in-home senior care services across all Maryland counties. OHCQ licensed.',
      url: 'https://bellahealthcare.md',
      telephone: '+14105551234',
      email: 'info@bellahealthcare.md',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Laurel',
        addressLocality: 'Laurel',
        addressRegion: 'MD',
        postalCode: '20707',
        addressCountry: 'US',
      },
      areaServed: [
        'Allegany County, MD',
        'Anne Arundel County, MD',
        'Baltimore County, MD',
        'Baltimore City, MD',
        'Calvert County, MD',
        'Caroline County, MD',
        'Carroll County, MD',
        'Cecil County, MD',
        'Charles County, MD',
        'Dorchester County, MD',
        'Frederick County, MD',
        'Garrett County, MD',
        'Harford County, MD',
        'Howard County, MD',
        'Kent County, MD',
        'Montgomery County, MD',
        "Prince George's County, MD",
        "Queen Anne's County, MD",
        'Somerset County, MD',
        "St. Mary's County, MD",
        'Talbot County, MD',
        'Washington County, MD',
        'Wicomico County, MD',
        'Worcester County, MD',
      ],
      priceRange: '$',
      sameAs: [
        'https://www.facebook.com/bellahealthcare',
        'https://www.linkedin.com/company/bella-healthcare-services',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '150',
      },
      medicalBusiness: true,
      knowsAbout: [
        'Senior Care',
        'In-Home Healthcare',
        'Personal Care Assistance',
        'Dementia Care',
        'Physical Therapy',
        'Nursing Support',
        'Companion Care',
      ],
    };

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    // LocalBusiness Schema for multiple locations
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://bellahealthcare.md',
      name: 'Bella Healthcare Services - Maryland',
      description: 'In-home senior care services throughout Maryland',
      url: 'https://bellahealthcare.md',
      telephone: '+14105551234',
      image: 'https://bellahealthcare.md/logo.png',
      hasMap: 'https://www.google.com/maps/search/Bella+Healthcare+Services+Maryland',
      priceRange: '$',
      sameAs: ['https://www.facebook.com/bellahealthcare'],
    };

    const localScript = document.createElement('script');
    localScript.type = 'application/ld+json';
    localScript.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(localScript);

    // Medical Service Schema
    const medicalServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalService',
      name: 'In-Home Senior Care',
      description: 'Professional in-home healthcare services for seniors across Maryland',
      provider: {
        '@type': 'MedicalBusiness',
        name: 'Bella Healthcare Services',
        url: 'https://bellahealthcare.md',
      },
      areaServed: 'Maryland',
      availableService: [
        'Personal Care Assistance',
        'Nursing Support',
        'Dementia Care',
        'Physical Therapy',
        'Companion Care',
        'Respite Care',
      ],
    };

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.textContent = JSON.stringify(medicalServiceSchema);
    document.head.appendChild(serviceScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(localScript);
      document.head.removeChild(serviceScript);
    };
  }, []);

  return null;
}
