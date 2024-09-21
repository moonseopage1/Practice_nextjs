import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"let me introduce myself."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="I am Aothy Mahamud Moon. I am a passionate and dedicated Frontend Web Developer with expertise in JavaScript, React.js, Node.js, MongoDB, HTML, CSS, Bootstrap, Tailwind CSS, Git, GitHub, and REST APIs. With a strong foundation in web development principles, I am committed to creating dynamic and user-friendly applications. I have experience collaborating with cross-functional teams and delivering high-quality code within tight deadlines. I am enthusiastic about continuously learning and staying up-to-date with the latest technologies and best practices in the field. My goal is to contribute to innovative projects and create engaging web experiences for users." />

            {/* <AnimatedBody
              delay={0.1}
              text="Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
            />

            <AnimatedBody
              delay={0.2}
              text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
