"use client";

// app/components/ProductTable.tsx
import Image from "next/image";
// import { Product } from "@/types";
import { useState } from "react";

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  salePrice: number;
  mrp: number;
  quantity: number;
  thumbnail?: string;
}

interface ProductTableProps {
  products: Product[];
}

interface FilterState {
  search: string;
  category: string;
  status: string;
  stock: string;
  paymentMode: string;
  sortBy: string;
}

export default function ProductTable({ products }: ProductTableProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    status: "",
    stock: "",
    paymentMode: "",
    sortBy: "",
  });

  return (
    <div className="space-y-4">
      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Product Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
            <span className="absolute right-3 top-2.5 text-gray-400">
              <SearchIcon className="w-5 h-5" />
            </span>
          </div>

          {/* Category Dropdown */}
          <div>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
            >
              <option value="">Category</option>
              <option value="snacks">Snacks</option>
              <option value="baby-care">Baby Care</option>
              <option value="software">Useful Software&apos;s</option>
              <option value="dairy-eggs">Dairy & Eggs</option>
              {/* Add more categories */}
            </select>
          </div>

          {/* Status Dropdown */}
          <div>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="">Status</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          {/* Stock Dropdown */}
          <div>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.stock}
              onChange={(e) =>
                setFilters({ ...filters, stock: e.target.value })
              }
            >
              <option value="">Stock</option>
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          {/* Payment Mode Dropdown */}
          <div>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.paymentMode}
              onChange={(e) =>
                setFilters({ ...filters, paymentMode: e.target.value })
              }
            >
              <option value="">Payment Mode</option>
              <option value="online">Online</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.sortBy}
              onChange={(e) =>
                setFilters({ ...filters, sortBy: e.target.value })
              }
            >
              <option value="">Sort By</option>
              <option value="product">Product</option>
              <option value="category">Category</option>
              <option value="sale-price">Sale Price</option>
              <option value="mrp">MRP</option>
              <option value="quantity">Quantity</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={() =>
              setFilters({
                search: "",
                category: "",
                status: "",
                stock: "",
                paymentMode: "",
                sortBy: "",
              })
            }
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Clear
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-full bg-white rounded-lg shadow">
          {/* Table Header */}
          <div className="sticky top-0 bg-white border-b">
            <div className="grid grid-cols-12 p-4 text-sm font-medium text-gray-700">
              <div className="col-span-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300"
                />
              </div>
              <div className="col-span-4">Product</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-1 text-right">Sale Price</div>
              <div className="col-span-1 text-right">MRP</div>
              <div className="col-span-2 text-right">Quantity</div>
              <div className="col-span-1 text-center">Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {products.map((product) => (
              <div
                key={product.sku}
                className="grid grid-cols-12 p-4 hover:bg-gray-50 items-center text-sm"
              >
                <div className="col-span-1">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                  />
                </div>
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={product.thumbnail || "/placeholder.png"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-gray-500">SKU-{product.sku}</div>
                  </div>
                </div>
                <div className="col-span-2 text-gray-500">
                  {product.category}
                </div>
                <div className="col-span-1 text-right text-gray-900">
                  {product.salePrice.toFixed(2)}
                </div>
                <div className="col-span-1 text-right text-gray-500">
                  {product.mrp.toFixed(2)}
                </div>
                <div className="col-span-2 text-right text-gray-900">
                  {product.quantity}
                </div>
                <div className="col-span-1 flex justify-center">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <DotsVerticalIcon className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Icons components
const SearchIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const DotsVerticalIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    />
  </svg>
);
