import React from "react";
import Image from "next/image";

export const Features = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 mb-24">
      <div className=" flex flex-col md:flex-row items-end justify-between bg-containersBG rounded-xl bg-[url('/fgrid.png')] w-5/6 h-[540px] overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center text-center md:justify-end items-center md:mb-36 ">
          <h3 className="text-3xl md:text-4xl">Accurate predictions</h3>
          <p className="max-w-xs text-center px-4 md:px-0 mt-2">
            Easy to known how to cryptocurrency works and friendly to newbie.
          </p>
        </div>
        <Image
          src="/Picture2.png"
          alt="fgrid"
          height={550}
          width={550}
          className="bg rounded-tl-xl border-l border-t border-white -mr-10 md:-mr-28 lg:-mr-10"
        />
      </div>
      <div className="w-5/6 flex md:flex-row flex-col justify-around items-center gap-7 ">
        <div className="md:w-[550px] h-[640px] bg-containersBG flex flex-col items-center rounded-xl pt-10 ">
          <Image src="/Picture1.png" alt="pic" height={370} width={370} />
          <div className="w-full flex flex-col items-center h-full justify-end bg-[url('/fgrid.png')]">
            <h3 className="text-3xl md:text-4xl">Protected Securely</h3>
            <p className="max-w-xs text-center mb-16 px-4 md:px-0 mt-2">
              All cash balances are covered by FDIC insurances, upto a maximum
              of ₳250,000
            </p>
          </div>
        </div>
        <div className="md:w-[550px] h-[500px] md:h-[640px] bg-containersBG flex flex-col items-center rounded-xl  ">
          <Image src="/Picture3.png" alt="pic" height={370} width={550} className="rounded-tl-xl"/>
          <div className="flex flex-col items-center h-full justify-end text-center ">
            <h3 className="text-3xl lg:text-4xl">Cyrptocurrency Variety</h3>
            <p className="max-w-xs text-center mb-16 px-4 md:px-0 mt-2">
              Supports a variety of the most digital and currencies and always
              UpToDate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
