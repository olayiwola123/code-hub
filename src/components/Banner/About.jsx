import React from 'react';
import { motion } from 'framer-motion';
import HeroPng1 from "../../assets/abb.jpg";

export default function About() {

  const doorVariant = {
    hidden: { width: '100%', opacity: 1 },
    visible: {
      width: 0,
      opacity: 1,
      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8 md:flex-row gap-12">
      
     
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3.2, ease: 'easeOut' }}
        className="md:w-1/2 w-full flex items-center justify-center mb-8 md:mb-0 h-48 "
      >
        <img
          src={HeroPng1}
          alt="Certificate Portal"
          className="rounded-xl shadow-lg h-96"
        />
      </motion.div>

    
      <div className="relative md:w-1/2 w-full flex items-center justify-center h-96 rounded-xl bg-white p-6 md:p-12 shadow-md overflow-hidden">
        
        {/* Sliding Animation Background */}
        <motion.div
          className="absolute bg-blue-700 h-full top-0 left-0 z-10"
          variants={doorVariant}
          initial="hidden"
          animate="visible"
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="z-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Certificate Portal</h2>
          <p className="text-lg text-gray-600 mb-6">
            The Lagos State E-Certificate Portal is your trusted platform for applying, verifying, and accessing 
            official certificates. Our mission is to provide secure, convenient, and transparent access to government-issued documentation.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors"
          >
            Discover Our Services
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
