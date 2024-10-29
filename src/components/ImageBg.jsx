import Image from "next/image";

const ImageBg = () => {
  return (
    <div className="colors grid grid-cols-3 gap-10">
      <div className="relative flex flex-col items-center cursor-pointer">
        <Image className="h-24 object-contain z-10" src="/navy.png" width={500} height={500} alt="Iwatch 1" />
        <div className="absolute bottom-0 w-full h-12 bg-[#434558] bg-opacity-60 rounded-lg"></div>
      </div>
      <div className="relative flex flex-col items-center cursor-pointer">
        <Image className="h-24 object-contain z-10" src="/mint.png" width={500} height={500} alt="Iwatch 2" />
        <div className="absolute bottom-0 w-full h-12 bg-[#6ADDCC]  bg-opacity-60 rounded-lg"></div>
      </div>
      <div className="relative flex flex-col items-center cursor-pointer">
        <Image className="h-24 object-contain z-10" src="/ocean.png" width={500} height={500} alt="Iwatch 3" />
        <div className="absolute bottom-0 w-full h-12 bg-[#F9CDC4]  bg-opacity-60 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ImageBg;
