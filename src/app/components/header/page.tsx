import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#704f45] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Brand Logo" className="h-10 mr-2" />
          <h1 className="text-white text-2xl font-bold">Brand Name</h1>
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 rounded-l-md focus:outline-none"
          />
          <button className="bg-white text-[#704f45] p-2 rounded-r-md">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
