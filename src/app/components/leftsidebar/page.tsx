"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { RiDashboardLine, RiShoppingCart2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineGroupAdd,
  MdOutlineList,
  MdOutlineCategory,
  MdOutlineAddShoppingCart,
} from "react-icons/md";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md lg:hidden text-white bg-[#1a3487]"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#1a3487] text-white w-64 transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-center border-b border-white/10">
          <h1 className="text-xl font-bold">Wholesale House</h1>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2">
          {/* Dashboard - Simple Link */}
          <Link
            href="/components/dashboard"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <RiDashboardLine size={20} />
            <span>Dashboard</span>
          </Link>

          {/* Add Vendor - Form-------------------------- */}
          <Link
            href="/components/addvendorform"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <MdOutlineGroupAdd size={20} />
            <span>Add Vendor</span>
          </Link>

          {/* Vendor List - Front Page----------------- */}
          <Link
            href="/components/vendorlist"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <MdOutlineList size={20} />
            <span>Vendor List</span>
          </Link>

          {/* Add Category for Product - HandWritten code --------------------  */}
          <Link
            href="/components/addcategory"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <MdOutlineCategory size={20} />
            <span>Add Category</span>
          </Link>

          {/* Add SUB category for Product - Handwritten Code ------------------------ */}

          <Link
            href="/components/addsubcategory"
            className="flex items-center rounded-lg p-3 space-x-3 hover:bg-white/10 transition-colors"
          >
            <MdOutlineCategory size={20} />
            <span>Add Sub Category</span>
          </Link>

          {/* Add SUB SUB category for Product - Handwritten Code ----------------------- */}

          <Link
            href="/components/addsubsubcategory"
            className="rounded-lg flex hover:bg-white/10 transition-colors items-center p-3 space-x-3"
          >
            <MdOutlineCategory size={20} />
            <span>Add Sub Sub Category</span>
          </Link>

          {/* Add Product Form - handWritten code --------------------------- */}

          <Link
            href="/components/addproduct/"
            className="flex rounded-lg hover:bg-white/10 transition-colors items-center p-3 space-x-3"
          >
            <MdOutlineAddShoppingCart size={20} />
            <span>Add Product</span>
          </Link>

          {/* Orders - With Submenu */}
          <div>
            <button
              onClick={() => toggleSubmenu("orders")}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <RiShoppingCart2Line size={20} />
                <span>Orders</span>
              </div>
              <IoIosArrowDown
                className={`transform transition-transform duration-200 ${
                  openSubmenu === "orders" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Submenu Items */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSubmenu === "orders"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-9 py-2 space-y-2">
                <Link
                  href="/orders/new"
                  className="block p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  New Orders
                </Link>
                <Link
                  href="/orders/completed"
                  className="block p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Completed Orders
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Footer Section */}
        <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-white/20"></div>
            <div>
              <p className="text-sm font-medium">User Name</p>
              <p className="text-xs opacity-75">user@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default LeftSidebar;
