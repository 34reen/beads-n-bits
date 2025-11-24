// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeroSlider from "@/components/HeroSlider";
import FeaturedCategories from "@/components/FeaturedCategories";
import ArtBanner from "@/components/ArtBanner";

export default function Home() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/onboarding");
    } else {
      setChecking(false);
    }
  }, [router]);

  if (checking) return null;

  return (
    <main className="min-h-screen bg-purple-100">
      <HeroSlider />
      <FeaturedCategories />
      <ArtBanner />
      {/* You can add more components here later */}
    </main>
  );
}