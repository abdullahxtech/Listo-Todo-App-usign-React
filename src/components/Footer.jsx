import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-6 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Brand */}
        <div className="text-xl font-semibold font-[cursive]">
          <span className="text-green-300">&lt;/</span>Listo
          <span className="text-green-300">&gt;</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg">
          <NavLink to="/" className="hover:underline hover:text-gray-200">Home</NavLink>
          <NavLink to="/about" className="hover:underline hover:text-gray-200">About</NavLink>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Listo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
