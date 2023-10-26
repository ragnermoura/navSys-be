const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Token = conn.define(
  "tb007_embarcacao",
  {
    id_token: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  { freezeTableName: true }
);

module.exports = Token;