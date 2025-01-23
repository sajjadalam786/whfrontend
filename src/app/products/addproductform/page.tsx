"use client";

import React, { useState } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";

type Field = {
  label: string;

  type: string;

  required: boolean;
};

const AddProductForm: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).slice(0, 6);
      setImages([...images, ...newImages]);
    }
  };

  const handleImageReorder = (index: number, direction: "up" | "down") => {
    const newImages = [...images];
    if (direction === "up" && index > 0) {
      [newImages[index], newImages[index - 1]] = [
        newImages[index - 1],
        newImages[index],
      ];
    } else if (direction === "down" && index < newImages.length - 1) {
      [newImages[index], newImages[index + 1]] = [
        newImages[index + 1],
        newImages[index],
      ];
    }
    setImages(newImages);
  };

  const fields: Field[] = [
    { label: "Name", type: "text", required: true },
    { label: "Purchase Price", type: "number", required: false },
    { label: "Sale Price", type: "number", required: true },
    { label: "MRP", type: "number", required: false },
    { label: "Quantity", type: "number", required: false },
    { label: "Youtube URL", type: "url", required: false },
    { label: "Min Quantity", type: "number", required: true },
    { label: "Size", type: "text", required: false },
    { label: "Weight", type: "text", required: false },
    { label: "Color", type: "text", required: false },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white shadow-2xl rounded-lg mt-14">
      <h1 className="text-2xl md:text-2xl font-bold mb-4">Add Product</h1>

      <form className="space-y-4 md:space-y-6">
        {/* Image Upload Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Product Image</label>
          <p className="text-xs text-gray-500">
            Maximum 6 Images. Drag thumbnail to re-order.
          </p>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:text-sm"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  width={80}
                  height={80}
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="h-20 w-20 object-cover rounded"
                />
                <div className="absolute -top-2 -right-2 flex space-x-1">
                  <button
                    type="button"
                    onClick={() => handleImageReorder(index, "up")}
                    className="bg-gray-200 p-1 rounded text-xs"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => handleImageReorder(index, "down")}
                    className="bg-gray-200 p-1 rounded text-xs"
                  >
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium mb-1">
                {field.label}
                {field.required && (
                  <span className="text-red-500 font-bold"> * </span>
                )}
              </label>
              <input
                type={field.type}
                required={field.required}
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              />
            </div>
          ))}
        </div>

        {/* Dropdowns Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Brand</option>
              <option value="wholesale">Wholesale House</option>
              <option value="puma">Puma</option>
              <option value="gucci">Gucci</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tax</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Tax Rate</option>
              <option value="0">0%</option>
              <option value="18">18%</option>
              <option value="24">24%</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">HSN Code</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Category</option>
              {/* Add categories */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Sub Category
            </label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Sub Category</option>
              {/* Add sub categories */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Sub Sub Category
            </label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Sub Sub Category</option>
              {/* Add sub sub categories */}
            </select>
          </div>
        </div>

        {/* Additional Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Payment Mode
            </label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Payment Mode</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Net Quantity
            </label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea className="w-full p-2 border rounded" rows={4} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
