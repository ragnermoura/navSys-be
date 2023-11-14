const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const Usuario = require("../models/tb_usuario");

// Rota para obter todos os usuários
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para criar um novo usuário
router.post("/create", async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body);
    res.json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para atualizar um usuário existente
router.patch("/edit/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const [updated] = await Usuario.update(req.body, {
        where: { id: id },
      });
      if (updated) {
        const usuario = await Usuario.findByPk(id);
        res.json(usuario);
      } else {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

// Rota para excluir um usuário
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Usuario.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send("Usuário excluído com sucesso");
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
