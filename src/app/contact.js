import React, { useEffect } from 'react';
import "animate.css";

const Contact = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="contact-section opacity-0 px-4 sm:px-8 md:px-16 lg:px-32 py-16 w-full max-w-5xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-light mb-8">Contact</h2>
      
      <p className="text-base sm:text-lg mb-6 text-center sm:text-left">
        Feel free to reach out to me using any of the methods below.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-md space-y-4 text-base sm:text-lg">
        <p>
          <strong>Phone:</strong> <span className="block sm:inline">+1 (236) 338-1844</span>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:devstutyapandey@gmail.com"
            className="text-blue-600 dark:text-blue-300 hover:underline break-all"
          >
            devstutyapandey@gmail.com
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/devstutyapandey/"
            className="text-blue-600 dark:text-blue-300 hover:underline break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/devstutyapandey
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/Devstutya"
            className="text-blue-600 dark:text-blue-300 hover:underline break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Devstutya
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
