"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

import "aos/dist/aos.css";

const OuStoryPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-lvh animate-page">
      <section className="relative w-full h-lvh overflow-hidden">
        <video
          src="/about-hero.mp4"
          autoPlay
          loop
          preload="auto"
          muted
          width={500}
          height={500}
          className="w-full sticky top-0 left-0 h-lvh object-cover md:h-auto"
        />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col gap-12 items-center justify-center bg-[#1E1E1Edd]">
          <h1
            className="md:text-7xl text-4xl text-white font-black text-center sticky top-0 left-0"
            data-aos="zoom-out-up"
            data-aos-duration="2200"
          >
            Story of the coffee place: its origins, philosophy, and passion for
            coffee
          </h1>
        </div>
      </section>
      <section className="flex flex-col gap-10 items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:w-3/4 p-3 md:p-10">
          <Image
            src={"/c5.jpeg"}
            alt="hero"
            width={300}
            height={300}
            className=" rounded-lg"
            data-aos="zoom-out-up"
          />
          <p className="text-xl" data-aos="zoom-out-up" data-aos-delay="400">
            <span className="text-2xl font-black">
              Welcome to The Daily Grind
            </span>
            , a place where passion meets perfection, and every cup tells a
            story. Our journey began with a simple dream: to create a haven for
            coffee lovers, a place where the aroma of freshly roasted beans and
            the warmth of community blend seamlessly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:w-3/4 p-3 md:p-10">
          <Image
            src={"/c3.jpeg"}
            alt="hero"
            width={300}
            height={300}
            className=" rounded-lg"
            data-aos="zoom-out-up"
          />
          <p className="text-xl" data-aos="zoom-out-up" data-aos-delay="400">
            The Daily Grind is built on a foundation of unwavering commitment to
            quality and craftsmanship. From the moment our beans arrive to the
            second your cup is poured, every step is executed with precision and
            care. Our baristas are not just employees; they are artisans,
            trained to create coffee experiences that exceed expectations. They
            understand the nuances of each bean and brewing method, ensuring
            that every cup is a masterpiece.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OuStoryPage;
