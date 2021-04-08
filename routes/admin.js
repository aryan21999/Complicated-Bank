
const express = require("express");
var router = express.Router();
const adminController = require("../controllers/admin");
;

let routes = app => {
  router.get("/admin", adminController.getAdmin);

  
  router.post("/", adminController.getAdmin);

  return app.use("/", router);
};

module.exports = routes;