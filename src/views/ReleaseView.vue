<template>
  <div class="tw-p-4 tw-h-full tw-w-full tw-flex-col tw-flex">
    <div class="tw-text-2xl md:tw-text-3xl font-weight-bold tw-mt-4 tw-mb-4">
      Latest Release track
    </div>
    <div class="tw-grow tw-h-0">
      <div>
        <template v-for="(item, index) in release" :key="index">
          <ReleaseItem :item="item" />
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Release } from "@/types/release";
import { Vue, Options } from "vue-class-component";
import ReleaseItem from "@/components/ReleaseItem.vue";

@Options({
  components: { ReleaseItem },
})
export default class ReleaseView extends Vue {
  release: Array<Release> = [];
  isLoading = false;
  async fetch() {
    this.isLoading = true;
    this.release = await this.$apiServices.getRelease();
    this.isLoading = false;
  }
  mounted() {
    this.fetch();
  }
}
</script>
