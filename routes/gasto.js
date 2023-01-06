console.log("desde routes/gasto");
const express = require("express");
const router = express.Router();
const gastoController = require("../controllers/gastoController");

router.post("/", gastoController.createGasto);
router.get("/", gastoController.listGastos);
router.put("/:id", gastoController.updateGasto);
router.get("/:id", gastoController.getGasto);
router.delete("/:id", gastoController.deleteGasto);


module.exports = router;
