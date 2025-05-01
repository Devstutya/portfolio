import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`fixed left-0 top-0 z-50 w-full px-6 sm:px-12 py-4 flex justify-between items-center font-mono ${darkMode ? "bg-customDarkNavBg" : "bg-white/50"} backdrop-blur-lg dark:bg-customDarkNavBg`}>
      <a href="#about" className="text-2xl sm:text-3xl font-bold transition-transform hover:scale-110">
        Portfolio
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-10 items-center text-lg">
        <li className="flex flex-col items-center">
          {darkMode ? (
            <BsFillSunFill
              onClick={toggleDarkMode}
              className="text-2xl cursor-pointer hover:scale-125 transition-transform text-white"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={toggleDarkMode}
              className="text-2xl cursor-pointer hover:scale-125 transition-transform text-black"
            />
          )}
          <span className="text-xs mt-1">{darkMode ? "Light" : "Dark"}</span>
        </li>
        <li className="hover:scale-110 transition-transform">
          <a href="/resume.pdf" download="Devstutya_Pandey_Resume.pdf" className="flex items-center gap-1">
            Resume <AiOutlineDownload className="text-xl" />
          </a>
        </li>
        <li className="hover:scale-110 transition-transform">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:scale-110 transition-transform">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:scale-110 transition-transform">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        {menuOpen ? (
          <HiX
            onClick={() => setMenuOpen(false)}
            className="text-3xl cursor-pointer"
          />
        ) : (
          <HiMenuAlt3
            onClick={() => setMenuOpen(true)}
            className="text-3xl cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className={`absolute top-full left-0 w-full px-6 py-6 flex flex-col space-y-4 text-lg font-medium bg-white dark:bg-customDarkNavBg shadow-md transition-all duration-300 md:hidden`}>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            href="/resume.pdf"
            download="Devstutya_Pandey_Resume.pdf"
            className="flex items-center gap-1"
            onClick={() => setMenuOpen(false)}
          >
            Resume <AiOutlineDownload />
          </a>
          <div className="flex items-center gap-2 mt-2">
            {darkMode ? (
              <BsFillSunFill
                onClick={toggleDarkMode}
                className="text-2xl cursor-pointer text-white"
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={toggleDarkMode}
                className="text-2xl cursor-pointer text-black"
              />
            )}
            <span className="text-sm">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
