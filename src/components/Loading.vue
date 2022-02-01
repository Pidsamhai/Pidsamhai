<template>
  <div class="tw-flex tw-flex-col tw-gap-3 tw-items-center">
    <v-progress-circular
      :size="42"
      :width="5"
      color="secondary"
      indeterminate
    ></v-progress-circular>
    <p>Wait a sec...</p>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
export default class Loading extends Vue {}
</script>
