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
      const response = await backend.GET(`pokemon/${name}`);
      console.log("response.data.sprites", response.data.sprites);
      const characters = response.data;
      this.commit("SET_DATA_CHARACTER", {
        name: name,
        imageURL: characters.sprites.other.dream_world.front_default,
      });
    } catch (error) {
      return error;
    }
  },
};

export default actions;
