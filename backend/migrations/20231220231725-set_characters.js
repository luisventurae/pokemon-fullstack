const { asyncGet } = require("./util/requests");

module.exports = {
  async up(db, client) {
    const Character = db.collection("characters");
    Character.createIndex({ name: 1, unique: 1 });

    const url = "https://pokeapi.co/api/v2";
    const responsePokemons = await asyncGet(
      `${url}/pokemon?limit=100000&offset=0`
    );
    const pokemons = responsePokemons.results;
    console.log("pokemons", pokemons);
    await Character.insertMany(pokemons);
    for await (const character of pokemons) {
      const responseCharacter = await asyncGet(
        `${url}/pokemon/${character.name}`
      );
      await Character.updateOne(
        { name: character.name },
        {
          $set: responseCharacter,
        }
      );
    }
  },

  async down(db, client) {
    const Character = db.collection("characters");
    await Character.deleteMany();
    Character.dropIndex({ name: 1, unique: 1 });
  },
};
