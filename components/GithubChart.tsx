"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubChart() {
  return (
    <div className="w-full overflow-x-auto">
      <GitHubCalendar username="SourabhGoswamii" colorScheme="dark" />
    </div>
  );
}
