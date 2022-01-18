import { App } from "vue";
import { GithubApiServices, IGithubApiServices } from "./github-api.services";

export default {
  install: (app: App) => {
    const apiServiceModules: IGithubApiServices = new GithubApiServices();
    app.config.globalProperties.$apiServices = apiServiceModules;
  },
};

declare module "@vue/runtime-core" {
  //Bind to `this` keyword
  interface ComponentCustomProperties {
    $apiServices: GithubApiServices;
  }
}
