const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");


const Embarcacao = conn.define("tb008_embarcacao", {
    id_embarcacao: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cap_passageiro: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    cap_carga: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero_camarote: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comodidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
    token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
}, { freezeTableName: true });



module.exports = Embarcacao;