// index.js
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Importação das rotas
import routes from './routes/route.js';
import alunoRoutes from './routes/AlunoRoutes.js';
import cursoRoutes from './routes/CursoRoutes.js';
import youtubeRoutes from './routes/YoutubeRoutes.js';
import canalRoutes from './routes/CanalRoutes.js';

const app = express();

// Middleware para receber dados de formulários
app.use(express.urlencoded({ extended: true }));

// Configuração do EJS
app.set('view engine', 'ejs');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('views', join(__dirname, '/views'));

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(join(__dirname, '/public')));

// Configuração das rotas
app.use(alunoRoutes);
app.use(cursoRoutes);
app.use(youtubeRoutes);
app.use(canalRoutes);
app.use(routes);

// Configuração da porta (local ou Vercel)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// Exporta o handler compatível com Vercel
export default app;
