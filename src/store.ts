// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

// define your typings for the store state
export interface State {
  themeMode: ThemeMode;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    themeMode: (localStorage.getItem("theme") || "light") as ThemeMode,
  },
  mutations: {
    toggleTheme(state) {
      const theme = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      state.themeMode = theme;
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
