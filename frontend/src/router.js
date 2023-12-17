import Vue from "vue";
import VueRouter from "vue-router";
import app from "./app/index";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: app.routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

export default router;
