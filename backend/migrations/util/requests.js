const https = require("https");

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
  asyncGet,
};
