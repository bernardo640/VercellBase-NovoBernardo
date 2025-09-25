import conexao from '../config/conexao.js';

const YoutubeSchema = conexao.Schema({
    titulo: { type: String, required: true },
    canal: { 
        type: conexao.Types.ObjectId, 
        ref: 'Canal', // 🔗 relação com Canal
        required: true 
    },
    duracao: { type: Number, required: true },
    visualizacoes: { type: Number, required: true },
    upload: { type: Date, required: true },
    acoes: { type: String, required: true }
});

export default conexao.model('Youtube', YoutubeSchema);
