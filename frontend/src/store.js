import Vue from "vue";
import Vuex from "vuex";
import app from "./app/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: app.store.modules,
});
