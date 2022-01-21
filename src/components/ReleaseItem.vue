<template>
  <div
    :class="{ dark: store.state.themeMode == `dark` }"
    class="release-item tw-flex-row tw-flex tw-text-base md:tw-text-lg tw-justify-between tw-p-4"
  >
    <a :href="item.html_url" target="_blank">
      {{ item.url.split("/").reverse()[2] }} :
      {{ item.tag_name }}
    </a>
    <p>
      {{
        new Date(Date.parse(item.published_at)).toLocaleString("default", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
      }}
    </p>
  </div>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { Release } from "@/types/release";
import { Vue, prop } from "vue-class-component";

class Prop {
  item = prop<Release>({ required: true });
}

export default class ReleaseItem extends Vue.with(Prop) {
  store = useStore();
  showChangelog = false;
}
</script>
<style scoped lang="scss">
.release-item {
  border-bottom: 2px dotted black;
  &.dark {
    border-bottom: 2px dotted white;
  }
}
</style>
