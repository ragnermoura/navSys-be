const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Linha = conn.define(
  "tb009_linha",
  {
    id_linha: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    definicao: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  },
  { freezeTableName: true }
);

module.exports = Linha;