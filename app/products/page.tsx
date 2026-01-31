import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { flowers } from "@/data/flowers";

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {flowers.map((flower) => (
          <ProductCard key={flower.id} flower={flower} />
        ))}
      </div>
    </>
  );
}
