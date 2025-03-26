import Image from "next/image";
import React from "react";
import ClientsReviewSlider from "./ClientsReviewSlider";

const ClientsPage = () => {
  return (
    <div className="min-h-lvh flex flex-col items-center justify-center animate-page">
      <section className="relative w-full h-lvh overflow-hidden">
        <Image
          src="/clients-hero.jpg"
          alt="hero"
          width={500}
          height={500}
          className="w-full sticky top-0 left-0"
          unoptimized
        />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-[#1E1E1Edd]">
            <ClientsReviewSlider />
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
