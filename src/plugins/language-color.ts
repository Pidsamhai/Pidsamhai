import { LanguageColor } from "@/types/language-color";
import { App } from "vue";
import color from "@/assets/color.json";
export default {
  install: (app: App) => {
    app.config.globalProperties.$languageColor = color;
  },
};

declare module "@vue/runtime-core" {
  //Bind to `this` keyword
  interface ComponentCustomProperties {
    $languageColor: {
      [key: string]: {
        color: string;
        url: string;
      };
    };
  }
}
