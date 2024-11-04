import Image from "next/image";

const ImageBg = ({ onClick, bgColor, imageSkift }) => {
  return (
    <div onClick={onClick} className="relative flex flex-col items-center cursor-pointer w-36 h-fit">
      <Image src={imageSkift} alt="Small view of watch option" className="h-24 object-contain z-10" />
      <div className={`absolute bottom-0 w-full h-[60%] ${bgColor} rounded-lg`}></div>
    </div>
  );
};

export default ImageBg;
