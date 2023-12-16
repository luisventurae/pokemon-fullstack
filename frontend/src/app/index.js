import home from "./home";
// debugger;
const routes = [...home.routes];
console.log("2.routes", routes);

const store = {
  modules: {
    ...home.store.modules,
  },
};

export default {
  routes,
  store,
};
