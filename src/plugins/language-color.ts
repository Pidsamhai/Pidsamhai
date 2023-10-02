import { LanguageColor } from "@/types/language-color";
import { App } from "vue";
import colors from "@/assets/color.json";

export type ColorKey = keyof typeof colors;
export type Color = typeof colors;

export default {
  install: (app: App) => {
    app.config.globalProperties.$languageColor = colors;
    app.provide("languageColor", colors);
  },
};

declare module "vue" {
  //Bind to `this` keyword
  interface ComponentCustomProperties {
    $languageColor: Color;
  }
}
