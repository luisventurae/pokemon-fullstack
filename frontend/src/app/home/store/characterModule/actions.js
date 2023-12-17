import backend from "@/utilities/helpers/backend";

const actions = {
  /**
   * @async
   * @param {context} context
   * @param {number}  page
   * @returns {Promise<object|error>}
   */
  async paginateCharactersAction(context, page) {
    try {
      const limit = 21;
      const skip = ((page || 1) - 1) * limit;
      const response = await backend.GET(
        `pokemon?limit=${limit}&offset=${skip}`
      );
      const characters = response?.results;
      this.commit("CONCAT_CHARACTERS", characters);
      for (let character of characters) {
        this.dispatch("getCharacterAction", character.name);
      }
      return { nextPage: ++page };
    } catch (error) {
      return error;
    }
  },

  /**
   * @async
   * @param {context} context
   * @param {string} name
   * @returns {Promise<void|error>}
   */
  async getCharacterAction(context, name) {
    try {
      const character = await backend.GET(`pokemon/${name}`);
      const specie = await backend.GET(`pokemon-species/${name}`);
      this.commit("SET_DATA_CHARACTER", {
        name: name,
        id: character.id,
        imageURL: character.sprites.other.dream_world.front_default,
        types: character.types.map((el) => el.type.name),
        beforeEvolution: specie.evolves_from_species?.name,
      });
    } catch (error) {
      return error;
    }
  },
};

export default actions;
