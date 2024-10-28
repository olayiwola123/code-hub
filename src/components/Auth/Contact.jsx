import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-gray-50 py-8 flex flex-col items-center">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Contact Header */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        
        {/* Main Contact Layout */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          
          {/* Contact Information Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <FaPhoneAlt className="text-blue-700 text-2xl mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p>+234 800 123 4567</p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <FaEnvelope className="text-blue-700 text-2xl mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p>support@lagosecertificate.gov.ng</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-700 text-2xl mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Office</h3>
                <p>123 Lagos State Secretariat, Alausa, Ikeja</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form className="grid grid-cols-1 gap-6">
              <div className="relative">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <FaUser className="absolute top-12 left-3 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <FaEnvelope className="absolute top-12 left-3 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <FaPaperPlane className="absolute top-12 left-3 text-gray-400" />
                <textarea
                  id="message"
                  rows="5"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
                  placeholder="Type your message here"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 bg-green-700 text-white font-semibold py-3 rounded-md hover:bg-green-800 transition-colors"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
