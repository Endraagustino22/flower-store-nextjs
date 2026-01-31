import Link from "next/link";

export default function ProductCard({ flower }: any) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img src={flower.image} alt={flower.name} className="rounded" />
      <h3 className="font-bold mt-2">{flower.name}</h3>
      <p className="text-pink-600 font-semibold">
        Rp {flower.price.toLocaleString()}
      </p>
      <Link
        href={`/products/${flower.id}`}
        className="text-sm text-blue-500 mt-2 inline-block"
      >
        Lihat Detail
      </Link>
    </div>
  );
}
