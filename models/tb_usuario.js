const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Nivel = require("./tb_nivel");
const Status = require("./tb_status");
const Empresa = require("./tb_empresa");

const Usuario = conn.define("tb001_usuario", {
  id_user: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_agencia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  municipio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_empresa: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_nivel: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, { freezeTableName: true });


Usuario.belongsTo(Nivel, {
  foreignKey: "id_nivel",
  foreignKeyConstraint: true,
});

Usuario.belongsTo(Empresa, {
  foreignKey: "id_empresa",
  foreignKeyConstraint: true,
});

Usuario.belongsTo(Status, {
  foreignKey: "id_status",
  foreignKeyConstraint: true,
});


module.exports = Usuario;