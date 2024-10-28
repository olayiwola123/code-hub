// import React from 'react';
// import { FaDownload } from 'react-icons/fa';

// const CertificatesPage = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
//         <h2 className="text-3xl font-bold mb-8 text-center">Your Certificates</h2>

//         <ul className="space-y-6">
//           <li className="bg-gray-50 p-4 rounded-lg shadow-lg flex justify-between items-center">
//             <div>
//               <h3 className="text-lg font-semibold">Certificate of Completion</h3>
//               <p className="text-sm text-gray-500">Issued: September 20, 2024</p>
//             </div>
//             <button className="flex items-center space-x-2 text-green-600">
//               <FaDownload />
//               <span>Download</span>
//             </button>
//           </li>
          
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CertificatesPage;
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Sidebar from '../Dashboard/Sidemenu';  // Importing Sidebar
import Header from '../Dashboard/Header';    // Importing Header

const CertificatesPage = () => {
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
            <h2 className="text-3xl font-bold mb-8 text-center">Your Certificates</h2>

            <ul className="space-y-6">
              <li className="bg-gray-50 p-4 rounded-lg shadow-lg flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Certificate of Completion</h3>
                  <p className="text-sm text-gray-500">Issued: September 20, 2024</p>
                </div>
                <button className="flex items-center space-x-2 text-green-600">
                  <FaDownload />
                  <span>Download</span>
                </button>
              </li>
              
              {/* Add more certificates here as needed */}
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
