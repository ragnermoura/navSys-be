const Passagem = require('../models/tb_passagem');
const Rota = require('../models/tb_rota');

// Criar uma nova passagem
async function criarPassagem(req, res) {
  try {
    const novaPassagem = await Passagem.create(req.body);
    return res.status(201).json({ novaPassagem });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Buscar todas as passagens com informações da Rota
async function buscarTodasPassagens(req, res) {
  try {
    const passagens = await Passagem.findAll({
      include: [{
        model: Rota,
        attributes: ['origem', 'destino', 'data_saida', 'hora_saida', 'data_chegada', 'hora_chegada', 'valor', 'marcador'] // Adicione os campos que você quer incluir da Rota
      }]
    });
    return res.status(200).json({ passagens });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Buscar uma passagem específica pelo ID com informações da Rota
async function buscarPassagemPorId(req, res) {
  const { id } = req.params;
  try {
    const passagem = await Passagem.findByPk(id, {
      include: [{
        model: Rota,
        attributes: ['origem', 'destino', 'data_saida', 'hora_saida', 'data_chegada', 'hora_chegada', 'valor', 'marcador'] // Adicione os campos que você quer incluir da Rota
      }]
    });
    if (!passagem) {
      return res.status(404).json({ error: 'Passagem não encontrada' });
    }
    return res.status(200).json({ passagem });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Atualizar uma passagem existente pelo ID
async function atualizarPassagem(req, res) {
  const { id } = req.params;
  try {
    const [updated] = await Passagem.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPassagem = await Passagem.findByPk(id);
      return res.status(200).json({ updatedPassagem });
    }
    throw new Error('Passagem não encontrada');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Deletar uma passagem pelo ID
async function deletarPassagem(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Passagem.destroy({
      where: { id: id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Passagem não encontrada' });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  criarPassagem,
  buscarTodasPassagens,
  buscarPassagemPorId,
  atualizarPassagem,
  deletarPassagem
};
