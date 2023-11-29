// Em routes/checkinRoutes.js ou um nome similar
const express = require('express');
const router = express.Router();
const CheckinController = require('../controller/checkinController'); // Ajuste o caminho conforme necessário

// Rota para buscar todos os check-ins
router.get('/checkins', CheckinController.getAllCheckins);

// Rota para buscar um check-in específico pelo ID
router.get('/checkins/:id', CheckinController.getCheckinById);

// Rota para adicionar um novo check-in
router.post('/checkins', CheckinController.addCheckin);

// Rota para atualizar um check-in
router.put('/checkins/:id', CheckinController.updateCheckin);

// Rota para deletar um check-in
router.delete('/checkins/:id', CheckinController.deleteCheckin);

module.exports = router;
