<template>
  <v-app :theme="theme">
    <v-app-bar elevation="4" color="primary lighten-3">
      <v-app-bar-title>Pidsamhai</v-app-bar-title>
      <v-spacer></v-spacer>
      <div
        class="tw-mr-2 tw-flex tw-flex-row tw-gap-2 tw-h-full tw-items-center"
      >
        <MenuButton title="Home" to="/" />
        <MenuButton title="About" to="/about" />
        <MenuButton title="Project" to="/project" />
        <v-btn @click="toggleTheme()" icon color="transparent">
          <v-icon size="36">mdi-brightness-6</v-icon>
        </v-btn>
        <GithubRepo />
      </div>
    </v-app-bar>
    <v-main>
      <keep-alive>
        <router-view :key="$route.fullPath" />
      </keep-alive>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuButton from "@/components/MenuButton.vue";
import GithubRepo from "@/components/GithubRepo.vue";
@Options({
  components: { MenuButton, GithubRepo },
})
export default class App extends Vue {
  theme = localStorage.getItem("theme");
  items = [
    { title: "Home", icon: "mdi-view-dashboard" },
    { title: "About", icon: "mdi-forum" },
  ];
  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", this.theme);
  }
}
</script>
