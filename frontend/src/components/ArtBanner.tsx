// src/components/ArtBanner.tsx
import Image from "next/image";

export default function ArtBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/images/artbanner.jpeg"
                alt="Elegant jewelry collection"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg border border-pink-100">
              <h2 className="text-4xl font-bold text-pink-800 mb-6">
                Jewelry That<br />
                <span className="text-rose-600">Celebrates You</span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Discover pieces designed to highlight your beauty and boost your confidence. 
                Because every moment deserves a touch of elegance.
              </p>

              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Find Your Perfect Piece
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}