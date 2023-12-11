"use client";
import React, { use } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const Nav_Links = [
    { href: "/", key: "trending", label: "Trending" },
    { href: "/", key: "about_us", label: "About Us" },
    { href: "/", key: "market", label: "Market" },
    { href: "/", key: "learn", label: "Learn" },
  ];
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center py-7 px-4 md:px-12 md:gap-24 relative z-30 text-lg">
      <span className="flex gap-2 text-sm md:text-lg tracking-wide text-[#858e96]">
        <Image src="/logo.png" alt="logo" width={24} height={24} />
        Predictify Finance{" "}
      </span>
      <menu
        className={`w-full md:w-auto flex items-center flex-col md:flex-row gap-6 md:gap-12 absolute md:static top-20 left-0 py-6 transition-all linear duration-700 ${
          showMenu ? "opacity-100 bg-black" : " opacity-0 md:opacity-100"
        }`}
      >
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
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      ></Image>
    </nav>
  );
};
