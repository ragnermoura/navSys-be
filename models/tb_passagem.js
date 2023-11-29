const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Rota = require("./tb_rota");


const Passagem = conn.define("tb011_passagem", {
    id_passagem: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_rota: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nacimento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    acomodacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nacionalidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    passagem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipoPassagem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estrangeiro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroRequisicao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    obs: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    forma_pagamento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    transporte: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desconto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroVenda: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    agente: {
        type: DataTypes.STRING,
        allowNull: false,
    },


}, { freezeTableName: true });

Passagem.belongsTo(Rota, {
    foreignKey: "id_rota",
    foreignKeyConstraint: true,
});



module.exports = Passagem;