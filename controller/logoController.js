// Em controllers/logoController.js
const Logo = require('../models/tb_logo_empresa'); // Caminho da model Logo
const { imageUpload } = require('../helpers/img-uploader'); // Importa o middleware de upload

// Método para buscar todos os logos
const getAllLogos = async (req, res, next) => {
    try {
        const logos = await Logo.findAll();
        res.send(logos);
    } catch (error) {
        next(error);
    }
};

// Método para buscar um logo pelo ID
const getLogoById = async (req, res, next) => {
    try {
        const logo = await Logo.findByPk(req.params.id_empresa);
        if (logo) {
            res.send(logo);
        } else {
            res.status(404).send({ message: 'Logo não encontrado.' });
        }
    } catch (error) {
        next(error);
    }
};

const addLogoWithImage = [
    imageUpload.single('imagem'), 
    async (req, res, next) => {
        try {
            const newAvatar = await Logo.create({
                ...req.body,
                imagem: req.file.path 
            });
            res.status(201).send(newAvatar);
        } catch (error) {
            next(error);
            console.log(error)
        }
    }
];

// Método para atualizar um logo, incluindo a imagem
const updateLogoWithImage = [
    imageUpload.single('imagem'),
    async (req, res, next) => {
        try {
            const updateData = {
                ...req.body,
            };

            if (req.file) {
                updateData.imagem = req.file.path;
            }

            const updatedLogo = await Logo.update(updateData, {
                where: { id_logo: req.params.id }
            });

            if (updatedLogo[0] > 0) {
                res.send({ message: 'Logo atualizado com sucesso.' });
            } else {
                res.status(404).send({ message: 'Logo não encontrado.' });
            }
        } catch (error) {
            next(error);
        }
    }
];

// Método para deletar um logo
const deleteLogo = async (req, res, next) => {
    try {
        const deleted = await Logo.destroy({
            where: { id_logo: req.params.id }
        });

        if (deleted) {
            res.send({ message: 'Logo deletado com sucesso.' });
        } else {
            res.status(404).send({ message: 'Logo não encontrado.' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllLogos,
    getLogoById,
    addLogoWithImage,
    updateLogoWithImage,
    deleteLogo,
};
