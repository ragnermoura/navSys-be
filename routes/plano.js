const express = require("express");
const router = express.Router();
const planoController = require("../controller/planoController");

router.get("/", planoController.obterPlanos);
router.post("/cadastro", planoController.criarPlano);
router.patch("/:id/edit", planoController.atualizarPlano);
router.delete("/:id/delete", planoController.excluirPlano);

module.exports = router;
