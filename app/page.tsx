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
    <main className="mt-10 text-gray-900 dark:text-white flex flex-col items-center px-4">
      {/* HERO SECTION (RESTORED CLEAN STYLE) */}
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-0 items-center mb-12">
        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-3xl font-semibold text-gray-300">
            Hello! I’m
          </h1>

          <h2 className="text-4xl md:text-4xl font-bold text-blue-700 dark:text-blue-500 mt-2">
            Sourabh Goswami
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <div className="p-[4px] rounded-full bg-gradient-to-r from-gray-400 to-gray-600 hover:shadow-[0_0_25px_#888] transition">
            <Image
              src="/avatar.webp"
              alt="profile"
              width={208}
              height={208}
              className="w-52 h-52 rounded-full object-cover bg-black"
            />
          </div>
        </div>
      </div>

      {/* CURRENTLY WORKING */}
      <div className="max-w-4xl w-full ">
        <h3 className="text-2xl  font-semibold text-gray-600 dark:text-gray-400 mb-4 tracking-wide">
          Currently Working
        </h3>

        <div className="space-y-1">
          {projects.map((project: { url: string; name: string; active: boolean; description: string }, index: number) => (
            <div key={index} className="relative group">
              {/* TOP ROW */}
              <div className="flex items-center gap-8">
                <a
                  href={project.url}
                  target="_blank"
                  className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:text-blue-400 transition-colors"
                >
                  {project.name}
                </a>

                {project.active ? (
                  <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-600 dark:text-gray-500 border border-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    inactive
                  </span>
                )}
              </div>

              {/* FLOATING TOOLTIP */}
              <div className="absolute left-0 top-full mt-2 w-max max-w-xs bg-[#111] text-gray-300 text-sm px-3 py-2 rounded-lg border border-gray-700 shadow-[0_0_20px_rgba(0,0,0,0.6)] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50 pointer-events-none">
                {project.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GITHUB CONTRIBUTIONS */}
      <div className="max-w-4xl w-full mt-10">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4 tracking-wide">
          GitHub Contributions
        </h3>

        <GithubChart />
      </div>

      {/* EXTRA SPACE */}
      <div className="h-10" />

      {/* FOOTER / SOCIAL */}
      <div className="flex flex-col items-center gap-8 mb-16">
        <a
          href="https://github.com/SourabhGoswamii"
          className="text-gray-600 dark:text-gray-500 text-sm hover:text-gray-900 dark:text-white transition cursor-pointer"
        >
          what I&apos;m doing now →
        </a>

        <div className="flex gap-8 text-gray-600 dark:text-gray-400">
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
    </main>
  );
}
