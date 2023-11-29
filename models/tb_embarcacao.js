const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");
const Empresa = require("./tb_empresa");


const Embarcacao = conn.define("tb008_embarcacao", {
    id_embarcacao: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_embarcacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cap_passageiro: {
        type: DataTypes.STRING,
        allowNull: false,
       
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
    acentos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
}, { freezeTableName: true });

Embarcacao.belongsTo(Empresa, {
    foreignKey: "id_empresa",
    foreignKeyConstraint: true,
});




module.exports = Embarcacao;