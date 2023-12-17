import characterModule from "./characterModule";

const actions = {
  resetMoSchedule(context) {
    context.commit("RESET_CHARACTER_MODULE");
  },
};

const modules = {
  characterModule,
};

export default {
  modules,
  actions,
};
