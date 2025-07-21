import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-48 mb-32 px-6 max-w-5xl mx-auto text-center"
      data-aos="fade-up"
      data-aos-delay='300'
    >
      <h2 className="text-sm text-gray-500 font-semibold tracking-widest uppercase mb-3">
        About Us
      </h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
        We're Not Just a Store — We're a Trend Hub
      </h3>
      <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
        Eaglion is a modern, one-page showcase built for viral, trendy products that are buzzing across the internet. 
        We don't sell products directly — instead, we provide a stunning online presence to promote and advertise what's trending. 
        Our goal is to attract customers, spark interest, and make it easy for them to contact you for more.
      </p>
      <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto mt-4">
        Whether it's the latest gadget, a fashion must-have, or a viral sensation, if it’s trending, you'll find it here.
        Our platform is built to grow your brand’s presence, fast.
      </p>
    </section>
  );
};

export default About;