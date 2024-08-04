"use client";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/*Main content of the page*/}
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          {/*Nav bar flex container with padding*/}
          <div className={`fixed left-0 top-0 flex w-full justify-between p-28 ${darkMode ? "bg-customDarkNavBg" : "bg-white/50"} backdrop-blur-lg dark:bg-customDarkNavBg`}>
            <p className="flex items-center ml-4">
              <code className="text-3xl font-mono font-bold">Dev's Portfolio</code>
            </p>
            {/* Navigation */}
            <nav className="mr-4">
              <ul className="flex space-x-16">
                <li>
                  <BsFillMoonStarsFill
                    className={`cursor-pointer text-3xl hover:scale-125 transition-transform ${darkMode ? "text-white" : "text-black"}`}
                    onClick={toggleDarkMode}
                  />
                </li>
                <li className="hover:scale-125 text-2xl transition-transform">
                  <a className="bg-black-500 rounded" href="/resume.pdf" download="Devstutya_Pandey_Resume.pdf">Resume
                    <AiOutlineDownload className="inline-block text-2xl" />
                  </a>
                </li>
                <li className="hover:scale-125 text-2xl transition-transform">
                  <a href="#about">About</a>
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
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-4 mb-28 ml-12">
            <Image
              src="/FormalPic.jpg"
              alt="Devstutya Pandey"
              width={200}
              height={200}
              className="rounded-full zoomed-right"
            />
            <div id="about">
              <h1 className="text-xl font-mono ml-12">Hi! I'm Devstutya Pandey</h1>
              <p className="text-lg font-mono mt-8 ml-12">I'm pursuing my Bachelor's degree at the university of British Columbia, where I am majoring in Computer Science and minoring in Data Science.</p>
              <p className="text-lg font-mono mt-2 ml-12">This educational journey is sharpening my technical acumen, preparing me to tackle the complex challenges in the ever-growing field of Computer Science.</p>
              <p className="text-lg font-mono mt-2 ml-12">My goal is to harness this synergy of education and hands-on experience to drive innovation and contribute to groundbreaking projects in my field.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}