import { flowers } from '@/data/flowers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Cari produk berdasarkan id
    const product = flowers.find(item => item.id === id);

    if (!product) {
        return (
            <div className="min-h-screen bg-linear-to-b from-rose-50 to-white">
                <Navbar />
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-3xl font-bold text-red-500">Produk tidak ditemukan 😢</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-rose-50 to-white">
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Gambar */}
                <div className="flex items-center justify-center rounded-lg p-6">
                    <img src={product.image} alt={product.name} className="object-contain w-64 h-64" />
                </div>

                {/* Konten */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4 text-pink-700">{product.name}</h1>
                    <p className="text-gray-700 mb-2">ID Produk: {product.id}</p>
                    <p className="text-xl font-semibold text-pink-600 mb-4">
                        Rp {product.price.toLocaleString('id-ID')}
                    </p>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
                        Beli Sekarang
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
