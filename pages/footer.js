import React from "react";

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-800">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <ul className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <li>
              <a className="px-3 py-2 rounded-md text-sm font-medium bg-gray-800 p-1  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                Copyright © {new Date().getFullYear()} J Pottorff
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium bg-gray-800 p-1  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
