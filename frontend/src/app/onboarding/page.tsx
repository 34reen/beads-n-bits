"use client";

import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Jewelry Store</h1>
      <p className="text-gray-600 mb-8 text-center">Sign in or create an account to start shopping.</p>
      <div className="space-x-4">
        <Link href="/login">
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
