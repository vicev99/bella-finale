'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-12 pb-12 border-b border-gray-700">
          {/* Column 1: About */}
          <div>
            <h3 className="font-black text-lg mb-6">About Us</h3>
            <p className="text-gray-400 text-sm mb-6">
              {COMPANY.name} provides luxury in-home care across Maryland with compassion and professionalism.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-400">{COMPANY.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a href={`tel:${COMPANY.phone}`} className="text-sm text-gray-400 hover:text-white">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-gray-400 hover:text-white">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-black text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/companion-care" className="text-gray-400 hover:text-white text-sm">Companion Care</Link></li>
              <li><Link href="/services/personal-care" className="text-gray-400 hover:text-white text-sm">Personal Care</Link></li>
              <li><Link href="/services/dementia-care" className="text-gray-400 hover:text-white text-sm">Dementia Care</Link></li>
              <li><Link href="/services/post-operative-care" className="text-gray-400 hover:text-white text-sm">Post-Operative</Link></li>
              <li><Link href="/services/24-hour-care" className="text-gray-400 hover:text-white text-sm">24-Hour Care</Link></li>
              <li><Link href="/services/respite-care" className="text-gray-400 hover:text-white text-sm">Respite Care</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-black text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
              <li><Link href="/trust-licensing" className="text-gray-400 hover:text-white text-sm">Licensing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="font-black text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/assessment" className="text-gray-400 hover:text-white text-sm">Free Assessment</Link></li>
              <li><Link href="/family-portal" className="text-gray-400 hover:text-white text-sm">Family Portal</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="/hipaa" className="text-gray-400 hover:text-white text-sm">HIPAA Notice</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 5: License Info */}
          <div>
            <h3 className="font-black text-lg mb-6">License Info</h3>
            <div className="bg-blue-900 p-4 rounded-lg mb-4">
              <p className="text-xs font-bold text-yellow-400 mb-2">OHCQ Non-Expiring</p>
              <p className="text-xs text-gray-300">License: {COMPANY.licenseNumber}</p>
              <p className="text-xs text-gray-300 mt-2">Issued: {COMPANY.licenseIssued}</p>
            </div>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-4">
            © {currentYear} {COMPANY.name}. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white ml-2">Privacy</Link> | 
            <Link href="/terms" className="hover:text-white ml-2">Terms</Link> | 
            <Link href="/accessibility" className="hover:text-white ml-2">Accessibility</Link>
          </p>
          <p className="text-xs text-gray-600">
            Licensed by Maryland Office of Health Care Quality • Non-Expiring Residential Service Agency License
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

