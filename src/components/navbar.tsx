import React from 'react';

export default function Navbar() {
  return (
    <nav className="font-switzer flex justify-between items-center py-5 px-10 bg-[#1f1f1f] text-white">
      <a href="/">
        <p className="text-xl font-bold text-[#c0c1ff]">
          U.J
        </p>
      </a>
      <ul className="flex space-x-6">
        <li>
          <a href="/#resume" className="hover:text-[#c0c1ff]">Resume</a>
        </li>
        <li>
          <a href="/#works" className="hover:text-[#c0c1ff]">Works</a>
        </li>
        <li>
          <a href="blogs" className="hover:text-[#c0c1ff]">Blogs</a>
        </li>
        <li>
          <a href="mailto:ujayadhar8.dev@gmail.com" className="hover:text-[#c0c1ff]">Contact</a>
        </li>
      </ul>
    </nav>
  );
};