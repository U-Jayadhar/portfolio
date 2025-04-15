import React from "react";

export default function Footer() {
  return (
    <footer className="font-manrope flex flex-col py-5 px-10 bg-[#1f1f1f] text-white">
      <hr className="border-gray-500 mb-5 border-2 rounded-[2px]" />
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a
            href="https://www.linkedin.com/in/jayadhar-ummadisingu-2a825b25a/"
            target="_blank"
          >
            <img
              src="linkedin-logo.svg"
              alt="Linkedin Logo"
              className="w-6 h-6 mr-2 hover:scale-120 transition-transform duration-300"
            />
          </a>
          <a href="https://github.com/U-Jayadhar" target="_blank">
            <img
              src="github-logo.svg"
              alt="GitHub Logo"
              className="w-6 h-6 mr-2 hover:scale-120 transition-transform duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/_jayadhar_?igsh=YWxoN3ZpN3ZtbHE2"
            target="_blank"
          >
            <img
              src="insta-logo.svg"
              alt="Instagram Logo"
              className="w-7 h-7 mr-2 hover:scale-120 transition-transform duration-300"
            />
          </a>
        </div>
        <a
          href="mailto:ujayadhar8.dev@gmail.com"
          target="_top"
          className="flex items-center hover:scale-120 transition-transform duration-300"
        >
          <img src="email.svg" alt="Mail Logo" className="w-6 h-6 mr-2" />
          Write to me
        </a>
      </div>
      <p className="self-center text-gray-400">
        © 2025 Jayadhar Ummadisingu. All rights reserved.
      </p>
    </footer>
  );
};

