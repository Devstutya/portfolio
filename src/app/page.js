"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./navbar"; //Switch to altnavbar for alternative design
import Logos from "./logos";
import Projects from "./projects"; // Import the Projects component
import Contact from "./contact";
import Footer from "./footer";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const THEMES = ["light", "dark", "cyberpunk"];

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Apply theme to <html> element whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    setMounted(true);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      const idx = THEMES.indexOf(prev);
      return THEMES[(idx + 1) % THEMES.length];
    });
  };

  return (
    <div className="bg-cyberDark text-cyberText theme-grid-bg">
      {/*Main container*/}
      <main className="relative z-0 flex min-h-screen flex-col items-center px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 md:pt-32">
      {/* Navbar */}
        <Navbar theme={theme} cycleTheme={cycleTheme} />
        {/*Main content of the page*/}
        <div className="z-10 w-full items-center justify-between text-sm lg:flex relative">
          <div className="flex flex-col items-center justify-center">
          <div id="about" className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-5xl mx-auto px-6 py-20">
              <Image
                src="/FormalPic.jpg"
                alt="Devstutya Pandey"
                width={208}
                height={208}
                className="rounded-full object-cover w-48 h-48 md:w-52 md:h-52 border-2 border-cyberCyan/30 flex-shrink-0 shadow-cyber-glow"
              />
              <div>
                <h1 className="hero-name text-3xl font-semibold font-mono text-cyberCyan">Hi! I&apos;m Devstutya Pandey</h1>
                <p className="hero-subtitle text-base leading-relaxed text-cyberMuted mt-4">
                  I&apos;m a recent Computer Science graduate from The University of British Columbia with a minor in Data Science. I&apos;m passionate about building full-stack applications and working with AI/ML to solve real-world problems. Currently looking for opportunities where I can contribute to impactful products.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href="https://github.com/Devstutya"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-cyberMuted hover:text-cyberCyan transition-colors duration-200"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/devstutyapandey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-cyberMuted hover:text-cyberCyan transition-colors duration-200"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:devstutyapandey@gmail.com"
                    aria-label="Email"
                    className="text-cyberMuted hover:text-cyberPink transition-colors duration-200"
                  >
                    <MdEmail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="w-3/4 border-t border-cyberCyan/10 mt-40 my-12" />
            <div id="skills" className="skills-container">
              <h2 className="section-heading text-3xl font-semibold mt-20 mb-12 text-cyberText font-mono">Skills</h2>
              <Logos/>
            </div>
            {/* Divider */}
            <hr className="w-3/4 border-t border-cyberCyan/10 mt-40 my-12" />
            <Projects />
            {/* Divider */}
            <hr className="w-3/4 border-t border-cyberCyan/10 mt-40 my-12" />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
