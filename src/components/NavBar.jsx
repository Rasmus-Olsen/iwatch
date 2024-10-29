import NavButton from "./NavButton";

import { AiFillApple } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between rounded-lg py-4 max-w-7xl mx-auto">
      <div>
        <AiFillApple className="text-white" size={50} />
      </div>

      <div className="flex space-x-6 text-white">
        <NavButton text="Mac" link="#" />
        <NavButton text="Iphone" link="#" />
        <NavButton text="IPad" link="#" />
        <NavButton text="IWatch" link="#" />
        <NavButton text="Support" link="#" />
      </div>

      <div className="flex space-x-4">
        <FiSearch className="text-white" size={24} />
        <div className="w-px h-6 bg-white"></div>
        <FiShoppingBag className="text-white" size={24} />
      </div>
    </div>
  );
};

export default Navbar;
