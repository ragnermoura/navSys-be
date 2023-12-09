const Lugares = require("../models/tb_lugares");

const obterLugares = async (req, res) => {
  try {
    const lugares = await Lugares.findAll();
    res.json(lugares);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterLugaresPorId = async (req, res) => {
  try {
    const { id_empresa } = req.params;

    const lugar = await Lugares.findAll({
      where: { id_empresa: id_empresa }
    });

    if (!lugar || lugar.length === 0) {
      return res.status(404).send({ message: 'Embarcação não encontrados para esta empresa' });
    }

    res.status(200).send(lugar);
  } catch (error) {
    next(error);
  }
};

const criarLugar = async (req, res) => {
  try {
    
    const lugaresData = Array.isArray(req.body) ? req.body : [req.body];

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
  obterLugaresPorId,
  criarLugar,
  atualizarLugar,
  excluirLugar,
};
