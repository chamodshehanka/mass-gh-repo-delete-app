import {GitHubService} from "./github/github.service";

async function main() {
    console.log("Mass GitHub repo delete app starting...");
    await deleteStageOrgSearchedRepos();
    console.log("Mass GitHub repo delete app work done!!!!!");
}

main()
    .then()
    .catch((e) => console.error("App Error:", e));

async function deleteStageOrgSearchedRepos() {
    const githubService = new GitHubService();

    // const repos = await githubService.getAllRepos();
    // console.log(`Found ${repos.length} repos`);

    const searchQueryTemp =
        "org%3Achoreo-userapps-gitops-staging+choreo-app-build-artifact+in%3Afile&type=Code";
    const searchQuery = encodeURIComponent(
        "choreo-app-build-artifact+in:file+org:choreo-userapps-gitops-staging"
    );

    const testSearchQuery = encodeURIComponent(
        "config-schema in:file org:WUSL17 type:Code"
    );

    const searchResults = await githubService.searchGitHubCode(
        "org:choreo-userapps-gitops-staging+choreo-app-build-artifact+in:file"
    );
    const searchResultsCount = searchResults.total_count;
    console.log(`Found ${JSON.stringify(searchResultsCount)} search results`);
    const searchResultItems = searchResults.items;

    const filteredReposList: string[] = [];
    searchResultItems.forEach((item) => {
        filteredReposList.push(item.repository.name);
    });
    console.log("Filtered Repos List Size:", filteredReposList.length);
    console.log("Filtered Repos List:", filteredReposList);

    for (const repoName of filteredReposList) {

        setTimeout(async () => {
            console.log("Deleting repo:", repoName);
            await githubService.deleteRepoByName(repoName);
            console.log("Repo deleted: ", repoName);
        }, 800)

    }

}
