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
      if (!el.id) el.id = "";
      if (!el.imageURL) el.imageURL = "";
      if (!el.types) el.types = [];
      if (!el.beforeEvolution) el.beforeEvolution = "";
    });
    state.characters = characters;
  },

  /**
   * @param {state}     state
   * @param {object[]}  characters
   * @returns {void}
   */
  CONCAT_CHARACTERS(state, characters) {
    characters.forEach((el) => {
      if (!el.id) el.id = "";
      if (!el.imageURL) el.imageURL = "";
      if (!el.types) el.types = [];
      if (!el.beforeEvolution) el.beforeEvolution = "";
    });
    state.characters = state.characters.concat(characters);
  },

  /**
   * @param {state}     state
   * @param {object}    args
   * @param {string}    args.name Para buscar en la lista
   * @param {string}    args.id
   * @param {string}    args.imageURL
   * @param {string[]}  args.types
   * @param {string}    args.beforeEvolution
   */
  SET_DATA_CHARACTER(state, { name, id, imageURL, types, beforeEvolution }) {
    const character = state.characters.find((el) => el.name === name);
    console.assert(character, `Character "${name}" not found`);
    if (character) {
      character.id = id;
      character.imageURL = imageURL;
      character.types = types;
      character.beforeEvolution = beforeEvolution;
    }
  },

  /**
   * @param {state}   state
   * @param {object}  args
   * @param {string}  args.pokeSearch
   */
  SET_POKE_SEARCH(state, { pokeSearch }) {
    state.pokeSearch = pokeSearch;
  },
};

export default mutations;
