import React from "react";
import Image from "next/image";

export const Desktop = () => {
  return (
    <section className="py-6 md:py-24 flex flex-col items-center justify-center relative z-10">
      <div className=" flex mx-auto relative z-30">
        <div className="flex -z-10">
          <div className="ellipse3 absolute left-[10%] bottom-32"></div>
          <div className="ellipse2 absolute left-[50%] -translate-x-1/2 bottom-32"></div>
          <div className="ellipse3 absolute left-[65%] bottom-32"></div>
        </div>
        <Image src="/desktop.png" alt="desktop" height={1200} width={1200} className="z-10 relative"/>
      </div>
      <div className="w-full flex flex-col items-center text-center py-10">
        <h4 className="text-3xl md:text-4xl min-w-xs">
          Powered by Cardano's POS architecture
        </h4>
        <p className="max-w-lg px-3 mt-4">
          Deposit ADA into Predictify Stakepool and redeem in-game tokens for
          betting without worrying about losing your principal amount
        </p>
      </div>
      <div className="flex justify-center gap-2 md:gap-8 ">
        <div className="md:w-40 flex gap-2 place-content-center items-center bg-[rgb(21_20_20)] px-3 md:px-5 py-3 rounded-2xl ">
          <svg
            width="18"
            height="18"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.73563 12.0452C5.10818 9.62464 2.65525 7.06713 0.248602 6.32415C-0.0209589 6.23044 -0.0161289 6.03921 0.257932 5.95475C2.70354 5.32883 5.27799 2.90144 6.03134 0.511097C6.11256 0.247858 6.29226 0.252354 6.36008 0.519322C6.98742 2.9442 9.44046 5.49738 11.8426 6.24458C12.1122 6.3383 12.1073 6.53386 11.8333 6.61398C9.39215 7.23567 6.81321 9.66729 6.06436 12.0534C5.98304 12.321 5.80333 12.3165 5.73563 12.0452Z"
              fill="rgba(150 130 255)"
            />
          </svg>
          Outcomes
        </div>
        <div className="md:w-40 flex gap-2 place-content-center items-center bg-[rgb(21_20_20)] px-3 md:px-5 py-3 rounded-2xl">
          <svg
            width="18"
            height="18"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.73563 12.0452C5.10818 9.62464 2.65525 7.06713 0.248602 6.32415C-0.0209589 6.23044 -0.0161289 6.03921 0.257932 5.95475C2.70354 5.32883 5.27799 2.90144 6.03134 0.511097C6.11256 0.247858 6.29226 0.252354 6.36008 0.519322C6.98742 2.9442 9.44046 5.49738 11.8426 6.24458C12.1122 6.3383 12.1073 6.53386 11.8333 6.61398C9.39215 7.23567 6.81321 9.66729 6.06436 12.0534C5.98304 12.321 5.80333 12.3165 5.73563 12.0452Z"
              fill="rgba(150 130 255)"
            />
          </svg>
          Interactivity
        </div>
        <div className="md:w-40 flex gap-2 place-content-center items-center bg-[rgb(21_20_20)] px-3 md:px-5 py-3 rounded-2xl">
          <svg
            width="18"
            height="18"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.73563 12.0452C5.10818 9.62464 2.65525 7.06713 0.248602 6.32415C-0.0209589 6.23044 -0.0161289 6.03921 0.257932 5.95475C2.70354 5.32883 5.27799 2.90144 6.03134 0.511097C6.11256 0.247858 6.29226 0.252354 6.36008 0.519322C6.98742 2.9442 9.44046 5.49738 11.8426 6.24458C12.1122 6.3383 12.1073 6.53386 11.8333 6.61398C9.39215 7.23567 6.81321 9.66729 6.06436 12.0534C5.98304 12.321 5.80333 12.3165 5.73563 12.0452Z"
              fill="rgba(150 130 255)"
            />
          </svg>
          Display
        </div>
      </div>
    </section>
  );
};
