// Em controllers/checkinController.js
const Checkin = require('../models/tb_checkin'); 

const CheckinController = {
    // Método para buscar todos os check-ins
    getAllCheckins: async (req, res, next) => {
        try {
            const checkins = await Checkin.findAll();
            res.send(checkins);
        } catch (error) {
            next(error);
        }
    },

    // Método para buscar um check-in pelo ID
    getCheckinById: async (req, res, next) => {
        try {
            const checkin = await Checkin.findByPk(req.params.id);
            if (checkin) {
                res.send(checkin);
            } else {
                res.status(404).send({ message: 'Check-in não encontrado.' });
            }
        } catch (error) {
            next(error);
        }
    },

    // Método para criar um novo check-in
    addCheckin: async (req, res, next) => {
        try {
            const newCheckin = await Checkin.create(req.body);
            res.status(201).send(newCheckin);
        } catch (error) {
            next(error);
        }
    },

    // Método para atualizar um check-in
    updateCheckin: async (req, res, next) => {
        try {
            const updatedCheckin = await Checkin.update(req.body, {
                where: { id_checkin: req.params.id }
            });

            if (updatedCheckin[0] > 0) {
                res.send({ message: 'Check-in atualizado com sucesso.' });
            } else {
                res.status(404).send({ message: 'Check-in não encontrado.' });
            }
        } catch (error) {
            next(error);
        }
    },

    // Método para deletar um check-in
    deleteCheckin: async (req, res, next) => {
        try {
            const deleted = await Checkin.destroy({
                where: { id_checkin: req.params.id }
            });

            if (deleted) {
                res.send({ message: 'Check-in deletado com sucesso.' });
            } else {
                res.status(404).send({ message: 'Check-in não encontrado.' });
            }
        } catch (error) {
            next(error);
        }
    },
};

module.exports = CheckinController;
