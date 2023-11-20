const Lugares = require("../models/tb_lugares");

const obterLugares = async (req, res) => {
  try {
    const lugares = await Lugares.findAll();
    res.json(lugares);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const criarLugar = async (req, res) => {
  try {
    const novoLugar = await Lugares.create(req.body);
    res.json(novoLugar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const atualizarLugar = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Lugares.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const lugar = await Lugares.findByPk(id);
      res.json(lugar);
    } else {
      res.status(404).json({ error: "Lugar não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const excluirLugar = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Lugares.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send("Lugar excluído com sucesso");
    } else {
      res.status(404).json({ error: "Lugar não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obterLugares,
  criarLugar,
  atualizarLugar,
  excluirLugar,
};
