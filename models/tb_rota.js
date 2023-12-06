const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Embarcacao = require("./tb_embarcacao");
const Empresa = require("./tb_empresa");


const Rota = conn.define(
    "tb009_rota",
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
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_embarcacao: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        id_empresa: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        valor_transporte: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valor_alimentacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valor_total: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marcador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Agendada"
        },


    },
    { freezeTableName: true });

Rota.belongsTo(Embarcacao, {
    foreignKey: "id_embarcacao",
    foreignKeyConstraint: true,
});

Rota.belongsTo(Empresa, {
    foreignKey: "id_empresa",
    foreignKeyConstraint: true,
});





module.exports = Rota