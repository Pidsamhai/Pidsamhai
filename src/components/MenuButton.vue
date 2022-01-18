<template>
  <router-link v-bind:to="to" custom v-slot="{ navigate, isActive }">
    <div
      class="menu-button tw-flex tw-flex-col tw-gap-1 tw-items-center"
      :class="{ active: isActive }"
      @click="navigate"
      @keypress.enter="navigate"
      role="link"
    >
      <div class="title text-button">{{ title }}</div>
      <div class="indicator tw-h-[4px] tw-rounded-full bg-indicator"></div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { Vue, prop } from "vue-class-component";
class Prop {
  public title = prop<string>({ required: true });
  public to = prop<string>({
    default: "#",
    required: false,
  });
}

export default class MenuButton extends Vue.with(Prop) {}
</script>

<style scoped lang="scss">
.menu-button {
  cursor: pointer;
  .title {
    font-size: small;
    text-transform: uppercase;
    opacity: 0.5;
    transition: opacity 0.25s ease-out;
  }
  &:hover,
  &.active {
    .title {
      opacity: 1;
    }
    .indicator {
      width: 100%;
    }
  }
  .indicator {
    width: 0;
    transition: background-color 0.25s ease-out;
    transition: width 0.25s ease-out;
  }
}
</style>
