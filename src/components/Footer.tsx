"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="w-full flex items-center flex-col gap-5 p-5 bg-amber-950 z-[1000] relative">
      <h2 className="text-white text-xl font-semibold">Coffee Place</h2>
      <span className="text-white">Made by: mo.binsahl.com</span>
    </footer>
  );
};

export default Footer;
