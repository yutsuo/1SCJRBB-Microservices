require("dotenv").config();
const express = require("express");
const { Monitor } = require("@labbsr0x/express-monitor");
const app = express();
// const usuarioDao = require("../usuarios/usuarios-dao");
const boletosDAO = require("../boletos/boletos-dao");
const routes = require("./rotas");

Monitor.init(app, true);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
try {
  boletosDAO.criaTabelaBoletos();
} catch (e) {
  console.log("não foi possivelcriar o banco de dados");
}

module.exports = app;
