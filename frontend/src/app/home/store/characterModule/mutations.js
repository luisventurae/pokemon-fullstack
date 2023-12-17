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
    characters.forEach((el) => {
      if (!el.imageURL) el.imageURL = "";
    });
    state.characters = characters;
  },

  /**
   * @param {state} state
   * @param {object} args
   * @param {string} args.name Para buscar en la lista
   */
  SET_DATA_CHARACTER(state, { name, imageURL }) {
    const character = state.characters.find((el) => el.name === name);
    console.assert(character, `Character "${name}" not found`);
    if (character) {
      character.imageURL = imageURL;
    }
  },
};

export default mutations;
