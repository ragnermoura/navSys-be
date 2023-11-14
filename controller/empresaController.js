const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const Empresa = require("../models/tb_empresa"); 

// Rota para obter todas as empresas
router.get("/", async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para criar uma nova empresa e gerar um token
router.post("/create", async (req, res) => {
  try {
    const novaEmpresa = await Embarcacao.create(req.body);
    res.json(novaEmpresa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para atualizar uma empresa existente parcialmente
router.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Empresa.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const empresa = await Empresa.findByPk(id);
      res.json(empresa);
    } else {
      res.status(404).json({ error: "Empresa não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para excluir uma empresa
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Empresa.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send("Empresa excluída com sucesso");
    } else {
      res.status(404).json({ error: "Empresa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
