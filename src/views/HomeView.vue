<template>
  <div class="h-full w-full"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuButton from "@/components/MenuButton.vue"; // @ is an alias to /src

@Options({
  components: { MenuButton },
})
export default class HomeView extends Vue {}
</script>
