import Image from "next/image";
import { getRecentRepos } from "@/components/github";
import GithubChart from "@/components/GithubChart";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaInstagram as InstagramIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";

export default async function Home() {
  const projects = await getRecentRepos();

  return (
    <main className="mt-4 flex flex-col items-center px-4 text-gray-900 dark:text-white">
      <div className="w-full max-w-6xl">
        <section className="relative isolate mb-14 grid min-h-[330px] items-center overflow-hidden rounded-3xl border border-white/10 bg-black/5 px-7 py-12 sm:px-12 md:grid-cols-[1fr_auto] md:px-16">
          <div className="pointer-events-none absolute left-[42%] top-[-20%] -z-10 h-[140%] w-px rotate-45 bg-white/10" />
          <div className="pointer-events-none absolute bottom-8 left-[8%] -z-10 h-px w-44 rotate-[-12deg] bg-blue-500/20" />
          <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-64 w-64 rotate-12 rounded-[3rem] border border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 right-36 -z-10 h-48 w-48 -rotate-12 rounded-[2.5rem] border border-white/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-y-1/2 rotate-45 rounded-3xl border border-blue-500/10" />

          <div className="relative z-10 md:pl-4">
            <p className="mb-3  text-lg font-medium tracking-[0.2em] text-gray-400 uppercase">
              Hello! I&apos;m
            </p>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-blue-700 dark:text-blue-500 sm:text-5xl md:text-6xl pr-2">
              Sourabh Goswami
            </h1>
            <h2 className="max-w-xl  pr-1 pt-3 font-small  tracking-[0.1em] text-gray-400 ">
              FULL-STACK AI ENGINEER | MODEL BUILDER | DATA NERD
            </h2>
          </div>

          <div className="relative mx-auto mt-10 w-full max-w-[280px] md:mr-5 md:mt-0 md:w-[280px]">
            <span className="absolute -right-5 -top-7 text-[9px] tracking-[0.25em] text-gray-500/70">
              280 × 210
            </span>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.25em] text-gray-500/70">
              PORTRAIT / 01
            </span>
            <div className="absolute inset-[-14px] rotate-3 rounded-[2rem] border border-white/10" />
            <div className="rounded-[1.75rem] bg-gradient-to-r from-gray-400 to-gray-600 p-[4px] transition hover:shadow-[0_0_25px_#888]">
              <Image
                src="/avatar.webp"
                alt="profile"
                width={280}
                height={210}
                priority
                className="aspect-[4/3] w-full rounded-[1.5rem] bg-black object-cover"
              />
            </div>
          </div>
        </section>

        <section className="relative mb-12">
          <div className="mb-5 flex items-end justify-between border-b border-white/10 pb-3">
            <h2 className="text-2xl font-semibold tracking-wide text-gray-600 dark:text-gray-400">
              Currently Working
            </h2>
            <span className="text-xs tracking-[0.18em] text-gray-500 uppercase">
              Projects
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((project: { url: string; name: string; active: boolean; description: string }, index: number) => (
              <div key={index} className="group relative rounded-2xl border border-white/10 bg-black/5 px-5 py-4 transition hover:border-blue-500/30">
                <div className="flex items-center justify-between gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                  >
                    {project.name}
                  </a>

                  {project.active ? (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      live
                    </span>
                  ) : (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
                      inactive
                    </span>
                  )}
                </div>
                <div className="pointer-events-none absolute left-4 top-full z-50 mt-2 w-max max-w-xs scale-95 rounded-lg border border-gray-700 bg-[#111] px-3 py-2 text-sm text-gray-300 opacity-0 shadow-[0_0_20px_rgba(0,0,0,0.6)] transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                  {project.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-black/5 p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-12 top-8 h-40 w-40 rounded-full border border-blue-500/10" />
          <div className="pointer-events-none absolute right-24 top-14 h-px w-32 rotate-[22deg] bg-white/10" />
          <h2 className="relative z-10 mb-6 text-lg font-semibold tracking-wide text-gray-600 dark:text-gray-400">
            GitHub Contributions
          </h2>

          <div className="relative z-10">
            <GithubChart />
          </div>
        </section>

        <div className="h-4" />

        <footer className="mb-16 flex flex-col items-center gap-8">
          <a
            href="https://github.com/SourabhGoswamii"
            className="cursor-pointer text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          >
            what I&apos;m doing now →
          </a>

          <div className="flex gap-8 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/SourabhGoswamii" target="_blank" rel="noreferrer">
              <GithubIcon className="text-2xl transition duration-200 hover:scale-125 hover:text-gray-900 dark:hover:text-white" />
            </a>

            <a href="https://www.instagram.com/iam.sourabhm/" target="_blank" rel="noreferrer">
              <InstagramIcon className="text-2xl transition duration-200 hover:scale-125 hover:text-gray-900 dark:hover:text-white" />
            </a>

            <a href="https://www.linkedin.com/in/sourabh-goswamii" target="_blank" rel="noreferrer">
              <LinkedinIcon className="text-2xl transition duration-200 hover:scale-125 hover:text-gray-900 dark:hover:text-white" />
            </a>

            <a href="https://x.com/SourabhGoswammi" target="_blank" rel="noreferrer">
              <TwitterIcon className="text-2xl transition duration-200 hover:scale-125 hover:text-gray-900 dark:hover:text-white" />
            </a>

            <a href="https://huggingface.co/SourabhGoswami" target="_blank" rel="noreferrer">
              <SiHuggingface className="text-2xl transition duration-200 hover:scale-125 hover:text-yellow-400" />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
