const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Usuario = require("./tb_usuario");
const Embarcacao = require("./tb_embarcacao");
const Plano = require("./tb_planos");
const Modulos = require("./tb_modulos");

const Empresa = conn.define("tb004_empresa", {
  id_empresa: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  razao_social: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desconto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_desconto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_modulos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_plano: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_embarcacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}, { freezeTableName: true });

Empresa.belongsTo(Usuario, {
  foreignKey: "id_user",
  foreignKeyConstraint: true,
});

Empresa.belongsTo(Modulos, {
  foreignKey: "id_modulos",
  foreignKeyConstraint: true,
});

Empresa.belongsTo(Plano, {
  foreignKey: "id_plano",
  foreignKeyConstraint: true,
});

Empresa.belongsTo(Embarcacao, {
  foreignKey: "id_embarcacao",
  foreignKeyConstraint: true,
});

module.exports = Empresa;
