import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xanbwqyk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => {
            window.location.reload(); // Refresh the page after 3 seconds
          }, 5000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-gray-50">
      <div className="flex justify-center items-center px-6">
        <div
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            We'd love to hear from you!
          </p>

          {submitted ? (
            <p className="text-green-600 text-center font-medium">
              ✅ Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your Phone Number"
                pattern="[0-9]{10}" // accepts 10-digit numbers
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
