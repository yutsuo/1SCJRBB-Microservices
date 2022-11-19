require("dotenv").config();
const express = require("express");
const { Monitor } = require("@labbsr0x/express-monitor");
const app = express();

const routes = require("./rotas");

Monitor.init(app, true);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

module.exports = app;
