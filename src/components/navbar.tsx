"use client";
import React from "react";
import ThemeToggle from "./theme";

export default function Navbar() {
  return (
    <nav className="md:min-w-full flex flex-row justify-start md:justify-between items-center self-center py-5 px-15 md:border-b-2 border-[#b2b2b2] dark:border-[#737373] bg-background md:fixed font-switzer z-10">
      <p className="font-manrope text-xl font-[900] violet-text">
        <a href="/">U.J</a>
      </p>
      <ul className="hidden md:flex items-center space-x-6">
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
        <li className="float-right">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
