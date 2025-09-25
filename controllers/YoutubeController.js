import Youtube from '../models/youtube.js';

export default class YoutubeController {
  constructor() {
    // Caminho base das views
    this.caminhoBase = 'youtube/';
  }

  // Renderiza formulário de cadastro
  openAdd = (req, res) => {
    res.render(this.caminhoBase + 'add');
  }

  // Cria novo vídeo
  add = async (req, res) => {
    await Youtube.create(req.body);
    res.redirect('/youtube/add');
  }

  // Lista vídeos
  list = async (req, res) => {
    const resultado = await Youtube.find({});
    res.render(this.caminhoBase + 'lst', { Youtube: resultado });
  }

  // Pesquisa vídeos
  find = async (req, res) => {
    const filtro = req.body.filtro || '';
    const resultado = await Youtube.find({ titulo: { $regex: filtro, $options: 'i' } });
    res.render(this.caminhoBase + 'lst', { Youtube: resultado });
  }

  // Renderiza formulário de edição
  openEdt = async (req, res) => {
    const youtube = await Youtube.findById(req.params.id);
    res.render(this.caminhoBase + 'edt', { Youtube: youtube });
  }

  // Atualiza vídeo
  edt = async (req, res) => {
    await Youtube.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/youtube/lst');
  }

  // Deleta vídeo
  del = async (req, res) => {
    await Youtube.findByIdAndDelete(req.params.id);
    res.redirect('/youtube/lst');
  }
}
