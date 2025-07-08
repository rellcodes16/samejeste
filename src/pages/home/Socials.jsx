import React from 'react';
import { motion } from 'framer-motion';
import { AiFillYoutube } from 'react-icons/ai';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  {
    id: 1,
    name: 'YouTube',
    description: 'Weekly updates from conferences, events and interviews',
    icon: <AiFillYoutube className="text-9xl text-red-500" />,
    buttonText: 'Subscribe',
    bgColor: 'bg-red-100',
  },
  {
    id: 2,
    name: 'Instagram',
    description: 'Weekly updates from conferences, events and interviews',
    icon: <FaInstagram className="text-9xl text-pink-500" />,
    buttonText: 'Follow',
    bgColor: 'bg-gradient-to-tr from-purple-300 via-pink-300 to-yellow-200',
  },
  {
    id: 3,
    name: 'Facebook',
    description: 'Weekly updates from conferences, events and interviews',
    icon: <FaFacebookF className="text-9xl text-blue-600" />,
    buttonText: 'Follow',
    bgColor: 'bg-blue-200',
  },
  {
    id: 4,
    name: 'X (Twitter)',
    description: 'Weekly updates from conferences, events and interviews',
    icon: <FaXTwitter className="text-9xl text-black" />,
    buttonText: 'Follow',
    bgColor: 'bg-gray-300',
  },
];

function Socials() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold mr-4 whitespace-nowrap">Our Socials</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {socials.map((social) => (
          <div key={social.id} className="flex flex-col">
            <motion.div
              className={`h-44 flex items-center justify-center min-w-[300px] rounded-2xl ${social.bgColor}`}
              whileHover={{ scale: 1.05 }}
            >
              {social.icon}
            </motion.div>

            <p className="text-sm mt-4 mb-4 px-2">{social.description}</p>

            <button className="border w-[70%] border-[#FF4F5A] text-[#FF4F5A] px-4 py-2 rounded-full hover:bg-red-50 text-sm flex items-center gap-1">
              {social.buttonText}
              <span>➜</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Socials;
