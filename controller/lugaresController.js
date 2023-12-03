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
    // Verifica se req.body é um array. Se não for, transforma em um array.
    const lugaresData = Array.isArray(req.body) ? req.body : [req.body];

    // Agora, sempre vai ser um array, seja de um ou de vários objetos.
    const novosLugares = await Lugares.bulkCreate(lugaresData);
    res.json(novosLugares);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const atualizarLugar = async (req, res) => {
  const { id_lugares } = req.params;
  try {
    const [updated] = await Lugares.update(req.body, {
      where: { id_lugares: id_lugares },
    });
    if (updated) {
      const lugar = await Lugares.findByPk(id_lugares);
      res.json(lugar);
    } else {
      res.status(404).json({ error: "Lugar não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const excluirLugar = async (req, res) => {
  const { id_lugares } = req.params;
  try {
    const deleted = await Lugares.destroy({
      where: { id_lugares: id_lugares },
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
