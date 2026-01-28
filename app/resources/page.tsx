import { CTA } from '@/components/CTA';
import { BookOpen, Heart, Shield, Users } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'caregiver-support',
      title: 'Caregiver Support',
      description: 'Resources and guidance for family caregivers managing caregiving responsibilities',
      icon: Users,
      sections: [
        'Caregiver burnout prevention',
        'Stress management techniques',
        'Support groups and communities',
        'Financial planning for care',
        'Legal considerations',
      ],
    },
    {
      id: 'health-tips',
      title: 'Health & Wellness Tips',
      description: 'Evidence-based health information and wellness guidance for seniors',
      icon: Heart,
      sections: [
        'Fall prevention strategies',
        'Nutrition and hydration',
        'Exercise and mobility',
        'Mental health and cognitive health',
        'Sleep hygiene and rest',
      ],
    },
    {
      id: 'insurance',
      title: 'Insurance & Financial Guide',
      description: 'Understanding insurance coverage, Medicare, Medicaid, and payment options',
      icon: Shield,
      sections: [
        'Medicare coverage explained',
        'Medicaid eligibility',
        'Long-term care insurance',
        'Payment methods and plans',
        'Financial assistance programs',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-4">Resources & Support</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive guides, tips, and information to help you make informed decisions about healthcare and caregiving
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={resource.id}
                  href={`/resources/${resource.id}`}
                  className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-bella-sky hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-bella-sky/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bella-sky/20 transition-all">
                    <Icon className="text-bella-sky" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-bella-sky transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{resource.description}</p>
                  <div className="space-y-2">
                    {resource.sections.map((section, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-bella-sky font-bold">•</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{section}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="bg-bella-sky/10 p-12 rounded-lg border border-bella-sky/20">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Quick Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <BookOpen className="text-bella-sky" size={24} />
                  Educational Content
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/blog" className="text-bella-sky hover:text-bella-sky/80 font-semibold">
                      → Health & Wellness Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/care-plan" className="text-bella-sky hover:text-bella-sky/80 font-semibold">
                      → Interactive Care Planning Tool
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/caregiver-support" className="text-bella-sky hover:text-bella-sky/80 font-semibold">
                      → Caregiver Handbook
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Heart className="text-bella-accent" size={24} />
                  Get Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/contact" className="text-bella-accent hover:text-bella-accent/80 font-semibold">
                      → Schedule a Consultation
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+14105551234" className="text-bella-accent hover:text-bella-accent/80 font-semibold">
                      → Call Our Care Team: (410) 555-1234
                    </a>
                  </li>
                  <li>
                    <Link href="/services" className="text-bella-accent hover:text-bella-accent/80 font-semibold">
                      → Explore Our Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
