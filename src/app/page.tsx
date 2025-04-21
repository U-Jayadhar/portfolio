"use client";
import React from "react";
import "./globals.css";
import Projects from "@/components/projects";
import { useRef } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center">
        <img
          src="/jayadhar.png"
          alt="Jayadhar Ummadisingu"
          className="rounded-full w-40 h-40 border-2 border-vl dark:border-vd"
        />
        <h1 className="font-manrope text-xl mt-5">
          Hello, I'm{" "}
          <span className="font-bold violet-text">Jayadhar Ummadisingu</span>
        </h1>
        <h1 className="text-3xl font-bold mt-5">
          Student • Developer • Designer
        </h1>
        <p className="max-w-[65ch] font-work mt-5 text-gray-600 dark:text-gray-400">
          A final year student at GITAM University, Vizag. I love to explore new
          technologies. I am a passionate developer and designer with a keen
          interest in creating innovative solutions.
        </p>
        <button
          className="translate-y-25 p-2 border-2 border-vl dark:border-vd text-vl dark:text-vd rounded-full animate-bounce cursor-pointer shadow-2xl"
          onClick={handleScroll}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4L12.75 18.1893L17.4697 13.4697C17.7626 13.1768 18.2374 13.1768 18.5303 13.4697C18.8232 13.7626 18.8232 14.2374 18.5303 14.5303L12.5303 20.5303C12.3897 20.671 12.1989 20.75 12 20.75C11.8011 20.75 11.6103 20.671 11.4697 20.5303L5.46967 14.5303C5.17678 14.2374 5.17678 13.7626 5.46967 13.4697C5.76256 13.1768 6.23744 13.1768 6.53033 13.4697L11.25 18.1893L11.25 4C11.25 3.58579 11.5858 3.25 12 3.25Z"
                fill="currentColor"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </section>
      <section
        className="scroll-mt-25 flex flex-col ml-20 mb-20"
        ref={sectionRef}
      >
        <Projects />
      </section>
    </>
  );
}
