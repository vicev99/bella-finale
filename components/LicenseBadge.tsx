'use client';

import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function LicenseBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-bella-sky/10 to-bella-orange/10 border border-bella-orange rounded-lg hover:shadow-lg transition-all">
      <CheckCircle className="text-bella-orange flex-shrink-0" size={24} />
      <div className="flex-1">
        <p className="font-bold text-bella-sky dark:text-white text-sm">
          OHCQ Licensed
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Non-Expiring License
        </p>
      </div>
      <Link
        href="/license"
        className="ml-2 text-xs font-semibold text-bella-orange hover:text-bella-orange/80 transition-colors"
      >
        View →
      </Link>
    </div>
  );
}
