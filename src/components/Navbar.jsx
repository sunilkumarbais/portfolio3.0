import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/my-image.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLink = ["Home", "About", "Education", "Skills", "Projects", "Experience", "Contact"];

  return (
    <header className="max-w-[1400px] mx-auto px-4 sticky top-0 z-50 bg-gray-800 text-white">
      <nav className="h-20 flex items-center justify-between shadow-md">
        <img src={Logo} alt="Logo" className="w-10 h-10 md:h-13 md:w-13 rounded-full border border-blue-400" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLink.map((item) => (
            <li key={item}>
              <NavLink 
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) => isActive ? "text-blue-400 border-b-2 border-blue-400" : "hover:text-blue-300 transition"}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none cursor-pointer p-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF">
              {isOpen ? (
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              ) : (
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-gray-900 -z-40 w-60 mx-auto h-110 mt-30 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-100 opacity-0"}
      `}>
        <ul className="text-center space-y-4 text-xl">
          {navLink.map((item) => (
            <li key={item}>
              <NavLink 
                onClick={toggleMenu}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors block p-2"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
