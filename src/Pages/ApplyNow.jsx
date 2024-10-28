import React from 'react';
import { motion } from 'framer-motion';

export default function ApplyNow() {
  return (
    <section className="bg-gray-50 py-16 flex flex-col items-center">
      <div className="container mx-auto px-6 lg:px-12 bg-white p-10 rounded-lg shadow-md">
        
        {/* Page Header */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Apply for Lagos State E-Certificate
        </motion.h2>

        {/* Instructions Section */}
        <div className="mb-8 text-center text-gray-600">
          <p>Please fill out the application form below with accurate details. All fields marked with an asterisk (*) are required.</p>
        </div>

        {/* Application Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              id="fullName"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-gray-700 font-semibold mb-2">Date of Birth *</label>
            <input
              type="date"
              id="dob"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              required
            />
          </div>

          {/* ID Number */}
          <div>
            <label htmlFor="idNumber" className="block text-gray-700 font-semibold mb-2">National ID Number *</label>
            <input
              type="text"
              id="idNumber"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              placeholder="Enter your ID number"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Residential Address *</label>
            <input
              type="text"
              id="address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              placeholder="Enter your residential address"
              required
            />
          </div>

          {/* Document Upload */}
          <div className="md:col-span-2">
            <label htmlFor="upload" className="block text-gray-700 font-semibold mb-2">Upload Identification Document *</label>
            <input
              type="file"
              id="upload"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              required
            />
            <p className="text-gray-500 text-sm mt-2">Accepted formats: JPG, PNG, PDF (Max size: 2MB)</p>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 mt-6 bg-green-700 text-white font-semibold py-3 rounded-md hover:bg-green-800 transition-colors"
            type="submit"
          >
            Submit Application
          </motion.button>
        </form>
      </div>
    </section>
  );
}
