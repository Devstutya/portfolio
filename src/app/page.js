import Image from "next/image";
import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";

export default function Home() {
  return (
    <div>
    <Head> 
      <title>Devstutya Pandey</title>
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center bg-white/50 backdrop-blur-lg dark:bg-white/20 lg:static lg:w-auto lg:rounded-xl lg:bg-white/50 lg:dark:bg-white/20 p-4">
          &nbsp;
          <code className="text-2xl font-mono font-bold">Dev's Portfolio</code>
        </p> 
        <nav>
        <ul className="flex space-x-6 mb 12">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text 2xl:*: hover:scale-125 transition-transform"/>
          </li>
          <li className="hover:scale-125 transition-transform">
            <a className = "bg-black-500 rounded" href="#resume">Resume</a>
          </li>
          <li className="hover:scale-125 transition-transform">
            <a href="#about">About</a>
          </li>
          <li className="hover:scale-125 transition-transform">
            <a href="#projects">Projects</a>
          </li>          
          <li className="hover:scale-125 transition-transform">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>       
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/FormalPic.jpg" 
            alt="Devstutya Pandey"
            width={200}
            height={200}
            className="rounded-full zoomed-right"
          />
          <h1 className="text-xl font-mono mt-16">Hi! I'm Devstutya Pandey</h1>
          <p className="text-lg font-mono mt-2">About me</p>
        </div>
      </div>
    </main>
    </div>
  );
}
