// Em controllers/avatarController.js
const Avatar = require('../models/tb_foto_usuario'); // Ajuste o caminho conforme necessário
const { imageUpload } = require('../helpers/img-uploader'); 

// Métodos da AvatarController
const getAllAvatars = async (req, res, next) => {
    try {
        const avatars = await Avatar.findAll();
        res.send(avatars);
    } catch (error) {
        next(error);
    }
};

const getAvatarById = async (req, res, next) => {
    try {
        const avatar = await Avatar.findByPk(req.params.id_user);
        if (avatar) {
            res.send(avatar);
        } else {
            res.status(404).send({ message: 'Avatar não encontrado.' });
        }
    } catch (error) {
        next(error);
    }
};

const addAvatarWithImage = [
    imageUpload.single('imagem'), 
    async (req, res, next) => {
        try {
            const newAvatar = await Avatar.create({
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

const updateAvatarWithImage = [
    imageUpload.single('imagem'),
    async (req, res, next) => {
        try {
            const updateData = {
                ...req.body,
            };

            if (req.file) {
                updateData.imagem = req.file.path; 
            }

            const updatedAvatar = await Avatar.update(updateData, {
                where: { id_foto: req.params.id }
            });

            if (updatedAvatar[0] > 0) {
                res.send({ message: 'Avatar atualizado com sucesso.' });
            } else {
                res.status(404).send({ message: 'Avatar não encontrado.' });
            }
        } catch (error) {
            next(error);
        }
    }
];

const deleteAvatar = async (req, res, next) => {
    try {
        const deleted = await Avatar.destroy({
            where: { id_foto: req.params.id }
        });

        if (deleted) {
            res.send({ message: 'Avatar deletado com sucesso.' });
        } else {
            res.status(404).send({ message: 'Avatar não encontrado.' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllAvatars,
    getAvatarById,
    addAvatarWithImage,
    updateAvatarWithImage,
    deleteAvatar,
};
