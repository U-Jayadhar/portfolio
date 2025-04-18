import React from "react";

export default function Navbar() {
  return (
    <nav className="w-[50vw] flex justify-between self-center py-5 px-15 mt-10 glass-effect font-switzer">
      <a href="/">
        <p className="text-xl font-bold violet-text">U.J</p>
      </a>
      <ul className="flex space-x-6">
        <li>
          <a href="/#resume" className="violet-hover">
            Resume
          </a>
        </li>
        <li>
          <a href="/#works" className="violet-hover">
            Works
          </a>
        </li>
        <li>
          <a href="blogs" className="violet-hover">
            Blogs
          </a>
        </li>
        <li>
          <a href="contact" className="violet-hover">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
