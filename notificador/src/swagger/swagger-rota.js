const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const pkg = require("../../package.json");

const swaggerDefinition = {
  info: {
    title: pkg.name,
    version: pkg.version,
    description: pkg.description,
  },
  host: process.env.APP_HOST,
  basePath: "/api",
};

const options = {
  swaggerDefinition,
  apis: [
    // path.resolve(path.join("src", "usuarios")) + "/**/*.js",
    path.resolve(path.join("src", "notificador")) + "/**/*.js",
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = function (app) {
  app.get("/swagger.json", async (request, response) => {
    return response.json(swaggerSpec);
  });

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
