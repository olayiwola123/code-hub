import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroPng from "../../assets/hero2.png";
import { animate, motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="b overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Let's Learn to build a{" "}
              <span className="text-secondary">Website</span> for your business
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
// import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Blob from "../../assets/blob.svg";
// import HeroPng from "../../assets/hero.png";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper-bundle.min.css";
// // import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper-bundle.css'
// // import 'swiper/swiper.min.css';
// import 'swiper/bundle'

// export const FadeUp = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       y: 50,
//     },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         duration: 0.5,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };

// export const SlideIn = (direction = "left", delay = 0) => {
//   return {
//     initial: {
//       opacity: 0,
//       x: direction === "left" ? -50 : 50,
//     },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         duration: 0.6,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };

// // Typing Effect Component
// const TypingEffect = ({ text, speed }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   let index = 0;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text[index]);
//       index += 1;
//       if (index === text.length) clearInterval(interval);
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return <span>{displayedText}</span>;
// };

// const Hero = () => {
//   const [showAppDevelopment, setShowAppDevelopment] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowAppDevelopment(true);
//     }, 5000); // Delay for 5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="bg-light overflow-hidden relative">
//       <Navbar />
//       <Swiper
//         pagination={{ clickable: true }}
//         loop={false}
//         speed={600}
//         className="h-full"
//       >
//         {/* Hero Slide */}
//         <SwiperSlide>
//           <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
//             {/* Brand Info */}
//             <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
//               <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
//                 <motion.h1
//                   variants={FadeUp(0.6)}
//                   initial="initial"
//                   animate="animate"
//                   className="text-3xl lg:text-5xl font-bold !leading-snug"
//                 >
//                   <TypingEffect text="Let's Learn to build a Website for your business" speed={100} />
//                   <span className="text-secondary">Website</span>
//                 </motion.h1>
//                 <motion.div
//                   variants={FadeUp(0.8)}
//                   initial="initial"
//                   animate="animate"
//                   className="flex justify-center md:justify-start"
//                 >
//                   <button className="primary-btn flex items-center gap-2 group">
//                     Get Started
//                     <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
//                   </button>
//                 </motion.div>
//               </div>
//             </div>
//             {/* Hero Image */}
//             <div className="flex justify-center items-center">
//               <motion.img
//                 initial={{ x: 50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
//                 src={HeroPng}
//                 alt="Hero"
//                 className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
//               />
//               <motion.img
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
//                 src={Blob}
//                 alt="Blob"
//                 className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
//               />
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* App Development Slide */}
//         {showAppDevelopment && (
//           <SwiperSlide>
//             <motion.div
//               className="bg-gray-100 py-20"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//             >
//               <div className="container">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                   {/* Text Info */}
//                   <motion.div
//                     variants={SlideIn("left", 1)}
//                     initial="initial"
//                     animate="animate"
//                     className="text-center md:text-left space-y-6"
//                   >
//                     <h2 className="text-2xl md:text-4xl font-bold">
//                       Innovative <span className="text-secondary">App Development</span>
//                     </h2>
//                     <p className="text-lg">
//                       We specialize in creating cutting-edge applications tailored to your needs. Whether you're looking to build a mobile app or a web-based solution, our team of experts will guide you through every step of the process.
//                     </p>
//                     <button className="primary-btn">Learn More</button>
//                   </motion.div>

//                   {/* App Development Image */}
//                   <motion.div
//                     variants={SlideIn("right", 1.2)}
//                     initial="initial"
//                     animate="animate"
//                     className="flex justify-center"
//                   >
//                     <img
//                       src=".assets/hero.png"
//                       alt="App Development"
//                       className="w-full max-w-md"
//                     />
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         )}
//       </Swiper>
//     </section>
//   );
// };

// export default Hero;
