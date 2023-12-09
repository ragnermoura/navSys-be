const express = require("express");
const router = express.Router();
const destinosController = require("../controller/rotaController");

router.get("/", destinosController.obterDestinos);
router.get("/saida/:data_saida/:id_empresa", destinosController.obterDestinosComData);
router.get("/empresa/:id_empresa", destinosController.obterDestinoPorEmpresa);
router.post("/cadastro", destinosController.criarDestino);
router.patch("/edit/:id_lugares", destinosController.atualizarDestino);
router.get("/viagens/dodia", destinosController.obterViagensDoDia);
router.delete("/delete/:id", destinosController.excluirDestino);

module.exports = router;
 