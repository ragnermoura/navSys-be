const Empresa = require("../models/tb_empresa");
const Usuario = require("../models/tb_usuario");
const Embarcacao = require("../models/tb_embarcacao");
const Plano = require("../models/tb_planos");
const Modulos = require("../models/tb_modulos");

const obterEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll({
      include: [Usuario, Embarcacao, Plano, Modulos],
    });
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const criarEmpresa = async (req, res) => {
  try {
    const {
      razao_social,
      cnpj,
      endereco,
      telefone1,
      telefone2,
      logo,
      desconto,
      valor_desconto,
      id_user,
      id_modulos,
      id_plano,
      id_embarcacao,
    } = req.body;

    const novaEmpresa = await Empresa.create({
      razao_social,
      cnpj,
      endereco,
      telefone1,
      telefone2,
      logo,
      desconto,
      valor_desconto,
      id_user,
      id_modulos,
      id_plano,
      id_embarcacao,
    });

    res.json(novaEmpresa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const atualizarEmpresa = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await Empresa.update(req.body, {
      where: { id: id },
    });

    if (updated) {
      const empresa = await Empresa.findByPk(id, {
        include: [Usuario, Embarcacao, Plano, Modulos],
      });
      res.json(empresa);
    } else {
      res.status(404).json({ error: "Empresa não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const excluirEmpresa = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Empresa.destroy({
      where: { id: id },
    });

    if (deleted) {
      res.status(204).send("Empresa excluída com sucesso");
    } else {
      res.status(404).json({ error: "Empresa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obterEmpresas,
  criarEmpresa,
  atualizarEmpresa,
  excluirEmpresa,
};
