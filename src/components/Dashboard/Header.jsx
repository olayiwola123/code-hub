
import React, { useState } from 'react';
import profile from './../../assets/olatech.jpg';
import { FaLongArrowAltUp, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <input
        type="text"
        placeholder="Search"
        className="p-2 w-1/3 rounded-md border border-gray-300"
      />

      <div className="relative">
        <div className="flex items-center space-x-4 cursor-pointer" >
          <span className="text-gray-700 font-bold text-2xl">Neo</span>
          <img src={profile} alt="Profile" className="rounded-full w-10 h-10" onClick={toggleDropdown} />

    
          <Link to={'/notification'}>
          <div className="relative">
            <FaBell className="text-gray-700 w-6 h-6" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </div>
          </Link>
        </div>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaLongArrowAltUp className='mr-2' /> Account Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaBell className='mr-2' /> Notifications
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaSignOutAlt className='mr-2' /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
