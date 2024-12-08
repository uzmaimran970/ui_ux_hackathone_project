"use client"
import { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white flex items-center justify-between px-4 sm:px-8 lg:px-10 py-4 relative">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <h1 className="text-[24px] sm:text-[30px] font-bold">
          Food<span className="text-[#FF9F0D]">Tuck</span>
        </h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden text-white text-2xl" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Center: Navigation Links */}
      <div
        className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-black lg:bg-transparent lg:flex gap-6 items-center transition-transform duration-300 z-50 lg:translate-x-0 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-4 lg:p-0">
          <a href="/" className="text-[16px] lg:text-[18px] hover:text-[#FF9F0D]">Home</a>
          <a href="/manu" className="text-[16px] lg:text-[18px] hover:text-[#FF9F0D]">Menu</a>
          <a href="/signup" className="text-[16px] lg:text-[18px] hover:text-[#FF9F0D]">contact</a>
          <a href="/pages" className="text-[16px] lg:text-[18px] hover:text-[#FF9F0D]">Pages</a>
          <a href="/ourshef" className="text-[16px] lg:text-[18px] hover:text-[#FF9F0D]">Shefs</a>
          <a href="/error" className="text-[16px] lg:text-[18px] hover:text-[#FF9F0D]">signup</a>
        </div>
      </div>


      <div className="hidden lg:flex gap-6">
        <div className="w-[24px] h-[24px] flex items-center justify-center text-white">
          <FaSearch />
        </div>
        <div className="w-[24px] h-[24px] flex items-center justify-center text-white">
          <FaUser />
        </div>
        <div className="w-[24px] h-[24px] flex items-center justify-center text-white">
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
}