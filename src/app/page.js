"use client";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Logos from "./logos";

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
      <main className="relative z-0 flex min-h-screen flex-col items-center justify-between p-24 pt-48">
        {/* Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/*Main content of the page*/}
        <div className="z-10 w-full items-center justify-between text-sm lg:flex">
          <div className="flex flex-col items-center justify-center">
            <div id="about" className="flex font-normal items-center justify-center space-x-4 ml-12">
              <Image
                src="/FormalPic.jpg"
                alt="Devstutya Pandey"
                width={200}
                height={200}
                className="rounded-full zoomed-right"
              />
              <div>
                <h1 className="text-4xl ml-12">Hi! I&apos;m Devstutya Pandey</h1>
                <p className="text-2xl font-light mt-8 ml-12">I&apos;m pursuing my Bachelor&apos;s degree at the university of British Columbia, where I am majoring in Computer Science and minoring in Data Science. This educational journey is sharpening my technical acumen, preparing me to tackle the complex challenges in the ever-growing field of Computer Science.</p>
                <p className="text-2xl font-light mt-2 ml-12">My goal is to harness this synergy of education and hands-on experience to drive innovation and contribute to groundbreaking projects in my field.</p>
              </div>    
            </div>  
            {/* Divider */}
            <hr className="w-3/4 border-t-2 border-gray-300 mt-40 my-12" />
            <div id="skills" className="skills-container">
              <h2 className="text-5xl font-light mt-20 mb-2">Skills</h2>
              <Logos/>
            </div>  
            {/* Divider */}
            <hr className="w-3/4 border-t-2 border-gray-500 mt-40 my-12" />
            <div id="projects" className="projects-container">
              <h2 className="text-5xl font-light mt-20 mb-12">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                <a
                  href="https://github.com/Devstutya/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card relative p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8 max-w-lg mx-auto"
                >
                  <h3 className="text-3xl font-medium mb-4">Portfolio Website</h3>
                  <p className="text-xl text-left font-light mb-4">A modern and responsive portfolio created using react.js, showcasing my skills and projects.</p>
                  <span className="click-to-view absolute bottom-2 left-2 right-2 text-sm font-medium text-gray-500 opacity-0 transition-opacity duration-300">
                    Click to view
                  </span>
                </a>
                <a
                  href="https://github.com/OM200401/Discord-Mods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card relative p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8 max-w-lg mx-auto"
                >
                  <h3 className="text-3xl font-medium mb-4">Discourse</h3>
                  <p className="text-xl text-left font-light mb-4">An intuitive e-learning platform created using Next.js and Firebase</p>
                  <span className="click-to-view absolute bottom-2 left-2 right-2 text-sm font-medium text-gray-500 opacity-0 transition-opacity duration-300">
                    Click to view
                  </span>
                </a>
                <a
                  href="https://github.com/Jupiter-is-BIG/CS304_FinalProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card relative p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8 max-w-lg mx-auto"
                >
                  <h3 className="text-3xl font-medium mb-4">Ray&apos;s Groceries</h3>
                  <p className="text-xl text-left font-light mb-4">A comprehensive online Shopping platform built with PHP and MySQL</p>
                  <span className="click-to-view absolute bottom-2 left-2 right-2 text-sm font-medium text-gray-500 opacity-0 transition-opacity duration-300">
                    Click to view
                  </span>
                </a>
                <a
                  href="https://github.com/Devstutya/ConfDataFetcher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card relative p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8 max-w-lg mx-auto"
                >
                  <h3 className="text-3xl font-medium mb-4">Confluence Data Fetcher</h3>
                  <p className="text-xl text-left font-light mb-4">A python script utilising fastAPI to retrieve data from a specific confluence domain using Confluence&apos;s API</p>
                  <span className="click-to-view absolute bottom-2 left-2 right-2 text-sm font-medium text-gray-500 opacity-0 transition-opacity duration-300">
                    Click to view
                  </span>
                </a>                
                {/* Add more projects as needed */}
              </div>
            </div>    
          </div>
        </div>
      </main>
    </div>
  );
}