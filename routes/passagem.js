const express = require('express');
const router = express.Router();
const passagemController = require('../controller/passagemController');

// Rota para criar uma nova passagem
router.post('/emitir', passagemController.criarPassagem);

// Rota para buscar todas as passagens
router.get('/passagens', passagemController.buscarTodasPassagens);

// Rota para buscar uma passagem específica pelo ID
router.get('/passagens/:id', passagemController.buscarPassagemPorId);

// Rota para atualizar uma passagem existente pelo ID
router.put('/passagens/:id', passagemController.atualizarPassagem);

// Rota para deletar uma passagem pelo ID
router.delete('/passagens/:id', passagemController.deletarPassagem);

module.exports = router;
