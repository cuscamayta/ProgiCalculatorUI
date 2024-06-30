import { createRouter, createWebHistory } from "vue-router";
import PriceCalculator from "../views/PriceCalculator.vue";
import NotFoundPage from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "PriceCalculator",
    component: PriceCalculator,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
