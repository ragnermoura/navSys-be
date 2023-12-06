const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

require('dotenv').config();

//Rotas aqui

const rotaLogin = require('./routes/login');
const rotaUser = require('./routes/usuario');
const rotaNivel = require('./routes/nivel');
const rotaStatus = require('./routes/status');
const rotaPlano = require('./routes/plano');
const rotaEmpresa = require('./routes/empresa');
const rotaEmbarcaco = require('./routes/embarcacao');
const rotaLugares = require('./routes/lugares');
const rotaRota = require('./routes/rota');
const rotaPassagem = require('./routes/passagem');
const rotaModulos = require('./routes/modulos');
const rotaLogo = require('./routes/logo');
const rotaAvatar = require('./routes/avatar');
const rotaFotoEmbarcacao = require('./routes/fotoEmbarcacao');
const rotaCheckin = require('./routes/checkin');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/public', express.static('public'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, OPTIONS')
        return res.status(200).send({})
    }
    next();
})

//EndPoints Aqui
app.use('/login', rotaLogin);
app.use('/usuario', rotaUser);
app.use('/nivel', rotaNivel);
app.use('/status', rotaStatus);
app.use('/planos', rotaPlano);
app.use('/empresa', rotaEmpresa);
app.use('/embarcacao', rotaEmbarcaco);
app.use('/lugares', rotaLugares);
app.use('/rota', rotaRota);
app.use('/passagem', rotaPassagem);
app.use('/modulos', rotaModulos);
app.use('/logo', rotaLogo);
app.use('/avatar', rotaAvatar);
app.use('/fotoEmbarcacao', rotaFotoEmbarcacao);
app.use('/checkin', rotaCheckin);



app.get('/api/test', (req,res) => {
    res.status(200).json({message: 'OK'})
})

app.use(express.static('public'))

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    })
});

module.exports = app;
