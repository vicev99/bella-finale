import { LicenseDisplay } from '@/components/LicenseDisplay';
import { DownloadButton } from '@/components/DownloadButton';

export const metadata = {
  title: 'OHCQ License | Bella Healthcare Services',
  description: 'View Bella Healthcare Services\' official Maryland OHCQ non-expiring license.',
};

export default function License() {
  return (
    <div className="bg-white dark:bg-bella-sky/20">
      {/* Hero */}
      <section className="py-20 bg-gradient-bella text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-6">Maryland OHCQ License</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Official verification of Bella Healthcare Services' non-expiring residential service agency license
            from the Maryland Office of Health Care Quality.
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Download Our License</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Download the official OHCQ non-expiring license certificate for your records or verification purposes.
            </p>
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* License Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LicenseDisplay />
        </div>
      </section>

      {/* Letter Content */}
      <section className="py-20 bg-bella-cream dark:bg-bella-sky/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-bella-sky/60 p-12 rounded-xl border border-bella-orange/20">
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
            <div className="text-center mb-8">
              <p className="font-bold">Office of Health Care Quality</p>
              <p className="text-xs">7120 Samuel Morse Drive, Second Floor, Columbia, MD 21046-3422</p>
              <p className="text-xs mt-4">06/09/2025</p>
            </div>

            <div>
              <p>Manfred Tambe, Administrator</p>
              <p>Bella Healthcare Services LLC</p>
              <p>9707 Bolton Street</p>
              <p>Laurel, MD 20723</p>
            </div>

            <div className="border-t border-bella-orange pt-6">
              <p className="font-bold mb-4">RE: Issuance of a Non-Expiring License to Operate a Residential Service Agency</p>
              <p>Dear Manfred Tambe,</p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Issuance of a Non-Expiring License:</p>
                <p>
                  In order to obtain and maintain a non-expiring license, an RSA applicant must meet all of the
                  requirements of the Code of Maryland Regulations (COMAR) 10.07.05 and any other applicable federal,
                  State, and local laws and regulations.
                </p>
              </div>

              <p>
                COMAR 10.07.05.04D authorizes the Office of Health Care Quality (OHCQ), in its discretion, to conduct
                an initial licensure survey prior to issuing a non-expiring license. As OHCQ has determined that you
                meet all licensure requirements in COMAR 10.07.05 and applicable federal, State, and local laws, OHCQ
                has elected not to conduct a licensure survey. Enclosed is the non-expiring license issued to the above
                named RSA.
              </p>

              <p className="italic">
                [Administrative Requirements, OHCQ Inspections, and Additional Information sections as per official letter]
              </p>
            </div>

            <div className="border-t border-bella-orange pt-6">
              <p className="mb-8">Sincerely,</p>
              <div>
                <p className="font-bold">Tia Witherspoon-Udocox, MBA</p>
                <p>Executive Director</p>
                <p>Office of Health Care Quality</p>
              </div>
              <p className="mt-6 text-xs">Enclosure: Non-expiring license</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-bella-sky dark:text-white text-center mb-12">
            Regulatory Compliance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20">
              <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-4 flex items-start gap-3">
                <span className="text-bella-orange text-3xl">✓</span>
                COMAR 10.07.05 Compliant
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Bella Healthcare Services fully complies with Code of Maryland Regulations for Residential Service Agencies, exceeding all state requirements for client safety and quality care.
              </p>
            </div>

            <div className="bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20">
              <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-4 flex items-start gap-3">
                <span className="text-bella-orange text-3xl">✓</span>
                Background Check Certified
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                All caregivers undergo comprehensive background checks including criminal history, health history, and professional references.
              </p>
            </div>

            <div className="bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20">
              <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-4 flex items-start gap-3">
                <span className="text-bella-orange text-3xl">✓</span>
                Professional Training
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                All staff complete mandatory training in CPR/First Aid, infection control, dementia care, and person-centered service standards.
              </p>
            </div>

            <div className="bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20">
              <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-4 flex items-start gap-3">
                <span className="text-bella-orange text-3xl">✓</span>
                Liability Insurance
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Bella Healthcare Services maintains comprehensive liability insurance protecting clients and families with full coverage.
              </p>
            </div>

            <div className="bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20">
              <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-4 flex items-start gap-3">
                <span className="text-bella-orange text-3xl">✓</span>
                24/7 Quality Assurance
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Continuous monitoring and quality assurance programs ensure consistent, high-quality care delivery across all service areas.
              </p>
            </div>

            <div className="bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20">
              <h3 className="text-2xl font-bold text-bella-sky dark:text-white mb-4 flex items-start gap-3">
                <span className="text-bella-orange text-3xl">✓</span>
                Client Rights Protection
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We strictly adhere to client rights policies ensuring dignity, privacy, independence, and protection from abuse and neglect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Standards */}
      <section className="py-20 bg-bella-cream dark:bg-bella-sky/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-bella-sky dark:text-white text-center mb-12">
            Our Service Standards
          </h2>
          <div className="bg-white dark:bg-bella-sky/60 p-8 rounded-xl border border-bella-orange/20 space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bella-orange/20 flex items-center justify-center text-bella-orange font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-bella-sky dark:text-white mb-2">Person-Centered Care</h3>
                <p className="text-gray-700 dark:text-gray-300">Every care plan is customized to individual preferences, abilities, and lifestyle.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bella-orange/20 flex items-center justify-center text-bella-orange font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-bella-sky dark:text-white mb-2">Professional Competency</h3>
                <p className="text-gray-700 dark:text-gray-300">Caregivers maintain high standards of professional conduct, hygiene, and appearance.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bella-orange/20 flex items-center justify-center text-bella-orange font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-bella-sky dark:text-white mb-2">Communication & Documentation</h3>
                <p className="text-gray-700 dark:text-gray-300">Daily notes, regular family updates, and transparent communication are standard practice.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bella-orange/20 flex items-center justify-center text-bella-orange font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-bella-sky dark:text-white mb-2">Safety & Infection Control</h3>
                <p className="text-gray-700 dark:text-gray-300">Strict protocols for client safety, medication management, and infection prevention.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bella-orange/20 flex items-center justify-center text-bella-orange font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-bella-sky dark:text-white mb-2">Continuous Improvement</h3>
                <p className="text-gray-700 dark:text-gray-300">Regular training updates and quality reviews ensure we consistently exceed expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-6">
            Questions About Our Credentials?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We're happy to discuss our licensing, compliance, and quality standards.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-bella-orange hover:bg-bella-orange/90 text-bella-sky font-bold rounded-lg transition-all transform hover:scale-105">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
