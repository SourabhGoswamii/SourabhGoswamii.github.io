export async function getRecentRepos() {
  const username = "SourabhGoswamii";

  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    }
  );

  const repos = await reposRes.json();

  const oneMonthAgo = new Date();
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

  return repos.slice(0, 5).map((repo: { name: string; description: string; html_url: string; pushed_at: string }) => {
    const lastPush = new Date(repo.pushed_at);
    const isActive = lastPush > oneMonthAgo;

    return {
      name: repo.name,
      description: repo.description || "No description available",
      url: repo.html_url,
      active: isActive,
      lastUpdated: repo.pushed_at,
    };
  });
}