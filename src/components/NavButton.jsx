const NavButton = ({ href, text }) => {
  return (
    <a href={href} className="hover:bg-white hover:text-[#B6CCDA] px-6 py-1 rounded-full transition">
      {text}
    </a>
  );
};

export default NavButton;
