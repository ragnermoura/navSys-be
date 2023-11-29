const bcrypt = require('bcrypt');
const Usuario = require('../models/tb_usuario');


const criarUsuario = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.senha, saltRounds);

    
    const usuario = await Usuario.create({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      username: req.body.username,
      email: req.body.email,
      senha: hashedPassword,
      nome_agencia: req.body.nome_agencia,
      telefone: req.body.telefone,
      municipio: req.body.municipio,
      id_nivel: req.body.id_nivel,
      id_status: req.body.id_status
    });

    

    res.status(201).send(usuario);
  } catch (error) {

    console.log(error)
    next(error);
  }
};


const obterUsuarios = async (req, res, next) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).send(usuarios);
  } catch (error) {
    next(error);
  }
};


const obterUsuarioPorId = async (req, res, next) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    res.status(200).send(usuario);
  } catch (error) {
    next(error);
  }
};


const atualizarUsuario = async (req, res, next) => {
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { id_user: req.params.id_user }
    });
    if (updated) {
      const updatedUsuario = await Usuario.findByPk(req.params.id_user);
      res.status(200).send(updatedUsuario);
    } else {
      res.status(404).send({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    next(error);
  }
};


const deletarUsuario = async (req, res, next) => {
  try {
    const deleted = await Usuario.destroy({
      where: { id_user: req.params.id_user }
    });
    if (deleted) {
      res.status(200).send({ message: 'Usuário deletado com sucesso' });
    } else {
      res.status(404).send({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  criarUsuario,
  obterUsuarios,
  obterUsuarioPorId,
  atualizarUsuario,
  deletarUsuario
};
