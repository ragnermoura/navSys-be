// Em routes/avatarRoutes.js ou um nome similar
const express = require('express');
const router = express.Router();
const AvatarController = require('../controller/avatarController'); // Ajuste o caminho conforme necessário

// Rota para buscar todos os avatares
router.get('/avatars', AvatarController.getAllAvatars);

// Rota para buscar um avatar específico pelo ID
router.get('/:id_user', AvatarController.getAvatarById);

// Rota para adicionar um novo avatar com imagem
router.post('/cadastrar', AvatarController.addAvatarWithImage);

// Rota para atualizar um avatar, incluindo a imagem
router.put('/avatars/:id', AvatarController.updateAvatarWithImage);

// Rota para deletar um avatar
router.delete('/avatars/:id', AvatarController.deleteAvatar);

module.exports = router;
