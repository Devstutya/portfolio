import React, { useEffect } from 'react';
import "animate.css";

const Contact = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px', // Start the animation a bit before the section fully enters the view
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    const sections = document.querySelectorAll('.skill-item, .project-card, .contact-section');
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);
  
  return (
    <section id="contact" className="contact-section opacity-0">
      <h2 className="text-5xl text-center font-light mt-20 mb-12">Contact</h2>
      <p className="text-left text-lg mb-2">
        Feel free to reach out to me using the following methods.
      </p>
      <div className="contact-info-box">
        <p className="text-lg mb-4">
          <strong>Phone: </strong> +1 (236) 338-1844
        </p>
        <p className="text-lg mb-4">
          <strong>Email: </strong> 
          <a href="mailto:devstutyapandey@gmail.com" className="text-blue-200 hover:underline">
            devstutyapandey@gmail.com
          </a>
        </p>
        <p className="text-lg mb-4">
          <strong>LinkedIn: </strong> 
          <a href="https://www.linkedin.com/in/devstutyapandey/" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/devstutyapandey
          </a>
        </p>
        <p className="text-lg mb-4">
          <strong>GitHub: </strong> 
          <a href="https://github.com/Devstutya" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
            github.com/devstutya
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
