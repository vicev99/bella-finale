import { COMPANY, CONTACT, SOCIAL_LINKS } from './constants';

export const siteConfig = {
  title: 'Bella Healthcare Services | Premium In-Home Care - Maryland OHCQ Licensed',
  description: 'Luxury in-home care for Maryland seniors. OHCQ licensed, non-expiring license, 24/7 availability. Companion care, personal care, dementia care, post-operative care.',
  url: 'https://bellahealthcare.com',
  ogImage: '/og-image.jpg',
  locale: 'en_US',
};

export const generateMetadata = {
  homepage: {
    title: 'Bella Healthcare | Premium In-Home Care for Maryland',
    description: 'Experience luxury in-home care. OHCQ licensed, 24/7 available, serving all of Maryland.',
  },
  services: {
    title: 'Services | Bella Healthcare',
    description: 'Companion care, personal care, dementia care, post-operative care, 24-hour care, respite care.',
  },
  about: {
    title: 'About Us | Bella Healthcare',
    description: 'Trusted by Maryland families since 2015. OHCQ licensed, non-expiring license.',
  },
  careers: {
    title: 'Careers | Bella Healthcare',
    description: 'Join our team of compassionate caregivers. Competitive pay, benefits, flexible hours.',
  },
  blog: {
    title: 'Blog | Bella Healthcare',
    description: 'Expert tips and resources for senior care.',
  },
  trustLicensing: {
    title: 'Trust & Licensing | Bella Healthcare',
    description: 'Full OHCQ licensing information, verification, and credentials.',
  },
};

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'MedicalBusiness'],
    name: COMPANY.name,
    alternateName: 'Bella Healthcare',
    description: COMPANY.description,
    url: siteConfig.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.split(',')[0],
      addressLocality: 'Laurel',
      addressRegion: 'MD',
      postalCode: '20723',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'State',
      name: 'Maryland',
    },
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
    ],
    founders: [
      {
        '@type': 'Person',
        name: 'Manfred Tambe',
        jobTitle: 'Administrator',
      },
      {
        '@type': 'Person',
        name: 'Mirabelle Tambe',
        jobTitle: 'Co-Founder',
      },
    ],
    foundingDate: '2015',
    operatingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00',
  },
};
