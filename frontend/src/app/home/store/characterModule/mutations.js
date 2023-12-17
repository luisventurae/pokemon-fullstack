import initialState from "./initialState";

const mutations = {
  RESET_CHARACTER_MODULE(state) {
    const iste = initialState();
    Object.keys(iste).forEach((key) => {
      state[key] = iste[key];
    });
  },

  /**
   * @param {state}     state
   * @param {object[]}  characters
   * @returns {void}
   */
  SET_ALL_CHARACTERS(state, characters) {
    state.characters = characters;
  },
};

export default mutations;
