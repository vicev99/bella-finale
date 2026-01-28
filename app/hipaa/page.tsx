import { CTA } from '@/components/CTA';
import { Shield, Lock, AlertCircle } from 'lucide-react';

export default function HipaaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-4">HIPAA Notice of Privacy Practices</h1>
          <p className="text-xl text-white/90">Your protected health information rights and protections</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-bella-sky/10 p-6 rounded-lg border border-bella-sky/20">
              <Shield className="text-bella-sky mb-4" size={32} />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Your Rights</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">You have the right to access, inspect, and request copies of your medical records</p>
            </div>
            <div className="bg-bella-orange/10 p-6 rounded-lg border border-bella-orange/20">
              <Lock className="text-bella-orange mb-4" size={32} />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Our Duty</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">We maintain strict confidentiality of your protected health information</p>
            </div>
            <div className="bg-bella-accent/10 p-6 rounded-lg border border-bella-accent/20">
              <AlertCircle className="text-bella-accent mb-4" size={32} />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Your Protections</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">HIPAA regulations ensure your health information stays private and secure</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Effective Date: December 31, 2025</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bella Healthcare Services is required by law to maintain the privacy of Protected Health Information (PHI) and to provide clients with notice of our privacy practices. This document describes how we use, maintain, and protect your health information.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">1. Uses and Disclosures of Protected Health Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Treatment</h3>
                <p className="text-gray-700 dark:text-gray-300">We use your PHI to provide you with healthcare services, including coordination of care with other healthcare providers.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Payment</h3>
                <p className="text-gray-700 dark:text-gray-300">We use and disclose your PHI to bill for services rendered and to collect payments for those services.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Healthcare Operations</h3>
                <p className="text-gray-700 dark:text-gray-300">We use and disclose your PHI to operate our business, including quality assurance, staff training, and regulatory compliance.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">2. Your Privacy Rights</h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-bella-sky font-black text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Right to Request Restrictions</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">You may request restrictions on how we use or disclose your health information.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-bella-sky font-black text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Right to Request Confidential Communications</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">You may request to receive health information by alternative means or at an alternative location.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-bella-sky font-black text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Right to Access Your Records</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">You have the right to access, inspect, and obtain a copy of your health information.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-bella-sky font-black text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Right to Amendment</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">You may request amendments to your health information that you believe is inaccurate or incomplete.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-bella-sky font-black text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Right to Accounting of Disclosures</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">You may request a listing of all disclosures of your health information made by our organization.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">3. Permitted Uses and Disclosures</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We may disclose your PHI without your permission for:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Treatment, payment, and healthcare operations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Required by law and court orders</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Public health authorities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Law enforcement officials</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Health oversight agencies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Organ procurement and donation</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">4. Our Safeguards</h2>
            <div className="bg-bella-sky/10 p-6 rounded-lg border-l-4 border-bella-sky">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bella Healthcare Services has implemented comprehensive safeguards to protect your PHI:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="text-bella-sky font-bold">🔐</span>
                  <span>Encryption of electronic data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-bella-sky font-bold">🔐</span>
                  <span>Secure access controls and authentication</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-bella-sky font-bold">🔐</span>
                  <span>Confidentiality agreements with staff</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-bella-sky font-bold">🔐</span>
                  <span>Regular security audits and training</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-bella-sky font-bold">🔐</span>
                  <span>Breach notification procedures</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">5. To Exercise Your Rights or File a Complaint</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-4">Contact our Privacy Officer:</p>
              <p className="font-bold text-gray-900 dark:text-white mb-2">Bella Healthcare Services</p>
              <p className="text-gray-700 dark:text-gray-300 mb-1">Phone: (410) 555-1234</p>
              <p className="text-gray-700 dark:text-gray-300 mb-1">Email: privacy@bellahealthcare.com</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-4">
                If you believe your privacy rights have been violated, you may file a complaint with us or with the U.S. Department of Health and Human Services Office for Civil Rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
