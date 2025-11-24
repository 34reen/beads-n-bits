"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types"; // ✅ Correct import

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost/backend/store-api/products/get-products.php"
        );

        const data = await res.json();

        // Ensure data is an array
        if (!Array.isArray(data)) {
          console.error("Invalid products format:", data);
          setProducts([]);
          return;
        }

        const updatedData: Product[] = data.map((p) => ({
          ...p,
          price: Number(p.price) || 0,
          rating: Number(p.rating) || 0,
          image:
            p.image && p.image.trim() !== ""
              ? `http://localhost/backend/${p.image}`
              : "/placeholder.png",
        }));

        setProducts(updatedData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        Our Jewelry Collection
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500 text-lg">No products available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
