import Image from "next/image";
import {flowers} from "../data/flowers"

export default function Card() {
    return (

        <div className="pb-20">

            <h1 className="text-center py-4 mt-10 md:mt-16 text-3xl">Produk Kami</h1>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:px-10">

                {/* CARD */}
                {flowers.map((flower) => (
                <div className="card shadow-sm" key={flower.id}>
                    <figure>
                        <div className="relative aspect-5/6 w-full bg-gray-100">
                            <Image
                                src={flower.image}
                                alt="product"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </figure>

                    <div className="p-3">
                        <h2 className="card-title text-xs md:text-sm font-medium">
                            {flower.name}
                        </h2>
                        <p className="text-xs md:text-sm text-gray-500">
                            Rp. {flower.price.toLocaleString('id-ID')}  
                        </p>
                    </div>
                </div>
                ))}
                {/* END CARD */}

            </div>
        </div>

    );
}