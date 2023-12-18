import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import VueAnimXYZ from "@animxyz/vue";
import "@animxyz/core";
import "./registerServiceWorker";
import "./utilities/sass/global.sass";

Vue.use(VueAnimXYZ);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
