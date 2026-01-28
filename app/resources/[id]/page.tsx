import { CTA } from '@/components/CTA';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Users, MessageSquare } from 'lucide-react';

export async function generateStaticParams() {
  return [
    { id: 'caregiver-support' },
    { id: 'health-tips' },
    { id: 'insurance' },
  ];
}

const resourceContent: Record<string, any> = {
  'caregiver-support': {
    title: 'Caregiver Support & Resources',
    subtitle: 'Essential guidance for family caregivers',
    sections: [
      {
        heading: 'Understanding Caregiver Burden',
        content:
          'Caregiving can be emotionally, physically, and financially taxing. Many family caregivers experience stress, burnout, depression, and health problems of their own. Recognizing these challenges is the first step toward finding support and maintaining your own health.',
        tips: [
          'Set realistic expectations about your role',
          'Acknowledge your own feelings without guilt',
          'Take regular breaks through respite care',
          'Maintain your own medical appointments',
          'Stay connected with friends and family',
        ],
      },
      {
        heading: 'Building Your Support Network',
        content:
          'You don\'t have to do this alone. Effective caregiving involves building a network of professional and personal support.',
        tips: [
          'Join local caregiver support groups',
          'Connect with online communities',
          'Hire professional caregivers for respite',
          'Communicate openly with family members',
          'Work with healthcare providers and social workers',
          'Explore adult day programs for your loved one',
        ],
      },
      {
        heading: 'Practical Caregiving Skills',
        content:
          'Developing caregiving skills improves both your confidence and your loved one\'s quality of life. Many skills can be learned through training and practice.',
        tips: [
          'Personal care assistance techniques',
          'Medication management and administration',
          'Mobility and transfer safety',
          'Communication with dementia patients',
          'Nutrition and hydration support',
          'Recognition of health changes',
        ],
      },
      {
        heading: 'Financial & Legal Planning',
        content:
          'Understanding the financial aspects of caregiving helps you plan for the future and make informed decisions about care options.',
        tips: [
          'Assess care costs and insurance coverage',
          'Explore Medicare and Medicaid benefits',
          'Establish power of attorney documents',
          'Discuss healthcare wishes and end-of-life care',
          'Track medical expenses for tax deductions',
          'Consider long-term care insurance options',
        ],
      },
    ],
    resources: [
      { title: 'National Caregiver Support Line', description: '1-855-227-3640 (24/7)', icon: '📞' },
      { title: 'Caregiver Action Network', description: 'Online support and resources', icon: '🌐' },
      { title: 'Family Caregiver Alliance', description: 'Local support groups and counseling', icon: '👥' },
      { title: 'AARP Caregiver Resources', description: 'Comprehensive guides and tools', icon: '📚' },
    ],
  },
  'health-tips': {
    title: 'Health & Wellness Tips for Seniors',
    subtitle: 'Practical guidance for maintaining health and independence',
    sections: [
      {
        heading: 'Fall Prevention Strategies',
        content:
          'Falls are a leading cause of injury in seniors. Most falls are preventable through environmental modifications and physical strategies.',
        tips: [
          'Remove tripping hazards from walkways',
          'Install grab bars in bathrooms',
          'Ensure adequate lighting throughout home',
          'Wear proper footwear with good support',
          'Exercise to improve strength and balance',
          'Have vision and hearing checked regularly',
          'Review medications that may affect balance',
        ],
      },
      {
        heading: 'Nutrition & Hydration',
        content:
          'Proper nutrition and hydration are essential for maintaining energy, strength, and cognitive function. Seniors may need fewer calories but require higher nutrient density.',
        tips: [
          'Include protein at every meal',
          'Eat a variety of colorful fruits and vegetables',
          'Choose whole grains over refined grains',
          'Stay hydrated - drink water throughout the day',
          'Limit sodium and added sugars',
          'Consider vitamin D and B12 supplementation',
          'Eat smaller, frequent meals if needed',
        ],
      },
      {
        heading: 'Exercise & Physical Activity',
        content:
          'Regular physical activity maintains strength, balance, flexibility, and cognitive function. Exercise should be adapted to individual abilities and limitations.',
        tips: [
          'Aim for 150 minutes of moderate activity weekly',
          'Include strength training 2-3 times per week',
          'Practice balance and flexibility exercises',
          'Walk regularly - even short walks help',
          'Consult your doctor before starting new activities',
          'Consider water aerobics or tai chi',
          'Make exercise social and enjoyable',
        ],
      },
      {
        heading: 'Cognitive Health & Mental Wellness',
        content:
          'Mental stimulation and emotional well-being are crucial for maintaining cognitive function and overall quality of life.',
        tips: [
          'Engage in mentally stimulating activities',
          'Learn something new regularly',
          'Maintain social connections',
          'Practice meditation or mindfulness',
          'Keep a journal or diary',
          'Stay involved in community activities',
          'Seek professional help for depression or anxiety',
        ],
      },
      {
        heading: 'Sleep Hygiene & Rest',
        content:
          'Quality sleep is essential for physical health, cognitive function, and emotional well-being. Sleep patterns may change with age, but poor sleep is not normal.',
        tips: [
          'Maintain a consistent sleep schedule',
          'Keep bedroom cool, dark, and quiet',
          'Avoid caffeine in the afternoon/evening',
          'Limit naps to 20-30 minutes',
          'Exercise regularly (but not before bed)',
          'Limit screen time before bedtime',
          'Consult doctor about sleep disorders',
        ],
      },
    ],
    resources: [
      { title: 'CDC Healthy Aging', description: 'Evidence-based health information', icon: '🏥' },
      { title: 'NIH Senior Health', description: 'Peer-reviewed health topics', icon: '📋' },
      { title: 'Mayo Clinic Senior Health', description: 'Comprehensive wellness guides', icon: '🔬' },
      { title: 'Your Doctor or Nurse Line', description: 'Personalized health advice', icon: '👨‍⚕️' },
    ],
  },
  insurance: {
    title: 'Insurance & Financial Guide',
    subtitle: 'Understanding coverage options and payment strategies',
    sections: [
      {
        heading: 'Medicare Coverage Explained',
        content:
          'Medicare is a federal health insurance program for people age 65 and older, regardless of income. Understanding its components helps you maximize your coverage.',
        tips: [
          'Part A: Hospital insurance (inpatient hospital, hospice, skilled nursing)',
          'Part B: Medical insurance (doctor visits, outpatient services, equipment)',
          'Part D: Prescription drug coverage (required to avoid penalties)',
          'Medigap/Supplement plans: Additional coverage for copays and deductibles',
          'Medicare Advantage (Part C): All-in-one alternative plans',
          'Annual open enrollment: Review and change plans October 15 - December 7',
        ],
      },
      {
        heading: 'Medicaid Eligibility & Benefits',
        content:
          'Medicaid is a state and federal program for low-income individuals. Many seniors qualify for both Medicare and Medicaid (dual eligible).',
        tips: [
          'Income and asset limits vary by state',
          'Medicaid covers copays and deductibles Medicare doesn\'t',
          'Medicaid often covers long-term care services',
          'Many home care services may be Medicaid-covered',
          'Special programs: QMB, SLMB, QI programs',
          'Contact your state Medicaid office for eligibility',
        ],
      },
      {
        heading: 'Long-Term Care Insurance',
        content:
          'Long-term care insurance helps pay for nursing home, assisted living, and home care services. Purchasing earlier in life typically means lower premiums.',
        tips: [
          'Covers nursing facility, assisted living, home care',
          'Premiums vary by age and health status',
          'Daily benefits range from $50-$300 typically',
          'Benefit periods: 2 years, 3 years, 5 years, or lifetime',
          'Tax-qualified policies offer tax deductions for self-employed',
          'Consider hybrid life/LTC insurance products',
        ],
      },
      {
        heading: 'Home Care Payment Options',
        content:
          'There are multiple ways to pay for home care services. Understanding your options helps you plan financially.',
        tips: [
          'Medicare: May cover skilled nursing and therapy services',
          'Medicaid: Covers medical and personal care in many states',
          'Private pay: Direct payment to care provider',
          'Long-term care insurance: If you have a qualifying policy',
          'Veterans benefits: If you or spouse served in military',
          'Flexible spending or health savings accounts: Pre-tax dollars',
        ],
      },
      {
        heading: 'Financial Assistance Programs',
        content:
          'Various assistance programs can help pay for healthcare and living expenses if you meet income requirements.',
        tips: [
          'Supplemental Security Income (SSI)',
          'Low Income Home Energy Assistance Program (LIHEAP)',
          'Area Agency on Aging financial assistance',
          'Pharmaceutical assistance programs',
          'Hospital financial aid/charity care',
          'Non-profit organization assistance programs',
        ],
      },
    ],
    resources: [
      { title: 'Medicare.gov', description: 'Official Medicare enrollment and info', icon: '💻', url: 'https://www.medicare.gov' },
      { title: 'Your State Medicaid Office', description: 'Eligibility and enrollment', icon: '📞', url: 'https://www.medicaid.gov/about-us/contact-us/index.html' },
      { title: 'Social Security Administration', description: 'SSI and SSDI information', icon: '🏛️', url: 'https://www.ssa.gov' },
      { title: 'National Council on Aging', description: 'Financial assistance finder', icon: '🔍', url: 'https://www.ncoa.org' },
    ],
  },
};

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
  const resource = resourceContent[params.id];

  if (!resource) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Resource not found</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            Back to Resources
          </Link>
          <h1 className="text-5xl font-black mb-4">{resource.title}</h1>
          <p className="text-xl text-white/90">{resource.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {resource.sections.map((section: any, i: number) => (
            <div key={i} className="mb-16">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">{section.heading}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">{section.content}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {section.tips.map((tip: string, j: number) => (
                  <div key={j} className="flex gap-4 p-4 bg-bella-sky/10 dark:bg-bella-sky/20 rounded-lg border border-bella-sky/20">
                    <span className="text-bella-sky font-black text-xl flex-shrink-0">✓</span>
                    <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Resources */}
          <div className="bg-gray-50 dark:bg-gray-800 p-12 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Helpful Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resource.resources.map((res: any, i: number) => (
                <a 
                  key={i} 
                  href={res.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-bella-sky dark:hover:border-bella-sky transition-all duration-300 cursor-pointer"
                >
                  <p className="text-3xl mb-2">{res.icon}</p>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-bella-sky transition-colors">{res.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{res.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-bella-sky to-blue-600 text-white p-12 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Support?</h3>
            <p className="text-lg text-white/90 mb-8">
              Our care team is ready to discuss your specific needs and available care options.
            </p>
            <Link href="/contact" className="inline-block bg-bella-orange hover:bg-bella-orange/90 text-white font-bold px-8 py-3 rounded-lg transition-all">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
