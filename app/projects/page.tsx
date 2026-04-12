"use client";

import { useState } from "react";
import { ArrowUpRight, Circle, Wrench } from "lucide-react";

const projects = {
  current: [
     {
      name: "DataWash RL Environment",
      description: "RL-based dataset cleaning environment (OpenEnv)",
      tag: "Reinforcement Learning",
      active: true,
      links: [
        "https://github.com/SourabhGoswamii/DataWash-RL-Environment-Server",
        "https://huggingface.co/spaces/SourabhGoswami/DataWash-RL-Environment-Server",
      ],
    },
    {
      name: "Task Management RL Environment",
      description: "RL-based task management environment (OpenEnv)",
      tag: "Reinforcement Learning",
      active: true,
      links: [
        "https://github.com/SourabhGoswamii/OpenEnv-RL-enviroment",
        "https://huggingface.co/spaces/SourabhGoswami/DataWash-RL-Environment-Server",
      ],
    },
    {
      name: "Medcare",
      description: "Blockchain-based healthcare system",
      tag: "Blockchain",
      active: true,
      links: [
        "https://github.com/SourabhGoswamii/Medcare-medical-management-system",
      ],
    },
    {
      name: "AI for Healthcare",
      description: "MRI scan AI model for disease detection",
      tag: "ML / Vision",
      active: true,
      links: [
        "https://github.com/SourabhGoswamii/AI-for-Healthcare_AASTRA_Parth-Khera",
      ],
    },
    {
      name: "MindMed",
      description: "AI mental health assistant for rural areas",
      tag: "AI / Health",
      active: true,
      links: [],
    },
    
  ],
  past: [],
};

function getLinkLabel(url: string): string {
  if (url.includes("github.com")) return "GitHub";
  if (url.includes("huggingface.co")) return "HuggingFace";
  if (url.includes("vercel.app") || url.includes("netlify")) return "Live Demo";
  return "View";
}

function ProjectRow({ project }: { project: (typeof projects.current)[0] }) {
  const [hovered, setHovered] = useState(false);
  const hasLinks = project.links.length > 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group max-h-screen relative flex items-center justify-between py-5 border-b border-white/[0.06] cursor-default transition-all duration-200"
    >
      {/* Left */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Live dot */}
        <div className="shrink-0">
          {project.active ? (
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
          ) : (
            <Circle size={10} className="text-gray-900 dark:text-white/20 fill-white/10" />
          )}
        </div>

        {/* Name + description */}
        <div className="flex flex-col gap-1 min-w-0">
          <span
            className={`text-[18px] font-semibold tracking-tight transition-colors duration-200 ${
              hovered ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white/85"
            }`}
          >
            {project.name}
          </span>
          <span className="text-[14px] text-gray-900 dark:text-white/35 truncate leading-snug">
            {project.description}
          </span>
        </div>
      </div>

      {/* Center — tag */}
      <div className="hidden md:flex items-center mx-10 shrink-0">
        <span className="text-[12px] text-gray-900 dark:text-white/20 font-mono tracking-widest uppercase">
          {project.tag}
        </span>
      </div>

      {/* Right — links or under maintenance */}
      {/* Right — links or under maintenance */}
      <div
        className={`flex items-center gap-3 shrink-0 min-w-[180px] justify-end transition-all duration-200 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        }`}
      >
        {hasLinks ? (
          project.links.map((link, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13.5px] text-[#4f46e5] dark:text-[#7c8cf8] hover:text-gray-900 dark:text-white transition-colors duration-150 font-medium"
            >
              {getLinkLabel(link)}
              <ArrowUpRight size={14} />
            </a>
          ))
        ) : (
          <span className="flex items-center gap-1.5 text-[13px] text-amber-400/70 font-mono">
            <Wrench size={13} className="text-amber-400/50" />
            under maintenance
          </span>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-10 px-6 max-w-3xl mx-auto text-gray-900 dark:text-white font-sans">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[46px] font-bold tracking-tight leading-none text-gray-900 dark:text-white">
          Projects
        </h1>
        <p className="mt-5 text-[16px] text-gray-900 dark:text-white/40 leading-relaxed max-w-md">
          A collection of things I&apos;ve built
        </p>
      </div>

      {/* Current */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <p className="text-[12px] font-mono text-gray-900 dark:text-white/25 uppercase tracking-[0.18em]">
            Currently building
          </p>
          <span className="text-[11.5px] text-emerald-400/50 font-mono">
            {projects.current.length} active
          </span>
        </div>

        <div>
          {projects.current.map((project, i) => (
            <ProjectRow key={i} project={project} />
          ))}
        </div>
      </section>

      {/* Past — only render if non-empty */}
      {projects.past.length > 0 && (
        <section>
          <p className="text-[12px] font-mono text-gray-900 dark:text-white/25 uppercase tracking-[0.18em] mb-2">
            Past projects
          </p>
          <div>
            {projects.past.map((project, i) => (
              <ProjectRow key={i} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
