import { createApp } from "vue";
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

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueAxios, axios)
  .use(store, key)
  .use(ApiServices)
  .use(LanguageColor)
  .mount("#app");
