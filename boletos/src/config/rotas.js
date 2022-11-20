const swagger = require("../swagger");
const boletos = require("../boletos");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("APIS da Plataforma de liberação");
  });

  app.get("/health", (req, res) => {
    res.status(200).json({ status: "Success" });
  });

  swagger.rotas(app);
  boletos.rotas(app);
};
