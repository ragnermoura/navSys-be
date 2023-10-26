const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Empresa = require("./tb_empresa");

const Financeiro = conn.define(
  "tb018_financeiro",
  {
    id_finaceiro: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    token_banco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

  },
  { freezeTableName: true });

  Financeiro.belongsTo(Empresa, {
    foreignKey: "id_empresa",
    foreignKeyConstraint: true,
});


module.exports = Financeiro;