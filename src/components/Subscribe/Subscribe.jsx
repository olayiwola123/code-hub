// import React from "react";
// import { FaBell } from "react-icons/fa";
// import BgImage from "../../assets/bg.png";
// import { motion } from "framer-motion";

// const bgStyle = {
//   backgroundImage: `url(${BgImage})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const Subscribe = () => {
//   return (
//     <section className="bg-[#f7f7f7]">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         style={bgStyle}
//         className="container py-24 md:py-48"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//           className="flex flex-col justify-center"
//         >
//           <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
//             <h1 className="text-4xl font-bold !leading-snug">
//               450K+ Students are learning from us
//             </h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Recusandae iusto minima
//             </p>
//             <a
//               href=""
//               className="primary-btn !mt-8 inline-flex items-center gap-4 group"
//             >
//               Subscribe Now
//               <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Subscribe;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Subscribe() {
  const [isHovered, setIsHovered] = useState(false);

  // Animation for individual letters
  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    explode: {
      scale: [1, 1.5, 0],
      rotate: [0, 45, 90],
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  // Animation for bouncing input field
  const inputBounce = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.3 },
    },
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-700 to-purple-700 py-20 flex flex-col items-center justify-center text-white min-h-screen">
  
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 opacity-30 animate-pulse"></div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 z-10"
      >
        Subscribe To Our  Community!
      </motion.h2>

      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={inputBounce}
        className="z-10"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 text-black rounded-lg shadow-lg w-80 md:w-96 mb-6 focus:ring-4 focus:ring-yellow-500 focus:outline-none transition-all"
        />
      </motion.div>

      {/* Exploding Button */}
      <motion.button
        className="relative px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Exploding letters animation */}
        {'Subscribe'.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
            initial="visible"
            animate={isHovered ? 'explode' : 'visible'}
            style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.button>

      {/* Additional decorative animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-20 rounded-full"
      ></motion.div>
    </div>
  );
}
