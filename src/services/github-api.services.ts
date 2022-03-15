import { Release } from "@/types/release";
import { Repository } from "@/types/repository";
import axios from "axios";

export interface IGithubApiServices {
  gerRepository(
    sortBy: "created" | "updated" | "pushed" | "full_name",
    sortDirection: "asc" | "desc"
  ): Promise<Array<Repository>>;

  getRelease(): Promise<Array<Release>>;
}

export class GithubApiServices implements IGithubApiServices {
  private nativeApiUrl = "https://api.github.com";
  private proxyApiUrl =
    "https://supabase-proxy-api.vercel.app/api/v1/template/3a5d1d95-2ade-4cbd-9f82-7dbb7322a523";

  private api = axios.create({
    baseURL: this.proxyApiUrl,
  });
  async gerRepository(
    sortBy = "pushed",
    sortDirection = "desc"
  ): Promise<Repository[]> {
    try {
      const result = await this.api.get<Array<Repository>>(
        "/orgs/Pidsamhai/repos",
        {
          params: {
            sort: sortBy,
            direction: sortDirection,
          },
        }
      );
      return result.data;
    } catch (error) {
      return [];
    }
  }

  async getRelease(): Promise<Release[]> {
    try {
      const repos = await this.gerRepository();
      const promises = repos.map((e) =>
        this.api.get<Array<Release>>(`/repos/Pidsamhai/${e.name}/releases`, {
          params: {
            per_page: 1,
          },
        })
      );
      const result = await axios.all(promises);
      return result
        .map((e) => e.data)
        .flat()
        .sort((a, b) => (a.published_at < b.published_at ? 1 : -1));
    } catch (error) {
      return [];
    }
  }

  async getLanguage(url: string): Promise<Record<string, number>> {
    const proxyUrl = url.replace(this.nativeApiUrl, this.proxyApiUrl);
    try {
      return (await axios.get(proxyUrl)).data;
    } catch (error) {
      return {};
    }
  }
}
