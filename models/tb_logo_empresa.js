const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Empresa = require("./tb_empresa");

const Logo = conn.define(
    "tb012_logo_empresa",
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
        id_empresa: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    { freezeTableName: true });

Logo.belongsTo(Empresa, {
    foreignKey: "id_empresa",
    foreignKeyConstraint: true,
});


module.exports = Logo;