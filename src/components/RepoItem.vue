<template>
  <v-card
    class="mx-auto tw-w-full tw-break-words hover:!tw-shadow-xl"
    :color="$vuetify.theme.current == `light` ? `#FFCBCB` : null"
    dark
    elevation="0"
    rounded="xl"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title
          class="text-h6 tw-mt-3 mb-1 !tw-uppercase hover:tw-underline"
        >
          <a :href="item.html_url" target="_blank">{{ item.name }}</a>
        </v-list-item-title>
        <v-list-item-subtitle v-if="item.description">{{
          item.description
        }}</v-list-item-subtitle>
        <div class="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-mt-4">
          <div><v-icon>mdi-git</v-icon> {{ item.forks_count }}</div>
          <div><v-icon>mdi-album</v-icon> {{ item.open_issues_count }}</div>
          <div><v-icon>mdi-star</v-icon> {{ item.stargazers_count }}</div>
        </div>
      </v-list-item-content>
      <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
    </v-list-item>

    <v-card-actions v-if="langs.length != 0">
      <div class="tw-flex tw-row tw-gap-2 tw-flex-wrap">
        <template v-for="(num, lang) in langs" :key="num">
          <v-chip color="#F6F6F6">
            {{ lang }}
          </v-chip>
        </template>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Repository } from "@/types/Repository";
import { Vue, prop } from "vue-class-component";

class Prop {
  item = prop<Repository>({ required: true });
}

export default class RepoItem extends Vue.with(Prop) {
  langs: Array<string> = [];
  async fetchLang() {
    const result = await this.axios.get<Array<string>>(this.item.languages_url);
    this.langs = result.data;
  }
  created() {
    this.fetchLang();
  }
}
</script>
