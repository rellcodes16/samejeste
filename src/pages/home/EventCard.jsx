import React from 'react';
import Countdown from './Countdown';
import { motion } from 'framer-motion';

export default function EventCard({ event }) {
  return (
    <motion.div
      className="relative bg-gradient-to-r from-pink-600 to-purple-700 text-white rounded-3xl py-6 md:p-14 flex flex-col md:flex-row items-center gap-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md">
        <p className="text-sm uppercase text-white/70 mb-2">The BIGGEST CONFERENCE</p>
        <h3 className="text-lg md:text-2xl font-bold leading-tight">{event.title}</h3>
        <div className="mt-4">
          <div className="text-xl font-bold">
            {new Date(event.date).toLocaleDateString(undefined, {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </div>
          <div className="text-sm">
            {event.venue} <span className="italic">{event.format}</span>
          </div>
        </div>
        <div className="mt-4">
          <Countdown targetDate={event.date} />
        </div>
      </div>

      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full object-cover rounded-xl"
        />
        <motion.button
          className="mt-36 ml-105 bg-white text-[#FF4F5A] font-semibold px-4 py-3 rounded-full hover:bg-pink-100 transition self-end md:self-start"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register now
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
