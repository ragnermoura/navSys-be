const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.obterUsuarios);
router.patch("/:id_user/edit", userController.atualizarUsuario);
router.delete("/:id_user/delete", userController.excluirUsuario);
router.post("/cadastro", userController.cadastrarUsuario);


module.exports = router;
