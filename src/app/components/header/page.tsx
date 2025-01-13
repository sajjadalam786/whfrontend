"use client";

import Image from "next/image";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a3487] p-2">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Image
              src="/wholesale house logo.png"
              alt="Brand Logo"
              width={90}
              height={40}
              className="mr-2"
            />
          </div>

          {/* Search Bar */}
          <div className="flex flex-grow mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className=" w-full p-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-[#704f45] p-2 rounded-r-md">
              Search
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-4">
            {/* <a href="/history" className="text-white hover:underline">
              Order History
            </a>
            <a href="/profile" className="text-white hover:underline">
              Profile
            </a>
            <a href="/cart" className="text-white hover:underline">
              Cart
            </a> */}
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Raise Request
            </button>
          </nav>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image
              src="/wholesale house logo.png"
              alt="wholesale house Brand Logo"
              width={60}
              height={30}
              className="mr-2"
            />

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Search Bar (Mobile) */}
          <div className="mt-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-white text-[#704f45] p-2 rounded-r-md">
                Search
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="mt-4 flex flex-col space-y-4">
              <a href="/history" className="text-white hover:underline">
                Order History
              </a>
              <a href="/profile" className="text-white hover:underline">
                Profile
              </a>
              <a href="/cart" className="text-white hover:underline">
                Cart
              </a>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Raise Request
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
