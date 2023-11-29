// Em routes/logoRoutes.js ou um nome similar
const express = require('express');
const router = express.Router();
const LogoController = require('../controller/logoController'); // Ajuste o caminho conforme necessário

// Rota para buscar todos os logos
router.get('/logos', LogoController.getAllLogos);

// Rota para buscar um logo específico pelo ID
router.get('/logos/:id', LogoController.getLogoById);

// Rota para adicionar um novo logo com imagem
router.post('/cadastro', LogoController.addLogoWithImage);

// Rota para atualizar um logo, incluindo a imagem
router.put('/logos/:id', LogoController.updateLogoWithImage);

// Rota para deletar um logo
router.delete('/logos/:id', LogoController.deleteLogo);

module.exports = router;
