"use client";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "./navbar"; //Switch to altnavbar for alternative design
import Logos from "./logos";
import Projects from "./projects"; // Import the Projects component
import Contact from "./contact";

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
          <div id="about" className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-12 px-4 sm:px-12">
              <Image
                src="/FormalPic.jpg"
                alt="Devstutya Pandey"
                width={200}
                height={200}
                className="rounded-full zoomed-right responsive-image"
              />
              <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl ml-4 sm:ml-8 md:ml-12">Hi! I&apos;m Devstutya Pandey</h1>
                <p className="text-lg sm:text-xl md:text-2xl font-light mt-6 sm:mt-8 ml-4 sm:ml-8 md:ml-12">A bit about me, </p>
                <p className="text-lg sm:text-xl md:text-2xl font-light mt-6 sm:mt-8 ml-4 sm:ml-8 md:ml-12">I&apos;m a fresh graduate from The University of British Columbia, where I delved into the fascinating worlds of Computer Science and Data Science. This educational journey has sharpened my technical acumen, and has prepared me to tackle the thrilling challenges of the ever-evolving tech landscape.</p>
                <p className="text-lg sm:text-xl md:text-2xl font-light mt-6 sm:mt-8 ml-4 sm:ml-8 md:ml-12">I am excited to use my education and my technical skillset to build something that changes the world </p>
              </div>    
            </div>  
            {/* Divider */}
            <hr className="w-3/4 border-t-2 border-gray-300 mt-40 my-12" />
            <div id="skills" className="skills-container">
              <h2 className="text-5xl font-light mt-20 mb-12">Skills</h2>
              <Logos/>
            </div>  
            {/* Divider */}
            <hr className="w-3/4 border-t-2 border-gray-300 mt-40 my-12" />
            <Projects /> 
            {/* Divider */}
            <hr className="w-3/4 border-t-2 border-gray-300 mt-40 my-12" />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}