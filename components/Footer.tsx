import React from "react";
import Image from "next/image";
import { Mail, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center  relative overflow-hidden border-t-2 border-opacity-10 border-primary">
      <div className="flex ">
        <div className="ellipse1 absolute -left-[20%] -top-80 lef"></div>
        <div className="ellipse2 absolute left-0 -top-80"></div>
        <div className="ellipse3 absolute left-[25%] -top-80"></div>
        <div className="ellipse4 absolute left-[50%] -top-80"></div>
        <div className="ellipse5 absolute left-[75%] -top-80"></div>
        <div className="ellipse6 absolute -right-[20%] -top-80"></div>
      </div>
      <div className="py-6">
        <Image src="/logo2.png" alt="logo" width={98} height={98} />
      </div>
      <div>
        <h3 className="text-4xl md:text-6xl font-medium max-w-sm md:max-w-xl text-center">
          Build a good reliable scalable prediction
        </h3>
      </div>
      <div className="w-full my-12 flex flex-col items-center border-y border-white border-opacity-10">
        <div className="w-[80%] md:w-[50%] flex items-center justify-center border-x border-white border-opacity-10">
          <button
            type="button"
            className="w-full py-5 rounded-full bg-blue text-3xl md:text-5xl bg-[url('/d.png')]"
          >
            <label className="mb-1">enter app</label>
          </button>
        </div>
        <div className="w-full flex justify-center border-t border-white border-opacity-10 ">
          <div className="w-[40%] md:w-[25%] border-x border-white border-opacity-10">
            <button
              type="button"
              className="w-full flex gap-2 justify-center py-6 rounded-full border border-white border-opacity-10"
            >
              <Mail />
              contact us
            </button>
          </div>
          <div className="w-[40%] md:w-[25%] border-x border-white border-opacity-10">
            <button
              type="button"
              className="w-full flex gap-2 justify-center py-6 rounded-full border border-white border-opacity-10"
            >
              <Youtube />
              watch demo
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between px-4 md:px-24 py-6">
        <ul>
          <Link href="/">
            <li className="text-[#858e96] mb-1">Product</li>
          </Link>
          <Link href="/">
            <li>Prediction</li>
          </Link>
          <Link href="/">
            <li>Buy Crypto</li>
          </Link>
          <Link href="/">
            <li>Analysis</li>
          </Link>
          <Link href="/">
            <li>Institution Sevices</li>
          </Link>
        </ul>
        <ul>
          <Link href="/">
            <li className="text-[#858e96] mb-1">Legal</li>
          </Link>
          <Link href="/">
            <li>Terms & Conditions</li>
          </Link>
          <Link href="/">
            <li>Privacy Policy</li>
          </Link>
          <Link href="/">
            <li>SOC - 2</li>
          </Link>
        </ul>
        <ul>
          <Link href="/">
            <li className="text-[#858e96] mb-1">Social</li>
          </Link>
          <Link href="/">
            <li>Linked-in</li>
          </Link>
          <Link href="/">
            <li>Twitter</li>
          </Link>
          <Link href="/">
            <li>Discord</li>
          </Link>
        </ul>
      </div>
      <div className="w-full flex flex-col items-end gap-2 px-6 md:px-24 pb-4">
        <span className="flex gap-3 text-lg tracking-wide">
          <Image src="/logo.png" alt="logo" width={24} height={24} />
          Predictify Finance{" "}
        </span>
        <span className="text-sm text-[#858e96]">
          © Predictify Finance , All RIGHTS RESERVED
        </span>
      </div>
    </footer>
  );
};
