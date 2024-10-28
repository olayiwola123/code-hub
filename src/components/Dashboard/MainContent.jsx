
import React from 'react';

const MainContent = () => {
  return (
    <div className="p-6 bg-gray-100 w-full">
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-purple-800">Welcome back, Olatech!</h1>
        <p>Access your certificates and stay updated on your portal.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl text-gray-600">Certificates Available</h2>
          <p className="text-2xl text-purple-800 font-bold">5</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl text-gray-600">Pending Requests</h2>
          <p className="text-2xl text-purple-800 font-bold">2</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl text-gray-600">Approved Requests</h2>
          <p className="text-2xl text-purple-800 font-bold">3</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Download Certificates</h2>
          <p className="text-gray-500">Birth Certificate</p>
          <button className="mt-4 p-2 bg-purple-600 text-white rounded-md">Download</button>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Download Certificates</h2>
          <p className="text-gray-500">Marriage Certificate</p>
          <button className="mt-4 p-2 bg-purple-600 text-white rounded-md">Download</button>
        </div>
      </div>

     
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Reference Number</h2>
          <p className="text-gray-500">Enter your reference number to track your request status.</p>
          <input
            type="text"
            placeholder="Enter Reference Number"
            className="mt-4 p-2 border rounded-md w-full"
          />
          <button className="mt-4 p-2 bg-purple-600 text-white rounded-md w-full">
            Track Certificate
          </button>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Important Notice</h2>
          <p className="text-red-500">Please note that pending requests may take up to 7 business days to process.</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
