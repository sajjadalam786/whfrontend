"use client";

import { useState } from "react";
// import Image from "next/image";

const AddVendorForm = () => {
  interface VendorFormData {
    firstName: string;
    lastName: string;
    email: string;
    whatsappNumber: string;
    alternatePhone: string;
    shopAddress: string;
    shopLandmark: string;
    shopName: string;
    shopFrontImage: File | null;
    password: string;
    confirmPassword: string;
    upiAddress: string;
  }

  const [formData, setFormData] = useState<VendorFormData>({
    firstName: "",
    lastName: "",
    email: "",
    whatsappNumber: "",
    alternatePhone: "",
    shopAddress: "",
    shopLandmark: "",
    shopName: "",
    shopFrontImage: null,
    password: "",
    confirmPassword: "",
    upiAddress: "",
  });

  /**
   * The function `handleInputChange` is used in TypeScript React to update form data based on user
   * input.
   * @param e - The `e` parameter in the `handleInputChange` function is of type
   * `React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>`. This means it is an event object that
   * represents a change in an input element, such as a text input field or a text area. It contains
   * information about the event,
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        shopFrontImage: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6">
      <h1 className="text-2xl font-bold mb-6">Add New Vendor</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="input-group">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="whatsappNumber"
              className="block text-sm font-medium text-gray-700"
            >
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="alternatePhone"
              className="block text-sm font-medium text-gray-700"
            >
              Alternate Phone
            </label>
            <input
              type="tel"
              id="alternatePhone"
              name="alternatePhone"
              value={formData.alternatePhone}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Shop Information */}
          <div className="input-group col-span-full">
            <label
              htmlFor="shopAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Shop Address
            </label>
            <textarea
              id="shopAddress"
              name="shopAddress"
              value={formData.shopAddress}
              onChange={handleInputChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="shopLandmark"
              className="block text-sm font-medium text-gray-700"
            >
              Shop Landmark
            </label>
            <input
              type="text"
              id="shopLandmark"
              name="shopLandmark"
              value={formData.shopLandmark}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="shopName"
              className="block text-sm font-medium text-gray-700"
            >
              Shop Name
            </label>
            <input
              type="text"
              id="shopName"
              name="shopName"
              value={formData.shopName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="shopFrontImage"
              className="block text-sm font-medium text-gray-700"
            >
              Shop Front Image
            </label>
            <input
              type="file"
              id="shopFrontImage"
              name="shopFrontImage"
              onChange={handleImageUpload}
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="input-group">
            <label
              htmlFor="upiAddress"
              className="block text-sm font-medium text-gray-700"
            >
              UPI Address
            </label>
            <input
              type="text"
              id="upiAddress"
              name="upiAddress"
              value={formData.upiAddress}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Vendor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVendorForm;
