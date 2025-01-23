"use client";

import { FC, useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
}

const AddSubSubCategory: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mainCategoryId: "",
    subCategoryId: "",
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string>("");

  // You would typically fetch these from an API
  const mainCategories: Category[] = [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Fashion" },
  ];

  const subCategories: SubCategory[] = [
    { id: "1", name: "Phones" },
    { id: "2", name: "Laptops" },
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Add Sub Sub Category
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Sub Sub Category Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Sub Sub Category Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Main Category Dropdown */}
            <div>
              <label
                htmlFor="mainCategoryId"
                className="block text-sm font-medium text-gray-700"
              >
                Main Category
              </label>
              <select
                id="mainCategoryId"
                name="mainCategoryId"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.mainCategoryId}
                onChange={handleInputChange}
              >
                <option value="">Select Main Category</option>
                {mainCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sub Category Dropdown */}
            <div>
              <label
                htmlFor="subCategoryId"
                className="block text-sm font-medium text-gray-700"
              >
                Sub Category
              </label>
              <select
                id="subCategoryId"
                name="subCategoryId"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.subCategoryId}
                onChange={handleInputChange}
              >
                <option value="">Select Sub Category</option>
                {subCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sub Sub Category Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                    <div className="mb-4">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        width={200}
                        height={200}
                        className="mx-auto object-cover"
                      />
                    </div>
                  ) : (
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Sub Sub Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubSubCategory;
