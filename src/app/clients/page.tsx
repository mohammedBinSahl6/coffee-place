"use client";

import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

import ClientsReviewSlider from "./ClientsReviewSlider";

const cupsSources = [
  "/menu/Affogato.jpeg",
  "/menu/Americano.jpeg",
  "/menu/Cappuccino.jpeg",
  "/menu/Classic-Espresso.jpeg",
  "/menu/Caramel-Macchiato.jpeg",
  "/menu/Cold-Brew.jpeg",
  "/menu/Mocha.jpeg",
  "/menu/Vanilla-Latte.jpeg",
  "/menu/Latte.jpeg",
];

const ClientsPage = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="min-h-lvh flex flex-col  gap-10 items-center justify-center animate-page">
      <section className="relative w-full h-lvh overflow-hidden">
        <Image
          src="/clients-hero.jpg"
          alt="hero"
          width={500}
          height={500}
          className="w-full sticky top-0 left-0 h-lvh object-cover md:h-auto"
          unoptimized
        />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-[#1E1E1Edd]">
          <ClientsReviewSlider />
        </div>
      </section>
      <section className="relative w-full min-h-lvh flex flex-col md:p-10 p-2 items-center justify-center overflow-hidden gap-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-bold">Share your coffee</h1>
          <Image
            src="/share-coffee.webp"
            alt="sharing your coffee"
            width={300}
            height={300}
            className="w-96 rounded-2xl"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-wrap items-center">
          <div
            className="md:w-[150px] md:h-[150px] w-32 h-32 border hover:scale-105 transition-all flex flex-col items-center justify-center"
            onClick={() => inputRef.current?.click()}
          >
            <Plus size={50} color="#222" />
          </div>
          {cupsSources.map((cup) => (
            <Image key={cup} src={cup} alt="cup" width={150} height={150} className="md:w-[150px] md:h-[150px] w-32 h-32"/>
          ))}
        </div>
        <input type="file" className="hidden" ref={inputRef} />
      </section>
    </div>
  );
};

export default ClientsPage;
