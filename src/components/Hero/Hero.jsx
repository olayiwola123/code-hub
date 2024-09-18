// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Blob from "../../assets/blob.svg";
// import HeroPng from "../../assets/hero2.png";
// import { animate, motion } from "framer-motion";

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

// const Hero = () => {
//   return (
//     <section className="b overflow-hidden relative">
//       <Navbar />
//       <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
//         {/* Brand Info */}
//         <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
//           <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
//             <motion.h1
//               variants={FadeUp(0.6)}
//               initial="initial"
//               animate="animate"
//               className="text-3xl lg:text-5xl font-bold !leading-snug"
//             >
//               Let's Learn to build a{" "}
//               <span className="text-secondary">Website</span> for your business
//             </motion.h1>
//             <motion.div
//               variants={FadeUp(0.8)}
//               initial="initial"
//               animate="animate"
//               className="flex justify-center md:justify-start"
//             >
//               <button className="primary-btn flex items-center gap-2 group">
//                 Get Started
//                 <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
//               </button>
//             </motion.div>
//           </div>
//         </div>
//         {/* Hero Image */}
//         <div className="flex justify-center items-center">
//           <motion.img
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
//             src={HeroPng}
//             alt=""
//             className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
//           />
//           <motion.img
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
//             src={Blob}
//             alt=""
//             className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroPng1 from "../../assets/hero.png";
import HeroPng2 from "../../assets/her.png";
import { motion } from "framer-motion";

// Define FadeUp animation
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

// Define slide animation for text
const slideAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Define slide animation for images
const imageAnimation = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      stiffness: 80,
    },
  },
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Texts and images to rotate
  const texts = [
    "Let's Learn to build a Website for your business",
    "Grow Your Business with a Professional Website",
  ];

  const images = [HeroPng1, HeroPng2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="bg-light overflow-hidden relative"> {/* Added pt-16 for spacing */}
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={slideAnimation}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              {texts[currentIndex]}
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
        <div className="relative flex justify-center items-center bg-light">
          <motion.img
            initial="initial"
            animate="animate"
            variants={imageAnimation}
            src={images[currentIndex]}
            alt="Hero"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={Blob}
            alt="Blob"
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
