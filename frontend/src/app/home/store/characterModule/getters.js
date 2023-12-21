const getters = {
  get_pokeSearch: (state) => state.pokeSearch,
  get_characters: (state) => {
    if (state.pokeSearch) {
      const keywords = state.pokeSearch
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);

      return state.characters.filter((el) => {
        return keywords.every((keyword) =>
          el.name.toLowerCase().includes(keyword)
        );
      });
    } else return state.characters;
  },
};

export default getters;
