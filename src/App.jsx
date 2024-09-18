
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Contact from "./Pages/Contact";
import MainLayout from "./layouts/MainLayout";


const App = () => {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<LandingPage />} />

      
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;

