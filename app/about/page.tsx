"use client";

import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJava } from "react-icons/fa";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaInstagram as InstagramIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa6";

import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiPython,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiFastapi,
  SiHtml5,
  SiCss,
  SiHuggingface,
} from "react-icons/si";

const techStack = [
  { icon: <SiC />, name: "C" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss />, name: "CSS" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaGitAlt />, name: "Git" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto text-center text-gray-900 dark:text-white">
      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">
        About Me
      </h1>

      {/* SIMPLE PARAGRAPH */}
      <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        I’m Sourabh Goswami, a Computer Science student and full-stack developer
        who enjoys building real-world applications and exploring new
        technologies. I work mainly with the MERN stack and Next.js, and I’m
        also interested in AI and backend systems. I like creating projects that
        solve actual problems, improve user experience, and push my skills
        forward. Currently, I’m focused on building scalable applications and
        learning more about intelligent systems.
      </p>

      {/* TECH STACK */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-blue-500 mb-8">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-5xl text-gray-400">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="relative group transform transition duration-300 hover:scale-110 hover:-rotate-6"
            >
              {/* ICON */}
              <div className="hover:text-gray-900 dark:text-white transition">{tech.icon}</div>

              {/* TOOLTIP */}
              <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 
                bg-black text-gray-900 dark:text-white text-xs px-2 py-1 rounded 
                opacity-0 group-hover:opacity-100 
                transition duration-200 whitespace-nowrap
                border border-gray-700 shadow-lg"
              >
                {tech.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-16 items-center gap-8 mb-16">
          <p className="text-gray-500 text-sm hover:text-gray-900 dark:text-white transition cursor-pointer">
            Connect with me !
          </p>

          <div className="flex gap-8 text-gray-400">
            <a href="https://github.com/SourabhGoswamii" target="_blank">
              <GithubIcon className="text-2xl hover:text-gray-900 dark:text-white hover:scale-125 transition duration-200" />
            </a>

            <a href="https://www.instagram.com/iam.sourabhm/" target="_blank">
              <InstagramIcon className="text-2xl hover:text-gray-900 dark:text-white hover:scale-125 transition duration-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/sourabh-goswamii"
              target="_blank"
            >
              <LinkedinIcon className="text-2xl hover:text-gray-900 dark:text-white hover:scale-125 transition duration-200" />
            </a>

            <a href="https://x.com/SourabhGoswammi" target="_blank">
              <TwitterIcon className="text-2xl hover:text-gray-900 dark:text-white hover:scale-125 transition duration-200" />
            </a>

            <a href="https://huggingface.co/SourabhGoswami" target="_blank">
              <SiHuggingface className="text-2xl hover:text-yellow-400 hover:scale-125 transition duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
