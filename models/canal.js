import mongoose from 'mongoose';
import conexao from '../config/conexao.js';

const canalSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    inscritos: { type: Number, required: true }
});

export default conexao.model('Canal', canalSchema);
