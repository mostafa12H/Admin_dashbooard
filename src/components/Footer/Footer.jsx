import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer({ isCollapsed }) {
  return (
    <footer
      className={`bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-4 ${
        isCollapsed ? "pl-20" : "pl-64"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Admin Dashboard
            </h4>
            <p className="text-sm">© 2024 Moustafa. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-white transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
