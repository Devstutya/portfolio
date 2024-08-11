// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="text-5xl font-light mt-20 mb-12">Contact Me</h2>
      <p className="text-left text-lg">
        Feel free to reach out to me through any of the following methods.         
      </p>
      <p className="text-left text-lg mb-2">
        I look forward to hearing from you!         
      </p>
      <div className="contact-info-box">
        <p className="text-lg mb-4">
          <strong>Phone:  </strong> +1 (236) 338-1844
        </p>
        <p className="text-lg mb-4">
          <strong>Email:  </strong> 
          <a href="mailto:devstutyapandey@gmail.com" className="text-blue-200 hover:underline">
            devstutyapandey@gmail.com
          </a>
        </p>
        <p className="text-lg mb-4">
          <strong>LinkedIn:  </strong> 
          <a href="https://www.linkedin.com/in/devstutyapandey/" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/devstutyapandey
          </a>
        </p>
        <p className="text-lg mb-4">
          <strong>GitHub:  </strong> 
          <a href="https://github.com/Devstutya" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
            github.com/devstutya
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
