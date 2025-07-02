// components/Navbar.tsx

"use client";
import Link from "next/link";
import { JSX, useState } from "react";

export default function Navbar() : JSX.Element{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-purple-700">
            Beads & Bits
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/products" className="hover:text-purple-600">
              Products
            </Link>
            <Link href="/wishlist" className="hover:text-purple-600">
              Wishlist
            </Link>
            <Link href="/cart" className="hover:text-purple-600">
              Cart
            </Link>
            <Link href="/contact" className="hover:text-purple-600">
              Contact
            </Link>

          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-purple-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-2">
            <Link href="/products" className="hover:text-purple-600">
              Products
            </Link>
            <Link href="/wishlist" className="hover:text-purple-600">
              Wishlist
            </Link>
            <Link href="/cart" className="hover:text-purple-600">
              Cart
            </Link>
            <Link href="/contact" className="hover:text-purple-600">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
