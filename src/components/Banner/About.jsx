import React from 'react';
import { motion } from 'framer-motion';
import HeroPng1 from "../../assets/hero.png";

export default function About() {

  const doorVariant = {
    hidden: { width: '100%', opacity: 1 }, 
    visible: {
      width: 0, 
      opacity: 1, 
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8 md:flex-row">
      
      <motion.div
        initial={{ x: -200, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="md:w-1/2 w-full flex items-center justify-center mb-8 md:mb-0"
      >
        <img
          src={HeroPng1} 
          alt="CodeHub"
          className=" rounded-xl "
        />
      </motion.div>

      
      <div className="relative md:w-1/2 w-full flex items-center justify-center h-96 b rounded-xl  p-6 md:p-12 overflow-hidden">
   
        <motion.div
          className="absolute bg-indigo-700 h-full top-0 left-0 z-10"
          variants={doorVariant}
          initial="hidden"
          animate="visible"
        />

    
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="z-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About CodeHub</h2>
          <p className="text-lg text-gray-600 mb-6">
            CodeHub is your gateway to mastering modern web technologies. We help you learn, collaborate, and build 
            with hands-on projects and an amazing community of developers.
          </p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
