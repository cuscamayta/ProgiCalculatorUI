import { createRouter, createWebHistory } from "vue-router";
import PriceCalculator from "../modules/priceCalculator/routes";
import NotFoundPage from "../core/views/404.vue";

const routes = [
  ...PriceCalculator,
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
