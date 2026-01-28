import { CTA } from '@/components/CTA';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">Your privacy is important to us</p>
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
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Bella Healthcare Services ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Personal Information</h3>
                <p className="text-gray-700 dark:text-gray-300">We may collect personal information such as your name, email address, phone number, and medical history when you voluntarily provide it through contact forms, care plan requests, or service inquiries.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Automatic Information</h3>
                <p className="text-gray-700 dark:text-gray-300">We automatically collect certain information about your device and usage patterns, including IP address, browser type, pages visited, and time spent on our website.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">HIPAA Protected Health Information</h3>
                <p className="text-gray-700 dark:text-gray-300">As a covered entity under HIPAA, we collect and maintain Protected Health Information (PHI) with appropriate safeguards. See our HIPAA Notice for details.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Provide and improve our healthcare services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Respond to your inquiries and requests</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Send appointment reminders and healthcare updates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Comply with legal and regulatory requirements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-sky font-bold">•</span>
                <span>Prevent fraud and ensure security</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Data Security</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We implement industry-standard security measures to protect your information. This includes encryption, firewalls, secure servers, and restricted access to personal data. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">You have the right to:</p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-bella-orange font-bold">✓</span>
                <span>Access your personal information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-orange font-bold">✓</span>
                <span>Request corrections to inaccurate data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-orange font-bold">✓</span>
                <span>Request deletion of your data (where permitted by law)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bella-orange font-bold">✓</span>
                <span>Opt-out of marketing communications</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have questions about this Privacy Policy or our practices, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="font-bold text-gray-900 dark:text-white">Bella Healthcare Services</p>
              <p className="text-gray-700 dark:text-gray-300">Phone: (410) 555-1234</p>
              <p className="text-gray-700 dark:text-gray-300">Email: privacy@bellahealthcare.com</p>
              <p className="text-gray-700 dark:text-gray-300">Counties Served: Howard, Prince George's, Montgomery, Anne Arundel, Baltimore</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
