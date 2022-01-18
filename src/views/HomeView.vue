<template>
  <div
    class="tw-h-full tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-mx-auto"
  >
    <p class="text-h2 font-weight-bold">Pidsamhai</p>
    <p class="text-body tw-font-mono tw-p-4">
      Pidsamhai (pid-sam-mhai) is the Thai world meanig, passionate something
    </p>
    <div class="tw-flex tw-flex-row tw-gap-2">
      <v-icon>mdi-github</v-icon>
      <v-icon>mdi-facebook</v-icon>
      <v-icon>mdi-email</v-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuButton from "@/components/MenuButton.vue"; // @ is an alias to /src

@Options({
  components: { MenuButton },
})
export default class HomeView extends Vue {}
</script>
