"use client"; // Sørg for at køre på client-side i Next.js

import { useState } from "react";
import Image from "next/image";
import ImageBg from "./ImageBg";

import SortImg from "../../public/navy.png"; // Standard billede
import TealImg from "../../public/mint.png";
import WhiteImg from "../../public/ocean.png";

const TextImage = (props) => {
  const [imgSrc, setImgSrc] = useState(SortImg); // Holder styr på det store billede

  const handleImageChange = (newImage) => {
    setImgSrc(newImage); // Opdaterer det store billede, når et lille billede klikkes
  };
  return (
    <section className="grid grid-cols-[50%_48%_2%] max-w-7xl mx-auto mt-20 mb-20 h-full">
      <div className="grid gap-2 pt-20">
        <div className="text-6xl">
          <h1 className="font-bold">{props.mainTitle}</h1>
          <h1>{props.subtitle}</h1>
        </div>
        <button className="w-fit h-fit text-base border-2 p-2.5 px-10 rounded-3xl font-bold hover:bg-white hover:text-[#B6CCDA] hover:border-white">{props.buttonText}</button>
        <div className="flex gap-5 h-fit w-fit mt-auto">
          <Image className="my-0 mx-auto cursor-pointer" src="/pil-venstre.svg" width={18} height={2} alt="arrow" />
          <p>1</p>
          <Image className="my-0 mx-auto cursor-pointer" src="/pil-højre.svg" width={18} height={2} alt="arrow" />
        </div>
      </div>

      <div className="grid gap-6 justify-center">
        <div className="grid items-center justify-center">
          <Image src={imgSrc} alt="Apple watch" width={500} height={500} />
        </div>
        <div className="flex justify-between w-full">
          <ImageBg bgColor="bg-[#434558]" imageSkift={SortImg} onClick={() => handleImageChange(SortImg)} />
          <ImageBg bgColor="bg-[#6ADDCC]" imageSkift={TealImg} onClick={() => handleImageChange(TealImg)} />
          <ImageBg bgColor="bg-[#F0EFF4]" imageSkift={WhiteImg} onClick={() => handleImageChange(WhiteImg)} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-auto mb-auto">
        <div className="w-5 h-5 bg-[#434558] rounded-full border-2 border-white transform transition-transform duration-300 hover:scale-150 cursor-pointer"></div>
        <div className="w-0.5 h-6 bg-gray-300 my-1"></div>
        <div className="w-5 h-5 bg-[#6ADDCC] rounded-full border-2 border-white transform transition-transform duration-300 hover:scale-150 cursor-pointer"></div>
        <div className="w-0.5 h-6 bg-gray-300 my-1"></div>
        <div className="w-5 h-5 bg-[#F0EFF4] rounded-full border-2 border-white transform transition-transform duration-300 hover:scale-150 cursor-pointer"></div>
      </div>
    </section>
  );
};

export default TextImage;
