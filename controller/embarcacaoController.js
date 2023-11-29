const Embarcacao = require("../models/tb_embarcacao");
const jwt = require("jsonwebtoken");

const SECRET_KEY = 'navsysSistemadeGestaodeNavegacao';

exports.criarEmbarcacao = async (req, res) => {
  try {
    // Gerar um token JWT aleatório
    const token = jwt.sign({ nome_embarcacao: req.body.nome_embarcacao }, SECRET_KEY);

    // Adicionar o token ao corpo da requisição
    req.body.token = token;

    // Criar a embarcação
    const novaEmbarcacao = await Embarcacao.create(req.body);
    res.status(201).json(novaEmbarcacao);
  } catch (error) {
    res.status(400).json({ error: error.message });

    console.log(error)
  }
};

exports.obterEmbarcacoes = async (req, res) => {
  try {
    const embarcacoes = await Embarcacao.findAll();
    res.json(embarcacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizarEmbarcacao = async (req, res) => {
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
};

exports.excluirEmbarcacao = async (req, res) => {
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
};
