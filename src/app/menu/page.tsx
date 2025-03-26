import React from "react";
import { menu } from "./data";
import Image from "next/image";

const MenuPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-lvh bg-amber-950 animate-menu-page pt-50">
      <h1 className="text-white text-5xl mb-10 font-black">Our Menu</h1>
      <div className="flex flex-col items-center justify-center gap-10 md:w-1/2 p-3">
        {menu.map((item) => (
          <div
            key={item.title}
            className="w-full flex text-white items-center gap-2 p-3 rounded-lg bg-white/10 hover:shadow-xl hover:bg-white/20 transition-all"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="hover:scale-110 transition-all"
              />
            </div>
            <div className="flex flex-col p-5 justify-center gap-2">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-sm text-gray-200">{item.text}</p>
              <p className="text-2xl font-bold">{item.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
