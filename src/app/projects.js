import React from "react";
import "animate.css";
import { useScrollAnimation } from './useScrollAnimation';

const Projects = () => {
  useScrollAnimation();


  return (
    <div id="projects" className="projects-container">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mt-20 mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12">        
        <a
          href="https://github.com/OM200401/Discord-Mods"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card bg-white dark:bg-gray-800 relative p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8 max-w-lg mx-auto opacity-0"
        >
          <h3 className="text-3xl font-medium mb-4">Discourse</h3>
          <p className="text-xl text-left font-light mb-4">An intuitive e-learning platform created using Next.js and Firebase</p>
          <span className="click-to-view absolute bottom-2 left-2 right-2 text-sm font-medium text-gray-500 opacity-0 transition-opacity duration-300">
            Click to view on GitHub
          </span>
        </a>
        <a
          href="https://github.com/Jupiter-is-BIG/CS304_FinalProject"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card bg-white dark:bg-gray-800 relative p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8 max-w-lg mx-auto opacity-0"
        >
          <h3 className="text-3xl font-medium mb-4">Ray&apos;s Groceries</h3>
          <p className="text-xl text-left font-light mb-4">A comprehensive online Shopping platform built with PHP and MySQL</p>
          <span className="click-to-view absolute bottom-2 left-2 right-2 text-sm font-medium text-gray-500 opacity-0 transition-opacity duration-300">
            Click to view on GitHub
          </span>
        </a>
        <a
          href="https://github.com/Devstutya/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card bg-white dark:bg-gray-800 relative p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8 max-w-lg mx-auto opacity-0"
        >
          <h3 className="text-3xl font-medium mb-4">Portfolio Website</h3>
          <p className="text-xl text-left font-light mb-4">A modern and responsive portfolio created using react.js, showcasing my skills and projects.</p>
          <span className="click-to-view absolute bottom-2 left-2 right-2 text-sm font-medium text-gray-500 opacity-0 transition-opacity duration-300">
            Click to view on GitHub
          </span>
        </a>
        <a
          href="https://github.com/Devstutya/Image-Aesthetics-Webapp"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card bg-white dark:bg-gray-800 relative p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8 max-w-lg mx-auto opacity-0"
        >
          <h3 className="text-3xl font-medium mb-4">Image Aesthetics Webapp</h3>
          <p className="text-xl text-left font-light mb-4">An AI powered web application that uses a neural network to predict the aesthetics of an image. Built and trained deep learning models to generate high-quality images based on user inputs.</p>
          <span className="click-to-view absolute bottom-2 left-2 right-2 text-sm font-medium text-gray-500 opacity-0 transition-opacity duration-300">
            Click to view on GitHub
          </span>
        </a>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
