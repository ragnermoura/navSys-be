// Em routes/fotoEmbarcacaoRoutes.js ou um nome similar
const express = require('express');
const router = express.Router();
const FotoEmbarcacaoController = require('../controller/fotoEmbarcacaoController'); // Ajuste o caminho conforme necessário

// Rota para buscar todas as fotos de embarcações
router.get('/fotos-embarcacao', FotoEmbarcacaoController.getAllFotosEmbarcacao);

// Rota para buscar uma foto específica de embarcação pelo ID
router.get('/fotos-embarcacao/:id', FotoEmbarcacaoController.getFotoEmbarcacaoById);

// Rota para adicionar uma nova foto de embarcação com imagem
router.post('/fotos-embarcacao', FotoEmbarcacaoController.addFotoEmbarcacaoWithImage);

// Rota para atualizar uma foto de embarcação, incluindo a imagem
router.put('/fotos-embarcacao/:id', FotoEmbarcacaoController.updateFotoEmbarcacaoWithImage);

// Rota para deletar uma foto de embarcação
router.delete('/fotos-embarcacao/:id', FotoEmbarcacaoController.deleteFotoEmbarcacao);

module.exports = router;
