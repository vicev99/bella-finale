import { ContactForm } from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Bella Healthcare Services | OHCQ Licensed In-Home Care Maryland',
  description: 'Contact Bella Healthcare Services for compassionate in-home senior care across all Maryland counties. Call (410) 555-0100 or fill out our contact form for immediate assistance.',
  keywords: 'contact bella healthcare, senior care contact maryland, in-home care contact, laurel md healthcare',
  openGraph: {
    title: 'Contact Bella Healthcare Services | Maryland Senior Care',
    description: 'Reach out to Bella Healthcare Services for professional in-home care across Maryland. OHCQ Licensed.',
    type: 'website',
  },
};

export default function Contact() {
  return (
    <div className="bg-white dark:bg-bella-sky/20">
      {/* Hero */}
      <section className="py-20 bg-gradient-bella text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-6">Contact Us</h1>
          <p className="text-xl text-white/90">
            Ready to start your care journey? We're here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-bella-sky/40 p-6 rounded-xl border border-bella-orange/20">
                <div className="flex items-start gap-4 mb-6">
                  <Phone className="text-bella-orange flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-bella-sky dark:text-white mb-1">Phone</h3>
                    <a href={`tel:${COMPANY.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-bella-orange transition">
                      {COMPANY.phone}
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">24/7 Available</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-bella-sky/40 p-6 rounded-xl border border-bella-orange/20">
                <div className="flex items-start gap-4 mb-6">
                  <Mail className="text-bella-orange flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-bella-sky dark:text-white mb-1">Email</h3>
                    <a href={`mailto:${COMPANY.email}`} className="text-gray-600 dark:text-gray-300 hover:text-bella-orange transition">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-bella-sky/40 p-6 rounded-xl border border-bella-orange/20">
                <div className="flex items-start gap-4">
                  <MapPin className="text-bella-orange flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-bella-sky dark:text-white mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {COMPANY.address}
                      <br />
                      {COMPANY.city}, {COMPANY.state} {COMPANY.zip}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-bella-cream dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20">
                <h2 className="text-3xl font-bold text-bella-sky dark:text-white mb-8">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 dark:bg-bella-sky/60 rounded-xl h-96 flex items-center justify-center border border-bella-orange/20">
            <div className="text-center">
              <MapPin className="text-bella-sky dark:text-bella-orange mx-auto mb-4" size={48} />
              <p className="text-gray-600 dark:text-gray-300 font-semibold">
                Laurel, Maryland
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-bella-cream dark:bg-bella-sky/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-bella-sky dark:text-white text-center mb-12">
            Business Hours
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-bella-sky/60 p-8 rounded-xl border border-bella-orange/20">
              <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
            <div className="bg-white dark:bg-bella-sky/60 p-8 rounded-xl border border-bella-orange/20">
              <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-4">Emergency Support</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p className="font-semibold text-bella-orange">24/7 Available</p>
                <p>Call {COMPANY.phone} anytime for urgent care needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-bella-sky dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I get started with Bella Healthcare Services?',
                a: 'Simply call us at (410) 555-0100 or fill out the contact form. We\'ll schedule a free consultation to discuss your needs and create a personalized care plan.',
              },
              {
                q: 'What areas of Maryland do you serve?',
                a: 'We proudly serve Howard, Prince George\'s, Montgomery, Anne Arundel, and Baltimore Counties. Contact us to confirm service availability in your area.',
              },
              {
                q: 'Are your caregivers background checked and trained?',
                a: 'Yes! All our caregivers are thoroughly background checked, trained, and licensed according to OHCQ standards. We maintain the highest professionalism.',
              },
              {
                q: 'What is your pricing structure?',
                a: 'Pricing varies based on services and hours. We offer flexible scheduling from hourly to 24/7 live-in care. Contact us for a personalized quote.',
              },
              {
                q: 'Do you accept insurance or Medicare?',
                a: 'We work with various insurance plans and can assist with billing questions. Contact our office to discuss your specific coverage.',
              },
              {
                q: 'Can I change my care plan if my needs change?',
                a: 'Absolutely! We regularly review and adjust care plans as needs evolve. Your comfort and safety are our top priorities.',
              },
              {
                q: 'What makes Bella Healthcare different?',
                a: 'Our Maryland OHCQ non-expiring license, 15+ years of experience, and commitment to treating clients like family sets us apart.',
              },
              {
                q: 'How quickly can you start providing care?',
                a: 'We can often begin care within 24-48 hours of consultation. For urgent needs, we\'ll do our best to accommodate immediate requests.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white dark:bg-bella-sky/40 rounded-xl border border-bella-orange/20 p-6 cursor-pointer hover:border-bella-orange/50 transition-all"
              >
                <summary className="flex items-center gap-4 font-bold text-bella-sky dark:text-white list-none">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-bella-orange/20 group-open:bg-bella-orange text-bella-orange group-open:text-white rounded group-open:font-black transition-all">
                    +
                  </span>
                  {faq.q}
                </summary>
                <div className="mt-4 pl-10 text-gray-700 dark:text-gray-300">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-bella text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your care needs and create a personalized plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="px-8 py-4 bg-bella-orange hover:bg-bella-orange/90 text-bella-sky font-bold rounded-lg transition-all transform hover:scale-105">
              Call Now: {COMPANY.phone}
            </a>
            <Link href="/contact" className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg border border-white/50 transition-all">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
