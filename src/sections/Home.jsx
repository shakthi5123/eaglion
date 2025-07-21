import React from 'react'
import  Navigation from '../components/Navigation.jsx'
import Hero from '../components/Hero.jsx'
import Products from './Products.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Features from '../components/Features.jsx'
import { FaWhatsapp } from 'react-icons/fa';
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
  <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7738619990" // ← Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50 bg-green-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Main Content */}
      <main className="smooth-scroll overflow-x-hidden">
        <Navigation />
        <Hero />
        <Features />
        <Products />
        <About />
        <Contact />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}

export default Home