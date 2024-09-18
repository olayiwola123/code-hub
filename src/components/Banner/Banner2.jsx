// import React from "react";
// import BannerPng from "../../assets/banner.png";
// import { motion } from "framer-motion";

// const Banner2 = () => {
//   return (
//     <section>
//       <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
//         {/* Banner Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="flex flex-col justify-center"
//         >
//           <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
//             <h1 className="text-4xl font-bold !leading-snug">
//               Join Our Community to Start your Journey
//             </h1>
//             <p className="text-dark2">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
//               incidunt!
//             </p>
//             <a
//               href="https://chat.whatsapp.com/LYZiU8O5PPa20mlDpquoSp"
//               className="primary-btn !mt-8"
//               target="_blank"
//             >
//               Join Now
//             </a>
//           </div>
//         </motion.div>
//         {/* Banner Image */}
//         <div className="flex justify-center items-center">
//           <motion.img
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             src={BannerPng}
//             alt=""
//             className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner2;
import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../../assets/hero.png';  // Replace with your image path

export default function Banner() {

  // Floating animation for image
  const floatAnimation = {
    y: [0, -20, 0], // Move up and down
    transition: {
      duration: 4, // Duration for one full loop
      ease: "easeInOut",
      repeat: Infinity, // Repeat the animation infinitely
    }
  };

  // Text Animation
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <div className=" bg-light relative bg-gradient-to-r min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* Background Animation (Optional) */}
      <div className="absolute inset-0 bg-gradient-to-r -50"></div>

      {/* Floating Image */}
      <motion.div
        animate={floatAnimation}
        className="z-10"
      >
        <img src={HeroImage} alt="Hero" className="w-80 md:w-96 lg:w-128" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        className="mt-12 z-20 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight text-primary"
        >
          Welcome to <span className="text-yellow-300">CodeHub</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-secondary"
        >
          Your gateway to mastering modern web technologies.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300"
          >
            Join the Community
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
