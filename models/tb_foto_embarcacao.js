const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Embarcacao = require("./tb_embarcacao");

const FotoEmbarcacao = conn.define(
    "tb014_logo_empresa",
    {
        id_logo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_embarcacao: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    { freezeTableName: true });

FotoEmbarcacao.belongsTo(Embarcacao, {
    foreignKey: "id_embarcacao",
    foreignKeyConstraint: true,
});


module.exports = FotoEmbarcacao;