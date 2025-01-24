"use client";

// components/ToggleSwitch.tsx
import { useState } from "react";

// Define the interface for the props of the ToggleSwitch component
interface ToggleSwitchProps {
  label: string; // The label displayed next to the toggle switch
  description?: string; // Optional description text below the label
  defaultChecked?: boolean; // Default state of the toggle (on/off)
  onChange?: (checked: boolean) => void; // Optional callback function when the toggle changes state
}

// The functional component for the ToggleSwitch
const ToggleSwitch = ({
  label,
  description,
  defaultChecked = true, // Default state is set to "true"
  onChange,
}: ToggleSwitchProps) => {
  // useState to manage the checked state of the toggle switch
  const [isChecked, setIsChecked] = useState(defaultChecked);

  // Function to handle toggle click
  const handleToggle = () => {
    const newValue = !isChecked; // Toggle the current state
    setIsChecked(newValue); // Update the state
    if (onChange) {
      onChange(newValue); // Call the onChange callback if provided
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 px-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      {/* Label and optional description */}
      <div className="flex flex-col flex-grow mb-3 sm:mb-0">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {description && (
          <span className="text-xs text-gray-500">{description}</span>
        )}
      </div>

      {/* Toggle switch button */}
      <button
        type="button"
        role="switch" // ARIA role for accessibility
        aria-checked={isChecked} // ARIA attribute reflecting the toggle's state
        onClick={handleToggle} // Trigger toggle state change on click
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          isChecked ? "bg-indigo-600" : "bg-gray-200"
        }`}
      >
        <span className="sr-only">Toggle {label}</span>{" "}
        {/* Screen reader only text for better accessibility */}
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            isChecked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

// Example usage in a page or another component
const ProductFields = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
      <div className="px-4 py-5 sm:p-6">
        {/* Section title */}
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Product Fields ( Attributes )
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          These are the optional fields which are available for you. You can
          also add more fields as per your product needs <br /> <br />
        </p>
        <hr />

        {/* List of toggle switches */}
        <div className="mt-6 space-y-1">
          {/* Each ToggleSwitch component represents a configurable field */}
          <ToggleSwitch
            label="Purchase Price"
            description="Goods purchase price (visible to you only)"
          />

          <ToggleSwitch
            label="Summary"
            description="2-3 Highlight points e.g., 4 Star Frost Free Refrigerator."
          />

          <ToggleSwitch
            label="Description"
            description="Product detailed information"
          />

          <ToggleSwitch label="Brand" description="product brand information" />

          <ToggleSwitch
            label="Barcode"
            description="ISBN, UPC or other unique code (visible to you only)"
          />

          <ToggleSwitch
            label="HSN"
            description="6 digit code, helpful in GST bills"
          />

          <ToggleSwitch
            label="Min Quantity"
            description="Minimum quantity to be sold per order"
          />

          <ToggleSwitch
            label="Max Quantity"
            description="Maximum quantity to be sold per order"
          />

          <ToggleSwitch
            label="Product ID"
            description="Helpful in identifying the product (visible to you only)"
          />

          <ToggleSwitch
            label="Shipping Weight"
            description="Helpful for weight based shipping"
          />

          <ToggleSwitch
            label="Condition"
            description="Condition of the product e.g New, Used"
          />

          <ToggleSwitch
            label="Gender"
            description="Gender for whom your product is designed"
          />

          <ToggleSwitch
            label="Age Group"
            description="Demographic that your product is designed for"
          />

          <ToggleSwitch label="MPN" description="Manufacturer Part Number" />

          <ToggleSwitch
            label="GTIN"
            description="Unique Global Trade Item Number"
          />

          <ToggleSwitch
            label="Material"
            description="Main fabric or material of the product"
          />

          <ToggleSwitch
            label="Pattern"
            description="Describes the pattern or graphic print on your product"
          />

          <ToggleSwitch
            label="Sync to Google"
            description="Control whether to Sync / Don't Sync a product to Google Merchant Center"
          />

          {/* <ToggleSwitch label="" description="" /> */}

          {/* Add more toggle switches as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProductFields;
