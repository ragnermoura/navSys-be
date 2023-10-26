const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Plano = conn.define(
  "tb006_plano",
  {
    id_plano: {
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

module.exports = Plano;