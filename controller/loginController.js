const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/tb_usuario");
const Empresa = require("../models/tb_empresa"); // Importa a model de Empresa

const autenticarUsuario = async (req, res, next) => {
  try {
    const { username, senha } = req.body; // Agora usando username

    // Inclui a empresa relacionada ao buscar o usuário pelo username
    const user = await Usuario.findOne({ 
      where: { username: username },
      include: [{
        model: Empresa,
        attributes: ['id_empresa','razao_social', 'cnpj', 'endereco', 'telefone1', 'telefone2', 'id_modulos', 'id_plano']
      }]
    });

    if (!user) {
      return res.status(401).send({ mensagem: "Falha na autenticação." });
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if (isPasswordValid) {
      const token = jwt.sign(
        {
          id_user: user.id_user,
          nome: user.nome,
          sobrenome: user.sobrenome,
          email: user.email,
          username: user.username,
          id_nivel: user.id_nivel,
          id_status: user.id_status,
          id_empresa: user.id_empresa,
          id_embarcacao: user.id_embarcacao
        },
        process.env.JWT_KEY,
        { expiresIn: "6h" }
      );

      return res.status(200).send({
        mensagem: "Autenticado com sucesso!",
        token: token,
      });
    } else {
      return res.status(401).send({ mensagem: "Falha na autenticação." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  autenticarUsuario,
};
