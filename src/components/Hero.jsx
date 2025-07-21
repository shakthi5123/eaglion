import React from 'react';
import heroImage from '../assets/hero-image2.jpeg'; 

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-24 mb-30">
      <div className="max-w-7xl mx-auto px-6 text-center mt-15">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl max-w-3xl mx-auto font-extrabold text-gray-900 mb-4">
          DISCOVER THE HOTTEST TRENDS OF THE SEASON
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Dive into our curated collection of viral products that are taking the internet by storm. Shop now and stay ahead of the trends!
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          <a
            href="#products"
            className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-cyan-500 to-purple-600 shadow-md hover:shadow-lg transition"
            data-aos='fade-up' data-aos-delay='300'
          >
            Shop
          </a>
          <a
            href="#about"
            className="px-6 py-2 rounded-full border border-gray-400 text-gray-700 font-medium hover:bg-gray-100 transition"
            data-aos='fade-up' data-aos-delay='400'
          >
            Learn More
          </a>
        </div>

        {/* Hero Image */}
        <div className="max-w-7xl mx-auto" data-aos='zoom-in'>
          <img
            src={heroImage}
            alt="Trendy product showcase"
            className="w-full max-h-[500px] rounded-2xl object-center object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;