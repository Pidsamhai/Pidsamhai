<template>
  <v-app>
    <v-app-bar elevation="4" color="yellow lighten-3">
      <v-app-bar-title>Pidsamhai</v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="ml-2 flex flex-row gap-2 h-full items-center">
        <MenuButton title="Home" to="/" />
        <MenuButton title="About" to="/about" />
        <MenuButton title="Project" to="/project" />
        <GithubRepo />
      </div>
    </v-app-bar>
    <v-main class="bg-yellow-50">
      <router-view />
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
export default class App extends Vue {}
</script>
