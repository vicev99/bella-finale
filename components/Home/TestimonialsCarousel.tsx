'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      relation: 'Daughter',
      text: 'Bella Healthcare gave us peace of mind. Mom looks forward to her caregiver\'s visits, and we can see how much she\'s thriving.',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      relation: 'Son',
      text: 'Professional, compassionate, and reliable. The caregivers are like family. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Elizabeth Chen',
      relation: 'Wife',
      text: 'After Robert\'s surgery, the support was exactly what we needed. Outstanding attention to detail and genuine care.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-blue-900 mb-4">
            What Families Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from families we've had the privilege to serve
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-blue-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.relation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
