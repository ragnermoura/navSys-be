const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Lugares = conn.define(
  "tb013_lugares",
  {
    id_lugares: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

module.exports = Lugares;