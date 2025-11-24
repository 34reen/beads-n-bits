"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";


const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function HeroSlider() {
  return (
    <div className="w-full h-[500px] relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[500px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <Link
                href="/products"
                 className="text-black text-x1 font-bold hover:underline transition"
              >
                Shop Now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
