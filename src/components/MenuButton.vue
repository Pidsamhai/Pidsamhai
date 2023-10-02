<template>
  <router-link v-bind:to="to" custom v-slot="{ navigate, isActive }">
    <div
      class="menu-button tw-flex tw-flex-col tw-gap-1 tw-items-center"
      :class="{ active: isActive }"
      @click="navigate"
      @keypress.enter="() => navigate()"
      role="link"
    >
      <div class="title text-button">{{ title }}</div>
      <div class="indicator tw-h-[4px] tw-rounded-full bg-indicator"></div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-facing-decorator";

@Component
export default class MenuButton extends Vue {
  @Prop({ required: true })
  title!: string;
  @Prop({ default: "#" })
  to!: string;
}
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
