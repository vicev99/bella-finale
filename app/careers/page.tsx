import CareersClient from './careers-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Bella Healthcare Services | Join Our Team | Maryland',
  description: 'Join Bella Healthcare Services! Explore rewarding healthcare career opportunities in Maryland. Competitive pay, professional development, and compassionate work environment.',
  keywords: 'healthcare jobs maryland, home health careers, senior care jobs, nursing jobs maryland, caregiver jobs',
  openGraph: {
    title: 'Careers at Bella Healthcare Services | Healthcare Jobs Maryland',
    description: 'Rewarding healthcare career opportunities. Competitive pay and professional development.',
    type: 'website',
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
