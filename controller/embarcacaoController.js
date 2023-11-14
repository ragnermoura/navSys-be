const express = require("express");
const router = express.Router();
const Embarcacao = require("../models/tb_embarcacao");
const jwt = require("jsonwebtoken");
const segredo = "suaChaveSecreta";

// Rota para obter todas as embarcações
router.get("/", async (req, res) => {
  try {
    const embarcacoes = await Embarcacao.findAll();
    res.json(embarcacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para criar uma nova embarcação
router.post("/create", async (req, res) => {
  try {
    const token = jwt.sign({ id: generateRandomToken(300) }, segredo);

    req.body.token = token;
    const novaEmbarcacao = await Empresa.create(req.body);
    res.json(novaEmbarcacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para atualizar uma embarcação existente
router.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Embarcacao.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const embarcacao = await Embarcacao.findByPk(id);
      res.json(embarcacao);
    } else {
      res.status(404).json({ error: "Embarcação não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para excluir uma embarcação
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Embarcacao.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send("Embarcação excluída com sucesso");
    } else {
      res.status(404).json({ error: "Embarcação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
