import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2";
import Footer from "../components/Footer/Footer";
import About from "../components/Banner/About";

const LandingPage = () => {
  useEffect(() => {
  
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66eabe9e4cbc4814f7da161e/1i82fhosj";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <About/>
      <Services />
      <Banner />
      <Banner2 />
      <Subscribe />
    
      <Footer />
    </main>
  );
};

export default LandingPage;
