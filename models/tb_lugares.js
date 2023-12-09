const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");
const Empresa = require("./tb_empresa");

const Lugares = conn.define(
  "tb010_lugares",
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
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

Lugares.belongsTo(Empresa, {
  foreignKey: "id_empresa",
  foreignKeyConstraint: true,
});

module.exports = Lugares;
