import React, { useState } from 'react';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import logo from '../../assets/lagos.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 py-4 sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Lagos State Logo" className="h-20" />
          <h1 className="text-xl font-bold text-gray-800">Lagos State E-Certificate Portal</h1>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center  text-gray-700">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="/apply" className="hover:text-blue-600 transition-colors">Apply for Certificate</a>
          <a href="/verify" className="hover:text-blue-600 transition-colors">Verify Certificate</a>
          <a href="/login" className="hover:text-blue-600 transition-colors">Login</a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <FaBell className="text-2xl text-gray-700 cursor-pointer hidden md:block" />
          
          {/* User Icon with Dropdown */}
          <div className="relative hidden md:block">
            <FaUserCircle 
              className="text-2xl text-gray-700 cursor-pointer" 
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-lg py-2">
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>

          {/* Apply Button */}
          <a href="/apply" className="bg-green-600 text-white py-2 px-6 rounded-md font-semibold text-lg hidden md:block hover:bg-green-700 transition">
            Apply Now
          </a>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt4 className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-700 py-2 px-4 border-t border-gray-200">
          <a href="/" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Home</a>
          <a href="/apply" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Apply for Certificate</a>
          <a href="/verify" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Verify Certificate</a>
          <a href="/support" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Support</a>
          <a href="/profile" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Profile</a>
          <a href="/settings" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Settings</a>
          <a href="/logout" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
