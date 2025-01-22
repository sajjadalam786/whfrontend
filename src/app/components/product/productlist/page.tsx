import ProductTable from "../producttable/page";
import "../../../styles/components.css";

export default function Page() {
  const products = [
    {
      id: "1",
      sku: "1595",
      name: "Banana Chips",
      category: "Snacks",
      salePrice: 400.0,
      mrp: 500.0,
      quantity: 1,
      thumbnail: "/wholesale house logo.png",
    },
    // ... more products
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Product
        </button>
      </div>
      <ProductTable products={products} />

      {/* testing custom css */}
      <button className="btn">Click Me Testing external file</button>
    </div>
  );
}
