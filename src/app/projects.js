import React from "react";

const Projects = () => {
  return (
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
  );
};

export default Projects;