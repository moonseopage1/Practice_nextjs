import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
  SiGit,
  SiGithub,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="tools"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"TOOLS IM USING."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] justify-center lg:max-w-[1200px]">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[70%]">
            <AnimatedBody delay={0.2} text="Frontend" />
            <div>
              <AnimatedTools
                className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-10"
                delay={0.2}
                stepSize={0.1}
                iconSize={50}
              >
                <FaHtml5 title="HTML" size={50} />
                <FaCss3Alt title="CSS" size={50} />
                <SiTailwindcss title="Tailwind CSS" size={50} />
                <FaBootstrap title="Bootstrap" size={50} />
                <SiTypescript title="TypeScript" size={50} />
                <SiJavascript title="JavaScript" size={50} />
                <SiReact title="React" size={50} />
                <SiNextdotjs title="Next.js" size={50} />
                <SiRedux title="Redux" size={50} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[70%]">
            <AnimatedBody delay={0.3} text="Backend" />
            <div>
              <AnimatedTools
                className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-10"
                delay={0.3}
                stepSize={0.1}
                iconSize={50}
              >
                <IoLogoFirebase title="Firebase" size={50} />
                <SiNodedotjs title="Node.js" size={50} />
                <SiExpress title="Express" size={50} />
                <SiMongodb title="MongoDB" size={50} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[70%]">
            <AnimatedBody delay={0.4} text="Others" />
            <div>
              <AnimatedTools
                className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-10"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <SiPostman title="Postman" size={50} />
                <SiGithub title="GitHub" size={50} />
                <SiGit title="Git" size={50} />
              </AnimatedTools>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
