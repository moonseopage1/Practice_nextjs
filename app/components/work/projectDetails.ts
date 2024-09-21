import {
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiJavascript,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
  SiZig,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string | null;
  server: string | null;
  demo: string;
  image: string;
  available: boolean;
  type: string;
};

export const projects = [
  {
    id: 0,
    name: "Salymbekov Medical University(BD)",
    description:
      "SMUBD.org streamlines student application and visa processes for medical universities. Built with ReactJS, TypeScript, Redux, and Tailwind CSS on the frontend, and Node.js, Mongoose, and MongoDB on the backend. It also includes an admin dashboard for efficient management.",
    technologies: [SiTypescript, SiReact, SiTailwindcss],
    techNames: ["TypeScript", "React", "Tailwind CSS"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://tailwindcss.com/",
    ],
    github: null,
    server: null,
    demo: "https://smubd.org/",
    image: "/projects/smu.png",
    available: true,
    type: "frontend",
  },
  {
    id: 1,
    name: "Fornaax",
    description:
      " am contributed to this project(fornaax.org) that emulated the functionality and UI of top exchanges, enhancing trading experiences through real-time data updates, and a secure user dashboard.",
    technologies: [SiJavascript, SiReact, SiTailwindcss],
    techNames: ["JavaScript", "React", "Tailwind CSS"],
    techLinks: ["#", "https://reactjs.org/", "https://tailwindcss.com/"],
    github: null,
    server: null,
    demo: "https://fornaax.netlify.app/",
    image: "/projects/fornaax.png",
    available: true,
    type: "frontend",
  },
  {
    id: 2,
    name: "Soul Bliss",
    description:
      "This is a Yoga Training School. I built this website with student, instructor, and admin dashboards, consistent navigation, captivating visuals, popular classes, instructor profiles, secure login/registration, and a customized 404 page.",
    technologies: [SiJavascript, SiReact, SiTailwindcss],
    techNames: ["JavaScript", "React", "Tailwind CSS"],
    techLinks: ["#", "https://reactjs.org/", "https://tailwindcss.com/"],
    github: "https://github.com/aothymoon59/soulbliss-client",
    server: "https://github.com/aothymoon59/soulbliss-server",
    demo: "https://soulbliss-77696.web.app/",
    image: "/projects/soulbliss.png",
    available: true,
    type: "fullstack",
  },
];
