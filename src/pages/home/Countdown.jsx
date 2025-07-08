import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateTime = () => {
      const diff = new Date(targetDate) - new Date();
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div
        className="flex gap-4 text-gray-800 bg-white px-6 py-2 rounded-xl shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
    >
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <div key={unit} className="text-center">
                <div className="text-2xl font-bold">{timeLeft[unit] ?? '--'}</div>
                <div className="text-xs uppercase text-gray-500">{unit}</div>
            </div>
        ))}
    </motion.div>

  );
}
