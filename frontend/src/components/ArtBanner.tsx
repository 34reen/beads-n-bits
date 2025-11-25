// src/components/ArtBanner.tsx
import Image from "next/image";

export default function ArtBanner() {
  return (
    <section className="py-16 bg-[#F7F3EF]">
  <div className="w-full px-0">
    <div className="relative bg-[#EAD9CC] rounded-2xl p-10 shadow-md border border-[#D9B7A0] overflow-hidden">


          {/* Floating Circular Image */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-[#F7F3EF]">
              <Image
                src="/images/artbanner.jpeg"
                alt="Elegant jewelry collection"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXT SECTION */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[#4C3F39] mb-6 leading-tight">
              Jewelry That <br />
              <span className="text-[#6A554A]">Celebrates You</span>
            </h2>

            <p className="text-xl text-[#6A554A] mb-8 leading-relaxed">
              Discover pieces designed to highlight your beauty and boost your confidence.
              Because every moment deserves a touch of elegance.
            </p>

            <button className="bg-[#B48F76] hover:bg-[#8C7468] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              Find Your Perfect Piece
            </button>
          </div>

          {/* MOBILE IMAGE (Centered Under Text) */}
          <div className="mt-10 flex justify-center lg:hidden">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg border-4 border-[#F7F3EF]">
              <Image
                src="/images/artbanner.jpeg"
                alt="Elegant jewelry collection"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
