import Navbar from "@/components//Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative text-center  min-h-[50vh] md:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/flower-background.jpg')] bg-cover bg-center"></div>

        {/* Overlay untuk mengurangi cahaya */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten */}
        <div className="relative z-10 px-4">
          <h2 className="font-bold text-pink-100 font-GreatVibes text-5xl sm:text-7xl md:text-8xl">
            Mony Flower
          </h2>

          <p className="mt-5 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200">
            Temukan bunga terbaik untuk orang tersayang
          </p>

          <Link
            href="/products"
            className="btn mt-5 text-white bg-pink-400 hover:bg-pink-700 border-0 font-Montserrat">
            Lihat Katalog
          </Link>

        </div>

      </div>

    </>
  );
}
