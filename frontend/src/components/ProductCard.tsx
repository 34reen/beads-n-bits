"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Product } from "@/types"; // Shared type

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost/backend";

// Clean the image path to ensure it's just a filename
const getCleanImageUrl = (imagePath: string) => {
  // If it's already a messed up URL, extract just the filename
  if (imagePath.includes('http://localhost/backend/')) {
    // Extract the last part after the last slash
    const parts = imagePath.split('/');
    const filename = parts[parts.length - 1];
    return `${backendUrl}/admin/uploads/${filename}`;
  }
  // If it's just a filename, use it directly
  return `${backendUrl}/admin/uploads/${imagePath}`;
};

const imageUrl = product.image ? getCleanImageUrl(product.image) : "/placeholder.png";

 /*
===========================================================
                 🔥 WISHLIST SECTION (UPDATED)
===========================================================
*/

// Load wishlist state
useEffect(() => {
  const wishlist: string[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
  setIsWishlisted(wishlist.includes(product.id)); // No need for toString() now
}, [product.id]);

// Toggle wishlist + backend sync
const toggleWishlist = async () => {
  const wishlist: string[] = JSON.parse(localStorage.getItem("wishlist") || "[]");

  let updatedWishlist: string[];

  if (isWishlisted) {
    // Remove from wishlist
    updatedWishlist = wishlist.filter((id) => id !== product.id); // Direct comparison

    try {
      await fetch(`${backendUrl}/store-api/wishlist/remove-from-wishlist.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          productId: product.id, // Should work with string IDs
        }),
      });
    } catch (error) {
      console.error("Failed to sync remove:", error);
    }
  } else {
    // Add to wishlist
    updatedWishlist = [...wishlist, product.id]; // Direct assignment

    try {
      await fetch(`${backendUrl}/store-api/wishlist/add-to-wishlist.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          productId: product.id, // Should work with string IDs
        }),
      });
    } catch (error) {
      console.error("Failed to sync add:", error);
    }
  }

  // Save to localStorage
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

  // Update UI
  setIsWishlisted(!isWishlisted);
};

/*
===========================================================
                       END WISHLIST SECTION
===========================================================
*/

  type CartItem = Product & { quantity: number };

 // Add to cart logic
const handleAddToCart = async () => {
  await fetch(`${backendUrl}/store-api/cart/add-to-cart.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      productId: product.id,
      quantity: 1,
    }),
  });

  const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const itemIndex = existingCart.findIndex((item) => item.id === product.id);

  // Clean up the image URL to ensure it's just the filename
  const cleanImageUrl = (imagePath: string) => {
    // If it contains the double URL, extract just the filename
    if (imagePath.includes('http://localhost/backend/http://localhost/backend/')) {
      return imagePath.replace('http://localhost/backend/http://localhost/backend/uploads/', '');
    }
    // If it's a full URL, extract just the filename
    if (imagePath.includes('http://localhost/backend/uploads/')) {
      return imagePath.replace('http://localhost/backend/uploads/', '');
    }
    // If it's a full URL with admin path, extract just the filename
    if (imagePath.includes('http://localhost/backend/admin/uploads/')) {
      return imagePath.replace('http://localhost/backend/admin/uploads/', '');
    }
    // Otherwise return as is (should be just filename)
    return imagePath;
  };

  const cleanProduct = {
    ...product,
    image: cleanImageUrl(product.image)
  };

  let updatedCart;
  if (itemIndex > -1) {
    existingCart[itemIndex].quantity += 1;
    updatedCart = existingCart;
  } else {
    updatedCart = [...existingCart, { ...cleanProduct, quantity: 1 }];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  alert(`${product.name} added to cart!`);
};
return (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">

    <Image
      src={imageError ? "/placeholder.png" : imageUrl}
      alt={product.name}
      width={400}
      height={300}
      className="w-full object-cover h-60"
      onError={() => setImageError(true)}
      priority={true}
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
  Ksh {Math.round(product.price).toLocaleString()}
      </p>
     <p className="text-sm text-gray-500 mt-1">
  ⭐ {(Number(product.rating) || 0).toFixed(1)} / 5
</p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
      >
        Add to Cart
      </button>
    </div>
  </div>
  );}