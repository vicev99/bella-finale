'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[\d\-\(\)\s\+]+$/, 'Please enter a valid phone number').min(10, 'Phone must be at least 10 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must not exceed 1000 characters'),
});

type ContactData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string>('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactData) => {
    setSubmitStatus('idle');
    setSubmitError('');
    try {
      // In production, send to backend
      console.log('Contact form submitted:', data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitError('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-green-900 dark:text-green-100">Message sent successfully!</p>
            <p className="text-sm text-green-800 dark:text-green-300">Thank you! We'll contact you shortly.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-red-900 dark:text-red-100">Error sending message</p>
            <p className="text-sm text-red-800 dark:text-red-300">{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-bella-sky dark:text-white mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('name')}
              id="name"
              type="text"
              autoComplete="name"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 dark:bg-bella-sky/40 dark:text-white transition ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-bella-orange/30 focus:ring-bella-orange'
              }`}
              placeholder="Your name"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-bella-sky dark:text-white mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email')}
              id="email"
              type="email"
              autoComplete="email"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 dark:bg-bella-sky/40 dark:text-white transition ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-bella-orange/30 focus:ring-bella-orange'
              }`}
              placeholder="your@email.com"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-bella-sky dark:text-white mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            id="phone"
            type="tel"
            autoComplete="tel"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 dark:bg-bella-sky/40 dark:text-white transition ${
              errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-bella-orange/30 focus:ring-bella-orange'
            }`}
            placeholder="(410) 555-0100"
            aria-invalid={errors.phone ? 'true' : 'false'}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-bella-sky dark:text-white mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 dark:bg-bella-sky/40 dark:text-white transition resize-none ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-bella-orange/30 focus:ring-bella-orange'
            }`}
            placeholder="Tell us how we can help your family..."
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.message.message}
            </p>
          )}
        </div>        

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-bella hover:opacity-90 disabled:opacity-50 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed"
          aria-busy={isSubmitting}
        >
          <Mail size={20} />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
        <span className="text-red-500">*</span> Required fields
      </p>
    </div>
  );
}
