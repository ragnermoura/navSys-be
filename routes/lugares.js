const express = require("express");
const router = express.Router();
const lugaresController = require("../controller/lugaresController");

router.get("/", lugaresController.obterLugares);
router.get("/empresa/:id_empresa", lugaresController.obterLugaresPorId);
router.post("/cadastro", lugaresController.criarLugar);
router.patch("/edit/:id_lugares", lugaresController.atualizarLugar);
router.delete("/delete/:id_lugares", lugaresController.excluirLugar);

module.exports = router;
