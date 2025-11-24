"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/backend/store-api/auth/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          role: "user", // default role; could be "admin" for yourself if needed
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Registration successful! You can now log in.");
        setUsername("");
        setEmail("");
        setPassword("");
        setMessage("Success! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        {message && <p className="text-red-500 mb-2">{message}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
