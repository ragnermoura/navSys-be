const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Linha = require("./tb_linha");

const Destinos = conn.define(
    "tb011_destinos",
    {
        id_destinos: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        ponto_a: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ponto_b: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_linha: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    { freezeTableName: true });

    Destinos.belongsTo(Linha, {
        foreignKey: "id_linha",
        foreignKeyConstraint: true,
    });


module.exports = Destinos;