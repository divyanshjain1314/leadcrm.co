import React, { useState } from "react";
import logo from "../assets/logo.png";
import selectIcon from "../assets/icons/select-icon.svg";
import { Link } from "react-router-dom";
import loginIcon from "../assets/icons/login-icon.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <nav className="bg-white shadow-md lg:h-[114px] px-[8px] py-[16px] flex flex-col justify-center items-center sticky top-0 z-50">
  <div className="flex justify-between items-center w-full px-4">
    <div className="flex-shrink-0">
      <img className="h-12 lg:h-full w-auto" src={logo} alt="LEADCRM.IO" />
    </div>
    <div className="hidden lg:flex items-center space-x-8">
      <div className="flex space-x-8 items-center">
        <div className="relative group">
          <div className="text-[#222222] font-[600] text-[18px] hover:text-[#2D96BC] transition-colors duration-300">
            <span className="flex justify-center items-center leading-0 gap-2">
              Product
              <img
                src={selectIcon}
                alt="Select Icon"
                className="w-[17.05px] h-[11.37px]"
              />
            </span>
          </div>
        </div>
        <Link
          to="/"
          className="leading-[28px] text-[#222222] font-[600] text-[18px] hover:text-[#2D96BC] transition-colors duration-300"
        >
          Pricing
        </Link>
        <div className="relative group">
          <div className="text-[#222222] font-[600] text-[18px] hover:text-[#2D96BC] transition-colors duration-300">
            <span className="flex justify-center items-center leading-0 gap-2">
              Resources
              <img
                src={selectIcon}
                alt="Select Icon"
                className="w-[17.05px] h-[11.37px]"
              />
            </span>
          </div>
        </div>
        <div className="relative group">
          <div className="text-[#222222] font-[600] text-[18px] hover:text-[#2D96BC] transition-colors duration-300">
            <span className="flex justify-center items-center leading-0 gap-2">
              Company
              <img
                src={selectIcon}
                alt="Select Icon"
                className="w-[17.05px] h-[11.37px]"
              />
            </span>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <div className="h-[52px] w-[215px] rounded-[10px] flex justify-center items-center bg-[#2D96BC]">
          <Link
            to="/"
            className="text-[16px] leading-0 font-[600] text-white"
          >
            Get Your Free Account
          </Link>
        </div>
        <div className="w-[130px] h-[52px] flex justify-center items-center rounded-[10px] border border-[#2D96BC]">
          <span className="flex items-center gap-2 text-[#2D96BC] font-[600] text-[16px] leading-0">
            <img src={loginIcon} alt="Login Icon" /> Login
          </span>
        </div>
      </div>
    </div>
    {/* Mobile Menu Button */}
    <div className="lg:hidden flex items-center">
      <button
        onClick={toggleMobileMenu}
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {isMobileMenuOpen ? (
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
    </div>
  </div>
  <div
    className={`lg:hidden ${
      isMobileMenuOpen ? "block" : "hidden"
    } fixed left-0 top-0 bottom-0 z-50 w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
      isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="px-[8px] py-[16px]">
      <div className="flex justify-between items-center mb-6 px-4">
        <img className="h-12 w-auto" src={logo} alt="LEADCRM.IO" />
        <button
          onClick={toggleMobileMenu}
          className="text-gray-400 hover:text-gray-500 pe-2"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="space-y-4">
        <Link
          to="/"
          className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-lg"
        >
          Product
        </Link>
        <Link
          to="/"
          className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-lg"
        >
          Pricing
        </Link>
        <Link
          to="/"
          className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-lg"
        >
          Resources
        </Link>
        <Link
          to="/"
          className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-lg"
        >
          Company
        </Link>
        <div className="pt-4 flex flex-col space-y-4">
          <Link
            to="/"
            className="bg-[#2D96BC] text-white py-2 rounded-[10px] text-lg font-medium text-center"
          >
            Get Your Free Account
          </Link>
          <Link
            to="/"
            className="text-[#2D96BC] border border-[#2D96BC] py-2 rounded-[10px] text-lg font-medium text-center flex items-center justify-center gap-2"
          >
            <img src={loginIcon} alt="Login Icon" className="w-5 h-5" /> Login
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
