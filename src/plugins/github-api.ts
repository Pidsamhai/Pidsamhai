import { App } from "vue";
import {
  GithubApiServices,
  IGithubApiServices,
} from "../services/github-api.services";

export default {
  install: (app: App) => {
    const apiServiceModules: IGithubApiServices = new GithubApiServices();
    app.provide("apiServices", apiServiceModules);
    app.config.globalProperties.$apiServices = apiServiceModules;
  },
};

declare module "vue" {
  //Bind to `this` keyword
  interface ComponentCustomProperties {
    $apiServices: IGithubApiServices;
  }
}
