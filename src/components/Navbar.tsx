"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex flex-col items-center justify-center md:p-10 p-5">
      <div className="flex items-center justify-evenly gap-7 min-w-1/3 md:p-10 p-5  rounded-full navbar">
        <Link
          href="/"
          className={cn(
            "text-white md:text-xl relative font-bold nav-item hover:text-black transition-all",
            {
              "text-black": pathname === "/",
            }
          )}
        >
          Home
          <span
            className={cn(
              "absolute md:-top-6 md:-left-3 -top-4 -left-1 rounded-4xl -z-10 w-full h-full bg-white md:p-10 p-7 hidden animate-jello",
              { block: pathname === "/" }
            )}
          />
        </Link>
        <Link
          href="/our-story"
          className={cn(
            "text-white md:text-xl relative font-bold nav-item hover:text-black transition-all",
            { "text-black": pathname === "/our-story" }
          )}
        >
          Our Story
          <span
            className={cn(
              "absolute md:-top-6 md:-left-3 -top-4 -left-0 rounded-4xl -z-10 w-full h-full bg-white md:p-10 p-8 hidden animate-jello ",
              {
                block: pathname === "/our-story",
              }
            )}
          />
        </Link>
        <Link
          href="/clients"
          className={cn(
            "text-white md:text-xl relative font-bold nav-item hover:text-black transition-all",
            {
              "text-black": pathname === "/clients",
            }
          )}
        >
          Clients
          <span
            className={cn(
              "absolute md:-top-6 md:-left-3 -top-4 -left-[2px] rounded-4xl -z-10 w-full h-full bg-white md:p-10 p-7 hidden animate-jello",
              {
                block: pathname === "/clients",
              }
            )}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
