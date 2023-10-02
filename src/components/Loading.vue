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
import { Vue, Component } from 'vue-facing-decorator'
@Component
export default class Loading extends Vue {}
</script>
