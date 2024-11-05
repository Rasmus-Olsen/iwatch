const ColorSelector = ({ SortImg, TealImg, WhiteImg, setImgSrc }) => {
  return (
    <div className="flex flex-col items-center mt-auto mb-auto">
      <div className="w-5 h-5 bg-[#434558] rounded-full border-2 border-white cursor-pointer transform transition-transform duration-300 hover:scale-150" onClick={() => setImgSrc(SortImg)}></div>
      <div className="w-0.5 h-6 bg-gray-300 my-1"></div>
      <div className="w-5 h-5 bg-[#6ADDCC] rounded-full border-2 border-white cursor-pointer transform transition-transform duration-300 hover:scale-150" onClick={() => setImgSrc(TealImg)}></div>
      <div className="w-0.5 h-6 bg-gray-300 my-1"></div>
      <div className="w-5 h-5 bg-[#F0EFF4] rounded-full border-2 border-white cursor-pointer transform transition-transform duration-300 hover:scale-150" onClick={() => setImgSrc(WhiteImg)}></div>
    </div>
  );
};

export default ColorSelector;
