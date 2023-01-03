import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/StockView.vue"),
  },
  {
    path: "/stock",
    name: "stock",
    component: () => import("@/views/StockView.vue"),
  },
  {
    path: "/economy",
    name: "economy",
    component: () => import("@/views/EconomyView.vue"),
  },
  {
    path: "/balance",
    name: "balance",
    component: () => import("@/views/BalanceView.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("@/views/PortfolioView.vue"),
  },
  {
    path: "*",
    name: "noPage",
    component: () => import("@/views/notFoundPage.vue"),
  },
];

const router = new VueRouter({
  routes
})

export default router
