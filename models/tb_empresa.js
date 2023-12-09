const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

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
    
  },
  telefone1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_modulos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_plano: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  

}, { freezeTableName: true });


Empresa.belongsTo(Modulos, {
  foreignKey: "id_modulos",
  foreignKeyConstraint: true,
});

Empresa.belongsTo(Plano, {
  foreignKey: "id_plano",
  foreignKeyConstraint: true,
});


module.exports = Empresa;
