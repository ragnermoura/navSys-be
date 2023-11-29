// Em helpers/imageUpload.js
const multer = require("multer");
const path = require("path");

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define a pasta de destino com base na URL da requisição
    let folder = "logos"; // Pasta padrão

    if (req.baseUrl.includes('avatar')) {
      folder = "avatars";
    } else if (req.baseUrl.includes('embarcacao')) {
      folder = "embarcacoes"; // Nova pasta para fotos de embarcações
    }
    
    cb(null, `public/${folder}/`); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { // Apenas png, jpg e jpeg
      return cb(new Error("Por favor, envie apenas png, jpg ou jpeg!"));
    }
    cb(undefined, true);
  },
});

module.exports = { imageUpload };
