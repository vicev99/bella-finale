'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Download, ChevronRight, ChevronLeft } from 'lucide-react';
import jsPDF from 'jspdf';

const carePlanSchema = z.object({
  // Step 1: Personal Info
  lovedOneName: z.string().min(2, 'Name required'),
  lovedOneAge: z.string().min(1, 'Age required'),
  relationship: z.string().min(1, 'Relationship required'),
  
  // Step 2: Health Conditions
  primaryCondition: z.string().min(1, 'Primary condition required'),
  secondaryConditions: z.array(z.string()).optional(),
  medications: z.string().optional(),
  
  // Step 3: Mobility & ADL
  mobilityLevel: z.string().min(1, 'Please select mobility level'),
  assistanceNeeded: z.array(z.string()).default([]),
  
  // Step 4: Healthcare Needs
  healthcareServices: z.array(z.string()).default([]),
  specialRequirements: z.string().optional(),
  
  // Step 5: Preferences
  preferredCareHours: z.string().min(1, 'Care hours required'),
  caregiverPreferences: z.string().optional(),
  
  // Step 6: Contact & Insurance
  familyEmail: z.string().email('Valid email required'),
  familyPhone: z.string().min(10, 'Valid phone required'),
  insuranceProvider: z.string().optional(),
  medicaidEligible: z.string().optional(),
});

type CarePlanData = z.infer<typeof carePlanSchema>;

const STEPS = [
  { number: 1, title: 'Personal Information', label: 'Who' },
  { number: 2, title: 'Health Conditions', label: 'Health' },
  { number: 3, title: 'Mobility & Activities', label: 'Mobility' },
  { number: 4, title: 'Healthcare Services', label: 'Services' },
  { number: 5, title: 'Preferences', label: 'Preferences' },
  { number: 6, title: 'Contact & Insurance', label: 'Contact' },
];

const ADL_OPTIONS = ['Bathing', 'Dressing', 'Toileting', 'Eating', 'Transferring', 'Grooming', 'Medication Management'];
const SERVICE_OPTIONS = ['Physical Therapy', 'Occupational Therapy', 'Skilled Nursing', 'Wound Care', 'IV Therapy', 'Dementia Support', 'Respiratory Care'];
const CARE_HOURS = ['Part-Time (6-8 hours)', 'Extended (12-16 hours)', '24-Hour Live-In'];

export function CarePlanWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [pdfData, setPdfData] = useState<Partial<CarePlanData> | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<CarePlanData>({
    resolver: zodResolver(carePlanSchema),
    mode: 'onChange',
    defaultValues: {
      lovedOneName: '',
      lovedOneAge: '',
      relationship: '',
      primaryCondition: '',
      medications: '',
      mobilityLevel: '',
      secondaryConditions: [],
      assistanceNeeded: [],
      healthcareServices: [],
      specialRequirements: '',
      preferredCareHours: '',
      caregiverPreferences: '',
      familyEmail: '',
      familyPhone: '',
      insuranceProvider: '',
      medicaidEligible: '',
    },
  });

  const assistanceNeeded = watch('assistanceNeeded') || [];
  const healthcareServices = watch('healthcareServices') || [];

  const onSubmit = async (data: CarePlanData) => {
    // Define fields for each step
    const stepFields: Record<number, (keyof CarePlanData)[]> = {
      1: ['lovedOneName', 'lovedOneAge', 'relationship'],
      2: ['primaryCondition'],
      3: ['mobilityLevel', 'assistanceNeeded'],
      4: ['healthcareServices'],
      5: ['preferredCareHours'],
      6: ['familyEmail', 'familyPhone'],
    };

    // Validate only current step fields
    const fieldsToValidate = stepFields[step];
    const isValid = await trigger(fieldsToValidate as any);
    
    console.log('Step:', step, 'Valid:', isValid, 'Data:', data);

    if (!isValid) {
      console.log('Validation failed for fields:', fieldsToValidate);
      return;
    }

    if (step < 6) {
      setStep(step + 1);
    } else {
      setPdfData(data);
      setSubmitted(true);
      generatePDF(data);
    }
  };

  const handleNextClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const stepFields: Record<number, (keyof CarePlanData)[]> = {
      1: ['lovedOneName', 'lovedOneAge', 'relationship'],
      2: ['primaryCondition'],
      3: ['mobilityLevel'],
      4: [],
      5: ['preferredCareHours'],
      6: ['familyEmail', 'familyPhone'],
    };

    const fieldsToValidate = stepFields[step];
    const isValid = await trigger(fieldsToValidate as any);
    
    console.log('Step:', step, 'Valid:', isValid);

    if (isValid && step < 6) {
      setStep(step + 1);
    }
  };

  const handleGeneratePDF = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isValid = await trigger(['familyEmail', 'familyPhone']);
    
    if (isValid) {
      const data = watch() as CarePlanData;
      setPdfData(data);
      setSubmitted(true);
      generatePDF(data);
    }
  };

  const generatePDF = (data: Partial<CarePlanData>) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    let yPosition = margin;

    // Professional Header with Bella Branding
    doc.setFillColor(0, 61, 130); // Dark blue background
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    // Company Name and Logo Area
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont(undefined, 'bold');
    doc.text('BELLA HEALTHCARE SERVICES', margin, 15);
    
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(200, 220, 255);
    doc.text('Compassionate In-Home Care for Maryland Families', margin, 21);
    
    // License Info on the right
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('Maryland OHCQ Non-Expiring License #H-16847-D', pageWidth - margin - 60, 15);
    doc.text('(410) 555-0100 | Laurel, MD 20723', pageWidth - margin - 60, 21);
    
    // Separator line
    doc.setDrawColor(212, 165, 116); // Bella orange
    doc.setLineWidth(0.5);
    doc.line(margin, 42, pageWidth - margin, 42);
    
    yPosition = 50;

    // Document Title
    doc.setTextColor(0, 61, 130);
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text(`COMPREHENSIVE CARE PLAN`, margin, yPosition);
    yPosition += 8;
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(`Client: ${data.lovedOneName}`, margin, yPosition);
    yPosition += 7;
    
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(100, 100, 100);
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    doc.text(`Date Prepared: ${currentDate}`, margin, yPosition);
    yPosition += 10;

    // Section background color helper
    const addSection = (title: string, yPos: number) => {
      doc.setFillColor(240, 248, 255); // Light blue background
      doc.rect(margin - 2, yPos - 4, pageWidth - margin * 2 + 4, 6, 'F');
      doc.setTextColor(0, 61, 130);
      doc.setFontSize(11);
      doc.setFont(undefined, 'bold');
      doc.text(title, margin, yPos);
      doc.setTextColor(0, 0, 0);
    };

    // Personal Information
    addSection('PERSONAL INFORMATION', yPosition);
    yPosition += 8;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(10);
    doc.text(`Name: ${data.lovedOneName}`, margin + 5, yPosition);
    yPosition += 5;
    doc.text(`Age: ${data.lovedOneAge} years old`, margin + 5, yPosition);
    yPosition += 5;
    doc.text(`Relationship to Caregiver: ${data.relationship}`, margin + 5, yPosition);
    yPosition += 8;

    // Health Conditions
    addSection('PRIMARY HEALTH CONDITIONS', yPosition);
    yPosition += 8;
    doc.text(`Primary Condition: ${data.primaryCondition}`, margin + 5, yPosition);
    yPosition += 5;
    if (data.medications) {
      doc.text(`Current Medications:`, margin + 5, yPosition);
      yPosition += 4;
      const medicationLines = doc.splitTextToSize(data.medications, pageWidth - margin * 2 - 10);
      medicationLines.forEach(line => {
        doc.text(line, margin + 10, yPosition);
        yPosition += 4;
      });
      yPosition += 3;
    }
    yPosition += 3;

    // Mobility & ADL
    addSection('MOBILITY & ACTIVITIES OF DAILY LIVING', yPosition);
    yPosition += 8;
    doc.text(`Mobility Level: ${data.mobilityLevel}`, margin + 5, yPosition);
    yPosition += 5;
    if (data.assistanceNeeded && data.assistanceNeeded.length > 0) {
      doc.text(`Assistance Needed:`, margin + 5, yPosition);
      yPosition += 4;
      doc.text(data.assistanceNeeded.join(', '), margin + 10, yPosition, { maxWidth: pageWidth - margin * 2 - 15 });
      yPosition += 8;
    }
    yPosition += 3;

    // Healthcare Services
    addSection('HEALTHCARE SERVICES NEEDED', yPosition);
    yPosition += 8;
    if (data.healthcareServices && data.healthcareServices.length > 0) {
      doc.text(`Required Services:`, margin + 5, yPosition);
      yPosition += 4;
      doc.text(data.healthcareServices.join(', '), margin + 10, yPosition, { maxWidth: pageWidth - margin * 2 - 15 });
      yPosition += 8;
    }
    if (data.specialRequirements) {
      doc.text(`Special Requirements:`, margin + 5, yPosition);
      yPosition += 4;
      const specLines = doc.splitTextToSize(data.specialRequirements, pageWidth - margin * 2 - 15);
      specLines.forEach(line => {
        doc.text(line, margin + 10, yPosition);
        yPosition += 4;
      });
      yPosition += 3;
    }
    yPosition += 3;

    // Care Preferences
    addSection('CARE PREFERENCES & SCHEDULE', yPosition);
    yPosition += 8;
    doc.text(`Preferred Care Hours: ${data.preferredCareHours}`, margin + 5, yPosition);
    yPosition += 5;
    if (data.caregiverPreferences) {
      doc.text(`Caregiver Preferences:`, margin + 5, yPosition);
      yPosition += 4;
      const prefLines = doc.splitTextToSize(data.caregiverPreferences, pageWidth - margin * 2 - 15);
      prefLines.forEach(line => {
        doc.text(line, margin + 10, yPosition);
        yPosition += 4;
      });
      yPosition += 3;
    }
    yPosition += 5;

    // Check if we need a new page
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }

    // Contact & Insurance
    addSection('CONTACT & INSURANCE INFORMATION', yPosition);
    yPosition += 8;
    doc.text(`Email: ${data.familyEmail}`, margin + 5, yPosition);
    yPosition += 5;
    doc.text(`Phone: ${data.familyPhone}`, margin + 5, yPosition);
    yPosition += 5;
    if (data.insuranceProvider) {
      doc.text(`Insurance Provider: ${data.insuranceProvider}`, margin + 5, yPosition);
      yPosition += 5;
    }
    doc.text(`Medicaid Eligible: ${data.medicaidEligible || 'Not specified'}`, margin + 5, yPosition);
    yPosition += 10;

    // Professional Footer
    yPosition = pageHeight - 25;
    doc.setFillColor(0, 61, 130);
    doc.rect(0, yPosition - 2, pageWidth, 27, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont(undefined, 'bold');
    doc.text('BELLA HEALTHCARE SERVICES LLC', margin, yPosition + 3);
    
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(200, 220, 255);
    doc.text('9707 Bolton Street, Laurel, MD 20723', margin, yPosition + 8);
    doc.text('Phone: (410) 555-0100 | License: H-16847-D', margin, yPosition + 12);
    
    doc.setTextColor(212, 165, 116);
    doc.setFontSize(7);
    doc.text('This care plan is confidential and intended for authorized use only.', margin, yPosition + 16);
    doc.text('Generated: ' + currentDate, pageWidth - margin - 50, yPosition + 16);

    doc.save('bella-healthcare-care-plan.pdf');
  };

  if (submitted && pdfData) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-bella-orange/20 to-transparent p-12 rounded-2xl border-2 border-bella-orange text-center"
      >
        <h3 className="text-3xl font-black text-bella-sky mb-4">✓ Care Plan Complete!</h3>
        <p className="text-gray-700 mb-2 text-lg font-semibold">
          Your comprehensive care plan for {pdfData.lovedOneName} has been created.
        </p>
        <p className="text-gray-600 mb-8">
          A detailed PDF has been downloaded to your device. You can download it again or contact our team for next steps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => pdfData && generatePDF(pdfData)}
            className="inline-flex items-center justify-center gap-2 bg-bella-orange text-bella-sky font-bold px-8 py-3 rounded-lg hover:bg-bella-orange/90 transition-all"
          >
            <Download size={20} />
            Download Care Plan
          </button>
          <a
            href="tel:(410)555-0100"
            className="inline-flex items-center justify-center gap-2 border-2 border-bella-orange text-bella-orange font-bold px-8 py-3 rounded-lg hover:bg-bella-orange/10 transition-all"
          >
            Call to Schedule
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex overflow-x-auto gap-2 pb-4">
          {STEPS.map((s, idx) => (
            <div key={s.number} className="flex items-center gap-2 flex-shrink-0">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl font-bold text-sm transition-all ${
                  s.number <= step
                    ? 'bg-bella-orange text-bella-sky shadow-lg'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                <div className="text-lg">{s.number}</div>
                <div className="text-xs text-center leading-tight">{s.label}</div>
              </motion.div>
              {idx < STEPS.length - 1 && (
                <div className={`w-6 h-1 ${s.number < step ? 'bg-bella-orange' : 'bg-gray-300'}`} />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-bella-sky font-bold text-lg mt-4">
          Step {step} of 6: {STEPS[step - 1].title}
        </p>
      </div>

      <div className="space-y-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-bella-sky mb-8">Tell Us About Your Loved One</h3>
              
              <div>
                <label className="block text-sm font-bold text-bella-sky mb-2">Full Name *</label>
                <input
                  {...register('lovedOneName')}
                  className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40 text-base"
                  placeholder="Enter full name"
                />
                {errors.lovedOneName && <p className="text-red-500 text-sm mt-1">{errors.lovedOneName.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-bella-sky mb-2">Age *</label>
                  <input
                    {...register('lovedOneAge')}
                    type="text"
                    inputMode="numeric"
                    className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40"
                    placeholder="Age"
                  />
                  {errors.lovedOneAge && <p className="text-red-500 text-sm mt-1">{errors.lovedOneAge.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-bella-sky mb-2">Relationship *</label>
                  <select {...register('relationship')} className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40">
                    <option value="">Select...</option>
                    <option value="Parent">Parent</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Child">Child</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.relationship && <p className="text-red-500 text-sm mt-1">{errors.relationship.message}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Health Conditions */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-bella-sky mb-8">Health Conditions & Medications</h3>
              
              <div>
                <label className="block text-sm font-bold text-bella-sky mb-2">Primary Health Condition *</label>
                <select {...register('primaryCondition')} className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40 text-base">
                  <option value="">Select primary condition...</option>
                  <option value="Dementia/Alzheimer's">Dementia/Alzheimer's</option>
                  <option value="Post-Operative Recovery">Post-Operative Recovery</option>
                  <option value="Stroke Recovery">Stroke Recovery</option>
                  <option value="Heart Disease">Heart Disease</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="COPD/Respiratory">COPD/Respiratory Disease</option>
                  <option value="Arthritis/Mobility Issues">Arthritis/Mobility Issues</option>
                  <option value="Cancer Treatment Support">Cancer Treatment Support</option>
                  <option value="General Aging">General Aging/Frailty</option>
                  <option value="Other">Other</option>
                </select>
                {errors.primaryCondition && <p className="text-red-500 text-sm mt-1">{errors.primaryCondition.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-bella-sky mb-2">Current Medications</label>
                <textarea
                  {...register('medications')}
                  className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40 text-base"
                  placeholder="List any current medications and dosages"
                  rows={4}
                />
              </div>
            </motion.div>
          )}

          {/* Step 3: Mobility & ADL */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-bella-sky mb-8">Mobility & Daily Activities</h3>
              
              <div>
                <label className="block text-sm font-bold text-bella-sky mb-3">Mobility Level *</label>
                <div className="space-y-3">
                  {['Independent', 'Requires Minimal Assistance', 'Requires Moderate Assistance', 'Requires Total Assistance', 'Bedbound'].map(level => (
                    <label key={level} className="flex items-center gap-3 p-3 border-2 border-bella-orange/20 rounded-lg hover:bg-bella-orange/5 cursor-pointer">
                      <input type="radio" {...register('mobilityLevel')} value={level} className="w-4 h-4" />
                      <span className="font-medium text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
                {errors.mobilityLevel && <p className="text-red-500 text-sm mt-1">{errors.mobilityLevel.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-bella-sky mb-3">Assistance with Daily Activities (Select All That Apply)</label>
                <div className="grid grid-cols-2 gap-3">
                  {ADL_OPTIONS.map(adl => (
                    <label key={adl} className="flex items-center gap-2 p-2 border border-bella-orange/20 rounded hover:bg-bella-orange/5 cursor-pointer">
                      <input
                        type="checkbox"
                        value={adl}
                        {...register('assistanceNeeded')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-medium">{adl}</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Healthcare Services */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-bella-sky mb-8">Healthcare Services Needed</h3>
              
              <div>
                <label className="block text-sm font-bold text-bella-sky mb-3">Professional Services Required (Select All That Apply)</label>
                <div className="grid grid-cols-1 gap-3">
                  {SERVICE_OPTIONS.map(service => (
                    <label key={service} className="flex items-center gap-3 p-3 border-2 border-bella-orange/20 rounded-lg hover:bg-bella-orange/5 cursor-pointer">
                      <input
                        type="checkbox"
                        value={service}
                        {...register('healthcareServices')}
                        className="w-4 h-4"
                      />
                      <span className="font-medium">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-bella-sky mb-2">Special Healthcare Requirements</label>
                <textarea
                  {...register('specialRequirements')}
                  className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40 text-base"
                  placeholder="Any special medical equipment, allergies, or specific needs?"
                  rows={4}
                />
              </div>
            </motion.div>
          )}

          {/* Step 5: Preferences */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-bella-sky mb-8">Care Preferences</h3>
              
              <div>
                <label className="block text-sm font-bold text-bella-sky mb-3">Preferred Care Schedule *</label>
                <div className="space-y-3">
                  {CARE_HOURS.map(hours => (
                    <label key={hours} className="flex items-center gap-3 p-3 border-2 border-bella-orange/20 rounded-lg hover:bg-bella-orange/5 cursor-pointer">
                      <input type="radio" {...register('preferredCareHours')} value={hours} className="w-4 h-4" />
                      <span className="font-medium">{hours}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredCareHours && <p className="text-red-500 text-sm mt-1">{errors.preferredCareHours.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-bella-sky mb-2">Caregiver Preferences</label>
                <textarea
                  {...register('caregiverPreferences')}
                  className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40 text-base"
                  placeholder="Any preferences for caregiver (gender, language, experience, etc.)?"
                  rows={4}
                />
              </div>
            </motion.div>
          )}

          {/* Step 6: Contact & Insurance */}
          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-bella-sky mb-8">Contact & Insurance Information</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-bella-sky mb-2">Email Address *</label>
                  <input
                    {...register('familyEmail')}
                    type="email"
                    className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40"
                    placeholder="your@email.com"
                  />
                  {errors.familyEmail && <p className="text-red-500 text-sm mt-1">{errors.familyEmail.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-bella-sky mb-2">Phone Number *</label>
                  <input
                    {...register('familyPhone')}
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40"
                    placeholder="(410) 555-0100"
                  />
                  {errors.familyPhone && <p className="text-red-500 text-sm mt-1">{errors.familyPhone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-bella-sky mb-2">Insurance Provider</label>
                <input
                  {...register('insuranceProvider')}
                  className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40"
                  placeholder="Insurance company name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-bella-sky mb-2">Medicaid Eligible?</label>
                <select {...register('medicaidEligible')} className="w-full px-4 py-3 border-2 border-bella-orange/30 rounded-lg focus:outline-none focus:border-bella-orange dark:bg-bella-sky/40">
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Unsure">Unsure</option>
                </select>
              </div>

              <div className="bg-bella-orange/10 p-4 rounded-lg border border-bella-orange/30">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-bella-sky">Note:</span> Your care plan will be reviewed by our team and we'll contact you to discuss options and pricing.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between pt-8 border-t-2 border-gray-200">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 px-6 py-3 border-2 border-bella-orange text-bella-orange font-bold rounded-lg hover:bg-bella-orange/10 transition-all"
            >
              <ChevronLeft size={20} />
              Back
            </button>
          )}
          {step < 6 && (
            <button
              type="button"
              onClick={handleNextClick}
              className="flex items-center gap-2 px-8 py-3 bg-bella-orange text-bella-sky font-bold rounded-lg hover:bg-bella-orange/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
            >
              Next
              <ChevronRight size={20} />
            </button>
          )}
          {step === 6 && (
            <button
              type="button"
              onClick={handleGeneratePDF}
              className="ml-auto flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={20} />
              Generate & Download Care Plan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
