const swagger = require("../swagger");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("APIS da Plataforma de liberação");
  });

  app.get("/health", (req, res) => {
    res.status(200).json({ status: "Success" });
  });

  swagger.rotas(app);
};
