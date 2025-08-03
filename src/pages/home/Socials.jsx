import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { ArrowBigRight, InstagramIcon } from 'lucide-react';

function Socials() {
  return (
    <section className="px-6 md:px-14 py-12 mx-auto bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <img src='/insta.png' alt='insta' className="w-[260px] h-[260px] "/>

        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            What You’ll Discover on Our Instagram
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            Our Instagram page is a vibrant visual archive that honors the lives and legacies of
            <strong> Notable Women</strong> from history and today. We amplify voices in the movement
            for <strong>Feminism</strong>, advocate for <strong>Women’s Rights</strong>, and
            spotlight efforts towards the <strong>empowerment of the Girl Child</strong>.
            <br /><br />
            You’ll find excerpts from thought-provoking visual essays,
            and curated highlights from community events and features.
            It's not just a feed — it’s a growing narrative of courage, leadership, and transformation.
          </p>

<a
  href="https://instagram.com/yourprofile"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 border border-[#FF4F5A] text-[#FF4F5A] px-5 py-2 rounded-full text-sm font-medium transition hover:bg-[#FF4F5A] hover:text-white group"
>
  Follow
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
    </section>
  );
}

export default Socials;
