import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
    props: true,
  },
  {
    path: "/project",
    name: "project",
    component: () => import("@/views/ProjectView.vue"),
    props: true,
  },
  {
    path: "/release",
    name: "release",
    component: () => import("@/views/ReleaseView.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    redirect: "/",
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
