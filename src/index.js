const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const requestRoutes = require("./routes/request.routes");
const apiRoutes = require("./routes/api.routes");

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//rutas
app.use(requestRoutes);
app.use(apiRoutes);

module.exports = app;