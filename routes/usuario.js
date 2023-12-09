const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.obterUsuarios);
router.get("/empresa/:id_empresa", userController.obterUsuariosPorEmpresa);
router.patch("/editar/:id_user", userController.atualizarUsuario);
router.delete("/delete/:id_user", userController.deletarUsuario);
router.post("/cadastro", userController.criarUsuario);


module.exports = router;
