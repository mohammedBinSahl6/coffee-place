"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex flex-col items-center justify-center p-10">
      <div className="flex items-center justify-evenly gap-7 min-w-1/3 p-10  rounded-full navbar">
        <Link
          href="/"
          className={cn(
            "text-white text-xl relative font-bold nav-item hover:text-black transition-all",
            {
              "text-black": pathname === "/",
            }
          )}
        >
          Home
          <span
            className={cn(
              "absolute -top-6 -left-3 rounded-4xl -z-10 w-full h-full bg-white p-10 hidden animate-jello",
              { block: pathname === "/" }
            )}
          />
        </Link>
        <Link
          href="/our-story"
          className={cn(
            "text-white text-xl relative font-bold nav-item hover:text-black transition-all",
            { "text-black": pathname === "/our-story" }
          )}
        >
          Our Story
          <span
            className={cn(
              "absolute -top-6 -left-3 rounded-4xl -z-10 w-full h-full bg-white p-10 px-15 hidden animate-jello",
              {
                block: pathname === "/our-story",
              }
            )}
          />
        </Link>
        <Link
          href="/clients"
          className={cn(
            "text-white text-xl relative font-bold nav-item hover:text-black transition-all",
            {
              "text-black": pathname === "/clients",
            }
          )}
        >
          Clients
          <span
            className={cn(
              "absolute -top-6 -left-2 rounded-4xl -z-10 w-full h-full bg-white p-10 hidden animate-jello",
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
