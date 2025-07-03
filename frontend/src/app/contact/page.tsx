"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ✅ You can connect to your backend or use a service like Formspree, EmailJS, etc.
    console.log("Submitted:", form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        We’d love to hear from you! Whether you have a question about a product, order, or just want to say hello.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-600" />
            <span>Nairobi, Kenya</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-purple-600" />
            <span>+254 712 345 678</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-600" />
            <span>support@beadsnbits.co.ke</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
