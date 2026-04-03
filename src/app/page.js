"use client";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "./navbar"; //Switch to altnavbar for alternative design
import Logos from "./logos";
import Projects from "./projects"; // Import the Projects component
import Contact from "./contact";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-black"}>
      <Head>
        <title>Devstutya Pandey</title>
      </Head>
      {/*Main container*/}
      <main className="relative z-0 flex min-h-screen flex-col items-center px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 md:pt-32">
      {/* Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/*Main content of the page*/}
        <div className="z-10 w-full items-center justify-between text-sm lg:flex">
          <div className="flex flex-col items-center justify-center">
          <div id="about" className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-5xl mx-auto px-6 py-20">
              <Image
                src="/FormalPic.jpg"
                alt="Devstutya Pandey"
                width={208}
                height={208}
                className="rounded-full object-cover w-48 h-48 md:w-52 md:h-52 border border-gray-300/50 dark:border-gray-600/50 flex-shrink-0"
              />
              <div>
                <h1 className="text-3xl font-semibold">Hi! I&apos;m Devstutya Pandey</h1>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mt-4">
                  I&apos;m a recent Computer Science graduate from The University of British Columbia with a minor in Data Science. I&apos;m passionate about building full-stack applications and working with AI/ML to solve real-world problems. Currently looking for opportunities where I can contribute to impactful products.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href="https://github.com/Devstutya"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/devstutyapandey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:devstutyapandey@gmail.com"
                    aria-label="Email"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <MdEmail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>  
            {/* Divider */}
            <hr className="w-3/4 border-t-2 border-gray-300 dark:border-gray-600 mt-40 my-12" />
            <div id="skills" className="skills-container">
              <h2 className="text-3xl font-semibold mt-20 mb-12">Skills</h2>
              <Logos/>
            </div>
            {/* Divider */}
            <hr className="w-3/4 border-t-2 border-gray-300 dark:border-gray-600 mt-40 my-12" />
            <Projects />
            {/* Divider */}
            <hr className="w-3/4 border-t-2 border-gray-300 dark:border-gray-600 mt-40 my-12" />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}