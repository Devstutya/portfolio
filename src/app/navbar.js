import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineDownload, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 dark:bg-customDarkNavBg backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700 px-6 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#about" className="text-2xl font-semibold transition-transform duration-300 hover:scale-110" onClick={closeMenu}>
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-base sm:text-lg">
          <li>
            {darkMode ? (
              <BsFillSunFill
                onClick={toggleDarkMode}
                className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110 text-yellow-300"
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={toggleDarkMode}
                className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110 text-indigo-800"
              />
            )}
          </li>
          <li>
            <a
              href="/resume.pdf"
              download="Devstutya_Pandey_Resume.pdf"
              className="bg-gray-200 dark:bg-gray-800 rounded px-3 py-1 flex items-center gap-1 transition-transform duration-300 hover:scale-105"
            >
              Resume <AiOutlineDownload className="text-xl" />
            </a>
          </li>
          <li><a href="#skills" className="transition-transform duration-300 hover:scale-105">Skills</a></li>
          <li><a href="#projects" className="transition-transform duration-300 hover:scale-105">Projects</a></li>
          <li><a href="#contact" className="transition-transform duration-300 hover:scale-105">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg bg-white dark:bg-gray-900 px-6 py-4 rounded-md shadow-md">
          <li>
            {darkMode ? (
              <BsFillSunFill
                onClick={() => {
                  toggleDarkMode();
                  closeMenu();
                }}
                className="text-2xl cursor-pointer text-yellow-300"
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={() => {
                  toggleDarkMode();
                  closeMenu();
                }}
                className="text-2xl cursor-pointer text-indigo-800"
              />
            )}
          </li>
          <li>
            <a
              href="/resume.pdf"
              download="Devstutya_Pandey_Resume.pdf"
              className="flex items-center gap-1 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded"
              onClick={closeMenu}
            >
              Resume <AiOutlineDownload className="text-xl" />
            </a>
          </li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
