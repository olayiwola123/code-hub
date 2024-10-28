import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Sidebar from '../Dashboard/Sidemenu';  // Importing Sidebar
import Header from '../Dashboard/Header';    // Importing Header

const SchedulePage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="flex-1 p-8 bg-gray-100">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Training Schedule</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event item */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Leadership Training</h3>
                <p className="text-sm text-gray-500 mb-2">Date: October 10, 2024</p>
                <FaCalendarAlt className="text-purple-600 text-4xl" />
              </div>

              {/* Add more event items here as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
