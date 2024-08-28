import React from "react";
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg mt-4 flex flex-col items-center">
      <div className="text-center mb-2">
        <p className="text-sm font-bold">DOWNLOAD APP</p>
        <p className="text-green-500 text-sm">1 Crore+ Downloads.</p>
      </div>
      <div className="flex space-x-8">
        <div className="flex items-center">
          <FaApple className="text-black text-3xl mr-2" />
          <div>
            <p className="text-sm font-bold">4.7</p>
            <div className="flex text-yellow-500 space-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <FaGooglePlay className="text-black text-3xl mr-2" />
          <div>
            <p className="text-sm font-bold">4.6</p>
            <div className="flex text-yellow-500 space-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
