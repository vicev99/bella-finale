import { services } from '@/data/services';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { CTA } from '@/components/CTA';

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

interface ServiceDetailProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export function generateMetadata({ params }: ServiceDetailProps) {
  const service = services.find((s) => s.id === params.id);
  return {
    title: `${service?.name} | Bella Healthcare Services`,
    description: service?.description,
  };
}

export default function ServiceDetail({ params }: ServiceDetailProps) {
  const service = services.find((s) => s.id === params.id);
  const IconComponent = service?.icon || null;

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-8">
          {IconComponent && (
            <div className="w-24 h-24 bg-bella-orange rounded-lg flex items-center justify-center flex-shrink-0">
              <IconComponent className="text-white" size={56} />
            </div>
          )}
          <div>
            <h1 className="text-5xl font-black mb-4">{service.name}</h1>
            <p className="text-xl text-white/90">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">Overview</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {service.description}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* Who Needs It */}
          <div className="bg-bella-sky/10 p-8 rounded-lg border-l-4 border-bella-sky">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Who Needs This Service?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.whoNeedsIt}
            </p>
          </div>

          {/* Provider Qualifications */}
          <div className="bg-bella-orange/10 p-8 rounded-lg border-l-4 border-bella-orange">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Our Provider Qualifications</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.providerQualifications}
            </p>
          </div>

          {/* What It Includes */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8">What It Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-bella-sky font-black text-xl flex-shrink-0">✓</div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 p-4 bg-bella-accent/10 dark:bg-bella-accent/20 rounded-lg border border-bella-accent/30">
                  <div className="text-bella-accent font-black text-xl flex-shrink-0">★</div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-bella-sky to-blue-600 text-white p-12 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-white/90 mb-8">
              Contact us today for a free consultation to discuss how {service.name} can improve quality of life for you or your loved one.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bella-orange hover:bg-bella-orange/90 text-white font-bold px-8 py-3 rounded-lg transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-12 text-center">
            Complementary Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((related) => {
                const RelatedIcon = related.icon || null;
                return (
                  <Link
                    key={related.id}
                    href={`/services/${related.id}`}
                    className="group bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-bella-sky dark:hover:border-bella-sky hover:shadow-lg transition-all"
                  >
                    {RelatedIcon && (
                      <div className="w-12 h-12 bg-bella-sky/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bella-sky/20 transition-all">
                        <RelatedIcon className="text-bella-sky" size={24} />
                      </div>
                    )}
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-bella-sky transition-colors">
                      {related.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{related.shortDescription}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
