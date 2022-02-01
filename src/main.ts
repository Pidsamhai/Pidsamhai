import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./index.scss";
import axios from "axios";
import VueAxios from "vue-axios";
import { key, store } from "./store";
import ApiServices from "@/plugins/github-api";
import LanguageColor from "@/plugins/language-color";
import devtools from "@vue/devtools";

loadFonts();

createApp({
  created() {
    if (process.env.NODE_ENV == "development") {
      devtools.connect("http://localhost", 8098);
    }
  },
  render: () => h(App),
})
  .use(router)
  .use(vuetify)
  .use(VueAxios, axios)
  .use(store, key)
  .use(ApiServices)
  .use(LanguageColor)
  .mount("#app");
