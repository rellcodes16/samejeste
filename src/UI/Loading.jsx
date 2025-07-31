import React from 'react';
import { motion } from 'framer-motion';
import '../typewriter.css'; 

function LoadingScreen() {
  return (
    <div className="flex items-center font-permanent-marker justify-center h-screen text-[#FF4F5A] bg-white">
      <motion.h1
        className="text-3xl md:text-5xl font-bold typewriter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Sa Majesté
      </motion.h1>
    </div>
  );
}

export default LoadingScreen;
