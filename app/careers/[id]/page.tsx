'use client';

import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, DollarSign, CheckCircle, FileUp, Heart } from 'lucide-react';
import { jobs } from '@/data/jobs';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  const job = jobs.find(j => j.id === jobId);
  
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    resumeFile: null as File | null,
    experience: '',
    availability: '',
    certifications: [] as string[],
    salaryExpectation: '',
    coverLetter: '',
    agreeToTerms: false,
  });

  if (!job) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Position Not Found</h1>
        <Link href="/careers" className="text-bella-orange hover:underline">Back to Careers</Link>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, resumeFile: file }));
    }
  };

  const handleCertificationToggle = (cert: string) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter(c => c !== cert)
        : [...prev.certifications, cert],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and contact you soon.');
    setFormStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      resumeFile: null,
      experience: '',
      availability: '',
      certifications: [],
      salaryExpectation: '',
      coverLetter: '',
      agreeToTerms: false,
    });
    setShowForm(false);
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.fullName && formData.email && formData.phone && 
                  formData.address && formData.city && formData.state && formData.zipCode);
      case 2:
        return !!(formData.resumeFile && formData.experience && formData.availability);
      case 3:
        return true; // Optional fields
      case 4:
        return formData.agreeToTerms;
      default:
        return false;
    }
  };

  return (
    <div className="bg-white dark:bg-bella-sky/20">
      {/* Job Header */}
      <section className="py-12 bg-gradient-bella text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft size={20} />
            Back to Careers
          </Link>
          <h1 className="text-5xl font-black mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              {job.location}
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={20} />
              {job.salary}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              {job.type}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Details */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white dark:bg-bella-sky/40 rounded-xl p-8 border border-bella-orange/20 mb-8">
                <h2 className="text-2xl font-bold text-bella-sky dark:text-white mb-4">About This Position</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white dark:bg-bella-sky/40 rounded-xl p-8 border border-bella-orange/20 mb-8">
                <h2 className="text-2xl font-bold text-bella-sky dark:text-white mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle size={20} className="text-bella-orange flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white dark:bg-bella-sky/40 rounded-xl p-8 border border-bella-orange/20 mb-8">
                <h2 className="text-2xl font-bold text-bella-sky dark:text-white mb-4">Requirements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-bella-sky dark:text-white mb-3">Must Have:</h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-bella-orange font-bold">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-bella-sky dark:text-white mb-3">Nice to Have:</h3>
                    <ul className="space-y-2">
                      {job.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-bella-orange font-bold">•</span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-bella-orange/10 dark:bg-bella-orange/20 rounded-xl p-8 border border-bella-orange/30">
                <h2 className="text-2xl font-bold text-bella-sky dark:text-white mb-4">What We Offer</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Heart size={20} className="text-bella-orange flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Quick Facts */}
                <div className="bg-white dark:bg-bella-sky/40 rounded-xl p-6 border border-bella-orange/20">
                  <h3 className="font-bold text-bella-sky dark:text-white mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Experience Level</p>
                      <p className="font-semibold text-bella-sky dark:text-white">{job.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Employment Type</p>
                      <p className="font-semibold text-bella-sky dark:text-white">{job.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Department</p>
                      <p className="font-semibold text-bella-sky dark:text-white">{job.department}</p>
                    </div>
                  </div>
                </div>

                {/* Required Certifications */}
                {job.certifications && job.certifications.length > 0 && (
                  <div className="bg-white dark:bg-bella-sky/40 rounded-xl p-6 border border-bella-orange/20">
                    <h3 className="font-bold text-bella-sky dark:text-white mb-4">Certifications</h3>
                    <div className="space-y-2">
                      {job.certifications.map((cert, idx) => (
                        <div key={idx} className="flex gap-2 items-start">
                          <CheckCircle size={16} className="text-bella-orange mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700 dark:text-gray-300">{cert}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Apply Button */}
                {!showForm ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-bella-orange hover:bg-bella-orange/90 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <FileUp size={20} />
                    Apply Now
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      {showForm && (
        <section className="py-16 bg-bella-cream dark:bg-bella-sky/40">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-bella-sky/60 rounded-xl p-8 border border-bella-orange/20">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-2">Apply for {job.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">Step {formStep} of 4 - Complete the application below</p>
                {/* Progress Bar */}
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-bella-orange transition-all"
                    style={{ width: `${(formStep / 4) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-semibold text-bella-sky dark:text-white mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                      />
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">As it appears on your legal documents</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-bella-sky dark:text-white mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">We'll use this to contact you</p>
                      </div>

                      <div>
                        <label className="block font-semibold text-bella-sky dark:text-white mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-bella-sky dark:text-white mb-2">Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street address"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-semibold text-bella-sky dark:text-white mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-bella-sky dark:text-white mb-2">State *</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="MD"
                          required
                          maxLength={2}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-bella-sky dark:text-white mb-2">ZIP Code *</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="20723"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Resume & Experience */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-semibold text-bella-sky dark:text-white mb-2">Upload Resume (PDF, DOC, DOCX) *</label>
                      <div className="border-2 border-dashed border-bella-orange rounded-lg p-8 text-center hover:bg-bella-orange/5 transition">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="hidden"
                          id="resume-upload"
                        />
                        <label htmlFor="resume-upload" className="cursor-pointer">
                          <FileUp size={40} className="mx-auto mb-2 text-bella-orange" />
                          <p className="font-semibold text-bella-sky dark:text-white mb-1">
                            {formData.resumeFile ? formData.resumeFile.name : 'Click to upload or drag and drop'}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">PDF, DOC, or DOCX (Max 5MB)</p>
                        </label>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Resume is required for all applications</p>
                    </div>

                    <div>
                      <label className="block font-semibold text-bella-sky dark:text-white mb-2">Years of Relevant Experience *</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-2">1-2 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Experience in related healthcare roles</p>
                    </div>

                    <div>
                      <label className="block font-semibold text-bella-sky dark:text-white mb-2">Salary Expectation</label>
                      <input
                        type="text"
                        name="salaryExpectation"
                        value={formData.salaryExpectation}
                        onChange={handleInputChange}
                        placeholder="e.g., $50,000 - $60,000"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                      />
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Optional - leave blank if open to discussion</p>
                    </div>

                    <div>
                      <label className="block font-semibold text-bella-sky dark:text-white mb-2">Availability *</label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                      >
                        <option value="">When can you start?</option>
                        <option value="immediately">Immediately</option>
                        <option value="2-weeks">2 weeks notice</option>
                        <option value="1-month">1 month notice</option>
                        <option value="flexible">Flexible/Discuss</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Certifications */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-bella-sky dark:text-white mb-4">Current Certifications</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Select all certifications you currently hold:</p>
                      <div className="space-y-3">
                        {[
                          'CPR/BLS Certification',
                          'CNA Certification',
                          'LPN License',
                          'RN License',
                          'PT License',
                          'OT License',
                          'MSW/LCSW License',
                          'Dementia Care Training',
                          'First Aid Certification',
                          'HIPAA Compliance',
                        ].map(cert => (
                          <label key={cert} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.certifications.includes(cert)}
                              onChange={() => handleCertificationToggle(cert)}
                              className="w-4 h-4 rounded border-gray-300 text-bella-orange focus:ring-bella-orange"
                            />
                            <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-bella-sky dark:text-white mb-2">Cover Letter (Optional)</label>
                      <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bella-sky/20 text-gray-900 dark:text-white focus:ring-2 focus:ring-bella-orange outline-none"
                      />
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Optional but highly recommended - helps us get to know you better</p>
                    </div>
                  </div>
                )}

                {/* Step 4: Terms & Review */}
                {formStep === 4 && (
                  <div className="space-y-6">
                    <div className="bg-bella-cream dark:bg-bella-sky/30 rounded-lg p-6 border-l-4 border-bella-orange">
                      <h3 className="font-bold text-bella-sky dark:text-white mb-3">Application Review</h3>
                      <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <p><strong>Name:</strong> {formData.fullName}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Phone:</strong> {formData.phone}</p>
                        <p><strong>Experience:</strong> {formData.experience}</p>
                        <p><strong>Availability:</strong> {formData.availability}</p>
                        <p><strong>Resume:</strong> {formData.resumeFile?.name || 'Not uploaded'}</p>
                        <p><strong>Certifications:</strong> {formData.certifications.length > 0 ? formData.certifications.join(', ') : 'None selected'}</p>
                      </div>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 mt-1 rounded border-gray-300 text-bella-orange focus:ring-bella-orange"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        I confirm that the information provided in this application is accurate and complete. I authorize Bella Healthcare Services to verify employment history, conduct background checks, and contact my references. I understand that submission of false information may result in dismissal.
                      </span>
                    </label>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                  {formStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setFormStep(formStep - 1)}
                      className="px-6 py-2 border border-bella-orange text-bella-orange font-bold rounded-lg hover:bg-bella-orange/10 transition"
                    >
                      Back
                    </button>
                  )}
                  <div className="ml-auto flex gap-3">
                    {formStep < 4 && (
                      <button
                        type="button"
                        onClick={() => {
                          if (!validateStep(formStep)) {
                            alert('Please complete all required fields');
                            return;
                          }
                          setFormStep(formStep + 1);
                        }}
                        className="px-6 py-2 bg-bella-orange hover:bg-bella-orange/90 text-white font-bold rounded-lg transition"
                      >
                        Next
                      </button>
                    )}
                    {formStep === 4 && (
                      <button
                        type="submit"
                        disabled={!formData.agreeToTerms}
                        className="px-8 py-2 bg-bella-orange hover:bg-bella-orange/90 disabled:bg-gray-400 text-white font-bold rounded-lg transition disabled:cursor-not-allowed"
                      >
                        Submit Application
                      </button>
                    )}
                  </div>
                </div>
              </form>

              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="mt-4 text-gray-600 dark:text-gray-400 hover:text-bella-sky text-sm"
              >
                ← Cancel Application
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
