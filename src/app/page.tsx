import React from "react";
import "./globals.css";

export default function Home() {  
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center">
        <img
          src="/jayadhar.png"
          alt="Jayadhar Ummadisingu"
          className="rounded-full w-40 h-40 border-2 border-[#4b4ef9] dark:border-[#c0c1ff]"
        />
        <h1 className="font-switzer text-xl mt-5">
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
      </section>
    </>
  );
}
