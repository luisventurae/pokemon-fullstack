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
        this.dispatch("getCharacterAction", {
          name: character.name,
          action: "update",
        });
      }
      return { nextPage: ++page };
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  /**
   * @async
   * @param {context} context
   * @param {object}  payload
   * @param {string}  payload.name
   * @param {string}  payload.action ["update", "onlyGet"]
   * @returns {Promise<void|error>}
   */
  async getCharacterAction(context, { name, action }) {
    try {
      if (!["update", "onlyGet"].includes(action))
        throw new ReferenceError(`value action not supported`);
      const character = await backend.GET(`pokemon/${name}`);
      const specie = await backend.GET(`pokemon-species/${name}`);
      const characterBuilt = {
        name: name,
        id: character.id,
        imageURL: character.sprites.other.dream_world.front_default,
        types: character.types.map((el) => el.type.name),
        beforeEvolution: specie.evolves_from_species?.name,
      };
      if (action === "update")
        this.commit("SET_DATA_CHARACTER", characterBuilt);
      if (action === "onlyGet") return characterBuilt;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};

export default actions;
