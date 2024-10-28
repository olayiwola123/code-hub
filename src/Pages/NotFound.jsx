import React from 'react';
import { FaRegSmileWink } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="bg-gray-50 h-screen flex flex-col items-center justify-center text-center p-6">
      
      {/* Winking Icon */}
      <motion.div
        className="text-green-600 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <FaRegSmileWink size={80} />
      </motion.div>
      
      {/* Main Message */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Oops! Page Not Found
      </motion.h1>
      
      {/* Sub Message */}
      <motion.p
        className="text-lg md:text-xl text-gray-600 mb-8 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Looks like Olatech hasn't created this page yet. But don't worry, it’s coming soon!
      </motion.p>

      {/* Go Back Button */}
      <motion.a
        href="/"
        className="bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-green-800 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Back to Home
      </motion.a>

      {/* Decorative Elements */}
      <motion.div
        className="mt-10 text-green-600"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 5, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <p className="text-gray-500 mt-6">"Don’t worry, great things take time! 🚧"</p>
      </motion.div>
    </section>
  );
}
