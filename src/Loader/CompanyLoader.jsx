import React from 'react';
import './CompanyLoader.css'; 
import CompanyLoaderimg from "../assets/company.jpg"

const CompanyLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="logo">
          <img src={CompanyLoaderimg} alt="Company Logo" />
        </div>
        <h1 className="company-name">CodeHub</h1>
      </div>
    </div>
  );
};

export default CompanyLoader;
