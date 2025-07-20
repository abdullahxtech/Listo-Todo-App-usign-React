import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import github from "../assets/github.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-600 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to={"/"} className="text-white font-medium text-3xl flex items-center">
          <span className="text-green-400">&lt;/</span>
          <span className="font-[cursive]">Listo</span>
          <span className="text-green-400">&gt;</span>
        </NavLink>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`absolute md:static top-[80px] left-0 w-full md:w-auto z-50 bg-purple-500 md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 py-4 md:py-0 text-white text-[20px] font-[poppins]">
            <li>
              <NavLink
                to={"/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `hover:text-gray-200 font-medium ${
                    isActive ? "text-green-400" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `hover:text-gray-200 font-medium ${
                    isActive ? "text-green-400" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="bg-black rounded-xl">
              <a
                href="https://github.com/abdullahxtech/Listo-Todo-App-usign-React"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 px-3 py-2 justify-center items-center"
              >
                <img src={github} alt="GitHub" width={25} height={25} className="invert" />
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
