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
  const [images, setImages] = useState<File[]>([]); // State to hold uploaded images

  // Handle image upload and limit to 6 images
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).slice(0, 6); // Restrict to 6 images maximum
      setImages([...images, ...newImages]); // Add new images to existing ones
    }
  };

  // Handle reordering of images
  const handleImageReorder = (index: number, direction: "up" | "down") => {
    const newImages = [...images]; // Create a copy of the images array
    if (direction === "up" && index > 0) {
      // Swap with the previous image if moving up and not at the first position
      [newImages[index], newImages[index - 1]] = [
        newImages[index - 1],
        newImages[index],
      ];
    } else if (direction === "down" && index < newImages.length - 1) {
      // Swap with the next image if moving down and not at the last position
      [newImages[index], newImages[index + 1]] = [
        newImages[index + 1],
        newImages[index],
      ];
    }
    setImages(newImages); // Update the state with reordered images
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-2xl rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form className="space-y-6">
        {/* Product Image Section */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Image
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Maximum 6 Images. Drag thumbnail to re-order.
          </p>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          />
          {/* Display uploaded images with reordering buttons */}
          <div className="flex space-x-2 mt-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  width={20}
                  height={20}
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Preview"
                  className="h-20 w-20 object-cover rounded border"
                />
                {/* Reorder buttons */}
                <div className="absolute -top-2 -right-2 flex space-x-1">
                  <button
                    type="button"
                    onClick={() => handleImageReorder(index, "up")}
                    className="bg-gray-200 p-1 rounded"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => handleImageReorder(index, "down")}
                    className="bg-gray-200 p-1 rounded"
                  >
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render input fields dynamically */}
        {fields.map((field, index) => (
          <div key={index}>
            <label className="block text-sm font-medium mb-1">
              {/* display Label Dynamically & then * mark if field is required*/}
              {field.label}
              {field.required && (
                <span className="text-red-500 font-bold"> * </span>
              )}
              {/* Indicate required fields */}
            </label>
            <input
              type={field.type}
              required={field.required}
              className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
        ))}

        {/* Brand Dropdown  */}
        <div>
          <label className="block text-sm font-medium mb-1">Brand </label>
          <select className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none">
            <option value="">Select Registered Brand</option>
            <option value="brand 1">Wholesale House</option>
            <option value="brand 2">Puma</option>
            <option value="brand 3">Gucci</option>
          </select>
        </div>

        {/* Tax Dropdown */}
        <div className="flex justify-evenly">
          <div className="w-60">
            <label className="block text-sm font-medium mb-1">Tax</label>
            <select className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none">
              <option value="">Select Tax Rate</option>
              <option value="Tax 1">0 %</option>
              <option value="Tax 2">18 %</option>
              <option value="Tax 3">24 %</option>
            </select>
          </div>

          {/* HSN Code Field fetch From server  */}
          <div className="w-60">
            <label
              htmlFor="HSN code"
              className=" block text-sm font-medium mb-1"
            >
              HSN Code
            </label>
            <input
              type="text"
              name="hsncode"
              id="hsncode"
              className=" block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Categories Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Categories</label>
          <select className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none">
            <option value="">Select Category</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
          </select>
        </div>

        {/* Payment Mode Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Payment Mode</label>
          <select className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none">
            <option value="">Select Default Payment Mode</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div>

        {/* Net Quantity */}
        <div>
          <label
            htmlFor="Net Quantity"
            className=" block text-sm font-medium mb-1"
          >
            Net Quantity
          </label>
          <input
            type="text"
            name="netquantity"
            id="netquantity"
            className=" block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Description Textarea */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
