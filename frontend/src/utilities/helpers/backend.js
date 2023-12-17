import axios from "axios";

const backendPrefix = process.env.VUE_APP_BACKEND;
const backendURL = process.env[`VUE_APP_${backendPrefix}`];

const validateBackendHost = () => {
  if (!backendURL) console.error("ES NECESARIO COMPLETAR LOS VALORES DEL .env");
  else {
    const hostsPath = {
      POKEAPI: "",
      APIREST: "/api",
    };
    axios.defaults.baseURL = `${backendURL}${hostsPath[backendPrefix]}`;
  }
};
validateBackendHost();
console.log("backendURL", backendURL);

class API {
  constructor() {}

  /**
   * @async
   * @param {string} path
   * @returns {axios}
   */
  async GET(path) {
    return await axios.get(path);
  }
}

export default new API();
