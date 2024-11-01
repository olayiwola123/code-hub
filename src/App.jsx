
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Contact from "./Pages/Contact";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Singup";
import Team from "./components/Team/OurTeam";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin"
import Payment from "./components/General/Payment";
import Notifications from "./components/General/NotificationsPage";
import SupportPage from "./components/General/SupportPage";
import CertificatesPage from "./components/General/CertificatesPage";
import SchedulePage from "./components/General/SchedulePage";
import ApplyNow from "./Pages/ApplyNow";
import VerifyCertificate from "./Pages/VerifyCertificate";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";


const App = ({hello}) => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
    
        <Route path="/" element={<LandingPage />} />

      
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/sign-up" element={<MainLayout><Signup /></MainLayout>} />
        <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/sign-up" element={<MainLayout><Signup /></MainLayout>} /> 

        <Route path="/notification" element={<><Notifications /></>} /> 
        <Route path="/support" element={<><SupportPage /></>} /> 
        <Route path="/certificate" element={<><CertificatesPage /></>} /> 
        <Route path="/schedule" element={<><SchedulePage /></>} /> 
        <Route path="/apply" element={<MainLayout><ApplyNow /></MainLayout>} /> 
        <Route path="/verify" element={<MainLayout><VerifyCertificate /></MainLayout>} /> 
        <Route path="/no" element={<MainLayout><NotFound /></MainLayout>} /> 
        
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/payment-page" element={<ProtectedRoute><Payment /></ProtectedRoute>} /> 
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;

