'use client';

import Link from 'next/link';
import { COMPANY, SERVICES } from '@/lib/constants';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bella-sky dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Bella Healthcare Services Logo" className="h-32 w-32 object-contain" loading="eager" />
              <h3 className="font-black text-lg text-bella-orange">Bella Healthcare</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin size={18} className="text-bella-orange flex-shrink-0" />
                <div>
                  <p>{COMPANY.address}</p>
                  <p>{COMPANY.city}, {COMPANY.state} {COMPANY.zip}</p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <Phone size={18} className="text-bella-orange flex-shrink-0 mt-1" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-bella-orange transition">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <Mail size={18} className="text-bella-orange flex-shrink-0 mt-1" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-bella-orange transition">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-bella-orange">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 3).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-bella-orange transition"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-bella-orange">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-bella-orange transition">About Us</Link></li>
              <li><Link href="/care-plan" className="hover:text-bella-orange transition">Build Care Plan</Link></li>
              <li><Link href="/blog" className="hover:text-bella-orange transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-bella-orange transition">Contact</Link></li>
            </ul>
          </div>

          {/* License */}
          <div>
            <h4 className="font-bold mb-4 text-bella-orange">Licensing</h4>
            <div className="bg-bella-orange/10 p-4 rounded-lg text-sm space-y-2 border border-bella-orange/20">
              <p className="font-semibold text-bella-orange">Maryland OHCQ Licensed</p>
              <p>License: {COMPANY.licenseNumber}</p>
              <p>Status: {COMPANY.licenseStatus}</p>
              <Link href="/license" className="text-bella-orange hover:underline text-xs font-bold">
                View Full License ↗
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-bella-orange">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-bella-orange hover:text-bella-sky transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-bella-orange hover:text-bella-sky transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-bella-orange hover:text-bella-sky transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-bella-orange/20 pt-8 mb-8">
          <div className="bg-bella-orange/10 border border-bella-orange/20 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-bella-orange font-bold">✓</div>
              <span className="font-bold text-white">Maryland OHCQ Licensed (Non-Expiring)</span>
            </div>
            <p className="text-sm text-white/80">Bella Healthcare Services operates under a Maryland OHCQ non-expiring license. <Link href="/license" className="text-bella-orange hover:underline">View License</Link></p>
          </div>
        </div>

        <div className="border-t border-bella-orange/20 pt-8">
          <div className="grid md:grid-cols-3 gap-4 text-sm text-white/60">
            <p>&copy; {currentYear} Bella Healthcare Services LLC. All rights reserved.</p>
            <div className="flex gap-6 justify-center">
              <Link href="/privacy" className="hover:text-bella-orange transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-bella-orange transition">Terms of Service</Link>
              <Link href="/hipaa" className="hover:text-bella-orange transition">HIPAA Notice</Link>
            </div>
            <div className="flex gap-6 md:justify-end">
              <Link href="/license" className="hover:text-bella-orange transition">License</Link>
              <Link href="/contact" className="hover:text-bella-orange transition">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
