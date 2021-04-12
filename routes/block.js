
const express = require("express");
var router = express.Router();
const adminController = require("../controllers/block");
;

let routes = app => {
  router.get("/block", blockController.getBlock);

  router.post("/", blockController.getBlock);

  return app.use("/", router);
};

module.exports = routes;