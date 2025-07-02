"use client";
import { useEffect, useState } from "react";
import { products } from "@/constants/dummyData";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  const filteredProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Your WishList</h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">You have not added any items to your wishlist yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
