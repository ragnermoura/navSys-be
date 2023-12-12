const Empresa = require('../models/tb_empresa');

// Criar uma nova empresa
const criarEmpresa = async (req, res, next) => {
  try {
    const empresa = await Empresa.create(req.body);
    res.status(201).send(empresa);
  } catch (error) {
    next(error);
  }
};

// Buscar todas as empresas
const obterEmpresas = async (req, res, next) => {
  try {
    const empresas = await Empresa.findAll();
    res.status(200).send(empresas);
  } catch (error) {
    next(error);
  }
};

// Buscar uma empresa pelo ID
const obterEmpresaPorId = async (req, res, next) => {
  try {
    const empresa = await Empresa.findByPk(req.params.id_empresa);
    if (!empresa) {
      return res.status(404).send({ message: 'Empresa não encontrada' });
    }
    res.status(200).send(empresa);
  } catch (error) {
    next(error);
  }
};

// Atualizar uma empresa pelo ID
const atualizarEmpresa = async (req, res, next) => {
  try {
    const [updated] = await Empresa.update(req.body, {
      where: { id_empresa: req.params.id }
    });
    if (updated) {
      const updatedEmpresa = await Empresa.findByPk(req.params.id);
      res.status(200).send(updatedEmpresa);
    } else {
      res.status(404).send({ message: 'Empresa não encontrada' });
    }
  } catch (error) {
    next(error);
  }
};

// Deletar uma empresa pelo ID
const deletarEmpresa = async (req, res, next) => {
  try {
    const deleted = await Empresa.destroy({
      where: { id_empresa: req.params.id }
    });
    if (deleted) {
      res.status(200).send({ message: 'Empresa deletada com sucesso' });
    } else {
      res.status(404).send({ message: 'Empresa não encontrada' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  criarEmpresa,
  obterEmpresas,
  obterEmpresaPorId,
  atualizarEmpresa,
  deletarEmpresa
};
