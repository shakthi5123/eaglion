import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 sticky top-0 z-50 shadow-md bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full px-6 py-2">
        {/* Logo */}

        <picture>
          <source srcSet={logo} type="image/webp" />
          <img
            src={logo}
            alt="logo"
            className="w-24 flex-shrink-0"
            loading="lazy"
          />
        </picture>

        {/* <div>
          <img src={logo} alt="logo" className="w-24 flex-shrink-0" />
        </div> */}

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          <li
            className="hover:text-red-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="#home">Home</a>
          </li>
          <li
            className="hover:text-red-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="#products">Explore Products</a>
          </li>
          <li
            className="hover:text-red-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a href="#about">About</a>
          </li>
          <li
            className="hover:text-red-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Catalogue Button (Desktop Only) */}
        <a
          href="https://wa.me/9321819634"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-delay="500"
          className="hidden md:inline-block cursor-pointer px-3 py-2 border rounded-xl text-white font-medium bg-gradient-to-r from-cyan-500 to-purple-600 shadow-md hover:shadow-lg transition"
        >
          ORDER NOW
        </a>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center px-5 pb-4 space-y-4">
          <a
            href="#home"
            className="block hover:text-red-500 border-b border-gray-800"
          >
            Home
          </a>
          <a
            href="#products"
            className="block hover:text-red-500 border-b border-gray-800"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="block hover:text-red-500 border-b border-gray-800"
          >
            About
          </a>
          <a
            href="#contact"
            className="block hover:text-red-500 border-b border-gray-800"
          >
            Contact
          </a>
          <a
            href="https://wa.me/7738619990"
            target="_blank"
            rel="noreferrer"
            className="block mt-2 px-3 py-2 border rounded-xl text-white font-medium bg-gradient-to-r from-cyan-500 to-purple-600 shadow-md hover:shadow-lg transition"
          >
            ORDER NOW
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
