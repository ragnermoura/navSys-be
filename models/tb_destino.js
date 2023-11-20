const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");


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
        data_saida: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hora_saida: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ponto_b: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_chegada: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hora_chegada: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marcador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      
      
    },
    { freezeTableName: true });

  


module.exports = Destinos;