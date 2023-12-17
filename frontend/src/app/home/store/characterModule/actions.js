import backend from "@/utilities/helpers/backend";

const actions = {
  async test() {
    console.log("TEST OK!");
  },

  async listCharactersAction() {
    try {
      const response = await backend.GET(`pokemon`);
      console.log("response", response);
      const characters = response.data?.results;
      this.commit("SET_ALL_CHARACTERS", characters);
    } catch (error) {
      return error;
    }
  },
};

export default actions;
