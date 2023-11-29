const express = require("express");
const router = express.Router();
const modulosController = require("../controller/modulosController");

router.get("/", modulosController.listarModulos);
router.post("/cadastro", modulosController.criarModulo);
router.patch("/edit/:id", modulosController.atualizarModulo);
router.delete("/delete/:id", modulosController.deletarModulo);

module.exports = router;
