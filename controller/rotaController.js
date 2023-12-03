const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Destinos = require("../models/tb_rota");

const obterDestinos = async (req, res) => {
  try {
    const destinos = await Destinos.findAll();
    res.json(destinos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterDestinosComData = async (req, res, next) => {
  try {
    // Pega os parâmetros da requisição
    const { data_saida, id_empresa } = req.params;

    // Busca destinos pela data de saída e id da empresa
    const destinos = await Destinos.findAll({
      where: {
        data_saida: data_saida,
        id_empresa: id_empresa  // Adiciona o filtro id_empresa
      }
    });

    // Se não encontrar destinos, retorna mensagem de erro
    if (!destinos || destinos.length === 0) {
      return res.status(404).send({ message: 'Destino não encontrado para esta data e empresa' });
    }

    // Se encontrar, retorna os destinos
    res.status(200).send(destinos);
  } catch (error) {
    next(error);
  }
};


const obterDestinoPorEmpresa = async (req, res) => {
  try {
    const { id_empresa } = req.params;

    const destinos = await Destinos.findAll({
      where: {
        id_empresa: id_empresa
      }
    });

    if (!destinos || destinos.length === 0) {
      return res.status(404).send({ message: 'Destino não encontrado para esta data e empresa' });
    }

    res.status(200).send(destinos);
  } catch (error) {
    next(error);
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

const obterViagensDoDia = async (req, res) => {
  try {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Define para o início do dia
    const amanha = new Date(hoje);
    amanha.setDate(hoje.getDate() + 1); // Define para o final do dia

    const viagens = await Destinos.findAll({
      where: {
        data_saida: {
          [Op.gte]: hoje,
          [Op.lt]: amanha
        },
        origem: req.query.origem, // Supondo que a origem é passada como query
        status: "Em andamento"
      }
    });

    res.json(viagens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const excluirDestino = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Destinos.destroy({
      where: { id_rota: id },
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
  obterDestinosComData,
  criarDestino,
  atualizarDestino,
  excluirDestino,
  obterViagensDoDia,
  obterDestinoPorEmpresa
};
