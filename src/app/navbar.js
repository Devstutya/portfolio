import { useState } from "react";
import { AiOutlineDownload, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.72 17.72l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.72 6.28l1.06-1.06M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ThemeToggleButton = ({ theme, cycleTheme }) => {
  let icon;
  let ariaLabel;

  if (theme === "light") {
    icon = <MoonIcon />;
    ariaLabel = "Switch to dark mode";
  } else if (theme === "dark") {
    icon = (
      <img
        src="/theme-toggle.jpg"
        alt="Cyberpunk theme"
        width={24}
        height={24}
        className="rune-icon"
        style={{ borderRadius: "2px" }}
      />
    );
    ariaLabel = "Switch to cyberpunk mode";
  } else {
    icon = <SunIcon />;
    ariaLabel = "Switch to light mode";
  }

  return (
    <button
      onClick={cycleTheme}
      className="theme-toggle-btn"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {icon}
    </button>
  );
};

const Navbar = ({ theme, cycleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="theme-navbar fixed top-0 left-0 z-50 w-full backdrop-blur-md px-4 sm:px-6 py-3" style={{ backgroundColor: 'var(--navbar-bg)', borderBottom: '1px solid var(--navbar-border)' }}>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto w-full overflow-x-hidden">
        <a href="#about" className="theme-brand text-2xl font-semibold font-mono text-cyberCyan tracking-tight" onClick={closeMenu}>
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium font-mono overflow-x-auto whitespace-nowrap">
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyberCyan/10 border border-cyberCyan/30 text-cyberCyan rounded px-3 py-1 flex items-center gap-1 hover:bg-cyberCyan/20 hover:border-cyberCyan/50 transition-colors duration-200"
            >
              Resume <AiOutlineDownload className="text-xl" />
            </a>
          </li>
          <li>
            <a href="#skills" className="inline-block text-cyberText hover:text-cyberCyan transition-colors duration-200">
            Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="inline-block text-cyberText hover:text-cyberCyan transition-colors duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="inline-block text-cyberText hover:text-cyberCyan transition-colors duration-200">
              Contact
            </a>
          </li>
          <li>
            <ThemeToggleButton theme={theme} cycleTheme={cycleTheme} />
          </li>
        </ul>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggleButton theme={theme} cycleTheme={cycleTheme} />
          <button
            className="text-2xl cursor-pointer text-cyberCyan"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg px-6 py-4 rounded-md font-mono" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--glow)' }}>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-cyberCyan/10 border border-cyberCyan/30 text-cyberCyan px-3 py-1 rounded hover:bg-cyberCyan/20 transition-colors duration-200"
              onClick={closeMenu}
            >
              Resume <AiOutlineDownload className="text-xl" />
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu} className="text-cyberText hover:text-cyberCyan transition-colors duration-200">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu} className="text-cyberText hover:text-cyberCyan transition-colors duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="text-cyberText hover:text-cyberCyan transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
