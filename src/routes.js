const { Router } = require("express");
const MainController = require("./controllers/MainController");
const routes = Router();

routes.get("/down", MainController.index);

module.exports = routes;
