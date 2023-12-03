const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Rota = require("./tb_rota");
const Empresa = require("./tb_empresa");


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
    id_empresa: {
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
    valor: {
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
    alimentacao: {
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
    status_pagamento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    checkin: {
        type: DataTypes.STRING,
        allowNull: false,
    },


}, { freezeTableName: true });

Passagem.belongsTo(Rota, {
    foreignKey: "id_rota",
    foreignKeyConstraint: true,
});

Passagem.belongsTo(Empresa, {
    foreignKey: "id_empresa",
    foreignKeyConstraint: true,
});




module.exports = Passagem;