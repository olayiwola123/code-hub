import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';
import Sidebar from '../Dashboard/Sidemenu';
import Header from '../Dashboard/Header';   

const SupportPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
     
        <Header />

        {/* Page Content */}
        <div className="flex-1 p-12 bg-gray-100">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-full mx-auto flex gap-8">

 
            <div className="w-2/3">
              <h2 className="text-3xl font-bold mb-8 text-center">Customer Support</h2>

              <div className="grid grid-cols-1 gap-8">
              
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-green-600">Contact Information</h3>
                  <div className="flex items-center mb-4">
                    <FaEnvelope className="text-green-600 text-2xl mr-4" />
                    <span>support@example.com</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <FaPhoneAlt className="text-green-600 text-2xl mr-4" />
                    <span>+123-456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-green-600 text-2xl mr-4" />
                    <span>123 Support St, Help City, Olatech</span>
                  </div>
                </div>

                {/* Support Form */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-green-600">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="email">Your Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        placeholder="Enter your message"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Section: FAQs */}
            <div className="w-1/3">
              <h3 className="text-lg font-semibold mb-4 text-green-600 text-center">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {/* FAQ item */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FaQuestionCircle className="text-green-600 text-xl mb-2" />
                  <h4 className="text-md font-semibold">How to reset my password?</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    You can reset your password by going to the settings page and clicking "Forgot Password".
                  </p>
                </div>
                {/* FAQ item */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FaQuestionCircle className="text-green-600 text-xl mb-2" />
                  <h4 className="text-md font-semibold">How to contact support?</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    You can contact us directly through this page or call our hotline available 24/7.
                  </p>
                </div>
                {/* FAQ item */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FaQuestionCircle className="text-green-600 text-xl mb-2" />
                  <h4 className="text-md font-semibold">Where is my order?</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    You can track your order using the tracking number sent to your email after purchase.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
// import React from 'react';
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';
// import Sidebar from '../Dashboard/Sidemenu'; // Sidebar
// import Header from '../Dashboard/Header';   // Header

// const SupportPage = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="h-screen">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <Header />

//         {/* Page Content */}
//         <div className="flex-1 p-12 bg-gray-100">
//           <div className="bg-white p-8 rounded-xl shadow-lg max-w-full mx-auto flex gap-8">

//             {/* Left Section: Contact Info and Form */}
//             <div className="w-2/3">
//               <h2 className="text-3xl font-bold mb-8 text-center">Customer Support</h2>

//               <div className="grid grid-cols-1 gap-8">
//                 {/* Contact Information Section */}
//                 <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//                   <h3 className="text-lg font-semibold mb-4 text-green-600">Contact Information</h3>
//                   <div className="flex items-center mb-4">
//                     <FaEnvelope className="text-green-600 text-2xl mr-4" />
//                     <span>support@example.com</span>
//                   </div>
//                   <div className="flex items-center mb-4">
//                     <FaPhoneAlt className="text-green-600 text-2xl mr-4" />
//                     <span>+123-456-7890</span>
//                   </div>
//                   <div className="flex items-center">
//                     <FaMapMarkerAlt className="text-green-600 text-2xl mr-4" />
//                     <span>123 Support St, Help City, Olatech</span>
//                   </div>
//                 </div>

//                 {/* Support Form */}
//                 <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//                   <h3 className="text-lg font-semibold mb-4 text-green-600">Send Us a Message</h3>
//                   <form className="space-y-4">
//                     <div>
//                       <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
//                       <input
//                         id="name"
//                         type="text"
//                         placeholder="Enter your name"
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-2" htmlFor="email">Your Email</label>
//                       <input
//                         id="email"
//                         type="email"
//                         placeholder="Enter your email"
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-2" htmlFor="message">Your Message</label>
//                       <textarea
//                         id="message"
//                         rows="4"
//                         placeholder="Enter your message"
//                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
//                     >
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section: FAQs */}
//             <div className="w-1/3">
//               <h3 className="text-lg font-semibold mb-4 text-green-600 text-center">Frequently Asked Questions</h3>
//               <div className="space-y-6">
//                 {/* FAQ item */}
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                   <FaQuestionCircle className="text-green-600 text-xl mb-2" />
//                   <h4 className="text-md font-semibold">How to reset my password?</h4>
//                   <p className="text-sm text-gray-600 mt-2">
//                     You can reset your password by going to the settings page and clicking "Forgot Password".
//                   </p>
//                 </div>
//                 {/* FAQ item */}
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                   <FaQuestionCircle className="text-green-600 text-xl mb-2" />
//                   <h4 className="text-md font-semibold">How to contact support?</h4>
//                   <p className="text-sm text-gray-600 mt-2">
//                     You can contact us directly through this page or call our hotline available 24/7.
//                   </p>
//                 </div>
//                 {/* FAQ item */}
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                   <FaQuestionCircle className="text-green-600 text-xl mb-2" />
//                   <h4 className="text-md font-semibold">Where is my order?</h4>
//                   <p className="text-sm text-gray-600 mt-2">
//                     You can track your order using the tracking number sent to your email after purchase.
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupportPage;
