<template>
  <v-app-bar elevation="4" color="primary lighten-3">
    <v-app-bar-title>Pidsamhai</v-app-bar-title>
    <v-spacer></v-spacer>
    <div class="tw-mr-2 tw-flex tw-flex-row tw-gap-2 tw-h-full tw-items-center">
      <MenuButton title="Home" to="/" />
      <MenuButton title="About" to="/about" />
      <MenuButton title="Project" to="/project" />
      <MenuButton title="Release" to="/release" />
      <v-btn @click="toggleTheme()" icon color="transparent">
        <v-icon size="36">mdi-brightness-6</v-icon>
      </v-btn>
      <GithubRepo />
    </div>
  </v-app-bar>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { Vue, Options } from "vue-class-component";
import MenuButton from "@/components/MenuButton.vue";

@Options({
  components: { MenuButton },
})
export default class ToolBar extends Vue {
  store = useStore();
  toggleTheme() {
    this.store.commit("toggleTheme");
    // this.state.themeMode = this.state.themeMode === "light" ? "dark" : "light";
    // localStorage.setItem("theme", this.theme);
  }
}
</script>
