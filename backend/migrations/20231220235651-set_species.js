const { asyncGet } = require("./util/requests");

module.exports = {
  async up(db, client) {
    const Character = db.collection("characters");
    const Specie = db.collection("species");
    Specie.createIndex({ character_id: 1 });

    const url = "https://pokeapi.co/api/v2";
    const characters = Character.find({});
    for await (const character of characters) {
      const responseSpecie = await asyncGet(
        `${url}/pokemon-species/${character.name}`
      );
      await Specie.insertOne({
        character_id: character._id,
        ...responseSpecie,
      });
    }
  },

  async down(db, client) {
    const Specie = db.collection("species");
    await Specie.deleteMany();
    Specie.dropIndex({ character_id: 1 });
  },
};
