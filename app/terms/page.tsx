import { CTA } from '@/components/CTA';

export default function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90">Please read these terms carefully</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-bella-sky/10 p-6 rounded-lg border-l-4 border-bella-sky mb-8">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Last Updated:</strong> December 31, 2025
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing and using the Bella Healthcare Services website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">2. Service Description</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bella Healthcare Services provides professional in-home care services including companion care, personal care assistance, dementia care, post-operative care, 24-hour live-in care, respite care, physical therapy, respiratory therapy, and occupational therapy to residents of Howard, Prince George's, Montgomery, Anne Arundel, and Baltimore Counties, Maryland.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">3. Eligibility</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our services are available to individuals 18 years and older residing in our service areas. Clients must have the capacity to consent to services or have an authorized representative provide consent.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">4. Healthcare Services Disclaimer</h2>
            <div className="bg-bella-accent/10 p-6 rounded-lg border-l-4 border-bella-accent mb-4">
              <p className="text-gray-700 dark:text-gray-300 font-bold">
                Services provided by Bella Healthcare are delivered by licensed healthcare professionals. These services are NOT a substitute for emergency medical care. Always call 911 for emergencies.
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All therapeutic services must be prescribed or recommended by a licensed healthcare provider. Results may vary based on individual conditions and compliance.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">5. Client Responsibilities</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Provide accurate medical history and current medications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Communicate health concerns or changes to caregivers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Follow healthcare provider instructions and treatment plans</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Pay agreed-upon fees in a timely manner</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Maintain a safe home environment</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To the maximum extent permitted by law, Bella Healthcare Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits or data, arising from your use of our services or website.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of Bella Healthcare Services or its content suppliers and is protected by copyright laws.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">8. Termination of Service</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Either party may terminate services with written notice. Bella Healthcare reserves the right to terminate services if there are safety concerns, non-payment, or client behavior that compromises caregiver safety.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">9. Modifications to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">10. Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of the State of Maryland.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Contact us at:</p>
            <p className="font-bold text-gray-900 dark:text-white">Bella Healthcare Services</p>
            <p className="text-gray-700 dark:text-gray-300">(410) 555-1234</p>
            <p className="text-gray-700 dark:text-gray-300">support@bellahealthcare.com</p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
