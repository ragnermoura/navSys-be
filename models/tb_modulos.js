const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Modulos = conn.define(
  "tb005_modulos",
  {
    id_modulos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  { freezeTableName: true }
);

module.exports = Modulos;