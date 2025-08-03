import React from 'react'
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaPhoneAlt
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Brand Info */}
        <div data-aos='fade-right'>
          <h2 className="text-2xl font-bold text-white mb-4">EAGLION</h2>
          <p className="text-sm text-gray-400">
            Bringing premium experiences to your doorstep. Quality. Speed. Trust.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div data-aos='fade-right'>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Follow Us & Chat */}
        <div className='' data-aos='fade-left'>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-5 text-xl mb-4">
            <a href="https://wa.me/7738619990" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/Eaglion_23 " target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
          </div>

          {/* WhatsApp Chat Prompt */}
          <div>
          <h2 className="text-xl font-semibold text-white mb-4">Let’s Talk!</h2>
          <p className="text-sm text-gray-400 mb-4">
            Got questions or need help choosing a product? We’re just a message away.
          </p>
          <a
            href="https://wa.me/7738619990"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-[#101828] text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-lg" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="flex items-center text-sm text-gray-400  space-x-2">
            <FaPhoneAlt className="text-cyan-400" />
            <span>7738619990 / 9321819634</span>
          </div>
        </div>
      </div>

      {/* Bottom Credit */}
      <div 	data-aos='zoom-in' className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        Designed & Developed by{' '}
        <a
          href="https://wa.me/7977602483"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Shakthi
        </a>
      </div>
    </footer>
  )
}

export default Footer