import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

/**
 * Footer component providing basic contact links and copyright.
 * Utilizes FontAwesome icons for the email and LinkedIn links.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Pavan Kumar Malasani. All rights reserved.
        </p>
        <div className="flex space-x-4 text-lg">
          <a
            href="mailto:pavankumarmalasani154@gmail.com"
            className="hover:text-white"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;