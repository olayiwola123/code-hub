import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10">
      <div className="container mx-auto px-12 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
      
        <div>
          <h3 className="text-xl font-semibold mb-4">About Lagos State E-Certificate Portal</h3>
          <p>
            Providing secure and efficient access to government-issued certificates for citizens and organizations in Lagos State.
          </p>
        </div>
     
     
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:text-gray-200">Home</a></li>
            <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-200">Our Services</a></li>
            <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-2">
            <li>Phone: +234 800 123 4567</li>
            <li>Email: support@lagosecertificate.gov.ng</li>
            <li>Office: 123 Lagos State Secretariat, Alausa, Ikeja</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-8">
        <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-white transition">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-white transition">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-white transition">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition">
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-400 pt-6 text-center">
        <p>&copy; {new Date().getFullYear()} Lagos State Government. All rights reserved.</p>
      </div>
    </footer>
  );
}
