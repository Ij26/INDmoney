import React from "react";
import { FaSearch, FaHeadset, FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img
          src="https://iconape.com/wp-content/png_logo_vector/indmoney.png"
          alt="INDmoney Logo"
          className="h-6"
        />
        <span className="font-bold text-lg">INDmoney</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition duration-300">
          Log In
        </button>
        <FaSearch className="text-gray-500" />
        <FaHeadset className="text-gray-500" />
        <FaTimes className="text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
