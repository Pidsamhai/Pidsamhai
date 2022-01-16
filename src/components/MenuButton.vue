<template>
  <router-link v-bind:to="to" custom v-slot="{ navigate, isActive }">
    <div
      class="menu-button flex flex-col gap-1 items-center"
      :class="{ active: isActive }"
      @click="navigate"
      @keypress.enter="navigate"
      role="link"
    >
      <p class="title">{{ title }}</p>
      <div class="indicator h-[4px] rounded-full"></div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";
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
      background-color: black;
    }
  }
  .indicator {
    width: 0;
    transition: background-color 0.25s ease-out;
    transition: width 0.25s ease-out;
  }
}
</style>
