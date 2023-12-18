import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:pokemon",
    name: "detail",
    component: DetailView,
  },
];

export default routes;
