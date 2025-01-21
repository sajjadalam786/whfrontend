// pages/products.tsx
import ProductTable from "../producttable/page";

interface PageProps {
  // Add any page props if needed
}

const ProductsList: React.FC<PageProps> = () => {
  const products = [
    {
      id: "1",
      name: "Banana Chips",
      sku: "1595",
      category: "Snacks",
      salePrice: 400.0,
      mrp: 500.0,
      quantity: 1,
      imageUrl: "/wholesale house logo.png",
    },
    // Add more products...
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Header Section */}
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Products
        </h1>
        <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add Product
        </button>
      </div>

      {/* Filters Section */}
      <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full">
          <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option value="">All Categories</option>
            {/* Add categories */}
          </select>
        </div>
        <div className="w-full">
          <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option value="">Status</option>
            {/* Add status options */}
          </select>
        </div>
        <div className="w-full">
          <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option value="">Sort By</option>
            {/* Add sort options */}
          </select>
        </div>
      </div>

      {/* Responsive container for the table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <ProductTable products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
