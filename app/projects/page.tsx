"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import ProjectGrid from "../components/work/ProjectGrid";
import { ProjectProps, projects } from "../components/work/projectDetails";
import ProjectCard from "../components/work/ProjectCard";
import AnimatedTabs from "../components/other/Animatedtabs";

const AllProjects = () => {
  const [projectsData, setProjectsData] = useState([...projects]);
  const [originalProjects, setOriginalProjects] = useState([...projects]);
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    if (tabName === "all") {
      setProjectsData([...projects]);
    } else {
      const activeProjects = originalProjects.filter(
        (projects) => projects?.type === tabName
      );
      setProjectsData(activeProjects);
    }
  };

  return (
    <div className="bg-black">
      <div className="mx-auto min-h-screen w-[90%] pt-16 pb-36 md:pt-20 md:pb-44 lg:max-w-[1212.8px] lg:pt-20 lg:pb-56">
        <Link
          href="/"
          className="group relative mb-7 inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-bold"
        >
          <span className="absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
          <span className="relative flex w-full items-center gap-3 text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            <IoMdArrowRoundBack /> Back to Home
          </span>
          <span className="absolute inset-0 rounded-full border-2 border-white"></span>
        </Link>
        <AnimatedTitle
          text={"All Projects"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <section className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20">
          {/* Project toggle */}
          <AnimatedTabs activeTab={activeTab} handleTabClick={handleTabClick} />
          <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
            {projectsData?.map((project: ProjectProps) => (
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
                type={project.type}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllProjects;
