"use client";
import React, { useState } from 'react';
import "animate.css";
import { useScrollAnimation } from './useScrollAnimation';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const inputClass =
  "contact-input w-full px-4 py-3 rounded border border-cyberCyan/20 bg-cyberDark text-cyberText placeholder-cyberMuted/50 focus:outline-none focus:ring-2 focus:ring-cyberCyan/50 focus:border-cyberCyan/40 transition font-mono text-sm";

const Contact = () => {
  useScrollAnimation();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xbdpzgnq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="contact-section opacity-0 w-full max-w-5xl mx-auto py-16 px-4 sm:px-8"
    >
      <div className="rounded overflow-hidden border border-cyberCyan/15" style={{ boxShadow: '0 0 30px rgba(0, 240, 255, 0.05)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left column -- contact info */}
          <div className="p-8 sm:p-10 bg-cyberCard text-cyberText flex flex-col justify-center border-r border-cyberCyan/10">
            <h2 className="contact-heading text-3xl font-semibold mb-4 font-mono text-cyberCyan">Get in Touch</h2>
            <p className="text-cyberMuted mb-8 leading-relaxed">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:devstutyapandey@gmail.com"
                  className="flex items-center gap-3 text-cyberMuted hover:text-cyberCyan transition group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded border border-cyberCyan/20 group-hover:border-cyberCyan/50 group-hover:shadow-cyber-glow transition flex-shrink-0">
                    <MdEmail className="text-xl text-cyberCyan" />
                  </span>
                  <span className="break-all">devstutyapandey@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/devstutyapandey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cyberMuted hover:text-cyberCyan transition group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded border border-cyberCyan/20 group-hover:border-cyberCyan/50 group-hover:shadow-cyber-glow transition flex-shrink-0">
                    <FaLinkedinIn className="text-xl text-cyberCyan" />
                  </span>
                  <span>linkedin.com/in/devstutyapandey</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Devstutya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cyberMuted hover:text-cyberCyan transition group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded border border-cyberCyan/20 group-hover:border-cyberCyan/50 group-hover:shadow-cyber-glow transition flex-shrink-0">
                    <FaGithub className="text-xl text-cyberCyan" />
                  </span>
                  <span>github.com/Devstutya</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right column -- contact form */}
          <div className="p-8 sm:p-10 bg-cyberCard">
            <h2 className="contact-heading text-3xl font-semibold mb-6 text-cyberText font-mono">
              Connect with Me
            </h2>

            {status === 'success' ? (
              <div className="flex items-center justify-center h-48 text-center">
                <p className="text-cyberCyan text-lg font-medium font-mono">
                  Thanks! I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="contact-label block text-sm font-medium text-cyberMuted mb-1 font-mono">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="contact-label block text-sm font-medium text-cyberMuted mb-1 font-mono">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="contact-label block text-sm font-medium text-cyberMuted mb-1 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-cyberPink text-sm font-mono">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="contact-submit w-full py-3 px-6 bg-cyberCyan hover:bg-cyberCyan/90 disabled:bg-cyberCyan/30 text-cyberDark font-semibold rounded transition font-mono"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
