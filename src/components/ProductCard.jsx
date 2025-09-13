import React from "react";

const ProductCard = ({ image, title, description, price, tag, delay }) => {
  const originalPrice = Math.round(price / 0.7); // Calculate 30% original price
  const phoneNumber = "7738462358";
  const productImageURL = window.location.origin + image;
  const whatsupMessage = `Hi I'm interested in buying ${title} for ₹${price}. It looks amazing! Can you tell more? ${productImageURL}`;
  const whatsupLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsupMessage
  )}`;

  return (
    <div
      className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-none"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Discount badge */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        30% OFF
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover object-center"
      />
      <div className="p-2">
        {tag && (
          <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {tag}
          </span>
        )}
        <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>

        {/* Price Display */}
        <div className="mt-2 mb-1">
          <span className="text-gray-500 line-through mr-2 text-sm">
            ₹ {originalPrice}.00
          </span>
          <span className="text-black font-bold text-lg">₹ {price}.00</span>
        </div>

        {/* Buy Now Button */}
        <a
          href={whatsupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 w-full inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-2xl hover:shadow-lg transition text-center"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
