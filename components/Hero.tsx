import React from "react";
import { Fields } from "@/constants";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="grid place-content-center place-items-center mb-12 md:mb-24">
      <div className="my-12 text-center">
        <h1 className="text-[6.5vw] uppercase flex justify-center items-center">
          unlock{" "}
          <span className="bg-primary inline-flex justify-center px-4 md:px-10 py-1 md:py-4 rounded-full mx-1">
            <Image
              src="/lock.png"
              alt="lock"
              height={16}
              width={16}
              className="bg-primary md:w-12"
            />
          </span>{" "}
          profits{" "}
        </h1>
        <h1 className="text-[6.5vw] uppercase "> with no-loss prediction</h1>
      </div>
      <div className="bg-primary text-black w-screen py-1 mt-4 flex justify-around relative z-0">
        {Fields.map((item) => (
          <span className="text-sm md:text-xl grid grid-flow-col items-center gap-3 ">
            {item}
            <svg
              width="13"
              height="13"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.73563 12.0452C5.10818 9.62464 2.65525 7.06713 0.248602 6.32415C-0.0209589 6.23044 -0.0161289 6.03921 0.257932 5.95475C2.70354 5.32883 5.27799 2.90144 6.03134 0.511097C6.11256 0.247858 6.29226 0.252354 6.36008 0.519322C6.98742 2.9442 9.44046 5.49738 11.8426 6.24458C12.1122 6.3383 12.1073 6.53386 11.8333 6.61398C9.39215 7.23567 6.81321 9.66729 6.06436 12.0534C5.98304 12.321 5.80333 12.3165 5.73563 12.0452Z"
                fill="#151414"
              />
            </svg>
          </span>
        ))}
        <div className="w-auto border-2 border-primary rounded-[2rem] text-primary bg-[rgb(21_20_20)] absolute top-1/2  -translate-y-1/2 z-30">
          <h1 className="text-3xl md:text-6xl uppercase p-4 md:p-7 ">
            get early access
          </h1>
        </div>
      </div>
    </section>
  );
};
