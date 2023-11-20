const express = require("express");
const router = express.Router();
const lugaresController = require("../controller/lugaresController");

router.get("/", lugaresController.obterLugares);
router.post("/cadastro", lugaresController.criarLugar);
router.patch("/edit/:id", lugaresController.atualizarLugar);
router.delete("/delete/:id", lugaresController.excluirLugar);

module.exports = router;
