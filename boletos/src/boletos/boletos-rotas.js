const boletosControlador = require("./boletos-controlador");

module.exports = (app) => {
  app.route("/boletos/adicionar").post(boletosControlador.adiciona);
};
