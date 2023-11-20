const express = require("express");
const router = express.Router();
const Destinos = require("../models/tb_destino");

const obterDestinos = async (req, res) => {
  try {
    const destinos = await Destinos.findAll();
    res.json(destinos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const criarDestino = async (req, res) => {
  try {
    const novoDestino = await Destinos.create(req.body);
    res.json(novoDestino);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const atualizarDestino = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Destinos.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const destino = await Destinos.findByPk(id);
      res.json(destino);
    } else {
      res.status(404).json({ error: "Destino não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const excluirDestino = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Destinos.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send("Destino excluído com sucesso");
    } else {
      res.status(404).json({ error: "Destino não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  obterDestinos,
  criarDestino,
  atualizarDestino,
  excluirDestino
};
