import React from 'react';

const ProductCard = ({ image, title, description, tag, delay }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-none" data-aos="fade-up" data-aos-delay={delay} >
      <img
        src={image}
        alt={title}
        className="w-full h-58 object-cover object-center" // 👈 Reduced height here
      />
      <div className="p-4">
        {tag && (
          <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {tag}
          </span>
        )}
        <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3> {/* 👈 Slightly smaller text */}
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;