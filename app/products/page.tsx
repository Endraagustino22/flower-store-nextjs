import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { flowers } from "@/data/flowers";

export default function Products() {
  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Our Flower Collection 🌸
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose the perfect flowers for every moment. Fresh, beautiful, and delivered with love.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {flowers.map((flower) => (
            <div
              key={flower.id}
              className="transform transition duration-300 hover:scale-105"
            >
              <ProductCard flower={flower} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
