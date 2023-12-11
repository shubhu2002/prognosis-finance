import React from "react";
import Image from "next/image";

type Item = {
  image: string;
  title: string;
};

export const CatogoriesContainer = ({ image, title }: Item) => {
  return (
    <div className="w-[280px] md:w-[470px] flex flex-col bg-containersBG justify-between rounded-2xl ">
      <div className="w-auto relative">
        <Image
          src={image}
          alt="image"
          width={470}
          height={200}
          className=" brightness-75 "
        />
        <div className="w-full flex justify-between px-4 absolute bottom-2 z-30 text-sm md:text-lg font-medium">
          <span>31 Oct , 2023</span>
          <div className="flex gap-6">
            <span>₳34.4k</span>
            <span>₳42.2k</span>
          </div>
        </div>
      </div>
      <div className="w-full px-4 flex flex-col h-full justify-between text-left gap-6 py-4">
        <h5 className="text-xl md:text-2xl font-medium pt-4">{title}</h5>
        <div className="flex gap-2 ">
          <span className="w-[55%] text-[#4EBE96] border-b-4 border-[#4EBE96]">
            Yes ₳21
          </span>
          <span className="w-[45%] text-[#B93B5B] border-b-4 border-[#B93B5B] text-right">
            No ₳82
          </span>
        </div>
      </div>
    </div>
  );
};
