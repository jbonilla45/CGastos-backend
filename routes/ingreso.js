console.log("desde routes/ingreso");
const express = require("express");
const routerIngreso = express.Router();
const ingresoController = require("../controllers/ingresoController");

routerIngreso.post("/", ingresoController.createIngreso);
routerIngreso.get("/", ingresoController.listIngreso);
routerIngreso.get("/:id", ingresoController.getIngreso);
routerIngreso.put("/:id", ingresoController.updateIngreso);
routerIngreso.delete("/:id", ingresoController.deleteIngreso);

module.exports = routerIngreso;
