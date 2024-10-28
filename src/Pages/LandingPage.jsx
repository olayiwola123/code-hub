
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2";
import Footer from "../components/Footer/Footer";
import About from "../components/Banner/About";

import PulsingTextLoader from "../Loader/PulsingTextLoader";
import CompanyLoader from "../Loader/CompanyLoader";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Auth/Contact";

const LandingPage = () => {
 

  return (
    <>
    
        <main className="overflow-x-hidden bg-white text-dark">
          <Navbar />
          <Hero />
          <Services />
          <About />
          {/* <Banner /> */}
          {/* <Subscribe /> */}
          <Contact />
          {/* <Banner2 /> */}
       
          <Footer />
        </main>
      
    </>
  );
};

export default LandingPage;
