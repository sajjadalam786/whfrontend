"use client";

// components/ProductTable.tsx
import React from "react";
import Image from "next/image";

// Define the Product interface for type safety
interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  salePrice: number;
  mrp: number;
  quantity: number;
  imageUrl: string;
}

// Define the props expected by the ProductTable component
interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
      {/* Responsive table container */}
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Sale Price
            </th>
            <th scope="col" className="px-6 py-3">
              MRP
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Iterate over products to generate rows dynamically */}
          {products.map((product) => (
            <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600"
                  />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 mr-3">
                    {/* Product Image */}
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      SKU-{product.sku}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">${product.salePrice.toFixed(2)}</td>
              <td className="px-6 py-4">${product.mrp.toFixed(2)}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4 flex items-center space-x-3">
                {/* Action buttons */}
                <button className="font-medium text-blue-600 hover:underline">
                  Edit
                </button>
                <button className="font-medium text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add responsive classes for smaller screens */}
      <style jsx>{`
        @media (max-width: 640px) {
          table {
            font-size: 0.85rem;
          }
          td {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductTable;
