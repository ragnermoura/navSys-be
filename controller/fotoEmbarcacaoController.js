// Em controllers/fotoEmbarcacaoController.js
const FotoEmbarcacao = require('../models/tb_foto_embarcacao'); // Ajuste o caminho conforme necessário
const { imageUpload } = require('../helpers/img-uploader'); // Importa o middleware de upload


// Métodos da FotoEmbarcacaoController
const getAllFotosEmbarcacao = async (req, res, next) => {
    try {
        const fotos = await FotoEmbarcacao.findAll();
        res.send(fotos);
    } catch (error) {
        next(error);
    }
};

const getFotoEmbarcacaoById = async (req, res, next) => {
    try {
        const foto = await FotoEmbarcacao.findByPk(req.params.id);
        if (foto) {
            res.send(foto);
        } else {
            res.status(404).send({ message: 'Foto de Embarcação não encontrada.' });
        }
    } catch (error) {
        next(error);
    }
};

const addFotoEmbarcacaoWithImage = [
    imageUpload.single('imagem'), 
    async (req, res, next) => {
        try {
            const newAvatar = await FotoEmbarcacao.create({
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

const updateFotoEmbarcacaoWithImage = [
    imageUpload.single('imagem'),
    async (req, res, next) => {
        try {
            const updateData = {
                ...req.body,
            };

            if (req.file) {
                updateData.imagem = req.file.path; 
            }

            const updatedFoto = await FotoEmbarcacao.update(updateData, {
                where: { id_logo: req.params.id }
            });

            if (updatedFoto[0] > 0) {
                res.send({ message: 'Foto de Embarcação atualizada com sucesso.' });
            } else {
                res.status(404).send({ message: 'Foto de Embarcação não encontrada.' });
            }
        } catch (error) {
            next(error);
        }
    }
];

const deleteFotoEmbarcacao = async (req, res, next) => {
    try {
        const deleted = await FotoEmbarcacao.destroy({
            where: { id_logo: req.params.id }
        });

        if (deleted) {
            res.send({ message: 'Foto de Embarcação deletada com sucesso.' });
        } else {
            res.status(404).send({ message: 'Foto de Embarcação não encontrada.' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllFotosEmbarcacao,
    getFotoEmbarcacaoById,
    addFotoEmbarcacaoWithImage,
    updateFotoEmbarcacaoWithImage,
    deleteFotoEmbarcacao,
};
