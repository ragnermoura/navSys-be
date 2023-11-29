const Modulos = require('../models/tb_modulos');

const criarModulo = async (req, res) => {
  try {
    const modulo = await Modulos.create(req.body);
    res.status(201).send(modulo);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const listarModulos = async (req, res) => {
  try {
    const modulos = await Modulos.findAll();
    res.status(200).send(modulos);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const obterModulo = async (req, res) => {
  try {
    const modulo = await Modulos.findByPk(req.params.id);
    if (!modulo) {
      return res.status(404).send({ error: 'Módulo não encontrado' });
    }
    res.status(200).send(modulo);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const atualizarModulo = async (req, res) => {
  try {
    const [linhasAfetadas] = await Modulos.update(req.body, { where: { id_modulos: req.params.id } });
    if (linhasAfetadas === 0) {
      return res.status(404).send({ error: 'Módulo não encontrado' });
    }
    res.status(200).send({ message: 'Módulo atualizado com sucesso' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deletarModulo = async (req, res) => {
  try {
    const linhasAfetadas = await Modulos.destroy({ where: { id_modulos: req.params.id } });
    if (linhasAfetadas === 0) {
      return res.status(404).send({ error: 'Módulo não encontrado' });
    }
    res.status(200).send({ message: 'Módulo deletado com sucesso' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  criarModulo,
  listarModulos,
  obterModulo,
  atualizarModulo,
  deletarModulo
};
