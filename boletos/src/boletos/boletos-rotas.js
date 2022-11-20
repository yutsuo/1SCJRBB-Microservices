const boletosControlador = require("./boletos-controlador");

module.exports = (app) => {
  app.route("/boletos").post(boletosControlador.adiciona).get(boletosControlador.buscaBoletos).delete(boletosControlador.deletaBoleto);
};
