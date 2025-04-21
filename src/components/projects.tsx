"use client";
import React, { useEffect, useState } from "react";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const [category, setCategory] = useState<string>("all");
  const [showProjects, setShowProjects] = useState<number>(3);
  const filteredProjects = projectsData.filter((project: any) => {
    if (category === "all") return true;
    return project.category.toLowerCase() === category;
  });

  return (
    <>
      <h1 className="font-switzer text-3xl font-bold">Projects</h1>
      <div className="flex flex-wrap gap-3 mt-5">
        <button
          className={
            category === "all"
              ? "bg-vl dark:bg-vd py-2 px-4 rounded-lg text-white dark:text-black"
              : "cursor-pointer border-1 border-gray-400 dark:border-gray-700 py-2 px-4 rounded-lg"
          }
          onClick={() => {
            setCategory("all");
          }}
        >
          All
        </button>
        <button
          className={
            category === "web"
              ? "bg-vl dark:bg-vd py-2 px-4 rounded-lg text-white dark:text-black"
              : "cursor-pointer border-1 border-gray-400 dark:border-gray-700 py-2 px-4 rounded-lg"
          }
          onClick={() => {
            setCategory("web");
          }}
        >
          Web
        </button>
        <button
          className={
            category === "app"
              ? "bg-vl dark:bg-vd py-2 px-4 rounded-lg text-white dark:text-black"
              : "cursor-pointer border-1 border-gray-400 dark:border-gray-700 py-2 px-4 rounded-lg"
          }
          onClick={() => {
            setCategory("app");
          }}
        >
          App
        </button>
        <button
          className={
            category === "design"
              ? "bg-vl dark:bg-vd py-2 px-4 rounded-lg text-white dark:text-black"
              : "cursor-pointer border-1 border-gray-400 dark:border-gray-700 py-2 px-4 rounded-lg"
          }
          onClick={() => {
            setCategory("design");
          }}
        >
          Design
        </button>
      </div>
      <div className="flex flex-wrap gap-10 mt-5">
        {filteredProjects
          .sort((a: any, b: any) => b.id - a.id)
          .slice(0, showProjects)
          .map((project: any) => (
            <div
              key={project.id}
              className="bg-[#f0f0f0] dark:bg-[#1c1c1c] p-5 rounded-lg shadow-md min-w-80"
            >
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="font-work mt-2 text-gray-600 dark:text-gray-400 max-w-[43ch] line-clamp-3">
                {project.description}
              </p>
              {/* <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tag: string) => (
                  <span
                    key={tag}
                    className="border-1 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-full text-[10px] bg-[#e0e0e0] dark:bg-[#2a2a2a]"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
              <div className="flex items-center gap-3 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex gap-1 items-center text-sm text-vl dark:text-vd hover:scale-110 transition-transform duration-300"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g data-name="Layer 2">
                          {" "}
                          <rect width="24" height="24" opacity="0"></rect>{" "}
                          <path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    Repo
                  </a>
                )}
                <a
                  href={project.live}
                  target="_blank"
                  className="flex gap-1 items-center text-sm text-vl dark:text-vd hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
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
                        d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"
                      ></path>{" "}
                    </g>
                  </svg>
                  Try
                </a>
              </div>
            </div>
          ))}
      </div>
      {showProjects < filteredProjects.length && (
        <button
          onClick={() => setShowProjects(filteredProjects.length)}
          className="text-md self-center bg-vl dark:bg-vd text-white dark:text-black px-4 py-2 mt-10 max-h-fit max-w-fit rounded-full cursor-pointer"
        >
          Show all
        </button>
      )}
    </>
  );
}
