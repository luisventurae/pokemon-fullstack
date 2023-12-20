const https = require("https");

/**
 * @async
 * @param {string} url
 * @returns {Promise<any>}
 */
const asyncGet = async (url) => {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        return resolve(JSON.parse(data));
      });
    });
    request.on("error", (error) => {
      return reject(error);
    });
  });
};

module.exports = {
  async up(db, client) {
    const Character = db.collection("characters");

    const url = "https://pokeapi.co/api/v2";
    const responsePokemons = await asyncGet(
      `${url}/pokemon?limit=100000&offset=0`
    );
    const pokemons = responsePokemons.results;
    console.log("pokemons", pokemons);
    await Character.insertMany(pokemons);
  },

  async down(db, client) {
    const Character = db.collection("characters");
    await Character.deleteMany();
  },
};
