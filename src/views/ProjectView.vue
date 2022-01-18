<template>
  <div
    v-if="isLoading"
    class="tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center"
  >
    <v-progress-circular
      :size="42"
      :width="5"
      color="secondary"
      indeterminate
    ></v-progress-circular>
  </div>
  <div
    v-else
    class="tw-flex tw-items-center tw-justify-center tw-m-4 tw-w-full"
  >
    <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-max-w-3xl">
      <template v-for="(item, index) in store.state.repositories" :key="index">
        <RepoItem :item="item" />
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import RepoItem from "@/components/RepoItem.vue";
import { useStore } from "@/store";
@Options({
  components: { RepoItem },
})
export default class ProjectView extends Vue {
  store = useStore();
  attrs = {
    class: "mb-6",
    boilerplate: true,
    elevation: 2,
  };
  isLoading = false;
  async fetch() {
    this.isLoading = true;
    this.store.state.repositories = await this.$apiServices.gerRepository();
    this.isLoading = false;
  }
  mounted() {
    if (this.store.state.repositories.length == 0) {
      this.fetch();
    }
  }
}
</script>
