"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineGroupAdd,
  MdOutlineCategory,
  MdOutlineAddShoppingCart,
} from "react-icons/md";
import { FaRegCircle, FaRegListAlt } from "react-icons/fa";
import { TbBrandBeats } from "react-icons/tb";
import { BsEmojiDizzy } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

/* The `LeftSidebar` component is a functional component in React that defines a sidebar layout for a
web application. */
const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  /**
   * The function `toggleSubmenu` toggles the visibility of a submenu based on the provided menu
   * string.
   * @param {string} menu - The `menu` parameter in the `toggleSubmenu` function is a string that
   * represents the submenu that you want to toggle.
   */
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

          {/* Vendor Setup */}

          <div>
            <button
              onClick={() => toggleSubmenu("vendor")}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <BsEmojiDizzy size={20} />

                <span>Vendor Setup</span>
              </div>
              <IoIosArrowDown
                className={`transform transition-transform duration-200 
                  ${openSubmenu === "vendor" ? "rotate-180" : ""}`}
              />
            </button>

            {/* Submenu Items */}
            {/* The `<div>` element with the dynamic `className` attribute is controlling the visibility
            and animation of a submenu based on the state of `openSubmenu`. Here's a breakdown of
            what it's doing: */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSubmenu === "vendor"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-9 py-2 space-y-2">
                <Link
                  href="/components/vendor/addvendor/"
                  className=" flex space-x-3 items-center block p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <MdOutlineGroupAdd size={20} />

                  <span>Add New Vendor</span>
                </Link>
                <Link
                  href="/components/vendor/vendorlist/"
                  className="flex space-x-3 items-center p-2 block p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaRegListAlt size={15} />

                  <span>Vendor List</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ----------------------- */}

          {/* Brand Setup */}

          <div>
            <button
              onClick={() => toggleSubmenu("brand")}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <TbBrandBeats size={20} />

                <span>Brand Setup</span>
              </div>
              <IoIosArrowDown
                className={`transform transition-transform duration-200 
                  ${openSubmenu === "brand" ? "rotate-180" : ""}`}
              />
            </button>

            {/* Submenu Items */}
            {/* The `<div>` element with the dynamic `className` attribute is controlling the visibility
            and animation of a submenu based on the state of `openSubmenu`. Here's a breakdown of
            what it's doing: */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSubmenu === "brand"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-9 py-2 space-y-2">
                <Link
                  href="/components/brand/addbrand/"
                  className=" flex space-x-3 items-center block p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <IoIosAddCircleOutline size={20} />

                  <span>Add New Brand</span>
                </Link>
                <Link
                  href="/components/brand/brandlist/"
                  className="flex space-x-3 items-center p-2 block p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaRegListAlt size={15} />

                  <span>Brand List</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ----------------------- */}

          {/* Add Category for Product - HandWritten code --------------------  */}

          <div>
            <button
              onClick={() => toggleSubmenu("category")}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <MdOutlineCategory size={20} />
                <span>Category Setup</span>
              </div>
              <IoIosArrowDown
                className={`transform transition-transform duration-200 
                  ${openSubmenu === "category" ? "rotate-180" : ""}`}
              />
            </button>

            {/* Submenu Items */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSubmenu === "category"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-9 py-2 space-y-2">
                <Link
                  href="/components/category/addcategory/"
                  className=" flex space-x-3 items-center block p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaRegCircle size={15} />

                  <span>New Category</span>
                </Link>
                <Link
                  href="/components/category/addsubcategory/"
                  className="flex space-x-3 items-center p-2 block p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaRegCircle size={15} />
                  <span>Sub Category</span>
                </Link>
                <Link
                  href="/components/category/addsubsubcategory/"
                  className="flex space-x-3 p-2 items-center block p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaRegCircle size={15} />
                  <span>Sub Sub Category</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ----------------------- */}

          {/* Add Product Form - handWritten code --------------------------- */}

          <Link
            href="/components/addproduct/"
            className="flex rounded-lg hover:bg-white/10 transition-colors items-center p-3 space-x-3"
          >
            <MdOutlineAddShoppingCart size={20} />
            <span>Add Product</span>
          </Link>

          {/* --------------------- */}
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
