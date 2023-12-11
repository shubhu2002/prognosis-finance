import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav_Links } from "@/constants";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-7 px-4 md:px-24 md:gap-24 relative z-30 text-lg">
      <span className="flex gap-2 text-sm md:text-lg tracking-wide text-[#858e96]">
        <Image src="/logo.png" alt="logo" width={24} height={24} />
        Predictify Finance{" "}
      </span>
      <menu className="hidden md:flex gap-14 mx-24">
        {Nav_Links.map((link) => (
          <Link href={link.href} key={link.key} className="text-lg">
            {link.label}
          </Link>
        ))}
      </menu>
      <button
        type="button"
        className="bg-white text-black px-3 text-sm md:text-xl py-2 rounded-3xl font-semibold"
      >
        Coming Soon
      </button>
      <Image
        src="/menu.png"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer md:hidden"
      ></Image>
    </nav>
  );
};
