const express = require("express");
const router = express.Router();
const destinosController = require("../controller/rotaController");

router.get("/", destinosController.obterDestinos);
router.post("/cadastro", destinosController.criarDestino);
router.patch("/edit/:id", destinosController.atualizarDestino);
router.delete("/delete/:id", destinosController.excluirDestino);

module.exports = router;
