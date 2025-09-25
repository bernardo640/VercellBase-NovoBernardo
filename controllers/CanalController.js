import Canal from '../models/canal.js';

export default class CanalController {
    constructor(caminhoBase = 'canal/') {
        this.caminhoBase = caminhoBase;

        this.openAdd = async (req, res) => {
            res.render(this.caminhoBase + "add");
        };

        this.add = async (req, res) => {
            await Canal.create({
                nome: req.body.nome,
                inscritos: req.body.inscritos
            });
            res.redirect('/' + this.caminhoBase + 'add');
        };

        this.list = async (req, res) => {
            const resultado = await Canal.find({});
            res.render(this.caminhoBase + 'lst', { canais: resultado });
        };

        this.find = async (req, res) => {
            const filtro = req.body.filtro;
            const resultado = await Canal.find({
                nome: { $regex: filtro, $options: "i" }
            });
            res.render(this.caminhoBase + 'lst', { canais: resultado });
        };

        this.openEdt = async (req, res) => {
            const id = req.params.id;
            const canal = await Canal.findById(id);
            res.render(this.caminhoBase + "edt", { canal });
        };

        this.edt = async (req, res) => {
            await Canal.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/' + this.caminhoBase + 'lst');
        };

        this.del = async (req, res) => {
            await Canal.findByIdAndDelete(req.params.id);
            res.redirect('/' + this.caminhoBase + 'lst');
        };
    }
}
