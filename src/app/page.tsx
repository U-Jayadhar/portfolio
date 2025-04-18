import React from "react";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-switzer text-l">
        Hello, I'm{" "}
        <span className="text-2xl font-medium violet-text">
          Jayadhar Ummadisingu
        </span>
      </h1>
      <h1 className="text-3xl font-bold mt-2">
        Student • Developer • Designer
      </h1>
      <p className="font-work text-lg mt-2 text-gray-600 dark:text-gray-400 text-center">
        A final year student at GITAM University, Vizag. I love to explore new<br/>
        technologies. I am a passionate developer and designer with a keen
        interest in creating innovative solutions.
      </p>
    </div>
  );
}
