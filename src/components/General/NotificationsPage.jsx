import React from 'react';
import Sidebar from '../Dashboard/Sidemenu';
import Header from '../Dashboard/Header';


const Notifications = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h2>
          <ul className="space-y-4">
            {/* Example notification items */}
            <li className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-green-800 font-semibold">Your payment has been processed successfully.</p>
              <p className="text-gray-600 text-sm">2 hours ago</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-green-800 font-semibold">Your certificate is ready for download.</p>
              <p className="text-gray-600 text-sm">1 day ago</p>
            </li>
            {/* Add more notification items */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
