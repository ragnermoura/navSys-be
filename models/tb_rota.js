const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Embarcacao = require("./tb_embarcacao");


const Rota = conn.define(
    "tb011_rota",
    {
        id_rota: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        origem: {
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
        destino: {
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
        id_embarcacao: {
            type: DataTypes.INTEGER,
            allowNull: true,
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

Rota.belongsTo(Embarcacao, {
    foreignKey: "id_embarcacao",
    foreignKeyConstraint: true,
});




module.exports = Rota