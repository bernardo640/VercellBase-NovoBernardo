import conexao from '../config/conexao.js'

const YoutubeSchema = conexao.Schema({
    titulo: { type: String, required: true },
    canal: { type: String, required: true },
    duracao: { type: Number, required: true },
    visualizacoes: { type: Number, required: true },
    upload: { type: String, required: true },
    acoes: { type: String, required: true }
})

export default conexao.model('Youtube', YoutubeSchema)
