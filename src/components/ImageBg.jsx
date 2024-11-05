import Image from "next/image";

const ImageBg = ({ setImgSrc, bgColor, src }) => {
  return (
    <div onClick={() => setImgSrc(src)} className="relative flex flex-col items-center cursor-pointer w-36 h-fit">
      <Image src={src} alt="Small view of watch option" width={100} height={100} className="object-contain z-10" />
      <div className={`absolute bottom-0 w-full h-[60%] ${bgColor} rounded-lg`}></div>
    </div>
  );
};

export default ImageBg;
