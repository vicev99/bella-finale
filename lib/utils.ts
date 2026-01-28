import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

export function formatAddress(street: string, city: string, state: string, zip: string): string {
  return `${street}, ${city}, ${state} ${zip}`;
}

export function generateSEOTitle(page: string): string {
  const baseTitle = 'Bella Healthcare Services | Maryland OHCQ Licensed';
  const titles: Record<string, string> = {
    home: baseTitle,
    about: `About Us | ${baseTitle}`,
    services: `In-Home Care Services | ${baseTitle}`,
    blog: `Caregiving Blog | ${baseTitle}`,
    contact: `Contact Manfred Tambe | ${baseTitle}`,
    license: `OHCQ Non-Expiring License | ${baseTitle}`,
  };
  return titles[page] || baseTitle;
}
