import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-8 text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Branding */}
        <div>
          <h3 className="text-xl font-bold text-purple-700">Beads & Bits</h3>
          <p className="text-sm mt-2">Handcrafted jewelry made with love in Kenya.</p>

          {/* Socials */}
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://www.instagram.com/beads_n.bits/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@beads_n.bits"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/wishlist">Wishlist</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>Email: support@beadsnbits.co.ke</li>
            <li>Phone: +254 712 345 678</li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-6 text-gray-500">
        &copy; {new Date().getFullYear()} Beads & Bits. All rights reserved.
      </div>
    </footer>
  );
}
