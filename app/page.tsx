import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { MarylandServiceMap } from '@/components/MarylandServiceMap';
import { MarylandCountySEO } from '@/components/MarylandCountySEO';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <MarylandServiceMap />
      <MarylandCountySEO />
      <Testimonials />
      <CTA />
    </>
  );
}
