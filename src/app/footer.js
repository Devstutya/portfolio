"use client";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300/30 dark:border-gray-700/30 py-8">
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2026 Devstutya Pandey
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Devstutya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/devstutyapandey/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="mailto:devstutyapandey@gmail.com"
            aria-label="Email"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <MdEmail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
