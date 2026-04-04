import React from "react";
import "animate.css";
import { useScrollAnimation } from './useScrollAnimation';

const projects = [
  {
    name: "Discourse",
    description:
      "An intuitive e-learning platform enabling collaborative learning experiences with real-time features and user authentication.",
    tags: ["Next.js", "Firebase", "React"],
    href: "https://github.com/OM200401/Discord-Mods",
  },
  {
    name: "Ray\u2019s Groceries",
    description:
      "A comprehensive online shopping platform with product browsing, cart management, and order processing.",
    tags: ["PHP", "MySQL", "HTML/CSS"],
    href: "https://github.com/Jupiter-is-BIG/CS304_FinalProject",
  },
  {
    name: "Portfolio Website",
    description:
      "A modern and responsive portfolio showcasing skills and projects with dark mode support and scroll animations.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    href: "https://github.com/Devstutya/portfolio",
  },
  {
    name: "Image Aesthetics Webapp",
    description:
      "An AI-powered web application that uses a neural network to predict the aesthetics of an image. Built and trained deep learning models to generate high-quality images based on user inputs.",
    tags: ["Python", "Deep Learning", "Neural Networks"],
    href: "https://github.com/Devstutya/Image-Aesthetics-Webapp",
  },
];

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-cyberCyan/50 flex-shrink-0"
  >
    <path
      d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Projects = () => {
  useScrollAnimation();

  return (
    <div id="projects" className="projects-container">
      <h2 className="section-heading text-3xl font-semibold mt-20 mb-12 text-cyberText font-mono">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card flex flex-col p-5 rounded border border-cyberCyan/15 bg-cyberCard cursor-pointer hover:border-cyberCyan/60 hover:shadow-cyber-glow hover:scale-[1.02] opacity-0"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium text-cyberText font-mono">
                {project.name}
              </h3>
              <ArrowIcon />
            </div>
            <p className="text-base leading-relaxed text-cyberMuted text-left mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs leading-none px-2.5 py-1 rounded border border-cyberCyan/30 text-cyberCyan/80 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
