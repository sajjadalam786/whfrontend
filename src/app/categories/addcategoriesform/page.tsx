"use client";
import { useState, ChangeEvent, FormEvent, JSX } from "react";
import Image from "next/image";

interface FormData {
  categoryName: string;
  categoryImage: File | null;
}

export default function AddCategoriesForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    categoryName: "",
    categoryImage: null,
  });
  const [preview, setPreview] = useState<string | null>(null);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      categoryName: e.target.value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        categoryImage: file,
      });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const submitData = new FormData();
      submitData.append("categoryName", formData.categoryName);
      if (formData.categoryImage) {
        submitData.append("categoryImage", formData.categoryImage);
      }

      // Add your API call here
      console.log("Form Data:", submitData);

      // Reset form
      setFormData({
        categoryName: "",
        categoryImage: null,
      });
      setPreview(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Add Category
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Create a new category with name and image
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="categoryName"
                className="block text-sm font-medium text-gray-700"
              >
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                value={formData.categoryName}
                onChange={handleNameChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                placeholder="Enter category name"
                required
              />
            </div>

            {/* Image Upload Field */}
            <div className="space-y-2">
              <label
                htmlFor="categoryImage"
                className="block text-sm font-medium text-gray-700"
              >
                Category Image
              </label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-full">
                  <label
                    htmlFor="categoryImage"
                    className="flex flex-col items-center w-full px-4 py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center">
                      <svg
                        className="w-8 h-8 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                      <p className="mt-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                    <input
                      type="file"
                      id="categoryImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      required
                    />
                  </label>
                </div>

                {/* Image Preview */}
                {preview && (
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                    <Image
                      src={preview}
                      alt="Category preview"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 128px) 100vw, 128px"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPreview(null);
                        setFormData((prev) => ({
                          ...prev,
                          categoryImage: null,
                        }));
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-blue-600 disabled:cursor-not-allowed text-sm sm:text-base font-medium"
                disabled={!formData.categoryName || !formData.categoryImage}
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
