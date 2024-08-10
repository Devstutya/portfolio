import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`fixed left-0 top-0 z-50 flex w-full justify-between items-center font-mono p-3 bg-white/80 backdrop-blur-md rounded-md shadow-md dark:bg-customDarkNavBg dark:border-gray-700`}>
      <p className="ml-4">
        <a href ="#about" className="text-xl font-bold transition-transform hover:scale-110">
          Portfolio
        </a>
      </p>
      <nav className="flex space-x-4 mr-4 items-center">
        <ul className="flex space-x-4 items-center">
          <li>
            {darkMode ? (
              <BsFillSunFill
                className="cursor-pointer text-2xl transition-transform hover:scale-110 text-white"
                onClick={toggleDarkMode}
              />
            ) : (
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl transition-transform hover:scale-110 text-black"
                onClick={toggleDarkMode}
              />
            )}
          </li>
          <li className="text-xl">
            <a className="bg-gray-200 dark:bg-gray-800 rounded px-2 py-1 transition-transform hover:scale-110" href="/resume.pdf" download="Devstutya_Pandey_Resume.pdf">
              Resume <AiOutlineDownload className="inline-block text-xl" />
            </a>
          </li>
          <li className="text-xl">
            <a className="transition-transform hover:scale-110" href="#skills">Skills</a>
          </li>
          <li className="text-xl">
            <a className="transition-transform hover:scale-110" href="#projects">Projects</a>
          </li>
          <li className="text-xl">
            <a className="transition-transform hover:scale-110" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;