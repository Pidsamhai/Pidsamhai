// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { Repository } from "./types/Repository";

// define your typings for the store state
export interface State {
  count: number;
  repositories: Array<Repository>;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    repositories: [],
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
