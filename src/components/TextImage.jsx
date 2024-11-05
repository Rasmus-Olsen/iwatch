"use client";

import { useState } from "react";
import Image from "next/image";
import ImageBg from "./ImageBg";

import ColorSelector from "./ColorSelector";

import SortImg from "../../public/navy.png";
import TealImg from "../../public/mint.png";
import WhiteImg from "../../public/ocean.png";

const TextImage = (props) => {
  const [imgSrc, setImgSrc] = useState(SortImg);

  const imageCollection = {
    SortImg,
    TealImg,
    WhiteImg,
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
          <ImageBg bgColor="bg-[#434558]" src={SortImg} setImgSrc={setImgSrc} />
          <ImageBg bgColor="bg-[#6ADDCC]" src={TealImg} setImgSrc={setImgSrc} />
          <ImageBg bgColor="bg-[#F0EFF4]" src={WhiteImg} setImgSrc={setImgSrc} />
        </div>
      </div>

      <ColorSelector {...imageCollection} setImgSrc={setImgSrc} />
    </section>
  );
};

export default TextImage;
