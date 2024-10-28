// import React from 'react';

// import paymentImage from './../../assets/img/image.png'; 
// import Sidebar from '../Dashboard/Sidemenu';
// import Header from '../Dashboard/Header';


// const Payment = () => {
//   return (
//     <div className="flex h-full">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Header */}
//         <Header />

//         <div className="p-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Payments</h2>
//           <div className="flex flex-col items-center">
//             <img src={paymentImage} alt="Payments" className="w-1/2 mb-6" />
//             <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
//                   Card Number
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="cardNumber"
//                   type="text"
//                   placeholder="Enter Card Number"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expirationDate">
//                   Expiration Date
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="expirationDate"
//                   type="text"
//                   placeholder="MM/YY"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
//                   CVV
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="cvv"
//                   type="password"
//                   placeholder="CVV"
//                 />
//               </div>
//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Submit Payment
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
import React from 'react';
import paymentImage from './../../assets/img/image.png'; 
import Sidebar from '../Dashboard/Sidemenu';
import Header from '../Dashboard/Header';
// import { PaystackButton } from 'react-paystack'; 

const Payment = () => {

  const publicKey = 'pk_test_324f431ff9780e4b8c1d140e4f51e851de9a2cd0'; 
  const amount = 50000;
  const email = 'user@example.com'; 
  const reference = new Date().getTime().toString();

  // Paystack config
  const paystackConfig = {
    reference: reference,
    email: email,
    amount: amount,
    publicKey: publicKey,
  };

  const handlePaystackSuccessAction = (reference) => {
    
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    // User closed the payment modal
    console.log('Payment closed');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="h-screen" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Payment Content */}
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Payments</h2>

            <div className="flex items-center space-x-8">
              {/* Payment Image */}
              <div className="w-1/2">
                <img
                  src={paymentImage}
                  alt="Payments"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Payment Form */}
              <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Complete Your Payment</h3>

                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
                      id="cardNumber"
                      type="text"
                      placeholder="Enter Card Number"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expirationDate">
                        Expiration Date
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
                        id="expirationDate"
                        type="text"
                        placeholder="MM/YY"
                      />
                    </div>

                    <div className="w-1/2">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                        CVV
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
                        id="cvv"
                        type="password"
                        placeholder="CVV"
                      />
                    </div>
                  </div>

                  {/* Paystack Button */}
                  <button
                    className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition duration-200"
                  
                   
                   
                  >pay with paystack</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
