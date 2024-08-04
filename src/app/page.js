import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devstutya Pandey</title>
      </Head>
      {/*Main container*/}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Container for the header and navigation */}
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          {/* Padding between the top of the page and the nav bar*/}
          <div className="fixed left-0 top-0 flex w-full justify-between bg-white/50 backdrop-blur-lg dark:bg-white/20 p-28"> 
            {/* Header title */}
            <p className="flex items-center ml-4">
              <code className="text-3xl font-mono font-bold">Dev's Portfolio</code>
            </p>
            {/* Navigation menu */}
            <nav className="mr-4">
              <ul className="flex space-x-16">
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-3xl hover:scale-125 transition-transform" />
                </li>
                <li className="hover:scale-125 text-2xl transition-transform">
                  <a className="bg-black-500 rounded" href="#resume">Resume</a>
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
          <div className="flex items-center justify-center space-x-4 mb-32 mr-40">
            <Image
              src="/FormalPic.jpg"
              alt="Devstutya Pandey"
              width={200}
              height={200}
              className="rounded-full zoomed-right"
            />
            <div>
              <h1 className="text-xl font-mono ml-32">Hi! I'm Devstutya Pandey</h1>
              <p className="text-lg font-mono ml-32">About me</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}