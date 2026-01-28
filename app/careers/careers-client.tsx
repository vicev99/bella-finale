'use client';

import Link from 'next/link';
import { Briefcase, MapPin, Clock, DollarSign, Heart, Users, Award, CheckCircle, TrendingUp, Target, Zap, Search, Filter, Download, Star } from 'lucide-react';
import { jobs } from '@/data/jobs';
import { useState, useMemo } from 'react';

export default function CareersClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Extract unique departments and types
  const departments = ['all', ...new Set(jobs.map(j => j.department))];
  const types = ['all', ...new Set(jobs.map(j => j.type))];

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    let filtered = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = selectedDepartment === 'all' || job.department === selectedDepartment;
      const matchesType = selectedType === 'all' || job.type === selectedType;
      return matchesSearch && matchesDept && matchesType;
    });

    // Sort
    if (sortBy === 'salary-high') {
      filtered.sort((a, b) => {
        const aMax = parseInt(b.salary.split('-')[1]) || 0;
        const bMax = parseInt(a.salary.split('-')[1]) || 0;
        return bMax - aMax;
      });
    } else if (sortBy === 'salary-low') {
      filtered.sort((a, b) => {
        const aMin = parseInt(a.salary.split('-')[0]) || 0;
        const bMin = parseInt(b.salary.split('-')[0]) || 0;
        return aMin - bMin;
      });
    }

    return filtered;
  }, [searchTerm, selectedDepartment, selectedType, sortBy]);

  const benefits = [
    { icon: Heart, title: 'Competitive Pay', description: 'Industry-leading compensation based on experience and certifications' },
    { icon: Users, title: 'Team Support', description: 'Work with dedicated, compassionate healthcare professionals' },
    { icon: Award, title: 'Professional Development', description: 'Ongoing training, certifications, and career advancement opportunities' },
    { icon: Briefcase, title: 'Flexible Scheduling', description: 'Work arrangements tailored to your needs and lifestyle' },
    { icon: CheckCircle, title: 'Health Benefits', description: 'Comprehensive health, dental, vision, and retirement plans' },
    { icon: Target, title: 'Meaningful Work', description: 'Make a real difference in seniors\' lives every single day' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Clear advancement pathways and leadership opportunities' },
    { icon: Zap, title: 'Work-Life Balance', description: 'Supportive environment that values your personal wellbeing' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase size={60} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl font-black mb-4">Build Your Healthcare Career</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join Bella Healthcare Services and make a meaningful difference in the lives of seniors and disabled individuals. We're looking for compassionate, dedicated professionals to join our growing team.
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2">
            <p className="text-white font-semibold">{jobs.length} Open Positions</p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-bella-cream dark:bg-bella-sky/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-12 text-center">Why Join Bella Healthcare?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-bella-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-bella-orange" />
              </div>
              <h3 className="font-bold text-bella-sky dark:text-white mb-2">Mission-Driven Work</h3>
              <p className="text-gray-600 dark:text-gray-400">Make real impact in clients' lives every single day</p>
            </div>

            <div className="text-center">
              <div className="bg-bella-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-bella-orange" />
              </div>
              <h3 className="font-bold text-bella-sky dark:text-white mb-2">Supportive Team</h3>
              <p className="text-gray-600 dark:text-gray-400">Work with compassionate colleagues who value collaboration</p>
            </div>

            <div className="text-center">
              <div className="bg-bella-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={32} className="text-bella-orange" />
              </div>
              <h3 className="font-bold text-bella-sky dark:text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-400">Advance your career with continuing education support</p>
            </div>

            <div className="text-center">
              <div className="bg-bella-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-bella-orange" />
              </div>
              <h3 className="font-bold text-bella-sky dark:text-white mb-2">Flexibility</h3>
              <p className="text-gray-600 dark:text-gray-400">Schedules that work with your life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-12 text-center">Comprehensive Benefits Package</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-white dark:bg-bella-sky/40 p-6 rounded-lg border border-bella-orange/20 hover:border-bella-orange transition-all">
                  <div className="w-12 h-12 bg-bella-sky/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-bella-orange" size={24} />
                  </div>
                  <h3 className="font-bold text-bella-sky dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-8">Open Positions ({filteredJobs.length})</h2>
            
            {/* Advanced Search & Filter Bar */}
            <div className="space-y-6 bg-gray-50 dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-4 text-bella-orange" size={20} />
                <input
                  type="text"
                  placeholder="Search by job title, department, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-bella-orange/30 focus:border-bella-orange outline-none bg-white dark:bg-gray-800 dark:text-white transition"
                />
              </div>

              {/* Filter Controls */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Department Filter */}
                <div>
                  <label className="block text-sm font-bold text-bella-sky dark:text-white mb-2 flex items-center gap-2">
                    <Filter size={16} />
                    Department
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border-2 border-bella-orange/30 focus:border-bella-orange outline-none bg-white dark:bg-gray-800 dark:text-white transition"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>
                        {dept === 'all' ? 'All Departments' : dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Employment Type Filter */}
                <div>
                  <label className="block text-sm font-bold text-bella-sky dark:text-white mb-2 flex items-center gap-2">
                    <Briefcase size={16} />
                    Employment Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border-2 border-bella-orange/30 focus:border-bella-orange outline-none bg-white dark:bg-gray-800 dark:text-white transition"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-bold text-bella-sky dark:text-white mb-2 flex items-center gap-2">
                    <TrendingUp size={16} />
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border-2 border-bella-orange/30 focus:border-bella-orange outline-none bg-white dark:bg-gray-800 dark:text-white transition"
                  >
                    <option value="newest">Newest</option>
                    <option value="salary-high">Highest Salary</option>
                    <option value="salary-low">Lowest Salary</option>
                  </select>
                </div>

                {/* Active Filters Counter */}
                <div className="flex items-end">
                  {(searchTerm || selectedDepartment !== 'all' || selectedType !== 'all') && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedDepartment('all');
                        setSelectedType('all');
                      }}
                      className="w-full px-4 py-2 bg-bella-orange/20 hover:bg-bella-orange/30 text-bella-orange rounded-lg font-semibold transition"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <Link key={job.id} href={`/careers/${job.id}`}>
                  <div className="bg-white dark:bg-bella-sky/40 rounded-xl border-2 border-bella-orange/20 hover:border-bella-orange hover:shadow-2xl transition-all p-6 group cursor-pointer overflow-hidden relative">
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-bella-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                    
                    <div className="relative z-10 flex gap-6">
                      {/* Job Image */}
                      <div className="hidden md:block flex-shrink-0">
                        <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md">
                          <img
                            src={job.image}
                            alt={job.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </div>

                      {/* Job Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-bella-sky dark:text-white group-hover:text-bella-orange transition">
                              {job.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-semibold">{job.department}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2 flex-shrink-0">
                            <span className="inline-block bg-bella-orange/20 text-bella-orange px-4 py-2 rounded-full text-xs font-bold">
                              {job.type}
                            </span>
                            <Star size={20} className="text-bella-orange opacity-0 group-hover:opacity-100 transition" />
                          </div>
                        </div>

                        {/* Meta Info Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-4">
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                            <MapPin size={16} className="text-bella-orange flex-shrink-0" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                            <DollarSign size={16} className="text-bella-orange flex-shrink-0" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                            <Clock size={16} className="text-bella-orange flex-shrink-0" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                            <Briefcase size={16} className="text-bella-orange flex-shrink-0" />
                            <span>{job.certifications?.length || 0} Certs</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                          {job.description}
                        </p>

                        {/* Certifications Required */}
                        {job.certifications && job.certifications.length > 0 && (
                          <div className="mb-4">
                            <p className="text-xs font-bold text-bella-sky dark:text-white mb-2">Required Certifications:</p>
                            <div className="flex flex-wrap gap-2">
                              {job.certifications.map((cert, idx) => (
                                <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold">
                                  {cert}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Key Benefits Preview */}
                        <div className="flex items-center justify-between">
                          <div className="flex gap-3 text-xs">
                            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                              <CheckCircle size={14} />
                              Health Benefits
                            </div>
                            <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                              <Zap size={14} />
                              Flexible Schedule
                            </div>
                          </div>
                          <div className="text-bella-orange group-hover:translate-x-2 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 dark:bg-bella-sky/40 rounded-xl">
              <Search size={48} className="mx-auto text-bella-orange mb-4 opacity-50" />
              <p className="text-xl font-bold text-bella-sky dark:text-white mb-2">No positions found</p>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-bella text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-8">
            Start your application today. Upload your resume and tell us why you'd be a great fit for Bella Healthcare Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-bella-sky font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
              <Download size={20} />
              Download Application Kit
            </Link>
            <Link href="/contact" className="inline-block border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-12 text-center">Simple Application Process</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Browse Positions', description: 'Explore our open jobs and find the perfect fit for your career' },
              { step: 2, title: 'Submit Resume', description: 'Upload your resume and required certifications with one click' },
              { step: 3, title: 'Complete Application', description: 'Answer detailed questions about your experience and goals' },
              { step: 4, title: 'Get Hired', description: 'Our team will review and contact you within 48 hours' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-bella-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-bella-sky dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                {idx < 3 && <div className="hidden md:block absolute right-0 top-8 w-6 h-1 bg-bella-orange" style={{ marginRight: '-24px' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-12 text-center">What Our Team Says</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Mitchell', role: 'Registered Nurse', text: 'Bella Healthcare gave me the flexibility I needed while allowing me to make a real impact on patients\' lives. The team is incredibly supportive!' },
              { name: 'Marcus Johnson', role: 'Home Health Aide', text: 'The training and development opportunities here are outstanding. I\'ve grown so much professionally since joining Bella Healthcare.' },
              { name: 'Diana Rodriguez', role: 'Physical Therapist', text: 'What sets Bella apart is the genuine care they have for their staff. It\'s not just about the job—it\'s about being part of a mission.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-bella-sky/40 p-8 rounded-xl border border-bella-orange/20 hover:border-bella-orange transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-bella-orange text-bella-orange" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-bella-sky dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-bella-orange">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-bella-sky dark:bg-bella-sky/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">500+</div>
              <p className="text-lg opacity-90">Team Members</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">24</div>
              <p className="text-lg opacity-90">Maryland Counties</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">10K+</div>
              <p className="text-lg opacity-90">Seniors Served</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">20+</div>
              <p className="text-lg opacity-90">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-bella-sky dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              { q: 'What certifications are required?', a: 'Requirements vary by position. Most roles require state licensure or certification relevant to the position. Check individual job postings for specific requirements.' },
              { q: 'Do you offer flexible scheduling?', a: 'Yes! We offer flexible, part-time, full-time, and PRN positions to fit your lifestyle and career goals.' },
              { q: 'Is training provided?', a: 'Absolutely. All new hires receive comprehensive orientation and ongoing professional development opportunities.' },
              { q: 'How long is the hiring process?', a: 'Most candidates hear back within 48 hours of application. Final hiring typically takes 1-2 weeks depending on the position.' },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white dark:bg-bella-sky/40 p-6 rounded-lg border border-bella-orange/20 cursor-pointer hover:border-bella-orange transition group">
                <summary className="font-bold text-bella-sky dark:text-white flex items-center gap-3">
                  <span className="group-open:rotate-180 transition">▼</span>
                  {faq.q}
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4 ml-6">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-bella-sky to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Don't See Your Dream Job?</h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for talented healthcare professionals. Send us your resume and tell us how you'd like to contribute to Bella Healthcare.
          </p>
          <Link href="/contact" className="inline-block bg-white hover:bg-white/90 text-bella-sky font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
            Send Your Resume
          </Link>
        </div>
      </section>
    </div>
  );
}
