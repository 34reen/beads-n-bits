"use client";
import { useEffect, useState } from "react";
import { products } from "@/constants/dummyData";
import ProductCard from "@/components/ProductCard";
import { TbShoppingCartHeart } from "react-icons/tb";

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

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <TbShoppingCartHeart className="mx-auto mb-4 text-6xl text-gray-400" />
        <h2 className="text-xl font-semibold text-gray-600">
          Your wishlist is empty.
        </h2>
        <p className="text-gray-500 mt-2">
          Looks like you have not added anything yet.
        </p>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
