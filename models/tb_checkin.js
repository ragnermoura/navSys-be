const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Passagem = require("./tb_embarcacao");


const Checkin = conn.define(
    "tb007_checkin",
    {
        id_checkin: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        id_passagem: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nome_passageiro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        origem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destino: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero_passagem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status_pagamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status_ckeckin: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    },
    { freezeTableName: true });

Checkin.belongsTo(Passagem, {
    foreignKey: "id_passagem",
    foreignKeyConstraint: true,
});




module.exports = Checkin;