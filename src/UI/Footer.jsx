import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white font-montserrat pt-6 text-gray-800">
      <div className="max-w-7xl mx-auto py-10 px-6 flex flex-col md:flex-row md:justify-between gap-y-12">
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-3xl font-semibold text-[#FF4F5A] italic">Sa Majesté</h1>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-sm">
            Building the safe minspace for representation of women's views without drawbacks
          </p>
        </div>

        <div className="flex-1 min-w-[200px] md:items-end md:text-right flex flex-col">
          <h3 className="flex items-center justify-start md:justify-end gap-2 font-semibold text-gray-800">
            <span className="text-[#FF4F5A]">
              <ChevronRight size={16} fill="currentColor" />
            </span>
            Discover
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><Link to="/magazine" className="hover:text-[#FF4F5A]">Magazine</Link></li>
            <li><Link to="/about" className="hover:text-[#FF4F5A]">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF4F5A]">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-[#FF4F5A] text-white text-xs py-4 px-6 text-center">
        <div>@ SAMEJESTÉ BLOG 2025. ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  );
}

export default Footer;
