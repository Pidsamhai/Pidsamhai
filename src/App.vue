<template>
  <v-app :theme="store.state.themeMode">
    <AppBar />
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppBar from "./components/AppBar.vue";
import ProjectView from "@/views/ProjectView.vue";
import { useStore } from "@/store";
@Options({
  components: { AppBar, ProjectView },
})
export default class App extends Vue {
  store = useStore();
  items = [
    { title: "Home", icon: "mdi-view-dashboard" },
    { title: "About", icon: "mdi-forum" },
  ];
}
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
