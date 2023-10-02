import { App } from "vue";

export default {
  install: (app: App) => {
    app.provide("hello", (param?: any) => {
      return `Hello ${param}`;
    });
  },
};
