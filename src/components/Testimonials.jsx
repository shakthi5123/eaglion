import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';

const testimonials = [
  {
    name: 'Shakthivel',
    title: 'Customer',
    quote:
      'Great quality and fast service!.',
  },
  {
    name: 'Taneesh Beloshe',
    title: 'Business Owner',
    quote:
      'Stylish, unique, and affordable — the perfect combo.',
  },
  {
    name: 'Harshad Shingan',
    title: 'Student',
    quote:
      'I’m always looking for cool, smart gadgets — and this site delivers. Innovative finds and great service.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Real feedback from our happy partners who trust our products to grow their business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md px-5 py-6 flex flex-col items-center text-center hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <FaQuoteLeft className="text-2xl text-cyan-500 mb-4" />
              <p className="text-gray-600 text-sm italic mb-4">"{testimonial.quote}"</p>
              
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <IoMdContact className="text-6xl text-gray-600" />
              </div>

              <h4 className="text-base font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-xs text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;