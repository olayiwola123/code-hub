
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Contact from "./Pages/Contact";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Singup";
import Team from "./components/Team/OurTeam";


const App = () => {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<LandingPage />} />

      
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/sign-up" element={<MainLayout><Signup /></MainLayout>} />
        <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;

