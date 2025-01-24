"use client";

import ProductTable from "../producttable/page";
import Link from "next/link";
import { useState } from "react";
import Pagination from "../../pagination/page";
import { IoSettings } from "react-icons/io5";

export default function ProductList() {
  // Pagination-------------------------------------

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6; // Your total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add your logic here to fetch data for the new page
  };

  // Pagination-------------------------------------

  const products = [
    {
      id: "1",
      sku: "1595",
      name: "Banana Chips",
      category: "Snacks",
      salePrice: 400.0,
      mrp: 500.0,
      quantity: 1,
      thumbnail: "/wholesale house logo.png",
    },
    {
      id: "1",
      sku: "2323",
      name: "Desi Eggs",
      category: "Eggs & Poultry",
      salePrice: 400.0,
      mrp: 500.0,
      quantity: 1,
      thumbnail: "/wholesale house logo.png",
    },
    {
      id: "1",
      sku: "22233",
      name: "Desi Eggs",
      category: "Eggs & Poultry",
      salePrice: 400.0,
      mrp: 500.0,
      quantity: 1,
      thumbnail: "/wholesale house logo.png",
    },
    {
      id: "1",
      sku: "21212",
      name: "Desi Eggs",
      category: "Eggs & Poultry",
      salePrice: 400.0,
      mrp: 500.0,
      quantity: 1,
      thumbnail: "/wholesale house logo.png",
    },
    {
      id: "1",
      sku: "2121212",
      name: "Desi Eggs",
      category: "Eggs & Poultry",
      salePrice: 400.0,
      mrp: 500.0,
      quantity: 1,
      thumbnail: "/wholesale house logo.png",
    },
    {
      id: "1",
      sku: "1212",
      name: "Desi Eggs",
      category: "Eggs & Poultry",
      salePrice: 400.0,
      mrp: 500.0,
      quantity: 1,
      thumbnail: "/wholesale house logo.png",
    },
    {
      id: "1",
      sku: "12",
      name: "Desi Eggs",
      category: "Eggs & Poultry",
      salePrice: 400.0,
      mrp: 500.0,
      quantity: 1,
      thumbnail: "/wholesale house logo.png",
    },
    // ... more products
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="flex  mb-6 justify-end">
        <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ">
          <Link href="/products/addproductform/" className="p-4 text-pretty">
            Add Product
          </Link>
        </button>

        <button className=" bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ">
          <Link
            href="/products/productfields/"
            className="flex p-1 justify-center items-center"
          >
            <IoSettings size={25} className="mr-2" />
            Product Fields (Attrs)
          </Link>
        </button>
      </div>

      <div>
        <ProductTable products={products} />
      </div>

      {/* // Pagination------------------------------------- */}
      <div className="container mx-auto px-4">
        {/* Your content here */}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* // Pagination------------------------------------- */}
    </div>
  );
}
