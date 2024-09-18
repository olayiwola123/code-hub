// import React from "react";
// import { RiComputerLine } from "react-icons/ri";
// import { CiMobile3 } from "react-icons/ci";
// import { TbWorldWww } from "react-icons/tb";
// import { IoMdHappy } from "react-icons/io";
// import { BiSupport } from "react-icons/bi";
// import { IoPulseOutline } from "react-icons/io5";
// import { motion } from "framer-motion";

// const ServicesData = [
//   {
//     id: 1,
//     title: "Web Development",
//     link: "#",
//     icon: <TbWorldWww />,
//     delay: 0.2,
//   },
//   {
//     id: 2,
//     title: "Mobile development",
//     link: "#",
//     icon: <CiMobile3 />,
//     delay: 0.3,
//   },
//   {
//     id: 3,
//     title: "Software development",
//     link: "#",
//     icon: <RiComputerLine />,
//     delay: 0.4,
//   },
//   {
//     id: 4,
//     title: "Satisfied clients",
//     link: "#",
//     icon: <IoMdHappy />,
//     delay: 0.5,
//   },
//   {
//     id: 5,
//     title: "SEO optimization",
//     link: "#",
//     icon: <IoPulseOutline />,
//     delay: 0.6,
//   },
//   {
//     id: 6,
//     title: "24/7 support",
//     link: "#",
//     icon: <BiSupport />,
//     delay: 0.7,
//   },
// ];

// const SlideLeft = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       x: 50,
//     },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };
// const Services = () => {
//   return (
//     <section className="bg-white">
//       <div className="container pb-14 pt-16">
//         <h1 className="text-4xl font-bold text-left pb-10">
//           Services we provide
//         </h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
//           {ServicesData.map((service) => (
//             <motion.div
//               variants={SlideLeft(service.delay)}
//               initial="initial"
//               whileInView={"animate"}
//               viewport={{ once: true }}
//               className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
//             >
//               <div className="text-4xl mb-4"> {service.icon}</div>
//               <h1 className="text-lg font-semibold text-center px-3">
//                 {service.title}
//               </h1>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';

export default function Services() {
  const [bulbOn, setBulbOn] = useState(false);

  const toggleBulb = () => {
    setBulbOn(!bulbOn);
  };

  return (
    <div className="bg-light min-h-screen py-16 px-8 md:px-20 lg:px-32">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          We offer a wide range of services to help you grow and succeed in the tech world.
        </p>
      </motion.div>

      {/* Light Bulb Section */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleBulb}
        className="flex justify-center items-center mb-12"
      >
        <FaLightbulb 
          className={`text-9xl ${bulbOn ? 'text-yellow-400' : 'text-gray-400'} transition-colors duration-500`} 
        />
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        
        {/* Service 1 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaCode className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 text-center">Web Development</h2>
          <p className="text-gray-600 mt-2 text-center">
            Build modern, responsive websites with the latest web technologies.
          </p>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaServer className="text-5xl text-teal-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 text-center">Backend Services</h2>
          <p className="text-gray-600 mt-2 text-center">
            Secure and scalable backend solutions to power your applications.
          </p>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaMobileAlt className="text-5xl text-green-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 text-center">Mobile App Development</h2>
          <p className="text-gray-600 mt-2 text-center">
            Create mobile apps that run smoothly on both Android and iOS devices.
          </p>
        </motion.div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Let’s bring your ideas to life with our expert services. Contact us today!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
}
