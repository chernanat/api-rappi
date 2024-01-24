const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Request = sequelize.define("Request", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  url_solicitud: {
    type: DataTypes.STRING,
  },
  interlocutor_id: {
    type: DataTypes.INTEGER,
  },
  json_solicitud: {
    type: DataTypes.STRING,
  },
  json_respuesta: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING,
  },
});

module.exports = Request;
