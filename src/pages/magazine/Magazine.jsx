import React from 'react';
import { motion } from 'framer-motion';
import { ArrowBigRight } from 'lucide-react';

function Magazine() {
  return (
    <section className="px-4 md:px-20 mt-15 py-16 bg-white font-montserrat">
      <div className="space-y-10 md:max-w-[90%] lg:max-w-7xl mx-auto">
        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Right: Image FIRST on mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="https://image.isu.pub/250511065925-760471e10524f30290de8186bc93f64f/jpg/page_1_thumb_large.jpg"
              alt="Sa Majesté Magazine"
              className="rounded-2xl w-full h-auto max-h-[500px] object-contain"
            />
          </div>

          {/* Left: Text SECOND on mobile */}
          <div className="w-full md:w-1/2 space-y-5 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] font-pt">
              Sa Majesté Magazine
            </h2>

            <p className="text-gray-700 text-base md:text-[15px] leading-relaxed">
              <strong>Sa Majesté Magazine</strong> is a space for bold thought, cultural celebration, and
              intellectual empowerment. Born in Cameroon, it speaks to women and dreamers across the world — 
              those who refuse to be defined by limits.
            </p>

            <p className="text-gray-700 text-base md:text-[15px] leading-relaxed">
              Each edition offers a curated blend of reflective write-ups, vivid essays, and perspective-shifting
              articles. We celebrate identity, purpose, heritage, and transformation through thoughtful words
              and timeless storytelling.
            </p>

            <p className="text-gray-500 text-sm italic">
              Explore our magazine collection for content that uplifts, educates, and inspires.
            </p>

            {/* Button */}
            <a
              href="https://issuu.com/samajestemagazine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#FF4F5A] text-[#FF4F5A] px-5 py-2 rounded-full text-sm font-medium transition hover:bg-[#FF4F5A] hover:text-white group"
            >
              Explore Magazine
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block"
              >
                <ArrowBigRight className="w-5 h-5" />
              </motion.span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Magazine;
