import Navbar from "@/components//Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold text-pink-600">
          Selamat Datang di MonyFlower SOLO
        </h2>
        <p className="mt-4 text-gray-600">
          Temukan bunga terbaik untuk orang tersayang 💐
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block bg-pink-500 text-white px-6 py-2 rounded"
        >
          Lihat Katalog
        </Link>
      </div>
    </>
  );
}
