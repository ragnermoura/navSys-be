const express = require("express");
const router = express.Router();
const embarcacaoController = require("../controller/embarcacaoController");

router.get("/", embarcacaoController.obterEmbarcacoes);
router.post("/cadastro", embarcacaoController.criarEmbarcacao);
router.patch("/edit/:id", embarcacaoController.atualizarEmbarcacao);
router.delete("/delete/:id", embarcacaoController.excluirEmbarcacao);

module.exports = router;