"use client";

import ProductTable from "../producttable/page";
import Link from "next/link";
import { useState } from "react";
import Pagination from "../../../components/pagination/page";

export default function Page() {
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
      sku: "1591235",
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Link href="/components/product/addproduct/" className="p-4">
            Add Product
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
