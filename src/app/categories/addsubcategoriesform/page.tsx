"use client";

// components/AddSubCategoryForm.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
}

interface AddSubCategoryFormProps {
  categories: Category[];
}

const AddSubCategoryForm = ({ categories }: AddSubCategoryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    mainCategory: "",
    image: null as File | null,
  });
  const [preview, setPreview] = useState<string>("");

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
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Add Sub Category</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sub Category Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sub Category Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          {/* Main Category Dropdown */}
          <div>
            <label
              htmlFor="mainCategory"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Main Category
            </label>

            {/* <select
              id="mainCategory"
              name="mainCategory"
              value={formData.mainCategory}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select> */}

            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sub Category Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {preview ? (
                  <div className="relative h-40 w-40 mx-auto">
                    <Image
                      src={preview}
                      alt="Preview"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
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
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="sr-only"
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  <span>Upload a file</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Sub Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubCategoryForm;
