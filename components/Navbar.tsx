'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Heart, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { COMPANY } from '@/lib/constants';
import { SearchBar } from './SearchBar';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
      label: 'Services',
      submenu: [
        { label: 'All Services', href: '/services' },
        { label: 'Companion Care', href: '/services/companion-care' },
        { label: 'Personal Care', href: '/services/personal-care' },
        { label: 'Dementia Care', href: '/services/dementia-care' },
        { label: 'Post-Operative Care', href: '/services/post-operative-care' },
        { label: '24-Hour Live-In Care', href: '/services/24-hour-care' },
        { label: 'Respite Care', href: '/services/respite-care' },
        { label: 'Physical Therapy', href: '/services/physical-therapy' },
        { label: 'Respiratory Therapy', href: '/services/respiratory-therapy' },
        { label: 'Occupational Therapy', href: '/services/occupational-therapy' },
        { label: 'Skilled Nursing Care', href: '/services/skilled-nursing-care' },
      ],
    },
    {
      label: 'Resources',
      submenu: [
        { label: 'Blog & Articles', href: '/blog' },
        { label: 'Care Planning Tools', href: '/care-plan' },
        { label: 'FAQ', href: '/contact' },
        { label: 'Locations', href: '/locations' },
        { label: 'License Information', href: '/license' },
      ],
    },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];


  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    return pathname.startsWith(href) && href !== '/';
  };

  const handleDropdownHover = (label: string | null) => {
    setOpenDropdown(label);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-bella-sky/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-48">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" aria-label="Bella Healthcare - Home">
              <img src="/logo.png" alt="Bella Healthcare Services Logo" className="h-40 w-40 object-contain" loading="eager" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label || link.href} className="relative group">
                  {link.href ? (
                    <Link
                      href={link.href}
                      className={cn(
                        'font-semibold transition-colors text-sm px-4 py-2 rounded-lg',
                        isActive(link.href)
                          ? 'text-bella-orange bg-bella-sky/10'
                          : 'text-gray-700 dark:text-gray-200 hover:text-bella-sky hover:bg-gray-100 dark:hover:bg-gray-800'
                      )}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      className={cn(
                        'font-semibold transition-colors text-sm px-4 py-2 rounded-lg flex items-center gap-1',
                        'text-gray-700 dark:text-gray-200 hover:text-bella-sky hover:bg-gray-100 dark:hover:bg-gray-800'
                      )}
                    >
                      {link.label}
                      {link.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <div className="absolute left-0 mt-0 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {link.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-bella-sky hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden lg:block flex-1 max-w-5xl mx-4">
              <SearchBar />
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="hidden sm:flex items-center gap-2 bg-bella-orange hover:bg-bella-orange/90 text-white font-bold px-4 py-2 rounded-lg transition-all"
              >
                <Phone size={18} />
                {COMPANY.phone}
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-bella-sky/20"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.label || link.href}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'block font-semibold py-3 px-4 rounded-lg transition-colors',
                          isActive(link.href)
                            ? 'text-bella-orange bg-bella-sky/10'
                            : 'text-gray-700 dark:text-gray-200 hover:text-bella-sky hover:bg-gray-100 dark:hover:bg-gray-800'
                        )}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                          className="w-full text-left font-semibold py-3 px-4 rounded-lg flex items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={cn('transition-transform', openDropdown === link.label && 'rotate-180')}
                          />
                        </button>

                        {/* Mobile Submenu */}
                        <AnimatePresence>
                          {openDropdown === link.label && link.submenu && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg mt-1 overflow-hidden"
                            >
                              {link.submenu.map((subitem) => (
                                <Link
                                  key={subitem.href}
                                  href={subitem.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-bella-sky hover:bg-gray-100 dark:hover:bg-gray-700 border-l-2 border-transparent hover:border-bella-sky transition-colors"
                                >
                                  {subitem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="block bg-bella-orange hover:bg-bella-orange/90 text-white font-bold px-4 py-3 rounded-lg mt-6 text-center"
                >
                  Call {COMPANY.phone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
