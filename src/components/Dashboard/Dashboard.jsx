import React from 'react';
import Sidebar from './Sidemenu';
import Header from './Header';
import MainContent from './MainContent';


const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
