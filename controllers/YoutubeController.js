import Canal from '../models/canal.js';
import Youtube from '../models/youtube.js';

export default class YoutubeController {
  constructor(caminhoBase = 'youtube/') {
    this.caminhoBase = caminhoBase;

    // Renderiza formulário de cadastro
    this.openAdd = async (req, res) => {
      const canais = await Canal.find({});
      res.render(this.caminhoBase + "add", { canais });
    };

    // Cria novo vídeo
    this.add = async (req, res) => {
      await Youtube.create({
        titulo: req.body.titulo,
        canal: req.body.canal, // ObjectId de Canal
        duracao: req.body.duracao,
        visualizacoes: req.body.visualizacoes,
        upload: req.body.upload,
        acoes: req.body.acoes
      });
      res.redirect('/' + this.caminhoBase + 'add');
    };

    // Lista vídeos (com dados do Canal)
    this.list = async (req, res) => {
      const resultado = await Youtube.find({}).populate("canal");
      res.render(this.caminhoBase + 'lst', { videos: resultado });
    };

    // Pesquisa vídeos por título (com dados do Canal)
    this.find = async (req, res) => {
      const filtro = req.body.filtro || '';
      const resultado = await Youtube.find({
        titulo: { $regex: filtro, $options: "i" }
      }).populate("canal");
      res.render(this.caminhoBase + 'lst', { videos: resultado });
    };

    // Renderiza formulário de edição
    this.openEdt = async (req, res) => {
      const canais = await Canal.find({});
      const youtube = await Youtube.findById(req.params.id).populate("canal");
      res.render(this.caminhoBase + "edt", { youtube, canais });
    };

    // Atualiza vídeo
    this.edt = async (req, res) => {
      await Youtube.findByIdAndUpdate(req.params.id, req.body);
      res.redirect('/' + this.caminhoBase + 'lst');
    };

    // Deleta vídeo
    this.del = async (req, res) => {
      await Youtube.findByIdAndDelete(req.params.id);
      res.redirect('/' + this.caminhoBase + 'lst');
    };
  }
}
