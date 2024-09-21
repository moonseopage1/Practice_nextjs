import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
  return (
    <>
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
        >
          Check out some of my work!
        </h4>
      </div>

      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {projects?.slice(0, 3)?.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            techNames={project.techNames}
            techLinks={project.techLinks}
            github={project.github}
            server={project.server}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/projects"
          className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-bold"
        >
          <span className="absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            See All Projects
          </span>
          <span className="absolute inset-0 rounded-full border-2 border-white"></span>
        </Link>
      </div>
    </>
  );
};

export default ProjectGrid;
