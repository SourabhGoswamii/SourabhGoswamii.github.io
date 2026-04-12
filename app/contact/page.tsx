"use client";

import { Mail} from "lucide-react";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa6";
export default function ContactPage() {
  return (
    <div className=" mt-30 flex flex-col items-center justify-center text-center px-6 text-gray-900 dark:text-white">
      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
        Get in Touch
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-400 mb-10 text-base md:text-lg">
        Always open for collaborations, new ideas, or just a friendly chat.
      </p>

      {/* CONTACT LIST */}
      <div className="space-y-6 text-gray-300 text-lg">
        {/* EMAIL */}
        <div className="flex items-center gap-3 justify-center hover:text-gray-900 dark:text-white transition">
          <Mail size={18} />
          <a href="mailto:sourabhgoswami2211@gmail.com">
            sourabhgoswami2211@gmail.com
          </a>
        </div>

        {/* GITHUB */}
        <div className="flex items-center gap-3 justify-center hover:text-gray-900 dark:text-white transition">
          <GithubIcon size={18} />
          <a href="https://github.com/SourabhGoswamii" target="_blank">
            github.com/SourabhGoswamii
          </a>
        </div>

        {/* LINKEDIN */}
        <div className="flex items-center gap-3 justify-center hover:text-gray-900 dark:text-white transition">
          <LinkedinIcon size={18} />
          <a
            href="https://www.linkedin.com/in/sourabh-goswamii"
            target="_blank"
          >
            linkedin.com/in/sourabh-goswamii
          </a>
        </div>

        {/* TWITTER / X */}
        <div className="flex items-center gap-3 justify-center hover:text-gray-900 dark:text-white transition">
          <TwitterIcon size={18} />
          <a href="https://x.com/SourabhGoswammi" target="_blank">
            twitter.com/SourabhGoswammi
          </a>
        </div>
      </div>
    </div>
  );
}
