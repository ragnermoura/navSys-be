const express = require("express");
const router = express.Router();
const Empresa = require("../models/tb_empresa");
const bcrypt = require('bcrypt');

const empresaController = require("../controller/empresaController");

router.get("/", empresaController.obterEmpresas);
router.post("/cadastro", empresaController.criarEmpresa);
router.patch("/:id/edit", empresaController.atualizarEmpresa);
router.delete("/:id/delete", empresaController.deletarEmpresa);

module.exports = router;
