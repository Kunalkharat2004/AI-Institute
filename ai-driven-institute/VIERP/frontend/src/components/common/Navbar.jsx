import React, { useState } from 'react';
import vitlogo from "../../assets/vit_logo.jpeg";
import useTokenStore from '../../store/userTokenStore';
import {jwtDecode} from 'jwt-decode';

const Navbar = () => {
  const { erpToken, setErptoken } = useTokenStore((state) => state);
  const decoded =  jwtDecode(erpToken);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    setErptoken(null); // Clear token from state
    localStorage.removeItem("erp-auth-token"); // Clear token from localStorage if stored
    window.location.reload(); // Reload the page to reset the state
  };

  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 bg-secondary text-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src={vitlogo} alt="Institute Logo" className="h-10" />
          <div>
            <h1 className="text-xl font-bold">Vishwakarma Institute of Technology, Pune</h1>
            <p className="text-sm">BTech-Information Technology</p>
          </div>
        </div>
        <div className="relative">
          <div
            className="h-10 w-10 bg-purple-800 rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleProfileClick}
          >
            <span className="text-lg font-bold">{decoded['email'][0]?.toUpperCase()}</span>
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg py-2">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
