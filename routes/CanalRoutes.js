import express from 'express';
import CanalController from '../controllers/CanalController.js';

const router = express.Router();
const controle = new CanalController();
const caminhobase = 'canal/';

router.get('/' + caminhobase + 'add', controle.openAdd);
router.post('/' + caminhobase + 'add', controle.add);
router.get('/' + caminhobase + 'lst', controle.list);
router.post('/' + caminhobase + 'lst', controle.find);
router.get('/' + caminhobase + 'del/:id', controle.del);
router.get('/' + caminhobase + 'edt/:id', controle.openEdt);
router.post('/' + caminhobase + 'edt/:id', controle.edt);

export default router;
