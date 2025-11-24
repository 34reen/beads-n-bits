"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost/backend";

  // Function to clean and construct proper image URL
  const getImageUrl = (imagePath: string) => {
  // If it's missing the admin/uploads path, add it
  if (imagePath.includes('http://localhost/backend/') && 
      !imagePath.includes('/admin/uploads/')) {
    const filename = imagePath.replace('http://localhost/backend/', '');
    return `${backendUrl}/admin/uploads/${filename}`;
  }
  // If it's just a filename (no http), construct full URL
  if (!imagePath.includes('http')) {
    return `${backendUrl}/admin/uploads/${imagePath}`;
  }
  // If it's already a proper URL, use it as is
  return imagePath;
};

  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  };

  useEffect(() => {
    loadCart();

    // 🔄 Listen for cart changes in localStorage
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        loadCart();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <FaShoppingCart className="mx-auto mb-4 text-6xl text-gray-400" />
        <h2 className="text-xl font-semibold text-gray-600">Your cart is empty.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex gap-4 items-center">
              <Image
                src={getImageUrl(item.image)}
                alt={item.name}
                width={80}
                height={80}
                className="object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">KES {item.price.toLocaleString('en-KE', { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={item.quantity}
                min={1}
                className="w-16 border px-2 py-1 rounded"
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value) || 1)
                }
              />
              <button
                className="text-red-500 text-sm"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="text-right mt-6">
          <p className="text-lg font-semibold">
            Total: <span className="text-purple-700">KES {total.toLocaleString()}</span>
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}