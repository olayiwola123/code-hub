import React from 'react'

import {
    FaGraduationCap,
    FaMoneyBillWave,
    FaBook,
    FaCalendarAlt,
    FaSignOutAlt,
    FaSuperpowers,
  } from "react-icons/fa";
  import profile from './../../assets/olatech.jpg'
  import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className="h-screen bg-green-600 w-1/5 p-6 text-white flex flex-col justify-between">
     
      <div className="flex flex-col items-center space-y-6">
        <div className="text-white font-bold text-2xl">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-24 h-24
            "
          />
        </div>

        <nav className="flex flex-col space-y-8 pt-12">
          <Link
            to={'/dashboard'}
            className="flex items-center text-lg hover:text-purple-300"
          >
            <FaGraduationCap className="mr-2" /> Dashboard
          </Link>
          <Link
            to={'/payment-page'}
            className="flex items-center text-lg hover:text-purple-300"
          >
            <FaMoneyBillWave className="mr-2" /> Payments
          </Link>
          <Link
            to={'/certificate'}
            className="flex items-center text-lg hover:text-purple-300"
          >
            <FaBook className="mr-2" /> Certificates
          </Link>
          <Link
            to={'/schedule'}
            className="flex items-center text-lg hover:text-purple-300"
          >
            <FaCalendarAlt className="mr-2" /> Schedule
          </Link>
          <a
            href="#"
            className="flex items-center text-lg hover:text-purple-300"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </a>
        </nav>
      </div>

      <div className="bg-primary p-4 rounded-lg shadow-lg mt-8 flex flex-col items-center text-center">
        <FaSuperpowers className="text-white text-4xl mb-4" />
        <h2 className="text-white font-bold text-lg mb-2">Support</h2>
        <p className="text-white mb-4 text-sm">
          Need help? Reach out to our support team.
        </p>
      <Link to={'/support'}>
      <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
          Contact Support
        </button>
      </Link>
      </div>
    </div>
  )
}
