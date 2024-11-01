import React from 'react';
import { motion } from 'framer-motion';

export default function VerifyCertificate() {
  return (
    <section className="bg-gray-50 py-16 flex flex-col items-center">
      <div className="container mx-auto px-6 lg:px-12 bg-white p-10 rounded-lg shadow-md">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Verify a Certificate
        </motion.h2>

        <div className="mb-8 text-center text-gray-600">
          <p>Enter the unique certificate number below to verify its authenticity. Only valid certificates issued by Lagos State will be confirmed.</p>
        </div>

   
        <form className="flex flex-col items-center gap-6">
          
          <div className="w-full md:w-2/3">
            <label htmlFor="certificateNumber" className="block text-gray-700 font-semibold mb-2">Certificate Number *</label>
            <input
              type="text"
              id="certificateNumber"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              placeholder="Enter certificate number"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-1/2 mt-4 bg-green-700 text-white font-semibold py-3 rounded-md hover:bg-green-800 transition-colors"
            type="submit"
          >
            Verify Certificate
          </motion.button>
        </form>

        <div className="mt-10 p-6 text-center bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
          <p className="text-gray-700">
            Enter a certificate number to see verification results here.
          </p>
        </div>
      </div>
    </section>
  );
}
