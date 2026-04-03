"use client";
import React, { useState } from 'react';
import "animate.css";
import { useScrollAnimation } from './useScrollAnimation';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition";

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
      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left column — contact info */}
          <div className="p-8 sm:p-10 bg-gray-900 dark:bg-black text-white flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:devstutyapandey@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition flex-shrink-0">
                    <MdEmail className="text-xl" />
                  </span>
                  <span className="break-all">devstutyapandey@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/devstutyapandey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition flex-shrink-0">
                    <FaLinkedinIn className="text-xl" />
                  </span>
                  <span>linkedin.com/in/devstutyapandey</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Devstutya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition flex-shrink-0">
                    <FaGithub className="text-xl" />
                  </span>
                  <span>github.com/Devstutya</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right column — contact form */}
          <div className="p-8 sm:p-10 bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
              Connect with Me
            </h2>

            {status === 'success' ? (
              <div className="flex items-center justify-center h-48 text-center">
                <p className="text-green-600 dark:text-green-400 text-lg font-medium">
                  Thanks! I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
                  <p className="text-red-500 dark:text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 px-6 bg-gray-900 hover:bg-black disabled:bg-gray-400 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-gray-600 text-white dark:text-gray-900 font-semibold rounded-lg transition"
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
