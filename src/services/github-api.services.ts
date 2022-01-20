import { Repository } from "@/types/Repository";
import axios from "axios";

export interface IGithubApiServices {
  gerRepository(
    sortBy: "created" | "updated" | "pushed" | "full_name",
    sortDirection: "asc" | "desc"
  ): Promise<Array<Repository>>;
}

export class GithubApiServices implements IGithubApiServices {
  private api = axios.create({
    baseURL: "https://api.github.com/orgs/Pidsamhai",
  });
  async gerRepository(
    sortBy = "pushed",
    sortDirection = "desc"
  ): Promise<Repository[]> {
    try {
      const result = await this.api.get<Array<Repository>>("repos", {
        params: {
          sort: sortBy,
          direction: sortDirection,
        },
      });
      return result.data;
    } catch (error) {
      return [];
    }
  }
}
