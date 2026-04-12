"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full overflow-x-auto min-h-[150px]"></div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <GitHubCalendar username="SourabhGoswamii" colorScheme="dark" />
    </div>
  );
}
