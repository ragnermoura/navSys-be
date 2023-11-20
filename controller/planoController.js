const Plano = require("../models/tb_planos");

const obterPlanos = async (req, res) => {
  try {
    const planos = await Plano.findAll();
    res.json(planos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const criarPlano = async (req, res) => {
  try {
    const { nome, descricao, valor } = req.body;

    const novoPlano = await Plano.create({
      nome,
      descricao,
      valor,
    });

    res.json(novoPlano);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const atualizarPlano = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await Plano.update(req.body, {
      where: { id_plano: id },
    });

    if (updated) {
      const plano = await Plano.findByPk(id);
      res.json(plano);
    } else {
      res.status(404).json({ error: "Plano não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const excluirPlano = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Plano.destroy({
      where: { id_plano: id },
    });

    if (deleted) {
      res.status(204).send("Plano excluído com sucesso");
    } else {
      res.status(404).json({ error: "Plano não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obterPlanos,
  criarPlano,
  atualizarPlano,
  excluirPlano,
};
