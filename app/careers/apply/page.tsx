'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function ApplicationPage() {
  const searchParams = useSearchParams();
  const positionParam = searchParams.get('position');

  const positions = [
    { id: 'cna', title: 'Certified Nursing Assistant (CNA)' },
    { id: 'dementia-specialist', title: 'Dementia Care Specialist' },
    { id: 'lpn', title: 'Licensed Practical Nurse (LPN)' },
    { id: 'pt', title: 'Physical Therapist (PT)' },
    { id: 'coordinator', title: 'Care Coordinator' },
    { id: 'companion', title: 'Companion Care Provider' },
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: positionParam || '',
    experience: '',
    certifications: '',
    availableDate: '',
    availability: 'flexible',
    coverLetter: '',
    backgroundCheck: false,
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!formData.experience.trim()) newErrors.experience = 'Please describe your experience';
    if (!formData.availableDate) newErrors.availableDate = 'Available date is required';
    if (!formData.backgroundCheck) newErrors.backgroundCheck = 'You must consent to background check';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - in production, send to your backend
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log form data (in production, send to email or database)
      console.log('Application submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        certifications: '',
        availableDate: '',
        availability: 'flexible',
        coverLetter: '',
        backgroundCheck: false,
        agreeToTerms: false,
      });

      // Redirect after 3 seconds
      setTimeout(() => {
        window.location.href = '/careers';
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-4">Apply to Bella Healthcare</h1>
          <p className="text-xl text-white/90">Join our team and make a meaningful difference in seniors' lives</p>
        </div>
      </section>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 m-4 mt-8 rounded-lg p-6 max-w-4xl mx-auto">
          <div className="flex gap-4 items-start">
            <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-green-700 dark:text-green-400 text-lg">Application Submitted Successfully!</h3>
              <p className="text-green-600 dark:text-green-300 mt-2">
                Thank you for your interest in Bella Healthcare. We've received your application and will review it within 2-3 business days.
                You'll receive an email update at <strong>{formData.email}</strong> with next steps.
              </p>
              <p className="text-green-600 dark:text-green-300 text-sm mt-4">Redirecting to Careers page...</p>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Personal Information</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky ${
                    errors.firstName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky ${
                    errors.lastName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="(123) 456-7890"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Position Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Position Information</h2>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Position Applied For *</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky ${
                  errors.position ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="">Select a position...</option>
                {positions.map((pos) => (
                  <option key={pos.id} value={pos.id}>
                    {pos.title}
                  </option>
                ))}
              </select>
              {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Available Start Date *</label>
                <input
                  type="date"
                  name="availableDate"
                  value={formData.availableDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky ${
                    errors.availableDate ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.availableDate && <p className="text-red-500 text-sm mt-1">{errors.availableDate}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Schedule Preference</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky"
                >
                  <option value="flexible">Flexible</option>
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                  <option value="evenings">Evenings</option>
                  <option value="weekends">Weekends</option>
                </select>
              </div>
            </div>
          </div>

          {/* Experience & Qualifications */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Experience & Qualifications</h2>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                Relevant Experience & Background *
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky ${
                  errors.experience ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Tell us about your relevant experience, including years in healthcare, specific skills, and any notable achievements..."
              />
              {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                Certifications & Licenses
              </label>
              <textarea
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky"
                placeholder="List any relevant certifications, licenses, or training (e.g., CNA, LPN, CPR/BLS, specialized dementia training, etc.)"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-bella-sky"
                placeholder="Tell us why you're interested in joining Bella Healthcare and what motivates you to work in home care..."
              />
            </div>
          </div>

          {/* Agreements */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Agreements</h2>

            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="backgroundCheck"
                  checked={formData.backgroundCheck}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-bella-sky rounded focus:ring-2 focus:ring-bella-sky"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  I consent to a background check and verification of credentials as part of the hiring process *
                </span>
              </label>
              {errors.backgroundCheck && <p className="text-red-500 text-sm">{errors.backgroundCheck}</p>}

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-bella-sky rounded focus:ring-2 focus:ring-bella-sky"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  I agree to Bella Healthcare's terms and conditions and confirm that all information provided is accurate *
                </span>
              </label>
              {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-bella-orange hover:bg-bella-orange/90 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-all text-lg flex items-center justify-center gap-2"
            >
              {isSubmitting && <Loader className="animate-spin" size={20} />}
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>

          {/* Help Text */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Questions?</strong> Contact us at{' '}
              <a href="tel:+14105551234" className="text-bella-sky hover:underline">
                (410) 555-1234
              </a>{' '}
              or email{' '}
              <a href="mailto:careers@bellahealthcare.md" className="text-bella-sky hover:underline">
                careers@bellahealthcare.md
              </a>
            </p>
          </div>
        </form>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link href="/careers" className="text-bella-sky hover:text-bella-sky/80 font-bold">
            ← Back to Careers
          </Link>
        </div>
      </div>

      <CTA />
    </div>
  );
}
