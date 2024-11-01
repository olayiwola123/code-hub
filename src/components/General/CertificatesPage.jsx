import React from 'react';
import Sidebar from '../Dashboard/Sidemenu';
import Header from '../Dashboard/Header';
import { FaBusinessTime, FaCertificate, FaHeart, FaHome, FaRegClock, FaUserCheck } from 'react-icons/fa';

function Certificate() {
  const certificates = [
    {
      name: 'Birth Certificate',
      description: 'Official record of birth for residents.',
      icon: <FaCertificate className="text-3xl text-gray-700 mb-2" />
    },
    {
      name: 'Marriage Certificate',
      description: 'Legal certificate for marriages in Lagos State.',
      icon: <FaHeart className="text-3xl text-gray-700 mb-2" />
    },
    {
      name: 'Business Registration',
      description: 'Certificate for registered businesses.',
      icon: <FaBusinessTime className="text-3xl text-gray-700 mb-2" />
    },
    {
      name: 'Indigene Certificate',
      description: 'Proof of Lagos State residency and indigene status.',
      icon: <FaUserCheck className="text-3xl text-gray-700 mb-2" />
    },
    {
      name: 'Death Certificate',
      description: 'Official record of death for residents.',
      icon: <FaRegClock className="text-3xl text-gray-700 mb-2" />
    },
    {
      name: 'Property Ownership Certificate',
      description: 'Certificate for recognized property owners in the state.',
      icon: <FaHome className="text-3xl text-gray-700 mb-2" />
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Lagos State E-Certificate Portal</h1>
          <p className="text-center mb-6 text-gray-600">
            Select the type of certificate you need and apply online.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {cert.icon}
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{cert.name}</h2>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <a href='/apply' className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
