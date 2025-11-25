import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#EAD9CC] mt-12 py-10 text-[#4C3F39] border-t border-[#D9B7A0]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h3 className="text-xl font-bold text-[#4C3F39]">Beads & Bits</h3>
          <p className="text-sm mt-2 text-[#6A554A]">
            Handcrafted jewelry made with love in Kenya.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://www.instagram.com/beads_n.bits/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B48F76] transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@beads_n_bits"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B48F76] transition"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#4C3F39] mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-[#6A554A]">
            <li><Link href="/" className="hover:text-[#B48F76]">Home</Link></li>
            <li><Link href="/products" className="hover:text-[#B48F76]">Products</Link></li>
            <li><Link href="/wishlist" className="hover:text-[#B48F76]">Wishlist</Link></li>
            <li><Link href="/cart" className="hover:text-[#B48F76]">Cart</Link></li>
            <li><Link href="/contact" className="hover:text-[#B48F76]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-[#4C3F39] mb-2">Contact</h4>
          <ul className="text-sm text-[#6A554A] space-y-1">
            <li>Email: support@beadsnbits.co.ke</li>
            <li>Phone: +254 712 345 678</li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs mt-8 text-[#6A554A]">
        &copy; {new Date().getFullYear()} Beads & Bits. All rights reserved.
      </div>
    </footer>
  );
}
