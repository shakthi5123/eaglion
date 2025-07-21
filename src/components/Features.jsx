import React from 'react';
import { Tag, Users, Eye } from 'lucide-react'; // Icons from lucide-react

const Features = () => {
  return (
    <section id="features" className="bg-white mb-20" >
      <div className="max-w-7xl mx-auto px-6 text-center" data-aos='zoom-in'>
        <p className="text-sm font-bold tracking-wide text-gray-500 uppercase mb-2">Features</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Discover What Makes Eaglion Unique
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          Eaglion showcases trending products to captivate your audience. We help you stay ahead with a bold online presence, without handling orders — just pure brand elevation and customer connection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center" data-aos='left'  >
            <Tag className="h-10 w-10 mb-4 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Trend-Driven Showcases
            </h3>
            <p className="text-gray-600 max-w-xs">
              We promote only what’s hot. Our products change with the trends, keeping your store fresh and exciting.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center" >
            <Eye className="h-10 w-10 mb-4 text-cyan-600" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Visual-First Branding
            </h3>
            <p className="text-gray-600 max-w-xs">
              Our single-page layout is built to impress. Every section is designed to attract and engage visitors instantly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center" data-aos='right' >
            <Users className="h-10 w-10 mb-4 text-rose-600" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Customer Connection
            </h3>
            <p className="text-gray-600 max-w-xs">
              No checkout, no cart. Customers contact you directly — making it personal, simple, and trustworthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;