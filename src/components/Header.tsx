"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="flex justify-between items-center px-4 py-3 shadow-md bg-gray-300">
      {/* LOGO */}
      <div className="text-xl font-bold">LOGO</div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl focus:outline-none"
        >
          <FiMenu />
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`lg:flex lg:gap-8 lg:items-center ${
          isOpen
            ? "flex flex-col gap-4 absolute top-14 left-0 w-full bg-gray-300 p-4"
            : "hidden"
        }`}
      >
        <div className="cursor-pointer hover:text-blue-600 transition duration-300">Home</div>
        <div className="cursor-pointer hover:text-blue-600 transition duration-300">About</div>
        <div className="cursor-pointer hover:text-blue-600 transition duration-300">Services</div>
        <div className="cursor-pointer hover:text-blue-600 transition duration-300">Contact Us</div>
      </div>
    </div>
  );
};

export default Header;
