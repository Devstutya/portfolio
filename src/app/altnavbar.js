import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`fixed left-0 z-50 top-0 flex w-full justify-between font-mono p-12 ${darkMode ? "bg-customDarkNavBg" : "bg-white/50"} backdrop-blur-lg dark:bg-customDarkNavBg`}>
      <p className="flex items-center ml-4">
        <a href ="#about"  className="hover:scale-125 text-3xl transition-transform font-mono font-bold">Portfolio</a>
      </p>
      <nav className="mr-4">
        <ul className="flex space-x-16">
          <li className="flex flex-col items-center">
            {darkMode ? (
              <BsFillSunFill
                className="cursor-pointer text-3xl hover:scale-125 transition-transform text-white"
                onClick={toggleDarkMode}
              />
            ) : (
              <BsFillMoonStarsFill
                className="cursor-pointer text-3xl hover:scale-125 transition-transform text-black"
                onClick={toggleDarkMode}
              />
            )}
            <span className="text-sm mt-1">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </li>
          <li className="hover:scale-125 text-2xl transition-transform">
            <a className="bg-black-500 rounded" href="/resume.pdf" download="Devstutya_Pandey_Resume.pdf">Resume
              <AiOutlineDownload className="inline-block text-2xl" />
            </a>
          </li>
          <li className="hover:scale-125 text-2xl transition-transform">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:scale-125 text-2xl transition-transform">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:scale-125 text-2xl transition-transform">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;