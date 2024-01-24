const axios = require("axios");
const { URL_DEV } = require("../config");

const accessToken = async (req, res) => {
  try {
    //credenciales, debo pedirlas o o deben ser gestionadas
    const params = new URLSearchParams();
    params.append("client_id");
    params.append("client_secret");
    params.append("audience");
    params.append("grant_type");

    const tokenResponse = await axios.post(URL_DEV);

    console.log(tokenResponse);
  } catch (error) {
    console.log("Error AccesToken: " + error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { accessToken };
