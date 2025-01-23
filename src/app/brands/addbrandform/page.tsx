// Import necessary hooks from React and react-hook-form
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

// Define the structure of the form data
interface BrandFormData {
  brandName: string;
  description: string;
  logo: FileList;
  status: string;
}

const AddBrandForm = () => {
  // Initialize react-hook-form with type definitions for form data
  const {
    register, // Register input fields for form validation
    handleSubmit, // Handle form submission
    formState: { errors }, // Extract validation errors
  } = useForm<BrandFormData>();

  // State to store and display the logo preview image
  const [previewImage, setPreviewImage] = useState<string>("");

  // Handler to generate a preview of the uploaded image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onloadend = () => {
        setPreviewImage(reader.result as string); // Update the preview image state
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Handler for form submission
  const onSubmit = (data: BrandFormData) => {
    console.log(data); // Log form data for debugging
    // TODO: Add API call to save brand details
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Container for the form */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl">
        <div className="p-6">
          {/* Form Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Add New Brand
          </h1>

          {/* Form element with react-hook-form's handleSubmit */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Brand Name Input */}
            <div>
              <label
                htmlFor="brandName"
                className="block text-sm font-medium text-gray-700"
              >
                Brand Name
              </label>

              <input
                type="text"
                {...register("brandName", {
                  required: "Brand name is required", // Validation rule
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {/* Display validation error */}
              {errors.brandName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.brandName.message}
                </p>
              )}
            </div>

            {/* Description Input */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Logo Upload Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand Logo
              </label>
              <div className="mt-1 flex items-center space-x-4">
                {/* Image Preview */}
                <div className="flex-shrink-0">
                  {previewImage ? (
                    <Image
                      width={20}
                      height={20}
                      src={previewImage}
                      alt="Preview"
                      className="h-32 w-32 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="h-32 w-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Image Preview</span>
                    </div>
                  )}
                </div>
                {/* File Input */}
                <div className="flex-1">
                  <input
                    type="file"
                    {...register("logo")}
                    onChange={handleImageChange} // Call preview handler on file selection
                    accept="image/*"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
            </div>

            {/* Status Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                {...register("status")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Brand
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBrandForm;
