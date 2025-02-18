"use client";
import { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white fixed max-w-full px-[100px] top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          <Link href="/">Food<span className="text-white">Truck</span></Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          className="lg:hidden text-white hover:text-[#FF9F0D]"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex items-center space-x-4 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:block absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent py-4 lg:py-0 z-40`}
        >
          <Link href="/" className="block px-4 lg:px-0 hover:text-[#FF9F0D]">Home</Link>
          <Link href="/manu" className="block px-4 lg:px-0 hover:text-[#FF9F0D]">Menu</Link>
          <Link href="/signup" className="block px-4 lg:px-0 hover:text-[#FF9F0D]">Contact</Link>
          <Link href="/blog" className="block px-4 lg:px-0 hover:text-[#FF9F0D]">Blog</Link>
          <Link href="/ourshef" className="block px-4 lg:px-0 hover:text-[#FF9F0D]">Shefs</Link>
          <Link href="/products" className="block px-4 lg:px-0 hover:text-[#FF9F0D]">Shop</Link>
        </nav>

        {/* Search and Cart (on larger screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center outline outline-[2px] outline-[#FF9F0D] rounded-3xl px-3 py-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none border-none text-sm text-white placeholder-gray-400 ml-2"
            />
          </div>
          <ShoppingBagIcon className="h-6 w-6 text-white hover:text-[#FF9F0D]" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
