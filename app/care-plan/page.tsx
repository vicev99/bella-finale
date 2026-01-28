import { CarePlanWizard } from '@/components/CarePlanWizard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Your Care Plan | Bella Healthcare Services | OHCQ Licensed',
  description: 'Create a personalized care plan for your loved one in 6 easy steps. Get a comprehensive PDF with healthcare recommendations. Maryland senior care planning made simple.',
  keywords: 'care plan builder, senior care planning, in-home care plan, maryland elderly care',
  openGraph: {
    title: 'Build Your Care Plan | Bella Healthcare Services',
    description: 'Create a comprehensive, personalized care plan for your loved one. Instant PDF download.',
    type: 'website',
  },
};

export default function CarePlan() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-bella text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              Build Your Care Plan
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Create a personalized, comprehensive care plan in 6 simple steps. Get your detailed PDF instantly and start your care journey with confidence.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-xl">📋</span>
              <span>Comprehensive Assessment</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-xl">⏱️</span>
              <span>10 Minutes or Less</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-xl">📄</span>
              <span>PDF Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Wizard Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-bella-orange/10 dark:bg-bella-orange/20 p-6 rounded-xl border border-bella-orange/30">
              <h3 className="text-lg font-bold text-bella-sky dark:text-white mb-2">Personalized</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                We gather detailed information about your loved one's needs, conditions, and preferences.
              </p>
            </div>
            <div className="bg-bella-sky/10 dark:bg-bella-sky/20 p-6 rounded-xl border border-bella-sky/30">
              <h3 className="text-lg font-bold text-bella-sky dark:text-white mb-2">Professional</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Our team reviews each care plan to ensure it meets clinical standards and best practices.
              </p>
            </div>
            <div className="bg-green-500/10 dark:bg-green-500/20 p-6 rounded-xl border border-green-500/30">
              <h3 className="text-lg font-bold text-bella-sky dark:text-white mb-2">Actionable</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Your care plan is a practical guide for getting the right care and support immediately.
              </p>
            </div>
          </div>

          {/* Wizard Component */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <CarePlanWizard />
          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-bella-sky dark:text-white mb-2">How long does this take?</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Most users complete their care plan in 8-12 minutes. You can take breaks and come back anytime.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-bella-sky dark:text-white mb-2">Is my information secure?</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  We take privacy seriously. Your information is encrypted and only used to create your care plan.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-bella-sky dark:text-white mb-2">What happens after I submit?</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Our team will review your care plan and contact you within 24 hours to discuss next steps.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-bella-sky dark:text-white mb-2">Can I edit my care plan later?</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Yes! You can create multiple care plans or request modifications anytime. Contact us for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-bella text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8">
            Scroll back up to begin building your comprehensive care plan. Our team is here to help every step of the way.
          </p>
          <a href="tel:(410)555-0100" className="inline-flex items-center justify-center px-8 py-3 bg-white text-bella-sky font-bold rounded-lg hover:bg-gray-100 transition-all">
            Call Us: (410) 555-0100
          </a>
        </div>
      </section>
    </div>
  );
}
