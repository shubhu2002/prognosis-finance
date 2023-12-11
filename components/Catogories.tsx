"use client";

import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { CatogoriesContainer } from "./CatogoriesContainer";

type Button = {
  title: string;
};

const ButtonProp = ({ title }: Button) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      type="button"
      className={` text-white p-2 px-3 md:px-5 tracking-wide border border-white opacity-${
        isActive ? 100 : 50
      } rounded-2xl font-light`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export const Catogories = () => {
  return (
    <section className="w-full px-6 md:px-24 ">
      <div className=" md:pb-12">
        <h2 className="text-3xl md:text-7xl">The most hyper-curated </h2>
        <h2 className="text-3xl md:text-7xl">list of creatives on earth.</h2>
      </div>
      <div className="w-full py-10 flex items-center justify-between gap-5">
        <div className="flex gap-3 md:gap-5">
          <ButtonProp title="Popular" />
          <ButtonProp title="Business" />
          <ButtonProp title="Crypto" />
          <ButtonProp title="NFTs" />
          <ButtonProp title="more..." />
        </div>
        <div className="hidden md:flex gap-5">
          <span className="rounded-full bg-containersBG p-3">
            <MoveLeft />
          </span>
          <span className="rounded-full bg-containersBG p-3">
            <MoveRight />
          </span>
        </div>
      </div>
      <div className="w-full grid grid-flow-col overflow-x-scroll gap-10 scroll">
        <CatogoriesContainer image="/a.png" title="Will Mbappe leave PSG ?" />
        <CatogoriesContainer
          image="/b.png"
          title="Will 'Barbie' or 'Oppenheimer' gross more on Opening weekend ?"
        />
        <CatogoriesContainer
          image="/a.png"
          title="Will YNW Melly be found equity ?"
        />
        <CatogoriesContainer image="/b.png" title="Will Mbappe leave PSG ?" />
        <CatogoriesContainer
          image="/a.png"
          title="Will 'Barbie' or 'Oppenheimer' gross more on Opening weekend ?"
        />
        <CatogoriesContainer
          image="/b.png"
          title="Will YNW Melly be found equity ?"
        />
      </div>
      <div className="w-full flex justify-between md:justify-center py-12">
        <div className="flex md:hidden gap-5 ">
          <span className="rounded-full bg-containersBG p-3">
            <MoveLeft />
          </span>
          <span className="rounded-full bg-containersBG p-3">
            <MoveRight />
          </span>
        </div>
        <button type="button" className="bg-blue px-6 py-3 rounded-3xl">
          View More
        </button>
      </div>
    </section>
  );
};
