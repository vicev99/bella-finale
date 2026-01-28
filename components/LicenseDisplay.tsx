'use client';

import Link from 'next/link';
import { Download, Shield } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export function LicenseDisplay() {
  return (
    <div className="space-y-8">
      {/* License Card */}
      <div className="bg-gradient-to-br from-bella-sky to-bella-sky/80 text-white p-12 rounded-2xl shadow-xl border-2 border-bella-orange">
        <div className="flex items-start gap-6">
          <Shield className="text-bella-orange flex-shrink-0" size={48} />
          <div className="flex-1">
            <h3 className="text-3xl font-black mb-4">Maryland OHCQ Non-Expiring License</h3>
            <div className="space-y-3 text-lg">
              <p>
                <span className="font-bold text-bella-orange">License Number:</span> {COMPANY.licenseNumber}
              </p>
              <p>
                <span className="font-bold text-bella-orange">License Type:</span> Residential Service Agency (RSA)
              </p>
              <p>
                <span className="font-bold text-bella-orange">Status:</span>{' '}
                <span className="bg-bella-orange text-bella-sky font-bold px-3 py-1 rounded-full">
                  {COMPANY.licenseStatus}
                </span>
              </p>
              <p>
                <span className="font-bold text-bella-orange">Issued:</span> {COMPANY.licenseIssued}
              </p>
              <p>
                <span className="font-bold text-bella-orange">Licensed By:</span> {COMPANY.licensedBy}
              </p>
              <p>
                <span className="font-bold text-bella-orange">Regulation:</span> COMAR 10.07.05 Compliant
              </p>
              <p>
                <span className="font-bold text-bella-orange">Approved By:</span> {COMPANY.regulator}
              </p>
              <p>
                <span className="font-bold text-bella-orange">Administrator:</span> {COMPANY.administrator}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-bella-cream dark:bg-bella-sky/20 p-8 rounded-xl border-2 border-dashed border-bella-orange">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-bella-sky dark:text-white mb-2">
              Download Official OHCQ Letter
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Complete 2-page signed license verification from Maryland OHCQ
            </p>
          </div>
          <a
            href="/license.pdf"
            download="bella-healthcare-ohcq-license.pdf"
            className="flex items-center gap-2 bg-bella-orange hover:bg-bella-orange/90 text-bella-sky font-black px-8 py-4 rounded-lg transition-all transform hover:scale-105 whitespace-nowrap"
          >
            <Download size={24} />
            Download PDF
          </a>
        </div>
      </div>

      {/* Compliance Info */}
      <div className="bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20 space-y-4">
        <h4 className="text-xl font-black text-bella-sky dark:text-white">Why "Non-Expiring"?</h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bella Healthcare Services earned a non-expiring license by meeting all requirements of
          COMAR 10.07.05 and exceeding federal, state, and local standards. This rare distinction
          means we've demonstrated exceptional compliance and operational excellence with the
          Maryland Office of Health Care Quality.
        </p>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex gap-2">
            <span className="text-bella-orange font-bold">✓</span>
            <span>Approved by Maryland's regulatory authority</span>
          </li>
          <li className="flex gap-2">
            <span className="text-bella-orange font-bold">✓</span>
            <span>No renewal required - permanent license</span>
          </li>
          <li className="flex gap-2">
            <span className="text-bella-orange font-bold">✓</span>
            <span>Subject to ongoing OHCQ oversight</span>
          </li>
          <li className="flex gap-2">
            <span className="text-bella-orange font-bold">✓</span>
            <span>Bonded and insured</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
