const axios = require("axios");
const { accessToken } = require("../api.controller");

const getMenu = async (req, res) => {
  try {
    const bearer = await accessToken();
    const menuResponse = await axios.get(
      "https://microservices.dev.rappi.com/api/v2/restaurants-integrations-public-api/menu",
      { headers: { Authorization: `Bearer ${bearer}` } }
    );
    console.log(menuResponse);
  } catch (error) {
    console.log(`Error de Ordenes getMenu: ` + error);
  }
};

const postMenu = async (req, res) => {
  try {
    const jsonPayload = req.body;
    const token = await accessToken();
    const response = await axios.post(
      "https://microservices.dev.rappi.com/api/v2/restaurants-integrations-public-api/menu",
      jsonPayload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response);
    return res.status(200).json({
      message: "Menu Agregado",
      server_response: response.data,
    });
  } catch (error) {
    console.log(`Error de OrdernesL ` + error);
  }
};

const menuStatus = async (req, res) => {
  try {
    const token = accessToken();
    const storeId = req.params.storeId;
    if (!storeId) {
      return res.status(400).json({
        error: true,
        message: "Se espera un id valido",
      });
    }
    const responseMenu = await axios.get(
      `https://microservices.dev.rappi.com/api/v2/restaurants-integrations-public-api/menu/approved/${storeId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    res.status(200).json({
      message: "Menu estado",
      status: responseMenu.data,
    });
  } catch (error) {
    console.log(`Error de Estado Menu: ` + error);
  }
};

const menuStore = async (req, res) => {
  try {
    const token = accessToken();
    const storeId = req.params.storeId;
    if (!storeId) {
      return res.status(400).json({
        error: true,
        message: "Se espera un id valido",
      });
    }
    const response = await axios.get(
      `https://microservices.dev.rappi.com/api/v2/restaurants-integrations-public-api/menu/rappi/${storeId}`
    );
    console.log(response);
    return res.status(200).json({
      message: "Menu de tienda",
      menu: response.data,
    });
  } catch (error) {
    console.log(`Errod de MenuStore: ` + error);
  }
};

module.exports = { getMenu, postMenu, menuStatus, menuStore };
