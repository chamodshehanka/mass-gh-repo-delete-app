import * as dotenv from "dotenv";
import "dotenv/config";

export interface AppConfigs {
  githubToken: string;
  githubOrgName: string;
}

const dotenvData = dotenv.config();

const appConfigs: AppConfigs = {
  githubToken: dotenvData.parsed!.GH_TOKEN,
  githubOrgName: dotenvData.parsed!.GH_ORG_NAME,
};

export default appConfigs;
