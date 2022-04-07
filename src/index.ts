import { GitHubService } from "./github/github.service";

async function main() {
  console.log("Mass GitHub repo delete app starting...");
  const githubService = new GitHubService();
  const repos = await githubService.getAllRepos();

  console.log(`Found ${repos.length} repos`);

  console.log("Mass GitHub repo delete app work done!!!!!");
}

main()
  .then()
  .catch((e) => console.error("App Error:", e));
