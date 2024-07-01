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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
