"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { TbShoppingCartHeart } from "react-icons/tb";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost/backend";

  useEffect(() => {
    // Load wishlist
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }

    // Fetch real products from backend
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${backendUrl}/store-api/products/get-products.php`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [backendUrl]);

  const filteredProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

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