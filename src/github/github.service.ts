import appConfigs from "../config/config.service";
import { Octokit } from "@octokit/core";

export class GitHubService {
  private readonly githubToken: string;
  private readonly githubOrgName: string;
  private readonly octokit: Octokit;

  constructor() {
    this.githubToken = appConfigs.githubToken;
    this.githubOrgName = appConfigs.githubOrgName;
    this.octokit = new Octokit({
      auth: this.githubToken,
    });
  }

  public async getAllRepos() {
    const res = await this.octokit.request("GET /orgs/:org/repos", {
      org: this.githubOrgName,
    });

    return res.data;
  }
}
