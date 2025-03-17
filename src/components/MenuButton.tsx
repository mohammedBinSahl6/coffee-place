"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuButton = () => {
  const [clicked, setClicked] = React.useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== "/menu") setClicked(true); 
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <Link
      href="/menu"
      className={cn(
        "p-5 rounded-full bg-white fixed right-10 bottom-10 cursor-pointer animate-menu flex items-center justify-center transition-slow",
        { " w-1/3 h-1/3 bottom-1/3 right-1/3 animate-disappear": clicked,
            'opacity-0': pathname === "/menu"
         }
      )}
      onClick={handleClick}
    >
      <Image
        src="/menu-paper.svg"
        alt="menu icon"
        width={40}
        height={40}
        className={cn({ "w-52": clicked })}
      />
    </Link>
  );
};

export default MenuButton;
