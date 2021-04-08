const express = require("express");
var router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");

let routes = app => {
  router.get("/kyc", homeController.getHome);

  
  router.post("/upload", uploadController.uploadFile);

  return app.use("/", router);
};

module.exports = routes;
