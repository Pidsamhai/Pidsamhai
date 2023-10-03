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
    path: "/app",
    name: "app",
    props: true,
    children: [
      {
        path: "moviedb",
        name: "app-moviedb",
        props: true,
        children: [
          {
            path: "privacypolicy",
            name: "privacypolicy",
            component: () => import("@/views/PrivacyPolicyView.vue"),
            props: true,
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    redirect: "/",
    props: true,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
