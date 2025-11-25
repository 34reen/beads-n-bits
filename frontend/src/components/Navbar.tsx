// components/Navbar.tsx

"use client";
import Link from "next/link";
import { JSX, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#F7F3EF] border-b border-[#D9B7A0] sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#4C3F39]">
            Beads & Bits
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/" className="text-[#4C3F39] hover:text-[#B48F76] transition">
              Home
            </Link>
            <Link href="/products" className="text-[#4C3F39] hover:text-[#B48F76] transition">
              Products
            </Link>
            <Link href="/wishlist" className="text-[#4C3F39] hover:text-[#B48F76] transition">
              Wishlist
            </Link>
            <Link href="/cart" className="text-[#4C3F39] hover:text-[#B48F76] transition">
              Cart
            </Link>
            <Link href="/contact" className="text-[#4C3F39] hover:text-[#B48F76] transition">
              Contact
            </Link>

            <Link href="/profile">
              <FaUserCircle
                size={28}
                className="text-[#4C3F39] hover:text-[#B48F76] transition-colors"
              />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#4C3F39] text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 py-4 text-sm font-medium text-[#4C3F39]">
            <Link href="/" className="hover:text-[#B48F76] transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-[#B48F76] transition">
              Products
            </Link>
            <Link href="/wishlist" className="hover:text-[#B48F76] transition">
              Wishlist
            </Link>
            <Link href="/cart" className="hover:text-[#B48F76] transition">
              Cart
            </Link>
            <Link href="/contact" className="hover:text-[#B48F76] transition">
              Contact
            </Link>
            <Link href="/profile" className="hover:text-[#B48F76] transition">
              Profile
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
