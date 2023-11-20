const Usuario = require("../models/tb_usuario");
const bcrypt = require('bcrypt');

const obterUsuarios = async (req, res, next) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const cadastrarUsuario = async (req, res, next) => {
  try {
    const { nome, sobrenome, email, senha, id_status, id_nivel } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    const novoUsuario = await Usuario.create({
      nome,
      sobrenome,
      email,
      senha: hashedPassword,
      id_status,
      id_nivel,
    });

    res.json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const atualizarUsuario = async (req, res, next) => {
  const { id_user } = req.params;
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { id: id_user },
    });
    if (updated) {
      const usuario = await Usuario.findByPk(id_user);
      res.json(usuario);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const excluirUsuario = async (req, res, next) => {
  const { id_user } = req.params;
  try {
    const deleted = await Usuario.destroy({
      where: { id: id_user },
    });
    if (deleted) {
      res.status(204).send("Usuário excluído com sucesso");
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obterUsuarios,
  cadastrarUsuario,
  atualizarUsuario,
  excluirUsuario,
};
