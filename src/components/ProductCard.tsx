"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // ✅ Load wishlist state from localStorage
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsWishlisted(wishlist.includes(product.id));
  }, [product.id]);

  // ✅ Wishlist toggle + sync with backend
  const toggleWishlist = async () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    let updatedWishlist;
    if (isWishlisted) {
      updatedWishlist = wishlist.filter((id: string) => id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product.id];
      try {
        await fetch("http://localhost/wishlist-api/add-to-wishlist.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: 1,
            productId: parseInt(product.id),
          }),
        });
      } catch (error) {
        console.error("Failed to sync with backend:", error);
      }
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setIsWishlisted(!isWishlisted);
  };
  type CartItem = Product & {
  quantity: number;
};

  // ✅ Add to cart logic
 const handleAddToCart = () => {
  const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const itemIndex = existingCart.findIndex((item) => item.id === product.id);
  let updatedCart;

  if (itemIndex > -1) {
    existingCart[itemIndex].quantity += 1;
    updatedCart = existingCart;
  } else {
    updatedCart = [...existingCart, { ...product, quantity: 1 }];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  alert(`${product.name} added to cart!`);
};

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="w-full object-cover h-60"
      />

      {/* Wishlist Button */}
      <button
        onClick={toggleWishlist}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-105 transition"
        aria-label="Add to wishlist"
      >
        <span className={isWishlisted ? "text-red-500" : "text-gray-400"}>
          {isWishlisted ? "❤️" : "🤍"}
        </span>
      </button>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-purple-700 font-bold mt-2">
          Ksh {product.price.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          ⭐ {product.rating.toFixed(1)} / 5
        </p>

        {/* ✅ Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
