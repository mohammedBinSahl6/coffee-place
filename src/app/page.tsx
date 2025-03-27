"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

import "aos/dist/aos.css";

import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animate-page">
      <section className="relative w-full h-lvh overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="hero"
          width={500}
          height={500}
          className="w-full fixed top-0 left-0 "
          unoptimized
        />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-[#1E1E1Edd]">
          <h1
            className="text-8xl text-white font-black text-center fixed top-1/3 left-0"
            data-aos="zoom-in-up"
            data-aos-duration="2200"
          >
            The Daily Grind: Your Coffee Sanctuary
          </h1>
        </div>
      </section>
      <section className="relative w-full h-lvh overflow-hidden">
        <Image
          src="/section1.jpg"
          alt="hero"
          width={500}
          height={500}
          className="w-full sticky top-0 left-0"
          unoptimized
        />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-[#1E1E1Edd]">
          <h1
            className="text-8xl text-white font-black text-center sticky top-0 left-0"
            data-aos="zoom-out-up"
            data-aos-duration="2200"
          >
            The Art of the Bean: Our Coffee Philosophy.
          </h1>
        </div>
      </section>
      <section className="relative w-full h-lvh overflow-hidden">
        <Image
          src="/section2.jpg"
          alt="hero"
          width={500}
          height={500}
          className="w-full sticky top-0 left-0"
          unoptimized
        />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-[#1E1E1Ebb]">
          <h1
            className="text-6xl text-white font-black text-center w-1/2 relative"
            data-aos="zoom-out-up"
          >
            From our roastery to your cup, excellence is our standard.
          </h1>
          <Image
            data-aos="flip-left"
            data-aos-delay="100"
            src="/c1.jpeg"
            alt="hero"
            width={500}
            height={500}
            className="w-72 rounded-lg absolute left-5 top-5 transition-all hover:blur-xs hover:scale-110"
          />
          <Image
            data-aos="flip-left"
            data-aos-delay="300"
            src="/c2.jpeg"
            alt="hero"
            width={500}
            height={500}
            className="w-64 rounded-lg absolute left-6 bottom-5 transition-all hover:blur-xs hover:scale-110"
          />
          <Image
            data-aos="flip-left"
            data-aos-delay="600"
            src="/c3.jpeg"
            alt="hero"
            width={500}
            height={500}
            className="w-72 rounded-lg absolute right-5 top-8 transition-all hover:blur-xs hover:scale-110"
          />
          <Image
            data-aos="flip-left"
            data-aos-delay="900"
            src="/c4.jpeg"
            alt="hero"
            width={500}
            height={500}
            className="w-52 rounded-lg absolute right-5 bottom-10 transition-all hover:blur-xs hover:scale-110"
          />
          <Image
            data-aos="flip-left"
            data-aos-delay="1200"
            src="/c5.jpeg"
            alt="hero"
            width={500}
            height={500}
            className="w-52 rounded-lg absolute left-1/3 bottom-0 transition-all hover:blur-xs hover:scale-110"
          />
        </div>
      </section>
      <section className="relative w-full h-lvh overflow-hidden">
        <video
          src="/share-video.mp4"
          autoPlay
          loop
          preload="auto"
          muted
          width={500}
          height={500}
          className="w-full sticky top-0 left-0"
        />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col gap-12 items-center justify-center bg-[#1E1E1Edd]">
          <h1
            className="text-7xl text-white font-black text-center sticky top-0 left-0"
            data-aos="zoom-out-up"
            data-aos-duration="2200"
          >
            Immerse yourself in coffee culture: Workshops, tastings, and more.
          </h1>
          <Link href="/clients" className="w-1/3">
            <Button
              variant="secondary"
              className="p-8 text-base w-full mt-10"
              data-aos="zoom-in-up"
              data-aos-duration="2200"
              data-aos-delay="400"
            >
              Share
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
