<template>
  <v-app :theme="store.state.themeMode">
    <AppBar />
    <v-main>
      <div class="tw-w-full tw-justify-center tw-flex tw-h-full">
        <div class="tw-max-w-3xl">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </div>
    </v-main>
    <v-footer
      max-height="100"
      height="100"
      min-height="100"
      class="bg-background"
    >
      <div class="text-center tw-w-full">
        <p class="copy-right">Ⓒ Pidsamhai {{ new Date().getFullYear() }}</p>
      </div>
    </v-footer>
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
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
