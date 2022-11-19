const swagger = require("../swagger");
const notificador = require("../notificador");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("ATH-NOTIFICADOR");
  });

  app.get("/health", (req, res) => {
    res.status(200).json({ status: "Success" });
  });

  swagger.rotas(app);
  notificador.rotas(app);
};
