"use client";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="theme-footer w-full border-t border-cyberCyan/10 py-8">
      <div className="flex flex-col items-center gap-3">
        <p className="footer-copyright text-sm text-cyberMuted font-mono">
          &copy; 2026 Devstutya Pandey
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Devstutya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-cyberMuted hover:text-cyberCyan transition-colors duration-200"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/devstutyapandey/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-cyberMuted hover:text-cyberCyan transition-colors duration-200"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="mailto:devstutyapandey@gmail.com"
            aria-label="Email"
            className="text-cyberMuted hover:text-cyberPink transition-colors duration-200"
          >
            <MdEmail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
