const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");


const Passagem = conn.define("tb0014_passagem", {
    id_passagem: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    origem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    destino: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    valor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    data_viajem: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    hora_viajem: {
        type: DataTypes.STRING,
        allowNull: false,
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



module.exports = Passagem;