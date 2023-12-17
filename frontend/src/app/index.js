import home from "./home";

/**
 * Vue Router
 */
const routes = [...home.routes];

/**
 * Vuex Modules
 */
const store = {
  modules: {
    ...home.store.modules,
  },
};

export default {
  routes,
  store,
};
