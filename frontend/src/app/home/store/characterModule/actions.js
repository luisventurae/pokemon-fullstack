import backend from "@/utilities/helpers/backend";

const actions = {
  async test() {
    console.log("TEST OK!");
  },

  async paginateCharactersAction() {
    try {
      const limit = 20;
      const skip = 0;
      const response = await backend.GET(
        `pokemon?limit=${limit}&offset=${skip}`
      );
      console.log("response", response);
      const characters = response.data?.results;
      this.commit("SET_ALL_CHARACTERS", characters);
      for (let character of characters) {
        this.dispatch("getCharacterAction", character.name);
        // break;
      }
    } catch (error) {
      return error;
    }
  },

  async getCharacterAction(context, name) {
    try {
      const responseCharacter = await backend.GET(`pokemon/${name}`);
      const character = responseCharacter.data;
      console.log(
        "responseCharacter.data.sprites",
        responseCharacter.data.sprites
      );
      const responseSpecie = await backend.GET(`pokemon-species/${name}`);
      const specie = responseSpecie.data;
      console.log("responseSpecie.data", responseSpecie.data);
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
